export const categorias = [
  {
    id: 1,
    name: 'Herramientas Eléctricas',
    slug: 'herramientas-electricas',
    icon: '⚡',
    description: 'Taladros, amoladoras, lijadoras, sierras y todas las herramientas que necesitan energía eléctrica.',
    productCount: 56,
    subcategories: [
      { id: 101, name: 'Taladros y Percutores', slug: 'taladros' },
      { id: 102, name: 'Amoladoras', slug: 'amoladoras' },
      { id: 103, name: 'Lijadoras', slug: 'lijadoras' },
      { id: 104, name: 'Sierras', slug: 'sierras' },
      { id: 105, name: 'Atornilladores', slug: 'atornilladores' }
    ]
  },
  {
    id: 2,
    name: 'Herramientas Manuales',
    slug: 'herramientas-manuales',
    icon: '🛠️',
    description: 'Martillos, destornilladores, alicates, llaves y herramientas que funcionan con la fuerza del usuario.',
    productCount: 89,
    subcategories: [
      { id: 201, name: 'Martillos', slug: 'martillos' },
      { id: 202, name: 'Destornilladores', slug: 'destornilladores' },
      { id: 203, name: 'Alicates', slug: 'alicates' },
      { id: 204, name: 'Llaves', slug: 'llaves' },
      { id: 205, name: 'Niveles y Medición', slug: 'medicion' }
    ]
  },
  {
    id: 3,
    name: 'Pinturas y Accesorios',
    slug: 'pinturas',
    icon: '🎨',
    description: 'Pinturas para interior y exterior, esmaltes, impermeabilizantes y todos los accesorios para pintar.',
    productCount: 72,
    subcategories: [
      { id: 301, name: 'Látex Interior', slug: 'latex-interior' },
      { id: 302, name: 'Esmaltes Sintéticos', slug: 'esmaltes' },
      { id: 303, name: 'Pinturas Exteriores', slug: 'pinturas-exterior' },
      { id: 304, name: 'Impermeabilizantes', slug: 'impermeabilizantes' },
      { id: 305, name: 'Accesorios', slug: 'accesorios-pintura' }
    ]
  },
  {
    id: 4,
    name: 'Materiales de Construcción',
    slug: 'construccion',
    icon: '🏗️',
    description: 'Cementos, cales, ladrillos, arenas y todos los materiales básicos para la construcción.',
    productCount: 48,
    subcategories: [
      { id: 401, name: 'Cementos', slug: 'cementos' },
      { id: 402, name: 'Cal y Yeso', slug: 'cal-yeso' },
      { id: 403, name: 'Ladrillos', slug: 'ladrillos' },
      { id: 404, name: 'Arenas y Piedras', slug: 'arenas' },
      { id: 405, name: 'Hierros y Mallas', slug: 'hierros' }
    ]
  },
  {
    id: 5,
    name: 'Materiales Eléctricos',
    slug: 'electricidad',
    icon: '💡',
    description: 'Cables, tomacorrientes, interruptores, luminarias y todo para instalaciones eléctricas.',
    productCount: 65,
    subcategories: [
      { id: 501, name: 'Cables y Conductores', slug: 'cables' },
      { id: 502, name: 'Tomacorrientes', slug: 'tomacorrientes' },
      { id: 503, name: 'Interruptores', slug: 'interruptores' },
      { id: 504, name: 'Luminarias', slug: 'luminarias' },
      { id: 505, name: 'Cajas y Tubos', slug: 'cajas-tubos' }
    ]
  },
  {
    id: 6,
    name: 'Plomería y Sanitarios',
    slug: 'plomeria',
    icon: '🚰',
    description: 'Caños, conexiones, griferías, sanitarios y todo para instalaciones de agua y gas.',
    productCount: 42,
    subcategories: [
      { id: 601, name: 'Caños y Conexiones', slug: 'caños' },
      { id: 602, name: 'Griferías', slug: 'griferias' },
      { id: 603, name: 'Sanitarios', slug: 'sanitarios' },
      { id: 604, name: 'Llaves y Válvulas', slug: 'llaves-plomeria' },
      { id: 605, name: 'Accesorios', slug: 'accesorios-plomeria' }
    ]
  },
  {
    id: 7,
    name: 'Jardín y Exteriores',
    slug: 'jardin',
    icon: '🌱',
    description: 'Herramientas para jardín, mangueras, riego, tierra y productos para el cuidado de espacios verdes.',
    productCount: 31,
    subcategories: [
      { id: 701, name: 'Herramientas de Jardín', slug: 'herramientas-jardin' },
      { id: 702, name: 'Riego', slug: 'riego' },
      { id: 703, name: 'Tierra y Abonos', slug: 'tierra-abonos' },
      { id: 704, name: 'Cercos y Mallas', slug: 'cercos' },
      { id: 705, name: 'Decoración', slug: 'decoracion-jardin' }
    ]
  },
  {
    id: 8,
    name: 'Seguridad y Protección',
    slug: 'seguridad',
    icon: '🛡️',
    description: 'Elementos de protección personal, candados, alarmas y productos para la seguridad.',
    productCount: 27,
    subcategories: [
      { id: 801, name: 'Protección Personal', slug: 'proteccion-personal' },
      { id: 802, name: 'Candados y Cerraduras', slug: 'candados' },
      { id: 803, name: 'Alarmas', slug: 'alarmas' },
      { id: 804, name: 'Extintores', slug: 'extintores' },
      { id: 805, name: 'Señalización', slug: 'senalizacion' }
    ]
  }
];