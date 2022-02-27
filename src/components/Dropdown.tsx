import React from 'react';
import styled from '@emotion/styled';

const Item = styled.ul `
    text-align: initial;
    padding: 10px 10px 0px 20px;
    margin: 0;
    &:hover {
        background-color: #ede9e8;
        cursor: pointer;
    }
`

interface Props {
    fruits: string[],
    input: string,
    selectedItem: (fruit: string) => void
}

const Dropdown = ({ fruits, input, selectedItem }: Props) => {
    const defaultFruits = fruits.slice(0,3)
    return (
        <>
        {input ? 
            fruits.map( fruit => (
                <Item onClick={() => selectedItem(fruit)}>
                    { fruit }
                </Item>
                )
            )
        :
            defaultFruits.map( fruit => (
                <Item onClick={() => selectedItem(fruit)}>
                    { fruit }
                </Item>
                )
            )
        }
        </>
    )
};

export default Dropdown

