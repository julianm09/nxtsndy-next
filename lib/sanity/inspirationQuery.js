import groq from "groq";

export const inspirationQuery = groq`
  *[_type == "inspiration"] {
    _id,
    title,
    publishedAt,
    "slug": slug.current,
    "categories":   category[]->{title, slug},
    mainImage,
    body,
  }
`;
