import {Products} from "@/interfaces/products.interface";
import {NextPage} from "next";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export interface ItemCardProps {
    list: Products;
}

const FibreItemCard: NextPage<ItemCardProps> = ({list}) => (
        <Card sx={{maxWidth: 345}}>
            <CardMedia
                component="img"
                image={list.image}
                alt={list.name}
            />
            <CardHeader
                title={list.name}
                sx={{color: '#b2d235'}}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {list.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">สนใจโปรโมชั่นนี้</Button>
            </CardActions>
        </Card>
);

export default FibreItemCard;
