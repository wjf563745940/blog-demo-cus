<template lang="html">
  <div class="main">
      <p>{{asyncData}}</p>
    <h1>Hello there</h1>
    <img src="~/assets/images/img1.png">
    <img src="/images/img1.png">
    <img src="~/assets/images/img2.png">
    <p>This is an example of a named views</p>
    <ul>
      <li>
        <NuxtLink to="/">
          Root
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/section">
          Section
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/child/123">
          Child 123
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/child/234">
          Child 234
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/main">
          Main page with named view in layout
        </NuxtLink>
      </li>
    </ul>

    <hr>
    <div>
      <div class="left">
         <nuxt-child name="left"/>
      </div>
      <div class="content">
        <nuxt-child/>
      </div>
    </div>
  </div>
</template>

<script>
import loadConfig from '@/modules/loadConfig'
export default {
  name: 'Stage',
  data(){
      return {asyncData:'asyncData'}
  },
   mounted(){
    //    loadConfig();
    this.$myInjectedFunction('test');
      this.$myInjectedFunction2('test2')
        console.log(this);
      console.log(this.$axios);
  },
  asyncData (content) {
    // return axios.get(`https://my-api/posts/${params.id}`)
    // .then((res) => {
    //   return { title: res.data.title }
    // })
    // console.log('content',content);
    //  console.log(content.loadConfig());
    var promise =new Promise(function (r1,r2) {

        setTimeout(function(){

            r1({asyncData:'s'})
        },500)
    });
    return  promise
  }
}
</script>

<style scoped>
  .main {
    margin: auto;
    max-width: 420px;
    padding: 10px;
  }

  .left {
    max-width: 150px;
    display: inline-block;
    vertical-align: top;
    border: 1px;
  }

  .left:empty {
    display: none;
  }

  .content {
    display: inline-block;
  }

</style>
