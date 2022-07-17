import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'

type Props = {
    imagePath: string
    imageAlt: string
    title: string
}

const IdeaCardItem = ({
    imagePath,
    imageAlt,
    title,
}: Props) => {

    return (
             <Card>
                <CardMedia
                    component="img"
                    image={imagePath}
                    alt={imageAlt}
                    sx={{ height: 140, width: 200 }}
                />
                <CardContent>
                    <Typography variant="caption" align="center">
                        {title}
                    </Typography>
                </CardContent>
            </Card>
    )
}

export default IdeaCardItem