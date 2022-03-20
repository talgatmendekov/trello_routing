import React from 'react'
import styled from 'styled-components'
import Button from '../UI/Button'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/image/search_icon.png'
import { useDispatch } from 'react-redux'
import { authActions } from '../../store/authSlice'

const Header = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const logoutHandler = () => {
		dispatch(authActions.logout)
		navigate('/Login')
	}
	return (
		<HeaderDiv>
			<div className='nav_block'>
				<img src='https://img.icons8.com/color/48/000000/trello.png' />
				<h1>TRELLO</h1>
				<ul>
					<li>Рабочие пространства</li>
					<li>Недавние</li>
					<li>В избранном</li>
					<li>Шаблоны</li>
				</ul>
				<Button onClick={logoutHandler}>Выйти</Button>
			</div>

			<div>
				<div className='search'>
					<img src={logo} alt='search_icon' />
					<input placeholder='Search' type='search' />
				</div>
			</div>
		</HeaderDiv>
	)
}
const HeaderDiv = styled.div`
	position: fixed;
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	background: #535c65;
	.nav_block {
		display: flex;
		justify-content: space-around;
		align-items: center;
		h1 {
			color: #ffffff;
		}
		ul {
			display: flex;
			padding: 35px;
			li {
				list-style: none;
				padding: 15px;
				color: #ffffff;
			}
		}
		img {
			width: 30px;
		}
		h1 {
			font-size: 25px;
		}
		button {
			width: 100px;
			height: 32px;
			background: #757d84;
			color: #ffffff;
			border-radius: 6px;
			border: none;
			&:hover {
				opacity: 0.8;
			}
		}
	}
	.search {
		display: flex;
		background: #757d84;
		width: 250px;
		height: 34px;
		border-radius: 6px;
		padding: 2px;
		input {
			background: none;
			border: none;
			outline: none;
			padding: 5px;
			font-size: 16px;
			&::placeholder {
				color: #ffffff;
			}
		}
		img {
			width: 30px;
		}
	}
`

export default Header
