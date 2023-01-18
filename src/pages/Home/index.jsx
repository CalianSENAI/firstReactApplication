import { useState,useEffect } from 'react';
// import React, { useState } frmo 'react'
import './style.css';

import {Card} from '../../components/Card';
import {Navbar} from '../../components/Navbar'

// se usar o export direto na functiona precisa usar { Home } na importação
export function Home() {
  return(
    <div className='container'>
      <Navbar />
    </div>
  )
}

// Se usar assim usa o export normal na tela -- export default Home
