import React from 'react'
import styles from './Carrusel.module.css'
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { get_buscar_title } from '../../redux/actions'

export default function Carrusel({data,limiteCarrusel}) {
const dataLimit = data.filter((D,i) => {
    return i < limiteCarrusel
})

// const dispatch = useDispatch();

// const handleClick =(title)=>{
//     dispatch(get_buscar_title(title))
// }

return (
    <>
        <Carousel>
            {
                dataLimit.map((Dt,i) =>{
                    return(
                            <Carousel.Item key={i} interval={3000}>
                                <img
                                className="d-block w-100"
                                src={Dt.urlToImage}
                                alt="First slide"
                                />
                                <Link to={`/detail/${Dt.id}/${Dt.category}`}>
                                    <Carousel.Caption>
                                    <h3 className={styles.h3}>{Dt.name}</h3>
                                    <p className={styles.p}> {Dt.title}</p>
                                    </Carousel.Caption>
                                </Link>
                            </Carousel.Item>
                    )
                })
            }
        </Carousel>
    </>
)
}
