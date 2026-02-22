// ========== IMPORTS DE IMÁGENES ==========
// Herramientas Eléctricas
import taladroBosch from '../../assets/images/products/electricas/taladro-bosch.jpg';
import amoladoraBlackdecker from '../../assets/images/products/electricas/amoladora-blackdecker.jpg';
import sierraCaladora from '../../assets/images/products/electricas/sierra-caladora.jpg';
import lijadoraMakita from '../../assets/images/products/electricas/lijadora-makita.jpg';
import atornilladorDewalt from '../../assets/images/products/electricas/atornillador-dewalt.jpg';
import sierraCircular from '../../assets/images/products/electricas/sierra-circular.jpg';
import pistolaCalor from '../../assets/images/products/electricas/pistola-calor.jpg';

// Herramientas Manuales
import martilloStanley from '../../assets/images/products/manuales/martillo-stanley.jpg';
import destornilladoresStanley from '../../assets/images/products/manuales/destornilladores-stanley.jpg';
import alicateTramontina from '../../assets/images/products/manuales/alicate-tramontina.jpg';
import llaveFrancesa from '../../assets/images/products/manuales/llave-francesa.jpg';
import llavesAllen from '../../assets/images/products/manuales/llaves-allen.jpg';
import cintaMetrica from '../../assets/images/products/manuales/cinta-metrica.jpg';
import nivelBurbuja from '../../assets/images/products/manuales/nivel-burbuja.jpg';

// Pinturas
import pinturaAlba from '../../assets/images/products/pinturas/pintura-alba.jpg';
import esmalteTersuave from '../../assets/images/products/pinturas/esmalte-tersuave.jpg';
import rodilloLana from '../../assets/images/products/pinturas/rodillo-lana.jpg';
import brochaAngular from '../../assets/images/products/pinturas/brocha-angular.jpg';
import barnizTersuave from '../../assets/images/products/pinturas/barniz-tersuave.jpg';
import pinturaAnticorrosiva from '../../assets/images/products/pinturas/pintura-anticorrosiva.jpg';
import bandejaRodillo from '../../assets/images/products/pinturas/bandeja-rodillo.jpg';

// Construcción
import cementoLomaNegra from '../../assets/images/products/construccion/cemento-loma-negra.jpg';
import calSanMartin from '../../assets/images/products/construccion/cal-san-martin.jpg';
import ladrilloComun from '../../assets/images/products/construccion/ladrillo-comun.jpg';
import arenaFina from '../../assets/images/products/construccion/arena-fina.jpg';
import hierroAcindar from '../../assets/images/products/construccion/hierro-acindar.jpg';

// Electricidad
import cablePirelli from '../../assets/images/products/electricidad/cable-pirelli.jpg';
import tomaPirelli from '../../assets/images/products/electricidad/toma-pirelli.jpg';
import interruptorPirelli from '../../assets/images/products/electricidad/interruptor-pirelli.jpg';
import breakerSica from '../../assets/images/products/electricidad/breaker-sica.jpg';
import cajaPirelli from '../../assets/images/products/electricidad/caja-pirelli.jpg';

// Plomería
import canioPvc from '../../assets/images/products/plomeria/canio-pvc.jpg';
import llaveEsferica from '../../assets/images/products/plomeria/llave-esferica.jpg';
import sifonRoca from '../../assets/images/products/plomeria/sifon-roca.jpg';
import cintaTeflon from '../../assets/images/products/plomeria/cinta-teflon.jpg';

// Jardín
import mangueraTigre from '../../assets/images/products/jardin/manguera-tigre.jpg';
import cortadoraCesped from '../../assets/images/products/jardin/cortadora-cesped.jpg';
import fertilizante from '../../assets/images/products/jardin/fertilizante.jpg';

// Seguridad
import guantesCuero from '../../assets/images/products/seguridad/guantes-cuero.jpg';
import anteojosUv from '../../assets/images/products/seguridad/anteojos-uv.jpg';

