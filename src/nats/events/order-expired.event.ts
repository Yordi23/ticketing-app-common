import { Subjects } from './subjects.enum';

export interface OrderExpiredEvent {
	subject: Subjects.ORDER_EXPIRED;
	data: {
		orderId: string;
	};
}
