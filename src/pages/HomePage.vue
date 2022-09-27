<template>
  <div class="container">
    <div class="row gifts justify-content-center scrollme">
      <giftCard v-for="gift in gifts" :key="gift.id" :gift="gift" />
    </div>
 
  </div>
</template>

<script>
import { AppState } from '../AppState.js';
import { giftsService } from '../services/GiftsService.js';
import Pop from '../utils/Pop.js';
import { logger } from '../utils/Logger.js';

import { giphysService } from "../services/GiphysService.js";
import { computed } from "@vue/reactivity";

export default {
  setup() {
    async function getGifts() {
      try {
        await giftsService.getGifts();
      } catch (error) {
        logger.error('[gettingGifts]');
        console.error('[gettingGifts]', error);
        Pop.error(error);
      }
    }
    getGifts();

    async function getGiphys(){
      try {
          await giphysService.getGiphys()
        } catch (error) {
          logger.error('[getGiphys]')
          console.error('[getGiphys]',error)
          Pop.error(error)
        }
    }

    getGiphys()
    return {
      gifts: computed(() => AppState.gifts),

      async openGift() {
        try {
          await giftsService.openGift();
        } catch (error) {
          logger.error('[openGift]');
          console.error('[openGift]', error);
          Pop.error(error);
        }
      },
    };
  },
};
</script>

<style scoped lang="scss">
.scrollme {
  max-height: 75vh;
  overflow: auto;
}
</style>

/**
