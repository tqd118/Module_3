import cardsController from "./cardsController.js";
import state from "../models/state.js";
import uiRenderer from "./uiRenderer.js";

const formController = {
    addNewCard(event) {
        event.preventDefault();

        state.isFormSubmitted = true;

        if (!this.isFormValid()) {
            uiRenderer.renderValidation(state.isFormSubmitted);
            return;
        }

        const file = uiRenderer.elements.fileInput.files[0];
        const title = uiRenderer.elements.titleInput.value.trim();

        const imgUrl = URL.createObjectURL(file);

        cardsController.addCard(title, imgUrl, true);

        uiRenderer.elements.form.reset();
        state.isFormSubmitted = false;
    },

    isFormValid() {
        const file = uiRenderer.elements.fileInput.files[0];
        const title = uiRenderer.elements.titleInput.value.trim();

        return Boolean(file && title);
    },
}

export default formController;