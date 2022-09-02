const PORT = 7777
const axios = require('axios')
const cheerio = require('cheerio')
const cors = require('cors')
const express = require('express')
const app = express()

app.listen(PORT, () => console.log(`server running on ${PORT}`))
app.use(cors())

const url = 'https://www.infoworld.com/category/javascript/'



app.get('/results', function(req,res){
axios(url)
.then(response => {
    const html = response.data
    const $ = cheerio.load(html)
    const articles = []

    $('.river-well', html).each(function(){
        const url = 'https://www.infoworld.com' + $(this).find('a').attr('href')
        const title = $(this).find('h3').text()
        articles.push({
            title,
            url
        })
    })
    res.json(articles)
}).catch(err => console.log(err))
})

