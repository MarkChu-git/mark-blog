import { defineClientConfig } from 'vuepress/client'
import FriendsReplica from './components/FriendsReplica.vue'
import HomeReplica from './components/HomeReplica.vue'
import './styles/article-float.css'
import './styles/home-liquid.css'
import './styles/notes-catalog.css'
import './styles/replica.css'
import NotesCatalog from './components/NotesCatalog.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('HomeReplica', HomeReplica)
    app.component('FriendsReplica', FriendsReplica)
    app.component('NotesCatalog', NotesCatalog)
  },
})
