import { type FC } from 'react'
import { Grid } from 'antd-mobile'

import foods from './foods'

const Foods: FC = () => {
  return (
    <div>
      <Grid columns={2} gap={8}>
        {foods.map(item => (
          <Grid.Item key={item.id}>{item.name}</Grid.Item>
        ))}
      </Grid>
    </div>
  )
}

export default Foods
