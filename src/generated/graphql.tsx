/* eslint-disable */
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
  DateTime: { input: any; output: any; }
};

export type Board = {
  __typename?: 'Board';
  /** 게시글 본문 */
  content: Scalars['String']['output'];
  /** 생성일 */
  createDate: Scalars['DateTime']['output'];
  /** 게시글 고유 아이디 */
  id: Scalars['Int']['output'];
  /** 삭제여부 */
  isDeleted: Scalars['Boolean']['output'];
  /** 좋아요 여부 */
  isLike: Scalars['Boolean']['output'];
  /** 좋아요 수 */
  likes: Scalars['Int']['output'];
  /** 수정일 */
  modifiedDate: Scalars['DateTime']['output'];
  /** 댓글 수 */
  reviews: Scalars['Int']['output'];
  /** 게시글 타입 */
  type: Scalars['String']['output'];
  /** 조회수 */
  views: Scalars['Int']['output'];
  writer: User;
  /** 작성자 ID */
  writerId: Scalars['Int']['output'];
};

/** 게시판 생성 인풋 데이터 */
export type CreateBoardInput = {
  content: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

/** 필드 에러 타입 */
export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

/** 로그인 인풋 데이터 */
export type LoginInput = {
  emailOrUserId: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

/** 로그인 반환 데이터 */
export type LoginResponse = {
  __typename?: 'LoginResponse';
  accessToken?: Maybe<Scalars['String']['output']>;
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createBoard: Board;
  deleteBoard: Scalars['Boolean']['output'];
  likeBoard: Scalars['Boolean']['output'];
  login: LoginResponse;
  logout: Scalars['Boolean']['output'];
  refreshAccessToken?: Maybe<RefreshAccessTokenResponse>;
  signUp: User;
  updateBoard: Board;
};


export type MutationCreateBoardArgs = {
  createBoardInput: CreateBoardInput;
};


export type MutationDeleteBoardArgs = {
  boardId: Scalars['Int']['input'];
};


export type MutationLikeBoardArgs = {
  boardId: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationSignUpArgs = {
  signUpInput: SignUpInput;
};


export type MutationUpdateBoardArgs = {
  updateBoardInput: UpdateBoardInput;
};

export type PaginatedBoards = {
  __typename?: 'PaginatedBoards';
  boards: Array<Board>;
  cursor?: Maybe<Scalars['Int']['output']>;
};

export type Query = {
  __typename?: 'Query';
  board?: Maybe<Board>;
  boards: PaginatedBoards;
  me?: Maybe<User>;
  user?: Maybe<User>;
};


export type QueryBoardArgs = {
  boardId: Scalars['Int']['input'];
};


export type QueryBoardsArgs = {
  cursor?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryUserArgs = {
  userId: Scalars['String']['input'];
};

/** 엑세스 토큰 새로고침 반환 데이터 */
export type RefreshAccessTokenResponse = {
  __typename?: 'RefreshAccessTokenResponse';
  accessToken: Scalars['String']['output'];
};

/** 회원가입 인풋 데이터 */
export type SignUpInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

/** 게시판 수정 인풋 데이터 */
export type UpdateBoardInput = {
  content: Scalars['String']['input'];
  id: Scalars['Float']['input'];
  type: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  /** 생성 일자 */
  createdAt: Scalars['DateTime']['output'];
  /** 유저 이메일 */
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  /** 업데이트 일자 */
  updatedAt: Scalars['DateTime']['output'];
  /** 유저 아이디 */
  userId: Scalars['String']['output'];
  /** 유저 이름 */
  username: Scalars['String']['output'];
};

export type CreateBoardMutationVariables = Exact<{
  createBoardInput: CreateBoardInput;
}>;


export type CreateBoardMutation = { __typename?: 'Mutation', createBoard: { __typename?: 'Board', id: number, type: string, content: string, writerId: number, views: number, likes: number, createDate: any, modifiedDate: any } };

export type DeleteBoardMutationVariables = Exact<{
  boardId: Scalars['Int']['input'];
}>;


export type DeleteBoardMutation = { __typename?: 'Mutation', deleteBoard: boolean };

export type LikeBoardMutationVariables = Exact<{
  boardId: Scalars['Int']['input'];
}>;


export type LikeBoardMutation = { __typename?: 'Mutation', likeBoard: boolean };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', accessToken?: string | null, errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null, user?: { __typename?: 'User', id: number, username: string, email: string, userId: string } | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RefreshAccessTokenMutationVariables = Exact<{ [key: string]: never; }>;


export type RefreshAccessTokenMutation = { __typename?: 'Mutation', refreshAccessToken?: { __typename?: 'RefreshAccessTokenResponse', accessToken: string } | null };

export type SignUpMutationVariables = Exact<{
  signUpInput: SignUpInput;
}>;


export type SignUpMutation = { __typename?: 'Mutation', signUp: { __typename?: 'User', email: string, username: string, userId: string, createdAt: any, updatedAt: any, id: number } };

export type UpdateBoardMutationVariables = Exact<{
  updateBoardInput: UpdateBoardInput;
}>;


export type UpdateBoardMutation = { __typename?: 'Mutation', updateBoard: { __typename?: 'Board', id: number, type: string, content: string } };

export type BoardQueryVariables = Exact<{
  boardId: Scalars['Int']['input'];
}>;


export type BoardQuery = { __typename?: 'Query', board?: { __typename?: 'Board', id: number, type: string, content: string, writerId: number, views: number, likes: number, isLike: boolean, reviews: number, createDate: any, modifiedDate: any, isDeleted: boolean, writer: { __typename?: 'User', id: number, username: string, userId: string, email: string, createdAt: any, updatedAt: any } } | null };

export type BoardsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  cursor?: InputMaybe<Scalars['Int']['input']>;
}>;


export type BoardsQuery = { __typename?: 'Query', boards: { __typename?: 'PaginatedBoards', cursor?: number | null, boards: Array<{ __typename?: 'Board', id: number, type: string, content: string, writerId: number, views: number, likes: number, isLike: boolean, reviews: number, createDate: any, modifiedDate: any, isDeleted: boolean, writer: { __typename?: 'User', id: number, username: string, userId: string, email: string, createdAt: any, updatedAt: any } }> } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: number, userId: string, username: string, email: string, updatedAt: any, createdAt: any } | null };

export type UserQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: number, userId: string, username: string, updatedAt: any, createdAt: any } | null };


