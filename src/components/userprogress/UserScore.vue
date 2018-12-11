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
                    {{ secs }}
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
                secs: 5,
                userTime: 5,
                color: 'green',
            }
        },

        mounted () {
            setInterval(()=>{ 
                this.countdown();
                this.time = ((this.secs*100) / this.userTime);
                if (this.time <= 70 && this.time >= 40) {
                    this.color = 'orange';
                } else if(this.time < 40) {
                    this.color = 'red';
                }
            },1000);
        },

        methods: {
            countdown () {
                if (this.secs > 0) {
                    this.secs--;
                }
            }
        }
    }
</script>