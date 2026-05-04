import cards from "./cards.js";
import state from "./state.js";
import ui from "./ui.js";

const form = {
    addNewCard(event) {
        event.preventDefault();

        state.isFormSubmitted = true;

        if (!this.isFormValid()) {
            ui.renderValidation();
            return;
        }

        const file = ui.elements.fileInput.files[0];
        const title = ui.elements.titleInput.value.trim();

        const imgUrl = URL.createObjectURL(file);

        cards.addCard(title, imgUrl, true);

        ui.elements.form.reset();
        state.isFormSubmitted = false;
    },

    isFormValid() {
        const file = ui.elements.fileInput.files[0];
        const title = ui.elements.titleInput.value.trim();

        return Boolean(file && title);
    },
}

export default form;