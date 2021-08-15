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
  margin: 100px 0 0 0;

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

const ImageUI = styled.img`
width: calc(100% / 7 * 3);
margin: 0 0 25px 0;
  position: relative;
  transition: 1s ease;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const ImageBlockUI = styled.img`
width: 40%;
margin: 25px 0;
  position: relative;
  transition: 1s ease;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const TopContainerUI = styled.div`
width: 100%;
  position: relative;
  transition: 1s ease;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const TitleContainerUI = styled.div`
width: calc(100% / 7 * 3);
margin: 0 0 50px 0;


  position: relative;
  transition: 1s ease;
  display: flex;
  flex-direction: column;
  z-index: 1000;
  @media (max-width: 800px) {
    width: 100%;
  }
`;


const AuthorUI = styled.div`
margin: 50px 0 0 ;


`;

export default function Post(props) {
  const {
    title = "Missing title",
    name = "Missing name",
    categories,
    mainImage,
    authorImage,
    body = [],
  } = props;
  return (

    <SectionUI>




    <ContainerUI>

      



<TopContainerUI>
<TitleContainerUI>
      <HeaderUI>{title}</HeaderUI>
      <AuthorUI>Post By {name}</AuthorUI>

</TitleContainerUI>

<ImageUI objectFit="cover" src={urlFor(mainImage)} />


  
</TopContainerUI>


<TextContainerUI>

        <PortableText
              // Pass in block content straight from Sanity.io
              content={body}
              projectId="5e3iqbhv"
              dataset="production"

              serializers={{
                link: (props) => <a target="_blank" style={{ color: "#D943E3" }} {...props} />,
                image: (props) => <ImageBlockUI src={urlFor(props)} placeholder="blur" />,
                quote: (props) => <p style={{ color:'red', boxShadow: '4px 4px 10px grey', margin: '25px 0 0 0' }} {...props}  />
              }}
            />

</TextContainerUI>


    </ContainerUI>
    

    </SectionUI>
  );
};

const query = groq`*[_type == "inspiration" && slug.current == $slug][0]{
  title,
  mainImage,
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

Post.displayName = 'Post';