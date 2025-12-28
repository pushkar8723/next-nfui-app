"use client";

import Header from "@/components/header";
import {
    CardBody,
    Card,
    Group,
    GroupLabel,
    Input,
    Button,
    Dropdown,
    MenuItem,
    CardHeader,
    Select,
} from "no-frills-ui";

export default function GroupPage() {
    return (
        <>
            <Header
                title="Group Demo"
                docLink="https://nfui.js.org/?path=/docs/declarative-components-group--docs"
            />
            <Card style={{ overflow: "visible" }}>
                <CardHeader>Demo</CardHeader>
                <CardBody>
                    <Group>
                        <GroupLabel htmlFor="amount">$</GroupLabel>
                        <Input id="amount" label="Amount" />
                        <Dropdown label="Action" style={{ width: "100px" }}>
                            <MenuItem value="add">Deposit</MenuItem>
                            <MenuItem value="sub">Withdraw</MenuItem>
                        </Dropdown>
                        <Select label="Account type" style={{ width: "150px" }}>
                            <option value="savings">Savings</option>
                            <option value="current">Current</option>
                        </Select>
                        <Button>Go</Button>
                    </Group>
                </CardBody>
            </Card>
        </>
    );
}
