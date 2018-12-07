<template>
    <v-container grid-list-md text-xs-center class="mt-5">
        <Instructions></Instructions>
        <CharacterDisplay :character="character"></CharacterDisplay>
        <AnswerInput></AnswerInput>
        <AnswerResponse :wrongAnswer="wrongAnswer" :rightAnswer="rightAnswer"></AnswerResponse>
            <v-layout row wrap>
                <v-flex md6>
                    <v-btn :to="{ name: '/' }" color="warning">Cancel</v-btn>
                </v-flex>

                <v-flex md6 v-if="!finished">
                    <v-btn v-if="!rightAnswer" color="primary" @click="submitAnswer">Check answer</v-btn>
                    <v-btn v-else color="success" @click="continueQuiz">Continue</v-btn>
                </v-flex>

                <v-flex md6 v-else>
                    <v-btn color="primary">Finish</v-btn>
                </v-flex>
            </v-layout>
    </v-container>
</template>
<script type="text/javascript">
    import CharacterDisplay from '../userinput/CharacterDisplay';
    import Instructions from '../userinput/Instructions';
    import AnswerInput from '../userinput/AnswerInput';
    import AnswerResponse from '../userinput/AnswerResponse';
    import jpwords from '../../assets/jpwords.json';

    export default {
    components: { CharacterDisplay, Instructions, AnswerInput, AnswerResponse },
    name: 'HiraganaRomajiQuiz',
    data () {
        return {
            nihonwords: null,
            character: null,
            counter: 0,
            finished: false,
            wrongAnswer: false,
            rightAnswer: false,
            continueQuestion: true,
        }
    },

    mounted () {
        this.nihonwords = jpwords;
        this.shuffleQuestions();
        this.displayQuestion();
    },

    methods: {
        submitAnswer() {
            this.checkQuestion(this.$store.getters.getAnswer);
            this.displayQuestion();
            
        },
        shuffleQuestions () {
           this.nihonwords.sort(function () {return Math.random() - 0.5;});
        },

        displayQuestion() {
            if (this.continueQuestion) {
                this.counter++;
                if (this.counter < this.nihonwords.length) {
                    this.character = this.nihonwords[this.counter].hiragana;
                } else {
                    this.finished = true;
                }
            }    
        },

        checkQuestion(string) {
            if (string === this.nihonwords[this.counter].romaji) {
                this.wrongAnswer = false;
                this.rightAnswer = true;
                this.continueQuestion = false;
            } else {
                this.wrongAnswer = true;
                this.rightAnswer = false;
                this.continueQuestion = false;
            }

            this.$store.commit('resetAnswer');
        },

        continueQuiz () {
            this.continueQuestion = true;
            this.rightAnswer = false;
            this.displayQuestion();
        }
    }
}
</script>