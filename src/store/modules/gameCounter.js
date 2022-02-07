export default {
    state: {
        score: 0,
        start: false,
    },
    mutations: {
        changeScore(state, payload) {
            state.score += payload
        },
        startGame(state) {
            state.start = !state.start
        },
        clearScore(state) {
            state.score = 0
        },
    },
    actions: {

    },
    getters: {
        getScore(state) {
            return state.score
        },
        start(state) {
            return state.start
        },
    }
}