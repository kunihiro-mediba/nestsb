import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class HelloResolver {
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
