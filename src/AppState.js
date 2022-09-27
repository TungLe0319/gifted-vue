import { reactive } from 'vue'
import { Gift } from "./models/Gift.js"

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /**@type {import('./models/Account.js').Account} */
  account: {},
  //Very similar to appState from before, AppState now has a Cap "A"
  
  gift:{tag:'Test-Tag0',
  url:'//thiscatdoesnotexist.com',
  opened:false},
  
  /**@type {import('./models/Gift').Gift[]} */
  gifts: [],
  
  
  /**@type {import('./models/Giphy').Giphy[]} */
giphys:[],
selectedGiphy:''
});


