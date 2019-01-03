<template>
    <div>
        <v-slide-y-transition>
            <v-layout row wrap mb-2 v-if="$store.getters.getWrongAnswer">
                <v-flex md12>
                    <h2 class="red--text"> ちがうです! <i class="fas fa-times"></i></h2>
                </v-flex>
            </v-layout>

            <v-layout row wrap mb-2 v-if="$store.getters.getRightAnswer">
                <v-flex md12>
                    <h2 class="green--text"> せいかいです!  <i class="fas fa-check"></i></h2>
                </v-flex>
            </v-layout>
        </v-slide-y-transition>
    </div>
</template>

<script type="text/javascript">
    export default {
        data () {
            return {
            }
        }
    }
</script>