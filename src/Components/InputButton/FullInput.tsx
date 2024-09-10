import React, {ChangeEvent, ChangeEventHandler, useState} from 'react';

// type MessageType = {
//     message: string;
// }
//
// type FullInputPropsType = {
//     message: Array<MessageType>
//     setMessage: (message: MessageType) => void
//
// }
export type MessageArrayType = {
    message: string,
}


type FullInputPropsType = {
    message: Array<MessageArrayType>,
    OnClickAddToMassive: (title:string)=>void

}


export const FullInput = (props:FullInputPropsType) => {



    let [title, setTitle] = useState('');


    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>
    ) => {

        setTitle(event.currentTarget.value);


    }




    const onClickButtonHandler = () => {
        props.OnClickAddToMassive(title)
        setTitle('');

    }

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+
            </button>




        </div>
    );
};

