import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as React from 'react';
import * as ApolloReactComponents from '@apollo/client/react/components';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};


export type EditProfileInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
};


export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  uploadProperty: Scalars['Boolean'];
  addToFavorites: Scalars['Boolean'];
  removeFromFavorites: Scalars['Boolean'];
  createBooking: Scalars['Boolean'];
  editProfile?: Maybe<User>;
  login: LoginResponse;
  logout: Scalars['Boolean'];
  revocaRefreshTokenUser: Scalars['Boolean'];
  register: RegisterResponse;
};


export type MutationUploadPropertyArgs = {
  data: PropertyUploadInput;
};


export type MutationAddToFavoritesArgs = {
  propertyId: Scalars['String'];
};


export type MutationRemoveFromFavoritesArgs = {
  propertyId: Scalars['String'];
};


export type MutationCreateBookingArgs = {
  endDate: Scalars['String'];
  startDate: Scalars['String'];
  propertyId: Scalars['String'];
};


export type MutationEditProfileArgs = {
  data: EditProfileInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  email: Scalars['String'];
};


export type MutationRevocaRefreshTokenUserArgs = {
  userId: Scalars['Int'];
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};

export type PasswordInput = {
  password: Scalars['String'];
};

export type PropertyUploadInput = {
  name: Scalars['String'];
  description: Scalars['String'];
  bedrooms: Scalars['Int'];
  bathrooms: Scalars['Int'];
  price: Scalars['Float'];
  pets: Scalars['Boolean'];
  amenities: Array<Scalars['String']>;
  images: Array<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getProperties: Scalars['JSON'];
  getProperty: Scalars['JSON'];
  getListings: Scalars['JSON'];
  getFavorites: Scalars['JSON'];
  getBookings: Scalars['JSON'];
  getMyBookings: Scalars['JSON'];
  getBookingsForProperty: Scalars['JSON'];
  me?: Maybe<User>;
};


export type QueryGetPropertyArgs = {
  propertyId: Scalars['String'];
};


export type QueryGetBookingsForPropertyArgs = {
  propertyId: Scalars['String'];
};

export type RegisterInput = {
  password: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  accessToken: Scalars['String'];
  user: User;
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  avatarUrl?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type AddToFavoritesMutationVariables = Exact<{
  propertyId: Scalars['String'];
}>;


export type AddToFavoritesMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'addToFavorites'>
);

export type CreateBookingMutationVariables = Exact<{
  propertyId: Scalars['String'];
  startDate: Scalars['String'];
  endDate: Scalars['String'];
}>;


export type CreateBookingMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'createBooking'>
);

export type GetBookingsForPropertyQueryVariables = Exact<{
  propertyId: Scalars['String'];
}>;


export type GetBookingsForPropertyQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'getBookingsForProperty'>
);

export type GetFavoritesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFavoritesQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'getFavorites'>
);

export type GetListingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetListingsQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'getListings'>
);

export type GetMyBookingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMyBookingsQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'getMyBookings'>
);

export type GetPropertiesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPropertiesQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'getProperties'>
);

export type GetPropertyQueryVariables = Exact<{
  propertyId: Scalars['String'];
}>;


export type GetPropertyQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'getProperty'>
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'accessToken'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email'>
    ) }
  ) }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'name' | 'avatarUrl' | 'profilePicture'>
  )> }
);

export type RegisterMutationVariables = Exact<{
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'RegisterResponse' }
    & Pick<RegisterResponse, 'accessToken'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'name'>
    ) }
  ) }
);

export type RemoveFromFavoritesMutationVariables = Exact<{
  propertyId: Scalars['String'];
}>;


export type RemoveFromFavoritesMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'removeFromFavorites'>
);

export type UploadPropertyMutationVariables = Exact<{
  name: Scalars['String'];
  description: Scalars['String'];
  price: Scalars['Float'];
  bedrooms: Scalars['Int'];
  bathrooms: Scalars['Int'];
  pets: Scalars['Boolean'];
  amenities: Array<Scalars['String']>;
  images: Array<Scalars['String']>;
}>;


export type UploadPropertyMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'uploadProperty'>
);


export const AddToFavoritesDocument = gql`
    mutation addToFavorites($propertyId: String!) {
  addToFavorites(propertyId: $propertyId)
}
    `;
