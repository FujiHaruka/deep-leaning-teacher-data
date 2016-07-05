import React from 'react'
import imgFiles from '../../json/imgs.json'

const ImgForm = React.createClass({
  render () {
    let files = imgFiles
    return (
      <form onSubmit={this.onSubmit}>
        {files.map((file, i) => {
          return (
            <div key={file} className='img-checkbox'>
              <img src={`img/${file}`}
                   width='200'/>
              <input type='checkbox' value={file} id={`checkbox-${i}`}/>
            </div>)
        })}
        <input type='submit' value='submit'/>
      </form>
    )
  },

  onSubmit (e) {
    e.preventDefault()

    let imgData = imgFiles.map((file, i) => {
      let checkbox = document.getElementById(`checkbox-${i}`)
      let checked = checkbox.checked
      return {
        file, checked
      }
    })

    console.log(imgData)
  }
})

export default ImgForm
