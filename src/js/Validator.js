export default class Validator {
    constructor(username) {
        this.username = username;
    }

    validateUsername() {
        return (/^[A-Za-z][-\w]+[A-Za-z]$/i.test(this.username)) && (!/\d{4,}/.test(this.username));
    }
}