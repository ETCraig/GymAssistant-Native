const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateRegisterInput(data) {
    
    let errors = {};

    data.name = !isEmpty(data.name) ? data.name : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.password2 = !isEmpty(data.password2) ? data.password2 : '';

    if(!Validator.isLength(date.name, {min: 2, max: 30})) {
        errors.name = 'Name must be 5 - 20 Characters.';
    }
    if(Validator.isEmpty(data.name)) {
        errors.email = 'Name is Required.';
    }
    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email is Required.';
    }
    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email is Invalid.';
    }
    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password is Required.';
    }
    if(!Validator.isLength(data.password, {min: 5, max: 20})) {
        errors.password = 'Password must be 5 - 20 Characters.';
    }
    if(Validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirm password is Required.';
    }
    if(!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords must Match.';
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}