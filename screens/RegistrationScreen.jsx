import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import BgImg from "../assets/bg-img.jpg";
import AddIcon from "../assets/add.png";

const RegistrationScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={BgImg} resizeMode="cover" style={styles.image}>
        <View style={styles.contentContainer}>
          <View style={styles.avatarWrapper}>
            <Image source={AddIcon} style={styles.addBtn}/>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  contentContainer: {
    backgroundColor: "#FFFFFF",
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarWrapper: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: "-50%" }],
    borderRadius: 16,
    zIndex: 2,
  },
  addBtn: {
    position: "absolute",
    fill: "tomato",
    width: 25,
    height: 25,
    bottom: 14,
    right: -12,
    zIndex: 3,
  }
});
