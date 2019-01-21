class Event {
    constructor(title, keywords) {
        this.title = title;
        this.keywords = keywords;
    }
}

class User {
    constructor(name, interests) {
        this.name = name;
        this.interests = interests;
    }

    // matchInterests(event) {
    //     return event.keywords.some(
    //         function(word) {
    //             return this.interests.includes(word);
    //         }.bind(this) // added to the and of the callback function
    //     );
    // }

    matchInterests(event) {
      return event.keywords.some(word => this.interests.includes(word));
    } //with arrow f, this refers to User instance context(b/c 'this' in arrow f refers to context it was invoked in)
}

let billy = new User('billy', ['music', 'art', 'movies']);
let freeMusic = new Event('Free Music Show', ['music', 'free', 'outside']);

console.log(billy.matchInterests(freeMusic));
