"use server";

import { API_URL } from "../../constant";

const getProducts = async () => {
  try {
    const data = await fetch(`${API_URL}/products`, {
        cache: "force-cache",
    });

    if (!data.ok) {
      return { error: "not ok"};
    }
    const result = await data.json();
    return result;
  } catch (error) {
    return { error: error};
  }
};

const getProduct = async (id) => {
  try {
    const data = await fetch(`${API_URL}/products/${id}`, {
        cache: "force-cache",
    });

    if (!data.ok) {
      return { error: "not ok"};
    }
    const result = await data.json();
    return result;
  } catch (error) {
    return { error: error};
  }
};

export { getProducts, getProduct };
