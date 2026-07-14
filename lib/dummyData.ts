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
    id: 1,
    name: "John Smith",
    company: "Smith Construction",
    email: "john@smithconstruction.com",
    phone: "+1 555 210 887",
    status: "New",
    source: "Website",
    created: "2026-07-13",
    assigned: "Val",
    notes: "Interested in AI receptionist for incoming sales calls.",
  },
  {
    id: 2,
    name: "Sarah Williams",
    company: "Elite Dental",
    email: "sarah@elitedental.com",
    phone: "+44 7700 900111",
    status: "Qualified",
    source: "Facebook",
    created: "2026-07-12",
    assigned: "Andres",
    notes: "Looking to automate appointment bookings.",
  },
  {
    id: 3,
    name: "Michael Brown",
    company: "Prime Real Estate",
    email: "michael@primerealestate.com",
    phone: "+61 400 111 222",
    status: "Booked",
    source: "Referral",
    created: "2026-07-11",
    assigned: "Val",
    notes: "Booked demo for Thursday 14:00.",
  },
  {
    id: 4,
    name: "Emma Johnson",
    company: "Vision Clinic",
    email: "emma@visionclinic.com",
    phone: "+372 5555 1234",
    status: "Won",
    source: "LinkedIn",
    created: "2026-07-10",
    assigned: "Andres",
    notes: "Ready for onboarding.",
  },
  {
    id: 5,
    name: "Daniel Wilson",
    company: "Wilson Motors",
    email: "daniel@wilsonmotors.com",
    phone: "+1 555 777 991",
    status: "Contacted",
    source: "Google",
    created: "2026-07-09",
    assigned: "Val",
    notes: "Requested pricing information.",
  },
  {
    id: 6,
    name: "Lisa Taylor",
    company: "Taylor Legal",
    email: "lisa@taylorlegal.com",
    phone: "+44 7712 654987",
    status: "Lost",
    source: "Website",
    created: "2026-07-08",
    assigned: "Andres",
    notes: "Chose another provider.",
  },
];