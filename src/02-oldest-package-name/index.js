const axios = require('axios')
/**
 * Make the following POST request with either axios or node-fetch:

POST url: http://ambush-api.inyourarea.co.uk/ambush/intercept
BODY: {
    "url": "https://api.npms.io/v2/search/suggestions?q=react",
    "method": "GET",
    "return_payload": true
}

 *******

The results should have this structure:
{
    "status": 200.0,
    "location": [
      ...
    ],
    "from": "CACHE",
    "content": [
      ...
    ]
}

 ******

 *  With the results from this request, inside "content", return
 *  the "name" of the package that has the oldest "date" value
 */


module.exports = async function oldestPackageName() {

  return axios.post('http://ambush-api.inyourarea.co.uk/ambush/intercept', {
   url: 'https://api.npms.io/v2/search/suggestions?q=react',
   method: "GET",
   return_payload: true
 })
 .then((response) => {
    arr = [];
    for(i=0;i<response.data.content.length;i++) {
      arr.push(response.data.content[i].package)
    }

   oldestPackage = arr.reduce((r, o) => r.date > o.date ? o : r);
   let name = oldestPackage.name
   return name
 }, (error) => {
   console.log(error);
 });
};
