<template>
  <div class="search-form">

  <form @submit.prevent="getGiphys">

<div class="form-floating mb-3 mt-3">
  <input type="text" class="form-control" name="search" id="search" >
  <label for="search">Search Present</label>
</div>
            </form>
  </div>
</template>


<script>
import { giphysService } from "../services/GiphysService.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";

export default {


  setup(){
    return {

      async getGiphys(){
 try {
    
    
      // @ts-ignore
      const form = window.event.target;
      
      // @ts-ignore
      console.log("inputdata",form);
      // @ts-ignore
      // await giphysService.getGiphys();
    } catch (error) {
      logger.error('[getGiphys]')
      console.error('[getGiphys]', error);
      Pop.error(error);
    }

      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>