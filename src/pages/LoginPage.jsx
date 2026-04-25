import { use, useState } from "react";


export default function LoginPage() {

    // state
    const [mode, setMode] = useState("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});


    //Logic to validate errors
    const validate = () => {
        const e = {}

        if (!email) {
            e.email = "Email is required";
        } else if (!/\S+@\.\S+/.test(email)) { //calling the test method will return true if email matches the pattern
            e.email = "Enter a valid email";
        }


        if (!password) {
            e.password = "Password is Required";
        } else if (password.length < 6){
            e.password = "Minimum 6 characters";
        }

        return e;
    };


    //Logic to handle submission

    const handleSubmit = async () => {
        const e = validate();

        //This functions will show and stop errors if there are any
        if(Object.keys(e).length) {
            setErrors(e);
            return;
        }

        setErrors({});
        setLoading(true);

        //This function will simulate API calls for authentication
        await new Promise(r => setTimeout(r, 1500));

        setLoading(false);
        alert("Logged in!");
    };

    return(
        <div className="login-root">
            <div className="login-card">
                <h1>Welcome back</h1>
            </div>
        </div>
    );
}