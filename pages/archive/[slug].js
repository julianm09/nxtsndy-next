import Link from "next/link";
import groq from "groq";
import BlockContent from "@sanity/block-content-to-react";
import { client } from "../../lib/sanity/client";
import urlFor from "../../lib/sanity/urlFor";
import { archiveQuery } from "../../lib/sanity/archiveQuery";
import styled from 'styled-components'
import PortableText from "react-portable-text";
import Image from "next/image";


const SectionUI = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  overflow: hidden;

`;

const HologramContainerUI = styled.div`
  width: calc(100% / 7 * 2);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  height: 500px;

  z-index: 0;
  position: relative;
  transition: 1s ease;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const HologramUI = styled.img`
  width: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 100;
  transition: 0.2s ease;
`;

const ContainerUI = styled.div`
  width: 70%;
  margin: 100px 0 0 0;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;


  position: relative;
  transition: 1s ease;

  @media (max-width: 1200px) {
  }

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

const TextContainerUI = styled.div`

width: calc(100% / 7 * 5);

  flex-direction: column;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const HeaderUI = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  word-wrap: break-word;

  font-size: 48px;
  font-weight: 400;
  position: relative;
  transition: 1s ease;

  z-index: 100;

  @media (max-width: 1200px) {
    font-size: 36px;
  }
`;

const SubHeaderUI = styled.div`
  width: 80%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;

  position: relative;
  transition: 1s ease;

  font-size: 16px;
  font-weight: 400;
  z-index: 100;
  margin: 50px 0 0 0;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const ImageUI = styled.div`
  position: relative;
  transition: 1s ease;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  @media (max-width: 1200px) {
    width: 100%;
  }
`;


export default function Post(props) {
  const {
    title = "Missing title",
    name = "Missing name",
    categories,
    authorImage,
    body = [],
  } = props;
  return (

    <SectionUI>



    <ContainerUI>

      <TextContainerUI>
      <HeaderUI>{title}</HeaderUI>
      <span>By {name}</span>
      {categories && (
        <ul>
          Posted in
          {categories.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      )}

        <PortableText
              // Pass in block content straight from Sanity.io
              content={body}
              projectId="5e3iqbhv"
              dataset="production"

              serializers={{
                link: (props) => <a target="_blank" style={{ color: "#244468" }} {...props} />,
                image: (props) => <img style={{ width:'calc(100% / 5 * 3)', boxShadow: '4px 4px 10px grey', margin: '25px 0 0 0' }} src={urlFor(props)} placeholder="blur" />,
                quote: (props) => <p style={{ color:'red', boxShadow: '4px 4px 10px grey', margin: '25px 0 0 0' }} {...props}  />
              }}
            />

</TextContainerUI>
    </ContainerUI>
    

    </SectionUI>
  );
};

const query = groq`*[_type == "archive" && slug.current == $slug][0]{
  title,
  "name": author->name,
  "categories": categories[]->title,
  "authorImage": author->image,
  body
}`;

Post.getInitialProps = async function (context) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = "" } = context.query;
  return await client.fetch(query, { slug });
};

