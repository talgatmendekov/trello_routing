import React from 'react'
import styled from 'styled-components'
import Header from '../components/header/Header'
import Card from '../components/trelloTodo/Card'
import TodoList from '../components/trelloTodo/TodoList'

const Todo = () => {
	return (
		<BackgroundDiv>
			<Header></Header>
			<GroupTodosStyled>
				<Card />
				<TodoList />
			</GroupTodosStyled>
		</BackgroundDiv>
	)
}

const GroupTodosStyled = styled.div`
	display: flex;
	padding-top: 100px;
`

const BackgroundDiv = styled.div`
	background-image: url('https://wallpaperaccess.com/full/1238742.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	width: 100%;
	height: 100%;
	position: absolute;
`

export default Todo