export type AddToFavoritesMutationFn = Apollo.MutationFunction<AddToFavoritesMutation, AddToFavoritesMutationVariables>;
export type AddToFavoritesComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<AddToFavoritesMutation, AddToFavoritesMutationVariables>, 'mutation'>;

    export const AddToFavoritesComponent = (props: AddToFavoritesComponentProps) => (
      <ApolloReactComponents.Mutation<AddToFavoritesMutation, AddToFavoritesMutationVariables> mutation={AddToFavoritesDocument} {...props} />
    );
    

/**
 * __useAddToFavoritesMutation__
 *
 * To run a mutation, you first call `useAddToFavoritesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToFavoritesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToFavoritesMutation, { data, loading, error }] = useAddToFavoritesMutation({
 *   variables: {
 *      propertyId: // value for 'propertyId'
 *   },
 * });
 */
export function useAddToFavoritesMutation(baseOptions?: Apollo.MutationHookOptions<AddToFavoritesMutation, AddToFavoritesMutationVariables>) {
        return Apollo.useMutation<AddToFavoritesMutation, AddToFavoritesMutationVariables>(AddToFavoritesDocument, baseOptions);
      }
export type AddToFavoritesMutationHookResult = ReturnType<typeof useAddToFavoritesMutation>;
export type AddToFavoritesMutationResult = Apollo.MutationResult<AddToFavoritesMutation>;
export type AddToFavoritesMutationOptions = Apollo.BaseMutationOptions<AddToFavoritesMutation, AddToFavoritesMutationVariables>;
export const CreateBookingDocument = gql`
    mutation createBooking($propertyId: String!, $startDate: String!, $endDate: String!) {
  createBooking(propertyId: $propertyId, startDate: $startDate, endDate: $endDate)
}
    `;
export type CreateBookingMutationFn = Apollo.MutationFunction<CreateBookingMutation, CreateBookingMutationVariables>;
export type CreateBookingComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<CreateBookingMutation, CreateBookingMutationVariables>, 'mutation'>;

    export const CreateBookingComponent = (props: CreateBookingComponentProps) => (
      <ApolloReactComponents.Mutation<CreateBookingMutation, CreateBookingMutationVariables> mutation={CreateBookingDocument} {...props} />
    );
    

/**
 * __useCreateBookingMutation__
 *
 * To run a mutation, you first call `useCreateBookingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookingMutation, { data, loading, error }] = useCreateBookingMutation({
 *   variables: {
 *      propertyId: // value for 'propertyId'
 *      startDate: // value for 'startDate'
 *      endDate: // value for 'endDate'
 *   },
 * });
 */
export function useCreateBookingMutation(baseOptions?: Apollo.MutationHookOptions<CreateBookingMutation, CreateBookingMutationVariables>) {
        return Apollo.useMutation<CreateBookingMutation, CreateBookingMutationVariables>(CreateBookingDocument, baseOptions);
      }
export type CreateBookingMutationHookResult = ReturnType<typeof useCreateBookingMutation>;
export type CreateBookingMutationResult = Apollo.MutationResult<CreateBookingMutation>;
export type CreateBookingMutationOptions = Apollo.BaseMutationOptions<CreateBookingMutation, CreateBookingMutationVariables>;
export const GetBookingsForPropertyDocument = gql`
    query getBookingsForProperty($propertyId: String!) {
  getBookingsForProperty(propertyId: $propertyId)
}
    `;
