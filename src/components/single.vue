<template>
  <div>
      <h3>{{ name }}</h3>
      <p>{{ blog }}</p>
      <h3>{{ title }}</h3>
  </div>
</template>

<script>
import { db } from '../main.js'

export default {
    name: 'name',
    data(){
        return{
            blog: null,
            title: null,
            name: null
        }
    },
    mounted()
    {
        this.getBlog();
    },
    methods: {
        async getBlog()
        {
            /* eslint-disable */
            let snapshot = await db.collection("blogs").get();
            snapshot.forEach(obj => {
                if(obj.id === this.$route.params.id)
                {
                    console.log(obj.data().content)
                    this.blog = obj.data().content;
                    console.log(obj.data().title)
                    this.title = obj.data().title;
                    console.log(obj.data().name)
                    this.name = obj.data().name

                }
            });
        }
    }
}
</script>

<style>

</style>