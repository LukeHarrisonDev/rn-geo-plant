import * as React from "react";
import Svg, { G, Ellipse, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import type { SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  color: string;
  size: number;
}

const SvgChat: React.FC<IconProps> = ({ color, size, ...props }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 271 211"
    fill="none"
    {...props}
  >
    <G fill={color} filter="url(#chat_svg__a)">
      <Ellipse cx={135.5} cy={94} rx={131.5} ry={94} />
      <Path d="M211.901 127.459c3.579-3.837 9.922-1.55 10.245 3.687 1.178 19.103 3.365 37.168 18.818 60.885 2.462 3.778.324 8.976-4.163 9.437-25.543 2.622-42.747-1.98-68.281-16.989-3.262-1.917-3.857-6.362-1.277-9.13z" />
    </G>
    <Defs></Defs>
  </Svg>
);
export default SvgChat;
