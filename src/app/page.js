import { connectDb } from "./lib/db/connectDb";
import ProductList from "./components/Productslist";

export default async function Home() {
  await connectDb();
  return (
    <>
      {" "}
      <ProductList />{" "}
    </>
  );
}
