<template>
    
        <v-container grid-list-md text-xs-center class="mt-5">
            <Instructions></Instructions>
            <CharacterDisplay :character="character"></CharacterDisplay>
            <AnswerInput></AnswerInput>
            <v-btn color="warning">Cancel</v-btn>
            <v-btn color="success">Submit</v-btn>
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
            character: {
                'character': null,
                'answered': false,
            },
            answered: '',
        }
    },

    mounted () {
        this.nihonwords = jpwords;

        this.randomQuestion();
    },

    methods: {
        randomQuestion () {
            const length = this.nihonwords.length - 1;
            let id = Math.floor(Math.random() * length) + 1;

            this.character.character = this.nihonwords[id].hiragana;
            this.character.answered  = true;
        },
    }
}
</script>