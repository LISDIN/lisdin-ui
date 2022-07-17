import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import IdeaItem from '../../Items/IdeaItem'
import { ideas } from '../../data/Ideas'

const Ideas = () => {

  const latest = ideas.filter(idea => idea.category === 'latest')
  const featured = ideas.filter(idea => idea.category === 'featured')
  const recommend = ideas.filter(idea => idea.category === 'recommended')

  const ideaColumn = (ideasList: Idea[]) => (
    <Box sx={{ display: 'flex', flexGrow: 1, margin: 5, justifyContent: 'center'}}>
    <Grid container spacing={3} direction="column" alignItems="center" >
        {ideasList.map((ideaItemData, index) => (
          <Grid item xs key={index}>
            <IdeaItem {...ideaItemData} />
          </Grid>
        ))}
    </Grid>
  </Box>
  )


  return (
    <Grid container spacing={0} direction="row" justifyContent="center" >
      <Grid item>
        <Typography variant="h6" align="center" sx={{color: 'blue'}}> Latest Ideas </Typography>
        {ideaColumn(latest)}
      </Grid>

      <Grid item>
        <Typography variant="h6" align="center" sx={{color: 'blue'}}> Featured Ideas </Typography>
        {ideaColumn(featured)}
      </Grid>

      <Grid item>
        <Typography variant="h6" align="center" sx={{color: 'blue'}}> Ideas You Might Like </Typography>
        {ideaColumn(recommend)}
      </Grid>

    </Grid>
  )
}

export default Ideas
