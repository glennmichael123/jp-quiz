import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const initialState = () => {
    let store = {
        answer: '',
        quizOnGoing: false,
        quizFinished: false,
        rightAnswer: false,
        wrongAnswer: false,
        kanaWords: null,
        questionCounter: 0,
        continueQuestion: false,
        character: null,
        fadeCharacter: false,
        fade: false,
        quizProgress: 0,
        correctScore: 0,
        wrongScore: 0,
        dialog: false,
    };

    return store;
}


export const store = new Vuex.Store({
	state: initialState,

    getters: {
        getAnswer: state => {
            return state.answer;
        },

        getFinished: state => {
            return state.quizFinished;
        },

        getRightAnswer: state => {
            return state.rightAnswer;
        },

        getWrongAnswer: state => {
            return state.wrongAnswer;
        },

        getKanaWords: state => {
            return state.kanaWords;
        },

        getContinueQuestion: state => {
            return state.continueQuestion;
        },

        getQuestionCounter: state => {
            return state.questionCounter;
        },

        getCharacter: state => {
            return state.character;
        },

        getFade: state => {
            return state.fade;
        },

        getProgress: state => {
            return state.quizProgress;
        },

        getScoreCorrect: state => {
            return state.correctScore;
        },

        getScoreWrong: state => {
            return state.wrongScore;
        },

        getQuizStatus: state => {
            return state.quizOnGoing;
        },

        getDialogStatus: state => {
            return state.dialog;
        }
    },

    mutations: {
        passAnswer (state, ans) {
            state.answer = ans;
        },

        resetAnswer(state) {
            state.answer = '';
        },

        finishQuiz(state, status) {
            state.quizFinished = status;
        },

        changeRightAnswer(state, status) {
            state.rightAnswer = status;
        },

        changeWrongAnswer(state, status) {
            state.wrongAnswer = status;
        },

        proceedQuestion(state, status) {
            state.continueQuestion = status;
        }, 

        assignKanaWords(state, kana) {
            state.kanaWords = kana;
        },

        incrementQuestionCounter(state) {
            state.questionCounter++;
        },

        assignCharacter(state, char) {
            state.character = char;
        },

        changeFade(state, status) {
            state.fade = status;
        },

        updateProgress(state, progress) {
            state.quizProgress = progress;
        },

        updateScoreCorrect: state => {
            state.correctScore++;
        },

        updateScoreWrong: state => {
            state.wrongScore++;
        },

        startQuiz: (state, status) => {
            state.quizOnGoing = status;
        },

        toggleDialog: (state, status) => {
            state.dialog = status;
        },

        reset (state) {
            const s = initialState();
            
            Object.keys(s).forEach(key => {
                state[key] = s[key]
            });
        }
    }
});
