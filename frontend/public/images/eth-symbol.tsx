import { SVGProps } from "react";

export default function EthSymbol(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1920 1920"
    >
      <path
        d="m959.8 730.9-539.8 245.4 539.8 319.1 539.9-319.1z"
        opacity=".6"
      />
      <path d="m420.2 976.3 539.8 319.1v-564.5-650.3z" opacity=".45" />
      <path d="m960 80.6v650.3 564.5l539.8-319.1z" opacity=".8" />
      <path d="m420 1078.7 539.8 760.7v-441.8z" opacity=".45" />
      <path d="m959.8 1397.6v441.8l540.2-760.7z" opacity=".8" />
    </svg>
  );
}
