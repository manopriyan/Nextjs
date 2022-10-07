import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Defaultlayout(props) {
  return (
    <div>
        <Header></Header>
        <div className='body'>
        {props.children}
        </div>
        <Footer></Footer>
    </div>
  )
}
