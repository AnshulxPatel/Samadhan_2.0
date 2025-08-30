import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="max-w-xs bg-white rounded-lg shadow p-4 flex flex-col items-center">
      <img src={product.image} alt={product.name} className="h-32 w-32 object-cover rounded mb-3"/>
      <h2 className="font-semibold text-lg">{product.name}</h2>
      <p className="text-gray-500 my-2">{product.description}</p>
      <span className="text-green-600 font-bold text-xl">₹{product.price}</span>
      <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Buy Now</button>
    </div>
  );
}

const products = [
];

export default function Task10() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.map((product, idx) => (
        <ProductCard key={idx} product={product} />
      ))}
    </div>
  );
}
