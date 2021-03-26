export interface Producto {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
}

export interface Seller {
    id: number;
    permalink?: any;
    registration_date?: any;
    car_dealer: boolean;
    real_estate_agency: boolean;
    tags?: any;
}

export interface Conditions {
    context_restrictions: any[];
    start_time?: any;
    end_time?: any;
    eligible: boolean;
}

export interface Price {
    id: string;
    type: string;
    conditions: Conditions;
    amount: number;
    regular_amount?: any;
    currency_id: string;
    exchange_rate_context: string;
    last_updated: Date;
}

export interface Presentation {
    display_currency: string;
}

export interface Prices {
    id: string;
    prices: Price[];
    presentation: Presentation;
    payment_method_prices: any[];
    purchase_discounts: any[];
}

export interface Installments {
    quantity: number;
    amount: number;
    rate: number;
    currency_id: string;
}

export interface Address {
    state_id: string;
    state_name: string;
    city_id: string;
    city_name: string;
}

export interface Country {
    id: string;
    name: string;
}

export interface State {
    id: string;
    name: string;
}

export interface City {
    id: string;
    name: string;
}

export interface SellerAddress {
    id: string;
    comment: string;
    address_line: string;
    zip_code: string;
    country: Country;
    state: State;
    city: City;
    latitude: string;
    longitude: string;
}

export interface ValueStruct {
    number: number;
    unit: string;
}

export interface Struct {
    number: number;
    unit: string;
}

export interface Value {
    id: string;
    name: string;
    struct: Struct;
    source: number;
}

export interface Product {
    id: string;
    title: string;
    seller: Seller;
    price: number;
    prices: Prices;
    available_quantity: number;
    condition: string;
    thumbnail: string;
    installments: Installments;
    address: Address;
    seller_address: SellerAddress;
    original_price?: any;
}
