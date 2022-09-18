<template>
    <div class="w-full text-center my-16">
        <div class="text-2xl">{{time}}</div>
    </div>
</template>

<script>

const date = new Date();

export default {
    name: "App",
    data( ){
        return {
            time : '',
            seconds:0
        }
    },
    created() {
        this.startTimer();
    },
    methods: {
        startTimer(){
            this.seconds++;
            const s = (this.seconds).toString().padStart(2,"0");
            this.time = `${s}`;

            setTimeout( this.startTimer, 1000)
        }

    }
}
</script>

<style scoped>

</style>
