'use strict'

import React from 'react'

const Actions = ({ handleAction }) => (
  <div className='actions'>
    <button onClick={handleAction} id='repositorios' value='repositorios'>Ver repositorios</button>
    <button onClick={handleAction} id='favoritos' value='favoritos'>Ver favoritos</button>
  </div>
)

Actions.propTypes = {
  handleAction: React.PropTypes.func.isRequired
}

export default Actions
