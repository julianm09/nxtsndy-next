import groq from "groq";

export const archiveQuery = groq`
  *[_type == "archive"] {
    _id,
    title,
    publishedAt,
    "slug": slug.current,
    "categories":   category[]->{title, slug},
    mainImage,
    body,
  }
`;
