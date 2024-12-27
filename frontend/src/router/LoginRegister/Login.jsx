import { useContext } from 'react';
import { json, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/useAuthContext';



const Login = () => {

    const navigate = useNavigate();


    async function connect(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        };

        try {
            const response = await fetch('http://localhost:8000/api/login/', requestOptions);

            if (!response.ok) {
                // If the response status is not 200-299, throw an error
                const errorData = await response.json();
                // if (errorData.email) {
                //     alert(errorData.email); // Handle email-specific errors
                // } else {
                //     alert("An unexpected error occurred.");
                // }
                alert(errorData);
                return; // Stop further execution
            }

            const data = await response.json();
            

            localStorage.setItem("codex-user", JSON.stringify(data));
            
            navigate('/');
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to connect to the server. Please try again later.");
        }


    }

    // async function handelForgotPassword(e) {
    //     e.preventDefault();

    //     const email = document.getElementById('email').value;

    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 
    //             'Content-Type': 'application/json',
    //          },
    //         body: JSON.stringify({ email })
    //     };

    //     try {
    //         const response = await fetch('http://localhost:8000/api/forgot-password/', requestOptions);

    //         if (!response.ok) {
    //             // If the response status is not 200-299, throw an error
    //             const errorData = await response.json();

    //             alert(errorData); // Handle email-specific errors

    //             return; // Stop further execution
    //         }

    //         const data = await response.json();
    //         console.log(data);

    //         // localStorage.setItem("codex-user", JSON.stringify(data));
    //         // setAuthUser(data);
    //         // navigate('/');
    //     } catch (error) {
    //         console.error("Error:", error);
    //         alert("Failed to connect to the server. Please try again later.");
    //     }

    // }
    return (
        <>
            <div className='h-screen w-full '>

                <div className="flex h-screen w-full items-center justify-center bg-[#111111]">


                    <div className="z-10 bg-[#191919] w-full max-w-md overflow-hidden rounded-2xl border border-[#5cab8b71] shadow-xl">
                        <div className="flex flex-col items-center justify-center space-y-3 border-b border-[#5cab8b71]  px-4 py-6 pt-8 text-center sm:px-16">
                            <h3 className="text-xl font-semibold text-gray-200">Log in</h3>
                            <p className="text-sm text-gray-400">
                                Use your email and password to log in
                            </p>
                        </div>
                        <form onSubmit={(e) => connect(e)} className="flex flex-col space-y-4  px-4 py-2 sm:px-16">
                            <div>
                                <label htmlFor="email" className="block text-xs text-gray-400 uppercase">
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="user@gmail.com"
                                    autoComplete="email"
                                    required
                                    className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-xs text-gray-400 uppercase">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                                />

                                {/* <button onClick={(e) => {
                                    handelForgotPassword(e)
                                }} className=' uppercase text-[#5CAB8C] text-xs font-mono hover:scale-105'>forgot password</button> */}
                            </div>
                            <button type="submit" className="w-full text-white bg-[#5CAB8C] hover:bg-[#5cab8bb0] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#5CAB8C] dark:hover:bg-[#5cab8bb0] focus:outline-none dark:focus:ring-[#5cab8bb0]">
                                Log in
                            </button>
                        </form>
                        <div className="flex items-center justify-center pb-2">
                            <p className="text-gray-500">or</p>
                        </div>
                        {/* <div className="w-full text-center flex items-center justify-center ">
                            <button type="button" className="w-[318px] flex items-center justify-center gap-2 text-gray-900  hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-gray-600 dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="28" height="28" viewBox="0 0 48 48">
                                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                </svg>
                                Log in with Google
                            </button>
                        </div> */}
                        <p className="text-center text-sm text-gray-600 pb-4">
                            {"Don't have an account? "}
                            <Link to="/register" className="font-semibold text-gray-200">
                                Sign up
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Login;
