<template>
  <div class="full-control">
    <md-datepicker v-model="selectedDate" :md-open-on-focus="false" />
    <md-card>
      <md-list>
        <md-card-header>
          <div class="md-title">Card without hover effsadfasfasfsafasfsdfsfsadfsasdfasasfect</div>
        </md-card-header>
        <md-subheader>Notifications</md-subheader>

        <md-list-item>
          <md-checkbox v-model="notification" value="preview" />
          <span class="md-list-item-text">Show content previewasdfsadflaskjdflasjdfjaskfjaslkdjflkasjdflkjsdkfskajdfklaslkfjklasjflkasjflkjaslkfjsdlkfjskldjas
            aklsjfdlksajlkfjaslkdfjaslkdjfklasjdkl
          </span>
        </md-list-item>

        <md-list-item>
          <md-checkbox v-model="notification" value="sound" />
          <span class="md-list-item-text">Sound</span>
        </md-list-item>

        <md-list-item>
          <md-checkbox v-model="notification" value="vibrate" />
          <span class="md-list-item-text">Vibrate</span>
        </md-list-item>

        <md-list-item>
          <md-checkbox v-model="notification" value="light" />
          <span class="md-list-item-text">Notification light</span>
        </md-list-item>
      </md-list>
    </md-card>
    <md-card>
      <md-list>
        <md-subheader>Settings</md-subheader>

        <md-list-item>
          <md-icon>network_wifi</md-icon>
          <span class="md-list-item-text">WiFi</span>
          <md-switch v-model="settings.wifi" />
        </md-list-item>

        <md-list-item>
          <md-icon>bluetooth</md-icon>
          <span class="md-list-item-text">Bluetooth</span>
          <md-switch v-model="settings.bluetooth" />
        </md-list-item>

        <md-list-item>
          <md-icon>data_usage</md-icon>
          <span class="md-list-item-text">Data Usage</span>
        </md-list-item>
      </md-list>
    </md-card>
    <md-card>
      <md-list>
        <md-subheader>Ringtone</md-subheader>

        <md-list-item>
          <md-radio v-model="ringtone" value="joy" />
          <span class="md-list-item-text">Joy</span>
        </md-list-item>

        <md-list-item>
          <md-radio v-model="ringtone" value="metal" />
          <span class="md-list-item-text">Metal</span>
        </md-list-item>

        <md-list-item>
          <md-radio v-model="ringtone" value="peace" />
          <span class="md-list-item-text">Peace</span>
        </md-list-item>

        <md-list-item>
          <md-radio v-model="ringtone" value="rock-night" />
          <span class="md-list-item-text">Rock night</span>
        </md-list-item>
      </md-list>
    </md-card>

    <md-button class="md-raised" v-on:click="checkClicked()">Check</md-button>
  </div>
</template>

<script>
  export default {
    name: 'Controls',
    data: () => ({
      selectedDate: new Date('2018/08/16'),
      ringtone: null,
      settings: {
        wifi: true,
        bluetooth: false
      },
      notification: []
    }),
    methods: {
      checkClicked: function(event) {
        alert(this.notification)
        alert(this.ringtone)
      }
    }
  }
</script>

<style>
.md-card {
  margin: 10px;
}
.full-control {
  max-width: 400px;
  margin: 0 auto;
  padding: 10px;
  border-width: 10px;
}
/* .md-list {
  margin: 10px;
} */

  /* .full-control > .md-list {
    width: 320px;
    max-width: 100%;
    height: 400px;
    display: inline-block;
    overflow: auto;
    border: 1px solid rgba(#000, .12);
    vertical-align: top;
  } */
</style>