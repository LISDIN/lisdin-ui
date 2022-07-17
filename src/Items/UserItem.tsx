import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'


const UserItem = (user: User) => {

    return (
             <Card>
                <CardMedia
                    component="img"
                    image={user.imagePath}
                    alt={user.imageAlt}
                    sx={{ height: 140, width: 200 }}
                />
                <CardContent>
                    <Typography variant="body1" align="center">
                        {user.name}
                    </Typography>
                    {
                        user.currentJob && 
                        <Typography variant="body1" align="center">
                            {user.currentJob}
                        </Typography>
                    }
                    {
                        user.email && 
                        <Typography variant="body1" align="center">
                            {user.email}
                        </Typography>
                    }
                </CardContent>
            </Card>
    )
}

export default UserItem