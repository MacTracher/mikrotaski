type StudentType = {
    id: number;
    name: string;
    age: number;
}


type NewComponentType = {
    students: Array<StudentType>;
}

const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

export const NewComponent = (props: NewComponentType) => {
    type TopCarsType = {
        manufacturer: string,
        model: string,
    }
    return (

        <>

            <tr>

                {topCars.map((car, index) => {
                    return (<th key={index}>
                        <div style={{paddingLeft:30}}>Manufacturer: {car.manufacturer}</div>
                        <span style={{paddingLeft:20}}> Model: {car.model}</span>
                    </th>)
                })}
            </tr>


            <ul>

                {props.students.map((student, index) => {
                    debugger
                    return (
                        <li key={student.id}>
                            {student.name}
                            <span>, age:{student.age}</span>

                        </li>
                    )

                })}

            </ul>

        </>


    )
}




