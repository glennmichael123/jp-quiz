<template>
    <v-container grid-list-md text-xs-center class="mt-5">
        <v-layout row wrap>
            <HiraganaRomaji></HiraganaRomaji>
            <KatakanaRomaji></KatakanaRomaji>
        </v-layout>
    </v-container>
</template>

<script type="text/javascript">
    import HiraganaRomaji from './questioncategories/HiraganaRomaji';
    import KatakanaRomaji from './questioncategories/KatakanaRomaji';

	export default {
    name: 'Home',
    components: { HiraganaRomaji, KatakanaRomaji },
    data () {
        return {
            //
        }
    }
}
</script>