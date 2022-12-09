export interface SchemaTypeOffers {
    price: number,
    priceCurrency: string,
    priceValidUntil: string,
    itemCondition: string,
    availability: string,
    url: string,
    seller: SchemaTypeSeller,
}

export interface SchemaTypeSeller {
    name: string
}