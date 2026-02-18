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
      correctCount: 0,
      completed: false,
    };
  },
  computed: {
    // this will return the words in a shuffled order
    shuffledWords() {
      return this.words.sort(() => 0.5 - Math.random());
    },
    // this computed property will count the words so that we can enter a message when the words are complete
    //we could not have this line in the data because at that stage the words have not been loaded yet
    wordCount() {
      return this.words.length;
    },
  },
  // this watch is checking that the correct count is euqual to the word count and changing the completed variable to true
  watch: {
    correctCount() {
      this.completed = this.correctCount == this.wordCount;
    },
  },
  methods: {
    checkAnswer(word) {
      word.correct = word.word_b == word.answer;
      // here we are incrementing the correct count if the answer is correct
      if (word.correct) {
        this.correctCount++;
      }
    },
  },
};

const app = Vue.createApp(FlashWord).mount("#app");
