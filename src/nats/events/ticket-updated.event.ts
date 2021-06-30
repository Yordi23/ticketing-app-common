import { Subjects } from './subjects.enum';

export interface TicketUpdatedEvent {
	subject: Subjects.TICKET_UPDATED;
	data: {
		id: string;
		title: string;
		price: number;
		userId: string;
		orderId?: string;
		version: number;
	};
}
