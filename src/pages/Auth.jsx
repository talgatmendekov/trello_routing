import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/UI/Button'
import useInput from '../hooks/useInput'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store/authSlice'
import { EMAIL_REGEX, PASSWORD_REGEX } from '../helpers/constants'

const Auth = () => {
	const navigate = useNavigate()
	const inputEmail = useInput(EMAIL_REGEX)
	const inputPassword = useInput(PASSWORD_REGEX)

	const dispatch = useDispatch()

	const userAuth = useSelector((state) => state.auth.isAuthenticated)
	const userStatus = useSelector((state) => state.auth.message)
	const loginHandler = (event) => {
		event.preventDefault()
		dispatch(
			authActions.login({
				email: inputEmail.inputValue,
				password: inputPassword.inputValue,
			}),
		)
	}

	if (userAuth === true) {
		navigate('/todo')
	}

	// let userStatus = ''

	// if (userAuth === false) {
	// 	userStatus = <p>Аккаунта с таким именем пользователя не существует</p>
	// }

	let emailStatus = ''
	if (inputEmail.inputIsInValid) {
		emailStatus = 'Отсутствует адрес электронной почты'
	};

	
	return (
		<>
			<div>
				<img src='https://www.vectorlogo.zone/logos/trello/trello-official.svg' />
			</div>

			<AuthSection>
				<div>
					<p style={{color: 'red'}}>{emailStatus || userStatus}</p>
					</div>

				<h1>Вход в Trello</h1>

				<form onSubmit={loginHandler}>
					<input
						onChange={inputEmail.onChange}
						type='email'
						placeholder='Укажите адрес электронной почты'
						onBlur={inputEmail.onBlur}
					/>

					<input
						type='password'
						placeholder='Введите пароль'
						onChange={inputPassword.onChange}
						onBlur={inputPassword.onBlur}
					/>

					<Button>Войти</Button>
				</form>
			</AuthSection>
		</>
	)
}

const AuthSection = styled.section`
	width: 400px;
	margin: 30px auto;
	height: 615px;
	box-shadow: rgb(0 0 0 / 10%) 0 0 10px;
	& h1 {
		text-align: center;
		color: #5e6c84;
		font-size: 16px;
		letter-spacing: -0.01em;
		line-height: 28px;
		margin-top: 10px;
		margin-bottom: 25px;
		padding-top: 30px;
	}
	& form {
		display: flex;
		flex-direction: column;
		align-items: center;
		input {
			width: 320px;
			height: 44px;
			padding: 0.5rem;
			background: #fafbfc;
			margin-bottom: 1.2rem;
			color: #4d4d4d;
			border: 2px solid #dfe1e6;
		}
		input:focus {
			outline-color: hsl(202deg 87% 51%);
		}
		button {
			width: 320px;
		}
	}
`

export default Auth
