import {createStore} from 'vuex';

export default createStore({
    state: {
        isFormVisible: false,
        isButtonBlocked: false,
    },
    mutations: {
        showForm(state) {
            state.isFormVisible = true;
        },
        hideForm(state) {
            state.isFormVisible = false;
        },
        blockButton(state) {
            state.isButtonBlocked = true;
        },
        unblockButton(state) {
            state.isButtonBlocked = false;
        },
    },
    actions: {
        showForm({commit}) {
            commit('showForm');
        },
        hideForm({commit}) {
            commit('hideForm');
        },
        blockButton({commit}) {
            commit('blockButton');
        },
        unblockButton({commit}) {
            commit('unblockButton');
        },
    },
    getters: {
        isFormVisible: (state) => state.isFormVisible,
        isButtonBlocked: (state) => state.isButtonBlocked,
    },
});