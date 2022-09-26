<template>
<div class="col-md-3">
    <div class="gift-card">
<div
  class="card mt-3 d-flex justify-content-center align-items-center  elevation-5 border-dark border-4 border mx-4 my-2 present"
  style="width: 15rem;height: 20rem;">
  <div>
    <img src="" alt="" style="width:8rem;" class="rounded elevation-4">
  </div>
  <div class="d-flex text-center text-shadow">
    <h3></h3>
  </div>
</div>

  </div>
</div>
</template>


<script>
import { Gift } from "../models/Gift.js";



  
export default {
  props:{
   gift:{type : Gift, required : true}
  },
  setup(){
    
    return {props}
  }
}
</script>


<style lang="scss" scoped>

</style>