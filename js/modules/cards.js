import drag from "./drag.js";
import state from "./state.js";
import ui from "./ui.js";

const cards = {
    createServerCards(count) {
        for (let i = 0; i < count; i++) {
            const card = {
                title: `server image number ${i + 1}`,
                url: state.getImageUrl(i)
            }

            state.serverCards.push(card);
        }
    },

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
        card.addEventListener("dragstart", (event) => drag.handleDrag(event, card));

        return card;
    },

    addCard(title, url, byUser = false) {
        const card = this.buildCard(title, url);

        if (byUser) {
            ui.elements.imageList.insertAdjacentElement("afterbegin", card);        
        } else {
            ui.elements.imageList.appendChild(card);
        }
    },


    selectCard(card) {
        if (state.activeCard) {
            state.activeCard.classList.remove("card_active");
        }

        card.classList.add("card_active");
        state.activeCard = card;

        ui.updatePreview(card);
        ui.updateControls(card);
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
        
        ui.resetPreview();
        ui.updateControls();
    },
}

export default cards;