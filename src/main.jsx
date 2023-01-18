import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/Home/index.jsx';
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='containerMain'>
    <div className='containerHome'>
      <React.StrictMode>
        <Home />
      </React.StrictMode>
    </div>
  </div>
)
