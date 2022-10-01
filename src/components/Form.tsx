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

    const handleInput = (e: React.FormEvent<HTMLInputElement>):void => {
        setInput(e.currentTarget.value)
    }

    const addTodo = (input: string):void => {
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
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void => {
        e.preventDefault();

        if (input !== "") {
            addTodo(input)
    
            setInput("")
        }
    }

  return (
    <form className="app__input-wrapper"  onSubmit={handleSubmit}>
      <input className="app__input" type="text" required value={input || ""} onChange={(e) => handleInput(e)}/>
      <button type="submit" className="app__btn app__btn--submit">Submit</button>
    </form>
  );
};

export default Form;
