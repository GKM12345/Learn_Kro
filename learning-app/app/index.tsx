// import React, { useRef, useState } from "react";
// import { ActivityIndicator, StyleSheet } from "react-native";
// import { WebView } from "react-native-webview";
// import { SafeAreaView } from "react-native-safe-area-context";

// const WEB_URL = "https://learn-kro.vercel.app/";

// export default function HomeScreen() {
//   const webViewRef = useRef(null);
//   const [loading, setLoading] = useState(true);

//   return (
//     <SafeAreaView
//       style={[
//         styles.container,
//       ]}
//       edges={["top", "bottom", "left", "right"]}
//     >
//       {loading && <ActivityIndicator size="large" style={styles.loader} />}
//       <WebView
//         ref={webViewRef}
//         style={styles.webView}
//         source={{ uri: WEB_URL }}
//         onLoadEnd={() => setLoading(false)}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   webView: {
//     flex: 1,
//   },
//   loader: {
//     position: "absolute",
//     top: "50%",
//     left: "50%",
//     transform: [{ translateX: -25 }, { translateY: -25 }],
//   },
// });


import React, { useRef, useState, useEffect } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  BackHandler,
  Alert,
} from "react-native";
import { WebView } from "react-native-webview";
import { SafeAreaView } from "react-native-safe-area-context";

const WEB_URL = "https://learn-kro.vercel.app/";

export default function HomeScreen() {
  const webViewRef = useRef<WebView>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(WEB_URL);
  const [loading, setLoading] = useState(true);

  // 🧠 Handle Android bacrk button
  useEffect(() => {
    const onBackPress = () => {
      if (canGoBack && !isDashboard(currentUrl)) {
        webViewRef.current?.goBack();
        return true; // prevent default exit
      } else {
        // show confirmation before exiting
        Alert.alert("Exit App", "Do you want to exit?", [
          { text: "Cancel", style: "cancel" },
          { text: "Exit", onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      }
    };

    const subscription = BackHandler.addEventListener(
      "hardwareBackPress",
      onBackPress
    );
    return () => subscription.remove();
  }, [canGoBack, currentUrl]);

  // Helper function to check if user is on Dashboard page
  const isDashboard = (url: string) => {
    // You can adjust this condition to your actual dashboard path
    return url === WEB_URL || url === `${WEB_URL}/` || url.endsWith("/dashboard");
  };

  return (
    <SafeAreaView
      style={[styles.container,]}
      edges={["top", "bottom"]}
    >
      {loading && <ActivityIndicator size="large" style={styles.loader} />}
      <WebView
        ref={webViewRef}
        style={styles.webView}
        source={{ uri: WEB_URL }}
        onLoadEnd={() => setLoading(false)}
        javaScriptEnabled
        domStorageEnabled
        allowsFullscreenVideo={true}         
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}  
        mixedContentMode="always" 
        onNavigationStateChange={(navState) => {
          setCanGoBack(navState.canGoBack);
          setCurrentUrl(navState.url);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  webView: {
    flex: 1,
    borderWidth: 5,
    borderColor: "#1893F8",
  },
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
});
