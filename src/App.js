import React from "react";

import {
  GeistProvider,
  CssBaseline,
  Button,
  Page,
  Text,
  Card,
  Spacer,
  Tooltip,
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
        </Switch>
      </Router>
    </GeistProvider>
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
          <Tooltip
            text={
              "Hopefully before this hackathon ends, but we'll see about that ;)"
            }
          >
            <Button shadow>Coming soon to a screen near you!</Button>
          </Tooltip>
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
