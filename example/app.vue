<template>
    <section>
        {{$isPageVisible}}
    </section>
</template>

<script>
export default{
    watch:{
        "$isPageVisible"(isPageVisible){
            console.log(isPageVisible);
        },
    }
}
</script>