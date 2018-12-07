<template>
    <v-flex md6>
        <v-card color="blue-grey lighten-2">
            <v-card-title primary-title>
                <div>
                    <div class="headline">Hiragana to Romaji</div>
                    <span>You will give the romaji(english alphabet version) of a given hiragana character</span>
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