import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Fuse from "fuse.js";
import { products } from "@/data/products";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";

// Create Fuse instance outside component to avoid recreating it on every render
const fuse = new Fuse(products, {
  keys: ["name", "category"],
  threshold: 0.3,
  includeScore: true,
});

// Debounce helper function
const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchBar({ isOpen, onClose }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<
    Fuse.FuseResult<(typeof products)[0]>[]
  >([]);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Clear search when modal closes
  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      setResults([]);
    }
  }, [isOpen]);

  // Debounced search function
  const debouncedSearch = debounce((value: string) => {
    if (value.length >= 2) {
      const searchResults = fuse.search(value).slice(0, 5); // Limit to 5 results
      setResults(searchResults);
    } else {
      setResults([]);
    }
  }, 300);

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  // Handle result selection
  const handleSelect = (productId: string) => {
    onClose();
    navigate(`/product/${productId}`);
  };

  // Handle key press
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
      initialFocus={inputRef}
    >
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Full-screen container */}
      <div className="fixed inset-0 flex items-start justify-center p-4 pt-16">
        <Dialog.Panel className="w-full max-w-2xl transform rounded-xl bg-white shadow-2xl transition-all">
          <div className="relative">
            <MagnifyingGlassIcon
              className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="h-12 w-full rounded-t-xl border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
              placeholder="Search products..."
              role="combobox"
              aria-expanded={results.length > 0}
              aria-controls="search-results"
            />
            <button
              onClick={onClose}
              className="absolute right-4 top-3.5 text-gray-400 hover:text-gray-500"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Results */}
          <div className="max-h-[60vh] overflow-y-auto px-2 pb-2">
            {results.length > 0 ? (
              <div
                className="divide-y divide-gray-100"
                role="listbox"
                id="search-results"
              >
                {results.map(({ item }) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item.id)}
                    className="flex w-full items-center gap-4 px-4 py-3 text-left text-sm hover:bg-gray-50"
                    role="option"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-12 w-12 rounded-md object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-gray-500">{item.category}</p>
                    </div>
                    {item.isOnSale && (
                      <span className="ml-auto text-red-600 font-medium">
                        {item.discountedPrice} €
                      </span>
                    )}
                    {!item.isOnSale && (
                      <span className="ml-auto font-medium text-gray-900">
                        {item.price} €
                      </span>
                    )}
                  </button>
                ))}
              </div>
            ) : query.length >= 2 ? (
              <p className="p-4 text-sm text-gray-500">No results found.</p>
            ) : query.length > 0 ? (
              <p className="p-4 text-sm text-gray-500">
                Keep typing to search...
              </p>
            ) : (
              <p className="p-4 text-sm text-gray-500">
                Start typing to search products...
              </p>
            )}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
