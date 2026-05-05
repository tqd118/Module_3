import getImageUrl from "../utils/getImageUrl.js";
import state from "../models/state.js";

export default function generateServerCards(count) {
    for (let i = 0; i < count; i++) {
        const card = {
            title: `server image number ${i + 1}`,
            url: getImageUrl(i)
        }

        state.serverCards.push(card);
    }
}