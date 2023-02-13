import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styles from './PaginadoCategory.module.css'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Cards from '../../components/Cards/Cards'
import { Navigate } from 'react-router-dom';

export default function PaginadoCategory() {
    const everything = useSelector(state => state.everything)

    const economy = useSelector(state => state.economy)
    const politica = useSelector(state => state.politica)
    const actualidad = useSelector(state => state.actualidad)
    const cultura = useSelector(state => state.cultura)
    const negocios = useSelector(state => state.negocios)
    const dataCategoryTwo = [economy,politica,actualidad,cultura,negocios]
    const stringsCategory =['economia','politica','actualidad','cultura','negocios']
    const {category}=useParams()

if (everything.length > 1) {
    for (let i = 0; i < stringsCategory.length; i++) {
        if (stringsCategory[i]===category) {
            return(
                <div>
                    <Navbar/>
                    <div className={styles.totalPagiCate}>
                        <Cards data={dataCategoryTwo[i]} limiteCard={dataCategoryTwo[i].length}/>
                    </div>
                </div>
            )
        }
    }
}else{
    return(
        <Navigate to={'/'}/>
    )
}

}