export const products = [
  {
    id: 1,
    name: 'Taladro Percutor Bosch GSB 13 RE',
    category: 'herramientas-electricas',
    subcategory: 'taladros',
    brand: 'Bosch',
    price: 48999.99,
    originalPrice: 52999.99,
    image: taladroBosch,
    description: 'Taladro percutor profesional 650W, mandril 13mm, función impacto y reversa',
    stock: 12,
    featured: true,
    characteristics: ['650W', 'Mandril 13mm', 'Velocidad variable', 'Función percutor'],
    tags: ['taladro', 'profesional', 'bosch', 'impacto'],
    sku: 'BOS-TAL-650'
  },
  {
    id: 2,
    name: 'Amoladora Angular Black & Decker 115mm 710W',
    category: 'herramientas-electricas',
    subcategory: 'amoladoras',
    brand: 'Black & Decker',
    price: 32999.99,
    originalPrice: 35999.99,
    image: amoladoraBlackdecker,
    description: 'Amoladora angular para corte y desbaste, disco 115mm',
    stock: 8,
    featured: false,
    characteristics: ['710W', 'Disco 115mm', 'Protector ajustable', 'Empuñadura auxiliar'],
    tags: ['amoladora', 'corte', 'desbaste', 'angular'],
    sku: 'BDK-AMO-710'
  },
  {
    id: 3,
    name: 'Sierra Caladora Stanley 500W',
    category: 'herramientas-electricas',
    subcategory: 'sierras',
    brand: 'Stanley',
    price: 27999.99,
    originalPrice: null,
    image: sierraCaladora,
    description: 'Sierra caladora con corte preciso en madera y metales',
    stock: 6,
    featured: false,
    characteristics: ['500W', 'Velocidad variable', 'Base inclinable', 'Soplador de virutas'],
    tags: ['sierra', 'caladora', 'corte', 'madera'],
    sku: 'STN-SIE-500'
  },
  {
    id: 4,
    name: 'Lijadora Orbital Makita 190W',
    category: 'herramientas-electricas',
    subcategory: 'lijadoras',
    brand: 'Makita',
    price: 23999.99,
    originalPrice: 25999.99,
    image: lijadoraMakita,
    description: 'Lijadora orbital para acabados finos en madera',
    stock: 10,
    featured: false,
    characteristics: ['190W', 'Plato 93x185mm', '6 velocidades', 'Bolsillo para polvo'],
    tags: ['lijadora', 'orbital', 'acabado', 'madera'],
    sku: 'MAK-LIJ-190'
  },

  // ========== HERRAMIENTAS MANUALES ==========
  {
    id: 5,
    name: 'Martillo de Uña Stanley 20oz',
    category: 'herramientas-manuales',
    subcategory: 'martillos',
    brand: 'Stanley',
    price: 8999.99,
    originalPrice: null,
    image: martilloStanley,
    description: 'Martillo de uña profesional con mango fibra de vidrio',
    stock: 25,
    featured: true,
    characteristics: ['Peso 20oz (567g)', 'Mango antivibración', 'Uña curva', 'Cabeza forjada'],
    tags: ['martillo', 'uña', 'manual', 'profesional'],
    sku: 'STN-MAR-20OZ'
  },
  {
    id: 6,
    name: 'Juego de Destornilladores Stanley 6 Piezas',
    category: 'herramientas-manuales',
    subcategory: 'destornilladores',
    brand: 'Stanley',
    price: 12999.99,
    originalPrice: 14999.99,
    image: destornilladoresStanley,
    description: 'Set de destornilladores profesionales con puntas intercambiables',
    stock: 15,
    featured: false,
    characteristics: ['6 piezas', 'Puntas Phillips y Plana', 'Mango ergonómico', 'Vástago cromado'],
    tags: ['destornillador', 'juego', 'phillips', 'plana'],
    sku: 'STN-DES-6PZ'
  },
  {
    id: 7,
    name: 'Alicate Universal Tramontina 8"',
    category: 'herramientas-manuales',
    subcategory: 'alicates',
    brand: 'Tramontina',
    price: 7499.99,
    originalPrice: null,
    image: alicateTramontina,
    description: 'Alicate universal para corte y sujeción',
    stock: 20,
    featured: false,
    characteristics: ['8 pulgadas', 'Corte de alambre', 'Mandíbulas dentadas', 'Aislamiento grip'],
    tags: ['alicate', 'universal', 'corte', 'sujeción'],
    sku: 'TRA-ALI-8IN'
  },
  {
    id: 8,
    name: 'Llave Francesa Bahco 10"',
    category: 'herramientas-manuales',
    subcategory: 'llaves',
    brand: 'Bahco',
    price: 15999.99,
    originalPrice: 17999.99,
    image: llaveFrancesa,
    description: 'Llave ajustable de alta calidad para tuercas y tornillos',
    stock: 12,
    featured: false,
    characteristics: ['10 pulgadas', 'Ajuste rápido', 'Mandíbula móvil', 'Acero cromo-vanadio'],
    tags: ['llave', 'francesa', 'ajustable', 'tuercas'],
    sku: 'BAH-LLA-10IN'
  },

  // ========== PINTURAS ==========
  {
    id: 9,
    name: 'Pintura Látex Interior Alba 20L Blanco',
    category: 'pinturas',
    subcategory: 'latex-interior',
    brand: 'Alba',
    price: 42999.99,
    originalPrice: 45999.99,
    image: pinturaAlba,
    description: 'Pintura látex de alta calidad para interiores, gran poder cubritivo',
    stock: 8,
    featured: true,
    characteristics: ['Rendimiento: 12-14 m²/L', 'Lavable', 'Antihongos', 'Base agua'],
    tags: ['pintura', 'látex', 'interior', 'blanco'],
    sku: 'ALB-PIN-20L'
  },
  {
    id: 10,
    name: 'Esmalte Sintético Tersuave 4L Blanco',
    category: 'pinturas',
    subcategory: 'esmaltes',
    brand: 'Tersuave',
    price: 18999.99,
    originalPrice: null,
    image: esmalteTersuave,
    description: 'Esmalte sintético para interiores y exteriores, acabado semi-brillante',
    stock: 15,
    featured: false,
    characteristics: ['4 litros', 'Secado rápido', 'Resistente a la intemperie', 'Alkídica'],
    tags: ['esmalte', 'sintético', 'exterior', 'semi-brillante'],
    sku: 'TER-ESM-4L'
  },
  {
    id: 11,
    name: 'Rodillo de Lana para Pared 9"',
    category: 'pinturas',
    subcategory: 'accesorios',
    brand: 'Alba',
    price: 4999.99,
    originalPrice: null,
    image: rodilloLana,
    description: 'Rodillo profesional de lana para aplicación de pintura en paredes',
    stock: 30,
    featured: false,
    characteristics: ['9 pulgadas', 'Lana sintética', 'Mango de madera', 'Para látex y esmalte'],
    tags: ['rodillo', 'lana', 'pintura', 'pared'],
    sku: 'ALB-ROD-9IN'
  },
  {
    id: 12,
    name: 'Brocha Angular 2" para Esmaltes',
    category: 'pinturas',
    subcategory: 'accesorios',
    brand: 'Alba',
    price: 3499.99,
    originalPrice: null,
    image: brochaAngular,
    description: 'Brocha angular profesional para trabajos de detalle y bordes',
    stock: 25,
    featured: false,
    characteristics: ['2 pulgadas', 'Cerdas mixtas', 'Ángulo 45°', 'Mango ergonómico'],
    tags: ['brocha', 'angular', 'detalle', 'bordes'],
    sku: 'ALB-BRO-2IN'
  },

  // ========== CONSTRUCCIÓN ==========
  {
    id: 13,
    name: 'Cemento Loma Negra 50kg',
    category: 'construccion',
    subcategory: 'cementos',
    brand: 'Loma Negra',
    price: 8999.99,
    originalPrice: 9499.99,
    image: cementoLomaNegra,
    description: 'Cemento Portland de uso general para construcción',
    stock: 40,
    featured: true,
    characteristics: ['Resistencia 42.5 MPa', 'Fraguado normal', 'Apto para todo tipo de obras'],
    tags: ['cemento', 'construcción', 'portland', 'loma negra'],
    sku: 'LOM-CEM-50KG'
  },
  {
    id: 14,
    name: 'Cal Hidráulica San Martín 25kg',
    category: 'construccion',
    subcategory: 'cal',
    brand: 'San Martín',
    price: 5999.99,
    originalPrice: null,
    image: calSanMartin,
    description: 'Cal hidráulica para revoques y mampostería',
    stock: 20,
    featured: false,
    characteristics: ['25kg', 'Fraguado rápido', 'Alta plasticidad', 'Para interiores y exteriores'],
    tags: ['cal', 'hidráulica', 'revoque', 'mampostería'],
    sku: 'SAN-CAL-25KG'
  },
  {
    id: 15,
    name: 'Ladrillo Común 18x33x9cm (x1000)',
    category: 'construccion',
    subcategory: 'ladrillos',
    brand: 'Cerámica San Lorenzo',
    price: 185999.99,
    originalPrice: null,
    image: ladrilloComun,
    description: 'Ladrillo común cerámico para mampostería',
    stock: 5,
    featured: false,
    characteristics: ['18x33x9cm', 'Cerámico', 'Para mampostería', 'Resistente'],
    tags: ['ladrillo', 'común', 'cerámica', 'mampostería'],
    sku: 'CSL-LAD-1000'
  },

  // ========== ELECTRICIDAD ==========
  {
    id: 16,
    name: 'Cable Unipolar 2.5mm² x 100m',
    category: 'electricidad',
    subcategory: 'cables',
    brand: 'Pirelli',
    price: 58999.99,
    originalPrice: 62999.99,
    image: cablePirelli,
    description: 'Cable unipolar para instalaciones eléctricas domiciliarias',
    stock: 6,
    featured: false,
    characteristics: ['2.5mm²', '100 metros', 'Aislación PVC', 'Norma IRAM'],
    tags: ['cable', 'eléctrico', 'instalación', 'pirelli'],
    sku: 'PIR-CAB-2.5'
  },
  {
    id: 17,
    name: 'Toma Doble con Tierra',
    category: 'electricidad',
    subcategory: 'tomacorrientes',
    brand: 'Pirelli',
    price: 2999.99,
    originalPrice: null,
    image: tomaPirelli,
    description: 'Toma doble con conexión a tierra para instalaciones seguras',
    stock: 35,
    featured: false,
    characteristics: ['Doble toma', 'Con tierra', 'Blanco', 'Norma IRAM'],
    tags: ['toma', 'corriente', 'pirelli', 'doble'],
    sku: 'PIR-TOM-DOB'
  },

  // ========== PLOMERÍA ==========
  {
    id: 18,
    name: 'Caño PVC 1/2" x 6m para Agua',
    category: 'plomeria',
    subcategory: 'caños',
    brand: 'Fate',
    price: 8999.99,
    originalPrice: null,
    image: canioPvc,
    description: 'Caño de PVC para instalaciones de agua fría',
    stock: 18,
    featured: false,
    characteristics: ['1/2 pulgada', '6 metros', 'PVC presión', 'Para agua fría'],
    tags: ['caño', 'pvc', 'agua', 'plomería'],
    sku: 'FAT-CAN-1/2'
  },
  {
    id: 19,
    name: 'Llave Esférica 1/2" Bronce',
    category: 'plomeria',
    subcategory: 'llaves',
    brand: 'FV',
    price: 6499.99,
    originalPrice: 6999.99,
    image: llaveEsferica,
    description: 'Llave esférica de paso total para agua',
    stock: 22,
    featured: false,
    characteristics: ['1/2 pulgada', 'Bronce', 'Paso total', 'Rosca hembra'],
    tags: ['llave', 'esférica', 'agua', 'bronce'],
    sku: 'FV-LLA-1/2'
  },

  // ========== JARDÍN ==========
  {
    id: 20,
    name: 'Manguera para Riego 5/8" x 25m',
    category: 'jardin',
    subcategory: 'riego',
    brand: 'Tigre',
    price: 18999.99,
    originalPrice: 20999.99,
    image: mangueraTigre,
    description: 'Manguera flexible reforzada para riego de jardines',
    stock: 15,
    featured: true,
    characteristics: ['5/8 pulgada', '25 metros', 'Revestida', 'Resistente a rayos UV'],
    tags: ['manguera', 'riego', 'jardín', 'tigre'],
    sku: 'TIG-MAN-25M'
  },

  // ========== HERRAMIENTAS ELÉCTRICAS (adicionales) ==========
  {
    id: 21,
    name: 'Atornillador Inalámbrico DeWalt 18V',
    category: 'herramientas-electricas',
    subcategory: 'atornilladores',
    brand: 'DeWalt',
    price: 78999.99,
    originalPrice: 84999.99,
    image: atornilladorDewalt,
    description: 'Atornillador de impacto 18V con batería Li-ion y cargador rápido',
    stock: 7,
    featured: true,
    characteristics: ['18V', '2 baterías 2.0Ah', 'Par máximo 160Nm', 'LED de trabajo'],
    tags: ['atornillador', 'inalámbrico', 'dewalt', 'impacto'],
    sku: 'DEW-ATO-18V'
  },
  {
    id: 22,
    name: 'Sierra Circular Skil 1800W 7-1/4"',
    category: 'herramientas-electricas',
    subcategory: 'sierras',
    brand: 'Skil',
    price: 54999.99,
    originalPrice: 58999.99,
    image: sierraCircular,
    description: 'Sierra circular profesional para cortes precisos en madera y derivados',
    stock: 5,
    featured: false,
    characteristics: ['1800W', 'Diámetro 7-1/4"', 'Profundidad máxima 65mm', 'Guía láser'],
    tags: ['sierra', 'circular', 'corte', 'madera'],
    sku: 'SKI-SCI-1800'
  },
  {
    id: 23,
    name: 'Pistola de Calor Stanley 2000W',
    category: 'herramientas-electricas',
    subcategory: 'pistolas-calor',
    brand: 'Stanley',
    price: 28999.99,
    originalPrice: 31999.99,
    image: pistolaCalor,
    description: 'Pistola de calor profesional para soldar plásticos, decapar pintura y más',
    stock: 9,
    featured: false,
    characteristics: ['2000W', '2 temperaturas (300°C/550°C)', '2 boquillas', 'Mango frío'],
    tags: ['pistola', 'calor', 'decapado', 'soldadura'],
    sku: 'STN-PIS-2000'
  },

  // ========== HERRAMIENTAS MANUALES (adicionales) ==========
  {
    id: 24,
    name: 'Juego de Llaves Allen Bahco 9 Piezas',
    category: 'herramientas-manuales',
    subcategory: 'llaves',
    brand: 'Bahco',
    price: 11999.99,
    originalPrice: 13999.99,
    image: llavesAllen,
    description: 'Set profesional de llaves Allen métricas en estuche',
    stock: 18,
    featured: false,
    characteristics: ['9 piezas', 'De 1.5 a 10mm', 'Acero cromo-vanadio', 'Estuche plástico'],
    tags: ['llaves', 'allen', 'hexagonal', 'métricas'],
    sku: 'BAH-ALL-9PZ'
  },
  {
    id: 25,
    name: 'Cinta Métrica Stanley 8m',
    category: 'herramientas-manuales',
    subcategory: 'medicion',
    brand: 'Stanley',
    price: 6999.99,
    originalPrice: 7999.99,
    image: cintaMetrica,
    description: 'Cinta métrica profesional de 8 metros con cinta de acero',
    stock: 25,
    featured: false,
    characteristics: ['8 metros', 'Ancho 25mm', 'Cuerpo ABS', 'Gancho magnético'],
    tags: ['cinta', 'métrica', 'medición', 'stanley'],
    sku: 'STN-CIN-8M'
  },
  {
    id: 26,
    name: 'Nivel de Burbuja Stanley 60cm',
    category: 'herramientas-manuales',
    subcategory: 'medicion',
    brand: 'Stanley',
    price: 14999.99,
    originalPrice: 16999.99,
    image: nivelBurbuja,
    description: 'Nivel profesional de aluminio con 3 viales de burbuja',
    stock: 14,
    featured: false,
    characteristics: ['60cm', 'Aluminio extruido', '3 viales (0°, 45°, 90°)', 'Imán lateral'],
    tags: ['nivel', 'burbuja', 'aluminio', 'nivelado'],
    sku: 'STN-NIV-60CM'
  },

  // ========== PINTURAS (adicionales) ==========
  {
    id: 27,
    name: 'Barniz Poliuretano Satinado 1L',
    category: 'pinturas',
    subcategory: 'barnices',
    brand: 'Tersuave',
    price: 12999.99,
    originalPrice: null,
    image: barnizTersuave,
    description: 'Barniz de poliuretano satinado para protección de maderas',
    stock: 12,
    featured: false,
    characteristics: ['1 litro', 'Acabado satinado', 'Resistente a agua y rayos UV', 'Secado rápido'],
    tags: ['barniz', 'poliuretano', 'madera', 'protección'],
    sku: 'TER-BAR-1L'
  },
  {
    id: 28,
    name: 'Pintura Anticorrosiva 3 en 1 4L',
    category: 'pinturas',
    subcategory: 'esmaltes',
    brand: 'Alba',
    price: 21999.99,
    originalPrice: 23999.99,
    image: pinturaAnticorrosiva,
    description: 'Pintura anticorrosiva 3 en 1 para hierro y metales',
    stock: 8,
    featured: true,
    characteristics: ['4 litros', 'Primer + sellador + acabado', 'Resistente a la humedad', 'Rojo óxido'],
    tags: ['anticorrosiva', 'hierro', 'metal', 'protección'],
    sku: 'ALB-ANT-4L'
  },
  {
    id: 29,
    name: 'Bandeja para Rodillo con Rejilla',
    category: 'pinturas',
    subcategory: 'accesorios',
    brand: 'Alba',
    price: 3999.99,
    originalPrice: null,
    image: bandejaRodillo,
    description: 'Bandeja plástica con rejilla escurridora para trabajo eficiente',
    stock: 20,
    featured: false,
    characteristics: ['Plástico resistente', 'Rejilla escurridora', 'Fácil limpieza', 'Apto todo rodillo'],
    tags: ['bandeja', 'rodillo', 'rejilla', 'pintura'],
    sku: 'ALB-BAN-UNI'
  },

  // ========== CONSTRUCCIÓN (adicionales) ==========
  {
    id: 30,
    name: 'Arena Fina x M3',
    category: 'construccion',
    subcategory: 'arena',
    brand: 'San Martín',
    price: 15999.99,
    originalPrice: null,
    image: arenaFina,
    description: 'Arena fina lavada para mezclas de mortero y hormigón',
    stock: 10,
    featured: false,
    characteristics: ['1 metro cúbico', 'Lavada', 'Granulometría controlada', 'Libre de impurezas'],
    tags: ['arena', 'fina', 'construcción', 'mortero'],
    sku: 'SAN-ARE-M3'
  },
  {
    id: 31,
    name: 'Hierro del 8 x 12m',
    category: 'construccion',
    subcategory: 'hierros',
    brand: 'Acindar',
    price: 28999.99,
    originalPrice: 30999.99,
    image: hierroAcindar,
    description: 'Hierro corrugado diámetro 8mm para estructuras de hormigón armado',
    stock: 15,
    featured: false,
    characteristics: ['Diámetro 8mm', 'Longitud 12m', 'Corrugado', 'Norma IRAM IAS U 500-2018'],
    tags: ['hierro', 'corrugado', 'estructura', 'hormigón'],
    sku: 'ACI-HIE-8MM'
  },

  // ========== ELECTRICIDAD (adicionales) ==========
  {
    id: 32,
    name: 'Interruptor Simple con Luz Piloto',
    category: 'electricidad',
    subcategory: 'interruptores',
    brand: 'Pirelli',
    price: 3499.99,
    originalPrice: null,
    image: interruptorPirelli,
    description: 'Interruptor simple con luz piloto para localización en la oscuridad',
    stock: 30,
    featured: false,
    characteristics: ['Simple', 'Luz piloto LED', 'Blanco', 'Norma IRAM'],
    tags: ['interruptor', 'simple', 'luz piloto', 'pirelli'],
    sku: 'PIR-INT-SIM'
  },
  {
    id: 33,
    name: 'Breaker Bipolar 20A',
    category: 'electricidad',
    subcategory: 'disyuntores',
    brand: 'SICA',
    price: 8999.99,
    originalPrice: 9999.99,
    image: breakerSica,
    description: 'Disyuntor bipolar 20 amperes para tableros eléctricos',
    stock: 22,
    featured: false,
    characteristics: ['20 amperes', 'Bipolar', 'Curva C', 'Norma IRAM 2169'],
    tags: ['breaker', 'disyuntor', 'protección', 'eléctrico'],
    sku: 'SIC-BRE-20A'
  },
  {
    id: 34,
    name: 'Caja Rectangular para Toma',
    category: 'electricidad',
    subcategory: 'accesorios',
    brand: 'Pirelli',
    price: 1499.99,
    originalPrice: null,
    image: cajaPirelli,
    description: 'Caja rectangular plástica para instalación de tomacorrientes',
    stock: 40,
    featured: false,
    characteristics: ['Rectangular', 'Plástico PVC', 'Profundidad 40mm', 'Con orejas de fijación'],
    tags: ['caja', 'rectangular', 'instalación', 'pirelli'],
    sku: 'PIR-CAJ-REC'
  },

  // ========== PLOMERÍA (adicionales) ==========
  {
    id: 35,
    name: 'Sifón Cromado para Lavatorio',
    category: 'plomeria',
    subcategory: 'sifones',
    brand: 'Roca',
    price: 12999.99,
    originalPrice: 14999.99,
    image: sifonRoca,
    description: 'Sifón cromado con trampa de 75mm para lavatorios',
    stock: 12,
    featured: false,
    characteristics: ['Cromado', 'Trampa 75mm', 'Para lavatorio', 'Incluye juntas'],
    tags: ['sifón', 'lavatorio', 'cromado', 'desagüe'],
    sku: 'ROC-SIF-LAV'
  },
  {
    id: 36,
    name: 'Cinta de Teflón 12mm x 10m',
    category: 'plomeria',
    subcategory: 'accesorios',
    brand: 'Tigre',
    price: 999.99,
    originalPrice: null,
    image: cintaTeflon,
    description: 'Cinta de teflón para sellado de uniones roscadas en tuberías',
    stock: 50,
    featured: false,
    characteristics: ['Ancho 12mm', 'Largo 10m', 'Alta densidad', 'Resistente a químicos'],
    tags: ['cinta', 'teflón', 'sellado', 'roscas'],
    sku: 'TIG-CTE-12MM'
  },

  // ========== JARDÍN (adicionales) ==========
  {
    id: 37,
    name: 'Cortadora de Césped Eléctrica 1400W',
    category: 'jardin',
    subcategory: 'cortadoras',
    brand: 'Black & Decker',
    price: 78999.99,
    originalPrice: 84999.99,
    image: cortadoraCesped,
    description: 'Cortadora de césped eléctrica con bolsa recolectora y altura ajustable',
    stock: 4,
    featured: true,
    characteristics: ['1400W', 'Ancho corte 33cm', 'Altura 6 posiciones (25-75mm)', 'Bolsa 40L'],
    tags: ['cortadora', 'césped', 'eléctrica', 'jardín'],
    sku: 'BDK-COR-1400'
  },
  {
    id: 38,
    name: 'Fertilizante Triple 15 1kg',
    category: 'jardin',
    subcategory: 'fertilizantes',
    brand: 'Garden',
    price: 4999.99,
    originalPrice: null,
    image: fertilizante,
    description: 'Fertilizante balanceado NPK 15-15-15 para plantas y césped',
    stock: 25,
    featured: false,
    characteristics: ['1 kilogramo', 'NPK 15-15-15', 'Granulado', 'Liberación gradual'],
    tags: ['fertilizante', 'abono', 'plantas', 'césped'],
    sku: 'GAR-FER-1KG'
  },

  // ========== NUEVA CATEGORÍA: SEGURIDAD ==========
  {
    id: 39,
    name: 'Guantes de Cuero para Trabajo',
    category: 'seguridad',
    subcategory: 'guantes',
    brand: 'Stanley',
    price: 7999.99,
    originalPrice: 8999.99,
    image: guantesCuero,
    description: 'Guantes de cuero resistentes para protección de manos en trabajos pesados',
    stock: 20,
    featured: false,
    characteristics: ['Cuero vacuno', 'Talla L', 'Refuerzo palma', 'Puño elástico'],
    tags: ['guantes', 'protección', 'cuero', 'seguridad'],
    sku: 'STN-GUA-CUE'
  },
  {
    id: 40,
    name: 'Anteojos de Seguridad con Protección UV',
    category: 'seguridad',
    subcategory: 'proteccion-ocular',
    brand: '3M',
    price: 5999.99,
    originalPrice: null,
    image: anteojosUv,
    description: 'Anteojos de seguridad con protección lateral y filtro UV',
    stock: 15,
    featured: false,
    characteristics: ['Protección lateral', 'Filtro UV400', 'Lentes anti-rayaduras', 'Ajuste universal'],
    tags: ['anteojos', 'seguridad', 'protección', 'ocular'],
    sku: '3M-ANT-SEG'
  }
];
