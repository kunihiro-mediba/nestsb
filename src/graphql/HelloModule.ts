import { Module } from "@nestjs/common";

import { HelloResolver } from "./HelloResolver";

@Module({
    providers: [HelloResolver],
})
export class HelloModule {}
