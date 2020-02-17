<template>
  <v-app>

  <v-app-bar app>
    <!-- --><router-link to="content"><v-btn text>Blogs</v-btn></router-link>
    <v-spacer></v-spacer>
      <router-link to="add"><v-btn text>Add</v-btn></router-link>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-content>
    
    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <router-view/>
    </v-container>
  </v-content> |
  <v-footer app>
    <!-- -->
  </v-footer>
</v-app>
</template>

<script>
import { db } from './main.js'

export default {
  
  name: 'App',
    components: {
    },
    data:() => ({
            blogs: []

    }),
    mounted() {
        this.getEvents();
    },
    methods: {
        async getEvents(){
            let snapshot = await db.collection("blogs").get();
            let blogs = [];
            snapshot.forEach(doc => {
                let newblog = doc.data();
                newblog.id = doc.id;
                blogs.push(newblog);
            });
            this.blogs = blogs;
        }

    }
}
</script>
