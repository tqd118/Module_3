import dragController from "../controllers/dragController.js";
import state from "../models/state.js";
import uiRenderer from "./uiRenderer.js";

const cardsController = {
    buildCard(title, url) {
        const card = document.createElement("figure");

        card.className = "card";
        card.dataset.title = title;
        card.dataset.url = url;

        card.setAttribute("draggable", true);

        card.innerHTML = `
            <img src="${url}"
                 alt="image ${title}"
                 class="card__image"
                 draggable="false"/>
            <figcaption class="card__title">${title}</figcaption>
        `;

        card.addEventListener("click", () => this.selectCard(card));
        card.addEventListener("dragstart", (event) => dragController.handleDrag(event, card));

        return card;
    },

    addCard(title, url, byUser = false) {
        const card = this.buildCard(title, url);

        if (byUser) {
            uiRenderer.elements.imageList.insertAdjacentElement("afterbegin", card);        
        } else {
            uiRenderer.elements.imageList.appendChild(card);
        }
    },


    selectCard(card) {
        if (state.activeCard) {
            state.activeCard.classList.remove("card_active");
        }

        card.classList.add("card_active");
        state.activeCard = card;

        uiRenderer.updatePreview(card);
        uiRenderer.updateControls(card);
    },

    navigate(direction) {
        if (!state.activeCard) {
            return;
        }

        const next = direction === 1
            ? state.activeCard.nextElementSibling
            : state.activeCard.previousElementSibling;

        if (!next) {
            return;
        }

        this.selectCard(next);
    },

    reset() {
        if (!state.activeCard) {
            return;
        }

        state.activeCard.classList.remove("card_active");
        state.activeCard = null;
        
        uiRenderer.resetPreview();
        uiRenderer.updateControls();
    },
}

export default cardsController;