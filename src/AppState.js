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
  
  /**@type {import('./models/Gift.js').Gift[]} */
  gifts: [
    {
      tag: 'Test-Tag1',
      url: '//thiscatdoesnotexist.com',
      opened: false,
    },
    {
      tag: 'Test-Tag2',
      url: '//thiscatdoesnotexist.com',
      opened: false,
    },
    
    {
      tag: 'Test-Tag3',
      url: '//thiscatdoesnotexist.com',
      opened: false,
    },
    
    {
      tag: 'Test-Tag4',
      url: '//thiscatdoesnotexist.com',
      opened: false,
    },
  ]
});


  // cats: [{
  //   name: 'Fat Cat',
  //   img: 'https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fimg.artpal.com%2F274511%2F99-19-6-3-17-17-57m.jpg',
  //   affection: 2
  // },{
  //   name: 'Geoge',
  //   img: 'https://th.bing.com/th/id/OIP.5mfOKeQ5uUVKy1EGowudSQHaEK?pid=ImgDet&rs=1',
  //   affection: 7,
  // },{
  //   name: 'Aaron',
  //   img: 'https://i.pinimg.com/originals/72/48/a1/7248a1d4a343b9e78930bf250a2db212.jpg',
  //   affection: 4
  // }]