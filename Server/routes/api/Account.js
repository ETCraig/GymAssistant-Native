const express = require('express');
const router = express.Router();
const passport = require('passport');

const Account = require('../../models/Account');

router.get('/', passport.authenticate('jwt', { session: false }), (req, res => {
    const errors = {};
    Account.findOne({ user: req.user.id })
        .populate('user', ['name'])
        .then(account => {
            if (!account) {
                return res.status(404).json(errors);
            }
            res.json(account);
        })
        .catch(err => res.status(404).json(err));
}));

router.get('/all', (req, res) => {
    const errors = {};
    Account.find()
        .populate('user', [name])
        .then(accounts => {
            if (!accounts) {
                return res.status(404).json(errors);
            }
            res.json(accounts);
        })
        .catch(err => res.status(404).json({ account: 'N existing account.' }));
});

router.get('/handle/:handle', (req, res) => {
    const errors = {};
    Account.finsOne({ user: req.params.user_id })
        .populate('user', [name])
        .then(account => {
            if (!account) {
                res.status(404).json(errors);
            }
            res.json(account);
        })
        .catch(err => res.status(404).json({ account: 'This account does not exist.' }));
});

module.exports = router;