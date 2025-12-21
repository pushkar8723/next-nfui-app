'use client';
import { Card, CardBody, CardHeader } from "no-frills-ui";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <h1>No Frills UI - Demo App</h1>
      <Card>
        <CardBody>
          <div>
            This is a Next JS app using No Frills UI components.<br/>
            I created this app to test the components and to demo how to use them.
          </div>
          <div>Visit <a href="https://nfui.js.org/" target="_blank">No Frills UI</a> for more information.</div>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          Declarative Components
        </CardHeader>
        <CardBody>
          <div>Follow the links below to see the components in action.</div>
          <ol>
            <li>
              <Link href='/accordion'>Accordion</Link>
            </li>
            <li>
              <Link href='/badge'>Badge</Link>
            </li>
            <li>
              <Link href='/card'>Card</Link>
            </li>
            <li>
              <Link href='/checkbox'>Checkbox</Link>
            </li>
            <li>
              <Link href='/chip-input'>Chip Input</Link>
            </li>
          </ol>
        </CardBody>
      </Card>
      <Card>
          <CardHeader>
            Imperative Components
          </CardHeader>
          <CardBody>
            Following components are imperative.
            <ul>
              <li>
                <Link href='/dialogs'>Dialogs</Link>
              </li>
            </ul>
          </CardBody>
        </Card>
    </>
  );
}
