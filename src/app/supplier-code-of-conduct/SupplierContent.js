"use client";
import "@/styles/globals.css";
import Layout from "@/components/LayoutNoFooter";
import Hero from "@/components/Hero";
import Link from "next/link";
import FormSupplierCOC from "@/components/FormSupplierCOC";

export default function SupplierCodeOfConductPage() {
  return (
    <Layout>
      <Hero
        title="Supplier Code of Conduct"
        imgPath="/assets/images/new-images/supplier-hero-web.webp"
        mobileImgPath="/assets/images/new-images/products-hero-mob.jpg"
        height="580px"
      />
      <section className="contact-address">
        <div className="container grid-container">
          <div className="col-span-6">
            <div className="office-card">
              <h2 className="office-title contact-box">
                Shared ethics, stronger partnerships
              </h2>
              <p>
                At Matrix PharmaCorp Private Limited, excellence means growing
                responsibly — together with our partners. We’re committed to
                building a supply chain rooted in ethics, human rights,
                environmental care, and legal compliance.
                <br></br>
                <br></br>
                We invite you to review and acknowledge our Supplier Code of
                Conduct, a key part of our Supplier Engagement Strategy. It sets
                clear expectations and strengthens our shared commitment to
                responsible business.
              </p>
              <Link
                href="/matrix-supplier-code-of-conduct-v2.pdf"
                className="link-default mt-30 supplier-link"
                target="_blank"
              >
                Click here to read the Supplier Code of Conduct
                <svg width="17" height="17" viewBox="0 0 17 17">
                  <path
                    d="M15.707 8.472l-7.354 7.354-0.707-0.707 6.146-6.146h-12.792v-1h12.793l-6.147-6.148 0.707-0.707 7.354 7.354z"
                    fill="#f04f3f"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="col-span-6">
            <p><strong>Please provide the requested details as part of your acknowledgment</strong>
            <br></br>
            </p>
            <FormSupplierCOC />
          </div>
        </div>
      </section>
    </Layout>
  );
}
