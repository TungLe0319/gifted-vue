import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api } from "./AxiosService.js";

class GiftsService{


   async getGifts() {
    const res = await api.get('/api/gifts');
      // console.log('response:', res.data);
      AppState.gifts = res.data.map(g => new Gift(g))
   }

   async openGift(giftId){
      const gift = AppState.gifts.find(gift => gift.id ==giftId)
      if (!gift) {
         throw new Error('Bad Id')
      }
      gift.opened = true
      const res = await api.put(`/api/gifts/${giftId}`,gift)
      // console.log(res.data,gift);
      gift.url= res.data.url
      
   }

   async addGift(formData){
    const res = await api.post('/api/gifts',formData)
   //  console.log(res.data);
    let newGift = new Gift(res.data)
    AppState.gifts = [newGift, ...AppState.gifts]
   }
}

//  async addGiphy() {
//     // @ts-ignore
//     window.event.preventDefault()
//     // @ts-ignore
//     const form = window.event.target
//     let formData = getFormData(form)
//     // @ts-ignore
//     form.reset()
//     console.log(formData)
//     const res = await sandBoxServer.post('/api/gifts', formData)
//     console.log(res.data)
//     let newGiphy = new SandBoxGiphy(res.data)
//     console.log(newGiphy)
//     appState.sandboxGiphys = [newGiphy, ...appState.sandboxGiphys]
//   }

export const giftsService = new GiftsService()