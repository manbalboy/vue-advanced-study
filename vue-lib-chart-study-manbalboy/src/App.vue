<template>
    <div>
        <article>
            <h1>Chart JS</h1>
            <bar-chart></bar-chart>
            <line-chart></line-chart>
        </article>
    </div>
</template>

<script>
    // 1. 차트라이브러리 NPM으로 설치 
    // 2. 설치된 라이브러리를 import로 App.vue 에서 로딩
    // 3. mounted() 라이프 사이클 훅에서 차트를그림
    import BarChart from './components/BarChart.vue';
    import LineChart from './components/LineChart.vue';
    export default {
        //컴포넌트 속성 && 인스턴스 속성
        components : {
            BarChart,
            LineChart
        }
       
    }
</script>

<style>

</style>