document.addEventListener("DOMContentLoaded", () => app.init());

const app = {
    activeCard: null,

    serverCards: [],
    loadedServerCardsCount: 0,

    isFormSubmitted: false,

    init() {
        this.getElements();
        this.createServerCards(100);
        this.loadMore(20);
        this.setupControls();
        this.setupObservers();
        this.setupDragAndDrop();
        this.setupResize();
    },

    // DOM 

    getElements() {
        this.previewArea = document.querySelector(".preview-area");

        this.imageList = document.querySelector(".image-list");
        this.previewImage = this.previewArea.querySelector("img");
        this.previewTitle = this.previewArea.querySelector("h2");

        this.previousButton = document.querySelector("#previous");
        this.nextButton = document.querySelector("#next");
        this.closeButton = document.querySelector("#close");

        this.upwardButton = document.querySelector(".upward-arrow");
        this.footer = document.querySelector(".scroller-footer");

        this.resizer = document.querySelector(".resizer");
        this.container = document.querySelector(".container");

        this.coordinates = document.querySelector("#coords");

        this.form = document.querySelector("form");
        this.fileInput = this.form.querySelector("#url");
        this.titleInput = this.form.querySelector("#name");
    },

    // CARDS

    createServerCards(count) {
        for (let i = 0; i < count; i++) {
            const card = {
                title: `server image number ${i + 1}`,
                url: this.getImageUrl(i)
            }

            this.serverCards.push(card);
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
        card.addEventListener("dragstart", (event) => this.handleDrag(event, card));

        return card;
    },

    addCard(title, url) {
        const card = this.buildCard(title, url);
        this.imageList.appendChild(card);
    },

    // ACTIONS

    selectCard(card) {
        if (this.activeCard) {
            this.activeCard.classList.remove("card_active");
        }

        card.classList.add("card_active");
        this.activeCard = card;

        this.updatePreview(card);
        this.updateControls(card);
    },

    updatePreview(card) {
        this.previewImage.src = card.dataset.url;
        this.previewTitle.textContent = card.dataset.title;
    },

    updateControls(card) {
        if(!card) {
            this.previousButton.setAttribute("disabled", "")
            this.nextButton.setAttribute("disabled", "");
            this.closeButton.setAttribute("disabled", "");
            return;
        }

        this.closeButton.removeAttribute("disabled");

        const isFirst = !card.previousElementSibling;
        const isLast = !card.nextElementSibling;

        if (isFirst) {
            this.previousButton.setAttribute("disabled", "")
        } else {
            this.previousButton.removeAttribute("disabled");
        }

        if (isLast) {
            this.nextButton.setAttribute("disabled", "")
        } else {
            this.nextButton.removeAttribute("disabled");
        }
    },

    // PAGINATION

    loadMore(count) {
        const nextCards = this.serverCards.slice(
            this.loadedServerCardsCount,
            this.loadedServerCardsCount + count
        );

        nextCards.forEach(card => this.addCard(card.title, card.url));

        this.loadedServerCardsCount += nextCards.length;
    },

    // CONTROLS

    setupControls() {
        this.previousButton.addEventListener("click", () => this.navigate(-1));
        this.nextButton.addEventListener("click", () => this.navigate(1));
        this.closeButton.addEventListener("click", () => this.reset());

        this.updateControls();

        this.upwardButton.addEventListener("click", () => this.scrollToTop());

        this.form.addEventListener("submit", (event) => this.addNewCard(event));
        this.fileInput.addEventListener("input", () => this.renderValidation());
        this.titleInput.addEventListener("input", () => this.renderValidation());

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

    navigate(direction) {
        if (!this.activeCard) {
            return;
        }

        const next = direction === 1
            ? this.activeCard.nextElementSibling
            : this.activeCard.previousElementSibling;

        if (!next) {
            return;
        }

        this.selectCard(next);
    },

    reset() {
        if (!this.activeCard) {
            return;
        }

        this.activeCard.classList.remove("card_active");
        this.activeCard = null;

        this.previewImage.src = "https://placehold.co/360x200/gray/gray";
        this.previewTitle.textContent = "Preview"

        this.updateControls()
    },

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    },

    // OBSERVERS

    setupObservers() {
        const loadObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                this.loadMore(20);
            }
        });

        const arrowObserver = new IntersectionObserver(([entry]) => {
            this.upwardButton.classList.toggle(
                "upward-arrow_active",
                entry.isIntersecting
            );
        });

        loadObserver.observe(this.footer);
        arrowObserver.observe(this.footer);
    },

    // DRAG & DROP

    setupDragAndDrop() {
        this.previewArea.addEventListener("dragover", (event) => {
            event.preventDefault();
        });

        this.previewArea.addEventListener("drop", (event) => {
            event.preventDefault();

            const card = document.querySelector(".card.dragging");
            if (card) {
                this.selectCard(card);
            }
        });

        document.addEventListener("dragover", (event) => {
            this.updateCoordinates(event.clientX, event.clientY);
        });
    },

    handleDrag(event, card) {
        card.classList.add("dragging");

        this.setCoordinatesVisibility(true);

        card.addEventListener("dragend", () => {
            card.classList.remove("dragging");
            this.setCoordinatesVisibility(false);
        }, { once: true });
    },

    updateCoordinates(x, y) {
        this.coordinates.innerText = `x: ${x}, y: ${y}`;
    },

    setCoordinatesVisibility(state) {
        this.coordinates.style.display = state ? "block" : "none";
    },

    // RESIZE

    setupResize() {
        this.resizer.addEventListener("mousedown", () => this.resize());
    },

    resize() {
        const move = (e) => {
            const containerWidth = this.container.offsetWidth;
            const newListWidth = (e.clientX / containerWidth) * 100;

            if (newListWidth > 30 && newListWidth < 80) {
                this.setWidths(newListWidth);
            }
        };

        const up = () => {
            document.removeEventListener("mousemove", move);
            document.removeEventListener("mouseup", up);
        };

        document.addEventListener("mousemove", move);
        document.addEventListener("mouseup", up);
    },

    setWidths(listWidthPercent) {
        this.imageList.style.width = listWidthPercent + "%";
        this.previewArea.style.width = (100 - listWidthPercent) + "%";
    },

    // FORM

    addNewCard(event) {
        event.preventDefault();

        this.isFormSubmitted = true;

        if (!this.isFormValid()) {
            this.renderValidation();
            return;
        }

        const file = this.fileInput.files[0];
        const title = this.titleInput.value.trim();

        const imgUrl = URL.createObjectURL(file);

        this.addCard(title, imgUrl);

        this.form.reset();
        this.isFormSubmitted = false;
    },

    isFormValid() {
        const file = this.fileInput.files[0];
        const title = this.titleInput.value.trim();

        return Boolean(file && title);
    },

    renderValidation() {
        if (!this.isFormSubmitted) return;

        const file = this.fileInput.files[0];
        const title = this.titleInput.value.trim();

        this.fileInput.classList.toggle("invalid", !file);
        this.titleInput.classList.toggle("invalid", !title);
    },

    // UTILITY

    getImageUrl(index) {
        return `https://placehold.co/360x200/orange/white?text=${index + 1}`;
    }
};