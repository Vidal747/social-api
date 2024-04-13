import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('message')
export class MessageController {
    @Get()
    getMessages(@Query() filterQuery): string{
        const {searchTerm, orderBy} = filterQuery
        return `Tosdos los  ${searchTerm} Mensajes fueron ordenados por ${orderBy}`
    }
    
    @Get(':id')
    getMessage(@Param('id') id: string):string{
        return `El ID de tu Mensaje es ${id}`
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    createMessage(@Body('message')message: String): string{
        return `Tu mensaje es: ${message}!!`;
    }

    @Patch(':id')
    updateMessage(@Param('id')id: string,@Body() message): string{
        return `el Mensaje ${id} ha sido actualizado`
    }
    @Delete(':id')
   deleteMessage(@Param('id')id: string){
        return `el Mensaje ${id} ha sido eliminado`
    }
 
}


