const state = {
    activeCard: null,

    serverCards: [],
    loadedServerCardsCount: 0,

    isFormSubmitted: false,

    getImageUrl(index) {
        return `https://placehold.co/360x200/orange/white?text=${index + 1}`;
    }
}

export default state;