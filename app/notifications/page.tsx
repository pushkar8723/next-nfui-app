"use client";

import Header from "@/components/header";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Notification,
    NOTIFICATION_POSITION,
    NOTIFICATION_TYPE,
} from "no-frills-ui";

export default function NotificationsPage() {
    return (
        <>
            <Header
                title="Notifications"
                docLink="https://nfui.js.org/?path=/docs/imperative-components-notification--docs"
            />
            <Card>
                <CardHeader>Types</CardHeader>
                <CardBody>
                    <Button
                        onClick={() => {
                            Notification.add(NOTIFICATION_POSITION.TOP_RIGHT, {
                                title: "Information Notification",
                                description:
                                    "This notification contains some information.",
                                type: NOTIFICATION_TYPE.INFO,
                            });
                        }}
                    >
                        Information
                    </Button>
                    <Button
                        onClick={() => {
                            Notification.add(NOTIFICATION_POSITION.TOP_RIGHT, {
                                title: "Success Notification",
                                description:
                                    "This notification contains success information.",
                                type: NOTIFICATION_TYPE.SUCCESS,
                            });
                        }}
                    >
                        Success
                    </Button>
                    <Button
                        onClick={() => {
                            Notification.add(NOTIFICATION_POSITION.TOP_RIGHT, {
                                title: "Warning Notification",
                                description:
                                    "This notification contains warning information.",
                                type: NOTIFICATION_TYPE.WARNING,
                            });
                        }}
                    >
                        Warning
                    </Button>
                    <Button
                        onClick={() => {
                            Notification.add(NOTIFICATION_POSITION.TOP_RIGHT, {
                                title: "Danger Notification",
                                description:
                                    "This notification contains error information.",
                                type: NOTIFICATION_TYPE.DANGER,
                            });
                        }}
                    >
                        Danger
                    </Button>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>Positions</CardHeader>
                <CardBody>
                    <Button
                        onClick={() => {
                            Notification.add(NOTIFICATION_POSITION.TOP_LEFT, {
                                title: "Top Left Notification",
                                description: "I came from top left.",
                            });
                        }}
                    >
                        Top Left
                    </Button>
                    <Button
                        onClick={() => {
                            Notification.add(NOTIFICATION_POSITION.TOP_RIGHT, {
                                title: "Top Right Notification",
                                description: "I came from top right.",
                            });
                        }}
                    >
                        Top Right
                    </Button>
                    <Button
                        onClick={() => {
                            Notification.add(
                                NOTIFICATION_POSITION.BOTTOM_RIGHT,
                                {
                                    title: "Bottom Right Notification",
                                    description: "I came from bottom right.",
                                }
                            );
                        }}
                    >
                        Bottom Right
                    </Button>
                    <Button
                        onClick={() => {
                            Notification.add(
                                NOTIFICATION_POSITION.BOTTOM_LEFT,
                                {
                                    title: "Bottom Left Notification",
                                    description: "I came from bottom left.",
                                }
                            );
                        }}
                    >
                        Bottom Left
                    </Button>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>Features</CardHeader>
                <CardBody>
                    <Button
                        onClick={() => {
                            Notification.add(NOTIFICATION_POSITION.TOP_RIGHT, {
                                title: "Sticky Notification",
                                description:
                                    "This notification will not go away until you dismiss it.",
                                sticky: true,
                            });
                        }}
                    >
                        Sticky
                    </Button>
                    <Button
                        onClick={async () => {
                            const id = await Notification.add(
                                NOTIFICATION_POSITION.TOP_RIGHT,
                                {
                                    title: "Button Notification",
                                    description:
                                        "This notification will contains a actionable button.",
                                    sticky: true,
                                    buttonText: "OK",
                                    buttonClick: () => {
                                        Notification.remove(
                                            NOTIFICATION_POSITION.TOP_RIGHT,
                                            id
                                        );
                                    },
                                }
                            );
                        }}
                    >
                        Actionable Notification
                    </Button>
                    <Button
                        onClick={() => {
                            Notification.add(NOTIFICATION_POSITION.TOP_RIGHT, {
                                id: "unique-id",
                                title: "Unique Notification",
                                description: "There will only be one of me.",
                            });
                        }}
                    >
                        Deduped Notification
                    </Button>
                    <Button
                        onClick={() => {
                            Notification.add(NOTIFICATION_POSITION.TOP_RIGHT, {
                                title: "Close me",
                                description:
                                    "This notification will trigger an alert on close.",
                                onClose: () => alert("Notification closed"),
                            });
                        }}
                    >
                        Close Callback
                    </Button>
                </CardBody>
            </Card>
        </>
    );
}
