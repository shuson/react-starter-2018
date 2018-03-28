import React from 'react'
import { Link } from 'react-router-dom';
import ImageSword from './assets/sword.png'
import styles from './HomeView.scss'

import Layout from '../../layouts/Layout'

export const HomeView = () => {
  return(
    <Layout>
      <h4 className='text-center'>This is a sword in your react development!</h4>
      <img className={styles.sword} src={ImageSword} />
      <Link to="/child1">Navigate to Child1</Link>
    </Layout>
  )
}

export default HomeView
