class GiftsService{


   async getGifts() {
    const res = await api.get('/api/gifts',{
        params:{
        
        }
      });
      console.log('response:', res.data);
   }
  
}

export const giftsService = new GiftsService()