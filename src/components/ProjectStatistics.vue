<template>
    <div class="flex flex-row -mx-4">
        <div v-for="(stat, index) in statistics" :key="index" class="flex-1 mx-4 my-2">
            <div class="w-full flex flex-row shadow rounded-lg text-white px-6 py-4"
                 :class="`bg-${stat.class}`"
            >
                <div class="flex-1 flex flex-col">
                    <p class="font-semibold text-4xl">{{stat.count}}</p>
                    <p class="opacity-75">{{stat.label}}</p>
                    <p class="text-xs opacity-75 mt-6">{{stat.status}}</p>
                </div>
                <div class="flex-1 flex justify-end items-center">
                    <radial-progress-bar
                            :diameter="80"
                            :completed-steps="stat.progress"
                            :total-steps="100"
                            :stroke-width="5"
                            start-color="rgb(255, 255, 255)"
                            stop-color="rgb(255, 255, 255)"
                            innerStrokeColor="rgba(255, 255, 255, 0.4)"
                    >
                        <p class="text-lg">{{stat.progress}}%</p>
                    </radial-progress-bar>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import RadialProgressBar from 'vue-radial-progress'

    export default {
        components: {
            RadialProgressBar
        },
        data: () => {
            return {
                statistics: [
                    {
                        count: 125,
                        label: 'All finished projects',
                        status: '2 projects out of time',
                        class: 'davis-orange',
                        progress: 75
                    },
                    {
                        count: 1105,
                        label: 'Customer Interest',
                        status: '+576 new clients',
                        class: 'davis-purple',
                        progress: 68
                    }
                ]
            }
        }
    }
</script>
