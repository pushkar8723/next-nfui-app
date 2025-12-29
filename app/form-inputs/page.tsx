"use client";
import Header from "@/components/header";
import { Field, Form, Formik, FormikErrors } from "formik";
import {
    ActionButton,
    Button,
    Card,
    CardBody,
    CardHeader,
    Dropdown,
    Input,
    MenuItem,
    Radio,
    RadioButton,
    RadioGroup,
    Select,
    ErrorContainer,
    Toggle,
    Checkbox,
    Stepper,
    Step,
    StepFooter,
    StepBody,
    ChipInput,
} from "no-frills-ui";
import * as yup from "yup";
import "./inputs.css";
import { useState } from "react";
import Link from "next/link";

// Initial values for the form
const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    skills: [],
    workType: "",
    os: "",
    location: [],
    newsletter: false,
    line1: "",
    line2: "",
    city: "",
    state: "",
    zip: "",
    tnc: false,
};

// Validation schema for the form
const schema = yup.object({
    name: yup.string().required("Required"),
    email: yup.string().email("Invalid email address").required("Required"),
    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .required("Required"),
    confirmPassword: yup
        .string()
        .required("Required")
        .oneOf([yup.ref("password")], "Passwords do not match"),
    gender: yup
        .mixed()
        .oneOf(["male", "female", "other"], "Invalid gender")
        .required("Required"),
    skills: yup
        .array()
        .min(1, "At least one skill is required")
        .required("Required"),
    workType: yup.string().required("Please select your preferred work type"),
    os: yup.string().required("Please select your preferred OS"),
    location: yup
        .array()
        .min(1, "Please select at least one location")
        .required("Required"),
    line1: yup.string().required("Required"),
    line2: yup.string(),
    city: yup.string().required("Required"),
    state: yup.string().required("Required"),
    zip: yup.string().required("Required"),
    newsletter: yup.boolean(),
    tnc: yup.boolean().oneOf([true], "Please accept the terms and conditions"),
});

// Mapping of gender to pronouns
const genderMap = {
    male: "He/Him",
    female: "She/Her",
    other: "They/Them",
};

type StepProps = {
    getError: (key: keyof typeof initialValues) => string | string[];
    values: typeof initialValues;
    setFieldValue: (
        field: string,
        value: unknown,
        shouldValidate?: boolean
    ) => Promise<void | FormikErrors<typeof initialValues>>;
};

/**
 * Basic information step
 * @returns JSX.Element
 */
const Step0 = ({ getError }: StepProps) => (
    <>
        <div>
            <Field
                name="name"
                as={Input}
                label="Name"
                required
                errorText={getError("name")}
            />
            <Field
                name="email"
                as={Input}
                type="email"
                label="Email"
                required
                errorText={getError("email")}
            />
        </div>
        <div>
            <Field
                name="password"
                as={Input}
                type="password"
                label="Password"
                required
                errorText={getError("password")}
            />
            <Field
                name="confirmPassword"
                as={Input}
                type="password"
                label="Confirm Password"
                errorText={getError("confirmPassword")}
            />
        </div>
    </>
);

/**
 * Preferences step
 * @returns JSX.Element
 */
