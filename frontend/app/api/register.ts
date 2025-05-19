import type { NextApiRequest, NextApiResponse } from 'next'

// Fake in-memory "database"
const users: { name: string; email: string; password: string, confirmPassword: string }[] = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, email, password, confirmPassword } = req.body

        // Basic validation
        if (!name || !email || !password || !confirmPassword) {
            return res.status(400).json({ error: 'All fields are required' })
        }

        // Check if user already exists
        const existingUser = users.find(user => user.email === email)
        if (existingUser) {
            return res.status(409).json({ error: 'User already exists' })
        }

        // Save user
        users.push({ name, email, password, confirmPassword })

        return res.status(201).json({ message: 'User registered successfully' })
    }

    return res.status(405).json({ error: 'Method not allowed' })
}
