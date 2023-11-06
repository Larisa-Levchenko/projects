<template>
    <div class="page page_init">
        <Loader />
    </div>
</template>
<script>
import AppService from '@/app/app-sevice';
import router from '@/router';
import { mapActions } from 'vuex';

import Loader from '@/components/blocks/Loader.vue';

export default {
    components: {
        Loader
    },
    methods: {
        ...mapActions({
            setInit: 'setInit'
        }),
    },
    mounted() {
        this.setInit()
        AppService.getProjectsData()
            .then(() => {
                router.push('/projects')
            })
            .catch(() => {
                router.push('/error')
            })
    }
}
</script>