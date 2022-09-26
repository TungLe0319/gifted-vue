<template>
<div class="col-md-3">
    <div class="giftCard">
<div
  class="card mt-3 d-flex justify-content-center align-items-center  elevation-5 border-dark border-2 border mx-4 my-2 present"
  style="width: 15rem;height: 20rem;">
  <div>
    <img :src="gift.url" alt="" style="width:8rem;" class="rounded elevation-4">
  </div>
  <div class="d-flex text-center text-shadow">
    <button class="btn bg-dark text-light p-3" >
Open Present
    </button>
  
  </div>
  <div>
    <h6>{{gift.tag}}</h6>
    <h6>{{gift.opened}}</h6>
  </div>
</div>

  </div>
</div>
</template>


<script>
import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";




  
export default {
  props:{
    gift:{type: Gift, required: true}
  },
  setup(props){
    const gift= props.gift

    return {
   gift
    }
  }
}
</script>


<style lang="scss" scoped>

</style>