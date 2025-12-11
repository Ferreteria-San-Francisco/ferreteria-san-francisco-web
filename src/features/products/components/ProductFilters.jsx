// src/features/products/components/ProductFilters.jsx
import { useState, useEffect } from 'react';

export default function ProductFilters({ products = [], onFilterChange }) {
  const [filters, setFilters] = useState({
    category: '',
    brand: '',
    minPrice: '',
    maxPrice: ''
  });

  useEffect(() => {
    let result = [...products];

    if (filters.category) {
      result = result.filter(p => p.category === filters.category);
    }

    if (filters.brand) {
      result = result.filter(p => p.brand === filters.brand);
    }

    if (filters.minPrice || filters.maxPrice) {
      const min = filters.minPrice ? parseFloat(filters.minPrice) : -Infinity;
      const max = filters.maxPrice ? parseFloat(filters.maxPrice) : Infinity;
      result = result.filter(p => p.price >= min && p.price <= max);
    }

    if (typeof onFilterChange === 'function') {
      onFilterChange(result);
    }
  }, [filters, products, onFilterChange]);

  return null;
}