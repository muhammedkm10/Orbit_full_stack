// import React, { useContext } from "react";
// import { useParams } from "react-router-dom";
// import { categories } from "../CategorySection/CategorySection";
// import { CartContext } from "../../Context/CartContext";
// import { ToastContainer, toast } from "react-toastify";
// import "./ProductList.css";

// const ProductListing = () => {
//   const { categoryPath } = useParams();
//   const selectedCategory = categories.find((cat) => cat.path === categoryPath);
//   const { addToCart } = useContext(CartContext);

//   const addToCartMessage = () => {
//     toast.success("Product Successfully Added To Cart!", {
//       position: "bottom-right",
//       autoClose: 5000,
//     });
//   };


//   if (!selectedCategory) {
//     return <div>Category not found</div>;
//   }

//   return (
//     <div className="container mx-auto p-6">
//             <ToastContainer />
//       <h2
//         className="text-2xl font-semibold mb-4"
//         style={{
//           marginTop: "10rem",
//           display: "flex",
//           justifyContent: "center",
//           color: "white",
//           background: "black",
//         }}
//       >
//         {selectedCategory.name}
//       </h2>
//       {selectedCategory.subcategories ? (
//         selectedCategory.subcategories.map((subcat, index) => (
//           <div key={index} className="subcategory-section mb-8">
//             <h3 className="text-xl font-semibold mb-4">{subcat.name}</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {subcat.products.map((product, idx) => (
//                 <div key={idx} className="product-card p-4 border rounded-lg">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-32 object-cover rounded-lg mb-2"
//                   />
//                   <h4 className="text-lg font-semibold">{product.name}</h4>
//                   <p className="text-gray-600">{product.price}</p>
//                   <button
//                     className="bg-blue-500 text-white py-1 px-2 rounded"
//                     onClick={() => addToCart(product)}
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {selectedCategory.products.map((product, index) => (
//             <div key={index} className="product-card p-4 border rounded-lg">
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-32 object-cover rounded-lg mb-2"
//               />
//               <h4 className="text-lg font-semibold">{product.name}</h4>
//               <p className="text-gray-600">Price:{product.price}QAR</p>
//               <button
//                 className="order-now-button"
//                 onClick={() => {addToCart(product);addToCartMessage()}}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductListing;

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { categories } from "../CategorySection/CategorySection";
import { CartContext } from "../../Context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "./ProductList.css";
import api from "../../admin_side/service";
import { BackendUrls } from "../../admin_side/Backend_Endpoints";

const ProductListing = () => {
  const { id } = useParams();
  const [data,setData] = useState([])
  
  // const selectedCategory = categories.find((cat) => cat.path === id);
  const { addToCart } = useContext(CartContext);

  const addToCartMessage = () => {
    toast.success("Product Successfully Added To Cart!", {
      position: "bottom-right",
      autoClose: 5000,
    });
  };


    const fetchProduct = async () =>{
        try{
        const response = await api.get(`${BackendUrls.product_management}/${id}`)

        if(response.status == 201){
            setData(response.data.data)
        }


        }
        catch(error){
            console.log(error);
            
        }

    }

    useEffect (()=>{
         fetchProduct()


    },[])

  if (!data) {
    return <div>Category not found</div>;
  }

  return (
    <div className="container">
      <ToastContainer />
      <h2 className="category-title">{data.product_name}</h2>
      {!data ? (
        data.map((subcat, index) => (
          <div key={index} className="subcategory-section">
            <h3 className="subcategory-title">{subcat.name}</h3>
            <div className="product-grid">
              {subcat.products.map((product, idx) => (
                <div key={idx} className="product-card">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                  <h4 className="product-name">{product.name}</h4>
                  {/* <p className="product-price">Price: {product.price}QAR</p> */}
                  <button
                    className="order-now-button"
                    onClick={() => { addToCart(product); addToCartMessage() }}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="product-grid">
          {data.map((product, index) => (
            <div key={index} className="product-card">
              <img
                src={`${process.env.REACT_APP_API_URL}${product.image}`}
                alt={product.product_name}
                className="product-image"
              />
              <h4 className="product-name">{product.product_name}</h4>
              {/* <p className="product-price">Price: {product.price}QAR</p> */}
              <button
                className="order-now-button"
                onClick={() => { addToCart(product); addToCartMessage() }}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListing;
