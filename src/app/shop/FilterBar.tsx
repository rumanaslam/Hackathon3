import React, { useState } from "react";



interface Product {
  _id: string;
  title: string;
  tags?: string[];
  price: number;
  isNew?: boolean;
  discountPercentage?: number;
}

interface FilterBarProps {
  products: Product[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>; // Correct setter type
}

const FilterBar: React.FC<FilterBarProps> = ({ products, setFilteredProducts }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [priceRange, setPriceRange] = useState([0, 100000]); // Adjust as needed
  const [isNew, setIsNew] = useState(false);
  const [onSale, setOnSale] = useState(false);

  const uniqueTags: string[] = Array.from(
    new Set(products?.flatMap((product) => product.tags ?? []))
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    applyFilters(term, selectedTag, priceRange, isNew, onSale);
  };

  const handleTagChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const tag = event.target.value;
    setSelectedTag(tag);
    applyFilters(searchTerm, tag, priceRange, isNew, onSale);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(event.target.value);
    setPriceRange(newRange);
    applyFilters(searchTerm, selectedTag, newRange, isNew, onSale);
  };

  const handleCheckboxChange = (filterType: "isNew" | "onSale") => {
    if (filterType === "isNew") {
      setIsNew(!isNew);
      applyFilters(searchTerm, selectedTag, priceRange, !isNew, onSale);
    } else {
      setOnSale(!onSale);
      applyFilters(searchTerm, selectedTag, priceRange, isNew, !onSale);
    }
  };

  const applyFilters = (
    search: string,
    tag: string,
    price: number[],
    isNewFilter: boolean,
    onSaleFilter: boolean
  ) => {
    const filtered = products.filter((product) => {
      const matchesSearch =
        product.title.toLowerCase().includes(search) ||
        (product.tags && product.tags.some((t) => t.toLowerCase().includes(search)));

      const matchesTag = tag ? product.tags?.includes(tag) : true;

      const matchesPrice = product.price >= price[0] && product.price <= price[1];

      const matchesNew = isNewFilter ? product.isNew : true;

      const matchesOnSale = onSaleFilter ? product.discountPercentage && product.discountPercentage > 0 : true;

      return matchesSearch && matchesTag && matchesPrice && matchesNew && matchesOnSale;
    });

    setFilteredProducts(filtered);
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 p-4 bg-gray-100 rounded-lg">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
        className="border border-gray-400 px-4 py-2 rounded-lg w-full max-w-md"
      />

      {/* Tag Filter */}
      <select
        value={selectedTag}
        onChange={handleTagChange}
        className="border border-gray-400 px-4 py-2 rounded-lg"
      >
        <option value="">All Categories</option>
        {uniqueTags.length > 0 ? (
          uniqueTags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))
        ) : (
          <option disabled>No categories found</option>
        )}
      </select>

      {/* Price Filter */}
      <div className="flex items-center space-x-2">
        <input
          type="number"
          min="0"
          value={priceRange[0]}
          onChange={(e) => handlePriceChange(e, 0)}
          className="border border-gray-400 px-2 py-1 w-24 rounded-lg"
        />
        <span>-</span>
        <input
          type="number"
          min="0"
          value={priceRange[1]}
          onChange={(e) => handlePriceChange(e, 1)}
          className="border border-gray-400 px-2 py-1 w-24 rounded-lg"
        />
      </div>

      {/* Checkbox Filters */}
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={isNew}
          onChange={() => handleCheckboxChange("isNew")}
        />
        <span>New Arrivals</span>
      </label>

      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={onSale}
          onChange={() => handleCheckboxChange("onSale")}
        />
        <span>On Sale</span>
      </label>
    </div>
  );
};

export default FilterBar;
