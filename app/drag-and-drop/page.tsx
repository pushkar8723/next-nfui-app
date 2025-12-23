"use client";
import Header from "@/components/header";
import { Card, CardBody, DragAndDrop, ORIENTATION, Toggle } from "no-frills-ui";
import { ChangeEvent, useState } from "react";
import "./drag-and-drop.css";

export default function DragAndDropPage() {
    const [horizontal, setHorizontal] = useState(false);
    const [showIndicators, setShowIndicators] = useState(false);

    const [items, setItems] = useState([
        "Item #1",
        "Item #2",
        "Item #3",
        "Item #4",
        "Item #5",
    ]);

    const onDrop = (start: number, end: number) => {
        // Clone existing elements
        const newItems = [...items];
        // Remove the element to be moved
        const item = newItems.splice(start, 1);
        // Add it back at the required position
        newItems.splice(end, 0, item[0]);
        // Update
        setItems(newItems);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setHorizontal(e.target.checked);
    };

    const onShowIndicatorsChangeHandler = (
        e: ChangeEvent<HTMLInputElement>
    ) => {
        setShowIndicators(e.target.checked);
    };

    return (
        <>
            <Header
                title="Drag And Drop Demo"
                docLink="https://nfui.js.org/?path=/docs/declarative-components-draganddrop--docs"
            />
            <Card id="demo-container-card">
                <CardBody>
                    <div className="controls-container">
                        <Toggle
                            label="Horizontal Layout"
                            checked={horizontal}
                            onChange={onChangeHandler}
                        />
                        <Toggle
                            label="Show Indicators"
                            checked={showIndicators}
                            onChange={onShowIndicatorsChangeHandler}
                        />
                    </div>
                    <DragAndDrop
                        orientation={
                            horizontal
                                ? ORIENTATION.HORIZONTAL
                                : ORIENTATION.VERTICAL
                        }
                        onDrop={onDrop}
                        showIndicator={showIndicators}
                    >
                        {items.map((item, index) => (
                            <Card key={`${item}-${index}`}>
                                <CardBody>{item}</CardBody>
                            </Card>
                        ))}
                    </DragAndDrop>
                </CardBody>
            </Card>
        </>
    );
}
