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
  const { data: user } = useUser();
  const [bankCards, setBankCards] = React.useState(false);
  const [initialData, setInitialData] = React.useState({});
  const bottomSheetModal = React.useRef(null);

  // query bank cards and momo payments
  const momoPaymentRef = firestore.collection("users").doc(user?.uid).collection("momoPayments");
  const bankPaymentRef = firestore.collection("users").doc(user?.uid).collection("bankPayments");

  const { data: momoPayments } = useFirestoreCollectionData(momoPaymentRef, {
    idField: "docID",
  });
  const { data: bankPayments } = useFirestoreCollectionData(bankPaymentRef, {
    idField: "docID",
  });

  const onPressSavePayment = async (data) => {
    try {
      data = bankCards ? { ...data, type: data?.type?.value } : { ...data, networkCode: data?.networkCode?.value };

      const paymentRef = firestore
        .collection("users")
        .doc(user?.uid)
        .collection(bankCards ? `bankPayments` : `momoPayments`)
        .doc();

      await paymentRef.set(data, { merge: true });

      closeModal(bottomSheetModal);
      Toast.show({
        type: "success",
        text1: "Card Saved ",
      });
    } catch (error) {
      console.log(error);
      Toast.show({
        type: "error",
        text1: "Try Again",
      });
    }
  };

  return (
    <Scroller wrapperStyles={{ marginHorizontal: 20, marginTop: 10 }}>
      <AddPaymentButton
        text="My banking cards"
        onPress={() => {
          setBankCards(true);
          setInitialData(initialCardValues);
          showModal(bottomSheetModal);
        }}
      />
      {bankPayments.map((bankPayment) => {
        return (
          <PaymentCard
            key={bankPayment?.docID}
            cardData={bankCardData}
            paymentType="card"
            startIndex={1}
            endIndex={4}
            fieldName="type"
            payment={bankPayment}
          />
        );
      })}

      <AddPaymentButton
        text="My mobile money accounts"
        onPress={() => {
          setBankCards(false);
          setInitialData(initialMoMoValues);
          showModal(bottomSheetModal);
        }}
      />
      {momoPayments.map((momoPayment) => {
        return (
          <PaymentCard
            key={momoPayment?.docID}
            cardData={networkCodeData}
            paymentType="momo"
            startIndex={3}
            endIndex={2}
            fieldName="networkCode"
            payment={momoPayment}
          />
        );
      })}

      <BottomSheetModal name="paymentModal" ref={bottomSheetModal} snap={["70%", "75%"]}>
        <Scroller wrapperStyles={style("flex-0 p-4")}>
          <BaseForm
            initialValues={initialData}
            btnText={`Add ${bankCards ? "Card" : "Payment Method"}`}
            btnStyles={{ marginTop: 20, paddingVertical: 10, borderRadius: 10 }}
            onPressSubmit={onPressSavePayment}
            validationSchema={bankCards ? AddCardPaymentSchema : AddMoMoPaymentSchema}
          >
            {bankCards ? <AddCardPaymentForm /> : <AddMomoPaymentForm />}
          </BaseForm>
        </Scroller>
      </BottomSheetModal>
    </Scroller>
  );
};

export default PaymentMethodsScreen;
