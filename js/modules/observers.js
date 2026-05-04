import pagination from "./pagination.js";
import ui from "./ui.js"

const observers = {
    setup() {
        const loadObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                pagination.loadMore(20);
            }
        });

        const arrowObserver = new IntersectionObserver(([entry]) => {
            ui.elements.upwardButton.classList.toggle(
                "upward-arrow_active",
                entry.isIntersecting
            );
        });

        loadObserver.observe(ui.elements.footer);
        arrowObserver.observe(ui.elements.footer);
    },
}

export default observers;