console.log("DUMMY DATA FILE LOADED");

export type Lead = {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  status: "New" | "Contacted" | "Qualified" | "Booked" | "Won" | "Lost";
  source: string;
  created: string;
  assigned: string;
  notes: string;
};

export const leads: Lead[] = [
  {
    id: 999,
    name: "TEST",
    company: "TEST COMPANY",
    email: "test@test.com",
    phone: "123",
    status: "New",
    source: "Test",
    created: "2026-07-16",
    assigned: "Val",
    notes: "TEST",
  },
];