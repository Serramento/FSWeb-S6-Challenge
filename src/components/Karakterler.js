import React, {useState} from 'react';
import {
    Accordion,
  } from 'reactstrap';
import Karakter from './Karakter';
import styled from 'styled-components';


  export default function Karakterler(props){

    const {karakterler} = props;

    const Akordeon = styled.div`
        width: 50%;
        margin: auto;
    `;


    const [open, setOpen] = useState(0);
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };
  
    return (
      <Akordeon>
        <Accordion open={open} toggle={toggle}>     
        {
        karakterler.map((karakter, index)=>(
          <Karakter key={index} karakter={karakter} index={index}/>
        ))
      }
        </Accordion>
      </Akordeon>
    );
  };