declare module "*.svg?react" {
  import * as React from "react";
  const Svg: React.FC<React.SVGProps<SVGSVGElement>>;
  export default Svg;
}
