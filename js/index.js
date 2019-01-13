matchInterests(event) {
        console.log("'this' is defined: ", this);
        return event.keywords.some(function(word) {
            console.log("'this' is now undefined: ", this);
            return this.interests.includes(word);
