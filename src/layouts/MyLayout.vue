<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          Quasar App
          <div slot="subtitle">Running on Quasar v{{ $q.version }}</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Essential Links</q-list-header>
        <q-item @click.native="$router.push('/')">
          <q-item-side icon="home" />
          <q-item-main label="Index" sublabel="Home page" />
        </q-item>
        <q-item @click.native="$router.push('/battery')">
          <q-item-side icon="battery_unknown" />
          <q-item-main label="Battery" sublabel="Battery info" />
        </q-item>
        <q-item @click.native="$router.push('/camera')">
          <q-item-side icon="camera" />
          <q-item-main label="Camera" sublabel="Camera test" />
        </q-item>
        <q-item @click.native="$router.push('/esc_pos_printer')">
          <q-item-side icon="print" />
          <q-item-main label="Printer" sublabel="Bluetooth ESC/POS Printer" />
        </q-item>
        <q-item @click.native="$router.push('/barcode_scanner')">
          <q-item-side icon="fullscreen" />
          <q-item-main label="Barcode Scanner" sublabel="Simple QR Code, Barcode Scanner" />
        </q-item>
        <q-item @click.native="$router.push('/mw_barcode_scanner')">
          <q-item-side icon="fullscreen" />
          <q-item-main label="MW Barcode Scanner" sublabel="Robust QR Code, Barcode Scanner" />
        </q-item>
        <q-item @click.native="openURL('http://quasar-framework.org')">
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>
        <q-item @click.native="openURL('https://github.com/quasarframework/')">
          <q-item-side icon="code" />
          <q-item-main label="GitHub" sublabel="github.com/quasarframework" />
        </q-item>
        <q-item @click.native="openURL('https://discord.gg/5TDhbDg')">
          <q-item-side icon="chat" />
          <q-item-main label="Discord Chat Channel" sublabel="https://discord.gg/5TDhbDg" />
        </q-item>
        <q-item @click.native="openURL('http://forum.quasar-framework.org')">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
        </q-item>
        <q-item @click.native="openURL('https://twitter.com/quasarframework')">
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
