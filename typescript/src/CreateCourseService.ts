interface Course {
    name: string,
    duration?: number,
    educator: string
}

class CreateCourseService {
    execute({ duration = 8, educator, name }: Course) {
        console.log(name, educator, duration);
    }
}

export default new CreateCourseService;