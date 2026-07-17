class AppError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
    }
}

const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    if(!err.isOperational){
        console.error(err);
    }

    const message = err.message || 'Internal Server Error';

    res.status(statusCode).json({
        error: message
    })
};

export { AppError, errorHandler };