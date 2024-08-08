

import styled from "styled-components";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import React, { useState } from 'react'


const StyledBox = styled.div`

    .box {
        display: flex; align-items: center;
        cursor: pointer;
    }

    .box label{
        margin-left: 5px;
    }
    
`;

export const CustomCheckBox = (props) => {

    const [checked, setChecked] = useState([false, false, false])

    const handleCheckboxClick = (index) => {
        const updatedChecked = [...checked];
        updatedChecked[index] = !updatedChecked[index];
        setChecked(updatedChecked);
    };

  return (
    <StyledBox>
      <div className='box' onClick={() => handleCheckboxClick(0)}>
        {checked[0] ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} <p>1</p>
      </div>
      <div className='box' onClick={() => handleCheckboxClick(1)}>
        {checked[1] ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} <p>2</p>
      </div>
      <div className='box' onClick={() => handleCheckboxClick(2)}>
        {checked[2] ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} <p>3</p>
      </div>
    </StyledBox>
  );
}
