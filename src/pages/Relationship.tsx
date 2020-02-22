import React, { Component } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import "./Relationship.css";
import i18n from "i18n-js";
import RelationshipService from "../services/relationship.service";

class Relationship extends Component {
  relationshipService: RelationshipService;

  constructor(props: any) {
    super(props);
    this.relationshipService = new RelationshipService();
  }

  componentDidMount() {
    this.relationshipService.getAllRelationship()
      .then(function (response: any) {
        console.log('success', response);
      })
      .catch(function (error: any) {
        console.log('error', error.response);
      })
      .then(function () {
        console.log("finish");
      });
  }


  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>{i18n.t("Menu.Relationship")}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent></IonContent>
      </IonPage>
    );
  };
}


export default Relationship;
