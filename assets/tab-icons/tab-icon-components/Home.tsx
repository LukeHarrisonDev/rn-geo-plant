import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */
import type { SvgProps } from "react-native-svg";

interface IconProps extends SvgProps {
  color: string;
  size: number;
}

const SvgHome: React.FC<IconProps> = ({ color, size, ...props }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 362 272"
    fill="none"
    {...props}
  >
    <G fill={color} filter="url(#home_svg__a)">
      <Path d="M174.433 5.719a10 10 0 0 1 13.134 0l130.04 113.24c6.972 6.071 2.678 17.541-6.567 17.541H50.96c-9.245 0-13.54-11.47-6.567-17.541z" />
      <Path
        fillRule="evenodd"
        d="M87 91c-5.523 0-10 4.477-10 10v153c0 5.523 4.477 10 10 10h55c5.523 0 10-4.477 10-10v-62c0-5.523 4.477-10 10-10h37c5.523 0 10 4.477 10 10v62c0 5.523 4.477 10 10 10h56c5.523 0 10-4.477 10-10V101c0-5.523-4.477-10-10-10z"
        clipRule="evenodd"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default SvgHome;