export const CreateBoardDocument = gql`
    mutation createBoard($createBoardInput: CreateBoardInput!) {
  createBoard(createBoardInput: $createBoardInput) {
    id
    type
    content
    writerId
    views
    likes
    createDate
    modifiedDate
  }
}
    `;
export type CreateBoardMutationFn = Apollo.MutationFunction<CreateBoardMutation, CreateBoardMutationVariables>;

/**
 * __useCreateBoardMutation__
 *
 * To run a mutation, you first call `useCreateBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBoardMutation, { data, loading, error }] = useCreateBoardMutation({
 *   variables: {
 *      createBoardInput: // value for 'createBoardInput'
 *   },
 * });
 */
export function useCreateBoardMutation(baseOptions?: Apollo.MutationHookOptions<CreateBoardMutation, CreateBoardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBoardMutation, CreateBoardMutationVariables>(CreateBoardDocument, options);
      }
export type CreateBoardMutationHookResult = ReturnType<typeof useCreateBoardMutation>;
export type CreateBoardMutationResult = Apollo.MutationResult<CreateBoardMutation>;
export type CreateBoardMutationOptions = Apollo.BaseMutationOptions<CreateBoardMutation, CreateBoardMutationVariables>;
export const DeleteBoardDocument = gql`
    mutation deleteBoard($boardId: Int!) {
  deleteBoard(boardId: $boardId)
}
    `;
export type DeleteBoardMutationFn = Apollo.MutationFunction<DeleteBoardMutation, DeleteBoardMutationVariables>;

