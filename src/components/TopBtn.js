import styled from 'styled-components';
import React, { useEffect, useRef, useState } from 'react';

const TopBtnBlock = styled.div`
    position: fixed;
    bottom: 0; right: 0;
    z-index: 999;
    padding: 40px;
    transition: 0.3s;

    .btn{
        cursor: pointer;
        background-color: #aaa;
        padding: 30px;
        border-radius: 50%;
    }
`;

function TopBtn() {

    const targetRef = useRef(null)
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
        <TopBtnBlock style={ visible ? {opacity: 1, zIndex: 999} : {opacity: 0, zIndex: -999}}>
            <div className='btn' onClick={() => document.body.scrollIntoView({behavior: "smooth"})} ref={targetRef}></div>
        </TopBtnBlock>
  )
}

export default TopBtn