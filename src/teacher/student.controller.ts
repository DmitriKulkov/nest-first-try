import { Controller, Get, Put, Param } from '@nestjs/common';
import { FindStudentResponseDto, StudentResponseDto } from "../student/dto/student.dto"

@Controller('teachers/:teacherId/students')
export class StudentTeacherController {

    @Get()
    getStudents(
        @Param('teacherId') teacherId: string
    ):FindStudentResponseDto[]{
        return `Get All Students That Belong To The Teacher With Id ${teacherId}`
    }

    @Put('/:studentId')
    updateStudentTeacher(
        @Param('teacherId') teacherId: string,
        @Param('studentId') studentId: string
    ):StudentResponseDto{
        return `Update Student With Id ${studentId} of Teacher With Id ${teacherId}`
    }

}
