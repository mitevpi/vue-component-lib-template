import {configure} from '@storybook/vue';
import '!style-loader!css-loader!sass-loader!./scss-loader.scss';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
