import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('message')
export class MessageController {
    @Get()
    getMessages(): string{
        return 'hello!!!!'
    }
    
    @Get(':id')
    getMessage(@Param('id') id: string):string{
        return `El ID de tu Mensaje es ${id}`
    }

    @Post()
    createMessage(@Body('message')message: String){
        return `Tu mensaje es: ${message}!!`;
    }
}
