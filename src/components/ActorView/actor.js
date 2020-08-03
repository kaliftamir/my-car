
class Actor {
    constructor(fname,lname,birthday,image,imdb) {
    this.fname = fname;
    this.lname = lname;
    this.birthday = birthday;
    this.image = image;
    this.imdb = imdb;
  }

  age () {
    var age = today.getFullYear() - this.birthday;
    return age;
  }
}

export default Actor;