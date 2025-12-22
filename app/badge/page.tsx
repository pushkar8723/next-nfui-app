"use client";
import Header from "@/components/header";
import {
    Badge,
    BADGE_TYPE,
    Button,
    Card,
    CardBody,
    CardHeader,
} from "no-frills-ui";

export default function BadgePage() {
    return (
        <>
            <Header
                title="Badge Demo"
                docLink="https://nfui.js.org/?path=/docs/declarative-components-badge--docs"
            />
            <Card>
                <CardHeader>Inline Badges</CardHeader>
                <CardBody>
                    <Badge inline type={BADGE_TYPE.PRIMARY}>
                        Primary
                    </Badge>
                    <Badge inline type={BADGE_TYPE.SUCCESS}>
                        Success
                    </Badge>
                    <Badge inline type={BADGE_TYPE.WARNING}>
                        Warning
                    </Badge>
                    <Badge inline type={BADGE_TYPE.DANGER}>
                        Danger
                    </Badge>
                    <Badge inline type={BADGE_TYPE.DISABLED}>
                        Disabled
                    </Badge>
                </CardBody>
            </Card>
            <Card>
                <CardHeader>Overlay Badges</CardHeader>
                <CardBody
                    style={{
                        overflow: "visible",
                        display: "flex",
                        gap: "20px",
                    }}
                >
                    <Button>
                        Filter <Badge>2</Badge>
                    </Button>
                    <Button>
                        Filter <Badge>99+</Badge>
                    </Button>
                    <Button>
                        Filter <Badge />
                    </Button>
                </CardBody>
            </Card>
        </>
    );
}
