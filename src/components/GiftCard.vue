<template>

    
<div
  class="card mt-3 d-flex justify-content-center align-items-center  elevation-5 border-dark border-2 border mx-4 my-2 present"
  style="width: 15rem;height: 20rem;">
  <div v-if="gift.opened">
    <img :src="gift.url" alt="" style="width:12rem;" class="rounded elevation-4  ">
  </div>
  <div class="d-flex text-center text-shadow" v-if="!gift.opened">
    <button class="btn   p-3 openBtn" @click="gift.opened = !gift.opened" >
     <img src="https://cdn-icons-png.flaticon.com/512/656/656857.png" alt="" width="190" class="wrap">
    </button>
  
  </div>
  <div v-if="gift.opened" class="mt-3">
    <div class=" bg-light  p-2 rounded scrollme">

      <p >{{gift.tag}}</p>
    </div>
  </div>
  
</div>



</template>


<script>

import { Gift } from "../models/Gift.js";
import { giftsService } from "../services/GiftsService.js";




  
export default {
  
  props:{

    //if I bring down the intellisense import in appstate i don't have to use in props gift:(type: Gift) i can just do Gift.
    gift:{ Gift}
  },
  setup(props){
    const gift= props.gift
 

    
    return {
   gift,

  


    }
  }
}
</script>


<style lang="scss" scoped>
  ::-webkit-scrollbar{
   display: none;
  }

.openBtn:hover{
  
  transform: scale(1.14);
  transition: all 0.4s ease;
  
}

.text-shadow{
  color: rgb(192, 184, 184);
  text-shadow: 1px 1px rgb(167, 167, 167);
  font-weight: bold;
  letter-spacing: 0.08rem
  
  /* Second Color  in text-shadow is the blur */
}

.present{
  background-image: url(https://i.giphy.com/media/CVqJvbJcn3cxHebeGE/giphy.webp);
  filter: sepia(50%);
}

.scrollme{
  max-height: 5vh;
  
  overflow-y: auto;
}

.wrap:hover{

  filter: hue-rotate(90deg) ;
  transition: all 0.3s ease-in;
}

</style>