<style type="text/css" scoped>
	.progress {
		width: 50%; 
		margin-left: auto; 
		margin-right: auto;
	}
</style>

<template>
	<v-progress-linear 
		color="green" 
		height="3"
		class="progress"
		v-model="progress">
	</v-progress-linear>
</template>

<script type="text/javascript">
    export default {
    	props: ['progress'],
        data () {
            return {
           	}
        }
    }
</script>