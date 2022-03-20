import { dppn } from "./DPPN.js";
export default function findInDppn(character_id) {
    let index;
    let found = false;
    for (let i = 0; i < dppn.length; i++) {
        if (/\d$/.test(character_id)) {
            //   console.log(dppn[i].word);
            const root = character_id.replace(/\d+$/, "");
            //   console.log(root);
            if (dppn[i].word.trim() === root.toLowerCase()) {
                index = i;
                found = true;
                i = dppn.length;
            }
        }
        else if (dppn[i].word.trim() === character_id.toLowerCase()) {
            index = i;
            found = true;
            i = dppn.length;
        }
    }
    return index;
}
