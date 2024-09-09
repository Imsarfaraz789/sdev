"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { IoCloseOutline } from "react-icons/io5";

const SearchModal = ({ onClose }) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleSearch = async () => {
      if (query.trim() === "") {
        setSearchResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const res = await fetch(`${apiBaseUrl}/api/search?query=${query}`);
        const data = await res.json();
        setSearchResults(data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setIsLoading(false);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      handleSearch();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  const handleClick = (id) => {
    onClose();
    router.push(`${apiBaseUrl}/component/commonpage/${id}`);
  };

  return (
    <>
      <div className="fixed inset-x-0 top-28 bg-opacity-50 flex items-center justify-center z-50">
        <div className="rounded-lg shadow-lg w-full max-w-2xl max-md:max-w-96 bg-slate-600 p-10 max-md:p-8 relative">
          <button
            className="absolute top-3 right-2 text-white hover:text-gray-700"
            onClick={onClose}
          >
            <IoCloseOutline className="h-6 w-6 " />
          </button>

          <input
            type="text"
            placeholder="Search blogs and news"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />

          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <div className="space-y-2 w-full">
              {searchResults.length > 0
                ? searchResults.map((result) => (
                    <div
                      key={result._id}
                      className="cursor-pointer hover:bg-gray-100 p-2 rounded"
                      onClick={() => handleClick(result._id)}
                    >
                      <h3 className="text-lg font-semibold text-white hover:text-black">
                        {result.title}
                      </h3>
                    </div>
                  ))
                : query && <p>No results found.</p>}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchModal;
