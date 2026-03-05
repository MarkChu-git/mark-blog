import { defineClientConfig } from 'vuepress/client'
import FriendsReplica from './components/FriendsReplica.vue'
import HomeReplica from './components/HomeReplica.vue'
import './styles/home-liquid.css'
import './styles/replica.css'

export default defineClientConfig({
  enhance({ app }) {
    app.component('HomeReplica', HomeReplica)
    app.component('FriendsReplica', FriendsReplica)
  },
})
