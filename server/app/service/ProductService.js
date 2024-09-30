import BrandModel from "../models/brandsModel.js";
import CategoriesModel from "../models/categoriesModel.js";
import SlidersModel from "../models/slidersModel.js";
import mongoose from "mongoose";
import ProductModel from "../models/productsModel.js";

const ObjectId = mongoose.Types.ObjectId;

/**
 * Retrieves all the brands from the database
 * and returns a json object with the result
 * @returns {json} A json object with the result of the query
 */
export const BrandListService = async () => {
  try {
    // Retrieve all the brands from the database
    const brands = await BrandModel.find();
    // Return a json object with the result
    return { status: "success", data: brands };
  } catch (error) {
    // If an error occurs, return a json object with the error message
    return { status: "fail", data: error.toString() };
  }
};


/**
 * This function retrieves all the categories from the database
 * and returns a json object with the result
 * @returns {json} A json object with the result of the query
 */
export const CategoryListService = async () => {
  try {
    // Retrieve all the categories from the database
    const data = await CategoriesModel.find();
    // Return a json object with the result
    return { status: "success", data: data };
  } catch (error) {
    // If an error occurs, return a json object with the error message
    return { status: "fail", data: error.toString() };
  }
};

/**
 * This function retrieves all the sliders from the database
 * and returns a json object with the result
 * @returns {json} A json object with the result of the query
 */
export const SliderListService = async () => {
  try {
    // Retrieve all the sliders from the database
    const data = await SlidersModel.find();
    // Return a json object with the result
    return { status: "success", data: data };
  } catch (error) {
    // Return a json object with the error message
    return { status: "fail", data: error.toString() };
  }
};
