const products = [
  {
    "id": 1,
    "nombre": "Gorro deportivo",
    "precio": 3.563,
    "stock": 11,
    "description": "Gorro de tenis blanco de excelente calidad",
    "marca": "Wilson",
    "imageURL": "https://http2.mlstatic.com/D_NQ_NP_2X_997865-MLA48418368149_122021-F.webp"
  }, {
    "id": 2,
    "nombre": "Remera tenis",
    "precio": 4.500,
    "stock": 56,
    "description": "Remera sintética con 30% de algodón.Varios colores disponibles: Gris, blanco, negro y rojo",
    "marca": "Wilson",
    "imageURL": "https://http2.mlstatic.com/D_NQ_NP_984562-MLA48830951213_012022-O.webp"
  }, {
    "id": 3,
    "nombre": "Zapatillas de tenis de mujer",
    "precio": 24.350,
    "stock": 5,
    "description": "Zapatilla de mujer, modelo 2021. Muy cómodas y excelentes para jugadoras de nivel intermedio y avanzado.",
    "marca": "Wilson",
    "imageURL": "https://http2.mlstatic.com/D_NQ_NP_892172-MLA49254887854_032022-O.webp"
  }, {
    "id": 4,
    "nombre": "Cubre grips para tenis y paddel. Pack",
    "precio": 10.862,
    "stock": 16,
    "description": "Caramelera de 60 cubregrips de varios colores",
    "marca": "Madma",
    "imageURL": "https://http2.mlstatic.com/D_NQ_NP_2X_936263-MLA45496949973_042021-F.webp"
  }, {
    "id": 5,
    "nombre": "Medias de tenis de algodón para hombre.Pack x3 ",
    "precio": 1.675,
    "stock": 10,
    "description": "Medias de tenis para hombre de color blanco con el logo de la marca de diferentes colores",
    "marca": "Babolat",
    "imageURL": "https://http2.mlstatic.com/D_NQ_NP_908928-MLA46885182508_072021-O.webp"
  }, {
    "id": 6,
    "nombre": "Raqueta Wilson Pro Staff Presicion 100",
    "precio": 28.500,
    "stock": 14,
    "description": "Potencia controlable y un precio atractivo, la Pro Staff Precision 100 es perfecta para jugadores de nivel intermedio que busquen una raqueta a buen precio, aunque también es apta para jugadores de nivel más avanzado. Encordada pesa 321 gramos, con balance de 33 cm, patrón abierto y un marco rígido, esta raqueta tiene una fórmula atemporal que viene a redefinir el juego moderno: precisión, potencia y efectos. ",
    "marca": "Wilson",
    "imageURL": "https://http2.mlstatic.com/D_NQ_NP_768366-MLA48939523025_012022-O.webp"
  }, {
    "id": 7,
    "nombre": "Raqueta Babolat Aero Pro Nadal Jr",
    "precio": 26.900,
    "stock": 5,
    "description": "Excelente raqueta para niños de entre 6 y 12 años de nivel básico a intermedio, liviana y firme. ",
    "marca": "Babolat",
    "imageURL": "https://http2.mlstatic.com/D_NQ_NP_900465-MLA48295396020_112021-O.webp"
  }, {
    "id": 8,
    "nombre": "Asics Upcourt 4 Tenis-voley-importadas-negras/azul para hombre",
    "precio": 36900,
    "stock": 15,
    "description": "Excelentes zapatillas de tenis, importadas. Hay de color negra con verde, y azul con verde.",
    "marca": "Asics",
    "imageURL": "https://http2.mlstatic.com/D_NQ_NP_934721-MLA48065991298_102021-O.webp"
  }, {
    "id": 9,
    "nombre": "Idaline",
    "precio": 1088,
    "stock": 14,
    "description": "Unsp fracture of shaft of unsp tibia, init for clos fx",
    "marca": "Romaguera and Sons",
    "imageURL": "#daa7aa"
  }, {
    "id": 10,
    "nombre": "Ashia",
    "precio": 3929,
    "stock": 15,
    "description": "Nondisp fx of body of unsp calcaneus, 7thG",
    "marca": "Willms-Johns",
    "imageURL": "#139152"
  }, {
    "id": 11,
    "nombre": "Madlen",
    "precio": 2126,
    "stock": 7,
    "description": "Nondisp commnt fx shaft of r fibula, 7thH",
    "marca": "Bechtelar-Sipes",
    "imageURL": "#25a244"
  }, {
    "id": 12,
    "nombre": "Margalit",
    "precio": 1445,
    "stock": 8,
    "description": "Nondisp oblique fx shaft of unsp fibula, 7thN",
    "marca": "Kutch, Will and Schoen",
    "imageURL": "#117dfe"
  }, {
    "id": 13,
    "nombre": "Tarrance",
    "precio": 2429,
    "stock": 14,
    "description": "Disp fx of anterior column of unsp acetab, init for opn fx",
    "marca": "Kovacek Inc",
    "imageURL": "#8c08c7"
  }, {
    "id": 14,
    "nombre": "Madlen",
    "precio": 1949,
    "stock": 13,
    "description": "Unsp focal TBI w loss of consciousness of 31-59 min, init",
    "marca": "McKenzie and Sons",
    "imageURL": "#d1299b"
  }, {
    "id": 15,
    "nombre": "Werner",
    "precio": 3780,
    "stock": 16,
    "description": "Sprain of medial collateral ligament of left knee",
    "marca": "Klein-Aufderhar",
    "imageURL": "#332d77"
  }, {
    "id": 16,
    "nombre": "Marten",
    "precio": 2621,
    "stock": 6,
    "description": "Sltr-haris Type II physl fx upr end unsp tibia, 7thD",
    "marca": "Klein, Hegmann and Hand",
    "imageURL": "#bca536"
  }, {
    "id": 17,
    "nombre": "Barty",
    "precio": 4284,
    "stock": 9,
    "description": "Disp fx of lateral cuneiform of r ft, subs for fx w malunion",
    "marca": "Smitham, Hyatt and Zemlak",
    "imageURL": "#70e5e6"
  }, {
    "id": 18,
    "nombre": "Valeria",
    "precio": 896,
    "stock": 5,
    "description": "Puncture wound without foreign body of ear",
    "marca": "Leannon, Auer and Rosenbaum",
    "imageURL": "#a82c64"
  }, {
    "id": 19,
    "nombre": "Bree",
    "precio": 2054,
    "stock": 14,
    "description": "Other injury of bronchus, bilateral, initial encounter",
    "marca": "Koch-Gaylord",
    "imageURL": "#5ef38f"
  }, {
    "id": 20,
    "nombre": "Ealasaid",
    "precio": 1502,
    "stock": 19,
    "description": "Moderate persistent asthma with status asthmaticus",
    "marca": "Gaylord and Sons",
    "imageURL": "#fc253a"
  }
]

export default products;
  