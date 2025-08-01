"use client";
import React, { useState, useEffect } from "react";
import "../styles/globals.css";

const MatrixComponent = () => {
    const [pharmaProductsData, setPharmaProductsData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedTherapeuticArea, setSelectedTherapeuticArea] = useState("");
    const [selectedDmf, setSelectedDmf] = useState("");
    const [visibleProducts, setVisibleProducts] = useState(10);

    useEffect(() => {
        fetch("../pharmaceutical_data.json")
            .then((response) => response.json())
            .then((data) => setPharmaProductsData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const handleReset = () => {
        setSearchTerm("");
        setSelectedTherapeuticArea("");
        setSelectedDmf("");
    };

    const filteredProducts = pharmaProductsData.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedTherapeuticArea ? product.therapeuticArea === selectedTherapeuticArea : true) &&
        (selectedDmf ? product.dmfAvailability.includes(selectedDmf) : true)
    );

    return (
        <div className="pharma-products-container">
            <h2 className="filter-title">Discover our complete product portfolio.</h2>

            <div className="filter-section">
                <div className="filter-controls">
                    <div className="filter-col-1">
                    <input 
                        type="text" 
                        placeholder="Search for product name" 
                        value={searchTerm} 
                        onChange={(e) => setSearchTerm(e.target.value)} 
                        className="filter-input search-input"
                    />
                    </div>
                    <div className="filter-col-2">
                    <select 
                        value={selectedTherapeuticArea} 
                        onChange={(e) => setSelectedTherapeuticArea(e.target.value)} 
                        className="filter-input therapeutic-dropdown"
                    >
                        <option value="" disabled selected>Therapeutic areas</option>
                        <option value="Anti Retroviral">Anti Retroviral</option>
                        <option value="Osteoporosis">Osteoporosis</option>
                        <option value="Anti Viral">Anti Viral</option>
                    </select>
                    </div>
                    <div className="filter-col-3">
                    <select 
                        value={selectedDmf} 
                        onChange={(e) => setSelectedDmf(e.target.value)} 
                        className="filter-input dmf-dropdown"
                    >
                        <option value="" disabled selected>DMF/CEP Availability</option>
                        <option value="USDMF">USDMF</option>
                        <option value="CEP">CEP</option>
                        <option value="JDMF">JDMF</option>
                        <option value="WHO">WHO</option>
                    </select>
                    <button onClick={handleReset} className="filter-reset-btn">Reset</button>
                    </div>
                </div>
            </div>

            <table className="pharma-products-table">
                <thead>
                    <tr className="table-header">
                        <th>NAME</th>
                        <th>THERAPEUTIC AREA</th>
                        <th>DMF/CEP AVAILABILITY</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProducts.slice(0, visibleProducts).map((product, index) => (
                        <tr key={index} className="pharma-product-row">
                            <td className="product-name-td">{product.name}</td>
                            <td>{product.therapeuticArea}</td>
                            <td>{product.dmfAvailability.join(", ")}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {visibleProducts < filteredProducts.length && (
                <button 
                    onClick={() => setVisibleProducts((prev) => prev + 10)} 
                    className="load-more-btn"
                >
                    Load More
                </button>
            )}
        </div>
    );
};

export default MatrixComponent;
