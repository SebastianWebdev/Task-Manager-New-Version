import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux'
import { setDataOnInit } from '../redux/actions/index'

import Intro from './Pages/Intro/Intro'
import Footer from './Footer'
import Main from './Pages/Main/Main'
import LoadingSmall from './LoadingSmall'
import './styles/App.css';

import initializeData from '../utils/initializeData'
const App = props => {
  const [isFetching, setIsFetching] = useState(false)
  useEffect(() => {
    async function fetchData() {
      setIsFetching(true)
      const data = await initializeData()
      props.setDataOnInit(data)
      setIsFetching(false)
    }
    if (localStorage.getItem("token")) {
      fetchData()
    }
  }, [])
  return (
    <div className="App">{isFetching ? <LoadingSmall /> : <>{props.isLogged ? <Main /> : <Intro />}
      <Footer /></>}
    </div>
  );
}
const mapStateToProps = state => {
  console.log(state)
  return { isLogged: state.loginData.isLogged }
}

export default connect(mapStateToProps, { setDataOnInit })(App);
