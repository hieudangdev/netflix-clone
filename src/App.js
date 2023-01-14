
import Header from "Componets/Header/Header"

import { publicRoutes } from "Router/Router"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from "Componets/Footer/Footer"
import 'index'
import { Box, Button } from '@mui/material'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.min.css"


function App() {
    return (
        <Box className=" bg-primary min-h-screen   
         font-semibold  font-Roboto ">
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <Header />
            <div className=' pb-[200px] lg:pb-[100px]  '>
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


        </Box>
    )

}

export default App
