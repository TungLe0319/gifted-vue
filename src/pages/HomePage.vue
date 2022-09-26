<template>
  <div class="container-fluid">
  <div class="row" v-for="g in gifts" :gift="g">
 <gift-card/>
  </div>
  </div>
</template>

<script>
import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
//v-for="c in cats" :cat="c"
  
export default {
  setup(){
    name: 'Home'
    let gifts = AppState.gifts
    return{
gifts
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card{
    width: 50vw;
    > img{
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
