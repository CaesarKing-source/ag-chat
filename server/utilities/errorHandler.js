class ErrorHandler extends Error {
    constructor(message, statuscode) {
        super(message);
        this.statusCode = statuscode;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

export const errorHandler = ErrorHandler;