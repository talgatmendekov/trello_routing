import { createSlice } from '@reduxjs/toolkit'

const users = [
    {
        email: 'talgatmendekov@gmail.com',
        password: '1234567',
    },
    {
        email: 'maksatmendekov@gmail.com',
        password: '7654321',
    }
] 

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		userProfiles: users,
		isAuthenticated: null,
        message: ''
	},
	reducers: {
		login(state, actions) {
            console.log(actions)
            for(const user of users){
                if (user.password === actions.payload.password && user.email === actions.payload.email){
                    state.isAuthenticated = true
                    break;
                }else {
                    state.isAuthenticated = false
                    state.message = 'Аккаунт с таким адресом электронной почты не существует'
                }
                
            };
			
		},
		logout(state) {
            state.isAuthenticated = true;
            state.message = ''
        },
	},
})

export const authActions = authSlice.actions
export default authSlice
