# Custom Hook Documentation: useArray

The useArray custom hook is a React hook that provides an array state and several utility functions to manipulate the array. It uses the useState hook from the React library to manage the state.

## Usage

The useArray hook returns an object with the following properties and methods:

**Properties**

_array_: The current state of the array.

**Methods**

_set(newArray: Array)_: A function to set the array state directly. It replaces the existing array with the new array provided as an argument.

_push(element: any)_: A function to add an element to the end of the array. It takes an element as an argument and appends it to the existing array.

_filter(callback: Function)_: A function to filter the array based on a provided callback function. It creates a new array containing only the elements for which the callback function returns true.

_update(index: number, newElement: any)_: A function to update an element at a specific index in the array. It takes an index and a new element as arguments and replaces the element at the given index with the new element.

_remove(index: number)_: A function to remove an element at a specific index from the array. It takes an index as an argument and removes the element at that index.

_clear()_: A function to clear the array by setting it to an empty array.

## Example

Here's an example usage of the useArray hook:

        import React from 'react';
        import useArray from './useArray';

        function Example() {
          const { array, push, filter, update, remove, clear } = useArray([]);

          // Adding elements to the array
          push('Apple');
          push('Banana');
          push('Orange');

          // Filtering the array
          const filteredArray = filter((element) => element.startsWith('A'));

          // Updating an element
          update(1, 'Cherry');

          // Removing an element
          remove(2);

          // Clearing the array
          clear();

          return (
            <div>
              <ul>
                {array.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          );
        }

        export default Example;

In the above example, the useArray hook is used to manage an array state (array). Elements are added to the array using the push function, filtered using the filter function, updated using the update function, removed using the remove function, and cleared using the clear function. The resulting array is rendered as a list in the component.
