import { City } from "@/interfaces/models";

export const cities: City[] = [
  {
    id: 1,
    name: "Quito",
    description:
      "Capital del Ecuador, ubicada en las laderas orientales del volcán Pichincha, famosa por su centro histórico colonial bien conservado.",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800",
    coordinates: {
      lan: -0.1807,
      lon: -78.4678,
    },
  },
  {
    id: 2,
    name: "Guayaquil",
    description:
      "Principal puerto marítimo y centro comercial del país, conocida por el Malecón 2000 y el colorido barrio Las Peñas.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPUXse93Gm2AVrH4INj3flVJPlyrznXLjS44YAZKHTF7Su4MfPnPcblLY&s=10",
    coordinates: {
      lan: -2.1894,
      lon: -79.8891,
    },
  },
  {
    id: 3,
    name: "Cuenca",
    description:
      "Ciudad colonial en el sur andino, reconocida como Patrimonio de la Humanidad por su arquitectura, catedrales y ríos.",
    image: "https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?w=800",
    coordinates: {
      lan: -2.9001,
      lon: -79.0059,
    },
  },
  {
    id: 4,
    name: "Baños de Agua Santa",
    description:
      "Portal a la Amazonía, famosa por sus aguas termales, cascadas espectaculares y deportes de aventura.",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800",
    coordinates: {
      lan: -1.3964,
      lon: -78.4247,
    },
  },
  {
    id: 5,
    name: "Manta",
    description:
      "Ciudad costera de Manabí, destacada por sus hermosas playas, deliciosa gastronomía marina y actividad pesquera e industrial.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    coordinates: {
      lan: -0.9677,
      lon: -80.7089,
    },
  },
  {
    id: 6,
    name: "Otavalo",
    description:
      "Ubicada en la provincia de Imbabura, célebre mundialmente por su mercado indígena tradicional y artesanías textiles.",
    image: "https://images.unsplash.com/photo-1589802829985-817e51171b92?w=800",
    coordinates: {
      lan: 0.2346,
      lon: -78.2625,
    },
  },
];
