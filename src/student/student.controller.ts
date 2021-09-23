import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common"
import { CreateStudentDto, UpdateStudentDto, FindStudentResponseDto, StudentResponseDto } from "./dto/student.dto" 

@Controller('students')
export class StudentController{
    @Get()
    getStudents(): FindStudentResponseDto[]{
        return "All Students"
    }

    @Get('/:studentId')
    getStudentById(
        @Param('studentId') studentId: string
    ):FindStudentResponseDto{
        return `Get student With Id of ${studentId}`
    }

    @Post()
    createStudent(
        @Body() body: CreateStudentDto
    ):FindStudentResponseDto{
        return `Create Student With The Folowing Data ${JSON.stringify(body)}`
    }

    @Put('/:studentId')
    updateStudent(
        @Param('studentId') studentId: string,
        @Body() body: UpdateStudentDto
    ): StudentResponseDto{
        return `Update Student With Id of ${studentId} With Data of ${JSON.stringify(body)}`
    }

}


