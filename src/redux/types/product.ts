export interface ProductState {
    name_ru: string,
    name_uz: string,
    name_en: string,
    amount: string,
    productId: null | number;
    category: {
        categories_list: any[];
        subcategories_list: any[];
        subcategories_childs_list: any[];
        selected_subcategories_childs: any | null;
        selected_category: any | null;
        selected_subcategory: any | null;
        last_selected_id: number | null;
        categories_status: any;
        subcategories_status: any;
        filter: {
            filter_list: any[];
        }
    },
    brand: {
        brand_list: any[],
        selected_brand: any | null;
        brand_status: any;
    },
    weight: string;
    height: string;
    width: string;
    length: string;
    price: string;
    price_old: string;
    price_opt: string;
    price_opt_small: string;
    discount: string;
    discount_active: boolean;
    discount_opt: string;
    discount_opt_active: boolean;
    discount_opt_small: string;
    discount_opt_small_active: boolean;
    count_price: number;
    count_price1: number;
    count_price2: number;
    photo: any | null;
    gallery: any[];
    description: string;
    status: "create" | "update"; // create or update,
    loading: boolean;
    error: undefined | any;
    measurements?: {
        _selected_item: {},
        unit_measurements_list: any[]
    },
    currency?: {
        currency_list?: any[],
        _select_currency: {}
    },
    colors?: {
        _select_color?: {},
        color_list?: any[]
    },
    characteristic: {
        characteristic_list: any[]
    }
}