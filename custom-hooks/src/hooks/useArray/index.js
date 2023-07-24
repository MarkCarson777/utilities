import { useState } from "react";

export default function useArray(defaultValue) {
  const [array, setArray] = useState(defaultValue);

  function push(element) {
    setArray((a) => [...a, element]);
  }

  function filter(callback) {
    setArray((a) => a.filter(callback));
  }

  function update(index, newElement) {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length - 1),
    ]);
  }

  function remove(index) {
    setArray((a) => [
      ...a.slice(0, index),
      ...a.slice(index + 1, a.length - 1),
    ]);
  }

  function clear() {
    setArray([]);
  }

  function merge(arrays) {
    const newArray = [];

    for (const arr of arrays) {
      newArray.push(...arr);
    }

    setArray(newArray);
  }

  // TODO unshift

  // TODO pop

  // TODO shift

  // TODO map

  // TODO sort

  // TODO reverse

  // TODO find

  // TODO join

  // TODO flat

  // TODO at

  // TODO some

  // TODO every

  // TODO reduce

  // TODO includes

  // TODO from

  return { array, set: setArray, push, filter, update, remove, clear, merge };
}
