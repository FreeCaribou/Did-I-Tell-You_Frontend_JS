import React, { Component } from "react";
import { IonContent, IonPage, IonItem, IonList, IonFab, IonFabButton, IonIcon } from "@ionic/react";
import "./Relationship.css";
import RelationshipService from "../services/relationship.service";
import { Relationship } from "../models/Relationship";
import { Loader } from "../components/Loader";
import { RelationshipItem } from "../components/RelationshipItem";
import { AddRelationshipModal } from "../components/AddRelationshipModal";
import { add } from 'ionicons/icons';

class RelationshipPage extends Component {
  state = {
    relationshipList: Array<Relationship>(),
    isLoading: true,
    showModal: false
  }

  relationshipService: RelationshipService;

  constructor(props: any) {
    super(props);
    this.relationshipService = new RelationshipService();
    this.hideModal = this.hideModal.bind(this);
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

  hideModal(event: any) {
    console.log(event);
    this.setState({ showModal: false });
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
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton onClick={() => this.setState({ showModal: true })}>
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
          <AddRelationshipModal showModal={this.state.showModal} hideModal={this.hideModal} />
        </IonContent>
      </IonPage>
    );
  };
}

export default RelationshipPage;
