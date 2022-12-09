import {Products} from "@/interfaces/products.interface";
import FibreItemCard from "@/components/fibre/fibreItemCard";
import {NextPage} from "next";
import { ProductJsonLd } from 'next-seo';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export interface ItemListGrid {
    lists: Products[];
}

const ItemListGrid: NextPage<ItemListGrid> = ({lists}: ItemListGrid) => (
    <Box sx={{flexGrow: 1}}>
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={{ xs: 1, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}
        >
            {lists.map((list) => (
                <Grid item xs={1} sm={4} md={4} key={list.id}>
                    <ProductJsonLd
                         productName={list.name}
                         images={[
                             list.image
                         ]}
                         description={list.description}
                         brand={'AIS'}
                         offers={[
                             {
                                 price: list.price,
                                 priceCurrency: 'THB',
                                 priceValidUntil: '2022-12-31',
                                 itemCondition: 'https://schema.org/UsedCondition',
                                 availability: 'https://schema.org/InStock',
                                 url: 'ENTER URL THIS',
                                 seller: {
                                     name: 'AIS Fibre phuket',
                                 },
                             }
                         ]}
                    />
                    <FibreItemCard list={list}/>
                </Grid>
            ))}
        </Grid>
    </Box>
);

export default ItemListGrid;

