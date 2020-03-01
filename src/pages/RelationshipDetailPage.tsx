import React, { Component } from "react";
import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from "@ionic/react";
import "./Relationship.css";
import RelationshipService from "../services/relationship.service";
import { Relationship } from "../models/Relationship";
import { Loader } from "../components/Loader";

class RelationshipDetailPage extends Component {
  state = {
    relationship: Relationship,
    id: 0,
    isLoading: true
  }

  relationshipService: RelationshipService;

  constructor(props: any) {
    super(props);
    this.state.id = props.match.params.id;
    this.relationshipService = new RelationshipService();
  }

  componentDidMount() {
    this.getOneRelationship(this.state.id);
  }

  getOneRelationship(id: number) {
    this.relationshipService.getOneRelationship(id)
      .then((response: any) => {
        this.setState({
          relationship: response.data
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
    if (this.state.isLoading) {
      return (
        <Loader isLoading={this.state.isLoading} />
      );
    } else {
      return (
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonBackButton defaultHref="/" />
              </IonButtons>
              <IonTitle>{this.state.relationship.name}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            
          </IonContent>
        </IonPage>
      );
    }

  };
}

export default RelationshipDetailPage;
