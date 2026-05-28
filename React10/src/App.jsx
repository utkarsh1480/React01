import { useState } from "react"
import { ProductContext } from "./context/ProductContext";
import Header from "./Components/Header"
import Main from "./Components/Main"
import Footer from "./Components/Footer"



function App() {

  const [cartItems, setCartItems] = useState(0);


  return (
    <>
      <ProductContext.Provider value={{ cartItems, setCartItems }}>
        <Header />
        <Main />
        <Footer />
      </ProductContext.Provider>
    </>
  )
}

export default App
