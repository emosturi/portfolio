import './App.scss'
import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/layout.component'
import Home from './components/home/home.component';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App
