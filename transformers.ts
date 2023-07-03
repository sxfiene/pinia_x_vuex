const { Project } = require("ts-morph");

const project = new Project();
const filePath = "src/stores/index.js";

const sourceFile = project.addSourceFileAtPath(filePath);

if (sourceFile) {
    const functions = sourceFile.getFunctions();
    const variableStatements = sourceFile.getVariableStatements();


    console.log("Has function:", functions.length > 0);
    console.log("Has variable statement:", variableStatements.length > 0);
} else {
    console.log("Source file not found.");
}