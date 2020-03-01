import React, { Component } from "react";
import { IonContent, IonPage, IonItem, IonList } from "@ionic/react";
import "./Relationship.css";
import RelationshipService from "../services/relationship.service";
import { Relationship } from "../models/Relationship";
import { Loader } from "../components/Loader";
import { RelationshipItem } from "../components/RelationshipItem";

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
      <IonItem routerLink={`/relationship/${item.id}`} key={item.id}>
        <RelationshipItem relationship={item} />
      </IonItem>
    );

    return (
      <IonPage>
        <IonContent>
          <Loader isLoading={this.state.isLoading} />
          <IonList>{list}</IonList>
        </IonContent>
      </IonPage>
    );
  };
}

export default RelationshipPage;
