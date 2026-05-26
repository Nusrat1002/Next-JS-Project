import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <Link href="/shop"><ShoppingBag/></Link>
  );
}
