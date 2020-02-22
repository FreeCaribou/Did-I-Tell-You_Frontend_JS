import React, { Component } from "react";
import { IonContent, IonPage, } from "@ionic/react";
import "./Relationship.css";
import RelationshipService from "../services/relationship.service";
import { Relationship } from "../models/Relationship";

class RelationshipPage extends Component {
  state = {
    relationshipList: Array<Relationship>(),
    isLoading: true
  }

  relationshipService: RelationshipService;

  constructor(props: any) {
    super(props);
    this.relationshipService = new RelationshipService();
  }

  componentDidMount() {
    this.getAllRelationship();
  }

  getAllRelationship() {
    this.relationshipService.getAllRelationship()
      .then((response: any) => {
        this.setState({
          relationshipList: response.data
        });
        console.log('success', response);
      })
      .catch((error: any) => {
        console.log('error', error.response);
      })
      .then(() => {
        console.log("finish");
        this.setState({
          isLoading: false
        });
      });
  }

  render() {
    const list = this.state.relationshipList.map((item) =>
      <li key={item.id}>{item.name}</li>
    );

    return (
      <IonPage>
        <IonContent>
          <ul>{list}</ul>
        </IonContent>
      </IonPage>
    );
  };
}

export default RelationshipPage;
