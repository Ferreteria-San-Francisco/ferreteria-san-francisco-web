// ========== IMPORTS DE IMÁGENES ==========
// Dealer - Soluciones Sanitarias
import valvulaAdmision from '../../assets/images/products/Dealer/valvula-admision-tanque.png';
import accionamientoPalanca from '../../assets/images/products/Dealer/accionamiento-palanca-cromado.png';
import conexionDesplazador35 from '../../assets/images/products/Dealer/conexion-desplazador-35mm.png';
import conexionDesplazador55 from '../../assets/images/products/Dealer/conexion-desplazador-55mm.png';
import conexionJuntaAdaptacion from '../../assets/images/products/Dealer/conexion-junta-adaptacion.jpg';
import conexionFuelle from '../../assets/images/products/Dealer/conexion-fuelle.png';
import asientoInodoro from '../../assets/images/products/Dealer/asiento-inodoro-universal-eco.png';

export const products = [
  {
    id: 1,
    sku: '416020',
    name: 'Válvula de Admisión para Tanque 1/2" y 3/4"',
    category: 'plomeria',
    subcategory: 'accesorios-plomeria',
    brand: 'Dealer',
    image: valvulaAdmision,
    description:
      'La válvula de admisión es el corazón silencioso de la mochila del inodoro: regula el ingreso de agua después de cada descarga y corta el paso justo cuando el tanque llega a su nivel. Este modelo de Dealer viene con doble rosca de entrada (1/2" y 3/4"), lo que la hace compatible con la gran mayoría de las instalaciones domiciliarias sin necesidad de adaptadores extra.',
    application:
      'Se instala dentro de la mochila del inodoro, conectada a la llave de paso de agua fría. Ideal para reemplazar válvulas viejas que gotean, hacen ruido o no cortan bien el agua. También sirve para tanques de agua tipo tinaco.',
    characteristics: [
      'Rosca de entrada 1/2" y 3/4"',
      'Flotante regulable en altura',
      'Corte de agua silencioso',
      'Cuerpo plástico de alta resistencia',
    ],
    tags: ['inodoro', 'mochila', 'valvula', 'repuesto', 'plomeria'],
    featured: true,
  },
  {
    id: 2,
    sku: '420363',
    name: 'Accionamiento de Palanca 200mm x 3/8" Cromado',
    category: 'plomeria',
    subcategory: 'accesorios-plomeria',
    brand: 'Dealer',
    image: accionamientoPalanca,
    description:
      'Repuesto de palanca de descarga con terminación cromada, pensado para devolverle a la mochila del inodoro ese accionamiento firme y preciso que se pierde con los años de uso. Su varilla de 200mm y rosca de 3/8" cubre la mayoría de los tanques estándar del mercado.',
    application:
      'Reemplaza la palanca exterior de descarga cuando queda floja, se traba o se rompe el mecanismo interno que empuja el desplazador.',
    characteristics: [
      'Varilla de 200mm',
      'Rosca 3/8"',
      'Terminación cromada',
      'Instalación sin herramientas especiales',
    ],
    tags: ['inodoro', 'palanca', 'descarga', 'repuesto', 'plomeria'],
  },
  {
    id: 3,
    sku: '440383',
    name: 'Conexión Desplazador Inodoro 35mm x 100mm',
    category: 'plomeria',
    subcategory: 'accesorios-plomeria',
    brand: 'Dealer',
    image: conexionDesplazador35,
    description:
      'Codo de conexión para la salida de desagüe del inodoro, con salida corta de 35mm. Fabricado en material rígido y acanalado para asegurar un sellado firme contra pérdidas de agua o malos olores en la unión con la cañería.',
    application:
      'Se usa para conectar la salida del inodoro a la cañería de desagüe cuando la distancia entre ambos es corta. Común en instalaciones donde el caño de piso queda muy cerca de la base del sanitario.',
    characteristics: [
      'Salida de 35mm x 100mm',
      'Material rígido acanalado',
      'Sello hermético anti filtraciones',
      'Color negro',
    ],
    tags: ['inodoro', 'desplazador', 'conexion', 'desague', 'plomeria'],
  },
  {
    id: 4,
    sku: '440384',
    name: 'Conexión Desplazador Inodoro 55mm x 100mm',
    category: 'plomeria',
    subcategory: 'accesorios-plomeria',
    brand: 'Dealer',
    image: conexionDesplazador55,
    description:
      'Misma solución que la conexión de 35mm, pero con salida extendida de 55mm para cubrir instalaciones donde la boca de desagüe del piso queda más alejada de la base del inodoro. Mantiene el mismo sistema de sellado acanalado.',
    application:
      'Se usa cuando la distancia entre la salida del inodoro y el caño de desagüe es mayor a la habitual, evitando forzar la cañería o dejar juntas mal selladas.',
    characteristics: [
      'Salida de 55mm x 100mm',
      'Material rígido acanalado',
      'Sello hermético anti filtraciones',
      'Color negro',
    ],
    tags: ['inodoro', 'desplazador', 'conexion', 'desague', 'plomeria'],
  },
  {
    id: 5,
    sku: '440385',
    name: 'Junta de Adaptación de Desplazador 100mm a 110mm',
    category: 'plomeria',
    subcategory: 'accesorios-plomeria',
    brand: 'Dealer',
    image: conexionJuntaAdaptacion,
    description:
      'Anillo adaptador que resuelve la diferencia de diámetros entre la salida del inodoro (100mm) y la cañería de desagüe de 110mm, un desajuste habitual cuando se combinan sanitarios y cañerías de distintas marcas o generaciones.',
    application:
      'Se coloca entre la conexión del desplazador y el caño de desagüe cuando los diámetros no coinciden, evitando pérdidas y asegurando un empalme prolijo.',
    characteristics: [
      'Adapta 100mm a 110mm',
      'Goma flexible de alta durabilidad',
      'Fácil colocación a presión',
    ],
    tags: ['inodoro', 'adaptador', 'junta', 'desague', 'plomeria'],
  },
  {
    id: 6,
    sku: '440522',
    name: 'Conexión Fuelle 2" x 2"',
    category: 'plomeria',
    subcategory: 'accesorios-plomeria',
    brand: 'Dealer',
    image: conexionFuelle,
    description:
      'Manguito flexible tipo fuelle que absorbe pequeños desalineamientos entre la salida del inodoro y la cañería, algo muy común en instalaciones antiguas o remodelaciones donde las piezas no quedan perfectamente enfrentadas.',
    application:
      'Se usa como unión flexible de 2" a 2" cuando la conexión rígida no encastra bien por desnivel o desvío, aportando margen de ajuste sin perder hermeticidad.',
    characteristics: [
      'Conexión 2" x 2"',
      'Material flexible de goma',
      'Absorbe desalineaciones leves',
      'Abrazaderas incluidas',
    ],
    tags: ['inodoro', 'fuelle', 'conexion', 'flexible', 'plomeria'],
  },
  {
    id: 7,
    sku: '472001',
    name: 'Asiento de Inodoro Universal ECO',
    category: 'plomeria',
    subcategory: 'sanitarios',
    brand: 'Dealer',
    image: asientoInodoro,
    description:
      'Tapa y asiento universal pensado para adaptarse a la gran mayoría de los inodoros estándar del mercado. Línea ECO de Dealer: resistente, liviana y con un sistema de fijación simple que no requiere herramientas complejas para instalarse.',
    application:
      'Reemplaza tapas rotas, amarillentas o flojas. Al ser de fijación universal, sirve tanto para renovaciones rápidas como para la instalación de un inodoro nuevo.',
    characteristics: [
      'Fijación universal (bisagras ajustables)',
      'Material plástico resistente',
      'Instalación simple sin herramientas especiales',
      'Color blanco/gris claro',
    ],
    tags: ['inodoro', 'asiento', 'tapa', 'sanitarios', 'plomeria'],
    featured: true,
  },
];
