// Karakter bileşeniniz buraya gelecek

import React from 'react';
import styled from 'styled-components';

import {
    AccordionBody,
    AccordionHeader,
    AccordionItem,
  } from 'reactstrap';


const Karakter = (props) => {
    //const{name, birthYear} = props;

    const{karakter, index} = props;

    const Box = styled.div`
        display : flex;
        justify-content : space-between;
        border : 1px solid black;
        width: 90%;
        margin: 2% auto;
        background-color: rgba(256,256,256,0.3);
    `;
    const Name = styled.h2`
        color: black;
        padding: 2px;
        padding-left: 10px;
    `;
    const BirthYear = styled.p`
        background-color : black;
        font-size : 2 rem;
        color : white;
        border-radius : 5px;
        margin: 5px;
        padding: 3px;
        width: 20%;
    `;
    return(
        <AccordionItem>
            <AccordionHeader targetId={index}>
                <Box>
                    <Name> {karakter.name}</Name>
                    <BirthYear> {karakter.birthYear}</BirthYear>
                </Box>
            </AccordionHeader>
            <AccordionBody accordionId={index}>
                <p>
                    Height: {karakter.height}
                </p>
                <p>
                    Gender: {karakter.gender}
                </p>
                <p>
                    Mass: {karakter.mass}
                </p>
                <p>
                    Birth Year: {karakter.birth_year}
                </p>
                <p>
                    Eye Color: {karakter.eye_color}
                </p>
                <p>
                    Hair Color: {karakter.hair_color}
                </p>
                <p>
                    Skin Color: {karakter.skin_color}
                </p>

            </AccordionBody>
        </AccordionItem>

    )
}

export default Karakter;