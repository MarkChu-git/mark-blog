import { defineClientConfig } from 'vuepress/client'
import { SpeedInsights } from '@vercel/speed-insights/vue'
import { Analytics } from '@vercel/analytics/vue'
import FriendsReplica from './components/FriendsReplica.vue'
import HomeReplica from './components/HomeReplica.vue'
import './styles/article-float.css'
import './styles/fonts.css'
import './styles/replica.css'
import NotesCatalog from './components/NotesCatalog.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('HomeReplica', HomeReplica)
    app.component('FriendsReplica', FriendsReplica)
    app.component('NotesCatalog', NotesCatalog)
    app.component('SpeedInsights', SpeedInsights)
    app.component('Analytics', Analytics)
  },
})
