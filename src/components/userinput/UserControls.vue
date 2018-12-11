<template>
    <v-layout row wrap>
        <v-flex md6>
            <v-btn :to="{ name: '/' }" color="warning">Cancel</v-btn>
        </v-flex>

        <v-flex md6 v-if="!$store.getters.getFinished">
            <v-btn v-if="!$store.getters.getRightAnswer" :disabled="$store.getters.getAnswer == ''" color="primary" @click="submitAnswer">Check answer</v-btn>
            <v-btn v-else color="success" @click="continueQuiz">Continue</v-btn>
        </v-flex>

        <v-flex md6 v-else>
            <v-btn color="primary">Finish</v-btn>
        </v-flex>
    </v-layout>
</template>

<script type="text/javascript">
    export default {
        data () {
            return {
            }
        },

        methods: {
            submitAnswer() {
                this.checkQuestion(this.$store.getters.getAnswer);
            },

            displayQuestion() {
                if (this.$store.getters.getContinueQuestion) {
                    this.$store.commit('incrementQuestionCounter');
                }

                if (this.$store.getters.getQuestionCounter < this.$store.getters.getKanaWords.length) {
                    this.$store.commit('assignCharacter', this.$store.getters.getKanaWords[this.$store.getters.getQuestionCounter].hiragana);
                } else {
                    this.$store.commit('finishQuiz', true);
                }  
            },

            checkQuestion(string) {
                if (string === this.$store.getters.getKanaWords[this.$store.getters.getQuestionCounter].romaji) {
                    this.$store.commit('changeWrongAnswer', false);
                    this.$store.commit('changeRightAnswer', true);
                    this.$store.commit('updateScoreCorrect');
                } else {
                    this.$store.commit('changeWrongAnswer', true);
                    this.$store.commit('changeRightAnswer', false);
                    this.$store.commit('updateScoreWrong');
                }

                this.$store.commit('proceedQuestion', false);
                this.$store.commit('resetAnswer');
            },

            continueQuiz () {
                this.$store.commit('proceedQuestion', true);
                this.$store.commit('changeRightAnswer', false);
                this.$store.commit('changeFade', true);
                this.updateProgress();
                setTimeout(() => {
                    this.$store.commit('changeFade', false);
                }, 500);

                this.displayQuestion();
            },

            updateProgress() {
                this.$store.commit('updateProgress', ((this.$store.getters.getQuestionCounter + 1) / this.$store.getters.getKanaWords.length) * 100); 
            }

        }
    }
</script>