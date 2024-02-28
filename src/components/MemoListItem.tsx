import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  title: string;
  date: string;
}

export const MemoListItem: FC<Props> = (props) => {
  const { title, date } = props;
  return (
    <View style={styles.memoListItem}>
      <View>
        <Text style={styles.memoListTitle}>{title}</Text>
        <Text style={styles.memoListDate}>{date}</Text>
      </View>
      <View>
        <Text>X</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.15)",
  },
  memoListTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "#848484",
  },
});
