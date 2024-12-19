import React from 'react'
import style from './loading.module.css'

const loading = () => {
  return (
    <div className={style.preloader}>
      <img src='/assets/gif/Spinner.svg' />
    </div>
  )
}

export default loading;
