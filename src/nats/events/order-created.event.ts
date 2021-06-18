import { Subjects } from './subjects.enum';
import { OrderStatus } from './types/order-status';

export interface OrderCreatedEvent {
	subject: Subjects.ORDER_CREATED;
	data: {
		id: string;
		status: OrderStatus;
		userId: string;
		expiresAt: string;
		ticket: {
			id: string;
			price: number;
		};
	};
}
