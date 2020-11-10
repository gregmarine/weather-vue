<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title slot="start">Weather Vue</ion-title>
        <ion-searchbar v-model="query" @change="getCurrent"></ion-searchbar>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Weather Vue</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">

        <CurrentWeather />
        
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
import CurrentWeather from '../components/CurrentWeather.vue';
import useWeather from '../hooks/weather';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar,
    CurrentWeather
  },
  setup() {
    const query = ref<string>('');
    const { getCurrentWeather } = useWeather();

    const getCurrent = async () => {
      await getCurrentWeather(query.value);
    };

    return {
      query,
      getCurrent
    };
  }
});
</script>

<style scoped>
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>