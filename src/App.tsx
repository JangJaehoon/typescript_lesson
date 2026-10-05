import React from "react";
import logo from "./logo.svg";

import "./css/App.module.css";
import Data from "./data.json";
import TestComponent from "./TestComponent";

type USERS = typeof Data;

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

// Literal Types
let company: "Facebook" | "Google" | "Amazon";
company = "Facebook";

let memory: 256 | 512 | 1024;
// memory = 12; // error 발생, 256, 512, 1024만 가능

// typeof 연산자: 宣言済のデータ型を取得する。
let msg: string = "hello";
let msg2: typeof msg; // msg2는 string 타입으로 지정됨.
msg2 = "hello2";

let animal = { cat: "small" };
// 型 推論によって、データ型が { cat: string } であることがわかる。

let newAnimal: typeof animal = { cat: "big" };
// newAnimal은 { cat: string } 타입으로 지정됨.
// animalのデータ型を取得して、newAnimalに代入することができる。

// keyof 연산자: オブジェクトのキーを取得する。
type Animal = { cat: string; dog: string };
let key: keyof Animal; // key는 "cat" | "dog" 타입으로 지정됨.
key = "cat";
key = "dog";

// typeof + keyof
const SPORTS = {
  soccer: "Soccer",
  baseball: "Baseball",
};
let keySports: keyof typeof SPORTS;
keySports = "soccer";
keySports = "baseball";

// enum: 열거형(列挙型) : 自動で連番が振られる。
enum OS {
  Windows, // 0
  Mac, // 1
  Linux, // 2
}
interface PC {
  id: number;
  OSType: OS;
}

const PC1: PC = {
  id: 1,
  OSType: OS.Windows,
};

const PC2: PC = {
  id: 2,
  OSType: OS.Mac,
};

// 型の互換性
const comp1 = "test";
let comp2: string = comp1; // string 타입은 string 타입에 할당 가능

let comp3: string = "test";
// let comp4: "test" = comp3; // string 타입은 "test" 타입에 할당 불가

let funcComp1 = (a: string) => {};
let funcComp2 = (b: string) => {};
funcComp1 = funcComp2; // 매개변수 타입이 같으므로 할당 가능

let funcComp3 = (a: string) => {};
let funcComp4 = (b: number) => {};
// funcComp3 = funcComp4; // 매개변수 타입이 다르므로 할당 불가

// Generics ジェネリックス
interface GEN<T> {
  item: T;
}
const get0: GEN<string> = { item: "hello" };
const get2: GEN<number> = { item: 123 };

// data typeをstringで固定した場合
interface GEN2<T = string> {
  item: T;
}

const get3: GEN2 = { item: "hello" }; // Tのデフォルトはstring

interface GEN3<T extends string | number> {
  item: T;
}

const get4: GEN3<string> = { item: "hello" };

const get5: GEN3<number> = { item: 123 };

// const get6: GEN3<boolean> = { item: true }; // error 발생, T는 string | number만 가능

function funcGen<T>(props: T) {
  return { item: props };
}
const get7 = funcGen<string>("hello");
const get8 = funcGen<number | string | null>(123);
const get9 = funcGen<number | string | null>(null);

function funcGet1<T extends string | null>(props: T) {
  return { value: props };
}

const get10 = funcGet1<string | null>("hello");
const get11 = funcGet1<string | null>(null);

interface Props {
  price: number;
}

function funcGet2<T extends Props>(props: T) {
  return { value: props.price };
}

const get12 = funcGet2({ price: 1000 });

const funcGet3 = <T extends Props>(props: T) => {
  return { value: props.price };
};

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <TestComponent text="Hello, React!" />
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
};

export default App;
