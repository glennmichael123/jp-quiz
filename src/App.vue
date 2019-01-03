<template>
    <v-app>
        <v-toolbar v-if="!$store.getters.getQuizStatus">
            <v-toolbar-title class="header-title" @click="goHome">Japanese Quiz</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-sm-and-down">
                <v-btn :to="{ name: '/' }" flat>Home</v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <!-- the router outlet, where all matched components would ber viewed -->
        <router-view></router-view>
        <vue-progress-bar></vue-progress-bar>
    </v-app>
</template>

<script>
    export default {
        name: 'App',
        mounted () {
            this.$Progress.finish()
        },
        created () {
            this.$Progress.start()
            this.$router.beforeEach((to, from, next) => {
                if (to.meta.progress !== undefined) {
                    let meta = to.meta.progress
                    this.$Progress.parseMeta(meta)
                }
                this.$Progress.start()
                next()
            })
            this.$router.afterEach(() => {
                this.$Progress.finish()
            })
        },
        methods: {
            goHome() {
                this.$router.push({ name: '/' });
            }
        }
    }
</script>

<style type="text/css">
    html {

    }

    #app {
        background-color: #EEEEEE;
    }

    .header-title {
        cursor: pointer;
    }
</style>
