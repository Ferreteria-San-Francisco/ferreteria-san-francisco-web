import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';

export function useProductFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  
  const filters = useMemo(() => ({
    category: searchParams.get('category') || '',
    brand: searchParams.get('brand') || '',
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
    search: searchParams.get('search') || '',
    page: parseInt(searchParams.get('page') || '1', 10),
  }), [searchParams]);

  
  const setFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);

    if (value) newParams.set(key, value);
    else newParams.delete(key);

    if (key !== 'page') newParams.set('page', '1'); 

    setSearchParams(newParams);
  };

 
  const clearFilters = () => {
    setSearchParams({});
  };

  return { filters, setFilter, clearFilters };
}
