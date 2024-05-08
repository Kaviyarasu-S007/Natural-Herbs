const User = require('../models/User'); // Import the User model

exports.register = async (req, res) => {
    const { email, password, name, Phone_Number } = req.body;

    try {
        // Check if the email is already registered
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Create a new user
        const newUser = new User({
            email,
            password,
            name,
            Phone_Number
        });

        // Save the user to the database
        await newUser.save();

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Server error" });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Check if the password is correct
        const isPasswordValid = await user.comparePassword(password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid password" });
        }

        // If the email and password are correct, send "Login successful"
        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ message: "Server error" });
    }
};

exports.logout = async (req, res) => {
    // Logic for user logout, such as destroying the session or token
    
    // Send "Logout successful"
    res.status(200).json({ message: "Logout successful" });
};
