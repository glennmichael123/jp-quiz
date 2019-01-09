<style type="text/css" scoped>
span {
    font-size: 15px;
    text-align: center;
}

.user-score {
    width: 40%; 
    margin-right: auto; 
    margin-left: auto;
}

</style>

<template>
    <div class="user-score mt-2">
        <v-layout row wrap>
            <v-flex md4> 
                <span class="correct green--text"><i class="fas fa-check"></i> {{ $store.getters.getScoreCorrect }}</span> 
            </v-flex>

            <v-flex md4> 
                <span :class="classTime"> {{ fullTime }} </span>
            </v-flex>
            <v-flex md4> 
                <span class="wrong red--text"><i class="fas fa-times"></i> {{ $store.getters.getScoreWrong }}</span> 
            </v-flex>
        </v-layout>



        <v-dialog
            v-model="dialogTimeUp"
            max-width="400"
            persistent
        >
        <v-card>
            <v-card-title class="headline">ざんねんな。 :(</v-card-title>
                    <v-card-text>
                        <div>あなたの時間は終わりました!</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>

                        <v-btn
                            color="red"
                            flat="flat"
                            @click="goHome"
                        >
                            やめる
                        </v-btn>

                        <v-btn
                            color="green darken-1"
                            flat="flat"
                            @click="restart"
                        >
                            もいちど
                        </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script type="text/javascript">
    export default {
        data () {
            return {
                time: 0,
                secs: 60,
                userTime: 60,
                fullTime: '0:00',
                classTime: 'green--text',
                dialogTimeUp: false,
            }
        },

        mounted () {
            let myInterval = setInterval(() => { 
                if (this.$store.getters.getQuizStatus) {
                    if (this.secs > 0) {
                        this.countdown();
                        let minutes = Math.floor(this.secs / 60);
                        let seconds = this.secs - minutes * 60;

                        this.fullTime = `${minutes}:${seconds}`;

                        if (seconds < 10) {
                            this.fullTime = `${minutes}:0${seconds}`;
                        }

                    } else {
                        this.dialogTimeUp = true;
                        clearInterval(myInterval);
                    }
                } 

                if (this.$store.getters.getFinished) {
                    clearInterval(myInterval);
                }
            }, 1000); 
        },

        methods: {
            countdown () {
                this.secs--;

                this.time = (( this.secs * 100) / this.userTime );

                if (this.time <= 40 && this.time >= 20) {
                    this.classTime = 'orange--text';
                } else if(this.time < 10) {
                    this.classTime = 'red--text';
                }

                console.log(this.$store.getters.getFinished);
            },

            goHome() {
                this.dialogTimeUp = false;

                this.$router.push('/');
            },

            restart() {
                location.reload();
            }
        }
    }
</script>