<template>
  <div class="col-md-3">
    <div
      :class="gift.opened ? 'presentOpened' : 'present'"
      class="card mt-1 d-flex justify-content-center align-items-center elevation-5 border-dark border-2 border my-2"
      style="width: 15rem; height: 20rem"
    >
      <div v-if="gift.opened">
        <img :src="gift?.url" class="rounded elevation-4 gifimg" />
      </div>

      <div class="d-flex text-center text-shadow" v-if="!gift.opened">
        <button class="btn p-3 openBtn" @click="openGift()">
          <img
            src="https://cdn-icons-png.flaticon.com/512/656/656857.png"
            alt=""
            width="190"
            class="wrap"
          />
        </button>
      </div>
      <div v-if="gift.opened" class="mt-3">
        <div class="bg-light p-2 rounded scrollme">
          <p>{{ gift.tag }}</p>
          <p></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Gift } from '../models/Gift.js';
import { giftsService } from '../services/GiftsService.js';
import Pop from '../utils/Pop.js';

export default {
  props: {
    //if I bring down the intellisense import in AppState i don't have to use in props gift:(type: Gift) i can just do Gift.
    //since this is now called gift, in homepage.vue with <GiftCard :gift=""/> gift is the prop here.
    gift: { type: Gift, required: true },
  },
  setup(props) {
    //I don't have to do const gift = props.gift..

    return {
      async openGift() {
        try {
          await giftsService.openGift(props.gift.id);
          Pop.success("You're the First and Last person to Open this!")
        } catch (error) {
          console.error('[openGift]', error);
          Pop.error(error);
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
::-webkit-scrollbar {
  display: none;
}

.openBtn:hover {
  transform: scale(1.14);
  transition: all 0.4s ease;
}

.text-shadow {
  color: rgb(192, 184, 184);
  text-shadow: 1px 1px rgb(167, 167, 167);
  font-weight: bold;
  letter-spacing: 0.08rem;

  /* Second Color  in text-shadow is the blur */
}

.present {
  background-image: url(https://i.giphy.com/media/CVqJvbJcn3cxHebeGE/giphy.webp);
  filter: sepia(50%);
}
.presentOpened {
  background-image: url(https://i.giphy.com/media/YDWVutd7sTrNyVHTN6/giphy.webp);
  filter: sepia(50%);
}

.scrollme {
  max-height: 5vh;

  overflow-y: auto;
}

.wrap:hover {
  filter: hue-rotate(90deg);
  transition: all 0.3s ease-in;
}

.gifimg {
  height: 200px;
  width: 200px;
  object-fit: cover;
}
</style>
