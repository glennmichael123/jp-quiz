<template>
    <v-container grid-list-md text-xs-center class="mt-5">
        <QuizProgress>
        </QuizProgress>

        <Instructions :instruction="'ひらがなで かいてください。'"></Instructions>

        <UserScore></UserScore>

        <CharacterDisplay 
            :character="$store.getters.getCharacter" 
            :fade="$store.getters.getFade">
        </CharacterDisplay>
        
        <AnswerInput></AnswerInput>
        <AnswerResponse 
            :wrongAnswer="$store.getters.getWrongAnswer" 
            :rightAnswer="$store.getters.getRightAnswer">
        </AnswerResponse>

        <UserControls></UserControls>

    </v-container>
</template>
<script type="text/javascript">
    import CharacterDisplay from '../userinput/CharacterDisplay';
    import Instructions from '../userinput/Instructions';
    import AnswerInput from '../userinput/AnswerInput';
    import AnswerResponse from '../userinput/AnswerResponse';
    import UserControls from '../userinput/UserControls';
    import QuizProgress from '../userprogress/QuizProgress';
    import UserScore from '../userprogress/UserScore';
    import kanjikana from '../../assets/kanjikana.json';

    export default {
    components: { CharacterDisplay, Instructions, AnswerInput, AnswerResponse,  QuizProgress, UserControls, UserScore },
    name: 'KatakanaRomajiQuiz',

    mounted () {
        this.$store.commit('assignKanaWords', kanjikana);
        this.shuffleQuestions();
        this.displayQuestion();
        this.$store.commit('setQuizMode', 'kanji');
    },

    destroyed () {
        this.$store.commit('reset');
    },

    methods: {
        shuffleQuestions () {
           this.$store.getters.getKanaWords.sort(function () { return Math.random() - 0.5; });
        },

        displayQuestion() {
            this.$store.commit('assignCharacter', this.$store.getters.getKanaWords[this.$store.getters.getQuestionCounter].kanji);
        },
    }
}
</script>