<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title slot="start">Weather Vue</ion-title>
        <ion-searchbar v-model="query" @change="getForecast" slot="end"></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Weather Vue</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <ion-grid>
        <ion-row>
          <ion-col size="4" offset="4">
            <the-current-weather />
            <the-forecast-weather />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonCol, IonGrid, IonHeader, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import TheCurrentWeather from '../components/TheCurrentWeather.vue';
import TheForecastWeather from '../components/TheForecastWeather.vue';
import useWeather from '../hooks/weather';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent, IonCol, IonGrid, IonHeader, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar,
    TheCurrentWeather,
    TheForecastWeather
  },
  setup() {
    const query = ref<string>('');
    const { getCurrentWeather, getForecastWeather } = useWeather();

    const getCurrent = async () => {
      await getCurrentWeather(query.value);
    };

    const getForecast = async () => {
      await getForecastWeather(query.value, 2);
    }

    return {
      query,
      getCurrent,
      getForecast
    };
  }
});
</script>

<style scoped>

</style>