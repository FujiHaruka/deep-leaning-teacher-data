import React from 'react'
import ReactDOM from 'react-dom'
import ImgForm from './components/img_form'

const rootEl = document.getElementById('react')

function render () {
  ReactDOM.render(
    <div>
      <ImgForm />
    </div>,
    rootEl
  )
}

render()
