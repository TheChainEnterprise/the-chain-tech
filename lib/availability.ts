export type Conversation = {
  id: number;
  customer: string;
  company: string;
  channel: string;
  phone: string;
  email: string;
  status: string;
  messages: {
    sender: "customer" | "val";
    text: string;
    time: string;
  }[];
};

export const conversations: Conversation[] = [
  {
    id: 1,
    customer: "John Smith",
    company: "Smith Construction",
    channel: "Website Chat",
    phone: "+1 555 210 887",
    email: "john@smithconstruction.com",
    status: "Qualified",
    messages: [
      {
        sender: "customer",
        text: "Hello, I'd like pricing.",
        time: "10:01",
      },
      {
        sender: "val",
        text: "Certainly. Which service are you interested in?",
        time: "10:02",
      },
      {
        sender: "customer",
        text: "Botox.",
        time: "10:03",
      },
      {
        sender: "val",
        text: "Botox starts from €250. Would you like to book?",
        time: "10:04",
      },
    ],
  },

  {
    id: 2,
    customer: "Sarah Williams",
    company: "Elite Dental",
    channel: "Phone Call",
    phone: "+44 7700 900111",
    email: "sarah@elitedental.com",
    status: "Booked",
    messages: [
      {
        sender: "customer",
        text: "Can I come Thursday?",
        time: "13:12",
      },
      {
        sender: "val",
        text: "Absolutely. Thursday at 2 PM is available.",
        time: "13:13",
      },
    ],
  },

  {
    id: 3,
    customer: "Emma Johnson",
    company: "Vision Clinic",
    channel: "WhatsApp",
    phone: "+372 5555 1234",
    email: "emma@visionclinic.com",
    status: "New",
    messages: [
      {
        sender: "customer",
        text: "I'd like some information.",
        time: "09:10",
      },
      {
        sender: "val",
        text: "Of course. How can I help you today?",
        time: "09:11",
      },
    ],
  },
];