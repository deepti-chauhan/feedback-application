import React from 'react'
import propTypes from 'prop-types'

function Header( {text, bgColor,textColor} ) {
  const headerStyles = {
    backgroundcolor : bgColor,
    color : textColor,
  }  

  return (
    <header style={headerStyles}>
        <div className='container'>
            <h2>
                {text}
            </h2>
        </div>
    </header>
  )
}


// default header text in no param is passed in App.js
Header.defaultProps = {
    text : 'Feedback - UI',
    bgColor : 'rgba(0,0,0,0,4)',
    textColor : '#ff6a95',
}

//extra type-checking i.e only strings are allowed  
Header.propTypes = {
    text : propTypes.string,
}

export default Header