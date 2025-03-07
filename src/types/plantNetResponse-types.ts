// To parse this data:
//
//   import { Convert, Welcome } from "./file";
//
//   const welcome = Convert.toWelcome(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export type Welcome = {
    query:                           Query;
    predictedOrgans:                 PredictedOrgan[];
    language:                        string;
    preferedReferential:             string;
    bestMatch:                       string;
    results:                         Result[];
    version:                         string;
    remainingIdentificationRequests: number;
}

export type PredictedOrgan = {
    image:    string;
    filename: string;
    organ:    Organ;
    score:    number;
}

export type Organ = "flower" | "habit" | "fruit" | "leaf";

export type Query = {
    project:              string;
    images:               string[];
    organs:               string[];
    includeRelatedImages: boolean;
    noReject:             boolean;
    type:                 null;
}

export type Result = {
    score:   number;
    species: Species;
    images:  Image[];
    gbif:    Gbif;
    powo:    Gbif;
}

export type Gbif = {
    id: string;
}

export type Image = {
    organ:    Organ;
    author:   string;
    license:  License;
    date:     DateClass;
    url:      URL;
    citation: string;
}

export type DateClass = {
    timestamp: number;
    string:    string;
}

export type License = "cc-by-sa" | "©";

export type URL = {
    o: string;
    m: string;
    s: string;
}

export type Species = {
    scientificNameWithoutAuthor: string;
    scientificNameAuthorship:    string;
    genus:                       Family;
    family:                      Family;
    commonNames:                 string[];
    scientificName:              string;
}

export type Family = {
    scientificNameWithoutAuthor: ScientificName;
    scientificNameAuthorship:    string;
    scientificName:              ScientificName;
}

export type ScientificName = "Asteraceae" | "Cirsium" | "Carduus";

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toWelcome(json: string): Welcome {
        return cast(JSON.parse(json), r("Welcome"));
    }

    public static welcomeToJson(value: Welcome): string {
        return JSON.stringify(uncast(value, r("Welcome")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Welcome": o([
        { json: "query", js: "query", typ: r("Query") },
        { json: "predictedOrgans", js: "predictedOrgans", typ: a(r("PredictedOrgan")) },
        { json: "language", js: "language", typ: "" },
        { json: "preferedReferential", js: "preferedReferential", typ: "" },
        { json: "bestMatch", js: "bestMatch", typ: "" },
        { json: "results", js: "results", typ: a(r("Result")) },
        { json: "version", js: "version", typ: "" },
        { json: "remainingIdentificationRequests", js: "remainingIdentificationRequests", typ: 0 },
    ], false),
    "PredictedOrgan": o([
        { json: "image", js: "image", typ: "" },
        { json: "filename", js: "filename", typ: "" },
        { json: "organ", js: "organ", typ: r("Organ") },
        { json: "score", js: "score", typ: 3.14 },
    ], false),
    "Query": o([
        { json: "project", js: "project", typ: "" },
        { json: "images", js: "images", typ: a("") },
        { json: "organs", js: "organs", typ: a("") },
        { json: "includeRelatedImages", js: "includeRelatedImages", typ: true },
        { json: "noReject", js: "noReject", typ: true },
        { json: "type", js: "type", typ: null },
    ], false),
    "Result": o([
        { json: "score", js: "score", typ: 3.14 },
        { json: "species", js: "species", typ: r("Species") },
        { json: "images", js: "images", typ: a(r("Image")) },
        { json: "gbif", js: "gbif", typ: r("Gbif") },
        { json: "powo", js: "powo", typ: r("Gbif") },
    ], false),
    "Gbif": o([
        { json: "id", js: "id", typ: "" },
    ], false),
    "Image": o([
        { json: "organ", js: "organ", typ: r("Organ") },
        { json: "author", js: "author", typ: "" },
        { json: "license", js: "license", typ: r("License") },
        { json: "date", js: "date", typ: r("DateClass") },
        { json: "url", js: "url", typ: r("URL") },
        { json: "citation", js: "citation", typ: "" },
    ], false),
    "DateClass": o([
        { json: "timestamp", js: "timestamp", typ: 0 },
        { json: "string", js: "string", typ: "" },
    ], false),
    "URL": o([
        { json: "o", js: "o", typ: "" },
        { json: "m", js: "m", typ: "" },
        { json: "s", js: "s", typ: "" },
    ], false),
    "Species": o([
        { json: "scientificNameWithoutAuthor", js: "scientificNameWithoutAuthor", typ: "" },
        { json: "scientificNameAuthorship", js: "scientificNameAuthorship", typ: "" },
        { json: "genus", js: "genus", typ: r("Family") },
        { json: "family", js: "family", typ: r("Family") },
        { json: "commonNames", js: "commonNames", typ: a("") },
        { json: "scientificName", js: "scientificName", typ: "" },
    ], false),
    "Family": o([
        { json: "scientificNameWithoutAuthor", js: "scientificNameWithoutAuthor", typ: r("ScientificName") },
        { json: "scientificNameAuthorship", js: "scientificNameAuthorship", typ: "" },
        { json: "scientificName", js: "scientificName", typ: r("ScientificName") },
    ], false),
    "Organ": [
        "flower",
        "fruit",
        "habit",
        "leaf",
    ],
    "License": [
        "cc-by-sa",
        "©",
    ],
    "ScientificName": [
        "Asteraceae",
        "Carduus",
        "Cirsium",
    ],
};
