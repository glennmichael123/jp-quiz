<style type="text/css" scoped>
span {
    font-size: 15px;
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
                <span class="correct green--text"><i class="fas fa-check"></i> {{ $store.getters.getScoreCorrect }}</span> 
            </v-flex>
            <v-flex md6> 
                <span class="wrong red--text"><i class="fas fa-times"></i> {{ $store.getters.getScoreWrong }}</span> 
            </v-flex>
        </v-layout>
    </div>
    
</template>

<script type="text/javascript">
    export default {
    }
</script>