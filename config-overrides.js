const { override, fixBabelImports, addLessLoader } = require("customize-cra");

const modifyVar = require("./src/lessVars");

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars:modifyVar
  }),
  (module.exports = override(
    fixBabelImports("import", {
      libraryName: "antd-mobile",
      libraryDirectory: "es",
      style: true
    })
  ))
);
