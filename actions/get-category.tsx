import { Category } from "@/types";


const getCategory = async (id: string): Promise<Category> => {
  const URL = `http://localhost:3000/api/dd5960db-046b-44c8-9875-8e3a5603dd6e/categories`;
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getCategory;