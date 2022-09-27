<template>
  <div class="search-form">
    <form @submit.prevent="getGiphys">
      <div class="form-floating mb-3 mt-3">
        <input
          type="text"
          class="form-control"
          name="search"
          required="true"
          placeholder="Search For Gifts"
          v-model="editable.value"
        />
        <label for="search">Search through Giphys</label>
      </div>
    </form>
    <div class="row">
      <giphy v-for="g in giphy" :key="g.id" :giphy="g"/>
    </div>
  </div>
</template>

<script>
  
import { computed } from "@vue/reactivity";
import { ref } from "vue";
import { AppState } from "../AppState.js";
import { giphysService } from '../services/GiphysService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {
    const editable = ref({});
    return {
      giphy:computed(() => AppState.giphys),
      editable,


      async getGiphys() {
        try {
         
          console.log(editable);
        await giphysService.getGiphys(editable._rawValue.value)
        } catch (error) {
          logger.error('[getGiphys]');
          console.error('[getGiphys]', error);
          Pop.error(error);
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped></style>
