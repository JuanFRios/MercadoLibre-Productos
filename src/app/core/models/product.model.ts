export interface Productos {
    results: {id: string}[];
    paging: Paging;
}

export interface Paging {
    total: number;
    primary_results: number;
    offset: number;
    limit: number;
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
}

export interface SaleTerm {
    id: string;
    name: string;
    value_id: string;
    value_name: string;
    value_struct: ValueStruct;
    values: Value[];
}

export interface Picture {
    id: string;
    url: string;
    secure_url: string;
    size: string;
    max_size: string;
    quality: string;
}

export interface Product {
    id: string;
    site_id: string;
    title: string;
    subtitle?: any;
    seller_id: number;
    category_id: string;
    official_store_id: number;
    price: number;
    base_price: number;
    original_price?: any;
    currency_id: string;
    initial_quantity: number;
    available_quantity: number;
    sold_quantity: number;
    sale_terms: SaleTerm[];
    buying_mode: string;
    listing_type_id: string;
    start_time: Date;
    stop_time: Date;
    condition: string;
    permalink: string;
    thumbnail_id: string;
    thumbnail: string;
    secure_thumbnail: string;
    pictures: Picture[];
    seller_address: SellerAddress;
    warranty: string;
    attributes: Attribute[];
}

export interface City {
    id: string;
    name: string;
}

export interface State {
    id: string;
    name: string;
}

export interface Country {
    id: string;
    name: string;
}


export interface SellerAddress{
    city: City;
    state: State;
    country: Country;
    id: number;
}

export interface Attribute {
    name: string;
    value_name: string;
}