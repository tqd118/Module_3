import generateServerCards from "./services/cardDataService.js";
import paginationController from "./controllers/paginationController.js"
import eventHandlers from "./controllers/eventHandlers.js";
import domObservers from "./hooks/domObservers.js";
import dragController from "./controllers/dragController.js";
import resizeController from "./controllers/resizeController.js";

document.addEventListener("DOMContentLoaded", () => app.init());

const app = {
    init() {
        generateServerCards(30);
        paginationController.loadMore(20);

        eventHandlers.setup();
        domObservers.setup();
        dragController.setup();
        resizeController.setup();
    } 
};