import React from 'react'
import styled from 'styled-components';

const StyledProgressBar = styled.div`
  width: 100%; height: 2px;
  background-color: #ccc;
  margin: 10px 0;
  cursor: pointer;

  &::after{
    content: '';
    position: relative;
    background-color: black;
    display: block;
    height: 2px;
    width: ${p => 100 / p.$totalSlides}%;
    left: ${p => 100 / p.$totalSlides * p.$currentSlide}%;
    transition: 0.5s;
  }
`;

export const ProgressBar = (props) => {

  const { totalSlides, currentIndex, setIndex } = props;

  const handleProgressBarClick = (e) => {
    const { left, width } = e.target.getBoundingClientRect();
    const clickX = e.clientX - left;
    const newSlide = Math.floor((clickX / width) * totalSlides);
    setIndex(newSlide);
  };

  return (
    <StyledProgressBar
        onClick={handleProgressBarClick}
        $totalSlides={totalSlides}
        $currentSlide={currentIndex}>
    </StyledProgressBar>
  )
}
