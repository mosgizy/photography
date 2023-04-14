export interface productI{
    id: string;
    name: string;
    creator: string;
    origin: string;
    views: string;
    price: {
        usd: number;
        eth: number;
    };
    size: {
        ft: number;
    }
    url: string;
}

export interface featuredI{
    id: string;
    name: string;
    url: string;
}

export interface dropsI{
    id: string;
    title: string;
    creator: string;
    date: {
        day: number;
        month: string;
        time: string;
        timezone: string;
    };
    url:string;
}

export interface carouselI{
    id: string;
    url: string;
}

export interface productBidI extends carouselI { 
    name: string;
    current: string;
}

export interface bidsI{
    id: string;
    name: string;
    creator: string;
    date: {
        day: number;
        mponth: string;
        time: string;
    };
    bid: {
        current: {
            eth: number;
        },
        highest: {
            eth: number;
        }
    }
    url: string;
}

export interface cartItemI{
    id:string;
    url: string;
    cost:number;
    name: string;
    size: number;
    creator: string;
    quantity: number;
}

export interface cartI{
    items: cartItemI[];
    totalItems: number;
    totalPrice: number;
    shipping: number;
    grandTotal: number;
}

export interface shoppingFormI{
    email: string;
    name: string;
    walletType: string;
    city: string;
    country: string;
    postalCode: number;
    phoneNumber: number;
    getUpdate: boolean;
}