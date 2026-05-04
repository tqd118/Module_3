import cards from "./modules/cards.js"
import pagination from "./modules/pagination.js"
import events from "./modules/events.js";
import observers from "./modules/observers.js";
import drag from "./modules/drag.js";
import resize from "./modules/resize.js";

document.addEventListener("DOMContentLoaded", () => app.init());

const app = {
    init() {
        cards.createServerCards(30);
        pagination.loadMore(20);

        events.setup();
        observers.setup();
        drag.setup();
        resize.setup();
    } 
};