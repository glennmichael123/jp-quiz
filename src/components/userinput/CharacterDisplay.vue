<style type="text/css" scoped>
.card-character {
    width: 30%; 
    margin-left: auto; 
    margin-right: auto;
}

.character {
    font-size: 100px;
}
</style>

<template>
    <v-layout row wrap class="mt-4">
        <v-flex md12>
            <v-card height="180" color="white" class="black--text card-character">
                <v-card-text>
                    <h1 class="character">{{ character }}</h1>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script type="text/javascript">
    export default {
        props: ['character'],
        components: {},
        data () {
            return {
            }
        }
    }
</script>