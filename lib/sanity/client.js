const sanityClient = require("@sanity/client");
export const client = sanityClient({
  projectId: 'z8qkuz7q',
  dataset: "production",
  //   token: 'sanity-auth-token', // or leave commented out to be anonymous user
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2021-09-25', // use a UTC date string
});