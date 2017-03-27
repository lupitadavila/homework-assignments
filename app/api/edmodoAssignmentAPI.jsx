var axios = require('axios'); // NPM module to query APIs

const TOKEN = '12e7eaf1625004b7341b6d681fa3a7c1c551b5300cf7f7f3a02010e99c84695d';
const ASSIGNMENTS_URL = 'https://api.edmodo.com/assignments';
module.exports = {
  getAssignments: function (){
    var requestUrl = `${ASSIGNMENTS_URL}?access_token=${TOKEN}`;

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
  },
  getAssignment: function(id){
    var requestUrl = `${ASSIGNMENTS_URL}/${id}?access_token=${TOKEN}`;
    
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
