# react-navigation-transition-slide-over
This package provides a transition preset for use with [React Navigation](https://reactnavigation.org/). The transition aims to mimic the current (November - 2020) transition effect used in Twitter's android mobile app.

## Usage
To use import the desired transition preset from `react-navigation-transition-slide-over` and spread the contents of it into the desired `react-navigation` Screen's `options` prop.

```js
import { slideOverFromRightPreset } from 'react-navigation-transition-slide-over';

// ...

<Stack.Screen
  name="Home"
  component={Home}
  options={{
    title: 'Home',
    ...slideOverFromRightPreset,
  }}
/>;
```

You can also spread the preset into a Navigator's `screenOptions` prop in order to apply the transition to all child Screens.

```js
import { slideOverFromRightPreset } from 'react-navigation-transition-slide-over';

// ...

<Stack.Navigator
  initialRouteName="Home"
  screenOptions={{
    ...slideOverFromRightPreset,
  }}
  mode="modal"
>
  <Stack.Screen name="Home" component={Home} />
  <Stack.Screen name="Profile" component={Profile} />
</Stack.Navigator>;

```

In addition to the various spreadable transition presets, `react-navigation-transition-slide-over` also makes the interpolators and transition specs directly available incase you wish to replace one or the other.

```js
import { slideOverTransitionSpec,  } from 'react-navigation-transition-slide-over';

// ...

<Stack.Screen
  name="Home"
  component={Home}
  options={{
    title: 'Home',
    transitionSpec: {
      open: slideOverTransitionSpec,
      close: slideOverTransitionSpec,
    },
    cardStyleInterpolator: slideOverFromRightInterpolator,
  }}
/>;
```

## Transitions

- `slideOverFromRightInterpolator` - New screen slides in from the right.