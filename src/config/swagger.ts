import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export default (app): void => {
    const swaggerOptions = new DocumentBuilder()
        .setTitle('Blu Integração')
        .setDescription('Documentação dos enpoints das APIs do Blu Integração')
        .setVersion('1.0')
        .addTag('Oficina5 - Blu Integração')
        .addBearerAuth()
        .build();

    const document = SwaggerModule.createDocument(app, swaggerOptions);

    SwaggerModule.setup('swagger', app, document);
};