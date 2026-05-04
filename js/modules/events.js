import cards from "./cards.js";
import form from "./form.js";
import ui from "./ui.js"

const events = {
    setup() {
        ui.elements.previousButton.addEventListener("click", () => cards.navigate(-1));
        ui.elements.nextButton.addEventListener("click", () => cards.navigate(1));
        ui.elements.closeButton.addEventListener("click", () => cards.reset());

        ui.elements.upwardButton.addEventListener("click", () => ui.scrollToTop());

        ui.elements.form.addEventListener("submit", (event) => form.addNewCard(event));
        ui.elements.fileInput.addEventListener("input", () => ui.renderValidation());
        ui.elements.titleInput.addEventListener("input", () => ui.renderValidation());

        document.addEventListener('keydown', this.handleKeyboardInput.bind(this));
    },

    handleKeyboardInput(e) {
        if (!this.activeCard) {
            return;
        }

        if (e.key === 'ArrowRight') {
            this.navigate(1);
        }

        if (e.key === 'ArrowLeft') {
            this.navigate(-1);
        }
    },
}

export default events;