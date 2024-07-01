import { Provider } from "react-redux"
import store from "./redux/store"

import { BrowserRouter as Router, Routes , Route } from "react-router-dom"

import Header from "./components/Header"
import Home from "./pages/Home"
import PhotoSearched from "./pages/PhotosSearched"
import PhotoDetail from "./pages/PhotoDetail"
import UserDetail from "./pages/UserDetail"
import Footer from "./components/Footer"

function App() {
  return(
    <div className="flex flex-col justify-center items-center">
      <Provider store={store}>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/photo/search/:search" element={<PhotoSearched />} />
            <Route path="/photo/:id" element={<PhotoDetail />} />
            <Route path="/user/:username" element={<UserDetail />} />
            <Route path="*" element={<h1 className="">La pagina erronea uwu</h1>}/>
          </Routes>
          <Footer />
        </Router>
      </Provider>
    </div>
  )
}

export default App