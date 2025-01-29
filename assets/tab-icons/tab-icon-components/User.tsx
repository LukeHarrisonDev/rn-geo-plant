import * as React from "react";
import Svg, { G, Circle, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import type { SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  color: string;
  size: number;
}

const SvgUser: React.FC<IconProps> = ({ color, size, ...props }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 264 246"
    fill="none"
    {...props}
  >
    <G filter="url(#user_svg__a)">
      <Circle cx={131.5} cy={58.5} r={58.5} fill="#000" />
    </G>
    <G filter="url(#user_svg__b)">
      <Path
        fill={color}
        fillRule="evenodd"
        d="M259.209 218c3.083 10.566-5.777 20-16.783 20H21.574c-11.006 0-19.866-9.434-16.783-20C18.865 169.771 70.48 134 132 134s113.135 35.771 127.209 84"
        clipRule="evenodd"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default SvgUser;
