import {Products} from "@/interfaces/products.interface";
import {NextPage} from "next";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import {Typography} from "@mui/material";

export interface ItemCardProps {
    list: Products;
}

const ItemCard: NextPage<ItemCardProps> = ({list}) => (
    <Card sx={{maxWidth: 345}}>
        <CardMedia
            component="img"
            image={list.image}
            alt={list.name}
        />
        <CardHeader
            title={<span dangerouslySetInnerHTML={{__html: list?.name}}/>}
            sx={{color: '#b2d235'}}
        />
        <CardContent>
            <span dangerouslySetInnerHTML={{__html: list?.description}}/>
        </CardContent>
        <CardActions>
            <Button variant="contained" color="success" size="small" href={'tel:0659945955'}>สนใจโทร 0659945955</Button>
            <Button variant="contained" color="success" size="small" href={'tel:0659945955'}>สนใจโทร 0635909494</Button>
        </CardActions>
    </Card>
);

export default ItemCard;
