import liascriptify from "../node_modules/@liascript/markdownify/dist/lib.js";

export default function libLiaScr(json: any) {
  return liascriptify(json) as Promise<string>;
}
