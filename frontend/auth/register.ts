const bcrypt = require('bcrypt');
import UserRegisterSchema from '@/models/UserRegister';

const UserRegisterController = {
    async registerUser(req: any, res: any) {
        try {
            const { name, email, password, confirmPassword, terms } = req.body;

            // Check if all fields are provided
            if (!name || !email || !password || !confirmPassword || terms === undefined) {
                return res.status(400).json({ message: 'All fields are required' });
            }

            // Check if passwords match
            if (password !== confirmPassword) {
                return res.status(400).json({ message: 'Passwords do not match' });
            }

            // Check if user already exists
            const existingUser = await UserRegisterSchema.findOne({ email });
            if (existingUser) {
                return res.status(409).json({ message: 'User already exists' });
            }

            // Hash the password
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create new user
            const newUser = new UserRegisterSchema({
                name,
                email,
                password: hashedPassword,
                confirmPassword: hashedPassword,
                terms,
            });

            await newUser.save();

            return res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            console.error('Error registering user:', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}
