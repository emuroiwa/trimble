<template>
<div> 
<section class="container">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <div class="card">          
          <div class="card-content">
            <div class="content">
            
            </div>
          </div>
        </div>
      </div>
    </div>
 </section>
 </div>
</template>

<script lang="ts">
import Spinner from '@/components/Spinner.vue'; // @ is an alias to /src
import { Component, Vue } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import { dashboardService } from '../../services/dashboard.service';

@Component({
  computed: mapGetters({
    profile: 'user/profile',
  }),
  components: {
    Spinner,
  },
})
export default class DashboardHome extends Vue {

  private isBusy: boolean = false;
  private homeData = {} as any;

  get name() {
      return this.homeData.firstName + ' ' + this.homeData.lastName;
  }

  private created() {
     this.isBusy = true;
     dashboardService.getHomeDetails().then((resp: any) => {
        this.homeData = resp.data;
        this.isBusy = false;
     });
  }
}
</script>
