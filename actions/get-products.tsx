import qs from "query-string";

import { Product } from "@/types";


interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
    
    const URL = `http://localhost:3000/api/021c64e9-eba0-47f1-b365-aa1588550d1d/products`;
    const url = qs.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured,
        },
    });

    const res = await fetch(url);

    return res.json();
};

export default getProducts;