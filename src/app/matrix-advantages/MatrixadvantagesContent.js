"use client";
import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";

const MatrixAdvantages = ({ children }) => {
  {
    /* Matrixadvantage Datas */
  }
  const matrixDataArray = [
    {
      image: "/assets/images/ma-img1.png",
      title: "High quality, state-of-the-art manufacturing.",
      description:
        "Our six state-of-the-art facilities, with over 3850 kL of installed capacity, are equipped to handle the most demanding production requirements. Strategically located and designed to produce a diverse range of APIs, including complex and high-potency molecules, these facilities feature:",
      listItems: [
        "Multipurpose blocks for variable demand production.",
        "Dedicated units for ARVs, Peptides, and Iron complexes.",
        "Advanced technologies for precise particle size customisation.",
        "Sustainability-driven operations, including zero-liquid discharge and waste recycling.",
      ],
    },
    {
      image: "/assets/images/ma-img2.png",
      title: "R&D innovation that powers your growth.",
      description:
        "Supported by a team of 200 dedicated scientists, our R&D capabilities are designed to push boundaries. From using cutting-edge technologies to delivering complex APIs, we create solutions that meet the evolving demands of the pharmaceutical industry.",
      listItems: [
        "Expertise in developing APIs for chronic diseases, oncology, antivirals, and more.",
        "Advanced facilities equipped for formulation and process optimisation.",
        "A strong patent portfolio with 200+ granted and 900+ filed patents.",
        "Collaborative innovation through partnerships with academic and industry leaders.",
      ],
    },
    {
      image: "/assets/images/ma-img3.png",
      title: "Ensuring your products meet the highest standards.",
      description:
        "All our manufacturing sites are certified by global regulatory bodies. With our unwavering commitment to quality and compliance, we ensure our partners’ products meet the highest standards.",
      listItems: [
        "Adherence to stringent USFDA, EU GMP, and WHO standards.",
        "Proactive regulatory strategies to streamline product approvals.",
        "Continuous monitoring, internal audits, and training to meet evolving global standards. This ensures smooth regulatory approvals and consistent market access worldwide.",
      ],
    },
    {
      image: "/assets/images/ma-img4.png",
      title: "A diversified portfolio to expand yours.",
      description:
        "Our extensive portfolio of 650+ DMFs spans a wide range of therapeutic areas, offering unmatched scalability and versatility.",
      listItems: [
        "APIs for antiretrovirals, antivirals, antihypertensives, cardiovascular, and central nervous system therapies. ",
        "Expansion into niche and high-demand therapeutic categories, ensuring adaptability to market trends. This diversity enables you to address varied healthcare needs with confidence and flexibility. ",
       
      ],
    },
    {
      image: "/assets/images/ma-img5.png",
      title: "Comprehensive CDMO expertise.",
      description:
        "Matrix Pharma Corp offers comprehensive Contract Development and Manufacturing Organisation (CDMO) services that support pharmaceutical companies at every stage of the drug development and manufacturing process.",
      listItems: [
        "Custom synthesis for complex molecules with scalability and efficiency. ",
        "Process development to optimise yield and reduce costs. ",
        "Large-scale commercial manufacturing supported by advanced technology. ",
        "Expertise in handling APIs across multiple dosage forms, including solid orals and injectables. ",
        "Flexible and scalable production capabilities ensure timely delivery and seamless market integration.",
      ],
    },
    {
      image: "/assets/images/ma-img6.png",
      title: "Essential partner support services.",
      description:
        "We are more than a supplier—we’re your strategic partner. Our comprehensive 360° services include:",
      listItems: [
        "<b>IP Support </b>: Protecting your innovations with robust patent strategies and due diligence. ",
        "<b>Regulatory Guidance</b>: Simplifying global approvals and compliance across diverse markets. ",
        "<b>Litigation Support</b>: Navigating IP challenges and legal complexities confidently. ",
        "Our commitment to personalised support ensures your success at every stage, from development to market entry.",
      ],
    },
  ];

  return (
      <Layout>   
      <Hero
        title="Matrix Advantages"
        imgPath="/assets/images/new-images/matrix-advantages-hero-web.jpg"
        mobileImgPath="/assets/images/new-images/matrix-advantages-mob.jpg"
      />

      {/* Matrixadvantage para Start */}
      <section className="matrix">
        <div className="container grid-container matrix-para">
          <div className="col-span-12">
            <h3>We don't just deliver APIs.</h3>

            {/* New Grid Row for Better Structure */}
            <div className="grid grid-cols-12 gap-6">
              {/* Left Column - Title */}
              <div className="col-span-4">
                <h2>
                  We deliver a competitive edge
                  <span className="block-text">to our partners.</span>
                </h2>
              </div>

              {/* Right Column - Paragraph */}
              <div className="col-span-8">
                <p>
                  APIs are what we make, but competitive advantages are what we
                  deliver. With decades of experience, cutting-edge
                  infrastructure, and an unwavering commitment to innovation, we
                  empower pharmaceutical companies to achieve more. Our
                  integrated approach ensures consistent quality,
                  ground-breaking solutions, and seamless global market access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Matrixadvantage para  End */}

      {/*matrix decsription start */}
      {matrixDataArray.map((matrixData, index) => (
        <section key={index} className="container matrix-advantage-columns">
          <div className="grid-container">
            <div className="col-span-5 matrix-advantage-img">
              <img
                src={matrixData.image}
                alt={`Image for ${matrixData.title}`}
              />
            </div>
            <div className="col-span-1 matrix-advantage-line">
              <span className="matrix-advantage-box"></span>
              <span className="matrix-advantage-line-span"></span>
            </div>
            <div className="col-span-6 matrix-advantage-content">
              <h3>{matrixData.title}</h3>
              <p>{matrixData.description}</p>
              <ul>
                {matrixData.listItems.map((item, listIndex) => (
                  <li
                    key={listIndex}
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}
      {/* Matrix Description Sections End */}
      {/*matrix decsription end */}
    </Layout>
  );
};

export default MatrixAdvantages;