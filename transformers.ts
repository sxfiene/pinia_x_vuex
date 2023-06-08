import { Project, ScriptTarget } from "ts-morph";
const project = new Project({
    compilerOptions: {
        tsConfigFilePath: "tsconfig.json",

    },
});
const sourceFile = project.addSourceFileAtPathIfExists("src/stores/index.js");
const transformer = (context) => {
    return (rootNode) => {
        function visit(node) {
            if (node.getKindName() === "ClassDeclaration") {
                console.log("ClassDeclaration", node.getName());
            }
            node.forEachChild(visit);
        }
        return rootNode.forEachChild(visit);
    };
}