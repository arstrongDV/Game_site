import React from 'react'
import style from './notFoundStyle.module.css'

const notFound = () => {
  return (
    <div className={style.mainContainer}>
     <p className={style.text}>404 - Page not Found!</p>
    </div>
  )
}

export default notFound
