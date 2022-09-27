<template>
<div class="col-md-3">
    <div class="giftCard">
<div
  class="card mt-3 d-flex justify-content-center align-items-center  elevation-5 border-dark border-2 border mx-4 my-2 present"
  style="width: 15rem;height: 20rem;">
  <div v-show="gift.opened">
    <img :src="gift.url" alt="" style="width:12rem;" class="rounded elevation-4  ">
  </div>
  <div class="d-flex text-center text-shadow" v-if="!gift.opened">
    <button class="btn bg-light  p-3 openBtn" @click="gift.opened = !gift.opened" >
     <b>   Open Gift </b> 
    </button>
  
  </div>
  <div v-show="gift.opened" class="mt-3">
    <div class=" bg-light  p-2 rounded scrollme">

      <p >{{gift.tag}}</p>
    </div>
  </div>
  
</div>

  </div>
</div>
</template>


<script>
import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { giftsService } from "../services/GiftsService.js";




  
export default {
  
  props:{
    gift:{type: Gift, required: true}
  },
  setup(props){
    const gift= props.gift
 

    
    return {
   gift,

  
//  async getGifts(){
//   try {
//       await  giftsService.getGifts()
//     } catch (error) {
//       console.error('[]',error)
//       Pop.error(error)
//     }
//    }
 


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
  background-image: url(https://media3.giphy.com/media/KVZWZQoS0yqfIiTAKq/giphy.gif?cid=ecf05e47atub5cuvairkzl96wdbnf3x5cjep7l7y5vsmfkdo&rid=giphy.gif&ct=g);
  filter: sepia(50%);
}

.scrollme{
  max-height: 5vh;
  
  overflow-y: auto;
}

</style>