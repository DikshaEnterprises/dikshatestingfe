
import React, { useState, useEffect } from "react";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import app from "../firebase";
import { useNavigate } from "react-router-dom";
// import DikshaEnterprises from './images/logo2.png'
// import Image from "next/image";

// Sample country codes 
const countryCodes = [
    { code: "+91", name: "India" },
    { code: "+1", name: "United States" },
    { code: "+44", name: "United Kingdom" }
    // Add more country codes as needed 
];

export default function Login() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [confirmationResult, setConfirmationResult] = useState(null);
    const [otpSent, setOtpSent] = useState(false);
    const [sendingOtp, setSendingOtp] = useState(false);
    const [verifyingOtp, setVerifyingOtp] = useState(false);
    const [selectedCountryCode, setSelectedCountryCode] = useState(countryCodes[0].code); // Default to the first country code 
    const navigate = useNavigate();
   

    const auth = getAuth(app);
    //   const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
       
        if (token) {
            navigate("/"); // redirect to homepage or any protected route
        }
    }, [navigate]);
    useEffect(() => {
        if (window.recaptchaVerifier) {
            window.recaptchaVerifier.clear();
        }

        const recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
            size: 'normal',
            callback: (response) => {
                // Handle recaptcha success if needed 
            },
            'expired-callback': () => {
                // Handle recaptcha expiration if needed 
            }
        });
        window.recaptchaVerifier = recaptchaVerifier;
    }, [auth]);

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleOTPChange = (e) => {
        setOtp(e.target.value);
    };

    const handleCountryCodeChange = (e) => {
        setSelectedCountryCode(e.target.value);
    };

    const handleSendOtp = async () => {
        setSendingOtp(true); // Start the sending OTP state 
        try {
            // Verify reCAPTCHA
            await window.recaptchaVerifier.verify();

            const formattedPhoneNumber = phoneNumber.replace(/\D/g, '');
            const fullPhoneNumber = `${selectedCountryCode}${formattedPhoneNumber}`;

            const confirmation = await signInWithPhoneNumber(auth, fullPhoneNumber, window.recaptchaVerifier);
            setConfirmationResult(confirmation);
            setOtpSent(true);
            setPhoneNumber('');


        } catch (error) {
            console.error('Error sending OTP:', error);
            alert('Failed to send OTP. Please check the phone number and try again.');
        } finally {
            setSendingOtp(false); // End the sending OTP state 
        }
    };

    const handleOTPSubmit = async () => {
        setVerifyingOtp(true); // Start the verifying OTP state 
        try {
            if (!confirmationResult) {
                alert('No OTP sent. Please send OTP first.');
                return;
            }

            const userCredential = await confirmationResult.confirm(otp);
            console.log(userCredential);
            const user = userCredential.user;
            // Store user ID and token in localStorage
            const token = await user.getIdToken(); // Get the ID token
            localStorage.setItem('userId', user.uid);
            localStorage.setItem('token', token);
            localStorage.setItem('phoneNumber', user.phoneNumber);
            // Store the current timestamp
            const expirationDate = new Date().getTime() + 30 * 24 * 60 * 60 * 1000; // 30 days in milliseconds
            localStorage.setItem('tokenExpiration', expirationDate);

            setOtp('');
              navigate('/userName');
        } catch (error) {
            console.error('Error confirming OTP:', error);
            alert('Invalid OTP. Please try again.');
        } finally {
            setVerifyingOtp(false); // End the verifying OTP state 
        }
    };

    return (
        <div className="flex h-screen flex-col md:flex-row">
            {/* Image Half */}
            <div
                className="w-full md:w-1/2 h-64 md:h-auto"
                style={{
                    backgroundImage: "url('/images/logo2.png')",
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            />

            {/* Form Half */}
            <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-white">
                <div className="w-full max-w-md bg-gray-100 p-6 rounded-lg shadow-md">
                    <div className="text-white flex justify-center items-center mb-6 h-16 bg-[#ea5430] rounded-md">
                        <b>Welcome to Diksha Enterprises</b>
                    </div>

                    {!otpSent && <div id="recaptcha-container" className="mb-4" />}

                    {!otpSent ? (
                        <>
                            <div className="mb-4">
                                <select
                                    value={selectedCountryCode}
                                    onChange={handleCountryCodeChange}
                                    className="border border-gray-300 p-2 rounded-md w-full bg-gray-200"
                                >
                                    {countryCodes.map(({ code, name }) => (
                                        <option key={code} value={code}>
                                            {name} ({code})
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <input
                                    type="tel"
                                    value={phoneNumber}
                                    onChange={handlePhoneNumberChange}
                                    placeholder="Enter Phone Number"
                                    className="border border-gray-300 p-2 rounded-md w-full bg-gray-200 text-black"
                                />
                            </div>
                        </>
                    ) : (
                        <div className="mb-4">
                            <input
                                type="text"
                                value={otp}
                                onChange={handleOTPChange}
                                placeholder="Enter OTP"
                                className="border border-gray-300 p-2 rounded-md w-full bg-gray-200"
                            />
                        </div>
                    )}

                    <button
                        onClick={otpSent ? handleOTPSubmit : handleSendOtp}
                        className="text-white p-2 rounded-md w-full bg-[#ea5430] hover:bg-[#ea5430] flex items-center justify-center"
                        disabled={sendingOtp || verifyingOtp}
                    >
                        {sendingOtp
                            ? 'Click on Captcha Verification..'
                            : verifyingOtp
                                ? 'Verifying...'
                                : otpSent
                                    ? 'Submit OTP'
                                    : 'Send OTP'}
                    </button>
                </div>
            </div>
        </div>

    );
}
