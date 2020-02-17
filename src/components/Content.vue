<template>
  <div >
  <v-row dense>
        <v-col
          class="flex-wrap"
          v-for="blog in blogs"
          v-bind:key="blog.id"
          cols="4"
        >
  <v-card
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">{{ blog.name }}</div>
        <v-list-item-title class="headline mb-1" id='title'>{{ blog.title }}</v-list-item-title>
        <v-list-item-subtitle id='content'>{{ blog.content }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn text><router-link :to='blog.id'>Go</router-link></v-btn>
    </v-card-actions>
  </v-card>
  </v-col
        >
      </v-row>
  </div>
</template>

<script>
import { db } from '../main.js'

export default {
  
  name: 'App',
    components: {
    },
    data:() => ({
            display: false,
              name: null,
              content: null,
              title: null,
            blogs: []
    }),
    mounted() {
        this.getEvents();
    },
    methods: {
        change(){
          this.display = !this.display;
        },
        async getEvents(){
            /* eslint-disable */
            let snapshot = await db.collection("blogs").get();
            let blogs = [];
            snapshot.forEach(doc => {
                console.log(doc.id)
                let newblog = doc.data();
                newblog.id = doc.id;
                blogs.push(newblog);
            });
            this.blogs = blogs;
        }

    }
}
</script>