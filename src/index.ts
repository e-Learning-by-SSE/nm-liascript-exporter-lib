import liascriptify from "@liascript/markdownify/dist/lib.js";

export default function liaScriptify (json: any) {
  return liascriptify(json) as Promise<string>;
}
