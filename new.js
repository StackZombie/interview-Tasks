let author = 'epaga'
let pageNumber =1
let title = []
let url = ` https://jsonmock.hackerrank.com/api/articles?author=${author}&page=${pageNumber}`
const https = require('https');



const getArticles =((url, data) => {
    return new Promise((resolve, reject) => {
      const req = https.request(url,
        (res) => {
          let data = '';
          res.on('data', (chunk) => (data += chunk.toString()));
          res.on('error', reject);
          res.on('end', () => {
            
              
              resolve(JSON.parse(data));
            
              reject('Request failed. status: ');
            
          });
        });
      req.on('error', reject);
      
      req.end();
    });
  });
 
  getArticles(url,title).then(result=>{
      console.log(result.data)
      let articles = result.data
       for(let article of articles){
        
            if(article.title){
                title.push(article.title)
            }else if(article.title==="" && article.story_title!==""){
                title.push(article.story_title)
                
            }}
        
        
         console.log(title)
  })


  
  