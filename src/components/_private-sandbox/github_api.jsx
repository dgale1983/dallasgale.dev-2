/* eslint-disable camelcase */
import React from 'react'
import axios from 'axios'

import { compareObjectKeys, convertKbsToMb, filterByFirstCharacter } from './_utils'

const githubUsername = 'dallasgale'

const aArray = []
const bArray = []

const getSortedRepos = (data) => {
  data.edges.sort(compareObjectKeys).map(({ node }) => {
    const { name } = node
    const nameArray = name.toLowerCase().split('')
    if (nameArray[0] === 'a') {
      aArray.push(name)
    }
    if (nameArray[0] === 'b') {
      bArray.push(name)
    }
    return null
  })
}

class GithubApi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      repos: [],
    }
  }

  componentDidMount() {
    this._getGithubData()
  }



  _getGithubData() {
    axios({
      url: 'https://api.github.com/graphql',
      method: 'post',
      data: {
        query: `{
          user(login: "${githubUsername}") {
            repositories(
              first: 100
            ) {
              totalCount
              totalDiskUsage
              edges {
                node {
                  id
                  name
                }
              }
            }
          }
        }`,
      },
      headers: {
        Authorization: 'bearer 3fd431d21477794d64bb48c4a29d0520fca1d51d',
      },
    }).then((response) => {
      console.log('repositories', response.data.data.user.repositories)
      this.setState({
        repos: response.data.data.user.repositories,
      })
    }).catch((err) => {
      console.log(err)
      return null
    })
  }


  render() {
    const { repos } = this.state
    // const arrayOfNames = []
    // console.log('arrayOfNames', arrayOfNames.map(item => item))
    const alphabet = 'abcdefghijklmnopqrstuv'
    // const alphabetArray = alphabet.split('')
    const sortedRepost = repos


    return (
      <div>
        <div>
          <h2>My Github data using github.api</h2>
          {repos.length === 0 ? 'l o a d i n g d a t a...' : (
            <>
              {getSortedRepos(sortedRepost)}
              <div>
                <h3>Github Repositories - API</h3>
                <h3>{`Count: ${repos.totalCount}`}</h3>

                {/* TODO: Convert to mb */}
                <h3>{`Total Disk Usage: ${convertKbsToMb(repos.totalDiskUsage)} MB`}</h3>

                <h3>Links to repos:</h3>
                <div>
                  <>
                    <ul id="a">{aArray.map(item => <li>{item}</li>)}</ul>
                    <ul id="b">{bArray.map(item => <li>{item}</li>)}</ul>
                  </>

                  {/* {
                    reposToBeSorted.edges
                      .sort(compareObjectKeys)
                      .map(({ node }) => {
                        const { name } = node
                        return (
                          arrayOfNames.push(alphabetArray.forEach(char => filterByFirstCharacter(name, char).map(repo => repo))
                        )
                      )
                    })
                  }
                        {arrayOfNames.length === 0 ? 'l o a d i n g  r e p o s...' : (
                          // console.log(arrayOfNames)
                          <div className="group">{arrayOfNames.map(item => item)}</div>
                      )} */}

                </div>
              </div>
            </>
          )}
        </div>
      </div>
    )
  }
}

export default GithubApi
