<script>
import { store } from '../store';
import axios from 'axios';

export default{
    props: {
        singleSeries: {
            type: Object,
            required: true,
        }
    },
    data(){
        return{
            store,
        }
    }
}

</script>

<template>
    <div class="">
        <img class="position-relative" :src="store.img.link + store.img.size + singleSeries.poster_path" alt="">
        <div class="position overlay">
            <h3> {{singleSeries.name}} </h3>
            <h4> {{singleSeries.original_name}} </h4>
            <h5> {{singleSeries.original_language}} </h5>
            <h6> {{singleSeries.vote_average}} </h6>
            <p> {{singleSeries.overview}} </p>
        </div>
    </div>
</template>

<style lang="scss">
@use "../style/general.scss" as *;

</style>