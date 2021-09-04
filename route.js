const express = require('express');
const router = express.Router();
const axios = require('axios');

const firebaseMiddleware = require('express-firebase-middleware');

// router.use('/api', firebaseMiddleware.auth);

router.get('/', async (req, res) => {

    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=artificial+intelligence`;

    axios(endpoint)
        .then(function(response){
            // return response.json();
            res.json({
                data: response.data.query.search
            });
        })
        // .then(function(response) {
        //     if (response.query.search[0].title === "artificial intelligence"){
        //         console.log("Your search page 'artificial intelligence' exists on English Wikipedia" );
        //     }
        // })
        .catch(function(error){console.log(error);});
});

module.exports = router;