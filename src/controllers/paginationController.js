import cardsController from "../components/cardsController.js"
import state from "../models/state.js";

const paginationController = {
    loadMore(count) {
        const nextCards = state.serverCards.slice(
            state.loadedServerCardsCount,
            state.loadedServerCardsCount + count
        );

        nextCards.forEach(card => cardsController.addCard(card.title, card.url));

        state.loadedServerCardsCount += nextCards.length;
    }
}

export default paginationController;