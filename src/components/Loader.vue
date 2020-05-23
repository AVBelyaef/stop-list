<template>
    <div class="app-loader">
        <div class="preloader-wrapper active">
            <div class="spinner-layer">
                <div class="circle-clipper left">
                    <div class="circle"></div>
                </div>
                <div class="gap-patch">
                    <div class="circle"></div>
                </div>
                <div class="circle-clipper right">
                    <div class="circle"></div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .app-loader {
        display: flex;
        justify-content: center;
        width: 100%;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        padding-top: 2rem;
    }
</style>
