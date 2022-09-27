import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com',
  timeout: 8000,
  
});


export const giphyServer = Axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  timeout: 8000,
});

//params:{
 //   api_Key:"SHAhnnBWk8sW7Pyga6hif9bQ8LLrlDj3"
// }