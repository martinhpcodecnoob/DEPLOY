const { Router } = require("express");
const {New,Search} = require('../db.js')
const router = Router();

router.get('/:id/:category', async(req,res)=>{
    try {
        const {id,category} = req.params;
        const typesCategory =['noticias','economia','politica','actualidad','cultura','negocios']
        if (typesCategory.includes(category)) {
            let dataNew = await New.findAll()
            let select=dataNew.filter((dato) => {
                return dato.id == id && dato.category === category
            })
            res.send(select)
        }else{
            let Datanew = await Search.findAll()
            Datanew=Datanew.filter((dato) => {
                return dato.id == id && dato.category === category
            })
            res.send(Datanew)
        }
    } catch (error) {
        res.status(400).send({idCategory:"Error en id category",error:error})
    }
})

module.exports = router;