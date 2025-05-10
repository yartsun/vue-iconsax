<article ><a name="user-content-readme-top"></a></p>

<div align="center">
  <h1 align="center"></a>iconsax for Vue</h1>
  <p align="center">
    A total of 6000 icons in 6 different designs | <strong>Only supported for vue3</strong>
    <br>
    <br>
    <a href="https://vue-iconsax-preview.vercel.app/"><strong> Browse icons</strong></a>
  </p>
</div>

# About the Project

the features of this package include the following:

- 1000 icons in 6 different types
- Perfectly balance
- 24px grid-based
- Lightweight, powerful and easy to use
  <g-emoji class="g-emoji" alias="smile" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f604.png"><img class="emoji" alt="smile" src="https://github.githubassets.com/images/icons/emoji/unicode/1f604.png" width="20" height="20"></g-emoji>

<a href="https://vuejs.org/" rel="nofollow"><img src="https://www.cdnlogo.com/logos/v/92/vue-js.svg" width="70" height="70"></a>

# Installation

- Install Yarn package

```bash
yarn add vue-iconsax
```

- Install NPM package

```bash
npm install vue-iconsax
```

## Usage

### 1. Import all icons (not recommended for production)

```js
import * as Icons from 'vue-iconsax'

export default {
  components: {
    ...Icons
  }
}
```

### 2. Import individual icons (recommended for production)

```js
import Apple from 'vue-iconsax/Apple'
import Activity from 'vue-iconsax/Activity'

export default {
  components: {
    Apple,
    Activity
  }
}
```

### 3. Using the generic icon component

```js
import { VsxIcon } from 'vue-iconsax'

export default {
  components: {
    VsxIcon
  }
}
```

Then in your template:

```vue
<template>
  <VsxIcon name="Apple" />
  <VsxIcon name="Login" color="red" :size="32" />
</template>
```

## Props

All icons accept the following props:

- `size`: Number or String (default: 24)
- `color`: String (default: 'currentColor')
- `variant`: String - 'Linear', 'Outline', 'Broken', 'Bold', 'Bulk', 'TwoTone' (default: 'Linear')

## Contact

Emad Moghimi [jaxtheprime@gmail.com](jaxtheprime@gmail.com)

Project Link:
[https://github.com/JaxThePrime/vue-iconsax](https://github.com/JaxThePrime/vue-iconsax)

</article >
