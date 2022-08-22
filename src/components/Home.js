import React from 'react'
import CardPage from './CardPage'
import Header from './Header'




function Home(props) {
  return (
    <div className='main-home'>
    <Header  />
    <CardPage />
    </div>
  )
}
export default React.memo(Home)