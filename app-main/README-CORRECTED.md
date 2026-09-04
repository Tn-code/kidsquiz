# QuizLand — corrected Android build

## Changes
- Removed `react-native-startapp` / Start.io from the Android project.
- Kept `src/services/adService.js` API-compatible, but ads are disabled.
- Added an EAS `preview` APK profile for phone testing.
- Added an EAS `production` profile for Google Play AAB builds.
- Updated Android compile/target SDK configuration to 36 for Expo SDK 57.

## Why Start.io was removed
This app is primarily directed at children. Google Play requires apps serving ads to children to use Families self-certified ad SDK versions. Start.io should not be used here unless the provider and configuration are confirmed compliant for this specific child-directed use case.

## Build from a terminal
APK for testing:
`eas build --platform android --profile preview`

AAB for Google Play:
`eas build --platform android --profile production`

The current build intentionally has no live ads. Add a Families-compliant provider only after verifying the provider's current certification and configuring child-directed requests.
