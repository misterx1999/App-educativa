<template>
    <v-card class="mx-auto" color="grey-lighten-3" max-width="448">
      <v-layout>
        <v-app-bar
          color="teal-darken-4"
          image="https://picsum.photos/1920/1080?random"
        >
          <template v-slot:image>
            <v-img
              gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
            ></v-img>
          </template>
  
          <template v-slot:prepend>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
          </template>
  
          <v-app-bar-title>{{ appBarTitle }}</v-app-bar-title>
  
          <v-spacer></v-spacer>
  
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
  
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
  
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-app-bar>
  
        <v-main>
          <v-container fluid>
            <v-row dense>
              <v-col
                v-for="(content, index) in contentList"
                :key="index"
                cols="12"
              >
                <v-card
                  :subtitle="content.subtitle"
                  :title="content.title"
                  text="Lorem ipsum dolor sit amet consectetur, adipisicing elit."
                  @click="handleCardClick(index)" <!-- Emitimos evento al hacer clic en la tarjeta -->
                ></v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </v-layout>
    </v-card>
  </template>
  
  <script setup>
  // Definimos props para el título del AppBar y el contenido de las tarjetas
  const props = defineProps({
    appBarTitle: {
      type: String,
      default: 'Material Educativo'
    },
    contentList: {
      type: Array,
      default: () => [
        { title: 'Content 1', subtitle: 'Subtitle for Content 1' },
        { title: 'Content 2', subtitle: 'Subtitle for Content 2' },
        { title: 'Content 3', subtitle: 'Subtitle for Content 3' },
        { title: 'Content 4', subtitle: 'Subtitle for Content 4' }
      ]
    }
  })
  
  // Definimos emits para manejar el evento de clic en las tarjetas
  const emit = defineEmits(['card-click'])
  
  const handleCardClick = (index) => {
    emit('card-click', index)
  }
  </script>
  