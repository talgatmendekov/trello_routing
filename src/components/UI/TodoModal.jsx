import React from "react"
import ReactDOM from 'react-dom'
import icon from '../../assets/image/close_icon.svg'
import styled from 'styled-components'


const BackDrop = (props) => {
	return (
        <StyledBackDrop onClick={props.onConfirm}></StyledBackDrop>
    )
}

const ModalOverlay = (props) => {
	return (
		<StyledModal>
			<header>
				<textarea>{props.title}</textarea>
                <img src={icon} onClick={props.onConfirm}/>
			</header>
			<main>
				<h3>Описание</h3>
                <textarea placeholder="Добавить более подробное описание"></textarea>
			</main>
			<footer>
				
			</footer>
		</StyledModal>
	)
}

const TodoModal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<BackDrop onConfirm={props.onConfirm} />,
				document.getElementById('backdrop-root'),
			)}
			{ReactDOM.createPortal(
				<ModalOverlay
					title={props.title}
					message={props.message}
					onConfirm={props.onConfirm}
                    children = {props.children}
				/>,
                document.getElementById("modal-root")
			)}
		</>
	)
}


const StyledBackDrop = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
z-index: 10;
background: rgba(0, 0, 0, 0.75);
`

const StyledModal = styled.div`
position: fixed;
top: 10vh;
left: 60vh;
width: 50%;
z-index:100;
overflow: hidden;
background: #F4F5F7;
header{
    padding: 1rem;
    display: flex;
    textarea{
        width: 672px;
        color: #707D92;
        height: 1.8rem;
        font-weight: 600;
        font-size: 1.4rem;
        background-color: #F4F5F7;
        border: none;
        :active {
            height: 1.8rem;
            border: 1px solid blue;
        }
    }
    img{
        width: 15px;
    }
}
main{
    padding: 1rem;
    h3{
        color: #707D92;
        font-weight: 600;
    }
    textarea {
        margin-top: 1rem;
        resize: vertical;
        width: 60%;
        height: 55px;
        background-color: #EAECF0;
        border: none;
    }
}
footer{
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
}

`
export default TodoModal
