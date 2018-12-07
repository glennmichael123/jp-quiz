<style type="text/css" scoped>
	.answer-input {
		width: 30%; 
		margin-left: auto; 
		margin-right: auto;
	}
</style>
<template>
	<v-layout row wrap>
		<v-flex md12>
			<v-text-field
			label="Answer"
			class="answer-input"
            :value="$store.getters.getAnswer"
            @input="passAnswer"
			required
			></v-text-field>
		</v-flex>
	</v-layout>
</template>

<script type="text/javascript">
    export default {
        methods: {
            passAnswer(ans) {
                this.$store.commit('passAnswer', ans);
            }
        }
    }
</script>