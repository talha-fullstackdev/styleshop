// import Image from "next/image";
// import { getProductById } from "@/data/products";
// import { notFound } from "next/navigation";

// interface ProductPageProps {
//   params: {
//     id: string;
//   };
// }

// export default async function ProductPage({ params }: ProductPageProps) {
//   const product = await getProductById(parseInt(params.id));

//   if (!product) {
//     notFound();
//   }

//   return (
//     <div className="bg-white w-full">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
//           {/* Image gallery */}
//           <div className="flex flex-col w-full">
//             <div className="aspect-h-1 aspect-w-1 w-full">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 width={400}
//                 height={400}
//                 className=" object-cover object-center sm:rounded-lg"
//               />
//             </div>
//           </div>

//           {/* Product info */}
//           <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
//             <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>

//             <div className="mt-3">
//               <h2 className="sr-only">Product information</h2>
//               <p className="text-3xl tracking-tight text-gray-900">${product.price.toFixed(2)}</p>
//             </div>

//             <div className="mt-6">
//               <h3 className="sr-only">Description</h3>
//               <div className="space-y-6 text-base text-gray-700">{product.description}</div>
//             </div>

//             <div className="mt-8">
//               <h3 className="text-sm font-medium text-gray-900">Available Sizes</h3>
//               <div className="mt-2">
//                 <div className="flex items-center space-x-3">
//                   {product.sizes.map((size) => (
//                     <button
//                       key={size}
//                       type="button"
//                       className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                     >
//                       {size}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8">
//               <h3 className="text-sm font-medium text-gray-900">Available Colors</h3>
//               <div className="mt-2">
//                 <div className="flex items-center space-x-3">
//                   {product.colors.map((color) => (
//                     <button
//                       key={color}
//                       type="button"
//                       className="relative -m-0.5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                     >
//                       <span className="sr-only">{color}</span>
//                       <span
//                         className="h-8 w-8 rounded-full border border-black border-opacity-10"
//                         style={{ backgroundColor: color.toLowerCase() }}
//                       />
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             <div className="mt-8 flex">
//               <button
//                 type="button"
//                 className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
//               >
//                 Add to cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// } 
import Image from "next/image";
import { getProductById } from "@/data/products";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Record<string, string>; // Adjusted type
}

export default async function ProductPage({ params }: ProductPageProps) {
  const productId = parseInt(params.id, 10); // Ensure correct type conversion
  if (isNaN(productId)) {
    notFound();
  }

  const product = await getProductById(productId);
  if (!product) {
    notFound();
  }

  return (
    <div className="bg-white w-full">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <div className="flex flex-col w-full">
            <div className="aspect-h-1 aspect-w-1 w-full">
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={400}
                className="object-cover object-center sm:rounded-lg"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
            <div className="mt-3">
              <p className="text-3xl tracking-tight text-gray-900">${product.price.toFixed(2)}</p>
            </div>
            <div className="mt-6">
              <p className="space-y-6 text-base text-gray-700">{product.description}</p>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900">Available Sizes</h3>
              <div className="mt-2 flex items-center space-x-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className="h-8 w-8 rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-900">Available Colors</h3>
              <div className="mt-2 flex items-center space-x-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    type="button"
                    className="h-8 w-8 rounded-full border border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">{color}</span>
                    <span className="h-8 w-8 rounded-full border border-black border-opacity-10" style={{ backgroundColor: color.toLowerCase() }} />
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex">
              <button
                type="button"
                className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
