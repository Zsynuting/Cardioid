<template>
    <canvas
      @click="bubble"
      ref="canvas">
    </canvas>
</template>

<script>
import HeartPainter from "./HeartPainter";
const painter = new HeartPainter();

export default {
  name: "Cardioid",
  mounted() {
    this.$refs.canvas.width = window.innerWidth;
    this.$refs.canvas.height = window.innerHeight;
    painter.listen(this.$refs.canvas);
  },
  methods: {
    bubble() {
      painter.at(event.clientX, event.clientY);
    }
  }
};
</script>
