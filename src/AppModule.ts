import { resolve } from "path";

import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

import { AppController } from "./AppController";
import { HelloModule } from "./graphql/HelloModule";

@Module({
    imports: [
        HelloModule,
        GraphQLModule.forRoot({
            // autoSchemaFile: true,
            // autoSchemaFile: resolve(process.cwd(), "./schema.graphql"),
            typePaths: [resolve(process.cwd(), "./schema.graphql")],
            // definitions: {
            //     path: resolve(process.cwd(), "./src/graphql/types.ts"),
            // },
            path: "/graphql",
            playground: process.env["NODE_ENV"] !== "production",
            debug: process.env["NODE_ENV"] !== "production",
        }),
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
