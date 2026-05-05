import cardsController from "../components/cardsController.js";
import formController from "../components/formController.js";
import state from "../models/state.js";
import uiRenderer from "../components/uiRenderer.js"

const eventHandlers = {
    setup() {
        uiRenderer.elements.previousButton.addEventListener("click", () => cardsController.navigate(-1));
        uiRenderer.elements.nextButton.addEventListener("click", () => cardsController.navigate(1));
        uiRenderer.elements.closeButton.addEventListener("click", () => cardsController.reset());

        uiRenderer.elements.upwardButton.addEventListener("click", () => uiRenderer.scrollToTop());

        uiRenderer.elements.form.addEventListener("submit", (event) => formController.addNewCard(event));
        uiRenderer.elements.fileInput.addEventListener("input", () => uiRenderer.renderValidation(state.isFormSubmitted));
        uiRenderer.elements.titleInput.addEventListener("input", () => uiRenderer.renderValidation(state.isFormSubmitted));

        document.addEventListener('keydown', this.handleKeyboardInput);
    },

    handleKeyboardInput(e) {
        if (!state.activeCard) {
            return;
        }

        if (e.key === 'ArrowRight') {
            cardsController.navigate(1);
        }

        if (e.key === 'ArrowLeft') {
            cardsController.navigate(-1);
        }
    },
}

export default eventHandlers;