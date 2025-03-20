// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { Product } from "@/data/products";

// interface ProductCardProps {
//   product: Product;
// }

// export function ProductCard({ product }: ProductCardProps) {
//   return (
//     <div className="group relative w-full">
//       <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
//         <Image
//           src={product.image}
//           alt={product.name}
//           width={500}
//           height={500}
//           className="h-full w-full object-cover object-center group-hover:opacity-75"
//         />
//       </div>
//       <div className="mt-4 flex justify-between w-full">
//         <div className="flex-1">
//           <h3 className="text-sm text-gray-700">
//             <Link href={`/product/${product.id}`}>
//               <span aria-hidden="true" className="absolute inset-0" />
//               {product.name}
//             </Link>
//           </h3>
//           <p className="mt-1 text-sm text-gray-500">{product.subcategory}</p>
//         </div>
//         <p className="text-sm font-medium text-gray-900 ml-4">${product.price.toFixed(2)}</p>
//       </div>
//     </div>
//   );
// } 
"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group relative w-full max-w-[250px] mx-auto">
      <div className="relative w-full h-[300px] overflow-hidden rounded-lg bg-gray-200">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="w-full h-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="mt-4 flex justify-between w-full">
        <div className="flex-1">
          <h3 className="text-sm text-gray-700">
            <Link href={`/product/${product.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.name}
            </Link>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.subcategory}</p>
        </div>
        <p className="text-sm font-medium text-gray-900 ml-4">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}
