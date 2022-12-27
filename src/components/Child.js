export default function Child(props){
    return(
        <div>
        <h1>this is {props.count}</h1>
        <button onClick={()=>{
            props.setCount(300)
        }}>click</button>
        <h1>{props.arr}</h1>
        </div>
    )
}