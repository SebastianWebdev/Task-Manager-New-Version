import isEmail from 'validator/lib/isEmail';
export default (name, pass, email) => isEmail(email) && pass !== '' && name !== ''



