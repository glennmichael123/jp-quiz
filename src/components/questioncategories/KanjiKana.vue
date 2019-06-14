<template>
    <v-flex md6>
        <v-card color="blue-grey lighten-3">
            <v-card-title primary-title>
                <div>
                    <div class="headline">Kanji to Hiragana</div>
                    <span>You will give the hiragana(english alphabet version) of a given hiragana character</span>
                </div>
            </v-card-title>
            <v-card-actions>
                <v-btn :to="{ name: 'kanjikanaquiz' }">Take quiz</v-btn>
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