import './List.module.css';
let List = ({studentList, setStudentList}) => {
    return(
        <ul>
            <h4>Student's List</h4>
            {
                studentList.map((student, i) => {
                    return(
                        <div key={i}>
                            <li>
                                Name : {student.name} <br/>
                                Group : {student.group} <br/>
                                Year : {student.year} <br/>
                            </li>
                            <hr></hr>
                        </div>
                    )
                })        
            }
        </ul>
    )
}

export default List;