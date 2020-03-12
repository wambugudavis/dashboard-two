<template>
    <div class="flex flex-col">
        <div class="flex flex-col py-5">
            <div class="flex items-center justify-between mb-4">
                <h1 class="text-lg font-semibold text-davis-grey-dark">{{currentMonthYear}}</h1>
                <div class="flex flex-row items-center">
                    <div
                            class="h-5 w-5 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-500 cursor-pointer mr-1"
                            @click="setPreviousWeek"
                    >
                        <svg-icon
                                name="ArrowLeft"
                                class="h-3 fill-current text-white"
                        />
                    </div>
                    <div
                            class="h-5 w-5 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-500 cursor-pointer"
                            @click="setNextWeek"
                    >
                        <svg-icon
                                name="ArrowRight"
                                class="h-3 fill-current text-white"
                        />
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-between my-4 px-2">
                <div v-for="(day, index) in weekDays" :key="index"
                     class="flex-1 flex flex-col cursor-pointer items-center justify-center mx-1 h-20 rounded-full bg-white shadow-lg transition duration-200 ease-in-out"
                     :class="{'bg-davis-orange': isActiveDay(day)}"
                     @click="setActiveDay(day)"
                >
                <span class="font-semibold"
                      :class="{'text-white': isActiveDay(day), 'text-davis-grey-dark': !isActiveDay(day)}"
                >
                    {{day | getDate}}
                </span>
                    <span class="font-light"
                          :class="{'text-white': isActiveDay(day), 'text-gray-500': !isActiveDay(day)}"
                    >
                    {{day | getDay}}
                </span>
                </div>
            </div>
        </div>
        <div class="flex flex-col py-5">
            <div class="flex items-center justify-between mb-4">
                <h1 class="text-lg font-semibold text-davis-grey-dark">Meetings</h1>
                <p class="text-gray-500 p-2 cursor-pointer">View All</p>
            </div>
            <div class="flex flex-col justify-between my-2 px-2">
                <div v-for="(meeting, index) in currentMeetings" :key="index"
                     class="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
                    <div class="flex flex-row">
                        <div :class="`bg-${meeting.class} w-2`"></div>
                        <div class="flex-1 flex flex-col p-5">
                            <div class="flex justify-between items-center">
                                <h1 class="text-lg font-semibold text-davis-grey-dark">{{meeting.label}}</h1>
                                <div class="text-gray-500 cursor-pointer">
                                    <svg-icon
                                            name="DotsHorizontal"
                                            class="w-6 fill-current"
                                    />
                                </div>
                            </div>
                            <p class="text-xs text-gray-500">{{meeting.start}} - {{meeting.end}}</p>
                            <div class="flex flex-row mt-4 ml-2">
                                <img v-for="(attendee, index) in meeting.attendees" :key="index"
                                     :src="`https://i.pravatar.cc/100?img=${attendee}`"
                                     class="border-2 border-white rounded-full h-8 w-8 object-center object-cover -ml-2"
                                     alt="">
                                <div class="border-2 border-white -ml-2 rounded-full h-8 w-8 bg-davis-grey-dark flex items-center justify-center p-1">
                                    <svg-icon
                                            name="Plus"
                                            class="fill-current text-white"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from 'moment'
    import SvgIcon from '../components/SVG'

    export default {
        components: {
            SvgIcon
        },
        data: () => {
            return {
                startOfWeek: moment().weekday(1),
                activeDay: moment(),
                meetings: [
                    {
                        label: 'Projects Overview',
                        start: '9 AM',
                        end: '10 AM',
                        date: moment(),
                        attendees: [5, 6, 7],
                        class: 'davis-red'
                    },
                    {
                        label: 'Policies',
                        start: '8 AM',
                        end: '10 AM',
                        date: moment().subtract(1, 'days'),
                        attendees: [15, 16],
                        class: 'davis-purple'
                    },
                    {
                        label: 'Code Reviews',
                        start: '4 PM',
                        end: '5 PM',
                        date: moment().subtract(1, 'days'),
                        attendees: [20, 21],
                        class: 'davis-orange'
                    },
                    {
                        label: 'Project Design',
                        start: '8 AM',
                        end: '10 AM',
                        date: moment().add(1, 'days'),
                        attendees: [15, 16],
                        class: 'davis-purple'
                    }
                ]
            }
        },
        filters: {
            getDate(day) {
                return moment(day).format('DD')
            },

            getDay(day) {
                return moment(day).format('dd').charAt(0)
            }
        },
        computed: {
            weekDays() {
                const days = [];
                for (let i = 0; i <= 6; i++) {
                    days.push(moment(this.startOfWeek).add(i, 'days'));
                }
                return days;
            },

            currentMonthYear() {
                return moment(this.startOfWeek).format('MMM YYYY')
            },

            currentMeetings() {
                return this.meetings.filter((meeting) => {
                    return this.activeDay.isSame(moment(meeting.date))
                })
            }
        },
        methods: {
            isActiveDay(day) {
                return moment(day).isSame(this.activeDay)

            },

            setActiveDay(day) {
                this.activeDay = moment(day)
            },

            setPreviousWeek() {
                this.startOfWeek = moment(this.startOfWeek).subtract(1, 'weeks').weekday(1)
            },

            setNextWeek() {
                this.startOfWeek = moment(this.startOfWeek).add(1, 'weeks').weekday(1)
            }
        }
    }
</script>
