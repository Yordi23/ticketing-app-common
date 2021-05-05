import { CustomError } from "./custom-error";

export class DatabaseConectionError extends CustomError {
    statusCode = 500;
    reason = 'Error DB';

    constructor() {
        super('Error connecting to db');

        //This is because we are extending a built in class
        Object.setPrototypeOf(this, DatabaseConectionError.prototype);
    }

    serializeErrors() {
        return [{
            message: this.reason
        }];
    }
}