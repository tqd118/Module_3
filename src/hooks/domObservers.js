import paginationController from "../controllers/paginationController.js";
import uiRenderer from "../components/uiRenderer.js"

const domObservers = {
    setup() {
        const loadObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                paginationController.loadMore(20);
            }
        });

        const arrowObserver = new IntersectionObserver(([entry]) => {
            uiRenderer.elements.upwardButton.classList.toggle(
                "upward-arrow_active",
                entry.isIntersecting
            );
        });

        loadObserver.observe(uiRenderer.elements.footer);
        arrowObserver.observe(uiRenderer.elements.footer);
    },
}

export default domObservers;