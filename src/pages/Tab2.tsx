import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import { Camera, CameraResultType } from '@capacitor/camera';
import React, { useState } from 'react';

const Tab2: React.FC = () => {

  const [photoList, setPhotoList] = useState(new Array<string>);


  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });

     const imgArray: Array<string> = [];

    if (undefined !== image.webPath) {
      imgArray.push(image.webPath);
      setPhotoList(photoList => ([...photoList, ...imgArray]));
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen onClick={() => takePicture()}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        {photoList.map((e: string) => {
          return (
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Card Title</IonCardTitle>
              <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
            </IonCardHeader>
          
            <IonCardContent>
              <img src={e}></img>
            </IonCardContent>
          </IonCard>)
        })}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
