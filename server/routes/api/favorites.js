const User = require('../../models/User');
const UserSession = require('../../models/UserSession');

module.exports = app => {
    app.put('/api/favorites', (req, res) => {
        const { body, query } = req;
        const { token } = query;        // ?token=
        const { item } = body;
        
        UserSession.find({
            _id: token,
            isDeleted: false
        }, (err, sessions) => {
            if (err) {
                console.error(err);
                return res.send({
                    success: false,
                    message: 'Server error'
                });
            }
            if (sessions.length != 1) {
                return res.send({
                    success: false,
                    message: 'Invalid session'
                });
            } else {
                User.findOneAndUpdate({
                    _id: sessions[0].userId,
                    isDeleted: false
                }, {
                    $push: {
                        favorites: item
                    }
                }, {
                    new: true
                }, (err, user) => {
                    if (err) {
                        console.error(err);
                        return res.send({
                            success: false,
                            message: 'Server error'
                        });
                    }
                    return res.send({
                        success: true,
                        message: 'Add favorite successful',
                        favorites: user.favorites
                    });
                })
            }
        });
    });

    app.delete('/api/favorites', (req, res) => {
        const { query } = req;
        const { item_id, token } = query;        // ?token=&item_id=

        UserSession.find({
            _id: token,
            isDeleted: false
        }, (err, sessions) => {
            if (err) {
                console.error(err);
                return res.send({
                    success: false,
                    message: 'Server error'
                });
            }
            if (sessions.length != 1) {
                return res.send({
                    success: false,
                    message: 'Invalid session'
                });
            } else {
                User.findOneAndUpdate({
                    _id: sessions[0].userId,
                    isDeleted: false
                }, {
                    $pull: {
                        favorites: {
                            id: parseInt(item_id)
                        }
                    }
                }, {
                    new: true
                }, (err, user) => {
                    if (err) {
                        console.error(err);
                        return res.send({
                            success: false,
                            message: 'Server error'
                        });
                    }
                    return res.send({
                        success: true,
                        message: 'Remove favorite successful',
                        favorites: user.favorites
                    });
                })
            }
        });
    });

    app.get('/api/favorites', (req, res) => {
        const { query } = req;
        const { token } = query;        // ?token=
        
        UserSession.find({
            _id: token,
            isDeleted: false
        }, (err, sessions) => {
            if (err) {
                console.error(err);
                return res.send({
                    success: false,
                    message: 'Server error'
                });
            }
            if (sessions.length != 1) {
                return res.send({
                    success: false,
                    message: 'Invalid session'
                });
            } else {
                User.find({
                    _id: sessions[0].userId,
                    isDeleted: false
                }, (err, users) => {
                    if (err) {
                        console.error(err);
                        return res.send({
                            success: false,
                            message: 'Server error'
                        });
                    }
                    if (users.length != 1) {
                        return res.send({
                           success: false,
                           message: 'Invalid user' 
                        });
                    }
                    return res.send({
                        success: true,
                        message: 'Get favorites successful',
                        favorites: users[0].favorites
                    });
                })
            }
        });
    });
}