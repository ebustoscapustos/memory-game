const cards = [
    {
        slug: 'pokemon-1',
        image: '1.svg',
        reverse: false,
        id: 1
    },
    {
        slug: 'pokemon-2',
        image: '2.svg',
        reverse: false,
        id: 2
    },
    {
        slug: 'pokemon-3',
        image: '3.svg',
        reverse: false,
        id: 3
    },
    {
        slug: 'pokemon-4',
        image: '4.svg',
        reverse: false,
        id: 4
    },
    {
        slug: 'pokemon-5',
        image: '5.svg',
        reverse: false,
        id: 5
    },
    {
        slug: 'pokemon-6',
        image: '6.svg',
        reverse: false,
        id: 6
    },
    {
        slug: 'pokemon-7',
        image: '7.svg',
        reverse: false,
        id: 7
    },
    {
        slug: 'pokemon-8',
        image: '8.svg',
        reverse: false,
        id: 8
    },
    {
        slug: 'pokemon-9',
        image: '9.svg',
        reverse: false,
        id: 9
    },
    {
        slug: 'pokemon-10',
        image: '10.svg',
        reverse: false,
        id: 10
    },
    {
        slug: 'pokemon-11',
        image: '11.svg',
        reverse: false,
        id: 11
    },
    {
        slug: 'pokemon-12',
        image: '12.svg',
        reverse: false,
        id: 12
    },
    {
        slug: 'pokemon-13',
        image: '13.svg',
        reverse: false,
        id: 13
    },

    {
        slug: 'pokemon-14',
        image: '14.svg',
        reverse: false,
        id: 14
    },
    {
        slug: 'pokemon-15',
        image: '15.svg',
        reverse: false,
        id: 15
    },
    {
        slug: 'pokemon-16',
        image: '16.svg',
        reverse: false,
        id: 16
    },
    {
        slug: 'pokemon-17',
        image: '17.svg',
        reverse: false,
        id: 17
    },
    {
        slug: 'pokemon-18',
        image: '18.svg',
        reverse: false,
        id: 18
    },
]

export default {
    state: {
        cards: [],
        step: 0
    },
    mutations: {
        removeCard(state, payload) {
            state.cards = state.cards.map((card, index) => {
                if (card && (card.id === payload.firstReverseCard.id || card.id === payload.secondReverseCard.id)) {
                    delete state.cards[index]
                    return
                }
                return card
            })
        },
        addAllCards(state, payload) {

            state.cards = payload
        },
        flipCard(state, payload) {
            state.cards.forEach(card => {
                if (card && card.id === payload.id) {
                    card.reverse = !card.reverse
                    return
                }
            })
        },
        reverseAllCards(state, payload) {
            state.cards = state.cards.map(card => {
                if (!!card) {
                    card.reverse = payload === 'front'
                    return card
                }
            })
        },
        stepCounter(state) {
            state.step += 1
        },
        stepRefresh(state) {
            if (state.step == 18) state.step = 0
        }
    },
    actions: {
        getAllCards({ commit }) {
            const copyCards = cards.map((card, index) => {
                const newCard = { ...card }
                newCard.id = cards.length + index + 1
                return newCard
            })
            const allCards = [...cards, ...copyCards]
            for (let i = allCards.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [allCards[i], allCards[j]] = [allCards[j], allCards[i]];
            }
            commit('addAllCards', allCards)
        }
    },

    getters: {
        allCards: (state) => {
            return state.cards
        },
        getReverseCards: (state) => {
            return state.cards.filter(card => card && card.reverse)
        },
        isGameOver: (state) => {
            return state.step === 18
        },
        step: (state) => {
            return state.step
        }
    },
}