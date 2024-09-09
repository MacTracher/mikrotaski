import React, {useState} from 'react';

import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./NewComponent";
import {ButtonComponents} from "./Components/ButtonComponents";
import {MoneyFilter} from "./MoneyFilter/MoneyFilter";
import {FullInput} from "./Components/FullInput";


type FilterType = 'All' | 'Dollars' | 'RUBLS'

function App() {
    const students = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]

    const ButtonFor1 = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }

    const ButtonFor2 = (subscriber: string) => {
        console.log(subscriber)
    }


    let [a, setA] = useState(1)


    const ButtonHandlerPlus = () => {
        setA(++a)
        console.log(a)
    }

    const ButtonHandlerZero = () => {
        setA(0)
        console.log(a)
    }

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])


    //
    // const [filter, setFilter]=useState<FilterType>('All')
    //
    // let CurrentMoney = money;
    //
    // if (filter==='RUBLS'){ CurrentMoney=money.filter((filteredMoney)=>filteredMoney.banknots==='RUBLS')}
    //
    // if (filter==='Dollars'){ CurrentMoney=money.filter((filteredMoney)=>filteredMoney.banknots==='Dollars')}
    //
    // const ButtonHandlerFilter=(nameButton:FilterType)=>{
    //     setFilter(nameButton)
    // }


    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])


    const SetMessageHandler = () => {
        // setMessage([])
        setMessage([...message])
    }

    return (
        <>

            {/*<Header title={"Headefr"}/>*/}
            {/*<Body title={"Bodfy"}/>*/}
            {/*<Footer title={"Footefr"}/>*/}
            {/*<NewComponent students={students}/>*/}
            {/*<ButtonComponents callBack={()=>ButtonFor1('vitia ept',21)} name={"MyKnopka1"}/>*/}
            {/*<ButtonComponents callBack={()=>ButtonFor2('kiril ept')} name={"MyKnopka2"}/>*/}


            {/*<div>*/}
            {/*    <h1>{a}</h1>*/}
            {/*    <button onClick={ButtonHandlerPlus}>number</button>*/}
            {/*    <button onClick={ButtonHandlerZero}>0</button>*/}
            {/*</div>*/}


            {/*<ul>*/}
            {/*    {CurrentMoney.map((item,index)=>{*/}
            {/*        return(*/}
            {/*            <li key={index}>*/}
            {/*                <span>{item.banknots}</span>*/}
            {/*                <span>{item.value}</span>*/}
            {/*                <span>{item.number}</span>*/}
            {/*            </li>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</ul>*/}

            {/*<div style={{marginLeft: '35px'}}>*/}
            {/*    <button onClick={()=>{ButtonHandlerFilter( 'All')}}>All</button>*/}
            {/*    <button onClick={()=>{ButtonHandlerFilter('RUBLS')}}>RUBLS</button>*/}
            {/*    <button onClick={()=>{ButtonHandlerFilter('Dollars')}}>Dollars</button>*/}
            {/*</div>*/}

            <FullInput message={message}

                       SetMessageHandler={SetMessageHandler}
            />

            {<>

                {message.map((el, index) => {
                    return (
                        <div key={index}>
                            {el.message}
                        </div>
                    )
                })}
            </>}

            <MoneyFilter money={money}/>


        </>
    );
}

export default App;