export type GetBookingsForPropertyComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetBookingsForPropertyQuery, GetBookingsForPropertyQueryVariables>, 'query'> & ({ variables: GetBookingsForPropertyQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetBookingsForPropertyComponent = (props: GetBookingsForPropertyComponentProps) => (
      <ApolloReactComponents.Query<GetBookingsForPropertyQuery, GetBookingsForPropertyQueryVariables> query={GetBookingsForPropertyDocument} {...props} />
    );
    

/**
 * __useGetBookingsForPropertyQuery__
 *
 * To run a query within a React component, call `useGetBookingsForPropertyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookingsForPropertyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookingsForPropertyQuery({
 *   variables: {
 *      propertyId: // value for 'propertyId'
 *   },
 * });
 */
export function useGetBookingsForPropertyQuery(baseOptions: Apollo.QueryHookOptions<GetBookingsForPropertyQuery, GetBookingsForPropertyQueryVariables>) {
        return Apollo.useQuery<GetBookingsForPropertyQuery, GetBookingsForPropertyQueryVariables>(GetBookingsForPropertyDocument, baseOptions);
      }
export function useGetBookingsForPropertyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBookingsForPropertyQuery, GetBookingsForPropertyQueryVariables>) {
          return Apollo.useLazyQuery<GetBookingsForPropertyQuery, GetBookingsForPropertyQueryVariables>(GetBookingsForPropertyDocument, baseOptions);
        }
export type GetBookingsForPropertyQueryHookResult = ReturnType<typeof useGetBookingsForPropertyQuery>;
export type GetBookingsForPropertyLazyQueryHookResult = ReturnType<typeof useGetBookingsForPropertyLazyQuery>;
export type GetBookingsForPropertyQueryResult = Apollo.QueryResult<GetBookingsForPropertyQuery, GetBookingsForPropertyQueryVariables>;
export const GetFavoritesDocument = gql`
    query getFavorites {
  getFavorites
}
    `;
export type GetFavoritesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetFavoritesQuery, GetFavoritesQueryVariables>, 'query'>;

    export const GetFavoritesComponent = (props: GetFavoritesComponentProps) => (
      <ApolloReactComponents.Query<GetFavoritesQuery, GetFavoritesQueryVariables> query={GetFavoritesDocument} {...props} />
    );
    

/**
 * __useGetFavoritesQuery__
 *
 * To run a query within a React component, call `useGetFavoritesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFavoritesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFavoritesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFavoritesQuery(baseOptions?: Apollo.QueryHookOptions<GetFavoritesQuery, GetFavoritesQueryVariables>) {
        return Apollo.useQuery<GetFavoritesQuery, GetFavoritesQueryVariables>(GetFavoritesDocument, baseOptions);
      }
export function useGetFavoritesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFavoritesQuery, GetFavoritesQueryVariables>) {
          return Apollo.useLazyQuery<GetFavoritesQuery, GetFavoritesQueryVariables>(GetFavoritesDocument, baseOptions);
        }
export type GetFavoritesQueryHookResult = ReturnType<typeof useGetFavoritesQuery>;
export type GetFavoritesLazyQueryHookResult = ReturnType<typeof useGetFavoritesLazyQuery>;
export type GetFavoritesQueryResult = Apollo.QueryResult<GetFavoritesQuery, GetFavoritesQueryVariables>;
export const GetListingsDocument = gql`
    query getListings {
  getListings
}
    `;
export type GetListingsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetListingsQuery, GetListingsQueryVariables>, 'query'>;

    export const GetListingsComponent = (props: GetListingsComponentProps) => (
      <ApolloReactComponents.Query<GetListingsQuery, GetListingsQueryVariables> query={GetListingsDocument} {...props} />
    );
    

/**
 * __useGetListingsQuery__
 *
 * To run a query within a React component, call `useGetListingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetListingsQuery(baseOptions?: Apollo.QueryHookOptions<GetListingsQuery, GetListingsQueryVariables>) {
        return Apollo.useQuery<GetListingsQuery, GetListingsQueryVariables>(GetListingsDocument, baseOptions);
      }
export function useGetListingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetListingsQuery, GetListingsQueryVariables>) {
          return Apollo.useLazyQuery<GetListingsQuery, GetListingsQueryVariables>(GetListingsDocument, baseOptions);
        }
export type GetListingsQueryHookResult = ReturnType<typeof useGetListingsQuery>;
export type GetListingsLazyQueryHookResult = ReturnType<typeof useGetListingsLazyQuery>;
export type GetListingsQueryResult = Apollo.QueryResult<GetListingsQuery, GetListingsQueryVariables>;
export const GetMyBookingsDocument = gql`
    query getMyBookings {
  getMyBookings
}
    `;
export type GetMyBookingsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetMyBookingsQuery, GetMyBookingsQueryVariables>, 'query'>;

    export const GetMyBookingsComponent = (props: GetMyBookingsComponentProps) => (
      <ApolloReactComponents.Query<GetMyBookingsQuery, GetMyBookingsQueryVariables> query={GetMyBookingsDocument} {...props} />
    );
    

/**
 * __useGetMyBookingsQuery__
 *
 * To run a query within a React component, call `useGetMyBookingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyBookingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyBookingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMyBookingsQuery(baseOptions?: Apollo.QueryHookOptions<GetMyBookingsQuery, GetMyBookingsQueryVariables>) {
        return Apollo.useQuery<GetMyBookingsQuery, GetMyBookingsQueryVariables>(GetMyBookingsDocument, baseOptions);
      }
export function useGetMyBookingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyBookingsQuery, GetMyBookingsQueryVariables>) {
          return Apollo.useLazyQuery<GetMyBookingsQuery, GetMyBookingsQueryVariables>(GetMyBookingsDocument, baseOptions);
        }
export type GetMyBookingsQueryHookResult = ReturnType<typeof useGetMyBookingsQuery>;
export type GetMyBookingsLazyQueryHookResult = ReturnType<typeof useGetMyBookingsLazyQuery>;
export type GetMyBookingsQueryResult = Apollo.QueryResult<GetMyBookingsQuery, GetMyBookingsQueryVariables>;
export const GetPropertiesDocument = gql`
    query getProperties {
  getProperties
}
    `;
export type GetPropertiesComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPropertiesQuery, GetPropertiesQueryVariables>, 'query'>;

    export const GetPropertiesComponent = (props: GetPropertiesComponentProps) => (
      <ApolloReactComponents.Query<GetPropertiesQuery, GetPropertiesQueryVariables> query={GetPropertiesDocument} {...props} />
    );
    

/**
 * __useGetPropertiesQuery__
 *
 * To run a query within a React component, call `useGetPropertiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPropertiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPropertiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPropertiesQuery(baseOptions?: Apollo.QueryHookOptions<GetPropertiesQuery, GetPropertiesQueryVariables>) {
        return Apollo.useQuery<GetPropertiesQuery, GetPropertiesQueryVariables>(GetPropertiesDocument, baseOptions);
      }
export function useGetPropertiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPropertiesQuery, GetPropertiesQueryVariables>) {
          return Apollo.useLazyQuery<GetPropertiesQuery, GetPropertiesQueryVariables>(GetPropertiesDocument, baseOptions);
        }
export type GetPropertiesQueryHookResult = ReturnType<typeof useGetPropertiesQuery>;
export type GetPropertiesLazyQueryHookResult = ReturnType<typeof useGetPropertiesLazyQuery>;
export type GetPropertiesQueryResult = Apollo.QueryResult<GetPropertiesQuery, GetPropertiesQueryVariables>;
export const GetPropertyDocument = gql`
    query getProperty($propertyId: String!) {
  getProperty(propertyId: $propertyId)
}
    `;
export type GetPropertyComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<GetPropertyQuery, GetPropertyQueryVariables>, 'query'> & ({ variables: GetPropertyQueryVariables; skip?: boolean; } | { skip: boolean; });

    export const GetPropertyComponent = (props: GetPropertyComponentProps) => (
      <ApolloReactComponents.Query<GetPropertyQuery, GetPropertyQueryVariables> query={GetPropertyDocument} {...props} />
    );
    

/**
 * __useGetPropertyQuery__
 *
 * To run a query within a React component, call `useGetPropertyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPropertyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPropertyQuery({
 *   variables: {
 *      propertyId: // value for 'propertyId'
 *   },
 * });
 */
export function useGetPropertyQuery(baseOptions: Apollo.QueryHookOptions<GetPropertyQuery, GetPropertyQueryVariables>) {
        return Apollo.useQuery<GetPropertyQuery, GetPropertyQueryVariables>(GetPropertyDocument, baseOptions);
      }
export function useGetPropertyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPropertyQuery, GetPropertyQueryVariables>) {
          return Apollo.useLazyQuery<GetPropertyQuery, GetPropertyQueryVariables>(GetPropertyDocument, baseOptions);
        }
