
class ActorModel {
  constructor(fname, lname, bday, image,imdb) {
      this.fname = fname;
      this.lname = lname;
      this.bday = bday;
      this.image = image;
      this.imdb = imdb;
  }

  Age() {
      const currentYear = new Date().getFullYear();
      const age = currentYear - this.bday + 1;
      return age;
  }
}

export default ActorModel;