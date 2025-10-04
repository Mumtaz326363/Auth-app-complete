```js


return res.status(201).json({ message: 'User created' });
} catch (err) {
console.error(err);
return res.status(500).json({ message: 'Server error' });
}
};


const login = async (req, res) => {
try {
const { username, password } = req.body;
if (!username || !password) return res.status(400).json({ message: 'Missing fields' });


const user = await User.findOne({ username });
if (!user) return res.status(401).json({ message: 'Invalid credentials' });


const match = await bcrypt.compare(password, user.passwordHash);
if (!match) return res.status(401).json({ message: 'Invalid credentials' });


// Create JWT
const payload = { id: user._id, username: user.username };
const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });


return res.json({ token, username: user.username });
} catch (err) {
console.error(err);
return res.status(500).json({ message: 'Server error' });
}
};


const me = async (req, res) => {
// req.user populated by middleware
try {
const { id, username } = req.user;
return res.json({ id, username });
} catch (err) {
console.error(err);
return res.status(500).json({ message: 'Server error' });
}
};


module.exports = { signup, login, me };
```