/**
 * __useDeleteBoardMutation__
 *
 * To run a mutation, you first call `useDeleteBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBoardMutation, { data, loading, error }] = useDeleteBoardMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *   },
 * });
 */
export function useDeleteBoardMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBoardMutation, DeleteBoardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBoardMutation, DeleteBoardMutationVariables>(DeleteBoardDocument, options);
      }
export type DeleteBoardMutationHookResult = ReturnType<typeof useDeleteBoardMutation>;
export type DeleteBoardMutationResult = Apollo.MutationResult<DeleteBoardMutation>;
export type DeleteBoardMutationOptions = Apollo.BaseMutationOptions<DeleteBoardMutation, DeleteBoardMutationVariables>;
export const LikeBoardDocument = gql`
    mutation likeBoard($boardId: Int!) {
  likeBoard(boardId: $boardId)
}
    `;
export type LikeBoardMutationFn = Apollo.MutationFunction<LikeBoardMutation, LikeBoardMutationVariables>;

/**
 * __useLikeBoardMutation__
 *
 * To run a mutation, you first call `useLikeBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeBoardMutation, { data, loading, error }] = useLikeBoardMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *   },
 * });
 */
export function useLikeBoardMutation(baseOptions?: Apollo.MutationHookOptions<LikeBoardMutation, LikeBoardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikeBoardMutation, LikeBoardMutationVariables>(LikeBoardDocument, options);
      }
export type LikeBoardMutationHookResult = ReturnType<typeof useLikeBoardMutation>;
export type LikeBoardMutationResult = Apollo.MutationResult<LikeBoardMutation>;
export type LikeBoardMutationOptions = Apollo.BaseMutationOptions<LikeBoardMutation, LikeBoardMutationVariables>;
export const LoginDocument = gql`
    mutation login($loginInput: LoginInput!) {
  login(loginInput: $loginInput) {
    errors {
      field
      message
    }
    user {
      id
      username
      email
      userId
    }
    accessToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

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
 *      loginInput: // value for 'loginInput'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RefreshAccessTokenDocument = gql`
    mutation refreshAccessToken {
  refreshAccessToken {
    accessToken
  }
}
    `;
export type RefreshAccessTokenMutationFn = Apollo.MutationFunction<RefreshAccessTokenMutation, RefreshAccessTokenMutationVariables>;

/**
 * __useRefreshAccessTokenMutation__
 *
 * To run a mutation, you first call `useRefreshAccessTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRefreshAccessTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [refreshAccessTokenMutation, { data, loading, error }] = useRefreshAccessTokenMutation({
 *   variables: {
 *   },
 * });
 */
export function useRefreshAccessTokenMutation(baseOptions?: Apollo.MutationHookOptions<RefreshAccessTokenMutation, RefreshAccessTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RefreshAccessTokenMutation, RefreshAccessTokenMutationVariables>(RefreshAccessTokenDocument, options);
      }
export type RefreshAccessTokenMutationHookResult = ReturnType<typeof useRefreshAccessTokenMutation>;
export type RefreshAccessTokenMutationResult = Apollo.MutationResult<RefreshAccessTokenMutation>;
export type RefreshAccessTokenMutationOptions = Apollo.BaseMutationOptions<RefreshAccessTokenMutation, RefreshAccessTokenMutationVariables>;
export const SignUpDocument = gql`
    mutation signUp($signUpInput: SignUpInput!) {
  signUp(signUpInput: $signUpInput) {
    email
    username
    userId
    createdAt
    updatedAt
    id
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      signUpInput: // value for 'signUpInput'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const UpdateBoardDocument = gql`
    mutation updateBoard($updateBoardInput: UpdateBoardInput!) {
  updateBoard(updateBoardInput: $updateBoardInput) {
    id
    type
    content
  }
}
    `;
export type UpdateBoardMutationFn = Apollo.MutationFunction<UpdateBoardMutation, UpdateBoardMutationVariables>;

/**
 * __useUpdateBoardMutation__
 *
 * To run a mutation, you first call `useUpdateBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBoardMutation, { data, loading, error }] = useUpdateBoardMutation({
 *   variables: {
 *      updateBoardInput: // value for 'updateBoardInput'
 *   },
 * });
 */
