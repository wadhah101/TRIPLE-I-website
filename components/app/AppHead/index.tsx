import Head from 'next/head'
import * as React from 'react'
import { headDescription } from '../../../data/description'

const AppHead: React.FunctionComponent = () => {
  return (
    <Head>
      <title>Tunisia Entrepreneurship Summit: Triple I</title>
      <link rel="icon" type="image/png" href="/icon.png" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="Description" content={headDescription} />
    </Head>
  )
}

export default AppHead
