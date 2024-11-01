import { useRef } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'
import ProductSection from './components/ProductSection'
import ProductProvider from './context/productProvider'

function App ()
{
  const productSectionRef = useRef( null );
  
  return (
    <>
      <Nav domRef={ productSectionRef } />
      <Header />
      <ProductProvider>
        <ProductSection referenceValue={ productSectionRef } />
      </ProductProvider>
      <Footer />
    </>
  );
};

export default App
