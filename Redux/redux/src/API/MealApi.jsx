import axios from "axios";


const Base_URL = "https://www.themealdb.com/api/json/v1/1";

export const getRandomMeals = () => axios.get(`${Base_URL}/random.php`);
export const searchMeals =(query) => axios.get(`${Base_URL}/search.php?s=${query}`);
export const getMealById =(id) => axios.get(`${Base_URL}/lookup.php?i=${id}`);
export const getCategories = () => axios.get(`${Base_URL}/list.php?c=list`);
export const getAreas =() => axios.get(`${Base_URL}/list.php?a=list`);
