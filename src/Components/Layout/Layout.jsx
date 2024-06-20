import React from 'react'
import Main from '../MainContant/Main'

function Layout({children}) {
  return (
    <div>
      <Main>
        {children}
      </Main>
    </div>
  )
}

export default Layout
