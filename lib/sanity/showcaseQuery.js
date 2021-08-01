import groq from "groq";

export const showcaseQuery = groq`
  *[_type == "showcase"] {
    _id,
    title,
    publishedAt,
    "slug": slug.current,
    "categories":   category[]->{title, slug},
    mainImage,
    body,
  }
`;
