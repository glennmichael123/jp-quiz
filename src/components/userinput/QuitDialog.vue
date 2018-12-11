<template>
    <v-dialog
    v-model="$store.getters.getDialogStatus"
    width="500"
    >
        <v-btn
            slot="activator"
            color="warning"
            @click="$store.commit('toggleDialog', true)"
            dark
        >

            Cancel
        </v-btn>

        <v-card>
            <v-card-title
                class="headline grey lighten-2"
                primary-title
            >
                Quit Game
            </v-card-title>

            <v-card-text>
                Are you sure you want to quit?
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="primary"
                    flat
                    @click="$store.commit('toggleDialog', false)"
                >
                    Cancel
                </v-btn>

                <v-btn
                    color="red"
                    flat
                    @click="quitGame"
                >
                    Quit
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script type="text/javascript">
    export default {
        methods: {
            quitGame()  {
                this.$router.push({ name: '/' });
                this.$store.commit('toggleDialog', false);
            }
        }
    }
</script>