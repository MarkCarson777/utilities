import useArray from "./hooks/useArray";

import "./App.css";

export function App() {
  const { array, merge } = useArray([]);

  const onClick = () => {
    merge([[1, 2, 3], [4, 5, 6], ["a", "b", "c"], ["hello"]]);
  };

  return (
    <div>
      <ul>
        {array.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={() => onClick()}>Test</button>
    </div>
  );
}
