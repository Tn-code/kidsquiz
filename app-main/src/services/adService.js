import { Platform } from 'react-native';

/**
 * QuizLand ad service
 *
 * Start.io has been removed from this build because this app is
 * primarily child-directed and Google Play requires ad SDKs used
 * for children to be Families self-certified.
 *
 * The public API is kept so existing quiz screens do not crash.
 * A certified provider can be added later without changing callers.
 */

export const initStartio = () => {
  console.log('Ads disabled: waiting for a Google Play Families-compliant provider.');
};

export const showBanner = (_position = 'bottom') => {
  console.log('Banner ad disabled.');
  return false;
};

export const showInterstitial = async () => {
  console.log('Interstitial ad disabled.');
  return false;
};

export const showRewardedVideo = async () => {
  console.log('Rewarded ad disabled.');
  return false;
};

export const loadNativeAd = async () => {
  return null;
};

export default {
  initStartio,
  showBanner,
  showInterstitial,
  showRewardedVideo,
  loadNativeAd,
};
