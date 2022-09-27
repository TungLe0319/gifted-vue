<template>
  
<div class="container">
  <div class="row gifts " >
   <div class="col-md-3" v-for="g in gifts" :key="g" >


     <giftCard :gift="g"/>
   </div>
    
    
  </div>
  <GiftForm/>
</div>
</template>

    

<script>
import { AppState } from "../AppState.js";

import GiftCard from "../components/GiftCard.vue";
import { Gift } from "../models/Gift.js";
import GiftForm from "../components/GiftForm.vue";


export default {

    setup() {
const gifts = AppState.gifts
        return {
gifts
        }
        
    },
    components: { GiftCard ,GiftForm}
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

