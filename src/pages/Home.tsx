import { type FC } from 'react'
import { NavBar } from 'antd-mobile'
import { AddOutline } from 'antd-mobile-icons'

const Home: FC = () => {
  const right = (
    <div style={{ fontSize: 24 }}>
      <AddOutline />
    </div>
  )
  
  return (
    <div>
      <NavBar back={null} right={right}>
        火锅进度
      </NavBar>
    </div>
  )
}

export default Home