import styled from "styled-components";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { useHover } from "../helpers/useHover";
import NavSquare from "./NavSquare";

const HeaderUI = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  font-size: 18px;
  font-weight: 400;
`;

const ContainerUI = styled.div`
  padding: 100px 0 0 0;
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  background: ${props => props.color.primary};

  position: relative;

  @media (max-width: 1200px) {
    width: 90%;
  }
`;

const GridUI = styled.div`
  width: 100%;
  height: 250px;
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr 2fr 2fr 2fr;
  grid-template-rows: 2fr 2fr;
  grid-gap: 5px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

const SquareUI = styled.div`
  
  background: white;
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 10px;
  font-weight: 500;

  background: ${props => props.color.primary};
  border: 1px solid ${props => props.color.secondary};

`;

const LogoUI = styled.div`
  font-size: 60px;
  font-weight: 700;
  font-family: din-condensed, sans-serif;
  cursor: pointer;
`;

const CoverUI = styled.div`
  width: 100%;
  height: 100px;
`;

const BannerUI = styled.div`
  font-size: 130px;
  font-weight: 700;

  position: fixed;
  display: flex;
  text-align: left;

  height: auto;
  width: 20000px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  overflow: hidden;
  transform: rotate(90deg) translateY(-30vw) translateX(50vw);
  z-index: -1000;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const BannerInnerUI = styled.div`


  animation: 10s scroll linear infinite;
  -webkit-text-stroke-width: 1px;
  color: white;
  -webkit-text-stroke-color: ${props => props.color.secondary};
  font-family: "GeneralSans-Bold";
  color: ${props => props.color.primary};
`;

export default function Header({dark, setDark, color}) {
  const [page, setPage] = useState("/");
  const [hoverRef, isHovered] = useHover();
  return (
    <HeaderUI>
      <ContainerUI color={color}>

      <Link href="/">
        <LogoUI onClick={() => setPage("/")}>NXT SNDY</LogoUI>
        </Link>

        <GridUI>

        
        <NavSquare color={color} gridColumn="1 / span 2" gridRow="1 / span 2" link="archive" setPage={setPage} page={page}/>
         
         
        <NavSquare color={color} gridColumn="3 / span 2" gridRow="1 / span 1" link="showcase" setPage={setPage} page={page}/>
         

          <SquareUI color={color} className="nav" onClick={() => setDark(!dark)}/>

          <NavSquare color={color} gridColumn="6 / span 1" gridRow="1 / span 2" link="inspiration" setPage={setPage} page={page}/>

          <SquareUI color={color} className="nav" />
          <SquareUI color={color} className="nav" />

          <NavSquare color={color} gridColumn="4 / span 2" gridRow="2 / span 1" link="contact" setPage={setPage} page={page}/>

          <SquareUI color={color} className="nav" />
        </GridUI>
      </ContainerUI>

      <BannerUI>
        {page === "/" ? (
          <BannerInnerUI color={color}>
            NXT SNDY NXT SNDY NXT SNDY NXT SNDY NXT SNDY NXT SNDY NXT SNDY NXT
            SNDY NXT SNDY NXT SNDYNXT SNDY NXT SNDY NXT SNDY NXT SNDY NXT SNDY
            NXT SNDY NXT SNDY NXT SNDYNXT SNDY NXT SNDY NXT SNDY NXT SNDY NXT
          </BannerInnerUI>
        ) : (
          ""
        )}

        {page === "archive" ? (
          <BannerInnerUI color={color}>
            ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE
            ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE
            ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE ARCHIVE
          </BannerInnerUI>
        ) : (
          ""
        )}

{page === "showcase" ? (
          <BannerInnerUI color={color}>
            SHOWCASE SHOWCASE SHOWCASE SHOWCASE SHOWCASE SHOWCASE SHOWCASE
            SHOWCASE SHOWCASE SHOWCASE SHOWCASE SHOWCASE SHOWCASE SHOWCASE
            SHOWCASE SHOWCASE SHOWCASE SHOWCASE SHOWCASE SHOWCASE SHOWCASE
          </BannerInnerUI>
        ) : (
          ""
        )}

{page === "contact" ? (
          <BannerInnerUI color={color}>
            CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT
            CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT
            CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT CONTACT
          </BannerInnerUI>
        ) : (
          ""
        )}

{page === "inspiration" ? (
          <BannerInnerUI color={color}>
            INSPIRATION INSPIRATION INSPIRATION INSPIRATION INSPIRATION
            INSPIRATION INSPIRATION INSPIRATION INSPIRATION INSPIRATION
            INSPIRATION INSPIRATION INSPIRATION INSPIRATION INSPIRATION
          </BannerInnerUI>
        ) : (
          ""
        )}


      </BannerUI>
    </HeaderUI>
  );
}