export type GetPropertyQueryHookResult = ReturnType<typeof useGetPropertyQuery>;
export type GetPropertyLazyQueryHookResult = ReturnType<typeof useGetPropertyLazyQuery>;
export type GetPropertyQueryResult = Apollo.QueryResult<GetPropertyQuery, GetPropertyQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    accessToken
    user {
      id
      email
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;
export type LoginComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LoginMutation, LoginMutationVariables>, 'mutation'>;

    export const LoginComponent = (props: LoginComponentProps) => (
      <ApolloReactComponents.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...props} />
    );
    

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;
export type LogoutComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<LogoutMutation, LogoutMutationVariables>, 'mutation'>;

    export const LogoutComponent = (props: LogoutComponentProps) => (
      <ApolloReactComponents.Mutation<LogoutMutation, LogoutMutationVariables> mutation={LogoutDocument} {...props} />
    );
    

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    email
    name
    avatarUrl
    profilePicture
  }
}
    `;
export type MeComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<MeQuery, MeQueryVariables>, 'query'>;

    export const MeComponent = (props: MeComponentProps) => (
      <ApolloReactComponents.Query<MeQuery, MeQueryVariables> query={MeDocument} {...props} />
    );
    

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($email: String!, $firstName: String!, $lastName: String!, $password: String!) {
  register(
    data: {email: $email, firstName: $firstName, lastName: $lastName, password: $password}
  ) {
    accessToken
    user {
      id
      name
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;
export type RegisterComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RegisterMutation, RegisterMutationVariables>, 'mutation'>;

    export const RegisterComponent = (props: RegisterComponentProps) => (
      <ApolloReactComponents.Mutation<RegisterMutation, RegisterMutationVariables> mutation={RegisterDocument} {...props} />
    );
    

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      firstName: // value for 'firstName'
 *      lastName: // value for 'lastName'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const RemoveFromFavoritesDocument = gql`
    mutation removeFromFavorites($propertyId: String!) {
  removeFromFavorites(propertyId: $propertyId)
}
    `;
export type RemoveFromFavoritesMutationFn = Apollo.MutationFunction<RemoveFromFavoritesMutation, RemoveFromFavoritesMutationVariables>;
export type RemoveFromFavoritesComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<RemoveFromFavoritesMutation, RemoveFromFavoritesMutationVariables>, 'mutation'>;

    export const RemoveFromFavoritesComponent = (props: RemoveFromFavoritesComponentProps) => (
      <ApolloReactComponents.Mutation<RemoveFromFavoritesMutation, RemoveFromFavoritesMutationVariables> mutation={RemoveFromFavoritesDocument} {...props} />
    );
    

/**
 * __useRemoveFromFavoritesMutation__
 *
 * To run a mutation, you first call `useRemoveFromFavoritesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFromFavoritesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFromFavoritesMutation, { data, loading, error }] = useRemoveFromFavoritesMutation({
 *   variables: {
 *      propertyId: // value for 'propertyId'
 *   },
 * });
 */
