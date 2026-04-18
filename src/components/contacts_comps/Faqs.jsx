import { useEffect, useState } from "react";
import FAQ from "./FAQ";
import SectionHeading from "../ui/SectionHeading";

const Faqs = () => {
  const [faqInfo, setFaqInfo] = useState([]);
  const [openIndex, setOpenIndex] = useState(-1);

  useEffect(() => {
    fetch('faqInfo.json')
      .then(res => res.json())
      .then(data => setFaqInfo(data))
      .catch(() => {});
  }, []);

  return (
    <section>
      <SectionHeading title="Frequently Asked Questions" className="mb-8" />
      <div className="max-w-3xl mx-auto space-y-3">
        {faqInfo.map((faq, idx) => (
          <FAQ
            key={idx}
            faq={faq}
            isOpen={openIndex === idx}
            onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default Faqs;
