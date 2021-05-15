const axios = require('axios')
const semver = require('semver');
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

 *  With the results from this request, inside "content", count
 *  the number of packages that have a MAJOR semver version
 *  greater than 10.x.x
 */

module.exports = async function countMajorVersionsAbove10() {
  return axios.post('http://ambush-api.inyourarea.co.uk/ambush/intercept', {
   url: 'https://api.npms.io/v2/search/suggestions?q=react',
   method: "GET",
   return_payload: true
 })
 .then((response) => {
   var count = 0;
   for(i=0;i<response.data.content.length;i++) {
     semver.gt(response.data.content[i].package.version, '10.0.0') ? count++ : count
   }
    return count;
 }, (error) => {
   console.log(error);
 });
};
