<template>
    <div>
        <v-layout row wrap mb-2 v-if="wrongAnswer">
            <v-flex md12>
                <h2 class="red--text"> chigau desu <i class="fas fa-times"></i></h2>
            </v-flex>
        </v-layout>

        <v-layout row wrap mb-2 v-if="rightAnswer">
            <v-flex md12>
                <h2 class="green--text"> sekai desu <i class="fas fa-check"></i></h2>
            </v-flex>
        </v-layout>
    </div>
</template>

<script type="text/javascript">
    export default {
        props: ['wrongAnswer', 'rightAnswer'],
        data () {
            return {
            }
        }
    }
</script>