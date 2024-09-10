
type ButtonPropsType ={
    name: string,
    callBack: () => void,
}

export const Button = (props: ButtonPropsType) => {

    const OnClickButtonHandler = () =>{
        props.callBack();
    }


    return (
        <div>
            <button onClick={OnClickButtonHandler}>{props.name}
            </button>
        </div>
    );
};

