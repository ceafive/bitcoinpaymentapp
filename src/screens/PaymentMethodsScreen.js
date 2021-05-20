import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeViewGestureHandler } from "react-native-gesture-handler";
import { Avatar, Surface, useTheme } from "react-native-paper";
import { useFirestore, useUser } from "reactfire";

import { style } from "../../styles";
import Button from "../components/atoms/buttons/Button";
import ComponentSideBySide from "../components/atoms/containers/ComponentSideBySide";
import Screen from "../components/atoms/containers/Screen";
import Scroller from "../components/atoms/containers/Scroller";
import Typography, { types } from "../components/atoms/typography/Typography";
import BottomSheetModal from "../components/misc/BottomSheetModal";
import AddCardPaymentForm from "../components/molecules/forms/AddCardPaymentForm";
import AddMomoPaymentForm from "../components/molecules/forms/AddMomoPaymentForm";
import BaseForm from "../components/molecules/forms/BaseForm";
import { fonts } from "../constants/fonts";
import { textSizes } from "../constants/styles";
import { closeModal, showModal } from "../functions";
import { AddCardPaymentSchema, AddMoMoPaymentSchema } from "../schemas/FormikValidationSchema";

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
  const user = useUser();
  const [bankCards, setBankCards] = React.useState(false);
  const [initialData, setInitialData] = React.useState({});
  const bottomSheetModal = React.useRef(null);

  // console.log(user);

  const onPressSavePayment = async (data) => {
    try {
      const type = bankCards ? data?.type?.value : data?.networkCode?.value;
      const networkCode = bankCards ? data?.type?.value : data?.networkCode?.value;

      data = bankCards ? { ...data, type } : { ...data, networkCode };

      console.log(data);
      return;

      const paymentRef = firestore
        .collection("users")
        .doc(user?.uid)
        .collection(bankCards ? `bankPayments` : `momoPayments`)
        .doc();

      await paymentRef.set(data, { merge: true });
      closeModal(bottomSheetModal);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Scroller wrapperStyles={{ marginHorizontal: 20, marginTop: 10 }}>
      <ComponentSideBySide wrapperStyles={style("items-center justify-between")}>
        <Typography textStyles={{ color: "#BEBEC0", ...textSizes["SMALL"] }}>My banking cards</Typography>
        <Button
          mode="text"
          uppercase={false}
          color="#BEBEC0"
          compact
          btnStyles={{ ...textSizes["4XLARGE"] }}
          onPress={() => {
            setBankCards(true);
            setInitialData(initialCardValues);
            showModal(bottomSheetModal);
          }}
        >
          + Add
        </Button>
      </ComponentSideBySide>

      <ComponentSideBySide wrapperStyles={{ borderRadius: 15, marginVertical: 10, backgroundColor: "#F3F5F9", padding: 15 }}>
        <Avatar.Image
          style={{ marginRight: 10 }}
          size={50}
          source={{
            uri: "https://lh6.ggpht.com/dQ72DEJqMAPT9X8W90gV45UKmGfEDghc2T4ARnWO3kyjPRaP3X00YLs696LRRyHyoGk=h800",
          }}
        />
        <ComponentSideBySide type="col" wrapperStyles={style()}>
          <Typography type={types.Subheading} textStyles={{ fontFamily: fonts.Lato_Black }}>
            Visa
          </Typography>
          <Typography textStyles={{ color: "#B7C6D1" }}>4*************2 4567</Typography>
        </ComponentSideBySide>
      </ComponentSideBySide>

      <ComponentSideBySide wrapperStyles={{ borderRadius: 15, marginVertical: 10, backgroundColor: "#F3F5F9", padding: 15 }}>
        <Avatar.Image
          style={{ marginRight: 10 }}
          size={50}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGS68HGBEbUvi1keG0QFFk8N0GNmykrFCU6FwvhXOV_tcNIEU54LABLCyVBK1GeXEFpsk&usqp=CAU",
          }}
        />
        <ComponentSideBySide type="col" wrapperStyles={style()}>
          <Typography type={types.Subheading} textStyles={{ fontFamily: fonts.Lato_Black }}>
            Mastercard
          </Typography>
          <Typography textStyles={{ color: "#B7C6D1" }}>4*************2 4567</Typography>
        </ComponentSideBySide>
      </ComponentSideBySide>

      <ComponentSideBySide wrapperStyles={style("items-center justify-between")}>
        <Typography textStyles={{ color: "#BEBEC0", ...textSizes["SMALL"] }}>My mobile money accounts</Typography>
        <Button
          mode="text"
          uppercase={false}
          color="#BEBEC0"
          compact
          btnStyles={{ ...textSizes["4XLARGE"] }}
          onPress={() => {
            setBankCards(false);
            setInitialData(initialMoMoValues);
            showModal(bottomSheetModal);
          }}
        >
          + Add
        </Button>
      </ComponentSideBySide>

      <ComponentSideBySide wrapperStyles={{ borderRadius: 15, marginVertical: 10, backgroundColor: "#F3F5F9", padding: 15 }}>
        <Avatar.Image
          style={{ marginRight: 10 }}
          size={50}
          source={{
            uri: "https://banner2.cleanpng.com/20180807/bs/kisspng-logo-mtn-ivory-coast-brand-product-design-mtn-grou-clients7-5b6a532a34f317.7185509615336947622169.jpg",
          }}
        />
        <ComponentSideBySide type="col" wrapperStyles={style()}>
          <Typography type={types.Subheading} textStyles={{ fontFamily: fonts.Lato_Black }}>
            MTN
          </Typography>
          <Typography textStyles={{ color: "#B7C6D1" }}>4*************2 4567</Typography>
        </ComponentSideBySide>
      </ComponentSideBySide>

      <ComponentSideBySide wrapperStyles={{ borderRadius: 15, marginVertical: 10, backgroundColor: "#F3F5F9", padding: 15 }}>
        <Avatar.Image
          style={{ marginRight: 10 }}
          size={50}
          source={{
            uri: "https://play-lh.googleusercontent.com/N_CHa0A5TzzGiSGhYJTDNtib-r2jXEUwvuq0mgmbwFQfE6z302wKLa9aowjPSo4a8HA",
          }}
        />
        <ComponentSideBySide type="col" wrapperStyles={style()}>
          <Typography type={types.Subheading} textStyles={{ fontFamily: fonts.Lato_Black }}>
            Vodafone
          </Typography>
          <Typography textStyles={{ color: "#B7C6D1" }}>4*************2 4567</Typography>
        </ComponentSideBySide>
      </ComponentSideBySide>

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
