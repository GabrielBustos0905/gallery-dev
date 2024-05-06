import { Provider } from "react-redux"
import store from "./redux/store"
import Header from "./components/Header"
import ContainerPhotos from "./components/ContainerPhotos"
import MoreInfo from "./components/MoreInfo"

function App() {
  return(
    <div className="flex flex-col justify-center">
      <Provider store={store}>
        <Header />
        <MoreInfo />
        <ContainerPhotos />
      </Provider>
    </div>
  )
}

export default App