import { Animated } from 'react-native';
const { multiply } = Animated;

// react-navigation transition spec.
export const slideOverTransitionSpec = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 10,
    restSpeedThreshold: 10,
  },
};

// react-navigation screen transition interpolator. New screen moves in from the right to sit over previous screen which sinks back and fades out.
export const slideOverFromRightInterpolator = ({ current, next, inverted, layouts: { screen } }) => {
  const translateFocused = multiply(
    current.progress.interpolate({
      inputRange: [0, 1],
      outputRange: [screen.width, 0],
      extrapolate: 'clamp',
    }),
    inverted,
  );

  const translateUnfocused = next
    ? next.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0.9],
        extrapolate: 'clamp',
      })
    : 1;

  return {
    cardStyle: {
      transform: [
        // Translation animation for the new screen.
        { translateX: translateFocused },
        // Translation animation for the previous screen.
        { scale: translateUnfocused },
      ],
    },
    overlayStyle: {
      opacity: current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.8],
        extrapolate: 'clamp',
      }),
    },
  };
};

// react-navigation screen transition preset. Combines transition spec and interpolator together for a simplier import.
export const slideOverFromRightPreset = {
  transitionSpec: {
    open: slideOverTransitionSpec,
    close: slideOverTransitionSpec,
  },
  cardStyleInterpolator: slideOverFromRightInterpolator,
};
