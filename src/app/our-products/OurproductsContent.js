"use client";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import MatrixComponent from "@/components/product";
import { useState } from "react";

const RootLayout = ({ children }) => {
  const [showAll, setShowAll] = useState(false); // Default: show limited products
  const initialProducts = 10; // Show 10 initially
  const totalProducts = 100; // Example: Total products (update dynamically)

  return (
    <Layout>
      <Hero
        title="Our Products"
        imgPath="/assets/images/new-images/products-hero-web.jpg"
        mobileImgPath="/assets/images/new-images/products-hero-mob.jpg"
      />

      {/* Product Description */}
      <section className="aboutus-creting-excellance">
        <div className="container grid-container">
          <div className="col-span-6">
            <h2>
              We make the key ingredients for your next-gen pharma products.
            </h2>
          </div>
          <div className="col-span-6">
            <p>
              Matrix Pharma Corp offers a comprehensive range of high-quality
              Active Pharmaceutical Ingredients (APIs) tailored to meet diverse
              therapeutic needs. From complex molecules and high-potency
              ingredients to a versatile portfolio of over 650 DMFs, our
              products are designed to support global healthcare innovation.
              With a commitment to quality, scalability, and affordability, we
              empower pharmaceutical companies to deliver better health outcomes
              worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Product Table Start */}
      
      <section className="product-section">
        {/* Table Component */}
        <MatrixComponent
          visibleCount={showAll ? totalProducts : initialProducts}
        />
      </section>
      {/* Product Table End*/}
    </Layout>
  );
};

export default RootLayout;
