"use client";
import Header from "@/components/header";
import {
    ActionButton,
    Button,
    Card,
    CardBody,
    CardHeader,
    Checkbox,
    IconButton,
    LinkButton,
    RaisedButton,
} from "no-frills-ui";
import { useState } from "react";

export default function ButtonsPage() {
    const [disabled, setDisabled] = useState(false);

    return (
        <>
            <Header
                title="Buttons Demo"
                docLink="https://nfui.js.org/?path=/docs/declarative-components-button--docs"
            />
            <Card>
                <CardHeader>Buttons</CardHeader>
                <CardBody>
                    <div>
                        <Checkbox
                            label="Disable"
                            checked={disabled}
                            onChange={(e) => setDisabled(e.target.checked)}
                        />
                    </div>
                    <div>
                        <Button disabled={disabled}>Button</Button>
                        <ActionButton disabled={disabled}>
                            Action Button
                        </ActionButton>
                        <IconButton disabled={disabled}>Icon Button</IconButton>
                        <LinkButton disabled={disabled}>Link Button</LinkButton>
                        <RaisedButton disabled={disabled}>
                            Raised Button
                        </RaisedButton>
                    </div>
                </CardBody>
            </Card>
        </>
    );
}
