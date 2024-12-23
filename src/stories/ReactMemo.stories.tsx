import React, {useState} from "react";

export default {
    title: "Ract.memo demo",
}

const NewMessagesCounter = (props: { counter: number }) => {
    return <div>{props.counter}</div>
}


const SecretUsers = (props: { users: Array<String> }) => {
    console.log("Users")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>

}
const Users = React.memo(SecretUsers);

export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState<Array<String>>(["Artem", "Denis", "Dasha"]);
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <NewMessagesCounter counter={counter}/>
        <Users users={users}></Users>
    </>

}