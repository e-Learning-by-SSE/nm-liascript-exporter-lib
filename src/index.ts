import liascriptify from "@liascript/markdownify/dist/lib";

export default function libLiaScr(json: any) {
  return liascriptify(json) as Promise<string>;
}
