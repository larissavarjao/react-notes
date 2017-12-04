'use strict'

import React from 'react'

const Search = ({ isDisabled, handleSearch }) => (
  <div className='search'>
    <input
      type='search'
      disabled={isDisabled}
      placeholder='Digite aqui o nome do usuario no Github'
      onKeyUp={handleSearch}
    />
  </div>
)

Search.propTypes = {
  handleSearch: React.PropTypes.func.isRequired,
  isDisabled: React.PropTypes.bool.isRequired
}

export default Search
