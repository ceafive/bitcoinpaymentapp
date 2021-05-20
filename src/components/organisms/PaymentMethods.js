import React from "react";

import { style, styles } from "../../../styles";
import { AddCardPaymentSchema, AddMoMoPaymentSchema } from "../../schemas/FormikValidationSchema";
import { bankCardData, networkCodeData } from "../../utils/items";
import Scroller from "../atoms/containers/Scroller";
import Typography from "../atoms/typography/Typography";
import BottomSheetModal from "../misc/BottomSheetModal";
import PaymentCard from "../molecules/cards/PaymentCard";
import AddCardPaymentForm from "../molecules/forms/AddCardPaymentForm";
import AddMomoPaymentForm from "../molecules/forms/AddMomoPaymentForm";
import BaseForm from "../molecules/forms/BaseForm";
import AddPaymentButton from "../molecules/misc/AddPaymentButton";

const PaymentMethods = ({
  bottomSheetModal,
  bankPayments,
  momoPayments,
  bankCards,
  initialData,
  onPressSavePayment,
  onPressDeletePayment,
  onPressAddCard,
  onPressAddMoMo,
}) => {
  return (
    <Scroller wrapperStyles={{ marginHorizontal: 20, marginTop: 10 }}>
      <AddPaymentButton text="My banking cards" onPress={onPressAddCard} />
      {bankPayments.length > 0 ? (
        bankPayments.map((bankPayment) => {
          return (
            <PaymentCard
              key={bankPayment?.docID}
              cardData={bankCardData}
              paymentType="card"
              startIndex={1}
              endIndex={4}
              fieldName="type"
              payment={bankPayment}
              onPressDeletePayment={onPressDeletePayment}
            />
          );
        })
      ) : (
        <Typography text="No cards added" textStyles={{ textAlign: "center", ...style("my-2") }} />
      )}

      <AddPaymentButton text="My mobile money accounts" onPress={onPressAddMoMo} />
      {momoPayments.length > 0 ? (
        momoPayments.map((momoPayment) => {
          return (
            <PaymentCard
              key={momoPayment?.docID}
              cardData={networkCodeData}
              paymentType="momo"
              startIndex={3}
              endIndex={2}
              fieldName="networkCode"
              payment={momoPayment}
              onPressDeletePayment={onPressDeletePayment}
            />
          );
        })
      ) : (
        <Typography text="No mobile money accounts added" textStyles={{ textAlign: "center", ...style("my-2") }} />
      )}

      <BottomSheetModal name="paymentModal" ref={bottomSheetModal} snap={["70%", "75%"]}>
        <Scroller wrapperStyles={style("flex-0 p-4")}>
          <BaseForm
            initialValues={initialData}
            btnText={`Add ${bankCards ? "Card" : "Account"}`}
            btnStyles={{ marginTop: 20, paddingVertical: 10, borderRadius: 0 }}
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

export default PaymentMethods;
