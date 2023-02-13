import {
    INFO_ECONOMIA, INFO_POLITICA,
    INFO_ACTUALIDAD, INFO_CULTURA,
    INFO_NEGOCIOS,NOTICIAS,
    GET_BUSCAR_TITLE,RESULT_SEARCH,
    SET_PAGE,SET_TOTAL_PAGES,newsXpage,
    INFO_EVERYTHING
} from '../actions/index.js'

const initialState = {
    everything:[],
    economy:[],
    politica:[],
    actualidad:[],
    cultura:[],
    negocios:[],
    noticias:[],
    searchDetail:[],
    resultBuscar:[],
    page:1,
    totalPages:1,
}

const rootReducer = (state = initialState, action) =>{
    const{type,payload} = action

    switch (type) {
        case INFO_EVERYTHING:
            return{
                ...state,
                everything:payload
            }
        case INFO_ECONOMIA:
            let ecoPayload = state.everything.filter((item)=>{
                return item.category === 'economia'
            })
            return{
                ...state,
                economy:ecoPayload
            }
        case INFO_POLITICA:
            let poliPayload = state.everything.filter((item)=>{
                return item.category === 'politica'
            })
            return{
                ...state,
                politica:poliPayload
            }
        case INFO_ACTUALIDAD:
            let actuPayload = state.everything.filter((item)=>{
                return item.category === 'actualidad'
            })
            return{
                ...state,
                actualidad:actuPayload
            }
        case INFO_CULTURA:
            let culPayload = state.everything.filter((item)=>{
                return item.category === 'cultura'
            })
            return{
                ...state,
                cultura:culPayload
            }
        case INFO_NEGOCIOS:
            let negoPayload = state.everything.filter((item)=>{
                return item.category === 'negocios'
            })
            return{
                ...state,
                negocios:negoPayload
            }
        case NOTICIAS:
            let notiPayload = state.everything.filter((item)=>{
                return item.category === 'noticias'
            })
            return{
                ...state,
                noticias:notiPayload
            }
        case GET_BUSCAR_TITLE:
            return{
                ...state,
                searchDetail:payload
            }
        case RESULT_SEARCH:
            return{
                ...state,
                resultBuscar:payload
            }
        case SET_PAGE:
            return{
                ...state,
                page:payload
            }
        case SET_TOTAL_PAGES:
            const newTotalPage = Math.ceil((state.resultBuscar.length < 8 ? 8:state.resultBuscar.length)/newsXpage)
            return{
                ...state,
                totalPages:newTotalPage,
                page: newTotalPage > 0 && state.page > newTotalPage ? newTotalPage : state.page
            }
        default:
            return{
                ...state
            }
    }
}

export default rootReducer;