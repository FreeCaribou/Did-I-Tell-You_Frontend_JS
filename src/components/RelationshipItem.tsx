import React from 'react';
import { IonLabel } from '@ionic/react';
import { Relationship } from '../models/Relationship';

interface IRelationshipItem {
  relationship: Relationship;
}

export const RelationshipItem: React.FC<IRelationshipItem> = (props) => {

  return (
    <IonLabel>{props.relationship.name}</IonLabel>
  );
};

