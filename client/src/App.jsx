// File: client/src/App.jsx
import Topbar from '@/components/Topbar'
import { ThemeProvider } from '@/components/ThemeProvider'
import HomePage from '@/pages/Home/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
