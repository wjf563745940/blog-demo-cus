
<template>
    <div>
        user id={{useId}}
    </div>
</template>
<script>
export default {
    data(){
        return {
            useId:''
        }
    },
    created() {
        console.log(this.$route.params.userId)
         this.useId=this.$route.params.userId
    },
}
</script>
