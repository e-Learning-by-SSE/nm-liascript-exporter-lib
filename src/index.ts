import liascriptify from "@liascript/markdownify/dist/lib.js";
// the default is needed as the function is the default export and needs to be named differently to be reexported in the index.ts

export default function liaScriptify(json: any) {
  return liascriptify(json) as Promise<string>;
}
