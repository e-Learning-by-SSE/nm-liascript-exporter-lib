import liascriptify from "../node_modules/@liascript/markdownify/dist/lib";

export default function libLiaScr(json: any) {
  return liascriptify(json) as Promise<string>;
}