export function useRemoveFromFavoritesMutation(baseOptions?: Apollo.MutationHookOptions<RemoveFromFavoritesMutation, RemoveFromFavoritesMutationVariables>) {
        return Apollo.useMutation<RemoveFromFavoritesMutation, RemoveFromFavoritesMutationVariables>(RemoveFromFavoritesDocument, baseOptions);
      }
export type RemoveFromFavoritesMutationHookResult = ReturnType<typeof useRemoveFromFavoritesMutation>;
export type RemoveFromFavoritesMutationResult = Apollo.MutationResult<RemoveFromFavoritesMutation>;
export type RemoveFromFavoritesMutationOptions = Apollo.BaseMutationOptions<RemoveFromFavoritesMutation, RemoveFromFavoritesMutationVariables>;
export const UploadPropertyDocument = gql`
    mutation uploadProperty($name: String!, $description: String!, $price: Float!, $bedrooms: Int!, $bathrooms: Int!, $pets: Boolean!, $amenities: [String!]!, $images: [String!]!) {
  uploadProperty(
    data: {name: $name, description: $description, price: $price, bedrooms: $bedrooms, bathrooms: $bathrooms, pets: $pets, amenities: $amenities, images: $images}
  )
}
    `;
export type UploadPropertyMutationFn = Apollo.MutationFunction<UploadPropertyMutation, UploadPropertyMutationVariables>;
export type UploadPropertyComponentProps = Omit<ApolloReactComponents.MutationComponentOptions<UploadPropertyMutation, UploadPropertyMutationVariables>, 'mutation'>;

    export const UploadPropertyComponent = (props: UploadPropertyComponentProps) => (
      <ApolloReactComponents.Mutation<UploadPropertyMutation, UploadPropertyMutationVariables> mutation={UploadPropertyDocument} {...props} />
    );
    

/**
 * __useUploadPropertyMutation__
 *
 * To run a mutation, you first call `useUploadPropertyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadPropertyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadPropertyMutation, { data, loading, error }] = useUploadPropertyMutation({
 *   variables: {
 *      name: // value for 'name'
 *      description: // value for 'description'
 *      price: // value for 'price'
 *      bedrooms: // value for 'bedrooms'
 *      bathrooms: // value for 'bathrooms'
 *      pets: // value for 'pets'
 *      amenities: // value for 'amenities'
 *      images: // value for 'images'
 *   },
 * });
 */
export function useUploadPropertyMutation(baseOptions?: Apollo.MutationHookOptions<UploadPropertyMutation, UploadPropertyMutationVariables>) {
        return Apollo.useMutation<UploadPropertyMutation, UploadPropertyMutationVariables>(UploadPropertyDocument, baseOptions);
      }
export type UploadPropertyMutationHookResult = ReturnType<typeof useUploadPropertyMutation>;
export type UploadPropertyMutationResult = Apollo.MutationResult<UploadPropertyMutation>;
export type UploadPropertyMutationOptions = Apollo.BaseMutationOptions<UploadPropertyMutation, UploadPropertyMutationVariables>;