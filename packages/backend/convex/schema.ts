import { v } from "convex/values";
import { defineEnt, defineEntSchema, getEntDefinitions } from "convex-ents";

const schema = defineEntSchema({
  notes: defineEnt({
    userId: v.string(),
    title: v.string(),
    content: v.string(),
    summary: v.optional(v.string()),
  }),

  messages: defineEnt({
    text: v.string(),
  })
    .edge("user")
    .edges("tags"),

  users: defineEnt({
    name: v.string(),
  }).edges("messages", { ref: true }),

  tags: defineEnt({
    name: v.string(),
  }).edges("messages"),
});

export default schema;

export const entDefinitions = getEntDefinitions(schema);
