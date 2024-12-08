import '@testing-library/jest-dom'
import { render, screen } from "@testing-library/react"
import App from "./App"

test('demo', () => {
    expect(true).toBe(true)
})

test("Renders the main page", () => {
    render(<App />)
    const headerElement = screen.getByTestId('header-title');
  
  // Verifica se o texto está correto
  expect(headerElement).toHaveTextContent('App vite');
    
})