"use client";
import Header from "@/components/header";
import {
    AlertDialog,
    Button,
    Card,
    CardBody,
    CardHeader,
    ConfirmDialog,
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
    PromptDialog,
    Toast,
    TOAST_TYPE,
} from "no-frills-ui";
import { useRef } from "react";
import "./dialogs.css";

export default function BadgePage() {
    const alertDialogRef = useRef<AlertDialog>(null);
    const confirmDialogRef = useRef<ConfirmDialog>(null);
    const promptDialogRef = useRef<PromptDialog>(null);
    const dialogRef = useRef<Dialog>(null);

    const showAlert = async () => {
        if (alertDialogRef.current) {
            await alertDialogRef.current.show();
            Toast.add({
                text: "Alert Dismissed",
                type: TOAST_TYPE.INFO,
            });
        }
    };

    const confirm = async () => {
        try {
            await confirmDialogRef.current?.show();
            Toast.add({
                text: "Thanks! Glad you liked it.",
                type: TOAST_TYPE.SUCCESS,
            });
        } catch (e) {
            Toast.add({
                text: "Hmmm! Give it a try at least.",
                type: TOAST_TYPE.DANGER,
            });
        }
    };

    const showPrompt = async () => {
        try {
            const resp = await promptDialogRef.current?.show();
            Toast.add({
                text: `Order placed for ${resp} products.`,
                type: TOAST_TYPE.SUCCESS,
            });
        } catch (e) {
            Toast.add({
                text: "Order was not placed.",
                type: TOAST_TYPE.DANGER,
            });
        }
    };

    const openDialog = () => {
        dialogRef.current?.open();
    };

    const closeDialog = () => {
        dialogRef.current?.close();
    };

    return (
        <>
            <Header
                title="Dialogs Demo"
                docLink="https://nfui.js.org/?path=/docs/imperative-components-dialog--docs"
            />
            <Card id="demo-container-card">
                <CardBody className="card-container">
                    <Card className="card">
                        <CardHeader>Alert Dialog</CardHeader>
                        <CardBody className="button-container">
                            <Button type="button" onClick={showAlert}>
                                Show Alert Dialog
                            </Button>
                        </CardBody>
                    </Card>
                    <Card className="card">
                        <CardHeader>Confrim Dialog</CardHeader>
                        <CardBody className="button-container">
                            <Button type="button" onClick={confirm}>
                                Show Confirm Dialog
                            </Button>
                        </CardBody>
                    </Card>
                    <Card className="card">
                        <CardHeader>Prompt Dialog</CardHeader>
                        <CardBody className="button-container">
                            <Button type="button" onClick={showPrompt}>
                                Show Prompt Dialog
                            </Button>
                        </CardBody>
                    </Card>
                    <Card className="card">
                        <CardHeader>Dialog</CardHeader>
                        <CardBody className="button-container">
                            <Button type="button" onClick={openDialog}>
                                Open Dialog
                            </Button>
                        </CardBody>
                    </Card>
                </CardBody>
            </Card>
            <AlertDialog
                ref={alertDialogRef}
                header="✉️ Invitation Sent!"
                body="Your invitation has been sent to the specified email addresses."
                buttonText="Got it!"
            />
            <ConfirmDialog
                ref={confirmDialogRef}
                header="💭 Feedback"
                body={`
                    The confirmation dialog is a async function call and results are returned via promise.
                    This means that there is no need to maintain dialog state in your application.
                    Do you think that this will help you keep your code clean and save time?
                `}
            />
            <PromptDialog
                ref={promptDialogRef}
                header="Bulk Order"
                body="Thanks for your interest in this product. If you like, you can place order multiple quantity."
                defaultValue="1"
                inputProps={{
                    label: "Enter Quantity",
                    type: "number",
                    min: 1,
                    max: 10,
                    required: true,
                }}
            />
            <Dialog ref={dialogRef}>
                <DialogHeader>A custom dialog</DialogHeader>
                <DialogBody>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </DialogBody>
                <DialogFooter>
                    <Button onClick={closeDialog}>Close Dialog</Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
