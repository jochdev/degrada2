new Vue({
  el: '#app',
  data: {
    version_app: 'App 05',
    title: 'Degrada2',
    descripcion_app: 'Es una herramienta web de uso gratuito para generar degradados a partir de dos colores que puedes copiar para tus diseños.',
    fcolor: "#5CC1B3",
    scolor: "#6EF7C8",
    orientation: 1,
  },
  computed: {
    setColor() {
      if (this.orientation == 1) {
        return `background: linear-gradient(to right, ${this.fcolor}, ${this.scolor} );`;
      } else if (this.orientation == 2) {
        return `background: linear-gradient(to left, ${this.fcolor}, ${this.scolor} );`;
      } else if (this.orientation == 3) {
        return `background: linear-gradient(to top, ${this.fcolor}, ${this.scolor} );`;
      } else if (this.orientation == 4) {
        return `background: linear-gradient(to bottom, ${this.fcolor}, ${this.scolor} );`;
      }

    }

  },
});