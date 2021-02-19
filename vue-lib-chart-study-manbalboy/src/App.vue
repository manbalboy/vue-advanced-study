<template>
    <div>
        <article>
            <h1>Chart JS</h1>
            <canvas id="myChart" width="400" height="400"></canvas>
        </article>
    </div>
</template>

<script>
    // 1. 차트라이브러리 NPM으로 설치 
    // 2. 설치된 라이브러리를 import로 App.vue 에서 로딩
    // 3. mounted() 라이프 사이클 훅에서 차트를그림
    import Chart from 'chart.js';
    export default {
        //컴포넌트 속성 && 인스턴스 속성
        mounted() {
            let ctx = document.getElementById('myChart').getContext('2d');
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }
            });
        },
    }
</script>

<style>

</style>