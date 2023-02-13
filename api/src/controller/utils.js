const fechaHora = (dato) =>{
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

const add_subtract_days = (dias) =>{
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

const eliminarTituloRepit = (data) =>{
    const hash = {}
    let newData = data.filter((item) => {
        let existe = !hash[item.title]
        if (item.title === "") {
            return false
        } else {
            hash[item.title] = true
            return existe
        }
    })
    return newData;
}

module.exports = {
    fechaHora,
    add_subtract_days,
    eliminarTituloRepit
}