import styled from "styled-components";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useHover } from "../helpers/useHover";

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
  background: ${(props) => props.color.primary};

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

  background: ${(props) => props.color.primary};
  border: 1px solid ${(props) => props.color.secondary};

  &:hover {
    background: ${(props) => props.color.secondary};
    color: ${(props) => props.color.primary};
  }
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
  -webkit-text-stroke-color: ${(props) => props.color.secondary};
  font-family: "GeneralSans-Bold";
  color: ${(props) => props.color.primary};
`;

export default function NavSquare({
  dark,
  setDark,
  color,
  gridColumn = "4 / span 2",
  gridRow = "2 / span 1",
  link = "/",
  setPage,
  page,
}) {
  console.log(page);
  const [hoverRef, isHovered] = useHover();
  
  return (
    <Link href={link.length > 1 ? "  " + "/" + link : "/"}>
      <SquareUI
        ref={hoverRef}
        onClick={() => setPage && setPage(link)}
        color={color}
        className="nav"
        style={{
          gridColumn: gridColumn,
          gridRow: gridRow,
          color: page === link ? color.primary : isHovered ? color.primary : page === link && isHovered ? color.primary : color.secondary,
          background: page === link ? color.secondary : isHovered ? color.secondary : page === link && isHovered ? color.primary : color.primary,
        }}
      >
        {link}
      </SquareUI>
    </Link>
  );
}
