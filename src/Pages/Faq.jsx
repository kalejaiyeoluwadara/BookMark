import React, { useState } from "react";
import Header from "../Components/Header";
import Quest from "../Components/Quest";
import Button from "../Components/Button";

function Faq() {
  const [faqs, setFaqs] = useState([
    {
      question: "What is Bookmark?",
      answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
  justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.`,
    },
    {
      question: "How can I request a new browser?",
      answer: `Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
  Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
  ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
  Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
`,
    },
    {
      question: "Is there a mobile app?",
      answer: `Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
  urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
  sollicitudin ex et ultricies bibendum.`,
    },
    {
      question: "What about other Chromium browsers?",
      answer: ` Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
  vitae neque eget nisl gravida pellentesque non ut velit.`,
    },
  ]);
  return (
    <div className="h-[100vh] w-screen flex flex-col items-center justify-center ">
      <Header
        name={"Frequently Asked Questions"}
        content={`Here are some of our FAQs. If you have any other questions you’d like 
  answered please feel free to email us.`}
      />

      {/* Faqs */}
      <section className="mt-10 flex flex-col ">
        {faqs.map((item, id) => {
          const { question, answer } = item;
          return <Quest key={id} question={question} answer={answer} />;
        })}
      </section>
      <section className="flex w-full items-center mt-8 justify-center">
        <Button name={"More Info"} blue={true} />
      </section>
    </div>
  );
}

export default Faq;
