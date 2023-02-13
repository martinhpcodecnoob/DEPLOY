import React, { useEffect,useLayoutEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import styles from './Detail.module.css'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
// import { Navigate } from 'react-router-dom';
import { get_buscar_title, get_everythings, get_search } from '../../redux/actions'
import Metadecorator from '../../components/Metadecorator/Metadecorator';

export default function Detail() {
const searchDetail = useSelector(state => state.searchDetail[0])
const everything = useSelector(state => state.everything)
const dispatch = useDispatch();
const{id,category} = useParams()

useEffect(() => {
        dispatch(get_buscar_title(id,category))
}, [dispatch])


if (searchDetail) {
    return (
            <div>
                <Metadecorator 
                    title={searchDetail.title.slice(0,125)} 
                    description={searchDetail.description} 
                    imageUrl={searchDetail.urlToImage} 
                    imageAlt={searchDetail.category}/>
                <Navbar/>
                <div className={styles.totalDetail}>
                    <div className={styles.titleDetail}>{searchDetail.title.slice(0,125)}</div>
                    <div className={styles.imageDetail}>
                        <img src={searchDetail.urlToImage} alt={searchDetail.name} />
                    </div>
                    <div className={styles.descripDatail}>{searchDetail.description}</div>
                    <div className={styles.redirectDetail}><a href={searchDetail.url}>Para mas informacion del contenido Click</a></div>
                    
                </div>
            </div>
        )

} else {
    return(
        <div>
            <Navbar/>
            <div><h1>Cargando ...</h1></div>
        </div>
    )
}

}
