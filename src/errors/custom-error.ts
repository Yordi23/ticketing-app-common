export abstract class CustomError extends Error {
    abstract statusCode: number;

    constructor(message: string) {
        //This will send the message to the Error class so it will be logged
        super(message);

        Object.setPrototypeOf(this, CustomError.prototype);
    }

    abstract serializeErrors(): { message: string, field?: string; }[];
}