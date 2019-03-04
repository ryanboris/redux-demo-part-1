import React from 'react'
import { Box, Grommet } from 'grommet'
import { Github } from 'grommet-icons'

const App = props => (
  <Grommet plain>
    <Box
      tag="header"
      direction="row"
      justify="around"
      align="center"
      background="#424242"
      animation="slideLeft"
      {...props}
    >
      <Github />
      <p>B</p>
      <p>C</p>
      <p>D</p>
    </Box>
  </Grommet>
)

export default App
