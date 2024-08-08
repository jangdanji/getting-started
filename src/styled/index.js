import styled, { css } from "styled-components";

export const colorMain = "#fff"
export const colorSub = "#7FA1C3"

export const breakpoint = {
    small: '780px',
    medium: '1024px',
    large: '1440px'
}

export const sm = (...args) => css`
    @media (max-width: ${breakpoint.small}) {
        ${css(...args)};   }
`;

export const md = (...args) => css`
    @media (max-width: ${breakpoint.medium}) {
        ${css(...args)};   }
`;

export const lg = (...args) => css`
    @media (max-width: ${breakpoint.large}) {
        ${css(...args)};   }
`;

export const RootBlock = styled.div`
    width: 1440px;
    margin: 0 auto;
    min-height: 100vh;
    background-color: ${colorMain};
    display: flex; flex-direction: column;
    justify-content: space-between;

    ${lg`
        width: calc(100% - 80px);
        margin: 0 40px;
    `}

    ${md`
        width: calc(100% - 60px);
        margin: 0 30px;
    `}

    ${sm`
        width: calc(100% - 40px);
        margin: 0 20px;
    `}

`;

export const HeaderBlock = styled.div`
    width: 100%;
    height: 100px;
    background-color: ${colorSub};
`;

export const FooterBlock = styled.div`
    width: 100%;
    height: 100px;
    background-color: ${colorSub};
`;