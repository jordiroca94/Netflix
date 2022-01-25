import React from "react";
import { Accordion } from "../components";
import OptForm from "../components/opt-form";
import faqsData from "../fixtures/faqs.json";

export function FaqsContainer() {
  return (
    <Accordion>
      <Accordion.Title> Frequently Asked Questions</Accordion.Title>
      {faqsData.map((el) => (
        <Accordion.Item key={el.id}>
            <Accordion.Header>{el.header}</Accordion.Header>
            <Accordion.Body>{el.body}</Accordion.Body>
        </Accordion.Item>
      ))}
      <Accordion.Item>
        <OptForm>
          <OptForm.Input placeholder="Email adress"/>
          <OptForm.Button>Try it now</OptForm.Button>
          <OptForm.Break/>
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your membership
          </OptForm.Text>
        </OptForm>
      </Accordion.Item>
    </Accordion>
  ); 
}
 