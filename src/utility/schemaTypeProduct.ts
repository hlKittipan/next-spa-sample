import {Products} from "@/interfaces/products.interface";

const schemaTypeOffers = (offers: Products[]) => {
    return offers?.map((offer) => (
        {
            price: offer.price,
            priceCurrency: 'THB',
            priceValidUntil: '2022-12-31',
            itemCondition: 'https://schema.org/UsedCondition',
            availability: 'https://schema.org/InStock',
            url: 'ENTER URL THIS',
            seller: {
                name: 'AIS Fibre phuket',
            },
            image: offer.image
        }
    ))
}

export {schemaTypeOffers}
