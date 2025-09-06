interface Course {
  title: string;
  duration: number;
  teacher?: string;
  info(): void;
}

let webDev: Course = {
  title: "Full Stack devoloper",
  duration: 5,
  info() {
    console.log(
      `this course is about ${this.title} ,duration is ${this.duration} mounth.`
    );
  },
};

webDev.info();

let nursingCourse: Course = {
  title: "soins de secours",
  duration: 2,
  info() {
    console.log(
      `this course is about ${this.title} ,duration is ${this.duration} weeks.`
    );
  },
};

nursingCourse.info()
