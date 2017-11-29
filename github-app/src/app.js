'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: [],
      isFetching: false
    }
  }

  handleSearch(e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    this.setState({ isFetching: true })

    if (keyCode === ENTER) {
      ajax().get(`https://api.github.com/users/${value}`)
        .then((result) => {
          this.setState({
            userinfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            },
            repos: [],
            starred: []
          })
        })
        .always(() => this.setState({ isFetching: false }))
    }
  }

  handleAction(e) {
    const value = e.target.value
    if (value === 'repositorios') {
      console.log(e.target.id)
      ajax().get(`https://api.github.com/users/${this.state.userinfo.login}/repos`)
        .then((result) => {
          this.setState({
            repos: result.map((repo) => {
              return {
                name: repo.name,
                link: repo.html_url
              }
            })
          })
        })
    } else if (value === 'favoritos') {
      ajax().get(`https://api.github.com/users/${this.state.userinfo.login}/starred`)
        .then((result) => {
          this.setState({
            repos: result.map((repo) => {
              return {
                name: repo.name,
                link: repo.html_url
              }
            })
          })
        })
    }
  }

  render() {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
      handleSearch={(e) => this.handleSearch(e)}
      handleAction={(e) => this.handleAction(e)}
    />
  }
}

export default App
