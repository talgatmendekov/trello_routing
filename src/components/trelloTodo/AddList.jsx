import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { todoActions } from '../../store/todoSlice';
import styled from 'styled-components'

const AddList = () => {
    const [title, setTitle] = useState('');
    // console.log(title)

    const dispatch = useDispatch();

    const inputChangeHandler = (event) => {
        setTitle(event.target.value)
    };

    const addTodoHandler = (event) => {
      event.preventDefault()
      dispatch(todoActions.addTodo({
        title: title,
        id: Math.random().toString()
      }))
      setTitle('')

    };
  return (
    <StyledForm>
      <input value={title} type= 'text'  onChange={inputChangeHandler}></input>
      <button type='submit' onClick={addTodoHandler}>Добавить список</button>
      <button>X</button>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  input{
    width:90%;
    padding:  0.5rem;
    color: #6b778c;
    outline-color: blue;
    border: 0.5px solid blue;
  }
  button{
        padding: 0.5rem;
        color: white;
        background-color: #0079BF;
        margin-left: 1rem;
    }
`

export default AddList;