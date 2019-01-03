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
                <v-progress-circular
                  :value="time"
                  :color="color"
                >
                    {{ fullTime }}
                </v-progress-circular> 
            </v-flex>
            <v-flex md4> 
                <span class="wrong red--text"><i class="fas fa-times"></i> {{ $store.getters.getScoreWrong }}</span> 
            </v-flex>
        </v-layout>
    </div>
    
</template>

<script type="text/javascript">
    export default {
        data () {
            return {
                time: 0,
                secs: 10,
                userTime: 10,
                color: 'green',
                fullTime: '',
            }
        },

        mounted () {
            let myInterval = setInterval( () => { 
                if (this.$store.getters.getQuizStatus) {
                    if (this.secs > 0) {
                        this.countdown();
                        let minutes = Math.floor(this.secs / 60);
                        let seconds = this.secs - minutes * 60;
                        let hours = Math.floor(this.secs / 3600);

                        this.fullTime = `${minutes}:${seconds}`;

                    } else {
                        this.$store.commit('updateTimeUp', true);
                        clearInterval(myInterval);
                    }
                }
            }, 1000); 
        },

        methods: {
            countdown () {
                this.secs--;

                this.time = (( this.secs * 100) / this.userTime );

                if (this.time <= 40 && this.time >= 20) {
                    this.color = 'orange';
                } else if(this.time < 10) {
                    this.color = 'red';
                }

            }
        }
    }
</script>