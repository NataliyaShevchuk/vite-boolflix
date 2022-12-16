<script>
    import {store} from "../store";
    import axios from "axios";


    export default {
        props:{
            singleMovie: {
                type: Object,
                required: true,
            }
        },
        data(){
            return {
                store,
            }
        },
        methods: {
            starsRate(){
            let decimalRate = Math.round(this.singleMovie.vote_average / 2);
            console.log(decimalRate, "rate");
            const starsRating = [];

            for(let i=0; i < 5; i++){
                this.starsRating.push(  i < decimalRate)
                let fullStar = i < decimalRate;

                if( decimalRate === i && i === 5){
                    fullStar.push("fa-solid fa-star");
                }else {
                    fullStar.push("fa-regular fa-star");
                }
                starsRating.push(fullStar);
            }

            return this.starsRating;
            
            }
        },
    }
</script>

<template>
    <div class="">
        <img class="position-relative " :src="store.img.link + store.img.size + singleMovie.poster_path" alt="">
        <div class=" overlay">
            <h3> {{singleMovie.title}} </h3>
            <h4> {{singleMovie.original_title}} </h4>
            <h5> {{singleMovie.original_language}} </h5> 
            <h6 v-for="star in starsRate"> <i  :class="star" class="fa-solid fa-star"></i> </h6>
            <p> {{singleMovie.overview}} </p>
        </div>
    </div>
</template>


<style lang="scss">
@use "../style/general.scss" as *;

</style>