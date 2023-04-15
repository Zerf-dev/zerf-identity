import { Projects, Roles, UserData } from "@prisma/client";
const util = require('util');

const exec = util.promisify(require('child_process').exec);

const roleToText = {
    [Roles.CEO]: "a book",
    [Roles.COO]: "a basketball",
    [Roles.CTO]: "a laptop",
    [Roles.DESIGNER]: "using a pencil",
    [Roles.DEVELOPER]: "a laptop",
    [Roles.PEOPLE]: "a dog",
    [Roles.PM]: "a hammer",
    [Roles.PO]: "a builder",
    [Roles.QA]: "a hand",
}

const projectToText = {
    [Projects.ADELPHI]: "in scotland",
    [Projects.BH]: "in a luxury beach",
    [Projects.DEVI]: "a lamp",
    [Projects.PJ]: "a pizza",
    [Projects.PRIOR]: "in a plain",
    [Projects.UBUNTU]: "a brifcase",
    [Projects.YU]: "with a hearth",
    [Projects.LICITA]: "a dollar bill",
}

export const mapUserDataToString = (data: UserData) => {
    let string = 'a purple zerfito with '
    string = string += (roleToText[data.role])
    string= string += ' and '
    string= string += projectToText[data.project]
    string= string += `, ${data.hairColor} hair`
    string= string += `, ${data.eyes} eyes`
    string= string += ' nft style, art digital illustration close portrait'
    return string
}

async function query(data: string) {
    const url = 'https://api-inference.huggingface.co/models/lucascheist/zerfito2';
    const options = ` -X POST \
    -d ${data} \
    -H "Authorization: Bearer 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" --output avatar.jpg`;
    
    const { stdout, stderr } = await exec(`curl ${url} ${options}`);
    return 
}

export const generateAvatar = (prompt: string) => {
    return query(`'{"inputs":"${prompt}","options":{"use_cache":false, "wait_for_model": true}}'`)
}