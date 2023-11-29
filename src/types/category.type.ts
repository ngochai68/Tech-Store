export interface ICategory {
  category_id: number;
  category_name: string;
  created_at: string;
  product_count: number;
}

export interface CategoryCreateResponse {
  message: string;
  categoryId: number;
}

export interface CategoryListResponse {
  message: string;
  data: ICategory[];
}

export interface CategoryUpdateResponse {
  message: string;
}

export interface CategoryDeleteResponse {
  message: string;
}
