import { FC } from "react";
import { StyleSheet, Text, View, type TextStyle } from "react-native";

interface Props {
  children: string;
  bang?: boolean;
  style?: TextStyle;
}

const Hello: FC<Props> = (props): JSX.Element => {
  const { children, bang, style } = props;
  return (
    <View>
      <Text style={[styles.text, style]}>
        Hello {children} {bang === true ? "!" : "?"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
    backgroundColor: "blue",
    fontSize: 40,
    fontWeight: "bold",
    padding: 16,
  },
});

export default Hello;
