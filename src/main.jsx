import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/UseEffect'


createRoot(document.getElementById('root')).render(<StrictMode>


    <App valorInicial={ 0 }  />


</StrictMode>)
