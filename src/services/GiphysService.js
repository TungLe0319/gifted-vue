import { giphyServer } from './AxiosService.js';

class GiphysService {
  async getGiphys(searchInput) {
    const res = await giphyServer.get(`/search`, {
      params: {
        api_key: 'r5x2L1bUvO5l0i4DnRZ5NeEP9baGRMSd',
        rating: 'pg-13',
        q: searchInput,
      },
    });
    console.log(res.data.data);

  }

  async searchGiphys() {}
}
export const giphysService = new GiphysService();
