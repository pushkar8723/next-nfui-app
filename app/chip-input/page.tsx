'use client';
import { ChipInput, Card, CardBody, CardHeader } from "no-frills-ui";
import { useState } from "react";
import "./chip-input.css";
import Header from "@/components/header";

export default function BadgePage() {
    const [value, setValue] = useState<string[]>([]);
    return (
        <>
            <Header
                title="Chip Input Demo"
                docLink="https://nfui.js.org/?path=/docs/declarative-components-chipinput--docs"
            />
            <Card>
                <CardHeader>
                    Chip Input
                </CardHeader>
                <CardBody className="chip-input-container">
                    <ChipInput
                        label="Invite Admins"
                        type="email"
                        required
                        width="400px"
                        value={value}
                        onChange={setValue}
                    />
                    {value.length > 0 && (
                        <p>
                            <strong>Following emails will be invited for admin role:</strong><br/>
                            {value.join(', ')}
                        </p>
                    )}
                </CardBody>
            </Card>
        </>
    );
}