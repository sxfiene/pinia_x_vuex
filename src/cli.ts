import program from 'commander'
import {convertSrc} from './index2.js'
import * as fs from 'fs'
program
    .usage('<command>')
program
    .command('one <filePath>')
    .action(async (dirPath: string) => {
        fs.readdir(dirPath, function (_err: any, items: string | any[]) {
            for (let i = 0; i < items.length; i++) {
                const currentfile = `path ${'/'} items[i]`
                const { result } = convertSrc(currentfile)
                console.log(result)
            }
        })
    })
program.parse(process.argv)