import React, { useState } from 'react'
import styles from './Searchbar.module.css'
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { get_search } from '../../redux/actions';


export default function Searchbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [input, setInput] = useState("")
  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(get_search(input))
    navigate('/search')
    setInput('')
  }
  
  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="search" required/>
        <button className={styles.btnsearch} type='submit'>
          <FaSearch className={styles.fa}/>
        </button>
      </form>
    </div>
  )
}
