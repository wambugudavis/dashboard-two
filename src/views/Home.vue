<template>
    <div class="min-h-screen flex w-full text-sm text-left">
        <div class="w-full md:w-4/6 flex flex-row">
            <div class="flex justify-center w-24 hidden md:block relative bg-davis-grey-dark shadow">
                <nav-bar class="justify-center items-center">
                    <p class="text-white font-semibold tracking-wide text-lg">
                        P<span class="font-light">raum</span>
                    </p>
                </nav-bar>
                <navigation/>
            </div>
            <div class="flex-1 md:w-11/12 py-4 px-6">
                <nav-bar>
                    <p class="text-davis-grey-dark font-semibold text-2xl">Ongoing Projects</p>
                </nav-bar>
                <div class="flex flex-row pb-4">
                    <div class="flex-1 flex flex-row">
                        <span class="text-gray-500 hover:text-white py-2 px-4 mr-3 rounded-full hover:bg-davis-grey-dark cursor-pointer">All</span>
                        <span class="text-white py-2 px-4 mr-3 rounded-full bg-davis-grey-dark cursor-pointer">Current</span>
                        <span class="text-gray-500 hover:text-white py-2 px-4 mr-3 rounded-full hover:bg-davis-grey-dark cursor-pointer">Pending</span>
                        <span class="text-gray-500 hover:text-white py-2 px-4 mr-3 rounded-full hover:bg-davis-grey-dark cursor-pointer">Completed</span>
                    </div>
                    <div class="ml-auto flex flex-row">
                        <svg-icon
                                name="Grid"
                                class="fill-current text-gray-700 h-6 ml-4"
                        />
                        <svg-icon
                                name="Menu"
                                class="fill-current text-gray-400 hover:text-gray-700 h-6 ml-4"
                        />
                    </div>
                </div>
                <div class="flex flex-row">
                    <div v-for="(n, index) in 3" :key="index" class="flex-1 group hover:bg-davis-red m-3 h-40 shadow-lg rounded-lg">
                        <div class="group p-4 h-full flex flex-col">
                            <div class="group flex flex-row items-center">
                                <div class="bg-davis-grey-dark group-hover:bg-white rounded-full h-8 w-8 p-2 flex items-center justify-center">
                                    <svg-icon
                                            name="Graph"
                                            class="fill-current text-white group-hover:text-davis-grey-dark h-6"
                                    />
                                </div>
                                <span class="text-davis-grey-dark group-hover:text-white ml-3 font-medium">The Maptrix</span>
                            </div>
                            <div class="flex-1 flex items-center text-gray-400">
                                <div class="flex flex-col text-xs">
                                    <div class="flex flex-row mb-2">
                                        <svg-icon
                                                name="User"
                                                class="fill-current text-gray-400 h-4"
                                        />
                                        <span>5 members</span>
                                    </div>
                                    <div class="flex flex-row">
                                        <svg-icon
                                                name="Notification"
                                                class="fill-current text-gray-400 h-4"
                                        />
                                        <span>15 Nov 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div class="h-5 flex items-center">
                                <span class="h-1 bg-davis-red rounded-full z-10 w-20"></span>
                                <span class="h-1 bg-gray-100 rounded-full flex-1 -ml-1"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-2/6 hidden md:block bg-gray-100 shadow p-4">
            <nav-bar>
                <div class="w-full">
                    <img src="https://i.pravatar.cc/100"
                         class="rounded-full h-10 w-10 object-center object-cover float-right" alt="">
                    <div class="flex flex-row">
                        <div class="relative flex items-center justify-center w-10">
                            <svg-icon
                                    name="Search"
                                    class="stroke-current text-gray-400 hover:text-gray-700 h-6"
                            />
                        </div>
                        <div class="relative flex items-center justify-center w-10">
                            <svg-icon
                                    name="Notification"
                                    class="fill-current text-gray-400 hover:text-gray-700 h-12"
                            />
                            <span class="absolute right-0 mr-3 -mt-1 h-2 w-2 bg-red-600 rounded-full"></span>
                        </div>
                    </div>
                </div>
            </nav-bar>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad amet aut consectetur eos eveniet excepturi
            illo in inventore, labore perspiciatis possimus quaerat quod reiciendis rem rerum sequi veritatis voluptate.
        </div>
    </div>
</template>

<script>
    import Navigation from '../components/Navigation'
    import NavBar from '../components/Navbar'
    import SvgIcon from "@/components/SVG"

    export default {
        components: {
            Navigation, NavBar, SvgIcon
        }
    }
</script>
