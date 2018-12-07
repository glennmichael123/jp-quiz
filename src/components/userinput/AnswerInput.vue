<style type="text/css" scoped>
	.answer-input {
		width: 30%; 
		margin-left: auto; 
		margin-right: auto;
	}
</style>
<template>
	<v-layout row wrap mt-4>
		<v-flex md12>
            <v-text-field
            label="Answer"
            class="answer-input"
            :value="$store.getters.getAnswer"
            @input="passAnswer"
            :disabled="temporaryDisable"
            box
            ></v-text-field>
		</v-flex>
	</v-layout>
</template>

<script type="text/javascript">
    export default {
        props: ['temporaryDisable'],
        methods: {
            passAnswer(ans) {
                this.$store.commit('passAnswer', ans);
            }
        }
    }
</script>