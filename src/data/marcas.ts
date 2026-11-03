export interface Marca {
  id: string;
  name: string;
  logoText: string;
  badge: string;
  country: string;
  description: string;
  specialty: string;
}

export const MARCAS: Marca[] = [
  {
    id: "sangsin",
    name: "Sangsin Brake",
    logoText: "SB SANGSIN BRAKE",
    badge: "Líder en Fricción",
    country: "Corea del Sur",
    description: "Fabricante líder en la industria coreana de piezas y partes para frenos de fricción. Cuenta con más de 6 plantas a nivel mundial. Sangsin está equipado con las mejores tecnologías y es suplidor OEM para Hyundai, Kia, GM Daewoo, SsangYong y Renault Samsung.",
    specialty: "Pastillas Hi-Q, zapatas, pastillas cerámicas y tambores",
  },
  {
    id: "hansang",
    name: "Hansang",
    logoText: "HANSANG",
    badge: "Especialista en Transmisión",
    country: "Corea del Sur",
    description: "La marca HANSANG maneja una amplia gama de repuestos de parte de caja como son: Piñón y corona, Deslizante, Piñones, Trenfijo, Satélites, Planetarios, Propulsor, Bronces, etc.",
    specialty: "Coronas, piñones de ataque, trenes fijos y engranajes de caja",
  },
  {
    id: "mando",
    name: "Mando Corporation",
    logoText: "Mando",
    badge: "Tier-1 Global OEM",
    country: "Corea del Sur",
    description: "Mando Corporation pertenece al grupo Halla Holding y cuenta con 20 fábricas en el mundo, 16 centros de investigación y con más de 11,000 trabajadores. Su visión es crear productos seguros, ecológicos y de fácil uso.",
    specialty: "Amortiguadores, sistemas de suspensión, dirección y frenos ABS",
  },
  {
    id: "tcic",
    name: "TCIC",
    logoText: "TCIC",
    badge: "Sistemas Hidráulicos",
    country: "Corea del Sur",
    description: "Tae Chul Industrial Co. fabricante de piezas de automóviles con más de 70 años de experiencia en la producción de bombas y bombines de freno y embrague de la mejor calidad. Cuenta con 5 plantas en Asia.",
    specialty: "Bombas principales y secundarias de embrague y frenos",
  },
  {
    id: "phc-valeo",
    name: "PHC Valeo",
    logoText: "PHC Valeo",
    badge: "Embragues de Precisión",
    country: "Corea del Sur / Francia",
    description: "Valeo Pyeong Hwa International es una compañía que cuenta con más de 90 años de creación y se ha convertido en socio de los principales fabricantes de automóviles, con operaciones en 33 países, diseñando tecnologías punteras.",
    specialty: "Kits de embrague completos, prensas, platos y collarines",
  },
  {
    id: "yulim",
    name: "Yulim High-Tech",
    logoText: "YULIM",
    badge: "Suspensión y Dirección",
    country: "Corea del Sur",
    description: "Establecida en 1998, Yulim High-Tech ha crecido como una de las compañías líderes de la industria del automóvil en Corea. Produce y exporta piezas para sistemas de suspensión y dirección.",
    specialty: "Terminales de dirección, rótulas, barras estabilizadoras y brazos pitman",
  },
];
