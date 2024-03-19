"use client"
import PaginationButtons from "@/components/ui/pagination";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);


  const getProducts = async () => {
    try {
      const res = await axios.get(`/api/interest`);
      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <div className="w-[576px] my-10 pt-10 pb-32 gap-8 border rounded-3xl justify-center flex flex-col">
      <section className="flex flex-col gap-8 items-center">
        <h1 className="text-[32px] font-semibold">Please mark your interests!</h1>
        <p>We will keep you notified.</p>
      </section>
      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 ml-20">
          <p className="text-xl font-medium">My Saved interests!</p>
          {products.slice((page - 1) * 6, page * 6).map((product) => (
            <div key={product.id} className="flex gap-3">
              <input type="checkbox" width="20px" height="20px" className="" />
              <p className="font-normal">{product.name}</p>
            </div>
          ))}
        </div>
        {products.length > 6 && (
          <PaginationButtons count={Math.ceil(products.length / 6)} handleChange={handleChange} />

        )}
      </section>
    </div>
  );
}
