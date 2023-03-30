import React from 'react'
import styles from './NothingWasFound.module.scss'
const NothingWasFound = () => {
  return (
    <div className={styles.root}>
        <h1 >
            <span>😕</span>
            <br/>
            Nothing was found
        </h1>
        <p className={styles.description}>Unfortunatly this page is absent in our internet shop</p>
    </div>
    
  )
}

export default NothingWasFound