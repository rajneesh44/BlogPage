<template>
    <v-container fluid>
    <div v-if="display">
    <v-row>
      <v-col cols="6" class="mx-auto">
          <v-text-field label="Enter Title of your blog" v-model="block.title"></v-text-field>
        <v-textarea
          name="input-7-1"
          label="Blog Post"
          hint="Enter your blog here"
          v-model="block.content"
        ></v-textarea>
        <v-text-field label="Enter your username" v-model="block.name"></v-text-field>
        <v-btn text v-on:click="display = !display">Next</v-btn>
      </v-col>
    </v-row>
    </div>
    <div v-else>
      <h1 class="font-weight-regular mx-auto">Blog Preview</h1><br/>
      <h3 class="font-weight-thin">{{ block.title }}</h3>
      <p class="font-weight-light mt-5">{{ block.content }}</p>
      <h4 class="font-weight-normal">{{ block.name }}</h4>
      <v-btn text color="primary" v-on:click="display = !display">Edit Blog</v-btn><br/>
      <router-link to="content"><v-btn text color="primary" v-on:click="saveData()">submit</v-btn></router-link>
    </div>
    </v-container>    
</template>

<script>
import { db } from '@/main.js'

export default {
    name: 'Blog',
    data(){
        return{
            display: true,
            block: {
                name: null,
                content: null,
                title: null
            }
        }
    },
    methods: {
        /* eslint-disable */
        async saveData()
        {
            db.collection('blogs').add(this.block)
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
                })
            .catch(function(error) {
                console.error("Error adding document: ", error);
                });
            this.display = !this.display;
            alert("Blog Posted")
        }
    }
}
</script>