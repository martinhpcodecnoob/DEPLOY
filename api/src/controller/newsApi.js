require('dotenv').config({path:'../../.env'});
const axios = require('axios');
const {New} = require('../db.js')
const {YOUR_API_KEY} = process.env;
const {fechaHora,add_subtract_days,eliminarTituloRepit} = require('./utils.js')

const NoticiasApi = async() => {
    const fechaActual = add_subtract_days(0)
    try {

        const extractApi = await axios({
            method:'GET',
            url:`https://newsapi.org/v2/everything?q=noticias&from=${fechaActual}&sortBy=popularity&apiKey=${YOUR_API_KEY}`
        })

        const API = await extractApi.data.articles.map((element) => {
            return{
                category: 'noticias',
                name:element.source.name ? element.source.name.slice(0,254) : "",
                author:element.author ? element.author.slice(0,254) : "",
                title:element.title ? element.title.slice(0,254) : "",
                description: element.description ? element.description.slice(0,254):"",
                url:element.url ? element.url : "",
                urlToImage: element.urlToImage ? element.urlToImage : "",
                publishedAt:element.publishedAt ? fechaHora(element.publishedAt) : "",
            }
        })
        return API
    } catch (error) {
        let arrayError = [{
            mensaje:"Se excedio las peticiones en noticias",
            error:error
        }]
        return arrayError
    }
}

const EconomiaApi = async() => {
    const fechaActual = add_subtract_days(0)
    try {
        const extractApi = await axios({
            method:'GET',
            url:`https://newsapi.org/v2/everything?q=finanzas&from=${fechaActual}&sortBy=popularity&apiKey=${YOUR_API_KEY}`
        })

        const API = await extractApi.data.articles.map((element) => {
            return{
                category: 'economia',
                name:element.source.name ? element.source.name.slice(0,254) : "",
                author:element.author ? element.author.slice(0,254) : "",
                title:element.title ? element.title.slice(0,254) : "",
                description: element.description ? element.description.slice(0,254):"",
                url:element.url ? element.url : "",
                urlToImage: element.urlToImage ? element.urlToImage : "",
                publishedAt:element.publishedAt ? fechaHora(element.publishedAt) : "",
            }
        })
        // console.log(API);
        return API
    } catch (error) {
        let arrayError = [{
            mensaje:"Se excedio las peticiones en economia",
            error:error
        }]
        return arrayError
    }
}

const PoliticaApi = async() => {
    const fechaActual = add_subtract_days(0)
    try {
        const extractApi = await axios({
            method:'GET',
            url:`https://newsapi.org/v2/everything?q=diplomacia&from=${fechaActual}&sortBy=popularity&apiKey=${YOUR_API_KEY}`
        })

        const API = await extractApi.data.articles.map((element) => {
            return{
                category: 'politica',
                name:element.source.name ? element.source.name.slice(0,254) : "",
                author:element.author ? element.author.slice(0,254) : "",
                title:element.title ? element.title.slice(0,254) : "",
                description: element.description ? element.description.slice(0,254):"",
                url:element.url ? element.url : "",
                urlToImage: element.urlToImage ? element.urlToImage : "",
                publishedAt:element.publishedAt ? fechaHora(element.publishedAt) : "",
            }
        })
        // console.log(API);
        return API
    } catch (error) {
        let arrayError = [{
            mensaje:"Se excedio las peticiones en politica",
            error:error
        }]
        return arrayError
    }
}

const ActualidadApi = async() => {
    const fechaActual = add_subtract_days(0)
    try {
        const extractApi = await axios({
            method:'GET',
            url:`https://newsapi.org/v2/everything?q=actualidad&from=${fechaActual}&sortBy=popularity&apiKey=${YOUR_API_KEY}`
        })

        const API = await extractApi.data.articles.map((element) => {
            return{
                category: 'actualidad',
                name:element.source.name ? element.source.name.slice(0,254) : "",
                author:element.author ? element.author.slice(0,254) : "",
                title:element.title ? element.title.slice(0,254) : "",
                description: element.description ? element.description.slice(0,254):"",
                url:element.url ? element.url : "",
                urlToImage: element.urlToImage ? element.urlToImage : "",
                publishedAt:element.publishedAt ? fechaHora(element.publishedAt) : "",
            }
        })
        return API
    } catch (error) {
        let arrayError = [{
            mensaje:"Se excedio las peticiones en actualidad",
            error:error
        }]
        return arrayError
    }
}

