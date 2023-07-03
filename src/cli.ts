import { program } from 'commander';
import { convertSrc } from './index2';
import * as fs from 'fs';

program
    .usage('<command>');

program
    .command('one <filePath>')
    .action(async (filePath: string) => {
        fs.readdir(filePath, (_err: any, items: string[]) => {
            for (let i = 0; i < items.length; i++) {
                const currentfile = `${filePath}/${items[i]}`;
                const result = convertSrc(currentfile);
                console.log(result);
            }
        });
    });

program.parse(process.argv);