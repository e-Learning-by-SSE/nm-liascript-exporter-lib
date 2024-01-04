import liascriptify from "@liascript/markdownify/dist/lib.js";

export default function libLiaScr(json: any) {
  return liascriptify(json) as Promise<string>;
}
