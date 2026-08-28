import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class HeroHeader extends Component {
  render() {
    return (
      <LinearGradient
        colors={["#FFFFFF", "#FCEAEA"]}
        style={styles.headerContainer}
      >
        <View style={styles.skylinePlaceholder} />

        <View style={styles.titleLockup}>
          <MaterialCommunityIcons
            name="gesture-tap"
            size={64}
            color="#E4181E"
          />
          <View style={styles.titleTextContainer}>
            <Text style={styles.titleRed}>1-TAP</Text>
            <Text style={styles.titleBlack}>EMERGENCY</Text>
          </View>
        </View>

        <Text style={styles.tagline}>
          One Tap. <Text style={styles.taglineBoldRed}>Help</Text> is on the
          way.
        </Text>

        <View style={styles.illustrationStrip}>
          <View style={styles.sosButtonOuter}>
            <View style={styles.sosButtonInner}>
              <Text style={styles.sosText}>SOS</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    height: "45%",
    alignItems: "center",
    paddingTop: 60,
    position: "relative",
  },
  skylinePlaceholder: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    height: 100,
    backgroundColor: "#FCEAEA",
    opacity: 0.15,
  },
  titleLockup: { flexDirection: "row", alignItems: "center", marginBottom: 12 },
  titleTextContainer: { marginLeft: 12 },
  titleRed: {
    fontSize: 36,
    fontWeight: "900",
    color: "#E4181E",
    letterSpacing: -1,
  },
  titleBlack: {
    fontSize: 22,
    fontWeight: "900",
    color: "#0D1420",
    letterSpacing: 1,
  },
  tagline: { fontSize: 16, color: "#0D1420", marginBottom: 24 },
  taglineBoldRed: { fontWeight: "bold", color: "#E4181E" },
  illustrationStrip: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginTop: 10,
  },
  sosButtonOuter: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "rgba(252, 234, 234, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  sosButtonInner: {
    width: 76,
    height: 76,
    borderRadius: 38,
    backgroundColor: "#E4181E",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#E4181E",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 8,
  },
  sosText: { color: "#FFFFFF", fontWeight: "bold", fontSize: 24 },
});
