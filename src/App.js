import Header from "Componets/Header/Header"

import { publicRoutes } from "Router/Router"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Profile from "Page/Profile"
import Footer from "Componets/Footer/Footer"





function App() {
  return (


    <div className="min-h-screen  text-white bg-gradient-to-b  font-Roboto from-gray-900 to-transparent">

      <Header />
      <Routes>
        {
          publicRoutes.map((route, index) => {
            const Page = route.component
            return <Route key={index} path={route.path} element={<Page />} />
          })
        }

      </Routes>
      <Footer />


    </div>

  )
}

export default App
