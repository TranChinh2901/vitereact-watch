import { Outlet } from "react-router-dom"
import Header from "./components/views/layout/header"
import Footer from "./components/views/layout/footer"
import styles from "./app.module.css"
function App() {
  
  return (
    <>
      <Header />
      <Outlet className={styles.mainContainer}/>
      <Footer />
    </>
  )
}

export default App
