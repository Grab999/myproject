import style from "../style.module.css";
import shortid from 'shortid'
const Form = ({todo, setTodo, todoList, setTodoList}) => {
    const handleChange = (event) => {
        setTodo (event.target.value);
        
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setTodoList ([...todoList, {name:todo,id: shortid.generate() }])
        console.log (todoList)
        setTodo("")
    }
    return(
        <div className={style.todoform}>
          <form onSubmit={handleSubmit}>
                <input value={todo} onChange={handleChange} className={style.todoinput} placeholder="Add todo item"></input>
                <button type="submit" className={style.todobutton}>Submit</button>
            </form>
        
        </div>
    )
}

export default Form;