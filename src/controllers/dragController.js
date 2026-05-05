import cardsController from "../components/cardsController.js";
import uiRenderer from "../components/uiRenderer.js"

const dragController = {
    setup() {
        uiRenderer.elements.previewArea.addEventListener("dragover", (event) => {
            event.preventDefault();
        });

        uiRenderer.elements.previewArea.addEventListener("drop", (event) => {
            event.preventDefault();

            const card = document.querySelector(".card.dragging");
            if (card) {
                cardsController.selectCard(card);
            }
        });

        document.addEventListener("dragover", (event) => {
            uiRenderer.updateCoordinates(event.clientX, event.clientY);
        });
    },

    handleDrag(event, card) {
        card.classList.add("dragging");

        uiRenderer.setCoordinatesVisibility(true);

        card.addEventListener("dragend", () => {
            card.classList.remove("dragging");
            uiRenderer.setCoordinatesVisibility(false);
        }, { once: true });
    },
}

export default dragController;