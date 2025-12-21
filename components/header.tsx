'use client';

import Link from "next/link";
import { Card, CardBody } from "no-frills-ui";

type HeaderProps = {
    title: string;
    docLink: string;
}

export default function Header({ title, docLink }: HeaderProps) {
    return (
        <header>
            <h1>{title}</h1>
            <Card>
                <CardBody>
                    <nav>
                        <Link href="/">Home</Link>{' | '}
                        <Link href={docLink} target="_blank">Documentation</Link>
                    </nav>
                </CardBody>
            </Card>
        </header>
    );
}