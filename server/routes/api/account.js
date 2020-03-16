const User = require('../../models/User');
const UserSession = require('../../models/UserSession');

module.exports = app => {
    app.post('/api/account/register', (req, res) => {
        const { body } = req;
        const { password } = body;
        let { username } = body;

        if (!username) {
            return res.send({
                success: false,
                message: 'Error: Username cannot be blank'
            });
        }
        if (!password) {
            return res.send({
                success: false,
                message: 'Error: Password cannot be blank'
            });
        }
        username = username.trim();

        User.find({
            username: username
        }, (err, existingUsers) => {
            if (err) {
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            } else if (existingUsers.length > 0) {
                return res.send({
                    success: false,
                    message: 'Error: Username is not available'
                });
            }

            // Save the new user
            const newUser = new User();
            newUser.username = username;
            newUser.password = newUser.generateHash(password);

            newUser.save((err, user) => {
                if (err) {
                    return res.send({
                        success: false,
                        message: 'Error: Server error'
                    });
                }
                return res.send({
                    success: true,
                    message: 'Registration successful'
                });
            });
        });
    });

    app.post('/api/account/login', (req, res) => {
        const { body } = req;
        const { password } = body;
        let { username } = body;

        if (!username) {
            return res.send({
                success: false,
                message: 'Error: Username cannot be blank'
            });
        }
        if (!password) {
            return res.send({
                success: false,
                message: 'Error: Password cannot be blank'
            });
        }

        username = username.trim();

        User.find({
            username: username
        }, (err, users) => {
            if (err) {
                console.log('err 2:', err);
                return res.send({
                success: false,
                message: 'Error: Server error'
                });
            }

            if (users.length != 1) {
                return res.send({
                success: false,
                message: 'Error: Invalid'
                });
            }

            const user = users[0];
            if (!user.validPassword(password)) {
                return res.send({
                success: false,
                message: 'Error: Invalid'
                });
            }
            
            // Otherwise correct user
            const userSession = new UserSession();
            userSession.userId = user._id;
            userSession.save((err, doc) => {
                if (err) {
                console.log(err);
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
                }
                return res.send({
                success: true,
                message: 'Log in successful',
                token: doc._id
                });
            });
        });
    });

    app.get('/api/account/logout', (req, res) => {
        const { query } = req;
        // ?token=
        const { token } = query;

        UserSession.findOneAndUpdate({
            _id: token,
            isDeleted: false
        }, {
            $set: {
                isDeleted: true
            }
        }, null, (err, sessions) => {
            if (err) {
                console.log(err);
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }
            return res.send({
                success: true,
                message: 'Log out successful'
            });
        });
    });

    app.get('/api/account/verify', (req, res) => {
        const { query } = req;
        // ?token=
        const { token } = query;

        UserSession.find({
            _id: token,
            isDeleted: false
        }, (err, sessions) => {
            if (err) {
                console.log(err);
                return res.send({
                    success: false,
                    message: 'Error: Server error'
                });
            }
            if (sessions.length != 1) {
                return res.send({
                    success: false,
                    message: 'Error: Invalid'
                });
            } else {
                return res.send({
                    success: true,
                    message: 'Success'
                });
            }
        });
    });
};