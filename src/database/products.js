const products = [
  {
    "id": 1,
    "nombre": "Gorro deportivo",
    "categoria": "Indumentaria",
    "precio": 3563,
    "stock": 11,
    "description": "Gorro de tenis blanco de excelente calidad",
    "marca": "Wilson",
    "imageURL": "https://http2.mlstatic.com/D_NQ_NP_2X_997865-MLA48418368149_122021-F.webp"
  }, {
    "id": 2,
    "nombre": "Remera tenis",
    "categoria": "Indumentaria",
    "precio": 4522,
    "stock": 56,
    "description": "Remera sintética con 30% de algodón.Varios colores disponibles: Gris, blanco, negro y rojo",
    "marca": "Wilson",
    "imageURL": "https://http2.mlstatic.com/D_NQ_NP_984562-MLA48830951213_012022-O.webp"
  }, {
    "id": 3,
    "nombre": "Zapatillas de tenis de mujer",
    "categoria": "Calzado",
    "precio": 24350,
    "stock": 5,
    "description": "Zapatilla de mujer, modelo 2021. Muy cómodas y excelentes para jugadoras de nivel intermedio y avanzado.",
    "marca": "Wilson",
    "imageURL": "https://http2.mlstatic.com/D_NQ_NP_892172-MLA49254887854_032022-O.webp"
  }, {
    "id": 4,
    "nombre": "Cubre grips para tenis y paddel. Pack",
    "categoria": "Raquetas",
    "precio": 10862,
    "stock": 16,
    "description": "Caramelera de 60 cubregrips de varios colores",
    "marca": "Madma",
    "imageURL": "https://http2.mlstatic.com/D_NQ_NP_2X_936263-MLA45496949973_042021-F.webp"
  }, {
    "id": 5,
    "nombre": "Medias de tenis de algodón para hombre.Pack x3 ",
    "categoria": "Indumentaria",
    "precio": 1675,
    "stock": 10,
    "description": "Medias de tenis para hombre de color blanco con el logo de la marca de diferentes colores",
    "marca": "Babolat",
    "imageURL": "https://http2.mlstatic.com/D_NQ_NP_908928-MLA46885182508_072021-O.webp"
  }, {
    "id": 6,
    "nombre": "Raqueta Wilson Pro Staff Presicion 100",
    "categoria": "Raquetas",
    "precio": 28500,
    "stock": 14,
    "description": "Potencia controlable y un precio atractivo, la Pro Staff Precision 100 es perfecta para jugadores de nivel intermedio que busquen una raqueta a buen precio, aunque también es apta para jugadores de nivel más avanzado. Encordada pesa 321 gramos, con balance de 33 cm, patrón abierto y un marco rígido, esta raqueta tiene una fórmula atemporal que viene a redefinir el juego moderno: precisión, potencia y efectos. ",
    "marca": "Wilson",
    "imageURL": "https://http2.mlstatic.com/D_NQ_NP_768366-MLA48939523025_012022-O.webp"
  }, {
    "id": 7,
    "nombre": "Raqueta Babolat Aero Pro Nadal Jr",
    "categoria": "Raquetas",
    "precio": 26900,
    "stock": 5,
    "description": "Excelente raqueta para niños de entre 6 y 12 años de nivel básico a intermedio, liviana y firme. ",
    "marca": "Babolat",
    "imageURL": "https://http2.mlstatic.com/D_NQ_NP_900465-MLA48295396020_112021-O.webp"
  }, {
    "id": 8,
    "nombre": "Asics Upcourt 4 Tenis-voley-importadas-negras/azul para hombre",
    "categoria": "Calzado",
    "precio": 36900,
    "stock": 15,
    "description": "Excelentes zapatillas de tenis, importadas. Hay de color negra con verde, y azul con verde.",
    "marca": "Asics",
    "imageURL": "https://http2.mlstatic.com/D_NQ_NP_934721-MLA48065991298_102021-O.webp"
  }, {
    "id": 9,
    "nombre": "Raqueta Head Radical Elite #1 Strings",
    "categoria":"Raquetas",
    "precio": 29990,
    "stock": 14,
    "description": "RAQUETA HEAD RADICAL ELITE (VIENE ENCORDADA Y SIN FUNDA). Es ideal para principiantes, es una opción ideal para una amplia gama de jugadores casuales. La cabeza de gran tamaño crea un punto dulce más grande, ideal para los jugadores que aún dominan la precisión. Pesa 280g, su cabeza es de 102 IN y su longitud de 685 mm.",
    "marca": "HEAD",
    "imageURL": "https://http2.mlstatic.com/D_NQ_NP_911278-MLA45400726131_032021-O.webp"
  }, {
    "id": 10,
    "nombre": "Short Padel Quick Tenis Microfibra Tela Premium Bolsillos",
    "categoria": "Indumentaria",
    "precio": 1735,
    "stock": 15,
    "description": "Fabricado con Microfibra premium con doble costura y bolsillos laterales; ideales para la práctica de pádel, tenis, running y otras actividades deportivas. Hay talles del S al XL",
    "marca": "Kadur",
    "imageURL": "https://http2.mlstatic.com/D_NQ_NP_2X_762095-MLA47871936407_102021-F.webp"
  }, {
    "id": 11,
    "nombre": "Short Nike Tempo En Negro/blanco",
    "categoria": "Indumentaria",
    "precio": 5399,
    "stock": 7,
    "description": "Ideal para todo tipo de deporte, muy cómodos y sobrios, el Short Nike Tempo reúne todas las condiciones para hacerlo tu preferido a la hora de competir o entrenar. Su tejido en poliéster con tecnología Dri-Fit dispersa el sudor y mantiene tu piel fresca y seca, dándote mejor ventilación. Además sus líneas blancas te dan visibilidad y al tiempo que te hará lucir un look relajado y cómodo.",
    "marca": "Nike",
    "imageURL": "https://http2.mlstatic.com/D_NQ_NP_717431-MLA45794690696_052021-O.webp"
  }, {
    "id": 12,
    "nombre": "Vestido Deportivo Liso Con Espalda Deportiva Mujer.",
    "categoria": "Indumentaria",
    "precio": 2802,
    "stock": 8,
    "description": "Vestido deportivo liso realizado en microfibra con espalda cavada. Excelente calidad y terminacion, super cómodo, tanto para realizar actividad fisica como para prenda de tiempo libre. No destiñe, no se achica. Apto lavarropas en frio. Único color, negro. Aclaración, no incluye la calza que se ve en la foto.",
    "marca": "Anytime",
    "imageURL": "https://http2.mlstatic.com/D_NQ_NP_2X_706594-MLA47441835008_092021-F.webp"
  }, {
    "id": 13,
    "nombre": "Zapatillas Nike Air Zoom Prestige Hc Tenis Padel Mujer ",
    "categoria": "Calzado",
    "precio": 19999,
    "stock": 14,
    "description": "Modelo: AA8024-101; Color: Blanco; Disponible en: Talle 37.5 arg (equivalente a 7.5 US – 5 UK - 37 BR - 38.5 EUR y 24.5 cm plantilla)",
    "marca": "Nike",
    "imageURL": "https://http2.mlstatic.com/D_NQ_NP_864695-MLA49272425313_032022-O.webp"
  }, {
    "id": 14,
    "nombre": "Raqueta Tenis Head Graphene 360 Speed Mp Djokovic Grafito",
    "categoria": "Raquetas",
    "precio": 39370,
    "stock": 13,
    "description": "La Speed MP está disponible en un nuevo diseño con una combinación asimétrica de blanco mate y brillante y negro brillante. Incluye la nueva Tecnología Graphene 360+, una combinación de la transferencia de energía del Grafeno 360 y las innovadoras fibras en espiral para una flexión mejorada y un tacto de impacto limpio y un patrón de encordado 16/19 para un efecto mejorado durante puntos rápidos. El peso de 300 g equilibrio en 32 cm hacen este modelo particularmente estable, sobre todo detrás de la línea de fondo de la pista en las fases de juego más aceleradas y te permitirá responder cómodamente. Es perfecta para los jugadores de fondo de pista que gustan de los intercambios largos contra sus adversarios.",
    "marca": "Head",
    "imageURL": "https://http2.mlstatic.com/D_NQ_NP_811565-MLA45655636496_042021-O.webp"
  }, {
    "id": 15,
    "nombre": "Pantalon Largo Wilson Tenis Padel",
    "categoria": "Indumentaria",
    "precio": 5750,
    "stock": 16,
    "description": "Pantalón largo Jogging tipo babucha, 80% algodón 15% poliester y %5 eslastano",
    "marca": "Wilson",
    "imageURL": "https://http2.mlstatic.com/D_NQ_NP_931545-MLA44237326733_122020-O.webp"
  }, {
    "id": 16,
    "nombre": "Pantalon Largo Babolat Pure Tenis Padel Gimnasia",
    "categoria": "Indumentaria",
    "precio": 8990,
    "stock": 6,
    "description": "Pantalón Babolat Pure. Posee tecnología textil inteligente, concebido para favorecer la complejidad de gestos de los deportes, un corte biotécnico que acompaña al jugador en todos los desplazamientos del juego. Los materiales técnicos escogidos son ligeros y suaves al contacto. De limpieza muy fácil permiten su uso intensivo tanto en entrenamiento como en competición. Con puños elastizados y con cierres de cremallera. 65% Poliéster / 35% Algodón",
    "marca": "Babolat",
    "imageURL": "https://http2.mlstatic.com/D_NQ_NP_944416-MLA31134566019_062019-O.webp"
  }, {
    "id": 17,
    "nombre": "Gorra Babolat Visera Cap Gorro Tenis Padel",
    "categoria": "Indumentaria",
    "precio": 3175,
    "stock": 9,
    "description": "Gorro con visera con cierre ajustable. Colores disponibles: azul, blanco y negro. ",
    "marca": "Babolat",
    "imageURL": "https://http2.mlstatic.com/D_NQ_NP_610889-MLA45807813687_052021-O.webp"
  }, {
    "id": 18,
    "nombre": "Zapatillas De Tennis Babolat Drive 3 All Court Hombre",
    "categoria": "Calzado",
    "precio": 46999,
    "stock": 5,
    "description": "Excelentes zapatillas de tennis importadas para todo tipo de superficie. Recomendadas para jugadores de alto nivel. Hay talles del 34 al 49",
    "marca": "Babolat",
    "imageURL": "https://http2.mlstatic.com/D_NQ_NP_20777-MLA20196166759_112014-O.webp"
  }, {
    "id": 19,
    "nombre": "Remera Rf Roger Federer Con Su Firma Tenis 100% Algodón",
    "categoria": "Indumentaria",
    "precio": 2054,
    "stock": 14,
    "description": "Remeras manga corta en algodón 24/1 peinado de excelente confección y estampada en vinilo textil termoadhesivo. Con cuello con terminación de tira de algodón. Hay varios colores de remera y de estampa",
    "marca": "FUERZA G",
    "imageURL": "https://http2.mlstatic.com/D_NQ_NP_694458-MLA48523749404_122021-O.webp"
  }, {
    "id": 20,
    "nombre": "Babolat Rpm Blast Set 12 Mts Nadal Cuerda Tenis",
    "categoria": "Raquetas",
    "precio": 2390,
    "stock": 19,
    "description": "El Babolat RPM Blast (Revoluciones Por Minuto) es un cordaje monofilamento que te ofrece una excelente combinación de efectos, potencia y una sensación única en el impacto. Gracias a su revestimiento de silicona enlazada, el potencial que facilita resulta sorprendente. Este cordaje es la elección perfecta para el jugador moderno con un estilo de juego como el de Rafael Nadal, Jo-Wilfried Tsonga y Sam Stosur. Todos ellos juegan con el fantástico RPM Blast.",
    "marca": "Babolat",
    "imageURL": "https://http2.mlstatic.com/D_NQ_NP_695318-MLA48481538417_122021-O.webp"
  }
]

export default products;
  