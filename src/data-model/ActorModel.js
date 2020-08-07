// import React from 'react';

class ActorModel {
  constructor(id,fname, lname,bday, img, imdb) {
      this.id = id;
      this.fname = fname;
      this.lname = lname;
      this.bday = bday;
      this.img = img;
      this.imdb = imdb;
  }

  age() {
      const currentYear = new Date().getFullYear();
      const age = currentYear - this.bday + 1;
      return age;
  }
}

export default ActorModel;