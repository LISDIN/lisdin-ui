import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import NavBar from './NavBar'
import { IdeaItem } from './Items/IdeaItem'

import { ideas } from './data-mock/ideas.js'

const Ideas = () => {
  return (
    <>
      <NavBar />
      <Box sx={{ flexGrow: 1, margin: 5 }}>
        <Grid container spacing={3}>
          {ideas.map((ideaItemData, index) => {
            return (
              <Grid item xs key={index}>
                <IdeaItem {...ideaItemData} />
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </>
  )
}

export default Ideas
