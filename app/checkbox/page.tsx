"use client";
import Header from "@/components/header";
import {
    ActionButton,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Checkbox,
} from "no-frills-ui";
import { useState } from "react";

export default function BadgePage() {
    const [accepted, setAccepted] = useState(false);

    return (
        <>
            <Header
                title="Checkbox Demo"
                docLink="https://nfui.js.org/?path=/docs/declarative-components-checkbox--docs"
            />
            <Card>
                <CardHeader>Terms and Conditions</CardHeader>
                <CardBody>
                    You must accept the terms and conditions to proceed.
                    <br />
                    <Checkbox
                        checked={accepted}
                        onChange={(e) => setAccepted(e.target.checked)}
                        label="Accept Terms and Conditions"
                    />
                </CardBody>
                <CardFooter>
                    <ActionButton disabled={!accepted}>Proceed</ActionButton>
                </CardFooter>
            </Card>
        </>
    );
}
