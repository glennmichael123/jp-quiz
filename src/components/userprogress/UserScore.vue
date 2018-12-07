<style type="text/css" scoped>
span {
    font-size: 11px;
    text-align: center;
}

.user-score {
    width: 50%; 
    margin-right: auto; 
    margin-left: auto;
}

</style>

<template>
    <div class="user-score mt-2">
        <v-layout row wrap>
            <v-flex md6> 
                <span class="correct green--text">Correct: 20</span> 
            </v-flex>
            <v-flex md6> 
                <span class="wrong red--text">Wrong: 10</span> 
            </v-flex>
        </v-layout>
    </div>
    
</template>

<script type="text/javascript">
    export default {
        methods: {
        }
    }
</script>