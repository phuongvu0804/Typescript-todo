import { todoType } from "../types";

interface Props {
    todoList: todoType[];
    setTodo: React.Dispatch<React.SetStateAction<todoType[]>>;
    data: todoType;
    isCompleted: boolean;
    setCompleted: React.Dispatch<React.SetStateAction<boolean>>;
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    setEdited: React.Dispatch<React.SetStateAction<boolean>>;
    
} 

const TodoItem: React.FC<Props> = (props) => {
    const { data, todoList, setTodo, setInput, setEdited } = props;


    const handleComplete = () => {
        const updatedList = todoList.map(item => {
            if (item.id === data.id) {
                return {
                    ...item,
                    isCompleted: !item.isCompleted,
                }
            } else {
                return {...item}
            }
        })

        setTodo(updatedList)
    }

    const handleDelete = () => {
        const updatedList = todoList.filter(item => item.id !== data.id)

        setTodo(updatedList)
    }

    const handleEdit = () => {
        const updatedList = todoList.map(item => {
            if (item.id === data.id) {
                return {
                    ...item,
                    isEdited: !item.isEdited
                }
            } else {
                return {...item, isEdited: false}
            }

        })
        setTodo(updatedList)

        if (!data.isEdited) {
            setInput(data.content)
            setEdited(true)
        } else {
            setInput("")
            setEdited(false)
        }

    }

  return (
    <li className={data.isCompleted ? "app__item completed" : "app__item"}>
      <span>{data.content}</span>
      <div className="app-item__btns">
        <button className="app__btn app__btn--complete" onClick={handleComplete}>
            {data.isCompleted ? "Completed" : "Complete"}
        </button>
        <button className={data.isEdited ? "app__btn app__btn--edit editting" : "app__btn app__btn--edit"} onClick={handleEdit}>
            {data.isEdited ? "Editting" : "Edit"}
        </button>
        <button className="app__btn app__btn--delete" onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

export default TodoItem;