const CulturaApi = async() => {
    const fechaActual = add_subtract_days(0)
    try {
        const extractApi = await axios({
            method:'GET',
            url:`https://newsapi.org/v2/everything?q=cultura&from=${fechaActual}&sortBy=popularity&apiKey=${YOUR_API_KEY}`
        })

        const API = await extractApi.data.articles.map((element) => {
            return{
                category: 'cultura',
                name:element.source.name ? element.source.name.slice(0,254) : "",
                author:element.author ? element.author.slice(0,254) : "",
                title:element.title ? element.title.slice(0,254) : "",
                description: element.description ? element.description.slice(0,254):"",
                url:element.url ? element.url : "",
                urlToImage: element.urlToImage ? element.urlToImage : "",
                publishedAt:element.publishedAt ? fechaHora(element.publishedAt) : "",
            }
        })
        // console.log(API);
        return API
    } catch (error) {
        let arrayError = [{
            mensaje:"Se excedio las peticiones en cultura",
            error:error
        }]
        return arrayError
    }
}

const NegociosApi = async() => {
    const fechaActual = add_subtract_days(0)
    try {
        const extractApi = await axios({
            method:'GET',
            url:`https://newsapi.org/v2/everything?q=negocios&from=${fechaActual}&sortBy=popularity&apiKey=${YOUR_API_KEY}`
        })

        const API = await extractApi.data.articles.map((element) => {
            return{
                category: 'negocios',
                name:element.source.name ? element.source.name.slice(0,254) : "",
                author:element.author ? element.author.slice(0,254) : "",
                title:element.title ? element.title.slice(0,254) : "",
                description: element.description ? element.description.slice(0,254):"",
                url:element.url ? element.url : "",
                urlToImage: element.urlToImage ? element.urlToImage : "",
                publishedAt:element.publishedAt ? fechaHora(element.publishedAt) : "",
            }
        })
        // console.log(API);
        return API
    } catch (error) {
        let arrayError = [{
            mensaje:"Se excedio las peticiones en negocios",
            error:error
        }]
        return arrayError
    }
}

const BusquedaApi = async(busqueda) => {
    const fechaActual = add_subtract_days(0)
    try {
        const extractApi = await axios({
            method:'GET',
            url:`https://newsapi.org/v2/everything?q=${busqueda}&from=${fechaActual}&sortBy=popularity&apiKey=${YOUR_API_KEY}`
        })

        const API = await extractApi.data.articles.map((element) => {
            return{
                category: 'busqueda',
                name:element.source.name ? element.source.name.slice(0,254) : "",
                author:element.author ? element.author.slice(0,254) : "",
                title:element.title ? element.title.slice(0,254) : "",
                description: element.description ? element.description.slice(0,254):"",
                url:element.url ? element.url : "",
                urlToImage: element.urlToImage ? element.urlToImage : "",
                publishedAt:element.publishedAt ? fechaHora(element.publishedAt) : "",
            }
        })
        // console.log(API);
        return API
    } catch (error) {
        let arrayError = [{
            mensaje:"Se excedio las peticiones en busqueda",
            error:error
        }]
        return arrayError
    }
}

const infoTotal = async() =>{
    const noticias =await NoticiasApi()
    const economia = await EconomiaApi()
    const politica = await PoliticaApi()
    const actualidad = await ActualidadApi()
    const cultura = await CulturaApi()
    const negocios = await NegociosApi()

    const total = await noticias.concat(economia,politica,actualidad,cultura,negocios)
    const newTotal = await eliminarTituloRepit(total)
    // console.log(newTotal);
    return newTotal
}




// infoTotal();
// NoticiasApi();
// console.log(YOUR_API_KEY);
// NoticiasApi()

module.exports = {
    BusquedaApi,
    infoTotal,
}
