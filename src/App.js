import React, {useState} from "react";

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

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";

import { Github, ExternalLink, Twitter } from "@geist-ui/react-icons";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

var firebaseConfig = {
  apiKey: "AIzaSyBVDtBhFaV0Lhwi6Aierm-qUOpBrhsXOgU",
  authDomain: "ontime-jasonaa.firebaseapp.com",
  databaseURL: "https://ontime-jasonaa.firebaseio.com",
  projectId: "ontime-jasonaa",
  storageBucket: "ontime-jasonaa.appspot.com",
  messagingSenderId: "180943670738",
  appId: "1:180943670738:web:ae35d21d9cde1ba91e8c0b",
};

firebase.initializeApp(firebaseConfig);

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false
  },
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ],
};

function App() {
  return (
    <GeistProvider theme={{ type: "dark" }}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Router>
    </GeistProvider>
  );
}

function Login() {
  const [isSignedIn, authChange] = useState(false)

  const unregisterAuthObserver = firebase.auth().onAuthStateChanged(
    (user) => authChange(!!user))
  
  if (!isSignedIn) {
  return (
    <Page dotBackdrop size="large">
      <Page.Content>
        <Text h1>Sign in / register here.</Text>
        <Card shadow>
          <Text h3>Select your preferred login method.</Text>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </Card>
      </Page.Content>
    </Page>
  );
  } else {
    return (
      <Page dotBackdrop size="large">
      <Page.Content>
        <Text h1>You're in.</Text>
        <Card shadow>
          <Text h3>{firebase.auth().currentUser.displayName}, {firebase.auth().currentUser.email}, {firebase.auth().currentUser.uid}, {firebase.auth().currentUser.providerId}</Text>
            <Link onClick={() => {firebase.auth().signOut(); unregisterAuthObserver()}}>Sign-out</Link>
        </Card>
      </Page.Content>
    </Page>
    )
}
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
