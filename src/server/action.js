"use server";

const getProducts = async () => {
  try {
    const data = await fetch("https://dummyjson.com/products", {
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

export { getProducts };
