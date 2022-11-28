<template>
  <q-list class="text-white bg-dark" bordered separator round style="min-width: 250px">
    <q-item v-close-popup>
      <q-item-section class="text-center text-red text-weight-bold">
        <q-item-label> اشتراک ندارید </q-item-label>
        <router-link to="/AccountingPayment">
          <q-btn
            class="text-green text-router-link q-ma-sm"
            flat
            size="md"
            dense
            label="خرید"
            icon="keyboard_double_arrow_right"
          >
          </q-btn>
        </router-link>
      </q-item-section>
    </q-item>

    <q-item clickable v-close-popup>
      <q-item-section>
        <q-item-label>
          <q-icon color="grey" name="person" size="sm" />
          شماره کاربری : abjhd2304nmm</q-item-label
        >
      </q-item-section>
    </q-item>

    <q-item clickable v-close-popup>
      <q-item-section>
        <q-item-label>
          <q-icon color="grey" name="visibility" size="sm" />
          فیلم و سریال های من</q-item-label
        >
      </q-item-section>
    </q-item>
    <q-item clickable v-close-popup>
      <q-item-section>
        <q-item-label>
          <q-icon color="grey" name="settings" size="sm" />
          حساب کاربری</q-item-label
        >
      </q-item-section>
    </q-item>
    <q-item clickable v-close-popup>
      <q-item-section>
        <q-item-label>
          <q-icon color="grey" name="lock" size="sm" />
          قفل کودک</q-item-label
        >
      </q-item-section>
    </q-item>
    <q-item clickable v-close-popup>
      <q-item-section>
        <q-item-label>
          <q-icon color="grey" name="logout" size="sm" />
          خروج</q-item-label
        >
      </q-item-section>
    </q-item>
  </q-list>
</template>
