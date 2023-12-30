import { useState, useCallback, useEffect } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [noAllowed, setNoAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyz";
    if (noAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*(){}:[]<>?.,~";
    }
    if (upperCase) {
      str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
    }
    setPassword(pass);
    console.log(password);
  }, [length, noAllowed, charAllowed, setPassword, upperCase]);

  useEffect(() => {
    passwordGenerator();
  }, [length, noAllowed, charAllowed, upperCase, passwordGenerator]);

  return (
    <div>
      <div className="w-full max-w-xl mx-auto rounded-lg shadow-md px-4 pb-8 my-8 text-orange-500 bg-gray-900">
        <p className="text-4xl text-center text-white py-5">
          Password Generator
        </p>

        <div className="flex shadow rounded-lg mb-4 overflow-hidden">
          <input
            className="outline-none px-3 py-1 w-full"
            type="text"
            placeholder={password}
            value={password}
            readOnly
          />
          <button className="bg-blue-600 w-20 ml-2">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-2">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length : {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={noAllowed}
              id="numberInput"
              onChange={() => {
                setNoAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Character</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={upperCase}
              id="numberInput"
              onChange={() => {
                setUpperCase((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Upper Case</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
