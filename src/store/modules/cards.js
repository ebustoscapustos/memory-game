export default {
    state: {
        cards: [
            {
                slug: 'pokemon-1',
                image: '1.svg'
            },
            {
                slug: 'pokemon-2',
                image: '2.svg'
            },
            {
                slug: 'pokemon-3',
                image: '3.svg'
            },
            {
                slug: 'pokemon-4',
                image: '4.svg'
            },
            {
                slug: 'pokemon-5',
                image: '5.svg'
            },
            {
                slug: 'pokemon-6',
                image: '6.svg'
            },
            {
                slug: 'pokemon-7',
                image: '7.svg'
            },
            {
                slug: 'pokemon-8',
                image: '8.svg'
            },
            {
                slug: 'pokemon-9',
                image: '9.svg'
            },
            {
                slug: 'pokemon-10',
                image: '10.svg'
            },
            {
                slug: 'pokemon-11',
                image: '11.svg'
            },
            {
                slug: 'pokemon-12',
                image: '12.svg'
            },
            {
                slug: 'pokemon-13',
                image: '13.svg'
            },
            {
                slug: 'pokemon-14',
                image: '14.svg'
            },
            {
                slug: 'pokemon-15',
                image: '15.svg'
            },
            {
                slug: 'pokemon-16',
                image: '16.svg'
            },
            {
                slug: 'pokemon-17',
                image: '17.svg'
            },
            {
                slug: 'pokemon-18',
                image: '18.svg'
            },
        ]
    },
    mutations: {},
    actions: {},

    getters: {
        allCards: (state) => {
            return state.cards.concat(state.cards)
        }
    },
}