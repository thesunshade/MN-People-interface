import { dppn } from "./DPPN.js";
export default function getDefinition(character_id) {
    let definition = "Nothing found";
    for (let i = 0; i < dppn.length; i++) {
        if (character_id.toLowerCase().replace(/\d$/, "") === dppn[i].word.trim()) {
            definition = dppn[i].text;
            i = dppn.length;
        }
    }
    return definition.replace(/MN/g, `<span class="highlight">MN</span>`);
}
