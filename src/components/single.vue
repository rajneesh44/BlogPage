<template>
  <div>
      <h1 class="font-weight-thin">{{ title }}</h1>
      <p class="font-weight-light mt-5">{{ blog }}</p>
      <h4 class="font-weight-normal">{{ name }}</h4>
  </div>
</template>

<script>
import { db } from '../main.js'

export default {
    name: 'Single',
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