'use client';
import Header from "@/components/header";
import { Accordion, AccordionStep, AccordionStepBody, AccordionStepFooter, ActionButton, Button, Card, CardBody, CardHeader } from "no-frills-ui";
import { useState } from "react";

export default function AccordionPage() {
    const [active, setActive] = useState(-1);

    return (
        <>
            <Header
                title="Accordion Demo"
                docLink="https://nfui.js.org/?path=/docs/declarative-components-accordion--docs"
            />
            <Card id="demo-container-card">
                <CardBody>
                    <Accordion active={active} onStepClick={setActive}>
                        <AccordionStep header="Welcome" completed={active > 0}>
                            <AccordionStepBody>
                                Dummy content for Welcome step
                            </AccordionStepBody>
                            <AccordionStepFooter>
                                <ActionButton onClick={() => setActive(1)}>Next</ActionButton>
                            </AccordionStepFooter>
                        </AccordionStep>
                        <AccordionStep header="Basic Details" completed={active > 1}>
                            <AccordionStepBody>
                                Dummy content for Basic Details step
                            </AccordionStepBody>
                            <AccordionStepFooter>
                                <Button onClick={() => setActive(0)}>Back</Button>
                                <ActionButton onClick={() => setActive(2)}>Next</ActionButton>
                            </AccordionStepFooter>
                        </AccordionStep>
                        <AccordionStep header="Personalisation" errorText="3 Errors" disabled completed={active > 2}>
                            <AccordionStepBody>
                                Personalisation Step is disabled but you can open it via controlling
                                the <code>active</code> prop.
                            </AccordionStepBody>
                            <AccordionStepFooter>
                                <Button onClick={() => setActive(1)}>Back</Button>
                                <ActionButton onClick={() => setActive(3)}>Next</ActionButton>
                            </AccordionStepFooter>
                        </AccordionStep>
                        <AccordionStep header="Verification" completed={active > 3}>
                            <AccordionStepBody>
                                Dummy content for Verification step
                            </AccordionStepBody>
                            <AccordionStepFooter>
                                <Button onClick={() => setActive(2)}>Back</Button>
                                <ActionButton onClick={() => setActive(-1)}>Done</ActionButton>
                            </AccordionStepFooter>
                        </AccordionStep>
                    </Accordion>
                </CardBody>
            </Card>
        </>
    );
}
