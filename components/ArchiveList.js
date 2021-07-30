import styled from "styled-components";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useHover } from "../helpers/useHover";
import { archiveQuery } from "../lib/sanity/archiveQuery";
import urlFor from "../lib/sanity/urlFor";
import Image from "next/image";

const ContainerUI = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  font-size: 18px;
  font-weight: 400;
  z-index: 1000;
`;

const PostUI = styled.div`
  width: calc(100% / 7 * 4);

  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ImageUI = styled.img`
  width: 50%;
`;

export default function ArchiveList({ archive }) {
  console.log(archive);

  return (
    <ContainerUI>
      {archive.map((p) => (
        <Link key={p._id} href={`/archive/${p.slug}`}>
          <PostUI >

            { p && 
            <img
          
              objectFit="cover"
              src={urlFor(p.mainImage)}
     
            />
}

            <a>{p.title}</a>
          </PostUI>
        </Link>
      ))}
    </ContainerUI>
  );
}

