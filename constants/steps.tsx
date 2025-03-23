import { Calendar, CreditCard, MapPin, Shield, Trash2, Truck } from 'lucide-react'
export const steps = {
  postCode: {
    name: "Postcode",
    icon: <MapPin />,
  },
  wasteType: {
    name: "Waste Type",
    icon: < Trash2 />,
  },
  selectSkip: {
    name: "Select Skip",
    icon: <Truck />,
  },
  permitCheck: {
    name: "Permit Check",
    icon: <Shield />,
  },
  chooseDate: {
    name: "Choose Date",
    icon: <Calendar />,
  },
  payment: {
    name: "Payment",
    icon: <CreditCard />,
  }
};
