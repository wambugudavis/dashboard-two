<template>
    <div>
        <div v-for="(file, index) in files"
             :key="index"
             class="flex flex-row items-center hover:shadow-md rounded-lg p-4 mb-2">
            <div class="flex-1 flex flex-row items-center">
                <div class="w-1/5 flex justify-end">
                    <div class="h-10 w-10 shadow rounded-lg mr-4 flex items-center justify-center"
                         :class="`bg-${file.class}-light`"
                    >
                        <svg-icon
                                name="FolderSolid"
                                class="fill-current h-5"
                                :class="`text-${file.class}`"
                        />
                    </div>
                </div>
                <div class="w-4/5">
                    <p class="font-semibold text-davis-grey-dark">{{file.label}}</p>
                </div>
            </div>
            <div class="w-2/12 text-center">
                <p class="text-gray-500">{{file.members}} members</p>
            </div>
            <div class="w-2/12 text-center">
                <p class="text-gray-500">{{file.date}}</p>
            </div>
            <div class="w-2/12 text-center">
                <p class="text-davis-grey-dark font-semibold">{{file.size}} MB</p>
            </div>
        </div>
    </div>
</template>

<script>
    import SvgIcon from '@/components/SVG'

    export default {
        components: {
            SvgIcon
        },
        data: () => {
            return {
                files: [
                    {
                        class: 'davis-red',
                        label: 'Company Guidelines',
                        members: 28,
                        date: '10 Oct 2020',
                        size: 2.3
                    },
                    {
                        class: 'davis-orange',
                        label: 'Company Policy',
                        members: 30,
                        date: '15 Sept 2020',
                        size: 4.2
                    },
                    {
                        class: 'davis-purple',
                        label: 'Wireframes',
                        members: 14,
                        date: '21 Jul 2020',
                        size: 1.6
                    }
                ]
            }
        }
    }
</script>
