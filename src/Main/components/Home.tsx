import { ideas } from '../../data/Ideas'
import { users } from '../../data/users'

import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import Divider from '@mui/material/Divider'

import IdeaCardItem from '../../Items/IdeaCardItem'
import UserItem from '../../Items/UserItem'

const Home = () => {

  const userIdeas: Idea[] = ideas.filter(idea => idea.owner === 'user')
  const trendingIdea: Idea[] = ideas.filter(idea => idea.category === 'trending')

  const displayItems =  (itemsList: Idea[]) => itemsList.map((ideaItemData, index) => (
    <Grid item key={index}>
      <IdeaCardItem {...ideaItemData}/>
    </Grid>
  ))

  const collaborators = users.map((user, index) =>(
    <Grid item key={index}>
      <UserItem {...user}/>
    </Grid>
  ))

  return (
  
      <div>
          <Typography variant="h6" align="center" sx={{color: 'blue'}}> My Ideas </Typography>
          <Box sx={{ display: 'flex', flexGrow: 1, margin: 5, justifyContent: 'center'}}>
            <Grid container spacing={0} direction="row" justifyContent="center" >
              {
                displayItems(userIdeas)
              }
            </Grid>
          </Box>

          <Grid container spacing={0} direction="column" alignItems="center"> 
              <Grid item>
                <Card >
                  <CardMedia
                      component="img"
                      image={ 'Assets/Icons/AddSign.svg'}
                      alt={'add'}
                      sx={{ height: 140, width: 200, backgroundColor: 'aqua' }}
                  />
                </Card>
              </Grid>
          </Grid>

          <Divider/>

          <Grid container spacing={0} direction="row" justifyContent="center" >
            <Grid item>
              <Typography variant="h6" align="center" sx={{color: 'blue'}}> Trending Ideas </Typography>
              <Box sx={{ display: 'flex', flexGrow: 1, margin: 5, justifyContent: 'center'}}>
                <Grid container spacing={3} direction="column" alignItems="center" >
                  {
                    displayItems(trendingIdea)
                  }
                </Grid>
              </Box>
            </Grid>
            
            <Grid item>
              <Typography variant="h6" align="center" sx={{color: 'blue'}}> Possible Collaborators </Typography>
              <Box sx={{ display: 'flex', flexGrow: 1, margin: 5, justifyContent: 'center'}}>
                <Grid container spacing={3} direction="column" alignItems="center" >
                  {
                    collaborators
                  }
                </Grid>
              </Box>
            </Grid>
          </Grid>

      </div>
  )
}

export default Home
