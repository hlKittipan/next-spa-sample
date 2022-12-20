import {Products} from "@/interfaces/products.interface";
import {NextPage} from "next";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ItemCard from "@/components/product/itemCard";

export interface ItemListGrid {
    lists: Products[];
}

const ItemListGrid: NextPage<ItemListGrid> = ({lists}: ItemListGrid) => (
    <Box sx={{flexGrow: 1}}>
        <Grid
            container
            direction="row"
            justifyContent="left"
            alignItems="left"
            spacing={{ xs: 1, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}
        >
            {lists?.map((list) => (
                <Grid item xs={1} sm={4} md={4} key={list.id}>
                    <ItemCard list={list}/>
                </Grid>
            ))}
        </Grid>
    </Box>
);

export default ItemListGrid;

