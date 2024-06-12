import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from '../TodoApp';

describe('TodoApp', () => {
  test('renders input field and add button', () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText(/add new todo/i);
    const button = screen.getByText(/add/i);
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test('adds a new todo item', () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText(/add new todo/i);
    const button = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: 'Learn TDD' } });
    fireEvent.click(button);

    const todoItem = screen.getByText(/learn tdd/i);
    expect(todoItem).toBeInTheDocument();
  });

  test('marks a todo item as completed', () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText(/add new todo/i);
    const button = screen.getByText(/add/i);

    fireEvent.change(input, { target: { value: 'Learn TDD' } });
    fireEvent.click(button);

    const todoItem = screen.getByText(/learn tdd/i);
    fireEvent.click(todoItem);

    expect(todoItem).toHaveClass('completed');
  });
});
