class CarModel {
  constructor(fname, lname,bday, img, imdb) {
      this.fname = fname;
      this.lname = lname;
      this.bday = bday;
      this.img = img;
      this.imdb = imdb;
  }

  kmPerYear() {
      const currentYear = new Date().getFullYear();
      const age = currentYear - this.bday + 1;
      return this.km / age;
  }
}

export default CarModel;