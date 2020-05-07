/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Layout from './components/styled/layout'
import Landing from './components/landing'
import WorkHistory from './components/work'
import SkillsTech from './components/skills-tech'
import GetInTouch from './components/get-in-touch'
import Thanks from './components/get-in-touch/thanks'

import PrivateSandbox from './components/_private-sandbox/'

const App = () => (
  <Layout>
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/work-history/" component={WorkHistory} />
      <Route path="/skills-tech/" component={SkillsTech} />
      <Route path="/get-in-touch/" component={GetInTouch} />
      <Route path="/thanks/" component={Thanks} />
      {/* Add .env flag here  */}
      <Route path="/private-sandbox/" component={PrivateSandbox} />
    </Switch>
  </Layout>
)

export default App
