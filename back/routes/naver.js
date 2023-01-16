var Axios = require('axios');
var express = require('express');
var router = express.Router();
var api = require('./api');
/* GET home page. */
router.get('/getNaverMovie', async function(req, res) {
    let query = req.query.query;
    let reqOptions = {
        headers: {
            "X-Naver-Client-Id": api.Id,
            "X-Naver-Client-Secret": api.Secret
        },
        params: {
            query:query
        }
    }
try{
    //카카오톡 서버로 요청
    let movieRes = await Axios.get(
        'https://openapi.naver.com/v1/search/movie.json',
        reqOptions
    );
    return res.json(movieRes.data);
}
catch(e){
    return res.json({
        status:400,
        message: e
    });
}
});

module.exports = router;