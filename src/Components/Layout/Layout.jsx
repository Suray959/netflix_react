import React from 'react'
import Main from '../MainContant/Main'
import Header from '../Header/Header'

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
