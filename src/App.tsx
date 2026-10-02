import React from "react";
import logo from "./logo.svg";
import "./css/App.module.css";

const name = "hello";
// const 변수는 값 변경 불가, 재할당 불가

let nameChange = "hello";
// let 변수는 값 변경 가능, 재할당 가능
nameChange = "hello2";

let username: string = "Hello";
let dummyNum = 2;
let bool = true;

let array1 = [1, 2, 3];
let array2: number[] = [1, 2, 3];
let array3 = [1, 2, 3, "hello"];

interface User {
  name: string;
  age: number;
  first: string;
  last: string | null; // string, null 둘 다 사용가능
}

let userObj: User = {
  name: "hello",
  age: 20,
  first: "Yamada",
  last: "Taro",
};

const func1 = (x: number, y: number): number => {
  return x + y;
};
// return 값이 number 타입으로 지정되어있음.(생략가능)

// Intersection Type
type PROFILE = {
  age: number;
  city: string;
};

type LOGIN = {
  username: string;
  password: string;
};

type USER = PROFILE & LOGIN;

const user: USER = {
  age: 20,
  city: "Tokyo",
  username: "hello",
  password: "1234",
};
// The end of Intersection Type

// Union Type
let value: boolean | number | string = true;
value = false;
value = 123;
value = "hello";

let arrayUni: (number | string)[];
arrayUni = [1, 2, 3, "hello"];
// The end of Union Type

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
