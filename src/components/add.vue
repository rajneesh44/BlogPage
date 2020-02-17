<template>
    <v-container fluid>
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
        <v-btn text v-on:click="saveData()">Add</v-btn>
      </v-col>
    </v-row>
    </v-container>    
</template>

<script>
import { db } from '@/main.js'

export default {
    name: 'Blog',
    data(){
        return{
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
        }
    }
}
</script>