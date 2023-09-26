import React from "react";

const SellerFAQ = ({faqs}: {faqs : any}) => {
  return (
    <div className="mb-16">
      <h2 className="text-xl font-bold mb-4">FAQ</h2>
      <div className="space-y-4">
        {
          faqs.map((faq:any) =><div key={faq._id} className="collapse collapse-arrow bg-base-200 dark:bg-black">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-lg font-medium">
            {faq?.question}
          </div>
          <div className="collapse-content">
            <p>{faq?.answer}</p>
          </div>
        </div> )
        }
      </div>
    </div>
  );
};

export default SellerFAQ;
