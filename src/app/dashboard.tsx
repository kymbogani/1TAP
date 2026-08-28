import {
    MaterialCommunityIcons
} from "@expo/vector-icons";
import { Component } from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

// --- OOP Models ---

class User {
  constructor(
    public firstName: string,
    public unreadNotifications: number,
  ) {}
}

class Location {
  constructor(
    public address: string,
    public accuracyMeters: number,
  ) {}
}

class EmergencyCategory {
  constructor(
    public title: string,
    public iconName: keyof typeof MaterialCommunityIcons.glyphMap,
    public iconColor: string,
    public backgroundColor: string,
  ) {}
}

class ActionMenu {
  constructor(
    public title: string,
    public subtitle: string,
    public iconName: keyof typeof MaterialCommunityIcons.glyphMap,
    public iconColor: string,
    public iconBgColor: string,
  ) {}
}

// --- Class-Based Components ---

interface DashboardState {
  user: User;
  location: Location;
}

export default class CitizenDashboard extends Component<{}, DashboardState> {
  private categories: EmergencyCategory[];
  private actionMenus: ActionMenu[];

  constructor(props: {}) {
    super(props);

    // Initialize state using OOP models
    this.state = {
      user: new User("Kym", 2),
      location: new Location("Rizal Street, Tagum City", 12),
    };

    // Instantiate category objects
    this.categories = [
      new EmergencyCategory("Fire", "fire", "#E85D04", "#FFF5EE"),
      new EmergencyCategory("Police", "shield-star", "#1565C0", "#F0F8FF"),
      new EmergencyCategory("Ambulance", "ambulance", "#2E7D32", "#F1F8F1"),
      new EmergencyCategory("SARAS", "lifebuoy", "#6A1B9A", "#F8F1FA"),
    ];

    // Instantiate menu objects
    this.actionMenus = [
      new ActionMenu(
        "Emergency Contacts",
        "View and manage your emergency contacts",
        "phone",
        "#FFFFFF",
        "#E4181E",
      ),
      new ActionMenu(
        "Emergency History",
        "View your past emergency requests",
        "clock-time-four",
        "#FFFFFF",
        "#0CA750",
      ),
    ];
  }

  handleSOSPress = () => {
    console.log("SOS Triggered!");
  };

  handleUpdateLocation = () => {
    this.setState({
      location: new Location("Updating...", 0),
    });
    setTimeout(() => {
      this.setState({
        location: new Location("Pioneer Ave, Tagum City", 5),
      });
    }, 1500);
  };

  render() {
    const { user, location } = this.state;

    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <Header user={user} />

          {/* Location Card */}
          <LocationCard
            location={location}
            onUpdate={this.handleUpdateLocation}
          />

          {/* SOS Hero Section */}
          <SOSHero onPress={this.handleSOSPress} />

          {/* Emergency Types Grid */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Emergency Type</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.gridContainer}>
            {this.categories.map((cat, index) => (
              <CategoryCard key={index} category={cat} />
            ))}
          </View>

          {/* Action Menus */}
          <View style={styles.menuContainer}>
            {this.actionMenus.map((menu, index) => (
              <ActionRow key={index} menu={menu} />
            ))}
          </View>
        </ScrollView>

        {/* Custom Bottom Navigation Bar */}
        <BottomNav onSOSPress={this.handleSOSPress} />
      </SafeAreaView>
    );
  }
}

// --- Sub-Components ---

