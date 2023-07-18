# Custom Hook Documentation: useDebug

The useDebug custom hook is a React hook that provides a way to debug and log the lifecycle events of a component. It uses the useEffect hook to log a message when the component is mounted and another message when it is unmounted.

## Usage

Inside your functional component, call the useDebug hook:

        useDebug();

## Example

Here's an example of how you can use the useDebug custom hook in a component:

        import React from "react";
        import useDebug from "./useDebug";

        function Example() {
          useDebug();

          return (
            <div>Example</div>
          );
        }

## Lifecycle Events

The useDebug custom hook logs the following lifecycle events:

_Mounted_: The message "mounted" is logged when the component is mounted.
_Unmounted_: The message "unmounted" is logged when the component is unmounted.

## Clean-up

The useDebug hook also supports clean-up logic by returning a function from the useEffect callback. In this case, when the component is unmounted, the returned function will be invoked.

For example, if you need to unsubscribe from an event listener or cancel a timer, you can include the clean-up logic as follows:

        export default function useDebug() {
          useEffect(() => {
            console.log("mounted");

            return () => {
              console.log("unmounted");

              // Clean-up logic
            };
          });
        }

Make sure to include the necessary clean-up logic within the returned function to avoid memory leaks or unnecessary computations.
