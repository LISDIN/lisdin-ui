import NavBar from "./NavBar"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton';

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CommentIcon from '@mui/icons-material/Comment';
import Badge from '@mui/material/Badge'


const Ideas = () => {
    return (
        <>
            <NavBar />
            <Card sx={{ maxWidth: 210 }}>
                <CardMedia
                    component = "img"
                    image = "Assets/lisdin-ideas/featured/groove-moves.svg"
                    alt = "groove moves"
                    sx = {{
                        height: 140,
                        width: 200
                    }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        GrooveMove
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       A new way to work out 
                    </Typography>
                </CardContent>    

                <CardActions>
                   
                        <IconButton aria-label="add to favorites">
                            <Badge anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}} color="secondary" badgeContent="46">
                                <ArrowDropUpIcon/>
                            </Badge>
                        </IconButton>
                   
                    
                        <IconButton aria-label="express">
                        <Badge anchorOrigin={{ vertical: 'bottom', horizontal: 'left'}} color="secondary" badgeContent="55">
                            <CommentIcon/>
                        </Badge>
                        </IconButton>
                    
                </CardActions>
            </Card>
            <p>Ideas Page!</p> 
        </>
    )
}

export default Ideas