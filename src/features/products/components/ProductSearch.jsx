import { useState, useEffect } from 'react';
import { useDebounce } from '../../../shared/hooks/useDebounce';
import { useProductFilters } from '../hooks/useProductFilters';

export default function ProductSearch() {
  const { filters, setFilter } = useProductFilters();
  const [inputValue, setInputValue] = useState(filters.search);
  const debouncedSearch = useDebounce(inputValue, 400);

  useEffect(() => {
    setFilter('search', debouncedSearch);
  }, [debouncedSearch]);

  return (
    <div className="relative">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Buscar productos..."
        className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
      />

      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
}
