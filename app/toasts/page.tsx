"use client";

import Header from "@/components/header";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Toast,
    TOAST_TYPE,
} from "no-frills-ui";

export default function ToastsPage() {
    return (
        <>
            <Header
                title="Toasts Demo"
                docLink="https://nfui.js.org/?path=/docs/imperative-components-toast--docs"
            />
            <Card>
                <CardHeader>Variations</CardHeader>
                <CardBody>
                    <Button
                        onClick={() => {
                            Toast.add({
                                text: "I am a 🍞 bro.",
                            });
                        }}
                    >
                        Simple Toast
                    </Button>

                    <Button
                        onClick={() => {
                            Toast.add({
                                text: "I am a 🍞 bro.",
                                buttonText: "Action",
                                buttonClick: () =>
                                    alert(
                                        "Action button on toast was clicked."
                                    ),
                            });
                        }}
                    >
                        Action Toast
                    </Button>

                    <Button
                        onClick={() => {
                            Toast.add({
                                text: `When a toast contains a very large string, the excess
            string is wrapped and showed on the next line.`,
                            });
                        }}
                    >
                        Multiline Toast
                    </Button>

                    <Button
                        onClick={() => {
                            Toast.add({
                                text: `When a toast contains a very large string, the excess
            string is wrapped and showed on the next line.`,
                                buttonText: "Action",
                                buttonClick: () =>
                                    alert(
                                        "Action button on toast was clicked."
                                    ),
                            });
                        }}
                    >
                        Multiline Action Toast
                    </Button>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>Types</CardHeader>
                <CardBody>
                    <Button
                        onClick={() => {
                            Toast.add({
                                text: "I am a 🍞 bro.",
                                type: TOAST_TYPE.INFO,
                            });
                        }}
                    >
                        Information Toast
                    </Button>

                    <Button
                        onClick={() => {
                            Toast.add({
                                text: "I am a 🍞 bro.",
                                type: TOAST_TYPE.SUCCESS,
                            });
                        }}
                    >
                        Success Toast
                    </Button>

                    <Button
                        onClick={() => {
                            Toast.add({
                                text: "I am a 🍞 bro.",
                                type: TOAST_TYPE.WARNING,
                            });
                        }}
                    >
                        Warning Toast
                    </Button>

                    <Button
                        onClick={() => {
                            Toast.add({
                                text: "I am a 🍞 bro.",
                                type: TOAST_TYPE.DANGER,
                            });
                        }}
                    >
                        Danger Toast
                    </Button>
                </CardBody>
            </Card>
        </>
    );
}
