/**
 * Filtra productos por término de búsqueda.
 * Busca en: nombre, descripción y tags.
 * 
 * @param {Array} products - Lista de productos
 * @param {string} searchTerm - Término de búsqueda (no sensible a mayúsculas)
 * @returns {Array} - Productos que coinciden con la búsqueda
 * 
 * @example
 * const results = searchProducts(products, 'taladro');
 */
export function searchProducts(products, searchTerm = '') {
  if (!searchTerm.trim()) {
    return products;
  }

  const term = searchTerm.toLowerCase().trim();

  return products.filter(product => {
    const matchesName = product.name?.toLowerCase().includes(term);
    const matchesDescription = product.description?.toLowerCase().includes(term);
    const matchesTags = product.tags?.some(tag =>
      tag.toLowerCase().includes(term)
    );

    return matchesName || matchesDescription || matchesTags;
  });
}