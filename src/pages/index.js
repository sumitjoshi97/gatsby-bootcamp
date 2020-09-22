import React from 'react'
import { Link } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'
import '../styles/index.scss'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>HELLO</h1>
      <h2>Hi I Am Sj</h2>
      <p>
        Need a developer? <Link to="/contact">Contact me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
