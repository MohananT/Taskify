import React, { FormEvent, useRef } from 'react';
import "./styles.css";

type InputFieldProps = {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleEvent: (e: FormEvent) => void;
}

const InputField = ({ todo, setTodo, handleEvent }: InputFieldProps): JSX.Element => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form className='input' onSubmit={(e) => {
            handleEvent(e);
            inputRef.current?.blur();
        }
        }>
            <input type='text' className='input__box'
                placeholder='Enter a task' onChange={(e) => setTodo(e.target.value)} ref={inputRef} value={todo} />
            <button type='submit' className='input__submit'>
                GO
            </button>
        </form>
    )
}

export default InputField;
