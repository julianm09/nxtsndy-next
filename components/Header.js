import styled from "styled-components";
import { useEffect, useState } from "react";

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
  font-weight: 600;

  background: ${props => props.color.primary};
  border: 2px solid ${props => props.color.secondary};

  &:hover {
    background: ${props => props.color.secondary};
    color: ${props => props.color.primary};
  }
`;

const LogoUI = styled.div`
  font-size: 60px;
  font-weight: 700;
  font-family: din-condensed, sans-serif;
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
  const [page, setPage] = useState("home");
  return (
    <HeaderUI>
      <ContainerUI color={color}>
        <LogoUI onClick={() => setPage("home")}>NXT SNDY</LogoUI>

        <GridUI>
          <SquareUI
          color={color}
            className="nav"
            onClick={() => setPage("archive")}
            style={{ gridColumn: "1 / span 2", gridRow: "1 / span 2" }}
          >
            archive
          </SquareUI>
          <SquareUI 
          color={color}
          className="nav"
          style={{ gridColumn: "3 / span 2", gridRow: "1 / span 1" }}>
            showcase
          </SquareUI >

          <SquareUI color={color} className="nav" onClick={() => setDark(!dark)}/>

          <SquareUI color={color} className="nav" style={{ gridColumn: "6 / span 1", gridRow: "1 / span 2" }}>
            inspiration
          </SquareUI>

          <SquareUI color={color} className="nav" />
          <SquareUI color={color} className="nav" />

          <SquareUI color={color} className="nav" style={{ gridColumn: "4 / span 2", gridRow: "2 / span 1" }}>
            get in touch
          </SquareUI>

          <SquareUI color={color} className="nav" style={{ background: "black" }}></SquareUI>
        </GridUI>
      </ContainerUI>

      <BannerUI>
        {page === "home" ? (
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
      </BannerUI>
    </HeaderUI>
  );
}
