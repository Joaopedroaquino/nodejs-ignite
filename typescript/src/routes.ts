import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
    CreateCourseService.execute({
        name: "NodeJS",
        duration: 10,
        educator: "Joao pedro"
    });
    CreateCourseService.execute({
        name: "ReactJS",
        educator: "Joao pedro Aq"
    });
    return response.send();
}