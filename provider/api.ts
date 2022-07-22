import axios from "axios";

export interface ProductType {
  name: string;
  fertiliser_group_name: string;
  description: string;
  Manufacturer_name?: string;
  Country_of_origin?: string;
  ProductVariants: ProductVariant[];
  created_at?: string;
  updated_at?: string;
  productCategoryId?: number;
  categoryName?: string;
  Crops: Crop[];
}
interface Crop {
  cropName: string;
}
interface ProductVariant {
  id: number;
  product_id?: number;
  min_price: number;
  max_price: number;
  sellingPrice?: number;
  sku: string;
  size: string;
  packaging: string;
  photo: string;
  internal_id: string;
  quantity: number;
  active?: boolean;
}
const fetchProducts = async (
  search: string
): Promise<ProductType[] | undefined> => {
  const res = await axios.get(
    `http://localhost:4000/api/v1/products?search=${search}`
  );

  return res.data.data.products;
};

export default fetchProducts;
