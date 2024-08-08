import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { ObservableDiv, useToggle } from "../util/hooks";
import { FooterBlock, HeaderBlock, RootBlock } from "../styled";
import TopBtn from "../components/TopBtn"
import { CustomButton, TextInput } from "../components";
import { CustomSlider } from "../components/CustomSlider"
import { ProgressBar } from "../components/ProgressBar";
import { CustomCheckBox } from "../components/CustomCheckbox";
import { useNavigate } from "react-router-dom"


function Test() {

  const [isVisible, toggleVisibility] = useToggle();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideIdx, setSlideIdx] = useState(0)

  const navigate = useNavigate();


  return (
      <RootBlock>
          <TopBtn />

          <ObservableDiv>
            <HeaderBlock>
            </HeaderBlock>
          </ObservableDiv>

          <br /><br />
          <br /><br />

          <TextInput
            placeholder={'입력해 주세요.'}
            onChange={(e) => console.log(e.target.value)}
          />

          <br /><br />

          <CustomButton />

          <br /><br />

          <CustomSlider currentIndex={slideIdx} setIndex={(i) => setSlideIdx(i)} />
          <ProgressBar  currentIndex={slideIdx} setIndex={setSlideIdx} totalSlides={3} />

          <br /><br />

          <CustomCheckBox options={[
            {value: 'test', label: '테스트'},
            {value: 'test', label: '테스트'},
            {value: 'test', label: '테스트'},
          ]}/>


          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

          
          <FooterBlock>
          </FooterBlock>
        


          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

          <button onClick={() => navigate('/')}>asfasfasfaf</button>

          
      </RootBlock>
    
  );
}

export default Test;
