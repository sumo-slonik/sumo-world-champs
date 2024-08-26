import 'dotenv/config';

export default () => ({
    expo: {
        name: "world_sumo_chmpionships",
        slug: "world_sumo_chmpionships",
        version: "1.0.0",
        orientation: "portrait",
        icon: "./assets/images/icon.png",
        scheme: "myapp",
        userInterfaceStyle: "automatic",
        splash: {
            image: "./assets/images/splash.png",
            resizeMode: "contain",
            backgroundColor: "#ffffff"
        },
        ios: {
            supportsTablet: true
        },
        android: {
            adaptiveIcon: {
                foregroundImage: "./assets/images/adaptive-icon.png",
                backgroundColor: "#ffffff"
            },
            config: {
                googleMaps: {
                    apiKey: process.env.GOOGLE_MAPS_API_KEY || ""
                }
            },
            "package": "com.Maciek.sumoapp"
        },
        web: {
            bundler: "metro",
            output: "static",
            favicon: "./assets/images/favicon.png",
            config: {
                googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || ""
            }
        },
        plugins: [
            "expo-router"
        ],
        experiments: {
            typedRoutes: true,
        }
    }
});
