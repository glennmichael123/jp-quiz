<template>
    <v-container grid-list-md text-xs-center class="mt-5">
        <v-layout row wrap>
            <hiragana-romaji></hiragana-romaji>
            <katakana-romaji></katakana-romaji>
        </v-layout>
        <v-layout row wrap>
            <kanji-kana></kanji-kana>
        </v-layout>
    </v-container>
</template>

<script type="text/javascript">
    import HiraganaRomaji from './questioncategories/HiraganaRomaji';
    import KatakanaRomaji from './questioncategories/KatakanaRomaji';
    import KanjiKana from './questioncategories/KanjiKana';

	export default {
    name: 'Home',
    components: { HiraganaRomaji, KatakanaRomaji, KanjiKana },
    data () {
        return {
            //
        }
    }
}
</script>