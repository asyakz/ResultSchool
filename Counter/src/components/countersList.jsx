import React, {useState} from "react";
import Counter from "./counter"

const CountersList = () => {
  const initialState = [
    {id:0, value:0, name: "Ненужная вещь", price: '200'},
    {id:1, value:4, name: "Нужная вещь"},
    {id:2, value:0, name: "Еда"},
    {id:3, value:0, name: "Вода"},
    {id:4, value:0, name: "Яблоко"},
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter(c => c.id !== id);
    setCounters(newCounters);
  }

  const handleIncrement = (id) => {
    const newIncrementCount = counters.map(d => (
      d.id === id ? {...d, value: d.value + 1} : d
    ))
    setCounters(newIncrementCount);
  };

  const handleDecrement = (id) => {
    const newDecrementCount = counters.map(d => (
      d.id === id ? {...d, value: d.value - 1} : d
    ))
    setCounters(newDecrementCount);
  };

  const handleReset = () => {
    setCounters(initialState);
  }

  return (
    <>
      {counters.map(count=>
      <Counter
        key={count.id}
        onDelete={handleDelete}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        {...count}
        />
      )}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
    </>
  )

}

export default CountersList;
