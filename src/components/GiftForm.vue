<template>
  <div class="form ">



<div class="offcanvas offcanvas-start" tabindex="-1" id="formOffCanvas" aria-labelledby="formOffCanvas">
  
  <div class="offcanvas-body offbg">
   
   <form @submit.prevent="handleSubmit" >


   </form>
  
  </div>
  <searchForm/>
</div>

  </div>
</template>


<script>
import { ref } from "vue";

export default {

  editable:ref({}),
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

.offbg{
  background-image: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F464%2F422%2Foriginal%2Fvector-present-gift-box-seamless-pattern-suitable-for-use-as-wrapping-paper-gift.jpg&f=1&nofb=1&ipt=e79163acac482545c6eac819fe91cc5edee80cfc409128c09f87212d25ead1f9&ipo=images);
  background-size: contain;
  background-position: center;
  
}

</style>

 