import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Header></Header>
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen></HomeScreen>} exact></Route>
            <Route
              path='/product/:id'
              element={<ProductScreen></ProductScreen>}
              exact
            ></Route>
          </Routes>
        </Container>
      </main>
      <Footer></Footer>
    </Router>
  )
}

export default App
