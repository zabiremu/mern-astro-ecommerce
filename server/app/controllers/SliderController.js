import { SliderListService } from "../service/ProductService.js";

export const SliderList = async (req, res) => {
  const result = await SliderListService();
  return res.json(result);
};
