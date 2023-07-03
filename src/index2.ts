import {
    ScriptTarget,
    SyntaxKind,
    Project
} from "ts-morph";
import { parse } from "@vue/compiler-sfc";
export const convertSrc = (input: string): string => {
    const {
        descriptor: { script },
    } = parse(input);
    const project = new Project({
        compilerOptions: {
            target: ScriptTarget.Latest,
        },
        useInMemoryFileSystem: true,
    });
    const sourceFile = project.createSourceFile("s.tsx", script?.content ?? "");
    const statements = sourceFile.getStatements()
    const importStatements = statements.filter(statement => statement.getKind() === SyntaxKind.ImportDeclaration)
    return importStatements.toString();

};