const path = require("path");

function defaultIndexTemplate(filePaths) {
    const exportEntries = filePaths.map(filePath => {
        const basename = path.basename(filePath, path.extname(filePath));
        const exportName = basename.replace(/-/g, "");
        return `export { default as Icon${exportName} } from './${basename}'`;
    });
    return exportEntries.join("\n");
}

module.exports = defaultIndexTemplate;
