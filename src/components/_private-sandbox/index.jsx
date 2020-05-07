import React from 'react'
import './styles.scss'

// import axios from 'axios'

import Page from '../styled/page'
import Header from '../ui_elements/header'

import GithubApi from './github_api'

const PriavteSandbox = () => (
  <>
    <Header />
    <Page>
      <div className="sandbox">
        <h1>Sandbox</h1>
        <GithubApi />
      </div>
    </Page>
  </>
)

export default PriavteSandbox
