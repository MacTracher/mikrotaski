import {useState} from "react";
import {ButtonMoneyFilter} from "./ButtonMoneyFilter";


type MoneyArrayType={
    banknots: string;
    value: number;
    number: string;
}

type MoneyFilterType = {
    money: MoneyArrayType[]
}


type ButtonHandlerFiltraciaType= 'ALL' | 'Dollars' | 'RUBLS';





export const MoneyFilter=(props:MoneyFilterType)=>{

    const[filter, setFilter] = useState<ButtonHandlerFiltraciaType>('ALL');






    let MoneyFilter = props.money

    if(filter==='Dollars'){MoneyFilter=props.money.filter((item)=>item.banknots==='Dollars')}
    if(filter==='RUBLS'){MoneyFilter=props.money.filter((item)=>item.banknots==='RUBLS')}


    const ButtonHandlerFiltracia=(props:ButtonHandlerFiltraciaType)=>{
        setFilter(props)
    }


    return(
        <div>
            <ul>
                {MoneyFilter.map((item, index)=>{return(
                    <li key={index}>
                        <span>{item.banknots}</span>
                        <span>------{item.value}</span>
                        <span>------{item.number}</span>
                    </li>
                )})}

            </ul>


            {/*<button onClick={()=>{ButtonHandlerFiltracia('ALL')}}>ALL</button>*/}
            {/*<button onClick={()=>{ButtonHandlerFiltracia('Dollars')}}>Dollars</button>*/}
            {/*<button onClick={()=>{ButtonHandlerFiltracia('RUBLS')}}>RUBLS</button>*/}



            <ButtonMoneyFilter callBack={()=>{{ButtonHandlerFiltracia('ALL')}}} name={'ALL'}/>
            <ButtonMoneyFilter callBack={()=>ButtonHandlerFiltracia('RUBLS')} name={'RUBLS'}/>
            <ButtonMoneyFilter callBack={()=>ButtonHandlerFiltracia('Dollars')} name={'Dollars'}/>

        </div>
    )
}