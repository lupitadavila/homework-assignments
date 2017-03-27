var axios = require('axios'); // NPM module to query APIs

const TOKEN = '12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d';
const CREATOR_ID = '73240721'
const SUBMISSIONS_URL = 'https://api.edmodo.com/assignment_submissions';
module.exports = {
  getSubmissions: function(id){
    var requestUrl = `${SUBMISSIONS_URL}/?assignment_id=${id}&assignment_creator=${CREATOR_ID}&access_token=${TOKEN}`;

    return axios.get(requestUrl).then(function (res){
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data;
      }
    }, function (err) {
      //throw new Error(err.response.data.message);
      throw new Error('Unable to fetch data');
    });
  }
}
