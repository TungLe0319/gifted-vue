<template>
  
<div class="container-fluid">
  <div class="row"  >
 <GiftCard v-for="g in gifts" :gift="g" />
    
  </div>
</div>
</template>

    

<script>
import { AppState } from "../AppState.js";




export default {
    setup() {
        let gifts = AppState.gifts;
        return {
            gifts
        };
    },
   
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


/**

