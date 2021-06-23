import { Subjects } from './subjects.enum';

export interface OrderCancelledEvent {
	subject: Subjects.ORDER_CANCELLED;
	data: {
		id: string;
		version: number;
		ticket: {
			id: string;
		};
	};
}
