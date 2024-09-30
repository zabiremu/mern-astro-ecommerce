import { CategoryListService } from "../service/ProductService.js";

export const CategoryList = async (req, res) => {
  const result = await CategoryListService();
  return res.json(result);
};
