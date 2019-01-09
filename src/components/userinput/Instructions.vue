<template>
    <v-layout row wrap>
        <v-flex md12>
            <h1> {{ instruction }} </h1>
        </v-flex>
    </v-layout>
</template>

<script type="text/javascript">
    export default {
        props: ['instruction'],
        data () {
            return {
            }
        }
    }
</script>