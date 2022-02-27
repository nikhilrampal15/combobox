import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Combobox from '../components/Combobox';

describe('The Combobox Component', () => {
    
    const mockProps = [
        '🥑 Avocado',
        '🍌 Banana',
        '🫐 Blueberries'
    ]

    it('The component should render', () => {
        const Component = render(<Combobox options={mockProps} />)
        expect(screen.getByPlaceholderText('Choose a Fruit:')).toBeInTheDocument()
    })

    it('The component should open on click of the input', () => {
        const Component = render(<Combobox options={mockProps} />)
        userEvent.click(screen.getByRole('textbox'))
        expect(screen.getByText(mockProps[0])).toBeInTheDocument()
    })
})