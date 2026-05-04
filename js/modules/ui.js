import state from "./state.js";

const ui = {
    elements: {
        previewArea: document.querySelector(".preview-area"),

        imageList: document.querySelector(".image-list"),
        previewImage: document.querySelector(".preview-area img"),
        previewTitle: document.querySelector(".preview-area h2"),

        previousButton: document.querySelector("#previous"),
        nextButton: document.querySelector("#next"),
        closeButton: document.querySelector("#close"),

        upwardButton: document.querySelector(".upward-arrow"),
        footer: document.querySelector(".scroller-footer"),

        resizer: document.querySelector(".resizer"),
        container: document.querySelector(".container"),

        coordinates: document.querySelector("#coords"),

        form: document.querySelector("form"),
        fileInput: document.querySelector("#url"),
        titleInput: document.querySelector("#name"),
    },


    updatePreview(card) {
        this.elements.previewImage.src = card.dataset.url;
        this.elements.previewTitle.textContent = card.dataset.title;
    },

    resetPreview() {
        this.elements.previewImage.src = "https://placehold.co/360x200/gray/gray";
        this.elements.previewTitle.textContent = "Preview";
    },

    updateControls(card) {
        if(!card) {
            this.elements.previousButton.setAttribute("disabled", "")
            this.elements.nextButton.setAttribute("disabled", "");
            this.elements.closeButton.setAttribute("disabled", "");
            return;
        }

        this.elements.closeButton.removeAttribute("disabled");

        const isFirst = !card.previousElementSibling;
        const isLast = !card.nextElementSibling;

        if (isFirst) {
            this.elements.previousButton.setAttribute("disabled", "")
        } else {
            this.elements.previousButton.removeAttribute("disabled");
        }

        if (isLast) {
            this.elements.nextButton.setAttribute("disabled", "")
        } else {
            this.elements.nextButton.removeAttribute("disabled");
        }
    },


    updateCoordinates(x, y) {
        this.elements.coordinates.innerText = `x: ${x}, y: ${y}`;
    },

    setCoordinatesVisibility(state) {
        this.elements.coordinates.style.display = state ? "block" : "none";
    },


    setWidths(listWidthPercent) {
        this.elements.imageList.style.width = listWidthPercent + "%";
        this.elements.previewArea.style.width = (100 - listWidthPercent) + "%";
    },


    renderValidation() {
        if (!state.isFormSubmitted) return;

        const file = this.elements.fileInput.files[0];
        const title = this.elements.titleInput.value.trim();

        this.elements.fileInput.classList.toggle("invalid", !file);
        this.elements.titleInput.classList.toggle("invalid", !title);
    },

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
}

export default ui;