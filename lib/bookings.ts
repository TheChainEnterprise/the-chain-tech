export type Booking = {
  id: number;

  customer: string;

  service: string;

  date: string;

  time: string;

  staff: string;

  status:
    | "Pending"
    | "Confirmed"
    | "Completed"
    | "Cancelled";

  phone: string;

  email: string;

  notes: string;
};

export const bookings: Booking[] = [
  {
    id: 1,
    customer: "John Smith",
    service: "Botox Consultation",
    date: "2026-07-18",
    time: "14:00",
    staff: "Dr. Sarah",
    status: "Confirmed",
    phone: "+44 7700 123456",
    email: "john@example.com",
    notes: "Interested in forehead treatment.",
  },

  {
    id: 2,
    customer: "Emma Johnson",
    service: "Hair Transplant",
    date: "2026-07-19",
    time: "09:00",
    staff: "Val",
    status: "Pending",
    phone: "+372 5555 1234",
    email: "emma@example.com",
    notes: "Requested pricing before appointment.",
  },

  {
    id: 3,
    customer: "Michael Brown",
    service: "Dental Consultation",
    date: "2026-07-20",
    time: "11:30",
    staff: "Dr. Adams",
    status: "Completed",
    phone: "+1 555 123 7788",
    email: "michael@example.com",
    notes: "Consultation completed successfully.",
  },

  {
    id: 4,
    customer: "Sarah Williams",
    service: "Skin Consultation",
    date: "2026-07-21",
    time: "16:00",
    staff: "Val",
    status: "Cancelled",
    phone: "+44 7711 987654",
    email: "sarah@example.com",
    notes: "Customer cancelled due to travel.",
  },
];