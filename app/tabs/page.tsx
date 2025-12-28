"use client";

import Header from "@/components/header";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Spinner,
    Tab,
    Tabs,
} from "no-frills-ui";
import { useState } from "react";

export default function TabsPage() {
    const [active, setActive] = useState(0);

    return (
        <>
            <Header
                title="Tabs"
                docLink="https://nfui.js.org/?path=/docs/declarative-components-tabs--docs"
            />
            <Card>
                <CardHeader>Demo</CardHeader>
                <CardBody>
                    <Tabs active={active} onChange={setActive}>
                        <Tab name="Tab 1">
                            <p>Content for Tab 1</p>
                            <Button onClick={() => setActive(1)}>
                                Go to Tab 2
                            </Button>
                        </Tab>
                        <Tab name="Tab 2">
                            <p>Content for Tab 2</p>
                            <Button onClick={() => setActive(2)}>
                                Go to Tab 3
                            </Button>
                        </Tab>
                        <Tab name="Tab 3">
                            <p>
                                <Spinner label="loading" />
                            </p>
                            <Button onClick={() => setActive(0)}>
                                Go to Tab 1
                            </Button>
                        </Tab>
                    </Tabs>
                </CardBody>
            </Card>
        </>
    );
}
