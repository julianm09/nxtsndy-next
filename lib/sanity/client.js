const sanityClient = require("@sanity/client");
export const client = sanityClient({
  projectId: 'z8qkuz7q',
  dataset: "production",
  useCdn: true, // `false` if you want to ensure fresh data

});