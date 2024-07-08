export default class Validator {
    constructor(username) {
        this.username = username;
    }

    validateUsername() {
        return (/^[^\d\-_][\w\-_]+[^\d\-_]$/.test(this.username)) && (!/\d{4,}/.test(this.username));
    }
}