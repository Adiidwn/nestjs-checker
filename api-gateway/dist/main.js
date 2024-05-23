"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const dotenv = require("dotenv");
const app_module_1 = require("./app.module");
const swagger_1 = require("./swagger");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    (0, swagger_1.setupSwagger)(app);
    app.setGlobalPrefix('/api/v1');
    const port = process.env.PORT;
    await app.listen(port);
    console.log('Application is running on: ', port);
}
bootstrap();
//# sourceMappingURL=main.js.map