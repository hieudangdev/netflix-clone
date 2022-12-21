import Header from "Componets/Header/Header"

import { publicRoutes } from "Router/Router"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from "Componets/Footer/Footer"





function App() {
  return (


    <div className="min-h-screen  text-white bg-gradient-to-b font-semibold  font-Roboto from-gray-900 to-transparent">

      <Header />
      <div className=' pb-[200px] lg:pb-[100px] '>
        <Routes>
          {
            publicRoutes.map((route, index) => {
              const Page = route.component
              return <Route key={index} path={route.path} element={<Page />} />
            })
          }

        </Routes>
      </div>
      <Footer />


    </div>

  )
}

export default App
