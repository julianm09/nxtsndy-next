const sanityClient = require("@sanity/client");
export const client = sanityClient({
  projectId: 'z8qkuz7q',
  dataset: "production",
  apiVersion: '2021-06-07', // use a UTC date string
  useCdn: true, // `false` if you want to ensure fresh data

});