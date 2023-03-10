import {
  registerLanguage
} from "./chunk-IGEGLVX3.js";

// node_modules/monaco-editor/esm/vs/basic-languages/xml/xml.contribution.js
registerLanguage({
  id: "xml",
  extensions: [
    ".xml",
    ".dtd",
    ".ascx",
    ".csproj",
    ".config",
    ".wxi",
    ".wxl",
    ".wxs",
    ".xaml",
    ".svg",
    ".svgz",
    ".opf",
    ".xsl"
  ],
  firstLine: "(\\<\\?xml.*)|(\\<svg)|(\\<\\!doctype\\s+svg)",
  aliases: ["XML", "xml"],
  mimetypes: ["text/xml", "application/xml", "application/xaml+xml", "application/xml-dtd"],
  loader: () => {
    if (false) {
      return new Promise((resolve, reject) => {
        __require(["vs/basic-languages/xml/xml"], resolve, reject);
      });
    } else {
      return import("./xml-AA62VV26.js");
    }
  }
});
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.1(547870b6881302c5b4ff32173c16d06009e3588f)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
//# sourceMappingURL=chunk-OAOQHMXZ.js.map
