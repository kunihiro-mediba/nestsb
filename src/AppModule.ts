import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

import { AppController } from "./AppController";
import { HelloModule } from "./graphql/HelloModule";

@Module({
    imports: [
        HelloModule,
        GraphQLModule.forRoot({
            autoSchemaFile: true,
            path: "/graphql",
            playground: process.env["NODE_ENV"] !== "production",
            debug: process.env["NODE_ENV"] !== "production",
        }),
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
