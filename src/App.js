import Row from "./Componets/Row/Row"
import requests from './requests'



function App() {
  return (
    <div className="h-screen bg-gradient-to-b from-gray-500 to-gray-900">
      <header className="flex h-10 px-5 text-red-600 justify-between items-center w-full bg-gradient-to-b from-black to-gray-700 shadow-md ">
        <div className="font-semibold">NETFLIX</div>
        <button className='font-[700]'>Login</button>
      </header>
      <Row title='NETFIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='TRENDINGS' fetchUrl={requests.fetchTrending} />

    </div>
  )
}

export default App
