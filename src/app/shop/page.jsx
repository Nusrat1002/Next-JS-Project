import React from "react";
import Container from "../../components/Container";
import ProductCart from "../../components/ProductCart";
import { getProducts } from "../../server/action";
import Link from "next/link";
import { House } from "lucide-react";

const page = async () => {
  const data = await getProducts();
  return (
    <Container className="mt-10">
      <Link href="/"><House /></Link>
      <div  className="flex items-center gap-10 flex-wrap justify-center">
      {data?.error ? data?.error : data.products.map((product) => <ProductCart key={product.id} product={product}  />)}</div>
    </Container>
  );
};

export default page;
