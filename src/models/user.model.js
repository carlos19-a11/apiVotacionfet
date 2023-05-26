const db = require('../config/db.config');
const { createNewUser: createNewUserQuery, findUserByEmailQuery: findUserByEmailQuery, findByUsername:findUserByUsernameQuery } = require('../database/queries');
const { logger } = require('../utils/logger');

class User {
    constructor( email, password, username) {
        this.email = email;
        this.password = password;
        this.username = username;
    }

    static create(newUser, cb) {
        db.query(createNewUserQuery, 
            [
                newUser.username,
                newUser.email, 
                newUser.password
            ], (err, res) => {
                if (err) {
                    logger.error(err.message);
                    cb(err, null);
                    return;
                }
                cb(null, {
                    id: res.insertId,
                    username: newUser.username,
                    email: newUser.email,
                    password: newUser.password,
                });
        });
    }

    static findByEmail(email, cb) {
        db.query(findUserByEmailQuery, email, (err, res) => {
            if (err) {
                logger.error(err.message);
                cb(err, null);
                return;
            }
            if (res.length) {
                cb(null, res[0]);
                return;
            }
            cb({ kind: "not_found" }, null);
        })
    }
    static findByUsername(username, cb) {
        db.query(findUserByUsernameQuery, username, (err, res) => {
            if (err) {
                logger.error(err.message);
                cb(err, null);
                return;
            }
            if (res.length) {
                cb(null, res[0]);
                return;
            }
            cb({ kind: "not_found" }, null);
        })
    }
}

module.exports = User;