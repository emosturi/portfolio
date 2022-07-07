import './App.scss'
import { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/layout.component'

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Layout />} />
      </Routes>
    </Fragment>
  );
}

export default App
