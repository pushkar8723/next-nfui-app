"use client";
import Header from "@/components/header";
import { AlertDialog, Button, Card, CardBody, CardHeader } from "no-frills-ui";
import { useRef } from "react";

export default function BadgePage() {
    const alertDialogRef = useRef<AlertDialog>(null);
    const showAlert = () => {
        if (alertDialogRef.current) {
            alertDialogRef.current.show();
        }
    };
    return (
        <>
            <Header
                title="Dialogs Demo"
                docLink="https://nfui.js.org/?path=/docs/imperative-components-dialog--docs"
            />
            <Card>
                <CardHeader>Alert Dialog</CardHeader>
                <CardBody>
                    <AlertDialog
                        ref={alertDialogRef}
                        header="✉️ Invitation Sent!"
                        body="Your invitation has been sent to the specified email addresses."
                        buttonText="Got it!"
                    />
                    <Button type="button" onClick={showAlert}>
                        Show Alert Dialog
                    </Button>
                </CardBody>
            </Card>
        </>
    );
}
