export type ProjectFormat = "Long-form" | "Short-form";
export type ProjectOrientation = "horizontal" | "vertical";
export type ProjectPlatform = "youtube" | "instagram" | "mp4";

export type Project = {
  id: string;
  title: string;
  category: string;
  client: string;
  format: ProjectFormat;
  orientation: ProjectOrientation;
  duration?: string;
  description: string;
  tools: string[];
  thumbnail: string;
  platform: ProjectPlatform;
  videoUrl: string;
  metrics?: string;
  year?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    id: "1",
    title:
      "Esta MINI IMPRESORA 3D DENTAL es CASI PERFECTA | PIONEXT MINI",
    category: "Tecnología & Review",
    client: "Mikel Ruiz Torres",
    format: "Long-form",
    orientation: "horizontal",
    duration: "49:00",
    description:
      "Edición técnica de review en profundidad (49 min). Estructura limpia con cortes precisos, ritmo ágil para mantener la retención en explicaciones técnicas complejas, B-roll de producto y gráficos de apoyo.",
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    thumbnail:
      "https://i.ytimg.com/vi/3t1BRIEvG1M/maxresdefault.jpg",
    platform: "youtube",
    videoUrl: "https://www.youtube.com/embed/3t1BRIEvG1M",
  },
  {
    id: "2",
    title:
      "Esta es la IMPRESORA 3D que CAMBIARÁ LA ODONTOLOGÍA | Ceramix Nano",
    category: "Tecnología & Análisis",
    client: "Mikel Ruiz Torres",
    format: "Long-form",
    orientation: "horizontal",
    duration: "17:00",
    description:
      "Edición de análisis tecnológico de lanzamiento (17 min). Ritmo dinámico, integración de especificaciones en pantalla, transiciones suaves y diseño visual orientado a claridad y autoridad en el sector.",
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    thumbnail:
      "https://i.ytimg.com/vi/dpQXjQuZ5f4/maxresdefault.jpg",
    platform: "youtube",
    videoUrl: "https://www.youtube.com/embed/dpQXjQuZ5f4",
  },
  {
    id: "3",
    title: "BRAXY LO PERDIÓ TODO // LA CAÍDA DEL ÍDOLO",
    category: "Documental / Storytelling Gaming",
    client: "LOLFI",
    metrics: "+207K vistas",
    format: "Long-form",
    orientation: "horizontal",
    duration: "19:00",
    description:
      "Edición narrativa estilo mini-documental (19 min) con alto poder de retención. Uso intensivo de ritmo cómico, memes, efectos de sonido, zooms dinámicos, recortes en Photoshop y storytelling visual para mantener al espectador enganchado de principio a fin.",
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    thumbnail:
      "https://i.ytimg.com/vi/Tktif5hh90M/maxresdefault.jpg",
    platform: "youtube",
    videoUrl: "https://www.youtube.com/embed/Tktif5hh90M",
  },
  {
    id: "4",
    title: "RECUPERA el CONTROL de tu VIDA en 7 DÍAS",
    category: "Desarrollo Personal / Storytelling",
    client: "Uri Martínez",
    metrics: "+1.4M vistas",
    format: "Long-form",
    orientation: "horizontal",
    duration: "12:46",
    description:
      "Edición long-form de desarrollo personal (12:46) con foco en retención. Estructura directa, cortes al ritmo del discurso, énfasis en frases clave, recursos visuales de apoyo y un montaje que sostiene la atención sin perder claridad.",
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    thumbnail:
      "https://i.ytimg.com/vi/zS2w_RkOb9k/maxresdefault.jpg",
    platform: "youtube",
    videoUrl: "https://www.youtube.com/embed/zS2w_RkOb9k",
  },
  {
    id: "5",
    title: "¿No te da vergüenza subir videos?",
    category: "YouTube Shorts / Reels",
    client: "Marco Christoper",
    format: "Short-form",
    orientation: "vertical",
    duration: "00:49",
    description:
      "Edición vertical dinámica de 49 segundos. Subtítulos animados palabra por palabra, cambios de ritmo rápidos, encuadres dinámicos, efectos de sonido (SFX) y B-roll de apoyo diseñados para maximizar el watch-time en móvil.",
    tools: ["Premiere Pro", "After Effects"],
    thumbnail:
      "https://i.ytimg.com/vi/JrOJN9Tv5CI/maxresdefault.jpg",
    platform: "youtube",
    videoUrl: "https://www.youtube.com/embed/JrOJN9Tv5CI",
  },
  {
    id: "6",
    title: "Así contacto a empresas de forma directa y eficaz",
    category: "Contenido B2B / Negocios",
    client: "Marco Christoper",
    format: "Short-form",
    orientation: "vertical",
    duration: "00:47",
    description:
      "Edición vertical orientada a marca personal y negocios (47 segundos). Tipografía limpia, gráficos minimalistas en movimiento (motion graphics), resaltado de palabras clave y ritmo directo al grano.",
    tools: ["Premiere Pro", "After Effects"],
    thumbnail:
      "https://i.ytimg.com/vi/4DtC4BspZvw/maxresdefault.jpg",
    platform: "youtube",
    videoUrl: "https://www.youtube.com/embed/4DtC4BspZvw",
  },
  {
    id: "7",
    title: "Bessent y Trump activan la liquidez: los sectores para invertir ya",
    category: "Finanzas & Macroeconomía",
    client: "Hector Chamizo",
    metrics: "+109K vistas",
    format: "Long-form",
    orientation: "horizontal",
    duration: "19:00",
    description:
      "Edición de análisis financiero y macroeconómico (19 min). Integración limpia y dinámica de gráficos bursátiles, informes financieros, recortes de prensa y transiciones fluidas para facilitar la comprensión de tesis de inversión complejas.",
    tools: ["Premiere Pro", "After Effects", "Photoshop"],
    thumbnail:
      "https://i.ytimg.com/vi/rVN-sICq5vA/maxresdefault.jpg",
    platform: "youtube",
    videoUrl: "https://www.youtube.com/embed/rVN-sICq5vA",
    featured: true,
  },
  {
    id: "8",
    title: "Reel Vertical — Edición Dinámica para Redes Sociales",
    category: "Shorts / Reels",
    client: "Instagram Reels",
    format: "Short-form",
    orientation: "vertical",
    description:
      "Edición vertical de alto impacto pensada para retención en Instagram Reels. Cortes precisos al ritmo del habla, subtítulos dinámicos, motion graphics ligeros y diseño sonoro (SFX) para maximizar el alcance orgánico.",
    tools: ["Premiere Pro", "After Effects"],
    thumbnail: "/images/reel-instagram-cover.jpg",
    platform: "instagram",
    videoUrl: "https://www.instagram.com/reel/DSU2cQ6jBSV/embed",
  },
];
