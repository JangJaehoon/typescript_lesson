import React, { useState } from "react";

interface Props {
  text: string;
}
interface UserData {
  id: number;
  name: string;
}

const TestComponent: React.FC<Props> = (props) => {
  const [count, setCount] = useState<number | null>(0);
  const [user, setUser] = useState<UserData | null>({
    id: 1,
    name: "John Doe",
  }); // userの初期値はnullで、userはUserData型またはnullとして推論される
  // useStateの初期値は0で、countはnumber型として推論される
  const [inputData, setInputData] = useState(""); // inputDataの初期値はnullで、inputDataはstring型またはnullとして推論される

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(event.target.value);
  };

  return (
    <div>
      <h1>{props.text}</h1>
      <h1>Count: {count}</h1>
      <input type="text" value={inputData} onChange={handleInputChange} />
      <h1> {inputData} </h1>
    </div>
  );
};

export default TestComponent;
