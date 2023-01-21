import {
  registerLanguage
} from "./chunk-IGEGLVX3.js";

// node_modules/monaco-editor/esm/vs/basic-languages/css/css.contribution.js
registerLanguage({
  id: "css",
  extensions: [".css"],
  aliases: ["CSS", "css"],
  mimetypes: ["text/css"],
  loader: () => {
    if (false) {
      return new Promise((resolve, reject) => {
        __require(["vs/basic-languages/css/css"], resolve, reject);
      });
    } else {
      return import("./css-IULEZ2VO.js");
    }
  }
});
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.1(547870b6881302c5b4ff32173c16d06009e3588f)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
//# sourceMappingURL=chunk-CYUA4BKW.js.map