const Step1 = ({ values, getError, setFieldValue }: StepProps) => (
    <>
        <div>
            <Field
                name="gender"
                as={Select}
                label="Pronouns"
                required
                errorText={getError("gender")}
            >
                <option value="male">He/Him</option>
                <option value="female">She/Her</option>
                <option value="other">They/Them</option>
            </Field>
        </div>
        <div>
            <Field
                name="skills"
                as={ChipInput}
                label="Skills"
                errorText={getError("skills")}
                value={values.skills}
                placeholder="UI Development, React and Next.js etc"
                onChange={(value: string[]) => {
                    setFieldValue("skills", value);
                }}
            />
        </div>
        <div className="group-controls-container">
            <label>Work Preferrence:</label>
            <br />
            <RadioGroup>
                <Field
                    name="workType"
                    as={RadioButton}
                    type="radio"
                    label="Office"
                    value="office"
                    errorText={getError("workType")}
                />
                <Field
                    name="workType"
                    as={RadioButton}
                    type="radio"
                    label="Remote"
                    value="remote"
                    errorText={getError("workType")}
                />
                <Field
                    name="workType"
                    as={RadioButton}
                    type="radio"
                    label="Hybrid"
                    value="hybrid"
                    errorText={getError("workType")}
                />
            </RadioGroup>
            {getError("workType") && (
                <ErrorContainer>{getError("workType")}</ErrorContainer>
            )}
        </div>
        <div className="group-controls-container">
            <label>Prefered OS:</label>
            <br />
            <Field
                name="os"
                as={Radio}
                type="radio"
                label="Windows"
                value="windows"
                errorText={getError("os")}
            />
            <Field
                name="os"
                as={Radio}
                type="radio"
                label="Mac"
                value="mac"
                errorText={getError("os")}
            />
            <Field
                name="os"
                as={Radio}
                type="radio"
                label="Linux"
                value="linux"
                errorText={getError("os")}
            />
            {getError("os") && (
                <ErrorContainer>{getError("os")}</ErrorContainer>
            )}
        </div>
        <div>
            <Field
                name="location"
                as={Dropdown}
                multiSelect
                errorText={getError("location")}
                label="Prefered Location"
                onChange={(value: string[]) => {
                    setFieldValue("location", value);
                }}
            >
                <MenuItem value="BLR">Bangalore</MenuItem>
                <MenuItem value="HYD">Hyderabad</MenuItem>
                <MenuItem value="MUM">Mumbai</MenuItem>
                <MenuItem value="PUNE">Pune</MenuItem>
                <MenuItem value="CHE">Chennai</MenuItem>
                <MenuItem value="DL">Delhi</MenuItem>
            </Field>
        </div>
    </>
);

/**
 * Address step
 * @returns JSX.Element
 */
const Step2 = ({ getError, setFieldValue }: StepProps) => (
    <>
        <div>
            <Field
                name="line1"
                as={Input}
                label="Line 1"
                required
                errorText={getError("line1")}
            />
            <Field name="line2" as={Input} label="Line 2" />
        </div>
        <div>
            <Field
                name="city"
                as={Input}
                label="City"
                required
                errorText={getError("city")}
            />
            <Field
                name="state"
                as={Dropdown}
                label="State"
                required
                errorText={getError("state")}
                onChange={(value: string) => {
                    setFieldValue("state", value);
                }}
            >
                <MenuItem value="KA">Karnataka</MenuItem>
                <MenuItem value="DL">Delhi</MenuItem>
                <MenuItem value="MH">Maharashtra</MenuItem>
            </Field>
        </div>
        <div>
            <Field
                name="zip"
                as={Input}
                label="Zip"
                type="number"
                required
                errorText={getError("zip")}
            />
        </div>
    </>
);

/**
 * Confirmation Ste
 * @returns JSX.Element
 */
const Step3 = ({ getError }: StepProps) => (
    <>
        <div>
            <Field
                name="newsletter"
                as={Toggle}
                type="checkbox"
                label="Subscribe to newsletter"
                errorText={getError("newsletter")}
            />
        </div>
        <div>
            <Field
                as={Checkbox}
                type="checkbox"
                name="tnc"
                label="I agree to the terms and conditions"
                errorText={getError("tnc")}
            />
        </div>
    </>
);

