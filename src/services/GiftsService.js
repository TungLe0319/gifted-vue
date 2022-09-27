import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "./AxiosService.js";

class GiftsService{


   async getGifts() {
    const res = await api.get('/api/gifts');
      // console.log('response:', res.data);
      AppState.gifts = res.data.map(g => new Gift(g))
   }

   async openGift(){
      const res = await api.put('/api/gifts')
   }

   
}

export const giftsService = new GiftsService()