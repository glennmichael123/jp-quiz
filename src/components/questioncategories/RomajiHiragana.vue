<template>
    <v-flex md6>
         <v-card color="grey lighten-1">
            <v-card-title primary-title>
                <div>
                    <div class="headline">Romaji to Hiragana</div>
                    <span>You will give the hiragana version of romaji(english alphabet version)</span>
                </div>
            </v-card-title>
            <v-card-actions>
                <v-btn :to="{ name: 'hiraganaromajiquiz' }">Take quiz</v-btn>
            </v-card-actions>
        </v-card>
    </v-flex>    
</template>

<script type="text/javascript">
    export default {
    data () {
        return {
            //
        }
    },

    methods: {
    }
}
</script>