// Code generated by Prisma (prisma@1.34.8). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  post: (where?: PostWhereInput) => Promise<boolean>;
  product: (where?: ProductWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  post: (where: PostWhereUniqueInput) => PostNullablePromise;
  posts: (args?: {
    where?: PostWhereInput;
    orderBy?: PostOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Post>;
  postsConnection: (args?: {
    where?: PostWhereInput;
    orderBy?: PostOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => PostConnectionPromise;
  product: (where: ProductWhereUniqueInput) => ProductNullablePromise;
  products: (args?: {
    where?: ProductWhereInput;
    orderBy?: ProductOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Product>;
  productsConnection: (args?: {
    where?: ProductWhereInput;
    orderBy?: ProductOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => ProductConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createPost: (data: PostCreateInput) => PostPromise;
  updatePost: (args: {
    data: PostUpdateInput;
    where: PostWhereUniqueInput;
  }) => PostPromise;
  updateManyPosts: (args: {
    data: PostUpdateManyMutationInput;
    where?: PostWhereInput;
  }) => BatchPayloadPromise;
  upsertPost: (args: {
    where: PostWhereUniqueInput;
    create: PostCreateInput;
    update: PostUpdateInput;
  }) => PostPromise;
  deletePost: (where: PostWhereUniqueInput) => PostPromise;
  deleteManyPosts: (where?: PostWhereInput) => BatchPayloadPromise;
  createProduct: (data: ProductCreateInput) => ProductPromise;
  updateProduct: (args: {
    data: ProductUpdateInput;
    where: ProductWhereUniqueInput;
  }) => ProductPromise;
  updateManyProducts: (args: {
    data: ProductUpdateManyMutationInput;
    where?: ProductWhereInput;
  }) => BatchPayloadPromise;
  upsertProduct: (args: {
    where: ProductWhereUniqueInput;
    create: ProductCreateInput;
    update: ProductUpdateInput;
  }) => ProductPromise;
  deleteProduct: (where: ProductWhereUniqueInput) => ProductPromise;
  deleteManyProducts: (where?: ProductWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  post: (
    where?: PostSubscriptionWhereInput
  ) => PostSubscriptionPayloadSubscription;
  product: (
    where?: ProductSubscriptionWhereInput
  ) => ProductSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type PostOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "published_ASC"
  | "published_DESC"
  | "title_ASC"
  | "title_DESC"
  | "content_ASC"
  | "content_DESC";

export type ProductOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "label_ASC"
  | "label_DESC"
  | "price_ASC"
  | "price_DESC"
  | "description_ASC"
  | "description_DESC"
  | "published_ASC"
  | "published_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "name_ASC"
  | "name_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserUpdateWithoutPostsDataInput {
  email?: Maybe<String>;
  name?: Maybe<String>;
}

export type PostWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface PostUpdateManyWithoutAuthorInput {
  create?: Maybe<PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput>;
  delete?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
  connect?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
  set?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
  disconnect?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
  update?: Maybe<
    | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    | PostUpdateWithWhereUniqueWithoutAuthorInput
  >;
  upsert?: Maybe<
    | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    | PostUpsertWithWhereUniqueWithoutAuthorInput
  >;
  deleteMany?: Maybe<PostScalarWhereInput[] | PostScalarWhereInput>;
  updateMany?: Maybe<
    PostUpdateManyWithWhereNestedInput[] | PostUpdateManyWithWhereNestedInput
  >;
}

export interface PostCreateWithoutAuthorInput {
  id?: Maybe<ID_Input>;
  published?: Maybe<Boolean>;
  title: String;
  content?: Maybe<String>;
}

export interface UserUpdateDataInput {
  email?: Maybe<String>;
  name?: Maybe<String>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface UserUpdateManyMutationInput {
  email?: Maybe<String>;
  name?: Maybe<String>;
}

export interface PostCreateManyWithoutAuthorInput {
  create?: Maybe<PostCreateWithoutAuthorInput[] | PostCreateWithoutAuthorInput>;
  connect?: Maybe<PostWhereUniqueInput[] | PostWhereUniqueInput>;
}

export interface PostCreateInput {
  id?: Maybe<ID_Input>;
  published?: Maybe<Boolean>;
  title: String;
  content?: Maybe<String>;
  author: UserCreateOneWithoutPostsInput;
}

export interface PostSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<PostWhereInput>;
  AND?: Maybe<PostSubscriptionWhereInput[] | PostSubscriptionWhereInput>;
  OR?: Maybe<PostSubscriptionWhereInput[] | PostSubscriptionWhereInput>;
  NOT?: Maybe<PostSubscriptionWhereInput[] | PostSubscriptionWhereInput>;
}

export interface UserCreateOneWithoutPostsInput {
  create?: Maybe<UserCreateWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface ProductUpdateManyMutationInput {
  label?: Maybe<String>;
  price?: Maybe<Int>;
  description?: Maybe<String>;
  published?: Maybe<Boolean>;
}

export interface UserCreateWithoutPostsInput {
  id?: Maybe<ID_Input>;
  email: String;
  name?: Maybe<String>;
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput;
  create: UserCreateInput;
}

export interface PostUpdateInput {
  published?: Maybe<Boolean>;
  title?: Maybe<String>;
  content?: Maybe<String>;
  author?: Maybe<UserUpdateOneRequiredWithoutPostsInput>;
}

export interface PostUpdateManyDataInput {
  published?: Maybe<Boolean>;
  title?: Maybe<String>;
  content?: Maybe<String>;
}

export interface UserUpdateOneRequiredWithoutPostsInput {
  create?: Maybe<UserCreateWithoutPostsInput>;
  update?: Maybe<UserUpdateWithoutPostsDataInput>;
  upsert?: Maybe<UserUpsertWithoutPostsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface PostScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  published?: Maybe<Boolean>;
  published_not?: Maybe<Boolean>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  content?: Maybe<String>;
  content_not?: Maybe<String>;
  content_in?: Maybe<String[] | String>;
  content_not_in?: Maybe<String[] | String>;
  content_lt?: Maybe<String>;
  content_lte?: Maybe<String>;
  content_gt?: Maybe<String>;
  content_gte?: Maybe<String>;
  content_contains?: Maybe<String>;
  content_not_contains?: Maybe<String>;
  content_starts_with?: Maybe<String>;
  content_not_starts_with?: Maybe<String>;
  content_ends_with?: Maybe<String>;
  content_not_ends_with?: Maybe<String>;
  AND?: Maybe<PostScalarWhereInput[] | PostScalarWhereInput>;
  OR?: Maybe<PostScalarWhereInput[] | PostScalarWhereInput>;
  NOT?: Maybe<PostScalarWhereInput[] | PostScalarWhereInput>;
}

export interface UserUpdateOneRequiredInput {
  create?: Maybe<UserCreateInput>;
  update?: Maybe<UserUpdateDataInput>;
  upsert?: Maybe<UserUpsertNestedInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface UserUpsertWithoutPostsInput {
  update: UserUpdateWithoutPostsDataInput;
  create: UserCreateWithoutPostsInput;
}

export interface PostUpdateWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput;
  data: PostUpdateWithoutAuthorDataInput;
}

export interface PostUpdateManyMutationInput {
  published?: Maybe<Boolean>;
  title?: Maybe<String>;
  content?: Maybe<String>;
}

export interface ProductSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<ProductWhereInput>;
  AND?: Maybe<ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput>;
  OR?: Maybe<ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput>;
  NOT?: Maybe<ProductSubscriptionWhereInput[] | ProductSubscriptionWhereInput>;
}

export interface PostWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  published?: Maybe<Boolean>;
  published_not?: Maybe<Boolean>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  content?: Maybe<String>;
  content_not?: Maybe<String>;
  content_in?: Maybe<String[] | String>;
  content_not_in?: Maybe<String[] | String>;
  content_lt?: Maybe<String>;
  content_lte?: Maybe<String>;
  content_gt?: Maybe<String>;
  content_gte?: Maybe<String>;
  content_contains?: Maybe<String>;
  content_not_contains?: Maybe<String>;
  content_starts_with?: Maybe<String>;
  content_not_starts_with?: Maybe<String>;
  content_ends_with?: Maybe<String>;
  content_not_ends_with?: Maybe<String>;
  author?: Maybe<UserWhereInput>;
  AND?: Maybe<PostWhereInput[] | PostWhereInput>;
  OR?: Maybe<PostWhereInput[] | PostWhereInput>;
  NOT?: Maybe<PostWhereInput[] | PostWhereInput>;
}

export type ProductWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface PostUpdateManyWithWhereNestedInput {
  where: PostScalarWhereInput;
  data: PostUpdateManyDataInput;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  email: String;
  name?: Maybe<String>;
  posts?: Maybe<PostCreateManyWithoutAuthorInput>;
}

export interface UserCreateOneInput {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface ProductCreateInput {
  id?: Maybe<ID_Input>;
  label: String;
  price: Int;
  description: String;
  published?: Maybe<Boolean>;
  owner: UserCreateOneInput;
}

export interface ProductUpdateInput {
  label?: Maybe<String>;
  price?: Maybe<Int>;
  description?: Maybe<String>;
  published?: Maybe<Boolean>;
  owner?: Maybe<UserUpdateOneRequiredInput>;
}

export interface PostUpsertWithWhereUniqueWithoutAuthorInput {
  where: PostWhereUniqueInput;
  update: PostUpdateWithoutAuthorDataInput;
  create: PostCreateWithoutAuthorInput;
}

export interface ProductWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  label?: Maybe<String>;
  label_not?: Maybe<String>;
  label_in?: Maybe<String[] | String>;
  label_not_in?: Maybe<String[] | String>;
  label_lt?: Maybe<String>;
  label_lte?: Maybe<String>;
  label_gt?: Maybe<String>;
  label_gte?: Maybe<String>;
  label_contains?: Maybe<String>;
  label_not_contains?: Maybe<String>;
  label_starts_with?: Maybe<String>;
  label_not_starts_with?: Maybe<String>;
  label_ends_with?: Maybe<String>;
  label_not_ends_with?: Maybe<String>;
  price?: Maybe<Int>;
  price_not?: Maybe<Int>;
  price_in?: Maybe<Int[] | Int>;
  price_not_in?: Maybe<Int[] | Int>;
  price_lt?: Maybe<Int>;
  price_lte?: Maybe<Int>;
  price_gt?: Maybe<Int>;
  price_gte?: Maybe<Int>;
  description?: Maybe<String>;
  description_not?: Maybe<String>;
  description_in?: Maybe<String[] | String>;
  description_not_in?: Maybe<String[] | String>;
  description_lt?: Maybe<String>;
  description_lte?: Maybe<String>;
  description_gt?: Maybe<String>;
  description_gte?: Maybe<String>;
  description_contains?: Maybe<String>;
  description_not_contains?: Maybe<String>;
  description_starts_with?: Maybe<String>;
  description_not_starts_with?: Maybe<String>;
  description_ends_with?: Maybe<String>;
  description_not_ends_with?: Maybe<String>;
  published?: Maybe<Boolean>;
  published_not?: Maybe<Boolean>;
  owner?: Maybe<UserWhereInput>;
  AND?: Maybe<ProductWhereInput[] | ProductWhereInput>;
  OR?: Maybe<ProductWhereInput[] | ProductWhereInput>;
  NOT?: Maybe<ProductWhereInput[] | ProductWhereInput>;
}

export interface UserUpdateInput {
  email?: Maybe<String>;
  name?: Maybe<String>;
  posts?: Maybe<PostUpdateManyWithoutAuthorInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  name?: Maybe<String>;
  name_not?: Maybe<String>;
  name_in?: Maybe<String[] | String>;
  name_not_in?: Maybe<String[] | String>;
  name_lt?: Maybe<String>;
  name_lte?: Maybe<String>;
  name_gt?: Maybe<String>;
  name_gte?: Maybe<String>;
  name_contains?: Maybe<String>;
  name_not_contains?: Maybe<String>;
  name_starts_with?: Maybe<String>;
  name_not_starts_with?: Maybe<String>;
  name_ends_with?: Maybe<String>;
  name_not_ends_with?: Maybe<String>;
  posts_every?: Maybe<PostWhereInput>;
  posts_some?: Maybe<PostWhereInput>;
  posts_none?: Maybe<PostWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export interface PostUpdateWithoutAuthorDataInput {
  published?: Maybe<Boolean>;
  title?: Maybe<String>;
  content?: Maybe<String>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserPreviousValues {
  id: ID_Output;
  email: String;
  name?: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  name: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface PostEdge {
  node: Post;
  cursor: String;
}

export interface PostEdgePromise extends Promise<PostEdge>, Fragmentable {
  node: <T = PostPromise>() => T;
  cursor: () => Promise<String>;
}

export interface PostEdgeSubscription
  extends Promise<AsyncIterator<PostEdge>>,
    Fragmentable {
  node: <T = PostSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface User {
  id: ID_Output;
  email: String;
  name?: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  name: () => Promise<String>;
  posts: <T = FragmentableArray<Post>>(args?: {
    where?: PostWhereInput;
    orderBy?: PostOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  name: () => Promise<AsyncIterator<String>>;
  posts: <T = Promise<AsyncIterator<PostSubscription>>>(args?: {
    where?: PostWhereInput;
    orderBy?: PostOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  name: () => Promise<String>;
  posts: <T = FragmentableArray<Post>>(args?: {
    where?: PostWhereInput;
    orderBy?: PostOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PostConnection {
  pageInfo: PageInfo;
  edges: PostEdge[];
}

export interface PostConnectionPromise
  extends Promise<PostConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<PostEdge>>() => T;
  aggregate: <T = AggregatePostPromise>() => T;
}

export interface PostConnectionSubscription
  extends Promise<AsyncIterator<PostConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<PostEdgeSubscription>>>() => T;
  aggregate: <T = AggregatePostSubscription>() => T;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface Post {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  published: Boolean;
  title: String;
  content?: String;
}

export interface PostPromise extends Promise<Post>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  published: () => Promise<Boolean>;
  title: () => Promise<String>;
  content: () => Promise<String>;
  author: <T = UserPromise>() => T;
}

export interface PostSubscription
  extends Promise<AsyncIterator<Post>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  published: () => Promise<AsyncIterator<Boolean>>;
  title: () => Promise<AsyncIterator<String>>;
  content: () => Promise<AsyncIterator<String>>;
  author: <T = UserSubscription>() => T;
}

export interface PostNullablePromise
  extends Promise<Post | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  published: () => Promise<Boolean>;
  title: () => Promise<String>;
  content: () => Promise<String>;
  author: <T = UserPromise>() => T;
}

export interface AggregateProduct {
  count: Int;
}

export interface AggregateProductPromise
  extends Promise<AggregateProduct>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateProductSubscription
  extends Promise<AsyncIterator<AggregateProduct>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface PostSubscriptionPayload {
  mutation: MutationType;
  node: Post;
  updatedFields: String[];
  previousValues: PostPreviousValues;
}

export interface PostSubscriptionPayloadPromise
  extends Promise<PostSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = PostPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = PostPreviousValuesPromise>() => T;
}

export interface PostSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<PostSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = PostSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = PostPreviousValuesSubscription>() => T;
}

export interface ProductConnection {
  pageInfo: PageInfo;
  edges: ProductEdge[];
}

export interface ProductConnectionPromise
  extends Promise<ProductConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<ProductEdge>>() => T;
  aggregate: <T = AggregateProductPromise>() => T;
}

export interface ProductConnectionSubscription
  extends Promise<AsyncIterator<ProductConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<ProductEdgeSubscription>>>() => T;
  aggregate: <T = AggregateProductSubscription>() => T;
}

export interface PostPreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  updatedAt: DateTimeOutput;
  published: Boolean;
  title: String;
  content?: String;
}

export interface PostPreviousValuesPromise
  extends Promise<PostPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  updatedAt: () => Promise<DateTimeOutput>;
  published: () => Promise<Boolean>;
  title: () => Promise<String>;
  content: () => Promise<String>;
}

export interface PostPreviousValuesSubscription
  extends Promise<AsyncIterator<PostPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  published: () => Promise<AsyncIterator<Boolean>>;
  title: () => Promise<AsyncIterator<String>>;
  content: () => Promise<AsyncIterator<String>>;
}

export interface Product {
  id: ID_Output;
  label: String;
  price: Int;
  description: String;
  published: Boolean;
}

export interface ProductPromise extends Promise<Product>, Fragmentable {
  id: () => Promise<ID_Output>;
  label: () => Promise<String>;
  price: () => Promise<Int>;
  description: () => Promise<String>;
  published: () => Promise<Boolean>;
  owner: <T = UserPromise>() => T;
}

export interface ProductSubscription
  extends Promise<AsyncIterator<Product>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  label: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<Int>>;
  description: () => Promise<AsyncIterator<String>>;
  published: () => Promise<AsyncIterator<Boolean>>;
  owner: <T = UserSubscription>() => T;
}

export interface ProductNullablePromise
  extends Promise<Product | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  label: () => Promise<String>;
  price: () => Promise<Int>;
  description: () => Promise<String>;
  published: () => Promise<Boolean>;
  owner: <T = UserPromise>() => T;
}

export interface ProductSubscriptionPayload {
  mutation: MutationType;
  node: Product;
  updatedFields: String[];
  previousValues: ProductPreviousValues;
}

export interface ProductSubscriptionPayloadPromise
  extends Promise<ProductSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = ProductPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = ProductPreviousValuesPromise>() => T;
}

export interface ProductSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<ProductSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = ProductSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = ProductPreviousValuesSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregatePost {
  count: Int;
}

export interface AggregatePostPromise
  extends Promise<AggregatePost>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregatePostSubscription
  extends Promise<AsyncIterator<AggregatePost>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface ProductPreviousValues {
  id: ID_Output;
  label: String;
  price: Int;
  description: String;
  published: Boolean;
}

export interface ProductPreviousValuesPromise
  extends Promise<ProductPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  label: () => Promise<String>;
  price: () => Promise<Int>;
  description: () => Promise<String>;
  published: () => Promise<Boolean>;
}

export interface ProductPreviousValuesSubscription
  extends Promise<AsyncIterator<ProductPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  label: () => Promise<AsyncIterator<String>>;
  price: () => Promise<AsyncIterator<Int>>;
  description: () => Promise<AsyncIterator<String>>;
  published: () => Promise<AsyncIterator<Boolean>>;
}

export interface ProductEdge {
  node: Product;
  cursor: String;
}

export interface ProductEdgePromise extends Promise<ProductEdge>, Fragmentable {
  node: <T = ProductPromise>() => T;
  cursor: () => Promise<String>;
}

export interface ProductEdgeSubscription
  extends Promise<AsyncIterator<ProductEdge>>,
    Fragmentable {
  node: <T = ProductSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

export type Long = string;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Product",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;
