import { resolve } from "path";

import { GraphQLDefinitionsFactory } from "@nestjs/graphql";

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
    typePaths: ["./schema.graphql"],
    path: resolve(process.cwd(), "src/graphql/types.ts"),
    outputAs: "interface",
});
