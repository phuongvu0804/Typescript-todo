import { todoType } from "../types";

interface Props {
    todo: todoType[];
    setTodo: React.Dispatch<React.SetStateAction<todoType[]>>;
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    isEdited: boolean;
}

const Form: React.FC<Props> = (props) => {
    const { todo, setTodo, input, setInput, isEdited  } = props;

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value)

    }

    const handleSubmit = () => {
        if (input !== "") {
            if (isEdited) {
                const updatedList = todo.map(item => {
                    if (item.isEdited) {
                        return {
                            ...item,
                            content: input,
                            isEdited: false,
                        }
                    } else {
                        return {...item}
                    }
                })
                setTodo(updatedList)
    
            } else {
                setTodo(prev => [...prev, {
                    id: todo.length + 1,
                    content: input,
                    isCompleted: false,
                    isEdited: false
                }])
            }
    
            setInput("")
        }
    }

  return (
    <div className="app__input-wrapper">
      <input className="app__input" type="text" required value={input || ""} onChange={(e) => handleInput(e)}/>
      <button className="app__btn app__btn--submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Form;
