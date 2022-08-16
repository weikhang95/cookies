
export interface product
{
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    // "rating": {
    //     "rate": 3.9,
    //     "count": 120
    // },
    quantity: number,
    total: number,
    weight: string,
    origin: string,
    expiredDate: string,
    keepMethod: string,
    keepDuration: string,
    flavour: string
}