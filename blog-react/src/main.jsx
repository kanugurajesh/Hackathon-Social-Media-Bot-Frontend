import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import styled from 'styled-components';

const CenteredAuth = styled.div`
  width:100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CenteredAuth>
        <App />
    </CenteredAuth>
  </React.StrictMode>,
)
