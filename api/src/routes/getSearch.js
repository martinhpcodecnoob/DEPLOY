const { Router } = require("express");
// const {busquedaNEW} = require('../controller/newsApi.js')
const {Search} = require('../db.js')

const {add_subtract_days} = require('../controller/utils')
require('dotenv').config({path:'../../.env'});
const {YOUR_API_KEY} = process.env;

const router = Router();

router.get('/:buscar',async(req,res)=>{
    const {buscar} = req.params;
    try {
        // let comprobarBDsearch = await Search.findAll()
        // const busquedaTotal = await BusquedaApi(buscar)
        // if (comprobarBDsearch.length < 1) {
        //     busquedaTotal.forEach(async(element,i) => {
        //         await Search.findOrCreate({
        //             where:{
        //                 id:i,
        //                 category:element.category,
        //                 name:element.name,
        //                 author: element.author,
        //                 title: element.title,
        //                 description: element.description,
        //                 url: element.url,
        //                 urlToImage: element.urlToImage,
        //                 publishedAt: element.publishedAt,
        //             }
        //         })
        //     });
        //     let newResult = await Search.findAll()
        //     res.send(newResult)

        // const busquedaTotal = await BusquedaApi(buscar)
        

        // }else{
        //     await Search.destroy({
        //         truncate:true
        //     })
        //     busquedaTotal.forEach(async(element,i) => {
        //         await Search.findOrCreate({
        //             where:{
        //                 id:i,
        //                 category:element.category,
        //                 name:element.name,
        //                 author: element.author,
        //                 title: element.title,
        //                 description: element.description,
        //                 url: element.url,
        //                 urlToImage: element.urlToImage,
        //                 publishedAt: element.publishedAt,
        //             }
        //         })
        //     });
        //     let newResult = await Search.findAll()
        //     res.send(newResult)
        // }

            const fechaActual = add_subtract_days(-2)
            try {
                const extractApi = await axios({
                    method:'GET',
                    url:`https://newsapi.org/v2/everything?q=${buscar}&from=${fechaActual}&sortBy=popularity&apiKey=${YOUR_API_KEY}`
                }).catch((e) => console.log(e))
        
                const API = await extractApi.data.articles.map((element) => {
                    return{
                        category: 'busqueda',
                        name:element.source.name ? element.source.name.slice(0,254): "",
                        author:element.author ? element.author.slice(0,254) : "",
                        title:element.title ? element.title.slice(0,254) : "",
                        description: element.description ? element.description.slice(0,254):"",
                        url:element.url ? element.url : "",
                        urlToImage: element.urlToImage ? element.urlToImage : "",
                        publishedAt:element.publishedAt ? fechaHora(element.publishedAt) : "",
                    }
                })
                // console.log(API);
            } catch (error) {
                let arrayError = [{
                    mensaje:"Se excedio las peticiones en busqueda",
                    error:error
                }]
                return arrayError
            }
            res.send(API)
        
    } catch (error) {
        res.status(400).send({error:error})
    }
})

module.exports = router;