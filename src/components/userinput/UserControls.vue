<template>
    <v-layout row wrap>
        <v-flex md6>
            <QuitDialog></QuitDialog>
        </v-flex>

        <v-flex md6 v-if="!$store.getters.getFinished">
            
            <div v-if="!$store.getters.getQuizStatus">
                <v-btn color="primary" @click="$store.commit('startQuiz', true)">はじめます</v-btn>
            </div>

            <div v-else>
                <v-btn v-if="!$store.getters.getRightAnswer" :disabled="$store.getters.getAnswer == ''" color="primary" @click="submitAnswer">こたえをチェック </v-btn>
                <v-btn v-else color="success" ref="clickToProceed" @click="continueQuiz">つぎ</v-btn>
            </div>
        </v-flex>

        <v-flex md6 v-else>
            <v-btn @click="goHome" color="primary">Finish</v-btn>
        </v-flex>


        <v-dialog
            v-model="dialogFinish"
            max-width="400"
        >
        <v-card>
            <v-card-title class="headline">おめでとう!</v-card-title>
                    <v-card-text>
                       <div> You finised the quiz before time ran out.</div>
                        <div>You have <b> {{ Number((($store.getters.getScoreCorrect - $store.getters.getScoreWrong ) / $store.getters.getScoreCorrect) * 100).toFixed(2) }}% </b> accuracy. </div> 
                        <div>すごいです！</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                            color="green darken-1"
                            flat="flat"
                            @click="goHome"
                            >
                            Finish
                        </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>


    </v-layout>
</template>

<script type="text/javascript">

    import QuitDialog from './QuitDialog';

    export default {
        components: { QuitDialog },
        data() {
            return {
                dialogFinish: false,
            }
        },

        mounted() {
            window.EventBus.$on('submitAns', this.submitAnswer);
        },

        methods: {
            submitAnswer() {
                if (!this.$store.getters.getRightAnswer) {
                    if (this.$store.getters.getAnswer.trim() !== '') {
                        this.checkAnswer(this.$store.getters.getAnswer);
                    }
                } else {
                    const elem = this.$refs.clickToProceed
                    if (!elem) return
                    elem.$el.click()
                }
            },

            displayQuestion() {
                let mode = this.$store.getters.getQuizMode;

                if (this.$store.getters.getContinueQuestion) {
                    this.$store.commit('incrementQuestionCounter');
                }

                if (this.$store.getters.getQuestionCounter < this.$store.getters.getKanaWords.length) {
                    this.$store.commit('assignCharacter', this.$store.getters.getKanaWords[this.$store.getters.getQuestionCounter][mode]);
                } else {
                    this.$store.commit('finishQuiz', true);
                }  
            },

            checkAnswer(string) {

                let mode = this.$store.getters.getQuizMode;
                let check = '';

                if (mode == 'kanji') {
                    check = 'hiragana'
                } else {
                    check = 'romaji'
                }
                if (string === this.$store.getters.getKanaWords[this.$store.getters.getQuestionCounter][check]) {
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

                if (this.$store.getters.getProgress == 100) {
                    this.dialogFinish = true;
                }

                this.displayQuestion();
            },

            updateProgress() {
                this.$store.commit('updateProgress', ((this.$store.getters.getQuestionCounter + 1) / this.$store.getters.getKanaWords.length) * 100); 
            },

            goHome() {
                this.dialogFinish = false;

                this.$router.push('/');
            }
        }
    }
</script>