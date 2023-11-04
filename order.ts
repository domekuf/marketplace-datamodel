import { Time } from "@angular/common";

export interface Order {
  datetime: Time,
  eventId: string,
  userId: string,
  paymentId: string,
}