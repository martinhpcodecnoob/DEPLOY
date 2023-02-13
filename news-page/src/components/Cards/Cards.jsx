import React, { useEffect, useState } from 'react'
import styles from './Cards.module.css'
import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { get_buscar_title } from '../../redux/actions'

export default function Cards({data, limiteCard}) {
    const dataLimit = data.filter((D,i) => {
        return i < limiteCard
    })
    // const dispatch = useDispatch();

    // const handleClick =(id,category)=>{
    //     dispatch(get_buscar_title(id,category))
    // }
    const imgDefect1 ="https://img.freepik.com/vector-gratis/concepto-noticias-landing-page_52683-11366.jpg?w=1380&t=st=1676039747~exp=1676040347~hmac=ce0c3b19a788e77c92ea76a8eb73f4a093876c0201d5f7cf6876f660802abff7"
    const [imageDefect, setImageDefect] = useState('')
    useEffect(() => {
        setImageDefect(imgDefect1)
    }, [imageDefect])
    
    return (
        <div className={styles.Cards}>
            {
                dataLimit.map((Dt,i)=>{
                    return(
                        <Link className={styles.link} to={`/detail/${Dt.id}/${Dt.category}`} key={i}>
                            <div className={styles.card}>
                                <div className={styles.cuadro}>
                                    <img className={styles.imageCard} 
                                        src={Dt.urlToImage ? Dt.urlToImage:imgDefect1}
                                        alt={Dt.name} 
                                        width={"100%"}/>
                                    <div className={styles.texto1}><div>BY</div>{Dt.name ?Dt.name.slice(0,16):"Anonimo"}</div>
                                </div>
                                <div className={styles.grupo1}>
                                    <div className={styles.texto3}>{Dt.title.slice(0,110)}</div>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}
