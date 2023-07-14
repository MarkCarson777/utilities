# Custom Hook Documentation: useToggle

The useToggle custom hook is a React hook that provides a boolean state value and a function to toggle that value. It is designed to simplify the process of managing and toggling a boolean state within a React component.

## Usage

The useToggle hook returns an array with two elements:

_value_ (boolean): The current value of the boolean state.

_toggleValue_ (function): A function that can be called to toggle the boolean state. It accepts an optional boolean value as an argument. If the argument is a boolean, it will set the boolean state to that value. If no argument is provided, it will toggle the boolean state based on its current value.

## Example

Here's an example demonstrating the usage of the useToggle hook:

        import React from 'react';
        import useToggle from './useToggle';

        function Example() {
          const [value, toggleValue] = useToggle(true);

          return (
            <div>
              <p>Current value: {value.toString()}</p>
              <button onClick={toggleValue}>Toggle</button>
            </div>
          );
        }

        export default Example;
