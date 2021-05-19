import subYears from "date-fns/subYears";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { DatePickerModal } from "react-native-paper-dates";

const DatePicker = ({ fieldName = "", values, showDatePicker, setShowDatePicker, setFieldValue }) => {
  return (
    <DatePickerModal
      // locale={'en'} optional, default: automatic
      mode="single"
      visible={showDatePicker}
      onDismiss={() => setShowDatePicker(false)}
      date={values[fieldName]}
      // onChange={({ date }) => {
      //   setFieldValue(fieldName, date);
      //   setShowDatePicker(false);
      // }}
      onConfirm={({ date }) => {
        setFieldValue(fieldName, date);
        setShowDatePicker(false);
      }}
      validRange={{
        startDate: subYears(new Date(), 50), // optional
        endDate: subYears(new Date(), 18), // optional
      }}
      // onChange={} // same props as onConfirm but triggered without confirmed by user
      saveLabel={"Save"} // optional
      // label="Select date" // optional
      // animationType="slide" // optional, default is 'slide' on ios/android and 'none' on web
    />
  );
};

export default DatePicker;

const styles = StyleSheet.create({});
