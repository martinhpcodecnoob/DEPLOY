import { useSelector } from 'react-redux'
// import { Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Cards from '../../components/Cards/Cards'
import Navbar from '../../components/Navbar/Navbar'
import Paginate from '../../components/Paginate/Paginate'
import { newsXpage } from '../../redux/actions'
import styles from './SearchResult.module.css'


export default function SearchResult() {
    const resultBuscar = useSelector(state => state.resultBuscar)
    const page = useSelector(state => state.page)
    // const calculo = resultBuscar.slice(newsXpage * (page-1), newsXpage * page)

    const navigate = useNavigate()

if (resultBuscar.length > 0) {
    return (
        <div>
            <Navbar/>
            <div className={styles.main}>
                <Cards data={resultBuscar.slice(newsXpage * (page-1), newsXpage * page)} limiteCard={resultBuscar.slice(newsXpage * (page-1), newsXpage * page).length}/>
                <div className={styles.paginate}>
                    <Paginate/>
                </div>
            </div>
        </div>
    )
} else{
    return(
        <div className={styles.newRedirect}>
            <div className={styles.btnCreateA}>
                <div><h1>Cargando... Espere unos segundos</h1></div>
                <button onClick={() => navigate('/')}>Ohh! al Inicio</button>
            </div>
        </div>
    )
}

// return(newResultBuscar.length > 1 ?
//     <div>
//         <Navbar/>
//         <div className={styles.main}>
//             <Cards data={newResultBuscar} limiteCard={newResultBuscar.length}/>
//             <div className={styles.paginate}>
//                 <Paginate/>
//             </div>
//         </div>
//     </div>
//     :
//     <Navigate to={'/'}/>
// )
}
