import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton';

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CommentIcon from '@mui/icons-material/Comment';
import Badge from '@mui/material/Badge'

export const IdeaItem = ({imagePath , imageAlt, title, description, likesCount, commentsCount}) => {
    return (
        <Card sx={{ maxWidth: 210 }}>
            <CardMedia
                component = "img"
                image = {imagePath}
                alt = {imageAlt}
                sx = {{ height: 140, width: 200 }}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                   {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description} 
                </Typography>
            </CardContent>    

            <CardActions>
            
                    <IconButton aria-label="add to favorites">
                        <Badge anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}} color="secondary" badgeContent={likesCount}>
                            <ArrowDropUpIcon/>
                        </Badge>
                    </IconButton>
            
                
                    <IconButton aria-label="express">
                    <Badge anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}} color="secondary" badgeContent={commentsCount}>
                        <CommentIcon/>
                    </Badge>
                    </IconButton>
                
            </CardActions>
        </Card>
    )
}