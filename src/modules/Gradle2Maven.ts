import * as fs from 'fs';

const ts = fs.readdirSync('files-2.1');

function walk (dir) {
    var results = []
    var list = fs.readdirSync(dir)
    list.forEach(function(file) {
        file = dir + '/' + file
        var stat = fs.statSync(file)
        if (stat && stat.isDirectory()) results = results.concat(walk(file))
        else results.push(file)
    })
    return results
}
for(let root of ts){
    const child = fs.readdirSync(`files-2.1/${root}`);
    for(let one of child){
        if(one === '.DS_Store') continue;
        const files = walk(`files-2.1/${root}/${one}`);
        const title = root.split('.').join('/'),
        remain = files[0].split('/').slice(2).slice(0, -2).join('/'),
        full_path = `${title}/${remain}`;
        fs.mkdirSync(`output/${full_path}`, {
            recursive: true
        });
        for(let f of files){
            const file_name = f.split('/').slice(-1);
            fs.copyFileSync(f, `output/${full_path}/${file_name}`)
        }
    }
}
