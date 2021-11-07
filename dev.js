import {genJoinUrl, getCredFromUrl} from "./scripts/utils.js";
import {config} from "dotenv";

config()

// console.log(process.env.ZOOM_LINK)
// console.log(...Object.values(getCredFromUrl(process.env.ZOOM_LINK)))
console.log(genJoinUrl(...Object.values(getCredFromUrl(process.env.ZOOM_LINK))))


