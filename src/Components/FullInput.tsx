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


export const FullInput = (props:any) => {



    let [title, setTitle] = useState('');


    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>
    ) => {

        setTitle(event.currentTarget.value);
        console.log(title);

    }


    const onClickButtonHandler = () => {

        props.message.push({message: title})

        console.log(props.message)
    }

    return (
        <div>
            <input onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+
            </button>




        </div>
    );
};

