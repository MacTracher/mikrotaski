import {isNumberObject} from "node:util/types";

type ButtonType ={
    name: string;
    callBack: ()=>void
}



export function ButtonComponents(props:ButtonType){

    const onClickHandler =()=>{
        props.callBack()
    }


    return(
        <div>
            <button onClick={onClickHandler}>{props.name}</button>



        </div>
    )
}