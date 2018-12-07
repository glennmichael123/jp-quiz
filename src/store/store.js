import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		answer: '',
	},

    getters: {
        getAnswer: state => {
            return state.answer;
        }
    },

    mutations: {
        passAnswer (state, ans) {
            state.answer = ans;
        },

        resetAnswer(state) {
            state.answer = '';
        }
    }
});