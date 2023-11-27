<template>
    <div>
        <p class="titles typer">What are you waiting for, <span id="textSpan">{{ currentText }}</span></p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      texts: [
        "lets get in touch.",
        "lets get this party started.",
        "drop me a line.",
        "a better vue.js website?",
        "christmas?",
      ],
      currentTextIndex: 0,
      currentText: "",
      isTyping: false
    };
  },
  mounted() {
    this.typeWriter();
  },
  methods: {
    typeWriter() {
      const speed = 80;
      const text = this.texts[this.currentTextIndex];
      const textLength = text.length;
      const self = this;

      function type(i) {
        if (i < textLength) {
          self.currentText += text.charAt(i);
          i++;
          setTimeout(() => {
            type(i);
          }, speed);
        } else {
          self.isTyping = false;
          setTimeout(() => {
            self.backspace();
          }, 1500);
        }
      }

      type(0);
    },
    backspace() {
      const speed = 30;
      const text = this.texts[this.currentTextIndex];
      const textLength = text.length;
      const self = this;

      function deleteText(i) {
        if (i >= 0) {
          self.currentText = text.substring(0, i);
          i--;
          setTimeout(() => {
            deleteText(i);
          }, speed);
        } else {
          self.isTyping = true;
          self.currentTextIndex =
            (self.currentTextIndex + 1) % self.texts.length;
          setTimeout(() => {
            self.typeWriter();
          }, 1000);
        }
      }

      deleteText(textLength - 1);
    }
  }
};
</script>

<style scoped>

.typer {
    color: white;
    font-size: larger;
    margin: 30px;
    text-align: center;
}

#textSpan {
    color: #359bdb;
}

</style>