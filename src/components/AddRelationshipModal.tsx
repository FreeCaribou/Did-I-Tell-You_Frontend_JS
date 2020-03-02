import React, { useState } from "react";
import { IonModal, IonButton, IonInput } from "@ionic/react";
import i18n from "i18n-js";

interface IAddRelationshipModal {
  showModal: boolean;
  hideModal: any;
}

export const AddRelationshipModal: React.FC<IAddRelationshipModal> = props => {
  const [name, setName] = useState("");

  function hideModal() {
    props.hideModal(name);
  }

  return (
    <IonModal isOpen={props.showModal} mode="ios">
      <p>This is modal content</p>
      <IonInput
        value={name}
        placeholder={i18n.t("Relationship.Name")}
        onIonChange={e => setName((e.target as HTMLInputElement).value)}
      />
      <IonButton onClick={() => hideModal()}>Close Modal</IonButton>
    </IonModal>
  );
};
