import { registerPlugins } from '@/plugins'
import { createApp } from 'vue'

import App from './App.vue'

import packageJson from '../package.json';

const app = createApp(App)

app.config.globalProperties.$name = packageJson.name
app.config.globalProperties.$version = packageJson.version;

registerPlugins(app)

app.mount('#app')
