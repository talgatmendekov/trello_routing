import React from 'react'
import styled from 'styled-components'
import AddTodoList from './AddTodoList'
import { useSelector } from 'react-redux'
const Card = () => {
	const todoCard = useSelector((state) => state.todo.todos)

	return (
		<GroupCardStyled>
			{todoCard.map((card) => (
				<AddTodoList key={card.id} todo={card.tasks} id={card.id} title={card.title} />
			))}
		</GroupCardStyled>
	)
}
const GroupCardStyled = styled.div`
	display: flex;
`

export default Card
