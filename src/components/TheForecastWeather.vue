<template>
  <ion-card v-for="(day, i) in forecast" :key="i">
    <ion-card-content>
      <ion-list>
        <ion-item v-for="(hour, i) in day.hour" :key="i">
          {{ i > 10 ? '' : '0' }}{{ i }}:00
          {{ formatForcastDate(day.date) }}
          <ion-grid>
            <ion-row>
              <ion-col>
                <img :src="`https://${hour?.condition?.icon}`" />
              </ion-col>
              <ion-col>
                {{ hour.condition.text }}
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-item>
      </ion-list>
    </ion-card-content>
  </ion-card>
</template>

<script lang="ts">
import { IonCard, IonCardContent, IonCol, IonGrid, IonItem, IonList, IonRow } from '@ionic/vue';
import { defineComponent } from 'vue';
import useWeather from '../hooks/weather';

export default defineComponent({
  name: 'TheForecastWeather',
  components: {
    IonCard,
    IonCardContent,
    IonCol,
    IonGrid,
    IonItem,
    IonList,
    IonRow
  },
  setup() {
    const { location, forecast } = useWeather();

    const formatForcastDate = (date: string) => {
      const dateObj = new Date(date + 'T00:00:00');
      return Intl.DateTimeFormat().format(dateObj);
    }

    return {
      location,
      forecast,
      formatForcastDate
    };
  }
});
</script>

<style scoped>

</style>