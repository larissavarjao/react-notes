'use strict'

import React, { PropTypes } from 'react'
import Search from './search'
import UserInfo from './userinfo'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userinfo, repos, starred, handleSearch, handleAction, isFetching }) => (
  <div className='app'>
    <Search handleSearch={handleSearch} />
    {isFetching && <div>Carregando...</div>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo && <Actions handleAction={handleAction} />}
    {!!repos.length &&
      <Repos
        className='repos'
        title='Repositórios'
        repos={repos}
      />}
    {!!starred.length &&
      <Repos
        className='starred'
        title='Favoritos'
        repos={starred}
      />}
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}

export default AppContent
