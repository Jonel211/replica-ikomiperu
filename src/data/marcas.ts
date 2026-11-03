export interface Marca {
  id: string;
  name: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  paragraphs: string[];
}

export const MARCAS: Marca[] = [
  {
    id: "sangsin",
    name: "Sangsin Brake",
    logo: "/icons/sangsin.png",
    logoWidth: 232,
    logoHeight: 52,
    paragraphs: [
      "Fabricante líder en la industria Coreana de piezas y partes para frenos de fricción, cuenta con más de 6 plantas a nivel mundial.",
      "Sangsin está equipado con las mejores tecnologías originales globalmente apreciadas y es suplidor OEM para Hyundai, Kia, GM Daewoo, Ssangyong y Renault Samsung.",
    ],
  },
  {
    id: "hansang",
    name: "Hansang",
    logo: "/icons/hansang.png",
    logoWidth: 185,
    logoHeight: 70,
    paragraphs: [
      "La marca HANSANG maneja una amplia gama de repuestos de parte de caja como son: Piñón y corona, Deslizante, Piñones, Trenfijo, Satélites, Planetarios, Propulsor, Bronces, etc.",
    ],
  },
  {
    id: "mando",
    name: "Mando Corporation",
    logo: "/icons/mando.png",
    logoWidth: 196,
    logoHeight: 72,
    paragraphs: [
      "Mando Corporation pertenece al grupo Halla Holding y cuenta con 20 fabricas en el mundo, 16 centros de investigación y con más de 11,000 trabajadores.",
      "La visión de Mando Corporation es crear productos seguros, ecológicos y de fácil uso.",
    ],
  },
  {
    id: "tcic",
    name: "TCIC",
    logo: "/icons/tcic.png",
    logoWidth: 207,
    logoHeight: 95,
    paragraphs: [
      "Tae Chul Industrial Co. fabricante de piezas de automóviles con más de 70 años de experiencia en la producción de bombas y bombines de freno y embrague de la mejor calidad. Cuenta con 5 plantas en Asia.",
    ],
  },
  {
    id: "phc-valeo",
    name: "PHC Valeo",
    logo: "/icons/phc.png",
    logoWidth: 216,
    logoHeight: 72,
    paragraphs: [
      "Valeo Pyeong Hwa International es una compañía que cuenta con más de 90 años de creación y se ha convertido en socio de los principales fabricantes de automóviles, con operaciones en 33 países, diseñando tecnologías y sistemas innovadores para que los futuros automóviles sean más intuitivos, confortables y seguros.",
    ],
  },
  {
    id: "yulim",
    name: "Yulim High-Tech",
    logo: "/icons/yulim.png",
    logoWidth: 206,
    logoHeight: 70,
    paragraphs: [
      "Establecida en 1998, Yulim High-Tech ha crecido como una de las compañías líderes de la industria del automóvil en Corea. Produce y exporta piezas para sistemas de suspensión y dirección.",
    ],
  },
];