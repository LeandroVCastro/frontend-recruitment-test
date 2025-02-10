import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type CreateNoteResponse = {
  __typename?: 'CreateNoteResponse';
  enterprise?: Maybe<GetEnterpriseResponse>;
  enterpriseId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  insertedAt?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type DeleteEnterpriseResponse = {
  __typename?: 'DeleteEnterpriseResponse';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type DeleteNoteResponse = {
  __typename?: 'DeleteNoteResponse';
  success?: Maybe<Scalars['Boolean']['output']>;
};

export type EnterpriseDefault = {
  __typename?: 'EnterpriseDefault';
  cnpj?: Maybe<Scalars['String']['output']>;
  commercialName?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  insertedAt?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type GetEnterpriseResponse = {
  __typename?: 'GetEnterpriseResponse';
  cnpj?: Maybe<Scalars['String']['output']>;
  commercialName?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  insertedAt?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Array<Maybe<NotesDefault>>>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type HelloWorldResponse = {
  __typename?: 'HelloWorldResponse';
  message?: Maybe<Scalars['String']['output']>;
  now?: Maybe<Scalars['String']['output']>;
};

export type ListEnterpriseResponse = {
  __typename?: 'ListEnterpriseResponse';
  items?: Maybe<Array<Maybe<EnterpriseDefault>>>;
};

export type NotesDefault = {
  __typename?: 'NotesDefault';
  enterpriseId?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  insertedAt?: Maybe<Scalars['String']['output']>;
  note?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['String']['output']>;
};

export type RootMutationType = {
  __typename?: 'RootMutationType';
  /** Create a new Enterprise */
  createEnterprise?: Maybe<GetEnterpriseResponse>;
  /** Add a note to an Enterprise */
  createNote?: Maybe<CreateNoteResponse>;
  /** Delete an Enterprise by ID */
  deleteEnterprise?: Maybe<DeleteEnterpriseResponse>;
  /** Delete an Note by ID */
  deleteNote?: Maybe<DeleteNoteResponse>;
  /** Update an Enterprise by ID */
  updateEnterprise?: Maybe<GetEnterpriseResponse>;
  /** Update an Note by ID */
  updateNote?: Maybe<CreateNoteResponse>;
};


export type RootMutationTypeCreateEnterpriseArgs = {
  cnpj: Scalars['String']['input'];
  commercialName: Scalars['String']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type RootMutationTypeCreateNoteArgs = {
  enterpriseId: Scalars['ID']['input'];
  note: Scalars['String']['input'];
};


export type RootMutationTypeDeleteEnterpriseArgs = {
  id: Scalars['ID']['input'];
};


export type RootMutationTypeDeleteNoteArgs = {
  id: Scalars['ID']['input'];
};


export type RootMutationTypeUpdateEnterpriseArgs = {
  cnpj: Scalars['String']['input'];
  commercialName: Scalars['String']['input'];
  description: Scalars['String']['input'];
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
};


export type RootMutationTypeUpdateNoteArgs = {
  id: Scalars['ID']['input'];
  note: Scalars['String']['input'];
};

export type RootQueryType = {
  __typename?: 'RootQueryType';
  /** Get a single enterprise by its ID */
  getEnterprise?: Maybe<GetEnterpriseResponse>;
  /** Get the current total of enterprises */
  getTotalEnterprises?: Maybe<Scalars['Int']['output']>;
  /** Returns a Hello World message */
  helloWorld?: Maybe<HelloWorldResponse>;
  /** List enterprises */
  listEnterprises?: Maybe<ListEnterpriseResponse>;
};


export type RootQueryTypeGetEnterpriseArgs = {
  id: Scalars['ID']['input'];
};


export type RootQueryTypeListEnterprisesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateEnterpriseMutationVariables = Exact<{
  name: Scalars['String']['input'];
  commercialName: Scalars['String']['input'];
  cnpj: Scalars['String']['input'];
  description: Scalars['String']['input'];
}>;


export type CreateEnterpriseMutation = { __typename?: 'RootMutationType', createEnterprise?: { __typename?: 'GetEnterpriseResponse', cnpj?: string | null, commercialName?: string | null, description?: string | null, id?: string | null, insertedAt?: string | null, name?: string | null, updatedAt?: string | null } | null };

export type DeleteEnterpriseMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type DeleteEnterpriseMutation = { __typename?: 'RootMutationType', deleteEnterprise?: { __typename?: 'DeleteEnterpriseResponse', success?: boolean | null } | null };

export type UpdateEnterpriseMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name: Scalars['String']['input'];
  commercialName: Scalars['String']['input'];
  cnpj: Scalars['String']['input'];
  description: Scalars['String']['input'];
}>;


export type UpdateEnterpriseMutation = { __typename?: 'RootMutationType', updateEnterprise?: { __typename?: 'GetEnterpriseResponse', cnpj?: string | null, commercialName?: string | null, description?: string | null, id?: string | null, insertedAt?: string | null, name?: string | null, updatedAt?: string | null } | null };

export type GetEnterpriseQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetEnterpriseQuery = { __typename?: 'RootQueryType', getEnterprise?: { __typename?: 'GetEnterpriseResponse', cnpj?: string | null, commercialName?: string | null, description?: string | null, id?: string | null, insertedAt?: string | null, name?: string | null, updatedAt?: string | null } | null };

export type ListEnterprisesQueryVariables = Exact<{
  offset: Scalars['Int']['input'];
  limit: Scalars['Int']['input'];
}>;


export type ListEnterprisesQuery = { __typename?: 'RootQueryType', getTotalEnterprises?: number | null, listEnterprises?: { __typename?: 'ListEnterpriseResponse', items?: Array<{ __typename?: 'EnterpriseDefault', cnpj?: string | null, commercialName?: string | null, description?: string | null, id?: string | null, insertedAt?: string | null, name?: string | null, updatedAt?: string | null } | null> | null } | null };

export type HelloWorldQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloWorldQuery = { __typename?: 'RootQueryType', helloWorld?: { __typename?: 'HelloWorldResponse', message?: string | null, now?: string | null } | null };


export const CreateEnterpriseDocument = gql`
    mutation createEnterprise($name: String!, $commercialName: String!, $cnpj: String!, $description: String!) {
  createEnterprise(
    name: $name
    commercialName: $commercialName
    cnpj: $cnpj
    description: $description
  ) {
    cnpj
    commercialName
    description
    id
    insertedAt
    name
    updatedAt
  }
}
    `;
export type CreateEnterpriseMutationFn = Apollo.MutationFunction<CreateEnterpriseMutation, CreateEnterpriseMutationVariables>;

/**
 * __useCreateEnterpriseMutation__
 *
 * To run a mutation, you first call `useCreateEnterpriseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEnterpriseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEnterpriseMutation, { data, loading, error }] = useCreateEnterpriseMutation({
 *   variables: {
 *      name: // value for 'name'
 *      commercialName: // value for 'commercialName'
 *      cnpj: // value for 'cnpj'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateEnterpriseMutation(baseOptions?: Apollo.MutationHookOptions<CreateEnterpriseMutation, CreateEnterpriseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEnterpriseMutation, CreateEnterpriseMutationVariables>(CreateEnterpriseDocument, options);
      }
export type CreateEnterpriseMutationHookResult = ReturnType<typeof useCreateEnterpriseMutation>;
export type CreateEnterpriseMutationResult = Apollo.MutationResult<CreateEnterpriseMutation>;
export type CreateEnterpriseMutationOptions = Apollo.BaseMutationOptions<CreateEnterpriseMutation, CreateEnterpriseMutationVariables>;
export const DeleteEnterpriseDocument = gql`
    mutation deleteEnterprise($id: ID!) {
  deleteEnterprise(id: $id) {
    success
  }
}
    `;
export type DeleteEnterpriseMutationFn = Apollo.MutationFunction<DeleteEnterpriseMutation, DeleteEnterpriseMutationVariables>;

/**
 * __useDeleteEnterpriseMutation__
 *
 * To run a mutation, you first call `useDeleteEnterpriseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEnterpriseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEnterpriseMutation, { data, loading, error }] = useDeleteEnterpriseMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteEnterpriseMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEnterpriseMutation, DeleteEnterpriseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEnterpriseMutation, DeleteEnterpriseMutationVariables>(DeleteEnterpriseDocument, options);
      }
export type DeleteEnterpriseMutationHookResult = ReturnType<typeof useDeleteEnterpriseMutation>;
export type DeleteEnterpriseMutationResult = Apollo.MutationResult<DeleteEnterpriseMutation>;
export type DeleteEnterpriseMutationOptions = Apollo.BaseMutationOptions<DeleteEnterpriseMutation, DeleteEnterpriseMutationVariables>;
export const UpdateEnterpriseDocument = gql`
    mutation updateEnterprise($id: ID!, $name: String!, $commercialName: String!, $cnpj: String!, $description: String!) {
  updateEnterprise(
    id: $id
    name: $name
    commercialName: $commercialName
    cnpj: $cnpj
    description: $description
  ) {
    cnpj
    commercialName
    description
    id
    insertedAt
    name
    updatedAt
  }
}
    `;
export type UpdateEnterpriseMutationFn = Apollo.MutationFunction<UpdateEnterpriseMutation, UpdateEnterpriseMutationVariables>;

/**
 * __useUpdateEnterpriseMutation__
 *
 * To run a mutation, you first call `useUpdateEnterpriseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEnterpriseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEnterpriseMutation, { data, loading, error }] = useUpdateEnterpriseMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *      commercialName: // value for 'commercialName'
 *      cnpj: // value for 'cnpj'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useUpdateEnterpriseMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEnterpriseMutation, UpdateEnterpriseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEnterpriseMutation, UpdateEnterpriseMutationVariables>(UpdateEnterpriseDocument, options);
      }
export type UpdateEnterpriseMutationHookResult = ReturnType<typeof useUpdateEnterpriseMutation>;
export type UpdateEnterpriseMutationResult = Apollo.MutationResult<UpdateEnterpriseMutation>;
export type UpdateEnterpriseMutationOptions = Apollo.BaseMutationOptions<UpdateEnterpriseMutation, UpdateEnterpriseMutationVariables>;
export const GetEnterpriseDocument = gql`
    query getEnterprise($id: ID!) {
  getEnterprise(id: $id) {
    cnpj
    commercialName
    description
    id
    insertedAt
    name
    updatedAt
  }
}
    `;

/**
 * __useGetEnterpriseQuery__
 *
 * To run a query within a React component, call `useGetEnterpriseQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetEnterpriseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetEnterpriseQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetEnterpriseQuery(baseOptions: Apollo.QueryHookOptions<GetEnterpriseQuery, GetEnterpriseQueryVariables> & ({ variables: GetEnterpriseQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetEnterpriseQuery, GetEnterpriseQueryVariables>(GetEnterpriseDocument, options);
      }
export function useGetEnterpriseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetEnterpriseQuery, GetEnterpriseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetEnterpriseQuery, GetEnterpriseQueryVariables>(GetEnterpriseDocument, options);
        }
export function useGetEnterpriseSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetEnterpriseQuery, GetEnterpriseQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetEnterpriseQuery, GetEnterpriseQueryVariables>(GetEnterpriseDocument, options);
        }
export type GetEnterpriseQueryHookResult = ReturnType<typeof useGetEnterpriseQuery>;
export type GetEnterpriseLazyQueryHookResult = ReturnType<typeof useGetEnterpriseLazyQuery>;
export type GetEnterpriseSuspenseQueryHookResult = ReturnType<typeof useGetEnterpriseSuspenseQuery>;
export type GetEnterpriseQueryResult = Apollo.QueryResult<GetEnterpriseQuery, GetEnterpriseQueryVariables>;
export const ListEnterprisesDocument = gql`
    query listEnterprises($offset: Int!, $limit: Int!) {
  getTotalEnterprises
  listEnterprises(offset: $offset, limit: $limit) {
    items {
      cnpj
      commercialName
      description
      id
      insertedAt
      name
      updatedAt
    }
  }
}
    `;

/**
 * __useListEnterprisesQuery__
 *
 * To run a query within a React component, call `useListEnterprisesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListEnterprisesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListEnterprisesQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useListEnterprisesQuery(baseOptions: Apollo.QueryHookOptions<ListEnterprisesQuery, ListEnterprisesQueryVariables> & ({ variables: ListEnterprisesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListEnterprisesQuery, ListEnterprisesQueryVariables>(ListEnterprisesDocument, options);
      }
export function useListEnterprisesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListEnterprisesQuery, ListEnterprisesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListEnterprisesQuery, ListEnterprisesQueryVariables>(ListEnterprisesDocument, options);
        }
export function useListEnterprisesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ListEnterprisesQuery, ListEnterprisesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListEnterprisesQuery, ListEnterprisesQueryVariables>(ListEnterprisesDocument, options);
        }
export type ListEnterprisesQueryHookResult = ReturnType<typeof useListEnterprisesQuery>;
export type ListEnterprisesLazyQueryHookResult = ReturnType<typeof useListEnterprisesLazyQuery>;
export type ListEnterprisesSuspenseQueryHookResult = ReturnType<typeof useListEnterprisesSuspenseQuery>;
export type ListEnterprisesQueryResult = Apollo.QueryResult<ListEnterprisesQuery, ListEnterprisesQueryVariables>;
export const HelloWorldDocument = gql`
    query helloWorld {
  helloWorld {
    message
    now
  }
}
    `;

/**
 * __useHelloWorldQuery__
 *
 * To run a query within a React component, call `useHelloWorldQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloWorldQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloWorldQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloWorldQuery(baseOptions?: Apollo.QueryHookOptions<HelloWorldQuery, HelloWorldQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HelloWorldQuery, HelloWorldQueryVariables>(HelloWorldDocument, options);
      }
export function useHelloWorldLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloWorldQuery, HelloWorldQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HelloWorldQuery, HelloWorldQueryVariables>(HelloWorldDocument, options);
        }
export function useHelloWorldSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<HelloWorldQuery, HelloWorldQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<HelloWorldQuery, HelloWorldQueryVariables>(HelloWorldDocument, options);
        }
export type HelloWorldQueryHookResult = ReturnType<typeof useHelloWorldQuery>;
export type HelloWorldLazyQueryHookResult = ReturnType<typeof useHelloWorldLazyQuery>;
export type HelloWorldSuspenseQueryHookResult = ReturnType<typeof useHelloWorldSuspenseQuery>;
export type HelloWorldQueryResult = Apollo.QueryResult<HelloWorldQuery, HelloWorldQueryVariables>;