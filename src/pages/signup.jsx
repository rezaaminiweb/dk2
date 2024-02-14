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
                        <div className="p-5 border rounded-md border-[#00000056]">
                            <div className="">
                                <figure className="items-center flex flex-col">
                                    <img src={digiicon} alt="" />
                                    <figcaption className=" py-3 ">
                                        <div className="flex items-center text-[#000]">
                                            <p className="text-2xl font-bold">
                                                صفحه
                                            </p>
                                            <span className="mx-2">|</span>
                                            <p className="text-2xl font-bold">
                                                ورود
                                            </p>
                                        </div>
                                        <p className="text-sl font-bold text-[#000000c1]">
                                            سلام!
                                        </p>
                                        <p className="text-sl font-bold text-[#000000c1]">
                                            لطفا نام کاربری و رمز عبور خود را وارد کنید.
                                        </p>
                                    </figcaption>
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
                                    <input type="text" id="password" value={state.password} onChange={(e) => {
                                        dispatch({
                                            type: 'field',
                                            fieldName: 'password',
                                            payload: e.target.value
                                        })
                                    }} />
                                </div>
                                <div>
                                    <button >
                                        ورود
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default SignUp