import React, { useEffect } from 'react'
import { get_everythings} from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/Navbar/Navbar'
import Carrusel from '../../components/Carrusel/Carrusel'
import styles from './Home.module.css'
import Cards from '../../components/Cards/Cards'


export default function Home() {
    const dispatch = useDispatch()

    const noticias = useSelector(state => state.noticias)
    const economy = useSelector(state => state.economy)
    const politica = useSelector(state => state.politica)
    const actualidad = useSelector(state => state.actualidad)
    const cultura = useSelector(state => state.cultura)
    const negocios = useSelector(state => state.negocios)
    const everything = useSelector(state => state.everything)

    const stringsCategory =['Economia','Politica','Actualidad','Cultura','Negocios']
    const dataCategory = [economy,politica,actualidad,cultura,negocios]

    
    useEffect(() => {
        if (everything.length < 1) {
            dispatch(get_everythings())
        }
    }, [dispatch])

    if (everything.length > 0) {
        return (
            <div>
                <Navbar/>
                <div className={styles.total}>
                    <div className={styles.carrusel}><Carrusel data={noticias} limiteCarrusel={6}/></div>
                    {
                        stringsCategory.map((cate,i) => {
                            return(
                                <div key={i} className={styles.seccionCategory}>
                                    <div className={styles.borderCategory}>
                                        <div className={styles.titleCategory}>{cate}</div>
                                        <div className={styles.lineMargin}></div>
                                    </div>
                                    <div className={styles.cardCategory}><Cards data={dataCategory[i]} limiteCard={6}/></div>
                                </div>
                            )
                        })
                    }
                    
                </div>
            </div>
        )
    }else{
        return(
            <div>
                <Navbar/>
                <div><h1>Cargando ...</h1></div>
            </div>
        )
    }
}
