import React, { useState } from "react";

function SearchForm() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    rating: [],
    brand: [],
    price: [],
  });
  return (
    <form>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="mt-4">
        <label className="block font-medium text-gray-700">Rating</label>
        <select
          className="form-select mt-1 block w-full"
          multiple
          onChange={(e) => {
            setFilters({
              ...filters,
              rating: Array.from(
                e.target.selectedOptions,
                (option) => option.value
              ),
            });
          }}
        >
          <option value="1">1 star</option>
          <option value="2">2 stars</option>
          <option value="3">3 stars</option>
          <option value="4">4 stars</option>
          <option value="5">5 stars</option>
        </select>
      </div>

      {/* Add other filters such as brand and price */}
    </form>
  );
}

export default SearchForm;
