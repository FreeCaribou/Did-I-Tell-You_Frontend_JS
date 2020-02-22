import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { home, person } from "ionicons/icons";
import Home from "./pages/HomePage";
import Relationship from "./pages/RelationshipPage";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import i18n from "i18n-js";
import en from "./i18n/en.json";
import fr from "./i18n/fr.json";
import no from "./i18n/no.json";

class App extends Component {
  state = {
    currentLanguage: "en",
    acceptedLanguage: ["en", "fr", "no"] // will be nl, de, sw and fi later
  };

  componentDidMount() {
    console.log("hello comrade on the console!");
    let userLang = navigator.language;
    userLang = userLang.slice(0, 2);

    if (userLang === "nb" || userLang === "nn") {
      userLang = "no";
    }

    if (this.state.acceptedLanguage.includes(userLang)) {
      this.setState({ currentLanguage: userLang });
    }
  }

  changeLanguage = (language: string) => {
    console.log("change lang", language);
    this.setState({ currentLanguage: language });
    i18n.locale = language;
  };

  render() {
    i18n.locale = this.state.currentLanguage;
    i18n.defaultLocale = "en";
    i18n.fallbacks = true;
    i18n.translations = { en, fr, no };

    return (
      <IonApp>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/home" component={Home} exact={true} />
              <Route
                path="/relationship"
                component={Relationship}
                exact={true}
              />
              <Route
                path="/"
                render={() => <Redirect to="/home" />}
                exact={true}
              />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="Home" href="/home">
                <IonIcon icon={home} />
                <IonLabel>{i18n.t("Menu.Home")}</IonLabel>
              </IonTabButton>
              <IonTabButton tab="Relationship" href="/relationship">
                <IonIcon icon={person} />
                <IonLabel>{i18n.t("Menu.Relationship")}</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonApp>
    );
  }
}

export default App;