export default function FormInputs() {
    const [active, setActive] = useState(0);
    const [completed, setCompleted] = useState(-1);
    const [message, setMessage] = useState("");

    /**
     * Handles the form submission.
     * It just creates a message based on the form values and
     * sets it to the message state.
     * @param values
     */
    const handleSubmit = (values: typeof initialValues) => {
        setMessage(`
            An account has been created in name of <strong>${
                values.name
            }</strong> with email <strong>${
                values.email
            }</strong> and password <strong>${values.password}</strong>.<br/>
            The user's pronouns are <strong>${
                genderMap[values.gender as keyof typeof genderMap]
            }</strong>, is skilled in <strong>${values.skills.join(
                ", "
            )}</strong>; work preference is <strong>${
                values.workType
            }</strong>, OS of choice is <strong>${
                values.os
            }</strong> and preferred  work location is/are <strong>${values.location.join(
                ", "
            )}</strong>.<br/>
            Currenlty residing at <strong>${values.line1}, ${
                values.line2 ?? `${values.line2}, `
            } ${values.city}, ${values.state}, ${values.zip}</strong>.<br/>
            ${
                values.newsletter
                    ? "Subscribed to the newsletter "
                    : "Not subscribed to the newsletter "
            }
            ${
                values.tnc
                    ? "and has accepted the terms and conditions."
                    : "and has not accepted the terms and conditions."
            }
            `);
    };

    return (
        <>
            <Header
                title="Form Inputs Demo"
                docLink="https://nfui.js.org/?path=/docs/get-started-with-formik--6-with-formik"
            />
            <Card>
                <CardBody>
                    I created a multi-step form using the Stepper component,
                    Formik, and Yup. Here I have tested{` `}
                    <Link href="https://nfui.js.org/?path=/docs/declarative-components-input--docs">
                        Input
                    </Link>
                    {`, `}
                    <Link href="https://nfui.js.org/?path=/docs/declarative-components-radio--docs">
                        Radio
                    </Link>
                    {`, `}
                    <Link href="https://nfui.js.org/?path=/docs/declarative-components-radiobutton--docs">
                        RadioButton
                    </Link>
                    {`, `}
                    <Link href="https://nfui.js.org/?path=/docs/declarative-components-checkbox--docs">
                        Checkbox
                    </Link>
                    {`, `}
                    <Link href="https://nfui.js.org/?path=/docs/declarative-components-toggle--docs">
                        Toggle
                    </Link>
                    {`, `}
                    <Link href="https://nfui.js.org/?path=/docs/declarative-components-select--docs">
                        Select
                    </Link>
                    {`, `}
                    <Link href="https://nfui.js.org/?path=/docs/declarative-components-dropdown--docs">
                        Dropdown
                    </Link>
                    {`, `}
                    <Link href="https://nfui.js.org/?path=/docs/declarative-components-chipinput--docs">
                        Chip Input
                    </Link>
                    {`, `}
                    <Link href="https://nfui.js.org/?path=/docs/declarative-components-stepper--docs">
                        Stepper
                    </Link>
                </CardBody>
            </Card>
            <Card id="demo-container-card">
                <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    validateOnMount={true}
                    onSubmit={handleSubmit}
                    onReset={async (values, { validateForm }) => {
                        setActive(0);
                        setCompleted(-1);
                        setMessage("");
                        validateForm({ name: "" });
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        setFieldValue,
                        setTouched,
                    }) => {
                        /**
                         * Returns the error message for a given field
                         * @param key The field name
                         * @returns The error message
                         */
                        const getError = (key: keyof typeof initialValues) => {
                            return errors[key] && touched[key]
                                ? errors[key]
                                : "";
                        };

                        /**
                         * Validates the current step.
                         * It just checks if all the fields in the current step are valid.
                         * @param step The current step
                         * @returns A function to be called on submition of current step.
                         */
                        const validateStep = (step: number) => () => {
                            if (step === 0) {
                                if (
                                    !errors.name &&
                                    !errors.email &&
                                    !errors.password &&
                                    !errors.confirmPassword
                                ) {
                                    setCompleted(0);
                                    setActive(1);
                                }
                            } else if (step === 1) {
                                if (
                                    !errors.gender &&
                                    !errors.skills &&
                                    !errors.workType &&
                                    !errors.os &&
                                    !errors.location
                                ) {
                                    setCompleted(1);
                                    setActive(2);
                                }
                            } else if (step === 2) {
                                if (
                                    !errors.line1 &&
                                    !errors.city &&
                                    !errors.state &&
                                    !errors.zip
                                ) {
                                    setCompleted(2);
                                    setActive(3);
                                }
                            } else if (step === 3) {
                                if (!errors.tnc) {
                                    setCompleted(3);
                                    setActive(4);
                                }
                                return;
                            }
                            setTouched({});
                        };

                        return (
                            <Form>
                                <CardHeader>Sign Up</CardHeader>
                                <CardBody>
                                    <Card style={{ overflow: "auto" }}>
                                        <Stepper
                                            active={active}
                                            onStepClick={setActive}
                                        >
                                            <Step
                                                name="Basic Information"
                                                completed={completed >= 0}
                                            >
                                                <StepBody>
                                                    <Step0
                                                        getError={getError}
                                                        values={values}
                                                        setFieldValue={
                                                            setFieldValue
                                                        }
                                                    />
                                                </StepBody>
                                                <StepFooter>
                                                    <Button type="reset">
                                                        Clear
                                                    </Button>
                                                    <div style={{ flex: 1 }} />
                                                    <ActionButton
                                                        type="submit"
                                                        onClick={validateStep(
                                                            0
                                                        )}
                                                    >
                                                        Next
                                                    </ActionButton>
                                                </StepFooter>
                                            </Step>
                                            <Step
                                                name="Preferences"
                                                completed={completed >= 1}
                                                disabled={completed < 0}
                                            >
                                                <StepBody>
                                                    <Step1
                                                        getError={getError}
                                                        values={values}
                                                        setFieldValue={
                                                            setFieldValue
                                                        }
                                                    />
                                                </StepBody>
                                                <StepFooter>
                                                    <Button type="reset">
                                                        Clear
                                                    </Button>
                                                    <div style={{ flex: 1 }} />
                                                    <Button
                                                        onClick={() =>
                                                            setActive(0)
                                                        }
                                                    >
                                                        Back
                                                    </Button>
                                                    <ActionButton
                                                        type="submit"
                                                        onClick={validateStep(
                                                            1
                                                        )}
                                                    >
                                                        Next
                                                    </ActionButton>
                                                </StepFooter>
                                            </Step>
                                            <Step
                                                name="Address"
                                                completed={completed >= 2}
                                                disabled={completed < 1}
                                            >
                                                <StepBody>
                                                    <Step2
                                                        getError={getError}
                                                        values={values}
                                                        setFieldValue={
                                                            setFieldValue
                                                        }
                                                    />
                                                </StepBody>
                                                <StepFooter>
                                                    <Button type="reset">
                                                        Clear
                                                    </Button>
                                                    <div style={{ flex: 1 }} />
                                                    <Button
                                                        onClick={() =>
                                                            setActive(1)
                                                        }
                                                    >
                                                        Back
                                                    </Button>
                                                    <ActionButton
                                                        type="submit"
                                                        onClick={validateStep(
                                                            2
                                                        )}
                                                    >
                                                        Next
                                                    </ActionButton>
                                                </StepFooter>
                                            </Step>
                                            <Step
                                                name="Confirmation"
                                                completed={completed >= 3}
                                                disabled={completed < 2}
                                            >
                                                <StepBody>
                                                    <Step3
                                                        getError={getError}
                                                        values={values}
                                                        setFieldValue={
                                                            setFieldValue
                                                        }
                                                    />
                                                </StepBody>
                                                <StepFooter>
                                                    <Button type="reset">
                                                        Clear
                                                    </Button>
                                                    <div style={{ flex: 1 }} />
                                                    <Button
                                                        onClick={() =>
                                                            setActive(2)
                                                        }
                                                    >
                                                        Back
                                                    </Button>
                                                    <ActionButton
                                                        type="submit"
                                                        onClick={validateStep(
                                                            3
                                                        )}
                                                    >
                                                        Next
                                                    </ActionButton>
                                                </StepFooter>
                                            </Step>
                                            <Step
                                                name="Completed"
                                                completed={completed === 3}
                                                disabled={completed < 3}
                                            >
                                                <StepBody>
                                                    <strong>
                                                        Account Created!
                                                    </strong>
                                                    <p
                                                        dangerouslySetInnerHTML={{
                                                            __html: message,
                                                        }}
                                                    ></p>
                                                </StepBody>
                                                <StepFooter>
                                                    <Button type="reset">
                                                        Clear
                                                    </Button>
                                                    <div style={{ flex: 1 }} />
                                                    <Button
                                                        onClick={() =>
                                                            setActive(3)
                                                        }
                                                    >
                                                        Back
                                                    </Button>
                                                </StepFooter>
                                            </Step>
                                        </Stepper>
                                    </Card>
                                </CardBody>
                            </Form>
                        );
                    }}
                </Formik>
            </Card>
        </>
    );
}
