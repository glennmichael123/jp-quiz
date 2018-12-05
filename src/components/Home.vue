<template>
    <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
            <HiraganaRomaji></HiraganaRomaji>
            <RomajiHiragana></RomajiHiragana>
        </v-layout>

        <v-layout row wrap mt-2>
            <KatakanaRomaji></KatakanaRomaji>
            <RomajiKatakana></RomajiKatakana>
        </v-layout>
    </v-container>
</template>

<script type="text/javascript">
    import HiraganaRomaji from './questioncategories/HiraganaRomaji';
    import KatakanaRomaji from './questioncategories/KatakanaRomaji';
    import RomajiHiragana from './questioncategories/RomajiHiragana';
    import RomajiKatakana from './questioncategories/RomajiKatakana';

	export default {
    name: 'Home',
    components: { RomajiHiragana, HiraganaRomaji, KatakanaRomaji, RomajiKatakana },
    data () {
        return {
            //
        }
    }
}
</script>