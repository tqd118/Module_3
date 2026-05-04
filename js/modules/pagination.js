import cards from "./cards.js"
import state from "./state.js";

const pagination = {
    loadMore(count) {
        const nextCards = state.serverCards.slice(
            state.loadedServerCardsCount,
            state.loadedServerCardsCount + count
        );

        nextCards.forEach(card => cards.addCard(card.title, card.url));

        state.loadedServerCardsCount += nextCards.length;
    }
}

export default pagination;