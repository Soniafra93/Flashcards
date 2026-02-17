const FlashWord = {
  data() {
    return {
      words: [
        {
          word_a: "hola",
          word_b: "hello",
          hint: "greeting",
          answer: "",
          correct: false,
        },
        {
          word_a: "uno",
          word_b: "one",
          hint: "number",
          answer: "",
          correct: false,
        },
        {
          word_a: "gris",
          word_b: "grey",
          hint: "color",
          answer: "",
          correct: false,
        },
      ],
    };
  },
  computed: {
    // this will return the words in a shuffled order
    shuffledWords() {
      return this.words.sort(() => 0.5 - Math.random());
    },
  },
  methods: {
    checkAnswer(word) {
      word.correct = word.word_b == word.answer;
    },
  },
};

const app = Vue.createApp(FlashWord).mount("#app");
