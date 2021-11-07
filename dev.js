import {genJoinUrl, getCredFromUrl} from "./scripts/utils.js";
import {config} from "dotenv";
import {writeFileSync, readFileSync} from "fs"

config()
// https://github.com/electron/electron/blob/main/docs/api/app.md#appgetpathname
// console.log(process.env.ZOOM_LINK)
// console.log(...Object.values(getCredFromUrl(process.env.ZOOM_LINK)))
// console.log(genJoinUrl(...Object.values(getCredFromUrl(process.env.ZOOM_LINK))))
// console.log(JSON.stringify(getCredFromUrl(process.env.ZOOM_LINK)))
// writeFileSync('userdata.json', JSON.stringify(getCredFromUrl(process.env.ZOOM_LINK)))
// const data = readFileSync('userdata.json', 'utf-8')
// const userdata = JSON.parse(data);
// console.log(userdata)