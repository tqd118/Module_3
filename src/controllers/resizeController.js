import uiRenderer from "../components/uiRenderer.js"

const resizeController = {
    setup() {
        uiRenderer.elements.resizer.addEventListener("mousedown", () => this.resize());
    },

    resize() {
        const maxListWidthPercent = 80;
        const minListWidthPercent = 30;

        const move = (e) => {
            const containerWidth = uiRenderer.elements.container.offsetWidth;
            const newListWidth = (e.clientX / containerWidth) * 100;

            if (newListWidth > minListWidthPercent && 
                newListWidth < maxListWidthPercent) {
                uiRenderer.setWidths(newListWidth);
            }
        };

        const up = () => {
            document.removeEventListener("mousemove", move);
            document.removeEventListener("mouseup", up);
        };

        document.addEventListener("mousemove", move);
        document.addEventListener("mouseup", up);
    },
}

export default resizeController;