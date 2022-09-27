import { api } from "./AxiosService.js";

class GiftsService{


   async getGifts() {
    const res = await api.get('/api/gifts');
      console.log('response:', res.data);
   }

}

export const giftsService = new GiftsService()