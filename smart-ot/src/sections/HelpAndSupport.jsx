import React, { useState } from "react";
const HelpAndSupport = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const faqData = [
    {
      id: "faq1",
      question: "What is smart-OT?",
      answer:
        "smart-OT is a smart cash website that allows you to manage your finances, send and receive money, pay bills, and access loans—all in one place.",
    },
    {
      id: "faq2",
      question: "How do I create an account?",
      answer:
        "To create an account, download the smart-OT app from the App Store or Google Play Store, and follow the registration steps. You'll need a valid phone number and email address.",
    },
    {
      id: "faq3",
      question: "Is smart-OT secure?",
      answer:
        "Yes, smart-OT uses advanced encryption and multi-factor authentication to ensure your data and transactions are secure.",
    },
    {
      id: "faq4",
      question: "How do I reset my password?",
      answer:
        "To reset your password, go to the login screen, click on 'Forgot Password,' and follow the instructions sent to your registered email or phone number.",
    },
    {
      id: "faq5",
      question: "What fees does smart-OT charge?",
      answer:
        "smart-OT charges minimal fees for transactions and withdrawals. You can view the full fee structure in the app under 'Settings > Fees.'",
    },
  ];

  return (
    <div className="font-sans">
      {/* Help and Support Section */}
      <section className="mb-8">
        <div>
          <h3 className="text-center text-2xl text-red-500 font-bold">
            HELP AND SUPPORT
          </h3>
        </div>

        <div className="ml-20 mb-6">
          <h3 className="text-lg text-red-500 font-bold">CONTACT US</h3>
        </div>

        <div className="ml-20">
          Call for support - 08101014685
          <br />
          Email for support - customerservice@smart-OT.ng
          <br />
          Fraud Reports - frauddesk@Smart-OT.ng
          <br />
          To block your wallet.
          <br />
          Using your mobile number: Dial *939*911# then input your wallet PIN.
          <br />
          Using other mobile numbers: Dial *939*911* Customer Phone Number# then
          input PIN linked to the wallet you want to block.
          <br />
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <main>
          <h3 className="text-lg text-red-500 font-bold ml-20 mb-8">FAQ</h3>

          <div className="ml-20 mr-20">
            {faqData.map((faq) => (
              <div key={faq.id} className="mb-8">
                <div className="question-container">
                  <button
                    className="w-full text-left focus:outline-none flex justify-between items-center"
                    onClick={() => toggleAccordion(faq.id)}
                  >
                    <span
                      className={`text-lg font-semibold ${
                        openAccordion === faq.id ? "text-red-600" : "text-gray-900"
                      }`}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border ${
                        openAccordion === faq.id
                          ? "border-red-600"
                          : "border-gray-900"
                      } flex items-center justify-center`}
                    >
                      <span
                        className={`${
                          openAccordion === faq.id ? "text-red-600" : "text-gray-900"
                        }`}
                      >
                        {openAccordion === faq.id ? "−" : "+"}
                      </span>
                    </div>
                  </button>
                  <div
                    className={`accordion-content pl-2 pr-10 mt-2 overflow-hidden transition-all ${
                      openAccordion === faq.id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </section>
    </div>
  );
};

export default HelpAndSupport;