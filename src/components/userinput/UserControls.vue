<template>
    <v-layout row wrap>
        <v-flex md6>
            <QuitDialog></QuitDialog>
        </v-flex>

        <v-flex md6 v-if="!$store.getters.getFinished">
            
            <div v-if="!$store.getters.getQuizStatus">
                <v-btn color="primary" @click="$store.commit('startQuiz', true)">はじめましょう</v-btn>
            </div>

            <div v-else>
                <v-btn v-if="!$store.getters.getRightAnswer" :disabled="$store.getters.getAnswer == ''" color="primary" @click="submitAnswer">こたえをチェック </v-btn>
                <v-btn v-else color="success" @click="continueQuiz">つぎ</v-btn>
            </div>
        </v-flex>

        <v-flex md6 v-else>
            <v-btn color="primary">Finish</v-btn>
        </v-flex>


        <v-dialog
            v-model="dialogFinish"
            max-width="400"
        >
        <v-card>
            <v-card-title class="headline">おめでとう!</v-card-title>
                    <v-card-text>
                       <div> You finised the quiz before time ran out.</div>
                        <div>You have <b> {{ (($store.getters.getScoreCorrect - $store.getters.getScoreWrong ) / $store.getters.getScoreCorrect) * 100 }}% </b> accuracy. </div> 
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