const { Router } = require("express");
const {infoTotal} = require('../controller/newsApi.js')
const {New} = require('../db.js')

const router = Router();

router.get('/', async(req,res) => {
    let comprobarType = await New.findAll()
    try {
        if (comprobarType.length < 1) {
            let categoriaType = await infoTotal();
            categoriaType.forEach(async(element,i) => {
                await New.findOrCreate({
                    where:{
                        id:i,
                        category:element.category,
                        name:element.name,
                        author: element.author,
                        title: element.title,
                        description: element.description,
                        url: element.url,
                        urlToImage: element.urlToImage,
                        publishedAt: element.publishedAt,
                    }
                })
            });
            
            let newResult = await New.findAll()
            res.send(newResult)
        } else{
            res.send(comprobarType)
        }
    } catch (error) {
        res.status(400).send({error:error})
    }
})



module.exports = router;