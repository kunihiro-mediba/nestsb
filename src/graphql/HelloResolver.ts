import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

import { IMutation, IQuery } from "./types";

@Resolver()
export class HelloResolver implements Pick<IQuery, "hello">, Pick<IMutation, "setMessage"> {
    #message = "Hello,World!";

    @Query(() => String)
    async hello() {
        return this.#message;
    }

    @Mutation(() => String)
    async setMessage(@Args({ name: "message", type: () => String }) message: string) {
        this.#message = message;
        return this.hello();
    }
}
