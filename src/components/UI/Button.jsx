import styled from 'styled-components'

const Button = styled.button`
	font: inherit;
	font: inherit;
	padding: 0.5rem 1.5rem;
	border: 1px solid #8b005d;
	color: white;
	background: rgb(90, 172, 68);
	box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
	cursor: pointer;

	&:disabled,
	&:focus:disabled,
	&:hover:disabled,
	&:active:disabled {
		background: #ccc;
		border-color: #ccc;
		color: #666666;
		cursor: not-allowed;
	}
`
export default Button
