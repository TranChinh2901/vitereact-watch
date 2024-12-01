import { Outlet } from "react-router-dom"
import styles from "./app.module.css"
import Header from "./components/views/layout/header";
import Footer from "./components/views/layout/footer";

function App() {
  return (
    <>
    <Header/>
      <Outlet className={styles.mainContainer} />
      <Footer/>
    </>
  );
}

export default App;