class Header extends Component<{ user: User }> {
  render() {
    const { user } = this.props;
    return (
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.greetingText}>Hello, {user.firstName}! 👋</Text>
          <Text style={styles.subGreetingText}>How can we help you today?</Text>
        </View>
        <TouchableOpacity style={styles.bellContainer}>
          <MaterialCommunityIcons name="bell-outline" size={28} color="#000" />
          {user.unreadNotifications > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{user.unreadNotifications}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

class LocationCard extends Component<{
  location: Location;
  onUpdate: () => void;
}> {
  render() {
    const { location, onUpdate } = this.props;
    return (
      <View style={styles.locationCard}>
        <View style={styles.locationLeft}>
          <MaterialCommunityIcons name="map-marker" size={32} color="#E4181E" />
          <View style={styles.locationTextContainer}>
            <Text style={styles.locationLabel}>Current Location</Text>
            <Text style={styles.locationAddress}>{location.address}</Text>
            <Text style={styles.locationAccuracy}>
              Accuracy: {location.accuracyMeters} meters
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.updateButton} onPress={onUpdate}>
          <MaterialCommunityIcons
            name="crosshairs-gps"
            size={16}
            color="#E4181E"
          />
          <Text style={styles.updateText}>Update</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class SOSHero extends Component<{ onPress: () => void }> {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.sosCard}
        onPress={this.props.onPress}
      >
        <View style={styles.sosRings}>
          <Text style={styles.sosSubtitle}>IN CASE OF EMERGENCY</Text>
          <Text style={styles.sosTitle}>SOS</Text>
          <Text style={styles.sosInstruction}>TAP TO CALL FOR HELP</Text>

          <View style={styles.sosButtonOuter}>
            <View style={styles.sosButtonInner}>
              <MaterialCommunityIcons
                name="phone-hangup"
                size={36}
                color="#E4181E"
                style={{ transform: [{ rotate: "270deg" }] }}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

class CategoryCard extends Component<{ category: EmergencyCategory }> {
  render() {
    const { category } = this.props;
    return (
      <TouchableOpacity
        style={[styles.catCard, { backgroundColor: category.backgroundColor }]}
      >
        <MaterialCommunityIcons
          name={category.iconName}
          size={40}
          color={category.iconColor}
        />
        <Text style={styles.catText}>{category.title}</Text>
      </TouchableOpacity>
    );
  }
}

class ActionRow extends Component<{ menu: ActionMenu }> {
  render() {
    const { menu } = this.props;
    return (
      <TouchableOpacity style={styles.actionRow}>
        <View
          style={[styles.actionIconBg, { backgroundColor: menu.iconBgColor }]}
        >
          <MaterialCommunityIcons
            name={menu.iconName}
            size={24}
            color={menu.iconColor}
          />
        </View>
        <View style={styles.actionTextContainer}>
          <Text style={styles.actionTitle}>{menu.title}</Text>
          <Text style={styles.actionSubtitle}>{menu.subtitle}</Text>
        </View>
        <MaterialCommunityIcons
          name="chevron-right"
          size={24}
          color="#90959D"
        />
      </TouchableOpacity>
    );
  }
}

class BottomNav extends Component<{ onSOSPress: () => void }> {
  render() {
    return (
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons name="home" size={26} color="#E4181E" />
          <Text style={[styles.navText, { color: "#E4181E" }]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons
            name="shield-check-outline"
            size={26}
            color="#90959D"
          />
          <Text style={styles.navText}>Safety Tips</Text>
        </TouchableOpacity>

        {/* Floating Center SOS Button */}
        <View style={styles.navCenter}>
          <TouchableOpacity
            style={styles.floatingSos}
            onPress={this.props.onSOSPress}
            activeOpacity={0.8}
          >
            <Text style={styles.floatingSosText}>SOS</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={26}
            color="#90959D"
          />
          <Text style={styles.navText}>Nearby</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <MaterialCommunityIcons
            name="account-outline"
            size={26}
            color="#90959D"
          />
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

// --- Styles ---

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#FAFAFA" },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100,
    paddingTop: 20,
  },

  // Header
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },
  greetingText: { fontSize: 22, fontWeight: "bold", color: "#0D1420" },
  subGreetingText: { fontSize: 14, color: "#606770", marginTop: 4 },
  bellContainer: { position: "relative" },
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    backgroundColor: "#E4181E",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#FAFAFA",
  },
  badgeText: { color: "#FFF", fontSize: 10, fontWeight: "bold" },

  // Location
  locationCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#F0F0F0",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  locationLeft: { flexDirection: "row", alignItems: "center", flex: 1 },
  locationTextContainer: { marginLeft: 12, flex: 1 },
  locationLabel: { fontSize: 12, color: "#90959D", marginBottom: 2 },
  locationAddress: { fontSize: 14, fontWeight: "bold", color: "#0D1420" },
  locationAccuracy: { fontSize: 11, color: "#90959D", marginTop: 2 },
  updateButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#F0F0F0",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  updateText: { fontSize: 12, fontWeight: "600", color: "#111", marginLeft: 4 },

  // SOS Hero
  sosCard: {
    backgroundColor: "#E4181E",
    borderRadius: 24,
    paddingVertical: 40,
    alignItems: "center",
    marginBottom: 24,
    overflow: "hidden",
  },
  sosRings: { alignItems: "center", width: "100%" },
  sosSubtitle: {
    color: "#FFF",
    fontSize: 14,
    fontWeight: "600",
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  sosTitle: {
    color: "#FFF",
    fontSize: 64,
    fontWeight: "900",
    letterSpacing: 2,
    marginBottom: 8,
  },
  sosInstruction: {
    color: "#FFF",
    fontSize: 13,
    fontWeight: "500",
    marginBottom: 24,
  },
  sosButtonOuter: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 50,
    padding: 12,
  },
  sosButtonInner: {
    backgroundColor: "#FFF",
    borderRadius: 40,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },

  // Grid
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: { fontSize: 16, fontWeight: "bold", color: "#0D1420" },
  viewAllText: { fontSize: 14, fontWeight: "600", color: "#E4181E" },
  gridContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  catCard: {
    width: "23%",
    aspectRatio: 0.8,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  catText: { fontSize: 12, fontWeight: "600", color: "#111", marginTop: 8 },

  // Action Menus
  menuContainer: {
    backgroundColor: "#FFF",
    borderRadius: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F5F5F5",
  },
  actionIconBg: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  actionTextContainer: { flex: 1, marginLeft: 16 },
  actionTitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#0D1420",
    marginBottom: 4,
  },
  actionSubtitle: { fontSize: 13, color: "#90959D" },

  // Bottom Nav
  navContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#FFF",
    paddingBottom: 24,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: { alignItems: "center", flex: 1 },
  navText: { fontSize: 10, marginTop: 4, color: "#90959D", fontWeight: "500" },
  navCenter: {
    width: 70,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -40,
  },
  floatingSos: {
    backgroundColor: "#E4181E",
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#FFF",
    elevation: 4,
    shadowColor: "#E4181E",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  floatingSosText: { color: "#FFF", fontWeight: "900", fontSize: 18 },
});
