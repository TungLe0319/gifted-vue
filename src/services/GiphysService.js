import { giphyServer } from './AxiosService.js';

class GiphysService {
  async getGiphys() {
    const res = await giphyServer.get('/v1/gifs/search', {
      params: {
        api_key: 'SHAhnnBWk8sW7Pyga6hif9bQ8LLrlDj3',
        q: '',
      
      },
    });
    console.log(res.data);

  }

  async searchGiphys() {}
}
export const giphysService = new GiphysService();
