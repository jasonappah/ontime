// yeet

import React from "react";

import {
  GeistProvider,
  CssBaseline,
  Button,
  Page,
  Text,
  Card,
  Spacer,
  Link,
} from "@geist-ui/react";

import { Github, ExternalLink, Twitter } from "@geist-ui/react-icons";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <GeistProvider theme={{ type: "dark" }}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/">
            <Landing />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
        </Switch>
      </Router>
    </GeistProvider>
  );
}

function Login() {
  return (
    <Page dotBackdrop size="large">
      <Page.Content>
        <Text h1>Sign in / register here.</Text>
      </Page.Content>
    </Page>
  );
}

function Landing() {
  return (
    <Page dotBackdrop size="large">
      <Page.Content>
        <Card shadow>
          <Text h1>Never be late to Zoom school again.</Text>

          <Text h4>
            View your class schedule and keep track of those pesky Zoom links in
            an elegant dashboard, with reminders to log on to your next class.
          </Text>

          <Text h4>Presenting OnTime by JasonAA.</Text>

          <Link href="/signin">
            <Button shadow>Log In</Button>
          </Link>
          <Card.Footer>
            <Link href="https://jasonaa.me/gh">
              <Github />
            </Link>
            <Spacer x={1} inline />
            <Link href="https://jasonaa.me/twitter">
              <Twitter />
            </Link>
            <Spacer x={1} inline />
            <Link href="https://jasonaa.me">
              <ExternalLink />
            </Link>
          </Card.Footer>
        </Card>
      </Page.Content>
    </Page>
  );
}
export default App;
