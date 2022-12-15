<script>
import {store} from "../store";
import axios from "axios";

export default{
    data(){
        return{
            store,
            userSearch: " ",
        }
    },
    emits: ["performSearch"],
    methods: {
        onButtonSearch (){
            this.store.searchText = this.userSearch;
            this.$emit("performSearch");
        }
    }
}
</script>

<template>
    <header>
        <div class="container">
            <div class="d-flex m-3">
                <input v-model="userSearch" class="form-control w-100 mx-2" type="text" placeholder="Ciao! Cosa avevi in mente?" name="title">
                <button class="btn btn-primary"
                @click="onButtonSearch">
                    <i class="fa-solid fa-magnifying-glass"></i> 
                </button>
            </div>
        </div>
    </header>
</template>

<style lang="scss">
    @use "../style/general.scss" as *;
</style>

