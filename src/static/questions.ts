///import { formTypes } from "../components/UserForm/Form";

const companyName = "dApp Survey";

const questions = [
  {
    field: "type",
    options: [
      "DeFi",
      "Game",
      "NFT Marketplace",
      "Community",
      "Other"
    ],
    submitButtonText: "Next",
   // type: formTypes.radio,
    question: `What's your dApp type?`,
    required: true
  }
/*  {
    field: "feedback",
    submitButtonText: "Submit",
    type: formTypes.text,
    question: `Please share your feedback`,
    required: false
  }*/
];

export { companyName, questions };
