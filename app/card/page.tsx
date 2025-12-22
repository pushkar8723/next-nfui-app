"use client";
import { Button, Card, CardBody, CardFooter, CardHeader } from "no-frills-ui";
import "./card.css";
import Header from "@/components/header";

export default function BadgePage() {
    return (
        <>
            <Header
                title="Card Demo"
                docLink="https://nfui.js.org/?path=/docs/declarative-components-card--docs"
            />
            <Card id="demo-container-card" className="container-card">
                <Card className="card">
                    <CardHeader>Card Title</CardHeader>
                    <CardBody>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Enim quibusdam fugiat natus laborum nostrum,
                        quaerat reiciendis velit illo iure repudiandae sequi
                        voluptatem amet odit nam dolores maiores tempore
                        cupiditate accusantium.
                    </CardBody>
                    <CardFooter>
                        <Button>Action</Button>
                    </CardFooter>
                </Card>
                <Card className="card">
                    <CardHeader>Card Title</CardHeader>
                    <CardBody>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Enim quibusdam fugiat natus laborum nostrum,
                        quaerat reiciendis velit illo iure repudiandae sequi
                        voluptatem amet odit nam dolores maiores tempore
                        cupiditate accusantium.
                    </CardBody>
                    <CardFooter>
                        <Button>Action</Button>
                    </CardFooter>
                </Card>
                <Card className="card">
                    <CardHeader>Card Title</CardHeader>
                    <CardBody>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Enim quibusdam fugiat natus laborum nostrum,
                        quaerat reiciendis velit illo iure repudiandae sequi
                        voluptatem amet odit nam dolores maiores tempore
                        cupiditate accusantium.
                    </CardBody>
                    <CardFooter>
                        <Button>Action</Button>
                    </CardFooter>
                </Card>
            </Card>
        </>
    );
}
