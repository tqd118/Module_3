import cards from "./cards.js";
import ui from "./ui.js"

const drag = {
    setup() {
        ui.elements.previewArea.addEventListener("dragover", (event) => {
            event.preventDefault();
        });

        ui.elements.previewArea.addEventListener("drop", (event) => {
            event.preventDefault();

            const card = document.querySelector(".card.dragging");
            if (card) {
                cards.selectCard(card);
            }
        });

        document.addEventListener("dragover", (event) => {
            ui.updateCoordinates(event.clientX, event.clientY);
        });
    },

    handleDrag(event, card) {
        card.classList.add("dragging");

        ui.setCoordinatesVisibility(true);

        card.addEventListener("dragend", () => {
            card.classList.remove("dragging");
            ui.setCoordinatesVisibility(false);
        }, { once: true });
    },
}

export default drag;