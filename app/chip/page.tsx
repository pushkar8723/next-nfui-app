"use client";
import Header from "@/components/header";
import { Chip, Card, CardBody, CardHeader, Input } from "no-frills-ui";
import { useRef, useState } from "react";

export default function ChipPage() {
    const [skills, setSkills] = useState<string[]>([]);
    const [value, setValue] = useState<string>("");

    const keyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            setSkills((prev) => [...prev, value]);
            setValue("");
        }
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const removeSkill = (skill: string) => () => {
        setSkills((prev) => prev.filter((s) => s !== skill));
    };

    return (
        <>
            <Header
                title="Chip Demo"
                docLink="https://nfui.js.org/?path=/docs/declarative-components-chip--docs"
            />
            <Card>
                <CardHeader>Chip</CardHeader>
                <CardBody>
                    <Input
                        value={value}
                        onChange={onChangeHandler}
                        label="Enter your skills"
                        onKeyUp={keyUpHandler}
                    />
                    <div>
                        {skills.map((skill, index) => (
                            <Chip
                                key={`${skill}-${index}`}
                                label={skill}
                                onCloseClick={removeSkill(skill)}
                            />
                        ))}
                    </div>
                </CardBody>
            </Card>
        </>
    );
}
