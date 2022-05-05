import { useState } from "react";
import UserName from "./UserName";

export default function Hello({ age }) {
  const [name, setName] = useState("Mike"); //첫번째 값은 state(변수)이고 두번째는 이 state를 변경해주는 함수입니다. 초기값은 Mike입니다.
  const msg = age > 19 ? "성인입니다." : "미성년자입니다.";

  function changeName() {
    const newName = name === "Mike" ? "June" : "Mike";  // newName은 name이 Mike일 땐 June으로 name이 June일 땐 Mike로 변환하는 변수
    setName(newName); // changeName 함수를 누를때마다 새로운 이름으로 변경

  }

  return (
    <div>
      <h2>{name}({age}) : {msg}</h2>
      <UserName name={name} />
      <button onClick={changeName}>change</button>
    </div>
  );
}