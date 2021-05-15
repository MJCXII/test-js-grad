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

 * With the results from this request, inside "content",
 * list every maintainer and each package name that they maintain,
 * return an array with the following shape:
[
    ...
    {
        username: "a-username",
        packageNames: ["a-package-name", "another-package"]
    }
    ...
]
 * NOTE: the parent array and each "packageNames" array should
 * be in alphabetical order.
 */

 return axios.post('http://ambush-api.inyourarea.co.uk/ambush/intercept', {
  url: 'https://api.npms.io/v2/search/suggestions?q=react',
  method: "GET",
  return_payload: true
})
.then((response) => {
  hashOfMaintainersAndPackages = {}
    username = response.data.content[0].package.maintainers[0].username
    console.log(username)
    for(a=0;a<response.data.content.length;a++) {
      for(b=0;b<response.data.content[a].package.maintainers.length;b++) {
        let username = response.data.content[a].package.maintainers[b].username
        for(j=0;j<response.data.content.length;j++) {
          for(k=0;k<response.data.content[j].package.maintainers.length;k++)
            response.data.content[j].package.maintainers[k].username == username ? console.log(`${username}, ${response.data.content[j].package.name}`) : null
          }
        }
      }

  }, (error) => {
  console.log(error);
});

module.exports = async function organiseMaintainers() {
  // TODO

  return maintainers
};
