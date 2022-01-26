<template>
  <div class="wrapper">

    <Header />
    <div class="wrapper-content">
      <div class="container">
        <router-view></router-view>
      </div>
    </div>
    <Footer />

  </div>

<!-- Реализовать функционал тэгов:
Переключать отмеченные теги (добавить клас эктив)

Передавать отмеченные теги в заметку (в эмите передавать несколько параметров по клику на кнокпу)
Написать страницу about
Сделать функционал редактирования заметки
 -->

</template>


<script>

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data(){
    return{
        
    }
  }
}
</script>

<style lang="scss"></style>
