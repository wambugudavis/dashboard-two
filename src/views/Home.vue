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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aliquid autem facere, harum incidunt
                ipsum iste laborum maiores, officia omnis quam ratione rem tenetur veniam! Debitis officia tempora
                tenetur!
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
                                    class="fill-current text-gray-400 hover:text-gray-700 h-6"
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
