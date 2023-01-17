import styled from "styled-components";

export const Card = styled.div`
  color: black;
  position: relative;
  width: 100%;
  cursor: pointer;
`;

export const Slide = styled.img`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  -webkit-backface-visibility: hidden;
  border-radius: 5px;
  user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

export const Placeholder = styled.img`
  width: 100%;
  opacity: 0;
  z-index: -1;
`;

export const Controls = styled.div`
  position: relative;
`;

export const PrevSlide = styled.div`
  cursor: pointer;
  z-index: 1;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  color: white;
  font-size: 40px;
`;

export const NextSlide = styled.div`
  cursor: pointer;
  z-index: 1;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  color: white;
  font-size: 40px;
`;

export const DotsContainer = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 20px;
  left: 50%;
  height: 12px;
  align-items: center;
  display: flex;
  transform: translate(-50%, 0);
`;

export const Dot = styled.div`
  border-radius: 50%;
  background-color: white;
  margin: 0 5px;
  height: 7px;
  width: 7px;
  z-index: 1; // display: inline-block;
`;

export const NoBedroom = styled.div`
  margin-top: 10px;
  font-size: 12px;
`;

export const Name = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
