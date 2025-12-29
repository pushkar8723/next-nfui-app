"use client";
import Header from "@/components/header";
import { Card, CardBody, CardHeader, Dropdown, MenuItem } from "no-frills-ui";
import { useState } from "react";
import { List, useListRef } from "react-window";

interface RowComponentProps {
    values: number[];
    index?: number;
    style?: object;
}
const RowComponent = ({ values, index, style }: RowComponentProps) => {
    if (index === undefined) {
        return <div />;
    }

    return (
        <MenuItem value={values[index]} style={style}>
            {`Item #${values[index]}`}
        </MenuItem>
    );
};

export default function DropdownPage() {
    const [selected, setSelected] = useState<number>();
    const values = new Array(1000).fill(0).map((_, index) => index);
    const listRef = useListRef(null);

    return (
        <>
            <Header
                title="Dropdown Demo"
                docLink="https://nfui.js.org/?path=/docs/declarative-components-dropdown--docs"
            />
            <Card>
                <CardHeader>Demo</CardHeader>
                <CardBody>
                    <Dropdown<number>
                        label="Select an Item"
                        value={selected}
                        onChange={(value: number) => {
                            setSelected(value);
                        }}
                        onOpen={() => {
                            if (selected !== undefined) {
                                listRef.current?.scrollToRow({
                                    align: "start",
                                    index: selected,
                                });
                            }
                        }}
                        displayNameProvider={(value?: number) => {
                            return value ? `Item #${value}` : "";
                        }}
                    >
                        <List
                            rowComponent={RowComponent}
                            rowCount={values.length}
                            rowHeight={41}
                            rowProps={{
                                values,
                            }}
                            listRef={listRef}
                        />
                    </Dropdown>
                </CardBody>
            </Card>
        </>
    );
}
