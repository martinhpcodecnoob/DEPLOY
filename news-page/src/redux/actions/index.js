import axios from "axios";
// let apiK ='6c35779780c744b5898fd0881168222e'
// let apiK ='04e6315dd9724acbb90891808c09fe60'

// let apiK='7c9ec241fb344f8c95148270e17b0972'
// let apiK = '657a2e06d6fd4a4486be2675b46687c7'
// let apiK = 'f3798e116eb342b2bae58e7f0cbd9c11'
// let apiK = '505b17b57d7f4e87bbaa025d1dbebd6c'
export const INFO_EVERYTHING = 'INFO_EVERYTHING'
export const INFO_ECONOMIA = 'INFO_ECONOMIA'
export const INFO_POLITICA ='INFO_POLITICA'
export const INFO_ACTUALIDAD ='INFO_ACTUALIDAD'
export const INFO_CULTURA = 'INFO_CULTURA'
export const INFO_NEGOCIOS = 'INFO_NEGOCIOS'
export const newsXpage = 8
export const NOTICIAS = 'NOTICIAS';
export const GET_BUSCAR_TITLE = 'GET_BUSCAR_TITLE';
export const RESULT_SEARCH = 'RESULT_SEARCH';
export const SET_PAGE = 'SET_PAGE';
export const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
export const add_subtract_days = (dias) =>{
    const fecha = new Date()
    fecha.setDate(fecha.getDate() + dias);
    const fechaArray=fecha.toLocaleDateString().split('/').reverse();
    for (let i = 1; i < fechaArray.length; i++) {
        if (fechaArray[i] > 0 && fechaArray[i] < 10) {
            fechaArray[i] = `0${fechaArray[i]}`
        }
    }
    const fechaUnion = fechaArray.join('-')
    return fechaUnion 
}
export const accion_category=[INFO_ECONOMIA,INFO_POLITICA,INFO_ACTUALIDAD,INFO_CULTURA,INFO_NEGOCIOS,NOTICIAS]
export const fechaHora = (dato) =>{
    let tMiliS;
    const semana = {Mon:"lunes",Tue:"martes",Wed:"miercoles",Thu:"jueves",Fri:"viernes",Sat:"sabado",Sun:"domingo"}
    const año ={
        Jan:"enero",Feb:"febrero",Mar:"marzo",Apr:"abril",
        May:"mayo",Jun:"junio",Jul:"julio",Aug:"agosto",
        Sep:"septiembre",Oct:"octubre",Nov:"noviembre",Dec:"diciembre"
    }
    if (!dato) {
        tMiliS = new Date(Date.now())
    }else{
        let tMiliSIso = Date.parse(dato)
        tMiliS = new Date(tMiliSIso)
    }
        let fecha = tMiliS.toDateString()
        let arrayFecha = fecha.split(' ')
        arrayFecha[0]=semana[arrayFecha[0]]
        arrayFecha[1]=año[arrayFecha[1]]
        return `${arrayFecha[0]}, ${arrayFecha[1]} ${arrayFecha[2]}, ${arrayFecha[3]}`
}
export const get_everythings = () => dispatch => {
    axios.get('/categorynew/')
            .then(res => dispatch({
                type:INFO_EVERYTHING,
                payload:res.data
            }))
            .then(res => dispatch(orderOfGet()))
            .catch((e) => console.log("categorynew",e))
}

export const get_buscar_title = (id,category) =>dispatch=>{
    axios.get(`/categorynew/${id}/${category}`)
            .then(res => dispatch({
                type:GET_BUSCAR_TITLE,
                payload:res.data
            }))
            .catch((e) => console.log("category ID error ",e))
}

export const orderOfGet =() =>{
    return async(dispatch)=>{
        for (let i = 0; i < accion_category.length; i++) {
            await dispatch({
                type:accion_category[i]
            })
            
        }
    }
}

export const get_search = (nameSearch) =>(dispatch)=>{
    axios.get(`/categorynew/${nameSearch}`)
            .then(res => dispatch({
                type:RESULT_SEARCH,
                payload:res.data
            }))
            .catch((e) => console.log("Error en el search dispatch",e))
}

export const setPage = (page) =>{
    return{
        type: SET_PAGE,
        payload: page
    }
}

export const setTotalPages = () =>{
    return{
        type: SET_TOTAL_PAGES
    }
}