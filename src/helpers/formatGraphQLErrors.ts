import { ApolloError } from "@apollo/client";

export const formatGraphQLErrors = async (error: ApolloError) => {
  let messages: string[] = [];
  error.graphQLErrors.map((item: any) => {
    if (typeof item === "string") {
      messages.push(item.charAt(0).toUpperCase() + item.slice(1).toLowerCase());
    }
    Object.entries(item.message).forEach(([key, value]) => {
      const field = key.charAt(0).toUpperCase() + key.slice(1).toLowerCase();
      messages.push(`${field}: ${value}`);
    });
  });
  return messages;
};
