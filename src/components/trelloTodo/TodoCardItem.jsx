import React, { useState } from 'react'
import icon from '../../assets/image/edit-icon.svg'
import TodoModal from '../UI/TodoModal'

const TodoCardItem = ({ task }) => {
	const [showEditModal, setShowEditModal] = useState(false)
	console.log(showEditModal)

	const showEditModalHandler = () => {
		setShowEditModal((prevState) => (prevState = !prevState))
	}
	return (
		<>
			{showEditModal && <TodoModal onConfirm={showEditModalHandler} title = {task}/>}
			<li onClick={showEditModalHandler}>
				<span>
					{task}
					<img src={icon} alt='иконка_редактирования' />
				</span>
			</li>
		</>
	)
}

export default TodoCardItem
