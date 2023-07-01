function greet(name, language) {
    let greetMe = {
        English: "Hello",
        IsiZulu: "Sawubona",
        Spanish: "¡Hola!",
        French: "Bonjour",
        Arabic: "Ahlan",
        Swahili: "Hujambo",
        Igbo: "Kodi"
    };

    let greets = greetMe[language];
    if (!greets) {
      greets = "Hello";
    };
    

    return greets + ", " + name;
  }

  function greetings() {
    return {
      greets: "",
      name: "",
      language: "English",

      showGreet() {
        this.greets = greet(this.name, this.language);
    
        setTimeout(() => {
          this.name = "";
          this.language = "";
          this.greets = "";
        }, 10000);
      }
    };
  }




  