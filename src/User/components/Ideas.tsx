import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import IdeaItem from '../../Items/IdeaItem'
import { ideas } from '../../utils/mockData'

const Ideas = () => {
  return (
    <Box sx={{ flexGrow: 1, margin: 5 }}>
      <Grid container spacing={3}>
        {ideas.map((ideaItemData, index) => (
          <Grid item xs key={index}>
            <IdeaItem {...ideaItemData} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Ideas
