<style type="text/css" scoped>
.card-character {
    width: 40%; 
    margin-left: auto; 
    margin-right: auto;
}

.character {
    font-size: 80px;
}
</style>

<template>
        <v-layout row wrap class="mt-4">
            <v-flex md12>
                    <v-card height="180" color="white" class="black--text card-character">
                        <v-card-text>
                            <v-slide-x-transition>
                                <h1 class="character" v-if="!fade">{{ character }}</h1>
                            </v-slide-x-transition>
                        </v-card-text>
                    </v-card>
            </v-flex>
        </v-layout>
</template>

<script type="text/javascript">
    export default {
        props: ['character', 'fade'],
        components: {},
        data () {
            return {
            
            }
        },
    }
</script>