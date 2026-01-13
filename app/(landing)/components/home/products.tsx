import Link from "next/link";
import Image from "next/image";
import { FiPlus } from "react-icons/fi";
import Button from "../ui/button";
import priceFormatter from "@/app/utils/price-formater";
import { Product } from "@/app/types";
import { getImageUrl } from "@/app/lib/api";

type TProductsProps = {
  products:Product[];
}

const ProductsSection = ({products}: TProductsProps) => {
  return (
    <section id="products-section" className="container mx-auto mt-30 px-17 mb-52">
      <h2 className="font-bold italic text-4xl text-center mb-11">
        <span className="text-primary">OUR</span> PRODUCTS
      </h2>
      <div className="grid grid-cols-4 gap-5">
        {
          products.map((product) => (
            <Link href={`/product/${product._id}`} key={product._id} className="p-1.5 hover:drop-shadow-xl duration-300">
              <div className="bg-primary-light aspect-square w-full flex justify-center items-center relative">
                <Image 
                  src={getImageUrl(product.imageUrl)} 
                  alt={product.name} 
                  height={300} 
                  width={300} 
                  className="aspect-square object-contain"
                />
                <Button className="w-10 h-10 p-2! absolute right-3 top-3"><FiPlus size={24}/></Button>
              </div>
              <h3 className="font-medium text-lg mb-1.5 mt-4">{product.name}</h3>
              <div className="flex justify-between mb-8">
                <div className="text-grey-500">{product.category.name}</div>
                <div className="font-medium text-primary">
                  {
                    priceFormatter(product.price)
                  }
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </section>
  );
}

export default ProductsSection;