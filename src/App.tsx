import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { firebaseConfig } from "./firebase.config";
import { Login } from "./screens/login";
import { PersistentDrawerRight } from "./screens/drawer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

import firebase, { auth } from "firebase";
import { Home } from "./screens/home";
import { Logout } from "./screens/logout";
import { Profile } from "./screens/profile";
import { Register } from "./screens/register";
import { ResetPassword } from "./screens/resetPassword";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";
import { Onboarding } from "./screens/onboarding";
import { Terms } from "./screens/terms";
import { ChangeAvatar } from "./screens/changeAvatar";
const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#4424A8"
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    }
  }
});

interface UserAuth {
  uid?: string;
  loggedIn: boolean;
}

firebase.initializeApp(firebaseConfig);

export const AuthContext = React.createContext({
  uid: "",
  loggedIn: false
} as UserAuth);

function App(props: any) {
  const [basename, setBasename] = useState("/intro");
  const [userAuth, setUserAuth] = useState({ uid: "", loggedIn: false });
  auth().onAuthStateChanged(a => {
    console.log(a);

    if (a?.uid && userAuth.uid !== a?.uid) {
      setUserAuth({ uid: a?.uid || "", loggedIn: true });
      setBasename("/");
    }
    if (a?.uid === undefined && userAuth.uid) {
      setUserAuth({ uid: "", loggedIn: false });
    }
  });

  const authUserRouter = () => {
    return (
      <Router>
        {props.location?.pathname !== "/intro" && <PersistentDrawerRight />}
        <div
          style={{
            display: "inline-block",
            width: "100%",
            maxWidth: "420px",
            position: "relative"
          }}
        >
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

          <Switch>
            <Route path="/intro">
              <Onboarding />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/changeAvatar">
              <ChangeAvatar />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>

            <Route path="/logout">
              <Logout />
            </Route>
            <Route path="/terms">
              <Terms />
            </Route>
            <Route path="/user/:uid" children={<Profile />} />
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  };

  const unauthUserRouter = () => {
    return (
      <Router>
        {props.location?.pathname !== "/intro" && <PersistentDrawerRight />}
        <div
          style={{
            display: "inline-block",
            width: "100%",
            maxWidth: "420px",
            position: "relative"
          }}
        >
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

          <Switch>
            <Route path="/intro">
              <Onboarding />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/terms">
              <Terms />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/resetPassword">
              <ResetPassword />
            </Route>
            <Route path="/user/:uid" children={<Profile />} />

            <Route path="/">
              <Onboarding />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  };
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AuthContext.Provider value={userAuth}>
          {userAuth.loggedIn ? authUserRouter() : unauthUserRouter()}
        </AuthContext.Provider>
      </ThemeProvider>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
      <p>
        Heldenzeit ist eine App, die dir dabei hilft, deine Zeit zu Hause aktiv
        und kreativ zu gestalten. Wir zeigen dir, wie du auch in dieser
        herausfordernden Zeit dein eigenes und das Wohlbefinden deiner
        Mitmenschen steigern kannst. Nur weil du zu Hause bleiben musst, heißt
        es noch lange nicht, dass dir die Decke auf den Kopf fallen muss! Lasse
        dich von den drei Hauptkategorien: active - help - health inspirieren
        und baue neue Ideen/gute Taten/Beschäftigungen in deine
        Alltagsgestaltung ein. Damit deine Heldentaten nicht einfach unbemerkt
        bleiben, sammelst du für das Erledigen deiner Aufgaben Punkte. Je
        nachdem wie heldenhaft deine Tat ist, steigt dabei die zu gewinnende
        Punkteanzahl.
      </p>
      <p>
        <strong>
          <span>Impressum</span>
        </strong>
      </p>
      <p>
        <strong>Heldenzeit App</strong>
      </p>
      <p>Inhaber: Patrick Müller</p>
      <p>
        Clara-Schumann-Str 2<br /> 73092 Heiningen
        <br /> Deutschland
      </p>
      <p> </p> <p>Mail: mp@floatec.de</p>
      <p> </p>
      <p>
        Die Europ&auml;ische Kommission stellt eine Plattform zur
        Online-Streitbeilegung (OS) bereit, die Sie hier finden
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank">
          https://ec.europa.eu/consumers/odr/
        </a>
        . Zur Teilnahme an einem Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht
        bereit. <br />
        <i>
          <a
            target="_blank"
            title="Impressum"
            href="https://shop.trustedshops.com/de/rechtstexte/"
          >
            Impressum
          </a>{" "}
          erstellt mit dem{" "}
          <a
            target="_blank"
            title="Trusted Shops"
            href="https://shop.trustedshops.com/de/"
          >
            Trusted Shops
          </a>{" "}
          Rechtstexter in Kooperation mit{" "}
          <a
            target="_blank"
            title="FÖHLISCH Rechtsanwälte"
            href="https://foehlisch.com"
            rel="nofollow"
          >
            FÖHLISCH Rechtsanwälte
          </a>
          .
        </i>
      </p>
    </div>
  );
}

export default App;