export function useUpdateBoardMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBoardMutation, UpdateBoardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBoardMutation, UpdateBoardMutationVariables>(UpdateBoardDocument, options);
      }
export type UpdateBoardMutationHookResult = ReturnType<typeof useUpdateBoardMutation>;
export type UpdateBoardMutationResult = Apollo.MutationResult<UpdateBoardMutation>;
export type UpdateBoardMutationOptions = Apollo.BaseMutationOptions<UpdateBoardMutation, UpdateBoardMutationVariables>;
export const BoardDocument = gql`
    query board($boardId: Int!) {
  board(boardId: $boardId) {
    id
    type
    content
    writerId
    writer {
      id
      username
      userId
      email
      createdAt
      updatedAt
    }
    views
    likes
    isLike
    reviews
    createDate
    modifiedDate
    isDeleted
  }
}
    `;

/**
 * __useBoardQuery__
 *
 * To run a query within a React component, call `useBoardQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoardQuery({
 *   variables: {
 *      boardId: // value for 'boardId'
 *   },
 * });
 */
export function useBoardQuery(baseOptions: Apollo.QueryHookOptions<BoardQuery, BoardQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BoardQuery, BoardQueryVariables>(BoardDocument, options);
      }
export function useBoardLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BoardQuery, BoardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BoardQuery, BoardQueryVariables>(BoardDocument, options);
        }
export function useBoardSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<BoardQuery, BoardQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BoardQuery, BoardQueryVariables>(BoardDocument, options);
        }
export type BoardQueryHookResult = ReturnType<typeof useBoardQuery>;
export type BoardLazyQueryHookResult = ReturnType<typeof useBoardLazyQuery>;
export type BoardSuspenseQueryHookResult = ReturnType<typeof useBoardSuspenseQuery>;
export type BoardQueryResult = Apollo.QueryResult<BoardQuery, BoardQueryVariables>;
export const BoardsDocument = gql`
    query Boards($limit: Int, $cursor: Int) {
  boards(limit: $limit, cursor: $cursor) {
    cursor
    boards {
      id
      type
      content
      writerId
      writer {
        id
        username
        userId
        email
        createdAt
        updatedAt
      }
      views
      likes
      isLike
      reviews
      createDate
      modifiedDate
      isDeleted
    }
  }
}
    `;

/**
 * __useBoardsQuery__
 *
 * To run a query within a React component, call `useBoardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBoardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBoardsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      cursor: // value for 'cursor'
 *   },
 * });
 */
export function useBoardsQuery(baseOptions?: Apollo.QueryHookOptions<BoardsQuery, BoardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BoardsQuery, BoardsQueryVariables>(BoardsDocument, options);
      }
export function useBoardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BoardsQuery, BoardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BoardsQuery, BoardsQueryVariables>(BoardsDocument, options);
        }
export function useBoardsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<BoardsQuery, BoardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<BoardsQuery, BoardsQueryVariables>(BoardsDocument, options);
        }
export type BoardsQueryHookResult = ReturnType<typeof useBoardsQuery>;
export type BoardsLazyQueryHookResult = ReturnType<typeof useBoardsLazyQuery>;
export type BoardsSuspenseQueryHookResult = ReturnType<typeof useBoardsSuspenseQuery>;
export type BoardsQueryResult = Apollo.QueryResult<BoardsQuery, BoardsQueryVariables>;
export const MeDocument = gql`
    query me {
  me {
    id
    userId
    username
    email
    updatedAt
    createdAt
  }
}
    `;

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
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export function useMeSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeSuspenseQueryHookResult = ReturnType<typeof useMeSuspenseQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const UserDocument = gql`
    query user($userId: String!) {
  user(userId: $userId) {
    id
    userId
    username
    updatedAt
    createdAt
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export function useUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserSuspenseQueryHookResult = ReturnType<typeof useUserSuspenseQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;