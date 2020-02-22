import React, { Component } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import "./Home.css";
import i18n from "i18n-js";
import ExploreContainer from "../components/ExploreContainer";
import BaseService from "../services/base.service";
import RelationshipService from "../services/relationship.service";

class Home extends Component {
  baseService: BaseService;
  relationshipService: RelationshipService;

  constructor(props: any) {
    super(props);
    this.baseService = new BaseService();
    this.relationshipService = new RelationshipService();
  }

  componentDidMount() {
    this.baseService
      .getHelloWorld()
      .then(function (response: any) {
        // handle success
        console.log(response);
      })
      .catch(function (error: any) {
        // handle error
        console.log(error.response);
      })
      .then(function () {
        // always executed
        console.log("finish");
      });

    this.relationshipService.getAllRelationship()
      .then(function (response: any) {
        // handle success
        console.log(response);
      })
      .catch(function (error: any) {
        // handle error
        console.log(error.response);
      })
      .then(function () {
        // always executed
        console.log("finish");
      });
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{i18n.t("Menu.Home")}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <ExploreContainer
            name={i18n.t("General.HelloWorld")}
          ></ExploreContainer>
        </IonContent>
      </IonPage>
    );
  }
}

export default Home;
