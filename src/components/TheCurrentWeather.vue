<template>
    <ion-card v-if="location">
        <ion-card-header>
        <ion-card-title>Current Weather - {{ location?.name }}</ion-card-title>
        <ion-card-subtitle>Updated {{ currentWeather?.last_updated }}</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
            <ion-grid>

                <ion-row>
                <ion-col size="2">
                    <img :src="`https://${currentWeather?.condition?.icon}`" />
                </ion-col>
                <ion-col>
                    {{ currentWeather?.condition?.text }}
                </ion-col>
                </ion-row>

                <ion-row>
                <ion-col size="2">
                    Clouds
                </ion-col>
                <ion-col>
                    {{ currentWeather?.cloud }}%
                </ion-col>
                </ion-row>

                <ion-row>
                <ion-col size="2">
                    Visibility
                </ion-col>
                <ion-col>
                    {{ currentWeather?.vis_miles }} M ({{ currentWeather?.vis_km }} KM)
                </ion-col>
                </ion-row>

                <ion-row>
                <ion-col size="2">
                    Temp
                </ion-col>
                <ion-col>
                    {{ currentWeather?.temp_f }} F ({{ currentWeather?.temp_c }} C)
                    [Feels like {{ currentWeather?.feelslike_f }} F ({{ currentWeather?.feelslike_c }} C)]
                </ion-col>
                </ion-row>

                <ion-row>
                <ion-col size="2">
                    Wind
                </ion-col>
                <ion-col>
                    {{ currentWeather?.wind_dir }} {{ currentWeather?.wind_mph }} MPH ({{ currentWeather?.wind_kph }} KPH)
                    [Gusts {{ currentWeather?.gust_mph }} MPH ({{ currentWeather?.gust_kph }} KPH)]
                </ion-col>
                </ion-row>

                <ion-row>
                <ion-col size="2">
                    Humidity
                </ion-col>
                <ion-col>
                    {{ currentWeather?.humidity }}%
                </ion-col>
                </ion-row>

                <ion-row>
                <ion-col size="2">
                    Precip
                </ion-col>
                <ion-col>
                    {{ currentWeather?.precip_in }} IN ({{ currentWeather?.precip_mm }} MM)
                </ion-col>
                </ion-row>

                <ion-row>
                <ion-col size="2">
                    Pressure
                </ion-col>
                <ion-col>
                    {{ currentWeather?.pressure_in }} IN ({{ currentWeather?.pressure_mb }} MB)
                </ion-col>
                </ion-row>

                <ion-row>
                <ion-col size="2">
                    UV Index
                </ion-col>
                <ion-col>
                    {{ currentWeather?.uv }}
                </ion-col>
                </ion-row>

            </ion-grid>
        </ion-card-content>
    </ion-card>
</template>

<script lang="ts">
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow } from '@ionic/vue';
import { defineComponent } from 'vue';
import useWeather from '../hooks/weather';

export default defineComponent({
  name: 'TheCurrentWeather',
  components: {
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonGrid, IonRow
  },
  setup() {
    const { location, currentWeather } = useWeather();

    return {
      location,
      currentWeather
    };
  }
});
</script>