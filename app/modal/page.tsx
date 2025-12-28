"use client";

import Header from "@/components/header";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
} from "no-frills-ui";
import { useState } from "react";

export default function ModalPage() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Header
                title="Modal"
                docLink="https://nfui.js.org/?path=/docs/declarative-components-modal--docs"
            />
            <Card>
                <CardHeader>Demo</CardHeader>
                <CardBody>
                    <Button onClick={() => setOpen(true)}>Open Modal</Button>
                </CardBody>
            </Card>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalHeader>Modal Header</ModalHeader>
                <ModalBody>This will always render on top.</ModalBody>
                <ModalFooter>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}
