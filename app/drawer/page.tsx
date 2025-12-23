"use client";

import Header from "@/components/header";
import {
    Button,
    Card,
    CardBody,
    Drawer,
    DRAWER_POSITION,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    Select,
} from "no-frills-ui";
import { ChangeEvent, useState } from "react";

export default function DrawerPage() {
    const [open, setOpen] = useState(false);
    const [position, setPosition] = useState(DRAWER_POSITION.LEFT);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setPosition(e.target.value as DRAWER_POSITION);
    };

    const openDrawer = () => setOpen(true);

    return (
        <>
            <Header
                title="Drawer Demo"
                docLink="https://nfui.js.org/?path=/docs/declarative-components-drawer--docs"
            />
            <Card>
                <CardBody>
                    <div>
                        <Select
                            label="Drawer Position"
                            required
                            value={position}
                            onChange={onChangeHandler}
                        >
                            <option value={DRAWER_POSITION.LEFT}>Left</option>
                            <option value={DRAWER_POSITION.RIGHT}>Right</option>
                            <option value={DRAWER_POSITION.BOTTOM}>
                                Bottom
                            </option>
                        </Select>
                    </div>
                    <Button onClick={openDrawer}>Open Drawer</Button>
                </CardBody>
            </Card>
            <Drawer
                open={open}
                onClose={() => setOpen(false)}
                position={position || DRAWER_POSITION.LEFT}
            >
                <DrawerHeader>Its a Drawer!</DrawerHeader>
                <DrawerBody>
                    Is it a modal? 🐦
                    <br />
                    Is it a dialog? ✈️
                    <br />
                    .<br />
                    .<br />
                    .<br />
                    No its a drawer! 🦸
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    Sorry for the lame joke. 😅
                </DrawerBody>
                <DrawerFooter>
                    <Button
                        onClick={() => {
                            setOpen(false);
                        }}
                    >
                        Close
                    </Button>
                </DrawerFooter>
            </Drawer>
        </>
    );
}
