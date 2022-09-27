<template>
  <div class="form">
    <div
      class="offcanvas offcanvas-start"
      tabindex="-1"
      id="formOffCanvas"
      aria-labelledby="formOffCanvas"
    >
      <div class="offcanvas-body offbg">
        <form @submit.prevent="handleSubmit">
          <div class="form-floating mb-3 mt-3">
            <input
              type="text"
              class="form-control"
              name="tag"
              required="true"
              placeholder="Add a Tag"
              v-model="editable.tag"
            />
            <label for="search">Add a Tag</label>
          </div>
          <div class="form-floating mb-3 mt-3">
            <input
              type="url"
              class="form-control"
              name="url"
              required="true"
              placeholder="Add a Tag"
              v-model="editable.url"
            />
            <label for="search">Giphy url</label>
            <button type="submit" class="btn btn-lg">Submit</button>
          </div>
        </form>

        <searchForm />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { giftsService } from '../services/GiftsService.js';
import { giphysService } from '../services/GiphysService.js';
import Pop from '../utils/Pop.js';

export default {
  setup() {
    const editable = ref({});
    return {
      editable,
      async handleSubmit() {
        try {
          await giftsService.addGift(editable.value);
        } catch (error) {
          console.error('[handleSubmit,GiftForm]', error);
          Pop.error(error);
        }
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.offbg {
  background-image: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F464%2F422%2Foriginal%2Fvector-present-gift-box-seamless-pattern-suitable-for-use-as-wrapping-paper-gift.jpg&f=1&nofb=1&ipt=e79163acac482545c6eac819fe91cc5edee80cfc409128c09f87212d25ead1f9&ipo=images);
  background-size: contain;
  background-position: center;
}
</style>
