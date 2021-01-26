import React from 'react'
import ReactDOM from 'react-dom'
import {
  Provider
} from 'react-redux'
import ProjectRoutes from 'routes/index'
import ErrorBoundary from 'components/errorBoundary'
import Store from 'redux/store.js'
import * as serviceWorker from './serviceWorker'
import './assets/scss/main.scss'
require('react-web-vector-icons/fonts');

// https://stackoverflow.com/questions/50596022/why-flow-cannot-call-reactdom-render-with-document-getelementbyid

const root = document.getElementById('root')

if (root !== null) {
  ReactDOM.render( <
    Provider store = {
      Store
    } >
    <
    ErrorBoundary >
    <
    ProjectRoutes / >
    <
    /ErrorBoundary> <
    /Provider>,
    root
  )
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()