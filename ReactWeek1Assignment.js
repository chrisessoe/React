class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(newStudent) {
        if (this.students.filter(student => student.email === newStudent.email).length) {
            console.log(`The student ${newStudent.email} is already registered.`)
        } else {
            this.students.push(newStudent)
            console.log(`User ${newStudent.email} is now registered to ${this.name}!`)
        }
        return this.students
    }
}

const webDevFundamentals = new Bootcamp("Web Development Fundamentals", "Beginner")
//const Neo = new Student("Neo", "neo@matrix.org", "Seattle")
//const Morpheus = new Student("Morpheus", "morpheus@matrix.org", "Tacoma")
//const Trinity = new Student("Trinity", "Trinity@matrix.org", "Bellingham")
//webDevFundamentals.registerStudent(Neo)
