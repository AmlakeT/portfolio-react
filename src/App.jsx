import { useEffect, useState } from "react";
 
function App() {
 // how to use map and filter methods in combined form

  // const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((json) => setUsers(json));
  // }, []);

  const someFunctions = () => {
    let numbersLessthanFive = numbers
      .filter((number) => {
        return number >= 5;
      })
      .map((square) => {
        return square * square;
      });
    setNumbers(numbersLessthanFive);
    setShow(!show);
  };
  return (
    <div className=" text-blue-600 text-center mt-32 font font-bold text-2xl ">
      <h1>Hello, this a react starter:)</h1>

      <button onClick={someFunctions}>click here</button>
      <div className="p-10 flex flex-row justify-center">{numbers.map((number) => (
         <p className="pr-3" key={number}>{number}</p>
      ))}</div>
      {show && (
        <div>
          {numbers.map((user) => (
            <div key={user}>
              <p>{user}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
