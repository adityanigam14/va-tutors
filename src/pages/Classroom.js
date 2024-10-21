import { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; 

export default function Classroom() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [authError, setAuthError] = useState('');
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const validateSubmit = async () => {
        let isValid = true;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email.');
            isValid = false;
        } else {
            setEmailError('');
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (!passwordRegex.test(password)) {
            setPasswordError('Password must be at least 8 characters long, including uppercase and lowercase letters.');
            isValid = false;
        } else {
            setPasswordError('');
        }

        if (isValid) {
            try {
                if (isLoginMode) {
                    await signInWithEmailAndPassword(auth, email, password);
                    alert("Welcome back! You've been logged in.");
                    setIsLoggedIn(true);
                } else {
                    await createUserWithEmailAndPassword(auth, email, password);
                    alert("Account created! You've been signed up and logged in.");
                    setIsLoggedIn(true);
                }
            } catch (error) {
                setAuthError(error.message);
            }
        }
    };

    return (
        <div className="flex flex-col my-8 w-screen">
            <h1 className="text-5xl font-bold text-center mb-8 mt-4">VA Classroom</h1>
            {isLoggedIn ? (
                <>
                    <div className="flex flex-col items-center bg-blue-300">
                        <p className="text-lg my-10">Welcome! You are in no classrooms as of now. Fill out the student application to join classrooms.</p>
                    </div>
                    <div className="flex flex-col items-center mb-72 bg-blue-400">
                    </div>
                    <div className="flex flex-col items-center mb-72 bg-blue-400">
                    </div>
                </>
            ) : (
                <>
                    <div className="bg-blue-300 h-84 flex justify-center items-center">
                        <div className="text-center p-10 max-w-7xl">
                            <p className="text-lg text-center">
                                VA Classroom is a <b>work-in-progress</b> tool that immerses students and tutors in compact, interactive classrooms.
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 w-4/5 mx-auto text-center my-10">
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold">Share Material</h3>
                            <p className="text-lg my-2">Tutors can provide links, walkthroughs, and other resources to students, supporting their progress.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold">Form Bonds</h3>
                            <p className="text-lg my-2">Interactive chat rooms grant spaces for engaging chats and getting involved in our community.</p>
                        </div>
                        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold">Stay Resources</h3>
                            <p className="text-lg my-2">This structured platform monitors all tutoring information without having to leave our website.</p>
                        </div>
                    </div>
                    <div className="bg-cyan-800 h-28 flex justify-center items-center">
                        <h2 className="text-center text-bold text-white text-3xl p-10">Log In / Sign Up</h2>
                    </div>
                    <div className="flex flex-col items-center mt-8">
                        <div className="flex-row mb-4">
                        <button
                            onClick={() => setIsLoginMode(true)}
                            className={`px-4 py-2 ${isLoginMode ? 'bg-blue-400' : 'bg-gray-300'} ${isLoginMode ? 'text-white' : 'text-gray-500'} rounded-lg`}
                        >
                            Log In
                        </button>
                        <button
                            onClick={() => setIsLoginMode(false)}
                            className={`px-4 py-2 ${!isLoginMode ? 'bg-blue-400' : 'bg-gray-300'} ${isLoginMode ? 'text-gray-500' : 'text-white'} rounded-lg`}
                        >
                            Sign Up
                        </button>
                        </div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-1/4 mb-4 p-2 rounded-lg border border-gray-300 focus:border-blue-500 text-blue-500 focus:outline-none"
                        />
                        {emailError && <p className="text-red-500 text-sm mb-4">{emailError}</p>}

                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-1/4 mb-4 p-2 rounded-lg border border-gray-300 focus:border-blue-500 text-blue-500 focus:outline-none"
                        />
                        {passwordError && <p className="text-red-500 text-sm mb-4">{passwordError}</p>}

                        <button
                            onClick={validateSubmit}
                            className="bg-blue-400 text-white py-2 text-lg rounded-lg shadow-md hover:opacity-90 transition duration-500 w-1/6"
                        >
                            {isLoginMode ? 'Log In' : 'Sign Up'}
                        </button>

                        {authError && <p className="text-red-500 text-sm mt-4">{authError}</p>}
                    </div>
                </>
            )}
        </div>
    );
}
