const { Router } = require("express");
const {BusquedaApi,infoTotal,infoTotalBusqueda} = require('../controller/newsApi.js')
const {Search} = require('../db.js')

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
        
        const busquedaTotal = await infoTotalBusqueda()
        if (busquedaTotal.length < 1) {
            res.send(400).send({error:"Algo anda mal"})
        }else{
            res.send(busquedaTotal)
        }

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


    } catch (error) {
        res.status(400).send({error:error})
    }
})

module.exports = router;