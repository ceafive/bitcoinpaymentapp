import React from "react";
import { StyleSheet, View } from "react-native";
import { NativeViewGestureHandler } from "react-native-gesture-handler";
import { Avatar, IconButton, Surface, useTheme } from "react-native-paper";
import Toast from "react-native-toast-message";
import { useFirestore, useFirestoreCollectionData, useUser } from "reactfire";

import { style } from "../../styles";
import Button from "../components/atoms/buttons/Button";
import ComponentSideBySide from "../components/atoms/containers/ComponentSideBySide";
import Screen from "../components/atoms/containers/Screen";
import Scroller from "../components/atoms/containers/Scroller";
import Text, { types as textTypes } from "../components/atoms/typography/Text";
import Typography, { types } from "../components/atoms/typography/Typography";
import BottomSheetModal from "../components/misc/BottomSheetModal";
import PaymentCard from "../components/molecules/cards/PaymentCard";
import AddCardPaymentForm from "../components/molecules/forms/AddCardPaymentForm";
import AddMomoPaymentForm from "../components/molecules/forms/AddMomoPaymentForm";
import BaseForm from "../components/molecules/forms/BaseForm";
import AddPaymentButton from "../components/molecules/misc/AddPaymentButton";
import PaymentMethods from "../components/organisms/PaymentMethods";
import { fonts } from "../constants/fonts";
import { textSizes } from "../constants/styles";
import { closeModal, showModal } from "../functions";
import { AddCardPaymentSchema, AddMoMoPaymentSchema } from "../schemas/FormikValidationSchema";
import { bankCardData, networkCodeData } from "../utils/items";

const initialCardValues = {
  fullName: "",
  cardNumber: "",
  expiryDate: "",
  cvv: "",
  type: null,
};

const initialMoMoValues = {
  fullName: "",
  momoNumber: "",
  networkCode: "",
};

const PaymentMethodsScreen = () => {
  const theme = useTheme();
  const firestore = useFirestore();
  const firestoreStatics = useFirestore;
  const { data: user } = useUser();
  const [bankCards, setBankCards] = React.useState(false);
  const [initialData, setInitialData] = React.useState({});
  const bottomSheetModal = React.useRef(null);

  // query bank cards and momo payments
  const createQuery = (key) => firestore.collection("users").doc(user?.uid).collection(key).orderBy("addedOn", "desc");
  const { data: momoPayments } = useFirestoreCollectionData(createQuery(`momoPayments`), {
    idField: "docID",
  });
  const { data: bankPayments } = useFirestoreCollectionData(createQuery(`bankPayments`), {
    idField: "docID",
  });

  const timeStamp = firestoreStatics.FieldValue.serverTimestamp;

  const onPressSavePayment = async (data) => {
    try {
      data = bankCards ? { ...data, type: data?.type?.value } : { ...data, networkCode: data?.networkCode?.value };
      const collection = bankCards ? `bankPayments` : `momoPayments`;

      const paymentRef = firestore.collection("users").doc(user?.uid).collection(collection).doc();

      await paymentRef.set({ ...data, collection, addedOn: timeStamp() }, { merge: true });

      closeModal(bottomSheetModal);
      Toast.show({
        type: "success",
        text1: "Card Saved",
      });
    } catch (error) {
      console.log(error);
      Toast.show({
        type: "error",
        text1: "Try Again",
      });
    }
  };

  const onPressDeletePayment = async (data) => {
    try {
      const paymentRef = firestore
        .collection("users")
        .doc(user?.uid)
        .collection(bankCards ? `bankPayments` : `momoPayments`)
        .doc(data?.docID);

      await paymentRef.delete();

      Toast.show({
        type: "success",
        text1: "Deleted",
      });
    } catch (error) {
      console.log(error);
      Toast.show({
        type: "error",
        text1: "Delete Failed",
      });
    }
  };

  return (
    <PaymentMethods
      bankCards={bankCards}
      bankPayments={bankPayments}
      bottomSheetModal={bottomSheetModal}
      initialData={initialData}
      momoPayments={momoPayments}
      onPressAddMoMo={() => {
        setBankCards(false);
        setInitialData(initialMoMoValues);
        showModal(bottomSheetModal);
      }}
      onPressAddCard={() => {
        setBankCards(true);
        setInitialData(initialCardValues);
        showModal(bottomSheetModal);
      }}
      onPressSavePayment={onPressSavePayment}
      onPressDeletePayment={onPressDeletePayment}
    />
  );
};

export default PaymentMethodsScreen;
