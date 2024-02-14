import digiicon from "./../assets/img/logo.svg"

import { useReducer } from "react"

const SignUp = () => {
    const initialState = {
        id: 1,
        userName: '',
        password: ''
    }
    function usereduser(state, action) {
        switch (action.type) {
            case "login": {
                return {

                    ...state,
                    userName: '',
                    password: ''
                }

            }
            case "field": {
                return {
                    ...state,
                    [action.fieldName]: action.payload,

                }
            }
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const [state, dispatch] = useReducer(usereduser, initialState);
    return (
        <>
            <div className="w-full">
                <div className="container mx-auto">
                    <div className="w-full h-screen flex justify-center items-center">
                        <div className="p-5 border border-black">
                            <div className="">
                                <figure>
                                    <img src={digiicon} alt="" />
                                </figure>
                                
                            </div>
                            <form onSubmit={e => handleSubmit(e)}>
                                <div>
                                    <label htmlFor="username">
                                        نام کاربری
                                    </label>
                                    <input type="text" id="username" value={state.userName} onChange={e => {
                                        dispatch({
                                            type: 'field',
                                            fieldName: 'userName',
                                            payload: e.target.value
                                        })
                                    }} />

                                </div>
                                <div>
                                    <label htmlFor="password">رمز عبور</label>
                                    <input type="text" id="passwrod" value={state.password} onChange={(e) => {
                                        dispatch({
                                            type: 'field',
                                            fieldName: 'password',
                                            payload: e.target.value
                                        })
                                    }} />
                                </div>
                                <button >
                                    ورود
                                </button>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default SignUp