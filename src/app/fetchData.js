const fs = require('fs');
import path from 'path';

export function getProjectData() {
    const filepath = "./public/projects";

    const filenames = fs.readdirSync(filepath)
    const fileData = filenames.map((name) => {
        const content = fs.readFileSync(path.join(filepath, name)).toString().split(/\r?\n/);
        let data = {
            name: content[0],
            url: content[1],
            date: content[2],
            desc: []
        }
        for (let i = 3; i < content.length; i++) {
            data['desc'].push(content[i])
        }
        return data
    })
    return fileData
}