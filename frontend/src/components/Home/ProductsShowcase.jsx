import React from "react";
import Button from "../common/Button";

const products = [
  {
    id: "sago",
    name: "Sago",
    image: "/hero1.jpg",
    desc: "High quality sago produced and traded through SAGOSERVE regulated market.",
  },
  {
    id: "starch",
    name: "Tapioca Starch",
    image: "/hero2.jpg",
    desc: "Certified tapioca starch tested and approved by SAGOSERVE laboratory.",
  },
  {
    id: "broken-sago",
    name: "Broken Sago",
    image: "/hero3.jpg",
    desc: "By-product sago supplied to various industrial and food applications.",
  },
];

export default function ProductsShowcase() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-14">
          Our Products
        </h2>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url(${product.image})` }}
              />

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold text-gray-900">
                  {product.name}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed flex-grow">
                  {product.desc}
                </p>

                <div className="mt-6">
                  <Button
                    onClick={() =>
                      (window.location.href = `/products/${product.id}`)
                    }
                  >
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
