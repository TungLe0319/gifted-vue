<template>
  <div class="giphy-Card my-2  mx-2 col-md-5 selectable" @click="selectedGif()">
<img :src="giphy?.url" alt="" width="150" height="150" class="rounded border border-2 border-dark">

  </div>
</template>


<script>
import { AppState } from "../AppState.js";
import { Giphy } from "../models/Giphy.js";

export default {
  props:{
giphy:{type: Giphy, required:true}
  },
  
  setup(props){
    return {
      selectedGif(){
        AppState.selectedGiphy =props.giphy.url
        // console.log(AppState.selectedGiphy);
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>