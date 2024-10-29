import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'
import ProductSection from './components/ProductSection'
import ProductProvider from './context/productProvider'

function App() {
  return (
    <>
      <Nav />
      <Header />
      <ProductProvider>
        <ProductSection />
      </ProductProvider>
      <Footer />
    </>
  );
};

export default App
