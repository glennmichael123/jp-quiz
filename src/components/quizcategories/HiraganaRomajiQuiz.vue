<template>
    
        <v-container grid-list-md text-xs-center class="mt-5">
            <Instructions></Instructions>
            <CharacterDisplay :character="character"></CharacterDisplay>
            <AnswerInput></AnswerInput>
            <v-btn color="warning">Cancel</v-btn>
            <v-btn color="success" @click="submitQuestion('あ')">Next</v-btn>
        </v-container>
</template>
<script type="text/javascript">
    import CharacterDisplay from '../userinput/CharacterDisplay';
    import Instructions from '../userinput/Instructions';
    import AnswerInput from '../userinput/AnswerInput';
    import WrongAnswer from '../userinput/AnswerInput';
    import jpwords from '../../assets/jpwords.json';

    export default {
    components: { CharacterDisplay, Instructions, AnswerInput },
    name: 'HiraganaRomajiQuiz',
    data () {
        return {
            nihonwords: null,
            character: null,
            counter: 0,
        }
    },

    mounted () {
        this.nihonwords = jpwords;
        this.shuffleQuestions();
        this.displayQuestion();
    },

    methods: {
        submitQuestion(string) {
            this.checkQuestion(string);
            this.counter++;
            this.displayQuestion();
            
        },
        shuffleQuestions () {
           this.nihonwords.sort(function (a, b) {return Math.random() - 0.5;});
        },

        displayQuestion() {
            if (this.counter < this.nihonwords.length) {
                this.character = this.nihonwords[this.counter].hiragana;
            } else {
                alert('finished');
            }
            
        },

        checkQuestion(string) {
            if (string === this.character) {
                console.log('sekai');
            }
        }
    }
}
</script>