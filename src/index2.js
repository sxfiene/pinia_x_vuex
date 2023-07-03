"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertSrc = void 0;
const ts_morph_1 = require("ts-morph");
const compiler_sfc_1 = require("@vue/compiler-sfc");
const convertSrc = (input) => {
    var _a;
    const { descriptor: { script }, } = (0, compiler_sfc_1.parse)(input);
    const project = new ts_morph_1.Project({
        compilerOptions: {
            target: ts_morph_1.ScriptTarget.Latest,
        },
        useInMemoryFileSystem: true,
    });
    const sourceFile = project.createSourceFile("s.tsx", (_a = script === null || script === void 0 ? void 0 : script.content) !== null && _a !== void 0 ? _a : "");
    const statements = sourceFile.getStatements();
    const importStatements = statements.filter(statement => statement.getKind() === ts_morph_1.SyntaxKind.ImportDeclaration);
    return importStatements.toString();
};
exports.convertSrc = convertSrc;
