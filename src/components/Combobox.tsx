import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';

import Chevrondown from './Chevrondown';
import Dropdown from './Dropdown';
import useOptions from '../hooks/useOptions';
import useClickOutside from '../hooks/useClickOutside';

const Container = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
`
const Openwrapper = styled.div `
    display: flex;
    flex-direction: column;
    border: solid 2px #007bff;
    border-radius: 2px;
`
const Inputwrapper = styled.div `
    display:flex;
    flex-direction: row;
    padding: 10px;
`
const Input = styled.input `
    border: none;
    outline: none;
`
const Inputclosed = styled.input `
    border: none;
    outline: none;
    background-color: #ede9e8;
`
const Closedwrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: solid 2px #ede9e8;
    border-radius: 2px;
`
const Inputwrapperclosed = styled.div`
    display:flex;
    flex-direction: row;
    padding: 10px;
    background-color: #ede9e8;
`
interface Props {
    options: string[]
}

const Combobox = ({ options }: Props) => {
    const [input, setInput] = useState('');
    const [open, setOpen] = useState(false);
    const [selectedFruit, setSelectedfruit] = useState('');
    const ref = useRef(null);
    const fruits = useOptions(options, input);
    useClickOutside(ref, () => setOpen(false))

    const handleSelect = (item:string) => {
        setSelectedfruit(item);
        setOpen(false)
    }

    const handleReset = () => {
        setOpen(!open); 
        setInput('');
        setSelectedfruit('');
    }

    return (
        <Container ref={ref}>
            {open ?
            <Openwrapper>
                <Inputwrapper>
                    <Input placeholder='Choose a Fruit:' onChange={ e => setInput(e.target.value)} />
                    <Chevrondown />
                </Inputwrapper>
                <Dropdown fruits={fruits} input={input} selectedItem ={handleSelect}/>
            </Openwrapper>
            :
            <Closedwrapper>
                <Inputwrapperclosed>
                    <Inputclosed placeholder='Choose a Fruit:' onClick={handleReset} value={selectedFruit}/>
                    <Chevrondown />
                </Inputwrapperclosed>
            </Closedwrapper>
            }
        </Container>
    );
};


export default Combobox