import { render, screen } from '@testing-library/react'
import Counter from './Counter'
import React from 'react'

describe('Counter', () => {
  beforeEach(() => {
    render(<Counter />)
  })

  it('should render correctly', () => {
    expect(screen.getByTestId('counter')).toBeInTheDocument()
  })

  it('renders two buttons', () => {
    expect(screen.getAllByRole('button')).toHaveLength(2)
  })

  it('renders a result', () => {
    expect(screen.getByTestId('result')).toHaveTextContent('0')
  })

  it('increments', () => {
    screen.getByText('+').click()
    expect(screen.getByTestId('result')).toHaveTextContent('1')
  })

  it('decrements', () => {
    screen.getByText('-').click()
    expect(screen.getByTestId('result')).toHaveTextContent('-1')
  })
})
