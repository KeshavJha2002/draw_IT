import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AppContextProvider } from './provider/AppStatesProvider'

createRoot(document.getElementById('root')!).render(
    <AppContextProvider>
      <App />
    </AppContextProvider>,
)
