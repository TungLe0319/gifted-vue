import { AppState } from "../AppState.js";
import { Giphy } from "../models/Giphy.js";
import { giphyServer } from './AxiosService.js';

class GiphysService {
  async getGiphys(searchInput) {
    const res = await giphyServer.get(`/search`, {
      params: {
        api_key: 'r5x2L1bUvO5l0i4DnRZ5NeEP9baGRMSd',
        rating: 'pg-13',
        lang:'en',
        q: searchInput,
        limit:20
      },
    });
    // console.log(res.data.data);
AppState.giphys = res.data.data.map(g=> new Giphy(g))
  }



  async searchGiphys() {}
}
export const giphysService = new GiphysService();
