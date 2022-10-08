import { Route } from 'react-router-dom/cjs/react-router-dom'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import './App.css'
import Header from './components/Header'
import Cart from './pages/Cart'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter className="App">
      <Header />
      <div>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
      </div>
    </BrowserRouter>
  )
}

export default App
