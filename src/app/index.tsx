import { StyleSheet,  View } from "react-native";
import { MemoListItem } from "../components/MemoListItem";
import { Header } from "../components/Header";
import { CircleButton } from "../components/CircleButton";

interface MemoList {
  id: number;
  title: string;
  date: string;
}

const memoList: MemoList[] = [
  { id: 1, title: "memo1", date: "2024/01/01" },
  { id: 2, title: "memo2", date: "2024/01/01" },
  { id: 3, title: "memo3", date: "2024/01/01" },
  { id: 4, title: "memo4", date: "2024/01/01" },
];

const Index = () => {
  return (
    <View style={styles.container}>
      {/*ヘッダ部分*/}
			<Header/>

      {/*リスト部分*/}
      <View>
        {/*メモカード*/}
        {memoList.map((m: MemoList) => {
          return <MemoListItem key={m.id} title={m.title} date={m.date} />;
        })}
      </View>

			<CircleButton>＋</CircleButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});

export default Index;
