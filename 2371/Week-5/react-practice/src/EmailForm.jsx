import { useState } from "react";

function EmailForm() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!email.includes("@")) {
            setError("Invalid email address. Please include '@'.");
        } else {
            setError("");
            alert("Form submitted successfully!");
        }
    };

    return (
        <div className="card">
            <h2>Email Validation Form</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Enter your email:</label>
                <input
                    type="text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@mail.com"
                />
                <button type="submit">Submit</button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default EmailForm;