import { type FC } from 'react'
import { NavBar } from 'antd-mobile'
import { AddOutline } from 'antd-mobile-icons'
import Foods from './foods'

const Home: FC = () => {

  return (
    <div>
      <NavBar
        back={null}
        right={<div style={{ fontSize: 24 }}>
          <AddOutline />
        </div>}
      >
        火锅进度
      </NavBar>
      <Foods />
    </div>
  )
}

export default Home