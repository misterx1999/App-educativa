<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" :permanent="true">
      <v-list dense>
        <v-list-item link href="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Inicio</v-list-item-title>
        </v-list-item>
        <v-list-item link href="/algoritmos">
          <v-list-item-icon>
            <v-icon>mdi-function</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Algoritmos</v-list-item-title>
        </v-list-item>
        <v-list-item link href="/docentes">
          <v-list-item-icon>
            <v-icon>mdi-account-circle</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Docentes</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="primary" dark>
      <v-toolbar-title>App Educativa</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(true);
</script>
