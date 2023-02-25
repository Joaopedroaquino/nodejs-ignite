"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    execute({ duration = 8, educator, name }) {
        console.log(name, educator, duration);
    }
}
exports.default = new CreateCourseService;
