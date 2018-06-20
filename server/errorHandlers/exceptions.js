class Exception {
    constructor(message, status) {
        this.message = message;
        this.status = status;
        this.name = "Exception";
    }
}

class ApiException extends Exception {
    constructor(message, status) {
        super(message, status);
        this.name = 'ApiException';
    }
}

export {
    ApiException
}