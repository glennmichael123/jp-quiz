<template>
    <v-dialog
    v-model="dialog"
    width="500"
    >
        <v-btn
            slot="activator"
            color="red"
            @click="$store.commit('toggleDialog', true)"
            dark
        >

            やめる
        </v-btn>

        <v-card>
            <v-card-title
                class="headline grey lighten-2"
                primary-title
            >
                Quit Game
            </v-card-title>

            <v-card-text>
               ほんとうにやめるき？
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    flat
                    @click="dialog = false"
                >
                    キャンセル
                </v-btn>

                <v-btn
                    color="red"
                    flat
                    @click="quitGame"
                >
                    やめる
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script type="text/javascript">
    export default {
        data () {
            return {
                dialog: false
            }
        },

        methods: {
            quitGame()  {
                this.$router.push({ name: '/' });
                this.$store.commit('toggleDialog', false);
            }
        }
    }
</script>