import React from 'react';
import styled from 'styled-components';

const Header = (props) => {
    const StyH1= styled.h1`
        color: black;
        text-align: center;
    `;
    return (
        <div>
            <StyH1>React Wars</StyH1>
        </div>
    )
}

export default Header;