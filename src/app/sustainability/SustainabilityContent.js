"use client";
import "@/styles/globals.css";
import "@/styles/esg.css";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";

const sustainability = ({ children }) => {
  return (
    <Layout>
      <Hero
        title="ESG transformation"
        imgPath="/assets/images/sustain-hero-img.png"
      />

      <section className="esg">
        <div className="container grid-container">
          <div className="col-span-6">
            <h2>
              Growing responsibly <br className="d-none d-md-block" />
              by building a sustainable future
              <br className="d-none d-md-block" /> for everyone.
            </h2>
          </div>
          <div className="col-span-6 sustainability-matrix">
            <p>
              At Matrix Pharma Corp, sustainability is not just a goal, but the
              very core of our operations. Guided by our strong legacy of
              innovation and excellence, we are committed to charting a
              responsible future with our ESG roadmap, integrating sustainable
              practices across every facet of our business. We prioritise the
              health and well-being of our employees, value chain partners, and
              communities, fostering a safe, inclusive, and supportive ecosystem
              where every stakeholder thrives. Ensuring that our actions today
              lay the groundwork for a healthier and more sustainable tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* ESG Vision start */}
      {/* <section>
        <picture>
          <img 
            src="/assets/images/sustainibilty/matrix-pharma-cor-esg-page-2.jpg" 
            alt="ESG Vision - Matrix Pharma Corp"
            style={{ width: '100vw', height: 'auto', display: 'block' }}
          />
        </picture>
      </section> */}
      {/* ESG Vision end */}
      {/* ESG Vision start */}
       <section className="esg-vision">
        <div className="container">
          <div className="d-flex align-items-center justify-content-center">
            <img src="/assets/images/esg-tree.svg" className="custom-img" />
          </div>
          <p className="title text-center">ESG Vision</p>
          <p className="sub-text text-center mx-auto">
            “To create a net positive impact across people, planet, and product
            by building on our legacy of responsible growth and sustainability.”
          </p>

          <p className="description text-center mx-auto">
            Our ESG vision defines the future we aim to build for our business,
            employees, communities, and the planet. To bring this vision to
            life, we are shaping an ESG strategy anchored in three core pillars:
          </p>

          <div className="row mx-auto">
            <div className="col-12 col-lg-4">
              <div className="position-relative">
                <h3 className="font-ec heading">Environmental Stewardship</h3>
                <span className="box box1" aria-hidden="true"></span>
              </div>
              <p className="sub-heading">
                Reducing our ecological footprint through emissions reduction,
                water stewardship, circular practices, and biodiversity
                conservation.
              </p>
            </div>
            <div className="col-12 col-lg-4">
              <div className="position-relative">
                <h3 className="font-ec heading">Purposeful Governance</h3>
                <span className="box box2" aria-hidden="true"></span>
              </div>
              <p className="sub-heading">
                Embedding ethics, transparency, and accountability in our
                operations.
              </p>
            </div>
            <div className="col-12 col-lg-4">
              <div className="position-relative">
                <h3 className="font-ec heading">Ecosystem Collaboration</h3>
                <span className="box box3" aria-hidden="true"></span>
              </div>
              <p className="sub-heading">
                Working closely with our partners, and communities to advance
                shared sustainability goals.
              </p>
            </div>
          </div>
        </div>
        </section>
      <section>
        {/* <picture>
          <img 
            src="/assets/images/sustainibilty/matrix-pharma-cor-esg-page-2.jpg" 
            alt="ESG Vision - Matrix Pharma Corp"
            style={{ width: '100vw', height: 'auto', display: 'block' }}
          />
        </picture> */}
      </section>
      {/* ESG Vision end */}

      {/* Sustanibility two column start*/}
      <section className="esg-two-col resource-management">
        <div className="main-box">
          <span className="box box1" aria-hidden="true"></span>
          <span className="box box2" aria-hidden="true"></span>
          <span className="box box3" aria-hidden="true"></span>
        </div>
        <div className="container grid-container">
          <div className="col-span-5">
            <div className="img-box position-relative">
              <img src="/assets/images/sustainability-img1.jpg" />
              <span className="box box1" aria-hidden="true"></span>
              <span className="box box2" aria-hidden="true"></span>
              <span className="box box3" aria-hidden="true"></span>
            </div>
          </div>
          <div className="col-span-6 col-7 mb-2">
            <h2 className="mg-bottom-large">Resource management</h2>
            <p className="mg-bottom-large mw-700 mb-70">
              We are always seeking to reduce our environmental footprint, while
              maintaining the highest standards of quality and performance.
              Through innovative practices and thoughtful planning, we
              continuously evaluate the best use of resources across our
              operations, and the most efficient methods to minimise waste.
            </p>
            <div className="esg-two-col-card">
              <div className="esg-two-col-card-item">
                <h3 className="font-ec">Green chemistry principles</h3>
                <span className="esg-visually-box1" aria-hidden="true"></span>
                <p className="mb-70 ms-20 mw-720">
                  Our R&D teams apply green chemistry principles to minimise use
                  of hazardous substances, and optimise reaction conditions to
                  reduce energy consumption and waste generation. This approach
                  fosters a safer work environment for our teams, and ensures
                  that we create more sustainable products for our customers.
                </p>
              </div>
              <div className="esg-two-col-card-item">
                <h3 className="font-ec">Water and energy conservation</h3>
                <span className="esg-visually-box2" aria-hidden="true"></span>
                <p className="ms-20 mw-720">
                  We implement technologies that reduce energy and water
                  consumption without compromising on product quality. At the
                  shopfloor level, dedicated water conservation teams lead
                  initiatives to optimise usage, implement recycling practices,
                  and minimise waste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="esg-two-col waste-management">
        <div className="container grid-container">
          <div className="col-span-5 esg-order1">
            <h2 className="mg-bottom-large">Waste management and reduction</h2>
            <p className="mb-60">
              We take a proactive approach to managing and reducing waste across
              all our operations. Our waste management philosophy include:
            </p>
            <div className="esg-two-col-card">
              <div className="esg-two-col-card-item">
                <h3 className="font-ec">Zero Liquid Discharge (ZLD) Systems</h3>
                <span className="esg-visually-box1" aria-hidden="true"></span>
                <p className="mg-bottom-large ms-20 mb-50">
                  We have implemented state-of-the-art Zero Liquid Discharge
                  (ZLD) systems across our manufacturing facilities. By treating
                  and recycling all water used in our operations, we minimise
                  our water consumption and eliminate the environmental impact
                  of wastewater.
                </p>
              </div>
              <div className="esg-two-col-card-item">
                <h3 className="font-ec">Segregation and recycling</h3>
                <span className="esg-visually-box2" aria-hidden="true"></span>
                <p className="mg-bottom-large ms-20 mb-70">
                  We segregate hazardous and non-hazardous waste at the source,
                  ensuring materials are either recycled or disposed of safely.
                  By focusing on waste reduction and recycling, we aim to
                  minimise landfill waste. Our goal is to achieve zero waste to
                  landfill, and we are steadily progressing toward it.
                </p>
              </div>
              <div className="esg-two-col-card-item">
                <h3 className="font-ec">Waste-to-energy initiatives</h3>
                <span className="esg-visually-box3" aria-hidden="true"></span>
                <p className="ms-20 mb-50">
                  We explore innovative solutions to convert waste into energy,
                  reducing our reliance on conventional energy sources and
                  lowering our carbon footprint.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-5 col-7 esg-order2">
            <div className="img-box position-relative">
              <img src="/assets/images/sustainability-img2.jpg" />
              <span className="box box1" aria-hidden="true"></span>
              <span className="box box2" aria-hidden="true"></span>
              <span className="box box3" aria-hidden="true"></span>
            </div>
          </div>
        </div>
      </section>

      <section className="esg-two-col renewable-sec">
        <div className="container grid-container">
          <div className="col-span-5">
            <div className="img-box position-relative">
              <img src="/assets/images/sustainability-img3.png" />
              <span className="box box1" aria-hidden="true"></span>
              <span className="box box2" aria-hidden="true"></span>
              <span className="box box3" aria-hidden="true"></span>
              <span className="box box4" aria-hidden="true"></span>
            </div>
          </div>
          <div className="col-span-6 col-7">
            <h2 className="mg-bottom-large mb-20">
              Renewable solar energy initiative
            </h2>
            <p className="mw-720 mb-70">
              As part of our commitment to reducing our carbon footprint, we’ve
              integrated solar energy into our manufacturing operations,
              reducing reliance on non-renewable sources and cutting greenhouse
              gas emissions. This transition strengthens our pledge to a
              cleaner, climate-resilient future.
            </p>
            <h2 className="mg-bottom-large mb-20">Sustainable packaging</h2>
            <p className="mw-720 mb-70">
              At Matrix Pharma Corp, we’re committed to minimising the
              environmental impact of our packaging materials. We continuously
              explore sustainable packaging options that are recyclable or made
              from renewable resources, reducing plastic waste.
            </p>
            <h2 className="mg-bottom-large mb-20">Upholding standards</h2>
            <p className="mw-700 mb-20">
              Matrix Pharma Corp adheres to the highest standards of
              occupational safety, environmental protection, sustainability, and
              energy management. Our certifications reflect this commitment to
              drive meaningful, standards-aligned improvements across our sites.
              Our manufacturing sites across Hyderabad and Vizag are certified
              for:
            </p>
            <div className="ul-list">
              <li className="mb-0 fw-medium">
                ISO 9001 - Quality Management System
              </li>
              <li className="mb-0 fw-medium">
                ISO 45001:2018 - Occupational Health & Safety Management
                System
              </li>
              <li className="mb-0 fw-medium">
                ISO 14001:2015 - Environmental Management System
              </li>
              <li className="mb-0 fw-medium">
                ISO 50001 - Energy Management System
              </li>
            </div>
          </div>
        </div>
      </section>

      <section className="esg-two-col workplace-sec">
        <div className="container grid-container">
          <div className="col-span-5 esg-order1">
            <h2 className="mg-bottom-large">Workplace health and safety</h2>
            <p className="mb-90">
              At Matrix Pharma Corp, we proactively safeguard our workforce
              through integrated risk assessments, a strengthened incident
              reporting system, and continuous process improvements.
            </p>
            <div className="esg-two-col-card">
              <div className="esg-two-col-card-item">
                <h3 className="font-ec">Risk prevention</h3>
                <span className="esg-visually-box1" aria-hidden="true"></span>
                <p className="ms-20 mb-90">
                  Hazards are identified early through thorough risk
                  assessments, allowing us to implement controls that mitigate
                  potential harm.
                </p>
              </div>
              <div className="esg-two-col-card-item">
                <h3 className="font-ec">Incident reporting and prevention</h3>
                <span className="esg-visually-box2" aria-hidden="true"></span>
                <p className="ms-20 mb-90">
                  Our Incident Prevention Opportunity program tracks
                  near-misses, enabling a proactive approach to refining safety
                  measures and preventing future risks.
                </p>
              </div>
              <div className="esg-two-col-card-item">
                <h3 className="font-ec">Engagement and awareness</h3>
                <span className="esg-visually-box3" aria-hidden="true"></span>
                <p className="ms-20 mb-90">
                  Our monthly safety campaigns empower employees to recognise
                  risks and take preventive actions. A recent "Electrostatic
                  Safety Month" initiative focused on equipping production areas
                  with advanced safety controls.
                </p>
              </div>
              <div className="esg-two-col-card-item">
                <h3 className="font-ec">Process safety first</h3>
                <span className="esg-visually-box2" aria-hidden="true"></span>
                <p className="ms-20 ">
                  Every new and existing process prioritises safety at every
                  step – from development to execution.
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-5 col-7 esg-order2">
            <div className="img-box position-relative">
              <img src="/assets/images/sustainability-img4.jpg" />
              <span className="box box1" aria-hidden="true"></span>
              <span className="box box2" aria-hidden="true"></span>
              <span className="box box3" aria-hidden="true"></span>
              <span className="box box4" aria-hidden="true"></span>
              <span className="box box5" aria-hidden="true"></span>
            </div>
          </div>
        </div>
      </section>
      {/* Sustanibility two column end */}

      {/* Supplier vision text section start */}
<section className="supplier-vision">
  <div className="container">
    <h2 className="title text-center mx-auto">Supplier engagement</h2>

    <p className="description text-center mx-auto">
      We firmly believe that our suppliers are strategic partners in our
      growth and impact journey. They have a key role in upholding the
      quality, reliability, and values our business stands for. In line
      with this belief, we are committed to building resilient and
      responsible supplier partnerships by embedding sustainability across
      our procurement practices.
      <br />
      <br />
      To put our commitment into practice, we have designed a
      comprehensive supplier engagement program. Through this program, we
      aim to offer the training, and support needed to drive continuous
      improvement. Suppliers who actively progress on ESG performance will
      be integral to our long-term sourcing decisions.
    </p>
  </div>
</section>
{/* Supplier vision text section end */}

{/* Supplier vision image section start */}
<section className="supplier-vision-image">
  <div className="container-fluid p-0">
    <picture>
      <source 
        media="(max-width: 768px)" 
        srcSet="/assets/images/sustainibilty/matrix-pharma-mobile.png"
      />
      <img 
        src="/assets/images/sustainibilty/Matrix Pharma Corp_ESG PageArtboard 40 copy.png" 
        alt="ESG Vision - Matrix Pharma Corp"
        style={{ width: '100vw', height: 'auto', display: 'block' }}
      />
    </picture>
  </div>
</section>
{/* Supplier vision image section end */}


      {/* Partner section start */}
      <section className="esg-two-col partner-sec">
        <div className="container grid-container">
          <div className="col-span-6">
            <div className="img-box position-relative">
              <img src="/assets/images/partnerships-img.jpg" />
              <span className="box box1" aria-hidden="true"></span>
              <span className="box box2" aria-hidden="true"></span>
            </div>
          </div>
          <div className="col-span-6">
            <h2 className="mb-25">Partnerships and collaborations</h2>
            <p className="mb-85">
              We actively engage with leading global sustainability platforms to
              align our operations with responsible business practices and
              international ESG standards. Our memberships reflect our
              commitment to shared responsibility and continuous improvement.
            </p>
            <img src="/assets/images/UNGC.png" className="mb-25 partner-logo" />
            <p className="mb-85">
              We are a proud signatory of the UNGC, reinforcing our commitment
              to its 10 principles. With this, we are joining a league of
              responsible businesses working toward a more inclusive and
              sustainable future. As part of this membership, we will regularly
              report our progress against the UNGC’s focus areas, spanning human
              rights, labour, environment, and anti-corruption.
            </p>
            <img
              src="/assets/images/CEO-Water-Mandate.png"
              className="mb-25 partner-logo"
            />
            <p className="mb-85">
              As part of our ongoing efforts to strengthen our water stewardship
              practices, we are in the process of joining the CEO Water Mandate.
              Water is a shared and finite resource — one that is critical not
              only to our manufacturing operations, but also to the communities
              and ecosystems around us. Through this platform, we aim to
              collaborate with global peers to advance sustainable water
              strategies, reduce water-related risks, and contribute
              meaningfully to community water resilience.
            </p>
            <img src="/assets/images/psci.png" className="mb-25 partner-logo" />
            <p className="mb-0">
              We are in the process of obtaining PSCI membership, as a natural
              extension of our commitment to responsible and ethical supply
              chain practices. Our relentless focus on ethics, quality, safety,
              and transparency has positioned us well to adopt and implement the
              PSCI principles. As we formalise our participation, we aim to
              deepen collaboration with industry peers and partners, further
              strengthening our supplier engagement approach and driving ESG
              performance across the value chain.
            </p>
          </div>
        </div>
      </section>
      {/* Partner section end */}

      {/* Policies section start */}
      <section className="policies">
        <div className="container">
          <h2 className="title text-center mx-auto">ESG policies</h2>

          <div className="row mx-auto">
            <div className="col-12 col-lg-6">
              <p className="description">
                The Matrix ESG policies reflect our commitment to sustainable,
                ethical, and responsible business practices. Aligned with global
                standards, they form a foundation for driving long-term value
                while creating a positive impact on the environment and society.
              </p>
              <p className="description fw-medium mb-0">
                Click link to download PDF
              </p>
            </div>
            <div className="col-12 col-lg-6 px-0">
              <div className="row mx-auto links-row">
                <div className="col-12 col-md-6">
                  <a
                    href="/assets/policies/Code-of-Business-Conduct-and-Ethics.pdf"
                    download
                  >
                    <div className="download-link">
                      <span>
                        Code of Business Conduct
                        <br /> and Ethics Policy
                      </span>
                      <img src="/assets/images/download.svg" />
                    </div>
                  </a>
                </div>
                <div className="col-12 col-md-6">
                  <a
                    href="/assets/policies/Environment-Stewardship-Policy.pdf"
                    download
                  >
                    <div className="download-link">
                      <span>
                        Environmental <br /> Stewardship Policy
                      </span>
                      <img src="/assets/images/download.svg" />
                    </div>
                  </a>
                </div>
                <div className="col-12 col-md-6">
                  <a href="/assets/policies/Whistleblower-Policy.pdf" download>
                    <div className="download-link">
                      <span>Whistle blower Policy</span>
                      <img src="/assets/images/download.svg" />
                    </div>
                  </a>
                </div>
                <div className="col-12 col-md-6">
                  <a href="/assets/policies/EHS-Policy.pdf" download>
                    <div className="download-link">
                      <span>EHS Policy</span>
                      <img src="/assets/images/download.svg" />
                    </div>
                  </a>
                </div>
                <div className="col-12 col-md-6">
                  <a
                    href="/assets/policies/Board-Diversity-Policy.pdf"
                    download
                  >
                    <div className="download-link">
                      <span>Board Diversity Policy</span>
                      <img src="/assets/images/download.svg" />
                    </div>
                  </a>
                </div>
                <div className="col-12 col-md-6">
                  <a href="/assets/policies/Biodiversity-Policy.pdf" download>
                    <div className="download-link">
                      <span>Biodiversity Policy</span>
                      <img src="/assets/images/download.svg" />
                    </div>
                  </a>
                </div>
                <div className="col-12 col-md-6">
                  <a href="/assets/policies/Sustainable-Procurement-Policy.pdf" download>
                    <div className="download-link">
                      <span>Sustainable Procurement Policy</span>
                      <img src="/assets/images/download.svg" />
                    </div>
                  </a>
                </div>
                <div className="col-12 col-md-6">
                  <a
                    href="/assets/policies/SCOC-with-Acknowledgement.pdf"
                    download
                  >
                    <div className="download-link">
                      <span>Supplier Code of Conduct</span>
                      <img src="/assets/images/download.svg" />
                    </div>
                  </a>
                </div>
                <div className="col-12 col-md-6">
                  <a
                    href="/assets/policies/Anti-Human-Trafficking&Modern-Slavery-Policy.pdf"
                    download
                  >
                    <div className="download-link">
                      <span>
                        Anti Human Trafficking & Modern Slavery Policy
                      </span>
                      <img src="/assets/images/download.svg" />
                    </div>
                  </a>
                </div>
                <div className="col-12 col-md-6">
                  <a href="/assets/policies/POSH-Policy.pdf" download>
                    <div className="download-link">
                      <span>POSH Policy</span>
                      <img src="/assets/images/download.svg" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Policies section end */}
    </Layout>
  );
};

export default sustainability;
