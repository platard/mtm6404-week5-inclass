const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
// // root.render(<ToggleButton />);



// Array Destructuring
const temperatures = [28, 32, 25, 30, 22]

const [ ,tuesday, wednesday,,friday] = temperatures




// Object Destructuring
const person = {
    name: 'John',
    age: 30
  }

const {name, city } = person



// Event handling
const EventButton = () => {
    const handleButtonClick = () => console.log('Button clicked!') 
    
    return (
        <div>
            <h1>Event Handling Example</h1>
            <button onClick={handleButtonClick}>Click Me</button>
        </div>
    )
}

root.render(<EventButton />)





//State Management
function Counter() {
    const [count, setCount] = React.useState(0);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
    };
  
    return (
      <div>
        <h1>Counter</h1>
        <div>Count: {count}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  }

  root.render(<Counter />)




// Forms
// 
//
const ContactForm = (props) => {
    const [query, setQuery] = React.useState('')
    const [students, setStudents] = React.useState(data)

    const formHandler = (e) => { e.preventDefault()}

    React.useEffect( () => {setStudents(data.filter((student) => student.name.includes(query))) }, [query] )

    const inputHandler = (e) => {setQuery(e.target.value)}

    return (
        <>
          <form onSubmit={formHandler}>
              <input type="text" value={query} onChange={inputHandler} placeholder="Name" />
          </form>
          <ListData students={students}/>
        </>
    )
}
root.render(<ContactForm />)


function ListData (props){
  const students = props.students
  const studentList = students.map((student) => <li key={student.id}>{student.name}</li>)

  return (
    <ul>
      {studentList}
    </ul>
  )
}

const data = [
  { name: "John", id: 1 },
  { name: "Emily", id: 2 },
  { name: "Michael", id: 3 },
  { name: "Sophia", id: 4 },
  { name: "William", id: 5 },
  { name: "Olivia", id: 6 },
  { name: "Daniel", id: 7 },
  { name: "Eva", id: 8 },
  { name: "James", id: 9 },
  { name: "Isabella", id: 10 }
];

