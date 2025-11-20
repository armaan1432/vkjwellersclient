import React, { useContext, useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Title from "../component/Title";
import { shopDataContext } from "../context/ShopContext";
import Card from "../component/Card";
import Footer from "../component/Footer"; // ← ADDED

function Collections() {
  const { products, search, showSearch } = useContext(shopDataContext);

  const [filterProduct, setFilterProduct] = useState([]);
  const [gender, setGender] = useState([]);
  const [material, setMaterial] = useState([]);
  const [productType, setProductType] = useState([]);
  const [sortType, setSortType] = useState("relavent");
  const [showFilter, setShowFilter] = useState(false);

  // Toggle functions
  const toggleGender = (val) =>
    setGender((prev) =>
      prev.includes(val) ? prev.filter((i) => i !== val) : [...prev, val]
    );

  const toggleMaterial = (val) =>
    setMaterial((prev) =>
      prev.includes(val) ? prev.filter((i) => i !== val) : [...prev, val]
    );

  const toggleProductType = (val) =>
    setProductType((prev) =>
      prev.includes(val) ? prev.filter((i) => i !== val) : [...prev, val]
    );

  // Apply filters
  const applyFilter = () => {
    let filtered = [...products];

    if (showSearch && search) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (gender.length > 0) {
      filtered = filtered.filter((p) => gender.includes(p.category));
    }

    if (material.length > 0) {
      filtered = filtered.filter((p) => material.includes(p.material));
    }

    if (productType.length > 0) {
      filtered = filtered.filter((p) => productType.includes(p.productType));
    }

    setFilterProduct(filtered);
  };

  const sortProducts = () => {
    let sorted = [...filterProduct];
    switch (sortType) {
      case "low-high":
        sorted.sort((a, b) => a.price - b.price);
        setFilterProduct(sorted);
        break;
      case "high-low":
        sorted.sort((a, b) => b.price - a.price);
        setFilterProduct(sorted);
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [products]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);

  return (
    <div className="w-full min-h-[100vh] bg-[#fff8d7] text-[#910046] pt-[70px] pb-[110px] relative flex flex-col">
      {/* Hamburger always visible */}
      <div className="absolute top-[80px] left-4 z-30">
        <button
          onClick={() => setShowFilter(true)}
          className="flex items-center justify-center w-12 h-12 rounded-md bg-[#910046] text-[#fff8d7] hover:bg-[#910046cc] transition"
        >
          <FaBars className="text-2xl" />
        </button>
      </div>

      {/* Sidebar Filter */}
      {showFilter && (
        <div className="fixed inset-0 z-50 flex bg-black bg-opacity-50">
          <div className="w-[80vw] md:w-[320px] bg-[#fff8d7] p-6 overflow-y-auto relative flex flex-col rounded-r-lg shadow-lg text-[#910046]">
            {/* Close button */}
            <button
              onClick={() => setShowFilter(false)}
              className="absolute top-4 right-4 text-[#910046] hover:text-[#c4005d]"
            >
              <FaTimes className="text-2xl" />
            </button>

            {/* Filters */}
            <div className="flex-1 overflow-y-auto pr-2 mt-4">
              {/* Gender */}
              <div className="mb-6">
                <p className="text-[18px] font-semibold mb-2">
                  GENDER
                </p>
                <div className="flex flex-col gap-2">
                  {["Men", "Women"].map((g) => (
                    <label
                      key={g}
                      className="flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        value={g}
                        checked={gender.includes(g)}
                        onChange={() => toggleGender(g)}
                        className="w-4 h-4 accent-[#910046]"
                      />
                      {g}
                    </label>
                  ))}
                </div>
              </div>

              {/* Material */}
              <div className="mb-6">
                <p className="text-[18px] font-semibold mb-2">
                  MATERIAL
                </p>
                <div className="flex flex-col gap-2">
                  {["Gold", "Silver", "Platinum", "Gemstones"].map((m) => (
                    <label
                      key={m}
                      className="flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        value={m}
                        checked={material.includes(m)}
                        onChange={() => toggleMaterial(m)}
                        className="w-4 h-4 accent-[#910046]"
                      />
                      {m}
                    </label>
                  ))}
                </div>
              </div>

              {/* Product Type */}
              <div className="mb-6">
                <p className="text-[18px] font-semibold mb-2">
                  PRODUCT TYPE
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    "Necklaces",
                    "Rings",
                    "Bangles",
                    "Bracelets",
                    "Anklets",
                    "Ear Rings",
                    "Pendants",
                  ].map((t) => (
                    <label
                      key={t}
                      className="flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        value={t}
                        checked={productType.includes(t)}
                        onChange={() => toggleProductType(t)}
                        className="w-4 h-4 accent-[#910046]"
                      />
                      {t}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Apply Button */}
            <button
              onClick={() => {
                applyFilter();
                setShowFilter(false);
              }}
              className="mt-4 bg-[#910046] text-[#fff8d7] font-semibold py-2 rounded-lg hover:bg-[#910046cc] transition"
            >
              Apply
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-center items-center mb-8 mt-[70px] text-center">
          <Title text1="ALL" text2="COLLECTIONS" />
        </div>

        <div className="flex justify-center mb-6">
          <select
            className="bg-[#fff8d7] text-[#910046] px-4 py-2 rounded-lg border-2 border-[#910046] hover:border-[#c4005d] transition"
            onChange={(e) => setSortType(e.target.value)}
          >
            <option value="relavent">Sort By: Relevant</option>
            <option value="low-high">Sort By: Low to High</option>
            <option value="high-low">Sort By: High to Low</option>
          </select>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {filterProduct.length > 0 ? (
            filterProduct.map((item) => (
              <Card
                key={item._id}
                id={item._id}
                name={item.name}
                price={item.price}
                image={item.image1}
              />
            ))
          ) : (
            <p className="text-[#910046] text-lg mt-10">No products found</p>
          )}
        </div>
      </div>

      {/* Space added before footer */}
      <div className="mt-10"></div>

      {/* Footer Added */}
      <Footer />
    </div>
  );
}

export default Collections;
