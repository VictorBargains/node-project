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

class ValidationException extends Exception {
    constructor(message, status, allErrors) {
        super(message, status);
        this.name = 'ValidationException';
        this.errors = allErrors;
    }
}

export {
    ApiException,
    ValidationException
}