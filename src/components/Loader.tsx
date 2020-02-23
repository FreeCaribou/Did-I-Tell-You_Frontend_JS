import React from 'react';
import { IonLoading } from '@ionic/react';
import i18n from "i18n-js";

interface ILoader {
  isLoading: boolean;
}

export const Loader: React.FC<ILoader> = (props) => {

  return (
    <IonLoading
      isOpen={props.isLoading}
      message={i18n.t("General.Wait")}
    />
  );
};

