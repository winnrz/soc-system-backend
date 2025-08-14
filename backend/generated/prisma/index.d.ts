
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Engineer
 * 
 */
export type Engineer = $Result.DefaultSelection<Prisma.$EngineerPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model CustomerService
 * 
 */
export type CustomerService = $Result.DefaultSelection<Prisma.$CustomerServicePayload>
/**
 * Model VPN
 * 
 */
export type VPN = $Result.DefaultSelection<Prisma.$VPNPayload>
/**
 * Model FormTemplate
 * 
 */
export type FormTemplate = $Result.DefaultSelection<Prisma.$FormTemplatePayload>
/**
 * Model SectionTemplate
 * 
 */
export type SectionTemplate = $Result.DefaultSelection<Prisma.$SectionTemplatePayload>
/**
 * Model QuestionTemplate
 * 
 */
export type QuestionTemplate = $Result.DefaultSelection<Prisma.$QuestionTemplatePayload>
/**
 * Model FormResponse
 * 
 */
export type FormResponse = $Result.DefaultSelection<Prisma.$FormResponsePayload>
/**
 * Model SectionResponse
 * 
 */
export type SectionResponse = $Result.DefaultSelection<Prisma.$SectionResponsePayload>
/**
 * Model QuestionResponse
 * 
 */
export type QuestionResponse = $Result.DefaultSelection<Prisma.$QuestionResponsePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  ENGINEER: 'ENGINEER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Customers
 * const customers = await prisma.customer.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.engineer`: Exposes CRUD operations for the **Engineer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Engineers
    * const engineers = await prisma.engineer.findMany()
    * ```
    */
  get engineer(): Prisma.EngineerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customerService`: Exposes CRUD operations for the **CustomerService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerServices
    * const customerServices = await prisma.customerService.findMany()
    * ```
    */
  get customerService(): Prisma.CustomerServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vPN`: Exposes CRUD operations for the **VPN** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VPNS
    * const vPNS = await prisma.vPN.findMany()
    * ```
    */
  get vPN(): Prisma.VPNDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formTemplate`: Exposes CRUD operations for the **FormTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormTemplates
    * const formTemplates = await prisma.formTemplate.findMany()
    * ```
    */
  get formTemplate(): Prisma.FormTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sectionTemplate`: Exposes CRUD operations for the **SectionTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SectionTemplates
    * const sectionTemplates = await prisma.sectionTemplate.findMany()
    * ```
    */
  get sectionTemplate(): Prisma.SectionTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questionTemplate`: Exposes CRUD operations for the **QuestionTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionTemplates
    * const questionTemplates = await prisma.questionTemplate.findMany()
    * ```
    */
  get questionTemplate(): Prisma.QuestionTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formResponse`: Exposes CRUD operations for the **FormResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormResponses
    * const formResponses = await prisma.formResponse.findMany()
    * ```
    */
  get formResponse(): Prisma.FormResponseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sectionResponse`: Exposes CRUD operations for the **SectionResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SectionResponses
    * const sectionResponses = await prisma.sectionResponse.findMany()
    * ```
    */
  get sectionResponse(): Prisma.SectionResponseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.questionResponse`: Exposes CRUD operations for the **QuestionResponse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionResponses
    * const questionResponses = await prisma.questionResponse.findMany()
    * ```
    */
  get questionResponse(): Prisma.QuestionResponseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Customer: 'Customer',
    Admin: 'Admin',
    Engineer: 'Engineer',
    Service: 'Service',
    CustomerService: 'CustomerService',
    VPN: 'VPN',
    FormTemplate: 'FormTemplate',
    SectionTemplate: 'SectionTemplate',
    QuestionTemplate: 'QuestionTemplate',
    FormResponse: 'FormResponse',
    SectionResponse: 'SectionResponse',
    QuestionResponse: 'QuestionResponse'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "customer" | "admin" | "engineer" | "service" | "customerService" | "vPN" | "formTemplate" | "sectionTemplate" | "questionTemplate" | "formResponse" | "sectionResponse" | "questionResponse"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Engineer: {
        payload: Prisma.$EngineerPayload<ExtArgs>
        fields: Prisma.EngineerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EngineerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EngineerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload>
          }
          findFirst: {
            args: Prisma.EngineerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EngineerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload>
          }
          findMany: {
            args: Prisma.EngineerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload>[]
          }
          create: {
            args: Prisma.EngineerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload>
          }
          createMany: {
            args: Prisma.EngineerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EngineerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload>[]
          }
          delete: {
            args: Prisma.EngineerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload>
          }
          update: {
            args: Prisma.EngineerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload>
          }
          deleteMany: {
            args: Prisma.EngineerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EngineerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EngineerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload>[]
          }
          upsert: {
            args: Prisma.EngineerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EngineerPayload>
          }
          aggregate: {
            args: Prisma.EngineerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEngineer>
          }
          groupBy: {
            args: Prisma.EngineerGroupByArgs<ExtArgs>
            result: $Utils.Optional<EngineerGroupByOutputType>[]
          }
          count: {
            args: Prisma.EngineerCountArgs<ExtArgs>
            result: $Utils.Optional<EngineerCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      CustomerService: {
        payload: Prisma.$CustomerServicePayload<ExtArgs>
        fields: Prisma.CustomerServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerServicePayload>
          }
          findFirst: {
            args: Prisma.CustomerServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerServicePayload>
          }
          findMany: {
            args: Prisma.CustomerServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerServicePayload>[]
          }
          create: {
            args: Prisma.CustomerServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerServicePayload>
          }
          createMany: {
            args: Prisma.CustomerServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerServicePayload>[]
          }
          delete: {
            args: Prisma.CustomerServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerServicePayload>
          }
          update: {
            args: Prisma.CustomerServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerServicePayload>
          }
          deleteMany: {
            args: Prisma.CustomerServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerServicePayload>[]
          }
          upsert: {
            args: Prisma.CustomerServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerServicePayload>
          }
          aggregate: {
            args: Prisma.CustomerServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerService>
          }
          groupBy: {
            args: Prisma.CustomerServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerServiceCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerServiceCountAggregateOutputType> | number
          }
        }
      }
      VPN: {
        payload: Prisma.$VPNPayload<ExtArgs>
        fields: Prisma.VPNFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VPNFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VPNPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VPNFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VPNPayload>
          }
          findFirst: {
            args: Prisma.VPNFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VPNPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VPNFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VPNPayload>
          }
          findMany: {
            args: Prisma.VPNFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VPNPayload>[]
          }
          create: {
            args: Prisma.VPNCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VPNPayload>
          }
          createMany: {
            args: Prisma.VPNCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VPNCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VPNPayload>[]
          }
          delete: {
            args: Prisma.VPNDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VPNPayload>
          }
          update: {
            args: Prisma.VPNUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VPNPayload>
          }
          deleteMany: {
            args: Prisma.VPNDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VPNUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VPNUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VPNPayload>[]
          }
          upsert: {
            args: Prisma.VPNUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VPNPayload>
          }
          aggregate: {
            args: Prisma.VPNAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVPN>
          }
          groupBy: {
            args: Prisma.VPNGroupByArgs<ExtArgs>
            result: $Utils.Optional<VPNGroupByOutputType>[]
          }
          count: {
            args: Prisma.VPNCountArgs<ExtArgs>
            result: $Utils.Optional<VPNCountAggregateOutputType> | number
          }
        }
      }
      FormTemplate: {
        payload: Prisma.$FormTemplatePayload<ExtArgs>
        fields: Prisma.FormTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTemplatePayload>
          }
          findFirst: {
            args: Prisma.FormTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTemplatePayload>
          }
          findMany: {
            args: Prisma.FormTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTemplatePayload>[]
          }
          create: {
            args: Prisma.FormTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTemplatePayload>
          }
          createMany: {
            args: Prisma.FormTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTemplatePayload>[]
          }
          delete: {
            args: Prisma.FormTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTemplatePayload>
          }
          update: {
            args: Prisma.FormTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTemplatePayload>
          }
          deleteMany: {
            args: Prisma.FormTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTemplatePayload>[]
          }
          upsert: {
            args: Prisma.FormTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTemplatePayload>
          }
          aggregate: {
            args: Prisma.FormTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormTemplate>
          }
          groupBy: {
            args: Prisma.FormTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<FormTemplateCountAggregateOutputType> | number
          }
        }
      }
      SectionTemplate: {
        payload: Prisma.$SectionTemplatePayload<ExtArgs>
        fields: Prisma.SectionTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionTemplatePayload>
          }
          findFirst: {
            args: Prisma.SectionTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionTemplatePayload>
          }
          findMany: {
            args: Prisma.SectionTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionTemplatePayload>[]
          }
          create: {
            args: Prisma.SectionTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionTemplatePayload>
          }
          createMany: {
            args: Prisma.SectionTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectionTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionTemplatePayload>[]
          }
          delete: {
            args: Prisma.SectionTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionTemplatePayload>
          }
          update: {
            args: Prisma.SectionTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionTemplatePayload>
          }
          deleteMany: {
            args: Prisma.SectionTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectionTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionTemplatePayload>[]
          }
          upsert: {
            args: Prisma.SectionTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionTemplatePayload>
          }
          aggregate: {
            args: Prisma.SectionTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSectionTemplate>
          }
          groupBy: {
            args: Prisma.SectionTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<SectionTemplateCountAggregateOutputType> | number
          }
        }
      }
      QuestionTemplate: {
        payload: Prisma.$QuestionTemplatePayload<ExtArgs>
        fields: Prisma.QuestionTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTemplatePayload>
          }
          findFirst: {
            args: Prisma.QuestionTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTemplatePayload>
          }
          findMany: {
            args: Prisma.QuestionTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTemplatePayload>[]
          }
          create: {
            args: Prisma.QuestionTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTemplatePayload>
          }
          createMany: {
            args: Prisma.QuestionTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTemplatePayload>[]
          }
          delete: {
            args: Prisma.QuestionTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTemplatePayload>
          }
          update: {
            args: Prisma.QuestionTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTemplatePayload>
          }
          deleteMany: {
            args: Prisma.QuestionTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTemplatePayload>[]
          }
          upsert: {
            args: Prisma.QuestionTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTemplatePayload>
          }
          aggregate: {
            args: Prisma.QuestionTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionTemplate>
          }
          groupBy: {
            args: Prisma.QuestionTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionTemplateCountAggregateOutputType> | number
          }
        }
      }
      FormResponse: {
        payload: Prisma.$FormResponsePayload<ExtArgs>
        fields: Prisma.FormResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload>
          }
          findFirst: {
            args: Prisma.FormResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload>
          }
          findMany: {
            args: Prisma.FormResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload>[]
          }
          create: {
            args: Prisma.FormResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload>
          }
          createMany: {
            args: Prisma.FormResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload>[]
          }
          delete: {
            args: Prisma.FormResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload>
          }
          update: {
            args: Prisma.FormResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload>
          }
          deleteMany: {
            args: Prisma.FormResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload>[]
          }
          upsert: {
            args: Prisma.FormResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormResponsePayload>
          }
          aggregate: {
            args: Prisma.FormResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormResponse>
          }
          groupBy: {
            args: Prisma.FormResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormResponseCountArgs<ExtArgs>
            result: $Utils.Optional<FormResponseCountAggregateOutputType> | number
          }
        }
      }
      SectionResponse: {
        payload: Prisma.$SectionResponsePayload<ExtArgs>
        fields: Prisma.SectionResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionResponsePayload>
          }
          findFirst: {
            args: Prisma.SectionResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionResponsePayload>
          }
          findMany: {
            args: Prisma.SectionResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionResponsePayload>[]
          }
          create: {
            args: Prisma.SectionResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionResponsePayload>
          }
          createMany: {
            args: Prisma.SectionResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectionResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionResponsePayload>[]
          }
          delete: {
            args: Prisma.SectionResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionResponsePayload>
          }
          update: {
            args: Prisma.SectionResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionResponsePayload>
          }
          deleteMany: {
            args: Prisma.SectionResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectionResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionResponsePayload>[]
          }
          upsert: {
            args: Prisma.SectionResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionResponsePayload>
          }
          aggregate: {
            args: Prisma.SectionResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSectionResponse>
          }
          groupBy: {
            args: Prisma.SectionResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionResponseCountArgs<ExtArgs>
            result: $Utils.Optional<SectionResponseCountAggregateOutputType> | number
          }
        }
      }
      QuestionResponse: {
        payload: Prisma.$QuestionResponsePayload<ExtArgs>
        fields: Prisma.QuestionResponseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionResponseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionResponseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload>
          }
          findFirst: {
            args: Prisma.QuestionResponseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionResponseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload>
          }
          findMany: {
            args: Prisma.QuestionResponseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload>[]
          }
          create: {
            args: Prisma.QuestionResponseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload>
          }
          createMany: {
            args: Prisma.QuestionResponseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionResponseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload>[]
          }
          delete: {
            args: Prisma.QuestionResponseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload>
          }
          update: {
            args: Prisma.QuestionResponseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload>
          }
          deleteMany: {
            args: Prisma.QuestionResponseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionResponseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionResponseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload>[]
          }
          upsert: {
            args: Prisma.QuestionResponseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionResponsePayload>
          }
          aggregate: {
            args: Prisma.QuestionResponseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionResponse>
          }
          groupBy: {
            args: Prisma.QuestionResponseGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionResponseGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionResponseCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionResponseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    customer?: CustomerOmit
    admin?: AdminOmit
    engineer?: EngineerOmit
    service?: ServiceOmit
    customerService?: CustomerServiceOmit
    vPN?: VPNOmit
    formTemplate?: FormTemplateOmit
    sectionTemplate?: SectionTemplateOmit
    questionTemplate?: QuestionTemplateOmit
    formResponse?: FormResponseOmit
    sectionResponse?: SectionResponseOmit
    questionResponse?: QuestionResponseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    customerServices: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customerServices?: boolean | CustomerCountOutputTypeCountCustomerServicesArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountCustomerServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerServiceWhereInput
  }


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    services: number
    vpns: number
    formTemplates: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | AdminCountOutputTypeCountServicesArgs
    vpns?: boolean | AdminCountOutputTypeCountVpnsArgs
    formTemplates?: boolean | AdminCountOutputTypeCountFormTemplatesArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountVpnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VPNWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountFormTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormTemplateWhereInput
  }


  /**
   * Count Type EngineerCountOutputType
   */

  export type EngineerCountOutputType = {
    formResponses: number
    vpns: number
  }

  export type EngineerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formResponses?: boolean | EngineerCountOutputTypeCountFormResponsesArgs
    vpns?: boolean | EngineerCountOutputTypeCountVpnsArgs
  }

  // Custom InputTypes
  /**
   * EngineerCountOutputType without action
   */
  export type EngineerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EngineerCountOutputType
     */
    select?: EngineerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EngineerCountOutputType without action
   */
  export type EngineerCountOutputTypeCountFormResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormResponseWhereInput
  }

  /**
   * EngineerCountOutputType without action
   */
  export type EngineerCountOutputTypeCountVpnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VPNWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    customerServices: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customerServices?: boolean | ServiceCountOutputTypeCountCustomerServicesArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountCustomerServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerServiceWhereInput
  }


  /**
   * Count Type CustomerServiceCountOutputType
   */

  export type CustomerServiceCountOutputType = {
    formResponses: number
  }

  export type CustomerServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formResponses?: boolean | CustomerServiceCountOutputTypeCountFormResponsesArgs
  }

  // Custom InputTypes
  /**
   * CustomerServiceCountOutputType without action
   */
  export type CustomerServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerServiceCountOutputType
     */
    select?: CustomerServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerServiceCountOutputType without action
   */
  export type CustomerServiceCountOutputTypeCountFormResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormResponseWhereInput
  }


  /**
   * Count Type FormTemplateCountOutputType
   */

  export type FormTemplateCountOutputType = {
    sections: number
    services: number
    formResponse: number
  }

  export type FormTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sections?: boolean | FormTemplateCountOutputTypeCountSectionsArgs
    services?: boolean | FormTemplateCountOutputTypeCountServicesArgs
    formResponse?: boolean | FormTemplateCountOutputTypeCountFormResponseArgs
  }

  // Custom InputTypes
  /**
   * FormTemplateCountOutputType without action
   */
  export type FormTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTemplateCountOutputType
     */
    select?: FormTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormTemplateCountOutputType without action
   */
  export type FormTemplateCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionTemplateWhereInput
  }

  /**
   * FormTemplateCountOutputType without action
   */
  export type FormTemplateCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * FormTemplateCountOutputType without action
   */
  export type FormTemplateCountOutputTypeCountFormResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormResponseWhereInput
  }


  /**
   * Count Type SectionTemplateCountOutputType
   */

  export type SectionTemplateCountOutputType = {
    questions: number
  }

  export type SectionTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | SectionTemplateCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * SectionTemplateCountOutputType without action
   */
  export type SectionTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionTemplateCountOutputType
     */
    select?: SectionTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectionTemplateCountOutputType without action
   */
  export type SectionTemplateCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionTemplateWhereInput
  }


  /**
   * Count Type FormResponseCountOutputType
   */

  export type FormResponseCountOutputType = {
    sectionResponses: number
  }

  export type FormResponseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sectionResponses?: boolean | FormResponseCountOutputTypeCountSectionResponsesArgs
  }

  // Custom InputTypes
  /**
   * FormResponseCountOutputType without action
   */
  export type FormResponseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponseCountOutputType
     */
    select?: FormResponseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormResponseCountOutputType without action
   */
  export type FormResponseCountOutputTypeCountSectionResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionResponseWhereInput
  }


  /**
   * Count Type SectionResponseCountOutputType
   */

  export type SectionResponseCountOutputType = {
    questionResponses: number
  }

  export type SectionResponseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questionResponses?: boolean | SectionResponseCountOutputTypeCountQuestionResponsesArgs
  }

  // Custom InputTypes
  /**
   * SectionResponseCountOutputType without action
   */
  export type SectionResponseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionResponseCountOutputType
     */
    select?: SectionResponseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SectionResponseCountOutputType without action
   */
  export type SectionResponseCountOutputTypeCountQuestionResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionResponseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerAvgAggregateOutputType = {
    ID: number | null
  }

  export type CustomerSumAggregateOutputType = {
    ID: number | null
  }

  export type CustomerMinAggregateOutputType = {
    ID: number | null
    name: string | null
    createdAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    ID: number | null
    name: string | null
    createdAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    ID: number
    name: number
    createdAt: number
    _all: number
  }


  export type CustomerAvgAggregateInputType = {
    ID?: true
  }

  export type CustomerSumAggregateInputType = {
    ID?: true
  }

  export type CustomerMinAggregateInputType = {
    ID?: true
    name?: true
    createdAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    ID?: true
    name?: true
    createdAt?: true
  }

  export type CustomerCountAggregateInputType = {
    ID?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _avg?: CustomerAvgAggregateInputType
    _sum?: CustomerSumAggregateInputType
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    ID: number
    name: string
    createdAt: Date
    _count: CustomerCountAggregateOutputType | null
    _avg: CustomerAvgAggregateOutputType | null
    _sum: CustomerSumAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    name?: boolean
    createdAt?: boolean
    customerServices?: boolean | Customer$customerServicesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    ID?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "name" | "createdAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customerServices?: boolean | Customer$customerServicesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      customerServices: Prisma.$CustomerServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      name: string
      createdAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const customerWithIDOnly = await prisma.customer.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `ID`
     * const customerWithIDOnly = await prisma.customer.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `ID`
     * const customerWithIDOnly = await prisma.customer.updateManyAndReturn({
     *   select: { ID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customerServices<T extends Customer$customerServicesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$customerServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly ID: FieldRef<"Customer", 'Int'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.customerServices
   */
  export type Customer$customerServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerService
     */
    select?: CustomerServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerService
     */
    omit?: CustomerServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerServiceInclude<ExtArgs> | null
    where?: CustomerServiceWhereInput
    orderBy?: CustomerServiceOrderByWithRelationInput | CustomerServiceOrderByWithRelationInput[]
    cursor?: CustomerServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerServiceScalarFieldEnum | CustomerServiceScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    ID: number | null
  }

  export type AdminSumAggregateOutputType = {
    ID: number | null
  }

  export type AdminMinAggregateOutputType = {
    ID: number | null
    role: $Enums.Role | null
    firstName: string | null
    lastName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    password: string | null
  }

  export type AdminMaxAggregateOutputType = {
    ID: number | null
    role: $Enums.Role | null
    firstName: string | null
    lastName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    password: string | null
  }

  export type AdminCountAggregateOutputType = {
    ID: number
    role: number
    firstName: number
    lastName: number
    createdAt: number
    updatedAt: number
    email: number
    password: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    ID?: true
  }

  export type AdminSumAggregateInputType = {
    ID?: true
  }

  export type AdminMinAggregateInputType = {
    ID?: true
    role?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
  }

  export type AdminMaxAggregateInputType = {
    ID?: true
    role?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
  }

  export type AdminCountAggregateInputType = {
    ID?: true
    role?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    ID: number
    role: $Enums.Role
    firstName: string
    lastName: string
    createdAt: Date
    updatedAt: Date
    email: string
    password: string
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
    services?: boolean | Admin$servicesArgs<ExtArgs>
    vpns?: boolean | Admin$vpnsArgs<ExtArgs>
    formTemplates?: boolean | Admin$formTemplatesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    ID?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "role" | "firstName" | "lastName" | "createdAt" | "updatedAt" | "email" | "password", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | Admin$servicesArgs<ExtArgs>
    vpns?: boolean | Admin$vpnsArgs<ExtArgs>
    formTemplates?: boolean | Admin$formTemplatesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      services: Prisma.$ServicePayload<ExtArgs>[]
      vpns: Prisma.$VPNPayload<ExtArgs>[]
      formTemplates: Prisma.$FormTemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      role: $Enums.Role
      firstName: string
      lastName: string
      createdAt: Date
      updatedAt: Date
      email: string
      password: string
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const adminWithIDOnly = await prisma.admin.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `ID`
     * const adminWithIDOnly = await prisma.admin.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `ID`
     * const adminWithIDOnly = await prisma.admin.updateManyAndReturn({
     *   select: { ID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends Admin$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Admin$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vpns<T extends Admin$vpnsArgs<ExtArgs> = {}>(args?: Subset<T, Admin$vpnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VPNPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    formTemplates<T extends Admin$formTemplatesArgs<ExtArgs> = {}>(args?: Subset<T, Admin$formTemplatesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly ID: FieldRef<"Admin", 'Int'>
    readonly role: FieldRef<"Admin", 'Role'>
    readonly firstName: FieldRef<"Admin", 'String'>
    readonly lastName: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.services
   */
  export type Admin$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Admin.vpns
   */
  export type Admin$vpnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VPN
     */
    select?: VPNSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VPN
     */
    omit?: VPNOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VPNInclude<ExtArgs> | null
    where?: VPNWhereInput
    orderBy?: VPNOrderByWithRelationInput | VPNOrderByWithRelationInput[]
    cursor?: VPNWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VPNScalarFieldEnum | VPNScalarFieldEnum[]
  }

  /**
   * Admin.formTemplates
   */
  export type Admin$formTemplatesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTemplate
     */
    select?: FormTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormTemplate
     */
    omit?: FormTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTemplateInclude<ExtArgs> | null
    where?: FormTemplateWhereInput
    orderBy?: FormTemplateOrderByWithRelationInput | FormTemplateOrderByWithRelationInput[]
    cursor?: FormTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormTemplateScalarFieldEnum | FormTemplateScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Engineer
   */

  export type AggregateEngineer = {
    _count: EngineerCountAggregateOutputType | null
    _avg: EngineerAvgAggregateOutputType | null
    _sum: EngineerSumAggregateOutputType | null
    _min: EngineerMinAggregateOutputType | null
    _max: EngineerMaxAggregateOutputType | null
  }

  export type EngineerAvgAggregateOutputType = {
    ID: number | null
  }

  export type EngineerSumAggregateOutputType = {
    ID: number | null
  }

  export type EngineerMinAggregateOutputType = {
    ID: number | null
    role: $Enums.Role | null
    firstName: string | null
    lastName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    password: string | null
  }

  export type EngineerMaxAggregateOutputType = {
    ID: number | null
    role: $Enums.Role | null
    firstName: string | null
    lastName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    password: string | null
  }

  export type EngineerCountAggregateOutputType = {
    ID: number
    role: number
    firstName: number
    lastName: number
    createdAt: number
    updatedAt: number
    email: number
    password: number
    _all: number
  }


  export type EngineerAvgAggregateInputType = {
    ID?: true
  }

  export type EngineerSumAggregateInputType = {
    ID?: true
  }

  export type EngineerMinAggregateInputType = {
    ID?: true
    role?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
  }

  export type EngineerMaxAggregateInputType = {
    ID?: true
    role?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
  }

  export type EngineerCountAggregateInputType = {
    ID?: true
    role?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    password?: true
    _all?: true
  }

  export type EngineerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Engineer to aggregate.
     */
    where?: EngineerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Engineers to fetch.
     */
    orderBy?: EngineerOrderByWithRelationInput | EngineerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EngineerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Engineers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Engineers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Engineers
    **/
    _count?: true | EngineerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EngineerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EngineerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EngineerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EngineerMaxAggregateInputType
  }

  export type GetEngineerAggregateType<T extends EngineerAggregateArgs> = {
        [P in keyof T & keyof AggregateEngineer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEngineer[P]>
      : GetScalarType<T[P], AggregateEngineer[P]>
  }




  export type EngineerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EngineerWhereInput
    orderBy?: EngineerOrderByWithAggregationInput | EngineerOrderByWithAggregationInput[]
    by: EngineerScalarFieldEnum[] | EngineerScalarFieldEnum
    having?: EngineerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EngineerCountAggregateInputType | true
    _avg?: EngineerAvgAggregateInputType
    _sum?: EngineerSumAggregateInputType
    _min?: EngineerMinAggregateInputType
    _max?: EngineerMaxAggregateInputType
  }

  export type EngineerGroupByOutputType = {
    ID: number
    role: $Enums.Role
    firstName: string
    lastName: string
    createdAt: Date
    updatedAt: Date
    email: string
    password: string
    _count: EngineerCountAggregateOutputType | null
    _avg: EngineerAvgAggregateOutputType | null
    _sum: EngineerSumAggregateOutputType | null
    _min: EngineerMinAggregateOutputType | null
    _max: EngineerMaxAggregateOutputType | null
  }

  type GetEngineerGroupByPayload<T extends EngineerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EngineerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EngineerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EngineerGroupByOutputType[P]>
            : GetScalarType<T[P], EngineerGroupByOutputType[P]>
        }
      >
    >


  export type EngineerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
    formResponses?: boolean | Engineer$formResponsesArgs<ExtArgs>
    vpns?: boolean | Engineer$vpnsArgs<ExtArgs>
    _count?: boolean | EngineerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["engineer"]>

  export type EngineerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["engineer"]>

  export type EngineerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
  }, ExtArgs["result"]["engineer"]>

  export type EngineerSelectScalar = {
    ID?: boolean
    role?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    password?: boolean
  }

  export type EngineerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "role" | "firstName" | "lastName" | "createdAt" | "updatedAt" | "email" | "password", ExtArgs["result"]["engineer"]>
  export type EngineerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formResponses?: boolean | Engineer$formResponsesArgs<ExtArgs>
    vpns?: boolean | Engineer$vpnsArgs<ExtArgs>
    _count?: boolean | EngineerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EngineerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EngineerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EngineerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Engineer"
    objects: {
      formResponses: Prisma.$FormResponsePayload<ExtArgs>[]
      vpns: Prisma.$VPNPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      role: $Enums.Role
      firstName: string
      lastName: string
      createdAt: Date
      updatedAt: Date
      email: string
      password: string
    }, ExtArgs["result"]["engineer"]>
    composites: {}
  }

  type EngineerGetPayload<S extends boolean | null | undefined | EngineerDefaultArgs> = $Result.GetResult<Prisma.$EngineerPayload, S>

  type EngineerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EngineerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EngineerCountAggregateInputType | true
    }

  export interface EngineerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Engineer'], meta: { name: 'Engineer' } }
    /**
     * Find zero or one Engineer that matches the filter.
     * @param {EngineerFindUniqueArgs} args - Arguments to find a Engineer
     * @example
     * // Get one Engineer
     * const engineer = await prisma.engineer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EngineerFindUniqueArgs>(args: SelectSubset<T, EngineerFindUniqueArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Engineer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EngineerFindUniqueOrThrowArgs} args - Arguments to find a Engineer
     * @example
     * // Get one Engineer
     * const engineer = await prisma.engineer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EngineerFindUniqueOrThrowArgs>(args: SelectSubset<T, EngineerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Engineer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngineerFindFirstArgs} args - Arguments to find a Engineer
     * @example
     * // Get one Engineer
     * const engineer = await prisma.engineer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EngineerFindFirstArgs>(args?: SelectSubset<T, EngineerFindFirstArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Engineer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngineerFindFirstOrThrowArgs} args - Arguments to find a Engineer
     * @example
     * // Get one Engineer
     * const engineer = await prisma.engineer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EngineerFindFirstOrThrowArgs>(args?: SelectSubset<T, EngineerFindFirstOrThrowArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Engineers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngineerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Engineers
     * const engineers = await prisma.engineer.findMany()
     * 
     * // Get first 10 Engineers
     * const engineers = await prisma.engineer.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const engineerWithIDOnly = await prisma.engineer.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends EngineerFindManyArgs>(args?: SelectSubset<T, EngineerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Engineer.
     * @param {EngineerCreateArgs} args - Arguments to create a Engineer.
     * @example
     * // Create one Engineer
     * const Engineer = await prisma.engineer.create({
     *   data: {
     *     // ... data to create a Engineer
     *   }
     * })
     * 
     */
    create<T extends EngineerCreateArgs>(args: SelectSubset<T, EngineerCreateArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Engineers.
     * @param {EngineerCreateManyArgs} args - Arguments to create many Engineers.
     * @example
     * // Create many Engineers
     * const engineer = await prisma.engineer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EngineerCreateManyArgs>(args?: SelectSubset<T, EngineerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Engineers and returns the data saved in the database.
     * @param {EngineerCreateManyAndReturnArgs} args - Arguments to create many Engineers.
     * @example
     * // Create many Engineers
     * const engineer = await prisma.engineer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Engineers and only return the `ID`
     * const engineerWithIDOnly = await prisma.engineer.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EngineerCreateManyAndReturnArgs>(args?: SelectSubset<T, EngineerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Engineer.
     * @param {EngineerDeleteArgs} args - Arguments to delete one Engineer.
     * @example
     * // Delete one Engineer
     * const Engineer = await prisma.engineer.delete({
     *   where: {
     *     // ... filter to delete one Engineer
     *   }
     * })
     * 
     */
    delete<T extends EngineerDeleteArgs>(args: SelectSubset<T, EngineerDeleteArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Engineer.
     * @param {EngineerUpdateArgs} args - Arguments to update one Engineer.
     * @example
     * // Update one Engineer
     * const engineer = await prisma.engineer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EngineerUpdateArgs>(args: SelectSubset<T, EngineerUpdateArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Engineers.
     * @param {EngineerDeleteManyArgs} args - Arguments to filter Engineers to delete.
     * @example
     * // Delete a few Engineers
     * const { count } = await prisma.engineer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EngineerDeleteManyArgs>(args?: SelectSubset<T, EngineerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Engineers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngineerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Engineers
     * const engineer = await prisma.engineer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EngineerUpdateManyArgs>(args: SelectSubset<T, EngineerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Engineers and returns the data updated in the database.
     * @param {EngineerUpdateManyAndReturnArgs} args - Arguments to update many Engineers.
     * @example
     * // Update many Engineers
     * const engineer = await prisma.engineer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Engineers and only return the `ID`
     * const engineerWithIDOnly = await prisma.engineer.updateManyAndReturn({
     *   select: { ID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EngineerUpdateManyAndReturnArgs>(args: SelectSubset<T, EngineerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Engineer.
     * @param {EngineerUpsertArgs} args - Arguments to update or create a Engineer.
     * @example
     * // Update or create a Engineer
     * const engineer = await prisma.engineer.upsert({
     *   create: {
     *     // ... data to create a Engineer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Engineer we want to update
     *   }
     * })
     */
    upsert<T extends EngineerUpsertArgs>(args: SelectSubset<T, EngineerUpsertArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Engineers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngineerCountArgs} args - Arguments to filter Engineers to count.
     * @example
     * // Count the number of Engineers
     * const count = await prisma.engineer.count({
     *   where: {
     *     // ... the filter for the Engineers we want to count
     *   }
     * })
    **/
    count<T extends EngineerCountArgs>(
      args?: Subset<T, EngineerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EngineerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Engineer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngineerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EngineerAggregateArgs>(args: Subset<T, EngineerAggregateArgs>): Prisma.PrismaPromise<GetEngineerAggregateType<T>>

    /**
     * Group by Engineer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EngineerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EngineerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EngineerGroupByArgs['orderBy'] }
        : { orderBy?: EngineerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EngineerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEngineerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Engineer model
   */
  readonly fields: EngineerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Engineer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EngineerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    formResponses<T extends Engineer$formResponsesArgs<ExtArgs> = {}>(args?: Subset<T, Engineer$formResponsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    vpns<T extends Engineer$vpnsArgs<ExtArgs> = {}>(args?: Subset<T, Engineer$vpnsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VPNPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Engineer model
   */
  interface EngineerFieldRefs {
    readonly ID: FieldRef<"Engineer", 'Int'>
    readonly role: FieldRef<"Engineer", 'Role'>
    readonly firstName: FieldRef<"Engineer", 'String'>
    readonly lastName: FieldRef<"Engineer", 'String'>
    readonly createdAt: FieldRef<"Engineer", 'DateTime'>
    readonly updatedAt: FieldRef<"Engineer", 'DateTime'>
    readonly email: FieldRef<"Engineer", 'String'>
    readonly password: FieldRef<"Engineer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Engineer findUnique
   */
  export type EngineerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
    /**
     * Filter, which Engineer to fetch.
     */
    where: EngineerWhereUniqueInput
  }

  /**
   * Engineer findUniqueOrThrow
   */
  export type EngineerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
    /**
     * Filter, which Engineer to fetch.
     */
    where: EngineerWhereUniqueInput
  }

  /**
   * Engineer findFirst
   */
  export type EngineerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
    /**
     * Filter, which Engineer to fetch.
     */
    where?: EngineerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Engineers to fetch.
     */
    orderBy?: EngineerOrderByWithRelationInput | EngineerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Engineers.
     */
    cursor?: EngineerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Engineers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Engineers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Engineers.
     */
    distinct?: EngineerScalarFieldEnum | EngineerScalarFieldEnum[]
  }

  /**
   * Engineer findFirstOrThrow
   */
  export type EngineerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
    /**
     * Filter, which Engineer to fetch.
     */
    where?: EngineerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Engineers to fetch.
     */
    orderBy?: EngineerOrderByWithRelationInput | EngineerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Engineers.
     */
    cursor?: EngineerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Engineers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Engineers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Engineers.
     */
    distinct?: EngineerScalarFieldEnum | EngineerScalarFieldEnum[]
  }

  /**
   * Engineer findMany
   */
  export type EngineerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
    /**
     * Filter, which Engineers to fetch.
     */
    where?: EngineerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Engineers to fetch.
     */
    orderBy?: EngineerOrderByWithRelationInput | EngineerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Engineers.
     */
    cursor?: EngineerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Engineers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Engineers.
     */
    skip?: number
    distinct?: EngineerScalarFieldEnum | EngineerScalarFieldEnum[]
  }

  /**
   * Engineer create
   */
  export type EngineerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
    /**
     * The data needed to create a Engineer.
     */
    data: XOR<EngineerCreateInput, EngineerUncheckedCreateInput>
  }

  /**
   * Engineer createMany
   */
  export type EngineerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Engineers.
     */
    data: EngineerCreateManyInput | EngineerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Engineer createManyAndReturn
   */
  export type EngineerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * The data used to create many Engineers.
     */
    data: EngineerCreateManyInput | EngineerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Engineer update
   */
  export type EngineerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
    /**
     * The data needed to update a Engineer.
     */
    data: XOR<EngineerUpdateInput, EngineerUncheckedUpdateInput>
    /**
     * Choose, which Engineer to update.
     */
    where: EngineerWhereUniqueInput
  }

  /**
   * Engineer updateMany
   */
  export type EngineerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Engineers.
     */
    data: XOR<EngineerUpdateManyMutationInput, EngineerUncheckedUpdateManyInput>
    /**
     * Filter which Engineers to update
     */
    where?: EngineerWhereInput
    /**
     * Limit how many Engineers to update.
     */
    limit?: number
  }

  /**
   * Engineer updateManyAndReturn
   */
  export type EngineerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * The data used to update Engineers.
     */
    data: XOR<EngineerUpdateManyMutationInput, EngineerUncheckedUpdateManyInput>
    /**
     * Filter which Engineers to update
     */
    where?: EngineerWhereInput
    /**
     * Limit how many Engineers to update.
     */
    limit?: number
  }

  /**
   * Engineer upsert
   */
  export type EngineerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
    /**
     * The filter to search for the Engineer to update in case it exists.
     */
    where: EngineerWhereUniqueInput
    /**
     * In case the Engineer found by the `where` argument doesn't exist, create a new Engineer with this data.
     */
    create: XOR<EngineerCreateInput, EngineerUncheckedCreateInput>
    /**
     * In case the Engineer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EngineerUpdateInput, EngineerUncheckedUpdateInput>
  }

  /**
   * Engineer delete
   */
  export type EngineerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
    /**
     * Filter which Engineer to delete.
     */
    where: EngineerWhereUniqueInput
  }

  /**
   * Engineer deleteMany
   */
  export type EngineerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Engineers to delete
     */
    where?: EngineerWhereInput
    /**
     * Limit how many Engineers to delete.
     */
    limit?: number
  }

  /**
   * Engineer.formResponses
   */
  export type Engineer$formResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormResponse
     */
    omit?: FormResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    where?: FormResponseWhereInput
    orderBy?: FormResponseOrderByWithRelationInput | FormResponseOrderByWithRelationInput[]
    cursor?: FormResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormResponseScalarFieldEnum | FormResponseScalarFieldEnum[]
  }

  /**
   * Engineer.vpns
   */
  export type Engineer$vpnsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VPN
     */
    select?: VPNSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VPN
     */
    omit?: VPNOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VPNInclude<ExtArgs> | null
    where?: VPNWhereInput
    orderBy?: VPNOrderByWithRelationInput | VPNOrderByWithRelationInput[]
    cursor?: VPNWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VPNScalarFieldEnum | VPNScalarFieldEnum[]
  }

  /**
   * Engineer without action
   */
  export type EngineerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Engineer
     */
    select?: EngineerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Engineer
     */
    omit?: EngineerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EngineerInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    ID: number | null
    adminID: number | null
    formTemplateID: number | null
  }

  export type ServiceSumAggregateOutputType = {
    ID: number | null
    adminID: number | null
    formTemplateID: number | null
  }

  export type ServiceMinAggregateOutputType = {
    ID: number | null
    name: string | null
    adminID: number | null
    formTemplateID: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    ID: number | null
    name: string | null
    adminID: number | null
    formTemplateID: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    ID: number
    name: number
    adminID: number
    formTemplateID: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    ID?: true
    adminID?: true
    formTemplateID?: true
  }

  export type ServiceSumAggregateInputType = {
    ID?: true
    adminID?: true
    formTemplateID?: true
  }

  export type ServiceMinAggregateInputType = {
    ID?: true
    name?: true
    adminID?: true
    formTemplateID?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    ID?: true
    name?: true
    adminID?: true
    formTemplateID?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    ID?: true
    name?: true
    adminID?: true
    formTemplateID?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    ID: number
    name: string
    adminID: number
    formTemplateID: number
    createdAt: Date
    updatedAt: Date
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    name?: boolean
    adminID?: boolean
    formTemplateID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    formTemplate?: boolean | FormTemplateDefaultArgs<ExtArgs>
    customerServices?: boolean | Service$customerServicesArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    name?: boolean
    adminID?: boolean
    formTemplateID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    formTemplate?: boolean | FormTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    name?: boolean
    adminID?: boolean
    formTemplateID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    formTemplate?: boolean | FormTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    ID?: boolean
    name?: boolean
    adminID?: boolean
    formTemplateID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "name" | "adminID" | "formTemplateID" | "createdAt" | "updatedAt", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    formTemplate?: boolean | FormTemplateDefaultArgs<ExtArgs>
    customerServices?: boolean | Service$customerServicesArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    formTemplate?: boolean | FormTemplateDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    formTemplate?: boolean | FormTemplateDefaultArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs>
      formTemplate: Prisma.$FormTemplatePayload<ExtArgs>
      customerServices: Prisma.$CustomerServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      name: string
      adminID: number
      formTemplateID: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const serviceWithIDOnly = await prisma.service.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `ID`
     * const serviceWithIDOnly = await prisma.service.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `ID`
     * const serviceWithIDOnly = await prisma.service.updateManyAndReturn({
     *   select: { ID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    formTemplate<T extends FormTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormTemplateDefaultArgs<ExtArgs>>): Prisma__FormTemplateClient<$Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customerServices<T extends Service$customerServicesArgs<ExtArgs> = {}>(args?: Subset<T, Service$customerServicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly ID: FieldRef<"Service", 'Int'>
    readonly name: FieldRef<"Service", 'String'>
    readonly adminID: FieldRef<"Service", 'Int'>
    readonly formTemplateID: FieldRef<"Service", 'Int'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.customerServices
   */
  export type Service$customerServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerService
     */
    select?: CustomerServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerService
     */
    omit?: CustomerServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerServiceInclude<ExtArgs> | null
    where?: CustomerServiceWhereInput
    orderBy?: CustomerServiceOrderByWithRelationInput | CustomerServiceOrderByWithRelationInput[]
    cursor?: CustomerServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerServiceScalarFieldEnum | CustomerServiceScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model CustomerService
   */

  export type AggregateCustomerService = {
    _count: CustomerServiceCountAggregateOutputType | null
    _avg: CustomerServiceAvgAggregateOutputType | null
    _sum: CustomerServiceSumAggregateOutputType | null
    _min: CustomerServiceMinAggregateOutputType | null
    _max: CustomerServiceMaxAggregateOutputType | null
  }

  export type CustomerServiceAvgAggregateOutputType = {
    ID: number | null
    customerID: number | null
    serviceID: number | null
  }

  export type CustomerServiceSumAggregateOutputType = {
    ID: number | null
    customerID: number | null
    serviceID: number | null
  }

  export type CustomerServiceMinAggregateOutputType = {
    ID: number | null
    customerID: number | null
    serviceID: number | null
    assignedAt: Date | null
  }

  export type CustomerServiceMaxAggregateOutputType = {
    ID: number | null
    customerID: number | null
    serviceID: number | null
    assignedAt: Date | null
  }

  export type CustomerServiceCountAggregateOutputType = {
    ID: number
    customerID: number
    serviceID: number
    assignedAt: number
    _all: number
  }


  export type CustomerServiceAvgAggregateInputType = {
    ID?: true
    customerID?: true
    serviceID?: true
  }

  export type CustomerServiceSumAggregateInputType = {
    ID?: true
    customerID?: true
    serviceID?: true
  }

  export type CustomerServiceMinAggregateInputType = {
    ID?: true
    customerID?: true
    serviceID?: true
    assignedAt?: true
  }

  export type CustomerServiceMaxAggregateInputType = {
    ID?: true
    customerID?: true
    serviceID?: true
    assignedAt?: true
  }

  export type CustomerServiceCountAggregateInputType = {
    ID?: true
    customerID?: true
    serviceID?: true
    assignedAt?: true
    _all?: true
  }

  export type CustomerServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerService to aggregate.
     */
    where?: CustomerServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerServices to fetch.
     */
    orderBy?: CustomerServiceOrderByWithRelationInput | CustomerServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerServices
    **/
    _count?: true | CustomerServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerServiceMaxAggregateInputType
  }

  export type GetCustomerServiceAggregateType<T extends CustomerServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerService[P]>
      : GetScalarType<T[P], AggregateCustomerService[P]>
  }




  export type CustomerServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerServiceWhereInput
    orderBy?: CustomerServiceOrderByWithAggregationInput | CustomerServiceOrderByWithAggregationInput[]
    by: CustomerServiceScalarFieldEnum[] | CustomerServiceScalarFieldEnum
    having?: CustomerServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerServiceCountAggregateInputType | true
    _avg?: CustomerServiceAvgAggregateInputType
    _sum?: CustomerServiceSumAggregateInputType
    _min?: CustomerServiceMinAggregateInputType
    _max?: CustomerServiceMaxAggregateInputType
  }

  export type CustomerServiceGroupByOutputType = {
    ID: number
    customerID: number
    serviceID: number
    assignedAt: Date
    _count: CustomerServiceCountAggregateOutputType | null
    _avg: CustomerServiceAvgAggregateOutputType | null
    _sum: CustomerServiceSumAggregateOutputType | null
    _min: CustomerServiceMinAggregateOutputType | null
    _max: CustomerServiceMaxAggregateOutputType | null
  }

  type GetCustomerServiceGroupByPayload<T extends CustomerServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerServiceGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerServiceGroupByOutputType[P]>
        }
      >
    >


  export type CustomerServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    customerID?: boolean
    serviceID?: boolean
    assignedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    formResponses?: boolean | CustomerService$formResponsesArgs<ExtArgs>
    _count?: boolean | CustomerServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerService"]>

  export type CustomerServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    customerID?: boolean
    serviceID?: boolean
    assignedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerService"]>

  export type CustomerServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    customerID?: boolean
    serviceID?: boolean
    assignedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerService"]>

  export type CustomerServiceSelectScalar = {
    ID?: boolean
    customerID?: boolean
    serviceID?: boolean
    assignedAt?: boolean
  }

  export type CustomerServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "customerID" | "serviceID" | "assignedAt", ExtArgs["result"]["customerService"]>
  export type CustomerServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    formResponses?: boolean | CustomerService$formResponsesArgs<ExtArgs>
    _count?: boolean | CustomerServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }
  export type CustomerServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    service?: boolean | ServiceDefaultArgs<ExtArgs>
  }

  export type $CustomerServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerService"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      service: Prisma.$ServicePayload<ExtArgs>
      formResponses: Prisma.$FormResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      customerID: number
      serviceID: number
      assignedAt: Date
    }, ExtArgs["result"]["customerService"]>
    composites: {}
  }

  type CustomerServiceGetPayload<S extends boolean | null | undefined | CustomerServiceDefaultArgs> = $Result.GetResult<Prisma.$CustomerServicePayload, S>

  type CustomerServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerServiceCountAggregateInputType | true
    }

  export interface CustomerServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerService'], meta: { name: 'CustomerService' } }
    /**
     * Find zero or one CustomerService that matches the filter.
     * @param {CustomerServiceFindUniqueArgs} args - Arguments to find a CustomerService
     * @example
     * // Get one CustomerService
     * const customerService = await prisma.customerService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerServiceFindUniqueArgs>(args: SelectSubset<T, CustomerServiceFindUniqueArgs<ExtArgs>>): Prisma__CustomerServiceClient<$Result.GetResult<Prisma.$CustomerServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomerService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerServiceFindUniqueOrThrowArgs} args - Arguments to find a CustomerService
     * @example
     * // Get one CustomerService
     * const customerService = await prisma.customerService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerServiceClient<$Result.GetResult<Prisma.$CustomerServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerServiceFindFirstArgs} args - Arguments to find a CustomerService
     * @example
     * // Get one CustomerService
     * const customerService = await prisma.customerService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerServiceFindFirstArgs>(args?: SelectSubset<T, CustomerServiceFindFirstArgs<ExtArgs>>): Prisma__CustomerServiceClient<$Result.GetResult<Prisma.$CustomerServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerServiceFindFirstOrThrowArgs} args - Arguments to find a CustomerService
     * @example
     * // Get one CustomerService
     * const customerService = await prisma.customerService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerServiceClient<$Result.GetResult<Prisma.$CustomerServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomerServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerServices
     * const customerServices = await prisma.customerService.findMany()
     * 
     * // Get first 10 CustomerServices
     * const customerServices = await prisma.customerService.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const customerServiceWithIDOnly = await prisma.customerService.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends CustomerServiceFindManyArgs>(args?: SelectSubset<T, CustomerServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomerService.
     * @param {CustomerServiceCreateArgs} args - Arguments to create a CustomerService.
     * @example
     * // Create one CustomerService
     * const CustomerService = await prisma.customerService.create({
     *   data: {
     *     // ... data to create a CustomerService
     *   }
     * })
     * 
     */
    create<T extends CustomerServiceCreateArgs>(args: SelectSubset<T, CustomerServiceCreateArgs<ExtArgs>>): Prisma__CustomerServiceClient<$Result.GetResult<Prisma.$CustomerServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomerServices.
     * @param {CustomerServiceCreateManyArgs} args - Arguments to create many CustomerServices.
     * @example
     * // Create many CustomerServices
     * const customerService = await prisma.customerService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerServiceCreateManyArgs>(args?: SelectSubset<T, CustomerServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomerServices and returns the data saved in the database.
     * @param {CustomerServiceCreateManyAndReturnArgs} args - Arguments to create many CustomerServices.
     * @example
     * // Create many CustomerServices
     * const customerService = await prisma.customerService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomerServices and only return the `ID`
     * const customerServiceWithIDOnly = await prisma.customerService.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomerService.
     * @param {CustomerServiceDeleteArgs} args - Arguments to delete one CustomerService.
     * @example
     * // Delete one CustomerService
     * const CustomerService = await prisma.customerService.delete({
     *   where: {
     *     // ... filter to delete one CustomerService
     *   }
     * })
     * 
     */
    delete<T extends CustomerServiceDeleteArgs>(args: SelectSubset<T, CustomerServiceDeleteArgs<ExtArgs>>): Prisma__CustomerServiceClient<$Result.GetResult<Prisma.$CustomerServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomerService.
     * @param {CustomerServiceUpdateArgs} args - Arguments to update one CustomerService.
     * @example
     * // Update one CustomerService
     * const customerService = await prisma.customerService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerServiceUpdateArgs>(args: SelectSubset<T, CustomerServiceUpdateArgs<ExtArgs>>): Prisma__CustomerServiceClient<$Result.GetResult<Prisma.$CustomerServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomerServices.
     * @param {CustomerServiceDeleteManyArgs} args - Arguments to filter CustomerServices to delete.
     * @example
     * // Delete a few CustomerServices
     * const { count } = await prisma.customerService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerServiceDeleteManyArgs>(args?: SelectSubset<T, CustomerServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerServices
     * const customerService = await prisma.customerService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerServiceUpdateManyArgs>(args: SelectSubset<T, CustomerServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerServices and returns the data updated in the database.
     * @param {CustomerServiceUpdateManyAndReturnArgs} args - Arguments to update many CustomerServices.
     * @example
     * // Update many CustomerServices
     * const customerService = await prisma.customerService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomerServices and only return the `ID`
     * const customerServiceWithIDOnly = await prisma.customerService.updateManyAndReturn({
     *   select: { ID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CustomerServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomerService.
     * @param {CustomerServiceUpsertArgs} args - Arguments to update or create a CustomerService.
     * @example
     * // Update or create a CustomerService
     * const customerService = await prisma.customerService.upsert({
     *   create: {
     *     // ... data to create a CustomerService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerService we want to update
     *   }
     * })
     */
    upsert<T extends CustomerServiceUpsertArgs>(args: SelectSubset<T, CustomerServiceUpsertArgs<ExtArgs>>): Prisma__CustomerServiceClient<$Result.GetResult<Prisma.$CustomerServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomerServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerServiceCountArgs} args - Arguments to filter CustomerServices to count.
     * @example
     * // Count the number of CustomerServices
     * const count = await prisma.customerService.count({
     *   where: {
     *     // ... the filter for the CustomerServices we want to count
     *   }
     * })
    **/
    count<T extends CustomerServiceCountArgs>(
      args?: Subset<T, CustomerServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerServiceAggregateArgs>(args: Subset<T, CustomerServiceAggregateArgs>): Prisma.PrismaPromise<GetCustomerServiceAggregateType<T>>

    /**
     * Group by CustomerService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerServiceGroupByArgs['orderBy'] }
        : { orderBy?: CustomerServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerService model
   */
  readonly fields: CustomerServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    formResponses<T extends CustomerService$formResponsesArgs<ExtArgs> = {}>(args?: Subset<T, CustomerService$formResponsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CustomerService model
   */
  interface CustomerServiceFieldRefs {
    readonly ID: FieldRef<"CustomerService", 'Int'>
    readonly customerID: FieldRef<"CustomerService", 'Int'>
    readonly serviceID: FieldRef<"CustomerService", 'Int'>
    readonly assignedAt: FieldRef<"CustomerService", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomerService findUnique
   */
  export type CustomerServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerService
     */
    select?: CustomerServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerService
     */
    omit?: CustomerServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerServiceInclude<ExtArgs> | null
    /**
     * Filter, which CustomerService to fetch.
     */
    where: CustomerServiceWhereUniqueInput
  }

  /**
   * CustomerService findUniqueOrThrow
   */
  export type CustomerServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerService
     */
    select?: CustomerServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerService
     */
    omit?: CustomerServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerServiceInclude<ExtArgs> | null
    /**
     * Filter, which CustomerService to fetch.
     */
    where: CustomerServiceWhereUniqueInput
  }

  /**
   * CustomerService findFirst
   */
  export type CustomerServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerService
     */
    select?: CustomerServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerService
     */
    omit?: CustomerServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerServiceInclude<ExtArgs> | null
    /**
     * Filter, which CustomerService to fetch.
     */
    where?: CustomerServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerServices to fetch.
     */
    orderBy?: CustomerServiceOrderByWithRelationInput | CustomerServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerServices.
     */
    cursor?: CustomerServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerServices.
     */
    distinct?: CustomerServiceScalarFieldEnum | CustomerServiceScalarFieldEnum[]
  }

  /**
   * CustomerService findFirstOrThrow
   */
  export type CustomerServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerService
     */
    select?: CustomerServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerService
     */
    omit?: CustomerServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerServiceInclude<ExtArgs> | null
    /**
     * Filter, which CustomerService to fetch.
     */
    where?: CustomerServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerServices to fetch.
     */
    orderBy?: CustomerServiceOrderByWithRelationInput | CustomerServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerServices.
     */
    cursor?: CustomerServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerServices.
     */
    distinct?: CustomerServiceScalarFieldEnum | CustomerServiceScalarFieldEnum[]
  }

  /**
   * CustomerService findMany
   */
  export type CustomerServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerService
     */
    select?: CustomerServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerService
     */
    omit?: CustomerServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerServiceInclude<ExtArgs> | null
    /**
     * Filter, which CustomerServices to fetch.
     */
    where?: CustomerServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerServices to fetch.
     */
    orderBy?: CustomerServiceOrderByWithRelationInput | CustomerServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerServices.
     */
    cursor?: CustomerServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerServices.
     */
    skip?: number
    distinct?: CustomerServiceScalarFieldEnum | CustomerServiceScalarFieldEnum[]
  }

  /**
   * CustomerService create
   */
  export type CustomerServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerService
     */
    select?: CustomerServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerService
     */
    omit?: CustomerServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerService.
     */
    data: XOR<CustomerServiceCreateInput, CustomerServiceUncheckedCreateInput>
  }

  /**
   * CustomerService createMany
   */
  export type CustomerServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerServices.
     */
    data: CustomerServiceCreateManyInput | CustomerServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerService createManyAndReturn
   */
  export type CustomerServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerService
     */
    select?: CustomerServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerService
     */
    omit?: CustomerServiceOmit<ExtArgs> | null
    /**
     * The data used to create many CustomerServices.
     */
    data: CustomerServiceCreateManyInput | CustomerServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerService update
   */
  export type CustomerServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerService
     */
    select?: CustomerServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerService
     */
    omit?: CustomerServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerService.
     */
    data: XOR<CustomerServiceUpdateInput, CustomerServiceUncheckedUpdateInput>
    /**
     * Choose, which CustomerService to update.
     */
    where: CustomerServiceWhereUniqueInput
  }

  /**
   * CustomerService updateMany
   */
  export type CustomerServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerServices.
     */
    data: XOR<CustomerServiceUpdateManyMutationInput, CustomerServiceUncheckedUpdateManyInput>
    /**
     * Filter which CustomerServices to update
     */
    where?: CustomerServiceWhereInput
    /**
     * Limit how many CustomerServices to update.
     */
    limit?: number
  }

  /**
   * CustomerService updateManyAndReturn
   */
  export type CustomerServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerService
     */
    select?: CustomerServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerService
     */
    omit?: CustomerServiceOmit<ExtArgs> | null
    /**
     * The data used to update CustomerServices.
     */
    data: XOR<CustomerServiceUpdateManyMutationInput, CustomerServiceUncheckedUpdateManyInput>
    /**
     * Filter which CustomerServices to update
     */
    where?: CustomerServiceWhereInput
    /**
     * Limit how many CustomerServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerService upsert
   */
  export type CustomerServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerService
     */
    select?: CustomerServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerService
     */
    omit?: CustomerServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerService to update in case it exists.
     */
    where: CustomerServiceWhereUniqueInput
    /**
     * In case the CustomerService found by the `where` argument doesn't exist, create a new CustomerService with this data.
     */
    create: XOR<CustomerServiceCreateInput, CustomerServiceUncheckedCreateInput>
    /**
     * In case the CustomerService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerServiceUpdateInput, CustomerServiceUncheckedUpdateInput>
  }

  /**
   * CustomerService delete
   */
  export type CustomerServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerService
     */
    select?: CustomerServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerService
     */
    omit?: CustomerServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerServiceInclude<ExtArgs> | null
    /**
     * Filter which CustomerService to delete.
     */
    where: CustomerServiceWhereUniqueInput
  }

  /**
   * CustomerService deleteMany
   */
  export type CustomerServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerServices to delete
     */
    where?: CustomerServiceWhereInput
    /**
     * Limit how many CustomerServices to delete.
     */
    limit?: number
  }

  /**
   * CustomerService.formResponses
   */
  export type CustomerService$formResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormResponse
     */
    omit?: FormResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    where?: FormResponseWhereInput
    orderBy?: FormResponseOrderByWithRelationInput | FormResponseOrderByWithRelationInput[]
    cursor?: FormResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormResponseScalarFieldEnum | FormResponseScalarFieldEnum[]
  }

  /**
   * CustomerService without action
   */
  export type CustomerServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerService
     */
    select?: CustomerServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerService
     */
    omit?: CustomerServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerServiceInclude<ExtArgs> | null
  }


  /**
   * Model VPN
   */

  export type AggregateVPN = {
    _count: VPNCountAggregateOutputType | null
    _avg: VPNAvgAggregateOutputType | null
    _sum: VPNSumAggregateOutputType | null
    _min: VPNMinAggregateOutputType | null
    _max: VPNMaxAggregateOutputType | null
  }

  export type VPNAvgAggregateOutputType = {
    ID: number | null
    adminID: number | null
    engineerID: number | null
  }

  export type VPNSumAggregateOutputType = {
    ID: number | null
    adminID: number | null
    engineerID: number | null
  }

  export type VPNMinAggregateOutputType = {
    ID: number | null
    name: string | null
    peerIP: string | null
    status: string | null
    adminID: number | null
    engineerID: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VPNMaxAggregateOutputType = {
    ID: number | null
    name: string | null
    peerIP: string | null
    status: string | null
    adminID: number | null
    engineerID: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VPNCountAggregateOutputType = {
    ID: number
    name: number
    peerIP: number
    status: number
    adminID: number
    engineerID: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VPNAvgAggregateInputType = {
    ID?: true
    adminID?: true
    engineerID?: true
  }

  export type VPNSumAggregateInputType = {
    ID?: true
    adminID?: true
    engineerID?: true
  }

  export type VPNMinAggregateInputType = {
    ID?: true
    name?: true
    peerIP?: true
    status?: true
    adminID?: true
    engineerID?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VPNMaxAggregateInputType = {
    ID?: true
    name?: true
    peerIP?: true
    status?: true
    adminID?: true
    engineerID?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VPNCountAggregateInputType = {
    ID?: true
    name?: true
    peerIP?: true
    status?: true
    adminID?: true
    engineerID?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VPNAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VPN to aggregate.
     */
    where?: VPNWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VPNS to fetch.
     */
    orderBy?: VPNOrderByWithRelationInput | VPNOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VPNWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VPNS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VPNS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VPNS
    **/
    _count?: true | VPNCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VPNAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VPNSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VPNMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VPNMaxAggregateInputType
  }

  export type GetVPNAggregateType<T extends VPNAggregateArgs> = {
        [P in keyof T & keyof AggregateVPN]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVPN[P]>
      : GetScalarType<T[P], AggregateVPN[P]>
  }




  export type VPNGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VPNWhereInput
    orderBy?: VPNOrderByWithAggregationInput | VPNOrderByWithAggregationInput[]
    by: VPNScalarFieldEnum[] | VPNScalarFieldEnum
    having?: VPNScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VPNCountAggregateInputType | true
    _avg?: VPNAvgAggregateInputType
    _sum?: VPNSumAggregateInputType
    _min?: VPNMinAggregateInputType
    _max?: VPNMaxAggregateInputType
  }

  export type VPNGroupByOutputType = {
    ID: number
    name: string
    peerIP: string
    status: string
    adminID: number
    engineerID: number
    createdAt: Date
    updatedAt: Date
    _count: VPNCountAggregateOutputType | null
    _avg: VPNAvgAggregateOutputType | null
    _sum: VPNSumAggregateOutputType | null
    _min: VPNMinAggregateOutputType | null
    _max: VPNMaxAggregateOutputType | null
  }

  type GetVPNGroupByPayload<T extends VPNGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VPNGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VPNGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VPNGroupByOutputType[P]>
            : GetScalarType<T[P], VPNGroupByOutputType[P]>
        }
      >
    >


  export type VPNSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    name?: boolean
    peerIP?: boolean
    status?: boolean
    adminID?: boolean
    engineerID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vPN"]>

  export type VPNSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    name?: boolean
    peerIP?: boolean
    status?: boolean
    adminID?: boolean
    engineerID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vPN"]>

  export type VPNSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    name?: boolean
    peerIP?: boolean
    status?: boolean
    adminID?: boolean
    engineerID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vPN"]>

  export type VPNSelectScalar = {
    ID?: boolean
    name?: boolean
    peerIP?: boolean
    status?: boolean
    adminID?: boolean
    engineerID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VPNOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "name" | "peerIP" | "status" | "adminID" | "engineerID" | "createdAt" | "updatedAt", ExtArgs["result"]["vPN"]>
  export type VPNInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
  }
  export type VPNIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
  }
  export type VPNIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
  }

  export type $VPNPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VPN"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs>
      engineer: Prisma.$EngineerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      name: string
      peerIP: string
      status: string
      adminID: number
      engineerID: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["vPN"]>
    composites: {}
  }

  type VPNGetPayload<S extends boolean | null | undefined | VPNDefaultArgs> = $Result.GetResult<Prisma.$VPNPayload, S>

  type VPNCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VPNFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VPNCountAggregateInputType | true
    }

  export interface VPNDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VPN'], meta: { name: 'VPN' } }
    /**
     * Find zero or one VPN that matches the filter.
     * @param {VPNFindUniqueArgs} args - Arguments to find a VPN
     * @example
     * // Get one VPN
     * const vPN = await prisma.vPN.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VPNFindUniqueArgs>(args: SelectSubset<T, VPNFindUniqueArgs<ExtArgs>>): Prisma__VPNClient<$Result.GetResult<Prisma.$VPNPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VPN that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VPNFindUniqueOrThrowArgs} args - Arguments to find a VPN
     * @example
     * // Get one VPN
     * const vPN = await prisma.vPN.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VPNFindUniqueOrThrowArgs>(args: SelectSubset<T, VPNFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VPNClient<$Result.GetResult<Prisma.$VPNPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VPN that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VPNFindFirstArgs} args - Arguments to find a VPN
     * @example
     * // Get one VPN
     * const vPN = await prisma.vPN.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VPNFindFirstArgs>(args?: SelectSubset<T, VPNFindFirstArgs<ExtArgs>>): Prisma__VPNClient<$Result.GetResult<Prisma.$VPNPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VPN that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VPNFindFirstOrThrowArgs} args - Arguments to find a VPN
     * @example
     * // Get one VPN
     * const vPN = await prisma.vPN.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VPNFindFirstOrThrowArgs>(args?: SelectSubset<T, VPNFindFirstOrThrowArgs<ExtArgs>>): Prisma__VPNClient<$Result.GetResult<Prisma.$VPNPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VPNS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VPNFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VPNS
     * const vPNS = await prisma.vPN.findMany()
     * 
     * // Get first 10 VPNS
     * const vPNS = await prisma.vPN.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const vPNWithIDOnly = await prisma.vPN.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends VPNFindManyArgs>(args?: SelectSubset<T, VPNFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VPNPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VPN.
     * @param {VPNCreateArgs} args - Arguments to create a VPN.
     * @example
     * // Create one VPN
     * const VPN = await prisma.vPN.create({
     *   data: {
     *     // ... data to create a VPN
     *   }
     * })
     * 
     */
    create<T extends VPNCreateArgs>(args: SelectSubset<T, VPNCreateArgs<ExtArgs>>): Prisma__VPNClient<$Result.GetResult<Prisma.$VPNPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VPNS.
     * @param {VPNCreateManyArgs} args - Arguments to create many VPNS.
     * @example
     * // Create many VPNS
     * const vPN = await prisma.vPN.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VPNCreateManyArgs>(args?: SelectSubset<T, VPNCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VPNS and returns the data saved in the database.
     * @param {VPNCreateManyAndReturnArgs} args - Arguments to create many VPNS.
     * @example
     * // Create many VPNS
     * const vPN = await prisma.vPN.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VPNS and only return the `ID`
     * const vPNWithIDOnly = await prisma.vPN.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VPNCreateManyAndReturnArgs>(args?: SelectSubset<T, VPNCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VPNPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VPN.
     * @param {VPNDeleteArgs} args - Arguments to delete one VPN.
     * @example
     * // Delete one VPN
     * const VPN = await prisma.vPN.delete({
     *   where: {
     *     // ... filter to delete one VPN
     *   }
     * })
     * 
     */
    delete<T extends VPNDeleteArgs>(args: SelectSubset<T, VPNDeleteArgs<ExtArgs>>): Prisma__VPNClient<$Result.GetResult<Prisma.$VPNPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VPN.
     * @param {VPNUpdateArgs} args - Arguments to update one VPN.
     * @example
     * // Update one VPN
     * const vPN = await prisma.vPN.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VPNUpdateArgs>(args: SelectSubset<T, VPNUpdateArgs<ExtArgs>>): Prisma__VPNClient<$Result.GetResult<Prisma.$VPNPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VPNS.
     * @param {VPNDeleteManyArgs} args - Arguments to filter VPNS to delete.
     * @example
     * // Delete a few VPNS
     * const { count } = await prisma.vPN.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VPNDeleteManyArgs>(args?: SelectSubset<T, VPNDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VPNS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VPNUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VPNS
     * const vPN = await prisma.vPN.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VPNUpdateManyArgs>(args: SelectSubset<T, VPNUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VPNS and returns the data updated in the database.
     * @param {VPNUpdateManyAndReturnArgs} args - Arguments to update many VPNS.
     * @example
     * // Update many VPNS
     * const vPN = await prisma.vPN.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VPNS and only return the `ID`
     * const vPNWithIDOnly = await prisma.vPN.updateManyAndReturn({
     *   select: { ID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VPNUpdateManyAndReturnArgs>(args: SelectSubset<T, VPNUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VPNPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VPN.
     * @param {VPNUpsertArgs} args - Arguments to update or create a VPN.
     * @example
     * // Update or create a VPN
     * const vPN = await prisma.vPN.upsert({
     *   create: {
     *     // ... data to create a VPN
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VPN we want to update
     *   }
     * })
     */
    upsert<T extends VPNUpsertArgs>(args: SelectSubset<T, VPNUpsertArgs<ExtArgs>>): Prisma__VPNClient<$Result.GetResult<Prisma.$VPNPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VPNS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VPNCountArgs} args - Arguments to filter VPNS to count.
     * @example
     * // Count the number of VPNS
     * const count = await prisma.vPN.count({
     *   where: {
     *     // ... the filter for the VPNS we want to count
     *   }
     * })
    **/
    count<T extends VPNCountArgs>(
      args?: Subset<T, VPNCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VPNCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VPN.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VPNAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VPNAggregateArgs>(args: Subset<T, VPNAggregateArgs>): Prisma.PrismaPromise<GetVPNAggregateType<T>>

    /**
     * Group by VPN.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VPNGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VPNGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VPNGroupByArgs['orderBy'] }
        : { orderBy?: VPNGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VPNGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVPNGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VPN model
   */
  readonly fields: VPNFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VPN.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VPNClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    engineer<T extends EngineerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EngineerDefaultArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VPN model
   */
  interface VPNFieldRefs {
    readonly ID: FieldRef<"VPN", 'Int'>
    readonly name: FieldRef<"VPN", 'String'>
    readonly peerIP: FieldRef<"VPN", 'String'>
    readonly status: FieldRef<"VPN", 'String'>
    readonly adminID: FieldRef<"VPN", 'Int'>
    readonly engineerID: FieldRef<"VPN", 'Int'>
    readonly createdAt: FieldRef<"VPN", 'DateTime'>
    readonly updatedAt: FieldRef<"VPN", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VPN findUnique
   */
  export type VPNFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VPN
     */
    select?: VPNSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VPN
     */
    omit?: VPNOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VPNInclude<ExtArgs> | null
    /**
     * Filter, which VPN to fetch.
     */
    where: VPNWhereUniqueInput
  }

  /**
   * VPN findUniqueOrThrow
   */
  export type VPNFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VPN
     */
    select?: VPNSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VPN
     */
    omit?: VPNOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VPNInclude<ExtArgs> | null
    /**
     * Filter, which VPN to fetch.
     */
    where: VPNWhereUniqueInput
  }

  /**
   * VPN findFirst
   */
  export type VPNFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VPN
     */
    select?: VPNSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VPN
     */
    omit?: VPNOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VPNInclude<ExtArgs> | null
    /**
     * Filter, which VPN to fetch.
     */
    where?: VPNWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VPNS to fetch.
     */
    orderBy?: VPNOrderByWithRelationInput | VPNOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VPNS.
     */
    cursor?: VPNWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VPNS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VPNS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VPNS.
     */
    distinct?: VPNScalarFieldEnum | VPNScalarFieldEnum[]
  }

  /**
   * VPN findFirstOrThrow
   */
  export type VPNFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VPN
     */
    select?: VPNSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VPN
     */
    omit?: VPNOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VPNInclude<ExtArgs> | null
    /**
     * Filter, which VPN to fetch.
     */
    where?: VPNWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VPNS to fetch.
     */
    orderBy?: VPNOrderByWithRelationInput | VPNOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VPNS.
     */
    cursor?: VPNWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VPNS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VPNS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VPNS.
     */
    distinct?: VPNScalarFieldEnum | VPNScalarFieldEnum[]
  }

  /**
   * VPN findMany
   */
  export type VPNFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VPN
     */
    select?: VPNSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VPN
     */
    omit?: VPNOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VPNInclude<ExtArgs> | null
    /**
     * Filter, which VPNS to fetch.
     */
    where?: VPNWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VPNS to fetch.
     */
    orderBy?: VPNOrderByWithRelationInput | VPNOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VPNS.
     */
    cursor?: VPNWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VPNS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VPNS.
     */
    skip?: number
    distinct?: VPNScalarFieldEnum | VPNScalarFieldEnum[]
  }

  /**
   * VPN create
   */
  export type VPNCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VPN
     */
    select?: VPNSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VPN
     */
    omit?: VPNOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VPNInclude<ExtArgs> | null
    /**
     * The data needed to create a VPN.
     */
    data: XOR<VPNCreateInput, VPNUncheckedCreateInput>
  }

  /**
   * VPN createMany
   */
  export type VPNCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VPNS.
     */
    data: VPNCreateManyInput | VPNCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VPN createManyAndReturn
   */
  export type VPNCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VPN
     */
    select?: VPNSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VPN
     */
    omit?: VPNOmit<ExtArgs> | null
    /**
     * The data used to create many VPNS.
     */
    data: VPNCreateManyInput | VPNCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VPNIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VPN update
   */
  export type VPNUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VPN
     */
    select?: VPNSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VPN
     */
    omit?: VPNOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VPNInclude<ExtArgs> | null
    /**
     * The data needed to update a VPN.
     */
    data: XOR<VPNUpdateInput, VPNUncheckedUpdateInput>
    /**
     * Choose, which VPN to update.
     */
    where: VPNWhereUniqueInput
  }

  /**
   * VPN updateMany
   */
  export type VPNUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VPNS.
     */
    data: XOR<VPNUpdateManyMutationInput, VPNUncheckedUpdateManyInput>
    /**
     * Filter which VPNS to update
     */
    where?: VPNWhereInput
    /**
     * Limit how many VPNS to update.
     */
    limit?: number
  }

  /**
   * VPN updateManyAndReturn
   */
  export type VPNUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VPN
     */
    select?: VPNSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VPN
     */
    omit?: VPNOmit<ExtArgs> | null
    /**
     * The data used to update VPNS.
     */
    data: XOR<VPNUpdateManyMutationInput, VPNUncheckedUpdateManyInput>
    /**
     * Filter which VPNS to update
     */
    where?: VPNWhereInput
    /**
     * Limit how many VPNS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VPNIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VPN upsert
   */
  export type VPNUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VPN
     */
    select?: VPNSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VPN
     */
    omit?: VPNOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VPNInclude<ExtArgs> | null
    /**
     * The filter to search for the VPN to update in case it exists.
     */
    where: VPNWhereUniqueInput
    /**
     * In case the VPN found by the `where` argument doesn't exist, create a new VPN with this data.
     */
    create: XOR<VPNCreateInput, VPNUncheckedCreateInput>
    /**
     * In case the VPN was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VPNUpdateInput, VPNUncheckedUpdateInput>
  }

  /**
   * VPN delete
   */
  export type VPNDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VPN
     */
    select?: VPNSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VPN
     */
    omit?: VPNOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VPNInclude<ExtArgs> | null
    /**
     * Filter which VPN to delete.
     */
    where: VPNWhereUniqueInput
  }

  /**
   * VPN deleteMany
   */
  export type VPNDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VPNS to delete
     */
    where?: VPNWhereInput
    /**
     * Limit how many VPNS to delete.
     */
    limit?: number
  }

  /**
   * VPN without action
   */
  export type VPNDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VPN
     */
    select?: VPNSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VPN
     */
    omit?: VPNOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VPNInclude<ExtArgs> | null
  }


  /**
   * Model FormTemplate
   */

  export type AggregateFormTemplate = {
    _count: FormTemplateCountAggregateOutputType | null
    _avg: FormTemplateAvgAggregateOutputType | null
    _sum: FormTemplateSumAggregateOutputType | null
    _min: FormTemplateMinAggregateOutputType | null
    _max: FormTemplateMaxAggregateOutputType | null
  }

  export type FormTemplateAvgAggregateOutputType = {
    ID: number | null
    createdByID: number | null
  }

  export type FormTemplateSumAggregateOutputType = {
    ID: number | null
    createdByID: number | null
  }

  export type FormTemplateMinAggregateOutputType = {
    ID: number | null
    name: string | null
    createdByID: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormTemplateMaxAggregateOutputType = {
    ID: number | null
    name: string | null
    createdByID: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormTemplateCountAggregateOutputType = {
    ID: number
    name: number
    createdByID: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FormTemplateAvgAggregateInputType = {
    ID?: true
    createdByID?: true
  }

  export type FormTemplateSumAggregateInputType = {
    ID?: true
    createdByID?: true
  }

  export type FormTemplateMinAggregateInputType = {
    ID?: true
    name?: true
    createdByID?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormTemplateMaxAggregateInputType = {
    ID?: true
    name?: true
    createdByID?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormTemplateCountAggregateInputType = {
    ID?: true
    name?: true
    createdByID?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FormTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormTemplate to aggregate.
     */
    where?: FormTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormTemplates to fetch.
     */
    orderBy?: FormTemplateOrderByWithRelationInput | FormTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormTemplates
    **/
    _count?: true | FormTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormTemplateMaxAggregateInputType
  }

  export type GetFormTemplateAggregateType<T extends FormTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateFormTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormTemplate[P]>
      : GetScalarType<T[P], AggregateFormTemplate[P]>
  }




  export type FormTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormTemplateWhereInput
    orderBy?: FormTemplateOrderByWithAggregationInput | FormTemplateOrderByWithAggregationInput[]
    by: FormTemplateScalarFieldEnum[] | FormTemplateScalarFieldEnum
    having?: FormTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormTemplateCountAggregateInputType | true
    _avg?: FormTemplateAvgAggregateInputType
    _sum?: FormTemplateSumAggregateInputType
    _min?: FormTemplateMinAggregateInputType
    _max?: FormTemplateMaxAggregateInputType
  }

  export type FormTemplateGroupByOutputType = {
    ID: number
    name: string
    createdByID: number
    createdAt: Date
    updatedAt: Date
    _count: FormTemplateCountAggregateOutputType | null
    _avg: FormTemplateAvgAggregateOutputType | null
    _sum: FormTemplateSumAggregateOutputType | null
    _min: FormTemplateMinAggregateOutputType | null
    _max: FormTemplateMaxAggregateOutputType | null
  }

  type GetFormTemplateGroupByPayload<T extends FormTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], FormTemplateGroupByOutputType[P]>
        }
      >
    >


  export type FormTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    name?: boolean
    createdByID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | AdminDefaultArgs<ExtArgs>
    sections?: boolean | FormTemplate$sectionsArgs<ExtArgs>
    services?: boolean | FormTemplate$servicesArgs<ExtArgs>
    formResponse?: boolean | FormTemplate$formResponseArgs<ExtArgs>
    _count?: boolean | FormTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formTemplate"]>

  export type FormTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    name?: boolean
    createdByID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formTemplate"]>

  export type FormTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    name?: boolean
    createdByID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdBy?: boolean | AdminDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formTemplate"]>

  export type FormTemplateSelectScalar = {
    ID?: boolean
    name?: boolean
    createdByID?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FormTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "name" | "createdByID" | "createdAt" | "updatedAt", ExtArgs["result"]["formTemplate"]>
  export type FormTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | AdminDefaultArgs<ExtArgs>
    sections?: boolean | FormTemplate$sectionsArgs<ExtArgs>
    services?: boolean | FormTemplate$servicesArgs<ExtArgs>
    formResponse?: boolean | FormTemplate$formResponseArgs<ExtArgs>
    _count?: boolean | FormTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | AdminDefaultArgs<ExtArgs>
  }
  export type FormTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | AdminDefaultArgs<ExtArgs>
  }

  export type $FormTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormTemplate"
    objects: {
      createdBy: Prisma.$AdminPayload<ExtArgs>
      sections: Prisma.$SectionTemplatePayload<ExtArgs>[]
      services: Prisma.$ServicePayload<ExtArgs>[]
      formResponse: Prisma.$FormResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      name: string
      createdByID: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["formTemplate"]>
    composites: {}
  }

  type FormTemplateGetPayload<S extends boolean | null | undefined | FormTemplateDefaultArgs> = $Result.GetResult<Prisma.$FormTemplatePayload, S>

  type FormTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormTemplateCountAggregateInputType | true
    }

  export interface FormTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormTemplate'], meta: { name: 'FormTemplate' } }
    /**
     * Find zero or one FormTemplate that matches the filter.
     * @param {FormTemplateFindUniqueArgs} args - Arguments to find a FormTemplate
     * @example
     * // Get one FormTemplate
     * const formTemplate = await prisma.formTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormTemplateFindUniqueArgs>(args: SelectSubset<T, FormTemplateFindUniqueArgs<ExtArgs>>): Prisma__FormTemplateClient<$Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FormTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormTemplateFindUniqueOrThrowArgs} args - Arguments to find a FormTemplate
     * @example
     * // Get one FormTemplate
     * const formTemplate = await prisma.formTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, FormTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormTemplateClient<$Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormTemplateFindFirstArgs} args - Arguments to find a FormTemplate
     * @example
     * // Get one FormTemplate
     * const formTemplate = await prisma.formTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormTemplateFindFirstArgs>(args?: SelectSubset<T, FormTemplateFindFirstArgs<ExtArgs>>): Prisma__FormTemplateClient<$Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormTemplateFindFirstOrThrowArgs} args - Arguments to find a FormTemplate
     * @example
     * // Get one FormTemplate
     * const formTemplate = await prisma.formTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, FormTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormTemplateClient<$Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormTemplates
     * const formTemplates = await prisma.formTemplate.findMany()
     * 
     * // Get first 10 FormTemplates
     * const formTemplates = await prisma.formTemplate.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const formTemplateWithIDOnly = await prisma.formTemplate.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends FormTemplateFindManyArgs>(args?: SelectSubset<T, FormTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FormTemplate.
     * @param {FormTemplateCreateArgs} args - Arguments to create a FormTemplate.
     * @example
     * // Create one FormTemplate
     * const FormTemplate = await prisma.formTemplate.create({
     *   data: {
     *     // ... data to create a FormTemplate
     *   }
     * })
     * 
     */
    create<T extends FormTemplateCreateArgs>(args: SelectSubset<T, FormTemplateCreateArgs<ExtArgs>>): Prisma__FormTemplateClient<$Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FormTemplates.
     * @param {FormTemplateCreateManyArgs} args - Arguments to create many FormTemplates.
     * @example
     * // Create many FormTemplates
     * const formTemplate = await prisma.formTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormTemplateCreateManyArgs>(args?: SelectSubset<T, FormTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormTemplates and returns the data saved in the database.
     * @param {FormTemplateCreateManyAndReturnArgs} args - Arguments to create many FormTemplates.
     * @example
     * // Create many FormTemplates
     * const formTemplate = await prisma.formTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormTemplates and only return the `ID`
     * const formTemplateWithIDOnly = await prisma.formTemplate.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, FormTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FormTemplate.
     * @param {FormTemplateDeleteArgs} args - Arguments to delete one FormTemplate.
     * @example
     * // Delete one FormTemplate
     * const FormTemplate = await prisma.formTemplate.delete({
     *   where: {
     *     // ... filter to delete one FormTemplate
     *   }
     * })
     * 
     */
    delete<T extends FormTemplateDeleteArgs>(args: SelectSubset<T, FormTemplateDeleteArgs<ExtArgs>>): Prisma__FormTemplateClient<$Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FormTemplate.
     * @param {FormTemplateUpdateArgs} args - Arguments to update one FormTemplate.
     * @example
     * // Update one FormTemplate
     * const formTemplate = await prisma.formTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormTemplateUpdateArgs>(args: SelectSubset<T, FormTemplateUpdateArgs<ExtArgs>>): Prisma__FormTemplateClient<$Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FormTemplates.
     * @param {FormTemplateDeleteManyArgs} args - Arguments to filter FormTemplates to delete.
     * @example
     * // Delete a few FormTemplates
     * const { count } = await prisma.formTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormTemplateDeleteManyArgs>(args?: SelectSubset<T, FormTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormTemplates
     * const formTemplate = await prisma.formTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormTemplateUpdateManyArgs>(args: SelectSubset<T, FormTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormTemplates and returns the data updated in the database.
     * @param {FormTemplateUpdateManyAndReturnArgs} args - Arguments to update many FormTemplates.
     * @example
     * // Update many FormTemplates
     * const formTemplate = await prisma.formTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FormTemplates and only return the `ID`
     * const formTemplateWithIDOnly = await prisma.formTemplate.updateManyAndReturn({
     *   select: { ID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FormTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, FormTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FormTemplate.
     * @param {FormTemplateUpsertArgs} args - Arguments to update or create a FormTemplate.
     * @example
     * // Update or create a FormTemplate
     * const formTemplate = await prisma.formTemplate.upsert({
     *   create: {
     *     // ... data to create a FormTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormTemplate we want to update
     *   }
     * })
     */
    upsert<T extends FormTemplateUpsertArgs>(args: SelectSubset<T, FormTemplateUpsertArgs<ExtArgs>>): Prisma__FormTemplateClient<$Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FormTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormTemplateCountArgs} args - Arguments to filter FormTemplates to count.
     * @example
     * // Count the number of FormTemplates
     * const count = await prisma.formTemplate.count({
     *   where: {
     *     // ... the filter for the FormTemplates we want to count
     *   }
     * })
    **/
    count<T extends FormTemplateCountArgs>(
      args?: Subset<T, FormTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormTemplateAggregateArgs>(args: Subset<T, FormTemplateAggregateArgs>): Prisma.PrismaPromise<GetFormTemplateAggregateType<T>>

    /**
     * Group by FormTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormTemplateGroupByArgs['orderBy'] }
        : { orderBy?: FormTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormTemplate model
   */
  readonly fields: FormTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sections<T extends FormTemplate$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, FormTemplate$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    services<T extends FormTemplate$servicesArgs<ExtArgs> = {}>(args?: Subset<T, FormTemplate$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    formResponse<T extends FormTemplate$formResponseArgs<ExtArgs> = {}>(args?: Subset<T, FormTemplate$formResponseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FormTemplate model
   */
  interface FormTemplateFieldRefs {
    readonly ID: FieldRef<"FormTemplate", 'Int'>
    readonly name: FieldRef<"FormTemplate", 'String'>
    readonly createdByID: FieldRef<"FormTemplate", 'Int'>
    readonly createdAt: FieldRef<"FormTemplate", 'DateTime'>
    readonly updatedAt: FieldRef<"FormTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FormTemplate findUnique
   */
  export type FormTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTemplate
     */
    select?: FormTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormTemplate
     */
    omit?: FormTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTemplateInclude<ExtArgs> | null
    /**
     * Filter, which FormTemplate to fetch.
     */
    where: FormTemplateWhereUniqueInput
  }

  /**
   * FormTemplate findUniqueOrThrow
   */
  export type FormTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTemplate
     */
    select?: FormTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormTemplate
     */
    omit?: FormTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTemplateInclude<ExtArgs> | null
    /**
     * Filter, which FormTemplate to fetch.
     */
    where: FormTemplateWhereUniqueInput
  }

  /**
   * FormTemplate findFirst
   */
  export type FormTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTemplate
     */
    select?: FormTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormTemplate
     */
    omit?: FormTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTemplateInclude<ExtArgs> | null
    /**
     * Filter, which FormTemplate to fetch.
     */
    where?: FormTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormTemplates to fetch.
     */
    orderBy?: FormTemplateOrderByWithRelationInput | FormTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormTemplates.
     */
    cursor?: FormTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormTemplates.
     */
    distinct?: FormTemplateScalarFieldEnum | FormTemplateScalarFieldEnum[]
  }

  /**
   * FormTemplate findFirstOrThrow
   */
  export type FormTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTemplate
     */
    select?: FormTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormTemplate
     */
    omit?: FormTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTemplateInclude<ExtArgs> | null
    /**
     * Filter, which FormTemplate to fetch.
     */
    where?: FormTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormTemplates to fetch.
     */
    orderBy?: FormTemplateOrderByWithRelationInput | FormTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormTemplates.
     */
    cursor?: FormTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormTemplates.
     */
    distinct?: FormTemplateScalarFieldEnum | FormTemplateScalarFieldEnum[]
  }

  /**
   * FormTemplate findMany
   */
  export type FormTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTemplate
     */
    select?: FormTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormTemplate
     */
    omit?: FormTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTemplateInclude<ExtArgs> | null
    /**
     * Filter, which FormTemplates to fetch.
     */
    where?: FormTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormTemplates to fetch.
     */
    orderBy?: FormTemplateOrderByWithRelationInput | FormTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormTemplates.
     */
    cursor?: FormTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormTemplates.
     */
    skip?: number
    distinct?: FormTemplateScalarFieldEnum | FormTemplateScalarFieldEnum[]
  }

  /**
   * FormTemplate create
   */
  export type FormTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTemplate
     */
    select?: FormTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormTemplate
     */
    omit?: FormTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a FormTemplate.
     */
    data: XOR<FormTemplateCreateInput, FormTemplateUncheckedCreateInput>
  }

  /**
   * FormTemplate createMany
   */
  export type FormTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormTemplates.
     */
    data: FormTemplateCreateManyInput | FormTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormTemplate createManyAndReturn
   */
  export type FormTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTemplate
     */
    select?: FormTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormTemplate
     */
    omit?: FormTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many FormTemplates.
     */
    data: FormTemplateCreateManyInput | FormTemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormTemplate update
   */
  export type FormTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTemplate
     */
    select?: FormTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormTemplate
     */
    omit?: FormTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a FormTemplate.
     */
    data: XOR<FormTemplateUpdateInput, FormTemplateUncheckedUpdateInput>
    /**
     * Choose, which FormTemplate to update.
     */
    where: FormTemplateWhereUniqueInput
  }

  /**
   * FormTemplate updateMany
   */
  export type FormTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormTemplates.
     */
    data: XOR<FormTemplateUpdateManyMutationInput, FormTemplateUncheckedUpdateManyInput>
    /**
     * Filter which FormTemplates to update
     */
    where?: FormTemplateWhereInput
    /**
     * Limit how many FormTemplates to update.
     */
    limit?: number
  }

  /**
   * FormTemplate updateManyAndReturn
   */
  export type FormTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTemplate
     */
    select?: FormTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormTemplate
     */
    omit?: FormTemplateOmit<ExtArgs> | null
    /**
     * The data used to update FormTemplates.
     */
    data: XOR<FormTemplateUpdateManyMutationInput, FormTemplateUncheckedUpdateManyInput>
    /**
     * Filter which FormTemplates to update
     */
    where?: FormTemplateWhereInput
    /**
     * Limit how many FormTemplates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormTemplate upsert
   */
  export type FormTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTemplate
     */
    select?: FormTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormTemplate
     */
    omit?: FormTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the FormTemplate to update in case it exists.
     */
    where: FormTemplateWhereUniqueInput
    /**
     * In case the FormTemplate found by the `where` argument doesn't exist, create a new FormTemplate with this data.
     */
    create: XOR<FormTemplateCreateInput, FormTemplateUncheckedCreateInput>
    /**
     * In case the FormTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormTemplateUpdateInput, FormTemplateUncheckedUpdateInput>
  }

  /**
   * FormTemplate delete
   */
  export type FormTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTemplate
     */
    select?: FormTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormTemplate
     */
    omit?: FormTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTemplateInclude<ExtArgs> | null
    /**
     * Filter which FormTemplate to delete.
     */
    where: FormTemplateWhereUniqueInput
  }

  /**
   * FormTemplate deleteMany
   */
  export type FormTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormTemplates to delete
     */
    where?: FormTemplateWhereInput
    /**
     * Limit how many FormTemplates to delete.
     */
    limit?: number
  }

  /**
   * FormTemplate.sections
   */
  export type FormTemplate$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionTemplate
     */
    select?: SectionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionTemplate
     */
    omit?: SectionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionTemplateInclude<ExtArgs> | null
    where?: SectionTemplateWhereInput
    orderBy?: SectionTemplateOrderByWithRelationInput | SectionTemplateOrderByWithRelationInput[]
    cursor?: SectionTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionTemplateScalarFieldEnum | SectionTemplateScalarFieldEnum[]
  }

  /**
   * FormTemplate.services
   */
  export type FormTemplate$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * FormTemplate.formResponse
   */
  export type FormTemplate$formResponseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormResponse
     */
    omit?: FormResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    where?: FormResponseWhereInput
    orderBy?: FormResponseOrderByWithRelationInput | FormResponseOrderByWithRelationInput[]
    cursor?: FormResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormResponseScalarFieldEnum | FormResponseScalarFieldEnum[]
  }

  /**
   * FormTemplate without action
   */
  export type FormTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTemplate
     */
    select?: FormTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormTemplate
     */
    omit?: FormTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTemplateInclude<ExtArgs> | null
  }


  /**
   * Model SectionTemplate
   */

  export type AggregateSectionTemplate = {
    _count: SectionTemplateCountAggregateOutputType | null
    _avg: SectionTemplateAvgAggregateOutputType | null
    _sum: SectionTemplateSumAggregateOutputType | null
    _min: SectionTemplateMinAggregateOutputType | null
    _max: SectionTemplateMaxAggregateOutputType | null
  }

  export type SectionTemplateAvgAggregateOutputType = {
    ID: number | null
    formID: number | null
  }

  export type SectionTemplateSumAggregateOutputType = {
    ID: number | null
    formID: number | null
  }

  export type SectionTemplateMinAggregateOutputType = {
    ID: number | null
    name: string | null
    formID: number | null
  }

  export type SectionTemplateMaxAggregateOutputType = {
    ID: number | null
    name: string | null
    formID: number | null
  }

  export type SectionTemplateCountAggregateOutputType = {
    ID: number
    name: number
    formID: number
    _all: number
  }


  export type SectionTemplateAvgAggregateInputType = {
    ID?: true
    formID?: true
  }

  export type SectionTemplateSumAggregateInputType = {
    ID?: true
    formID?: true
  }

  export type SectionTemplateMinAggregateInputType = {
    ID?: true
    name?: true
    formID?: true
  }

  export type SectionTemplateMaxAggregateInputType = {
    ID?: true
    name?: true
    formID?: true
  }

  export type SectionTemplateCountAggregateInputType = {
    ID?: true
    name?: true
    formID?: true
    _all?: true
  }

  export type SectionTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SectionTemplate to aggregate.
     */
    where?: SectionTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionTemplates to fetch.
     */
    orderBy?: SectionTemplateOrderByWithRelationInput | SectionTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SectionTemplates
    **/
    _count?: true | SectionTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectionTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectionTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionTemplateMaxAggregateInputType
  }

  export type GetSectionTemplateAggregateType<T extends SectionTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateSectionTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSectionTemplate[P]>
      : GetScalarType<T[P], AggregateSectionTemplate[P]>
  }




  export type SectionTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionTemplateWhereInput
    orderBy?: SectionTemplateOrderByWithAggregationInput | SectionTemplateOrderByWithAggregationInput[]
    by: SectionTemplateScalarFieldEnum[] | SectionTemplateScalarFieldEnum
    having?: SectionTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionTemplateCountAggregateInputType | true
    _avg?: SectionTemplateAvgAggregateInputType
    _sum?: SectionTemplateSumAggregateInputType
    _min?: SectionTemplateMinAggregateInputType
    _max?: SectionTemplateMaxAggregateInputType
  }

  export type SectionTemplateGroupByOutputType = {
    ID: number
    name: string
    formID: number
    _count: SectionTemplateCountAggregateOutputType | null
    _avg: SectionTemplateAvgAggregateOutputType | null
    _sum: SectionTemplateSumAggregateOutputType | null
    _min: SectionTemplateMinAggregateOutputType | null
    _max: SectionTemplateMaxAggregateOutputType | null
  }

  type GetSectionTemplateGroupByPayload<T extends SectionTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], SectionTemplateGroupByOutputType[P]>
        }
      >
    >


  export type SectionTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    name?: boolean
    formID?: boolean
    form?: boolean | FormTemplateDefaultArgs<ExtArgs>
    questions?: boolean | SectionTemplate$questionsArgs<ExtArgs>
    _count?: boolean | SectionTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectionTemplate"]>

  export type SectionTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    name?: boolean
    formID?: boolean
    form?: boolean | FormTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectionTemplate"]>

  export type SectionTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    name?: boolean
    formID?: boolean
    form?: boolean | FormTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectionTemplate"]>

  export type SectionTemplateSelectScalar = {
    ID?: boolean
    name?: boolean
    formID?: boolean
  }

  export type SectionTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "name" | "formID", ExtArgs["result"]["sectionTemplate"]>
  export type SectionTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormTemplateDefaultArgs<ExtArgs>
    questions?: boolean | SectionTemplate$questionsArgs<ExtArgs>
    _count?: boolean | SectionTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SectionTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormTemplateDefaultArgs<ExtArgs>
  }
  export type SectionTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form?: boolean | FormTemplateDefaultArgs<ExtArgs>
  }

  export type $SectionTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SectionTemplate"
    objects: {
      form: Prisma.$FormTemplatePayload<ExtArgs>
      questions: Prisma.$QuestionTemplatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      name: string
      formID: number
    }, ExtArgs["result"]["sectionTemplate"]>
    composites: {}
  }

  type SectionTemplateGetPayload<S extends boolean | null | undefined | SectionTemplateDefaultArgs> = $Result.GetResult<Prisma.$SectionTemplatePayload, S>

  type SectionTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectionTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionTemplateCountAggregateInputType | true
    }

  export interface SectionTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SectionTemplate'], meta: { name: 'SectionTemplate' } }
    /**
     * Find zero or one SectionTemplate that matches the filter.
     * @param {SectionTemplateFindUniqueArgs} args - Arguments to find a SectionTemplate
     * @example
     * // Get one SectionTemplate
     * const sectionTemplate = await prisma.sectionTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionTemplateFindUniqueArgs>(args: SelectSubset<T, SectionTemplateFindUniqueArgs<ExtArgs>>): Prisma__SectionTemplateClient<$Result.GetResult<Prisma.$SectionTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SectionTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectionTemplateFindUniqueOrThrowArgs} args - Arguments to find a SectionTemplate
     * @example
     * // Get one SectionTemplate
     * const sectionTemplate = await prisma.sectionTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionTemplateClient<$Result.GetResult<Prisma.$SectionTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SectionTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionTemplateFindFirstArgs} args - Arguments to find a SectionTemplate
     * @example
     * // Get one SectionTemplate
     * const sectionTemplate = await prisma.sectionTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionTemplateFindFirstArgs>(args?: SelectSubset<T, SectionTemplateFindFirstArgs<ExtArgs>>): Prisma__SectionTemplateClient<$Result.GetResult<Prisma.$SectionTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SectionTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionTemplateFindFirstOrThrowArgs} args - Arguments to find a SectionTemplate
     * @example
     * // Get one SectionTemplate
     * const sectionTemplate = await prisma.sectionTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionTemplateClient<$Result.GetResult<Prisma.$SectionTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SectionTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SectionTemplates
     * const sectionTemplates = await prisma.sectionTemplate.findMany()
     * 
     * // Get first 10 SectionTemplates
     * const sectionTemplates = await prisma.sectionTemplate.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const sectionTemplateWithIDOnly = await prisma.sectionTemplate.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends SectionTemplateFindManyArgs>(args?: SelectSubset<T, SectionTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SectionTemplate.
     * @param {SectionTemplateCreateArgs} args - Arguments to create a SectionTemplate.
     * @example
     * // Create one SectionTemplate
     * const SectionTemplate = await prisma.sectionTemplate.create({
     *   data: {
     *     // ... data to create a SectionTemplate
     *   }
     * })
     * 
     */
    create<T extends SectionTemplateCreateArgs>(args: SelectSubset<T, SectionTemplateCreateArgs<ExtArgs>>): Prisma__SectionTemplateClient<$Result.GetResult<Prisma.$SectionTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SectionTemplates.
     * @param {SectionTemplateCreateManyArgs} args - Arguments to create many SectionTemplates.
     * @example
     * // Create many SectionTemplates
     * const sectionTemplate = await prisma.sectionTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionTemplateCreateManyArgs>(args?: SelectSubset<T, SectionTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SectionTemplates and returns the data saved in the database.
     * @param {SectionTemplateCreateManyAndReturnArgs} args - Arguments to create many SectionTemplates.
     * @example
     * // Create many SectionTemplates
     * const sectionTemplate = await prisma.sectionTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SectionTemplates and only return the `ID`
     * const sectionTemplateWithIDOnly = await prisma.sectionTemplate.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectionTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, SectionTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SectionTemplate.
     * @param {SectionTemplateDeleteArgs} args - Arguments to delete one SectionTemplate.
     * @example
     * // Delete one SectionTemplate
     * const SectionTemplate = await prisma.sectionTemplate.delete({
     *   where: {
     *     // ... filter to delete one SectionTemplate
     *   }
     * })
     * 
     */
    delete<T extends SectionTemplateDeleteArgs>(args: SelectSubset<T, SectionTemplateDeleteArgs<ExtArgs>>): Prisma__SectionTemplateClient<$Result.GetResult<Prisma.$SectionTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SectionTemplate.
     * @param {SectionTemplateUpdateArgs} args - Arguments to update one SectionTemplate.
     * @example
     * // Update one SectionTemplate
     * const sectionTemplate = await prisma.sectionTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionTemplateUpdateArgs>(args: SelectSubset<T, SectionTemplateUpdateArgs<ExtArgs>>): Prisma__SectionTemplateClient<$Result.GetResult<Prisma.$SectionTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SectionTemplates.
     * @param {SectionTemplateDeleteManyArgs} args - Arguments to filter SectionTemplates to delete.
     * @example
     * // Delete a few SectionTemplates
     * const { count } = await prisma.sectionTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionTemplateDeleteManyArgs>(args?: SelectSubset<T, SectionTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SectionTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SectionTemplates
     * const sectionTemplate = await prisma.sectionTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionTemplateUpdateManyArgs>(args: SelectSubset<T, SectionTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SectionTemplates and returns the data updated in the database.
     * @param {SectionTemplateUpdateManyAndReturnArgs} args - Arguments to update many SectionTemplates.
     * @example
     * // Update many SectionTemplates
     * const sectionTemplate = await prisma.sectionTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SectionTemplates and only return the `ID`
     * const sectionTemplateWithIDOnly = await prisma.sectionTemplate.updateManyAndReturn({
     *   select: { ID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SectionTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, SectionTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SectionTemplate.
     * @param {SectionTemplateUpsertArgs} args - Arguments to update or create a SectionTemplate.
     * @example
     * // Update or create a SectionTemplate
     * const sectionTemplate = await prisma.sectionTemplate.upsert({
     *   create: {
     *     // ... data to create a SectionTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SectionTemplate we want to update
     *   }
     * })
     */
    upsert<T extends SectionTemplateUpsertArgs>(args: SelectSubset<T, SectionTemplateUpsertArgs<ExtArgs>>): Prisma__SectionTemplateClient<$Result.GetResult<Prisma.$SectionTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SectionTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionTemplateCountArgs} args - Arguments to filter SectionTemplates to count.
     * @example
     * // Count the number of SectionTemplates
     * const count = await prisma.sectionTemplate.count({
     *   where: {
     *     // ... the filter for the SectionTemplates we want to count
     *   }
     * })
    **/
    count<T extends SectionTemplateCountArgs>(
      args?: Subset<T, SectionTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SectionTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SectionTemplateAggregateArgs>(args: Subset<T, SectionTemplateAggregateArgs>): Prisma.PrismaPromise<GetSectionTemplateAggregateType<T>>

    /**
     * Group by SectionTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SectionTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionTemplateGroupByArgs['orderBy'] }
        : { orderBy?: SectionTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SectionTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SectionTemplate model
   */
  readonly fields: SectionTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SectionTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    form<T extends FormTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormTemplateDefaultArgs<ExtArgs>>): Prisma__FormTemplateClient<$Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questions<T extends SectionTemplate$questionsArgs<ExtArgs> = {}>(args?: Subset<T, SectionTemplate$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SectionTemplate model
   */
  interface SectionTemplateFieldRefs {
    readonly ID: FieldRef<"SectionTemplate", 'Int'>
    readonly name: FieldRef<"SectionTemplate", 'String'>
    readonly formID: FieldRef<"SectionTemplate", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SectionTemplate findUnique
   */
  export type SectionTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionTemplate
     */
    select?: SectionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionTemplate
     */
    omit?: SectionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionTemplateInclude<ExtArgs> | null
    /**
     * Filter, which SectionTemplate to fetch.
     */
    where: SectionTemplateWhereUniqueInput
  }

  /**
   * SectionTemplate findUniqueOrThrow
   */
  export type SectionTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionTemplate
     */
    select?: SectionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionTemplate
     */
    omit?: SectionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionTemplateInclude<ExtArgs> | null
    /**
     * Filter, which SectionTemplate to fetch.
     */
    where: SectionTemplateWhereUniqueInput
  }

  /**
   * SectionTemplate findFirst
   */
  export type SectionTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionTemplate
     */
    select?: SectionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionTemplate
     */
    omit?: SectionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionTemplateInclude<ExtArgs> | null
    /**
     * Filter, which SectionTemplate to fetch.
     */
    where?: SectionTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionTemplates to fetch.
     */
    orderBy?: SectionTemplateOrderByWithRelationInput | SectionTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SectionTemplates.
     */
    cursor?: SectionTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SectionTemplates.
     */
    distinct?: SectionTemplateScalarFieldEnum | SectionTemplateScalarFieldEnum[]
  }

  /**
   * SectionTemplate findFirstOrThrow
   */
  export type SectionTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionTemplate
     */
    select?: SectionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionTemplate
     */
    omit?: SectionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionTemplateInclude<ExtArgs> | null
    /**
     * Filter, which SectionTemplate to fetch.
     */
    where?: SectionTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionTemplates to fetch.
     */
    orderBy?: SectionTemplateOrderByWithRelationInput | SectionTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SectionTemplates.
     */
    cursor?: SectionTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SectionTemplates.
     */
    distinct?: SectionTemplateScalarFieldEnum | SectionTemplateScalarFieldEnum[]
  }

  /**
   * SectionTemplate findMany
   */
  export type SectionTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionTemplate
     */
    select?: SectionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionTemplate
     */
    omit?: SectionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionTemplateInclude<ExtArgs> | null
    /**
     * Filter, which SectionTemplates to fetch.
     */
    where?: SectionTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionTemplates to fetch.
     */
    orderBy?: SectionTemplateOrderByWithRelationInput | SectionTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SectionTemplates.
     */
    cursor?: SectionTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionTemplates.
     */
    skip?: number
    distinct?: SectionTemplateScalarFieldEnum | SectionTemplateScalarFieldEnum[]
  }

  /**
   * SectionTemplate create
   */
  export type SectionTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionTemplate
     */
    select?: SectionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionTemplate
     */
    omit?: SectionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a SectionTemplate.
     */
    data: XOR<SectionTemplateCreateInput, SectionTemplateUncheckedCreateInput>
  }

  /**
   * SectionTemplate createMany
   */
  export type SectionTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SectionTemplates.
     */
    data: SectionTemplateCreateManyInput | SectionTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SectionTemplate createManyAndReturn
   */
  export type SectionTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionTemplate
     */
    select?: SectionTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SectionTemplate
     */
    omit?: SectionTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many SectionTemplates.
     */
    data: SectionTemplateCreateManyInput | SectionTemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionTemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SectionTemplate update
   */
  export type SectionTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionTemplate
     */
    select?: SectionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionTemplate
     */
    omit?: SectionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a SectionTemplate.
     */
    data: XOR<SectionTemplateUpdateInput, SectionTemplateUncheckedUpdateInput>
    /**
     * Choose, which SectionTemplate to update.
     */
    where: SectionTemplateWhereUniqueInput
  }

  /**
   * SectionTemplate updateMany
   */
  export type SectionTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SectionTemplates.
     */
    data: XOR<SectionTemplateUpdateManyMutationInput, SectionTemplateUncheckedUpdateManyInput>
    /**
     * Filter which SectionTemplates to update
     */
    where?: SectionTemplateWhereInput
    /**
     * Limit how many SectionTemplates to update.
     */
    limit?: number
  }

  /**
   * SectionTemplate updateManyAndReturn
   */
  export type SectionTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionTemplate
     */
    select?: SectionTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SectionTemplate
     */
    omit?: SectionTemplateOmit<ExtArgs> | null
    /**
     * The data used to update SectionTemplates.
     */
    data: XOR<SectionTemplateUpdateManyMutationInput, SectionTemplateUncheckedUpdateManyInput>
    /**
     * Filter which SectionTemplates to update
     */
    where?: SectionTemplateWhereInput
    /**
     * Limit how many SectionTemplates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionTemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SectionTemplate upsert
   */
  export type SectionTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionTemplate
     */
    select?: SectionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionTemplate
     */
    omit?: SectionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the SectionTemplate to update in case it exists.
     */
    where: SectionTemplateWhereUniqueInput
    /**
     * In case the SectionTemplate found by the `where` argument doesn't exist, create a new SectionTemplate with this data.
     */
    create: XOR<SectionTemplateCreateInput, SectionTemplateUncheckedCreateInput>
    /**
     * In case the SectionTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionTemplateUpdateInput, SectionTemplateUncheckedUpdateInput>
  }

  /**
   * SectionTemplate delete
   */
  export type SectionTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionTemplate
     */
    select?: SectionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionTemplate
     */
    omit?: SectionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionTemplateInclude<ExtArgs> | null
    /**
     * Filter which SectionTemplate to delete.
     */
    where: SectionTemplateWhereUniqueInput
  }

  /**
   * SectionTemplate deleteMany
   */
  export type SectionTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SectionTemplates to delete
     */
    where?: SectionTemplateWhereInput
    /**
     * Limit how many SectionTemplates to delete.
     */
    limit?: number
  }

  /**
   * SectionTemplate.questions
   */
  export type SectionTemplate$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTemplate
     */
    select?: QuestionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTemplate
     */
    omit?: QuestionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTemplateInclude<ExtArgs> | null
    where?: QuestionTemplateWhereInput
    orderBy?: QuestionTemplateOrderByWithRelationInput | QuestionTemplateOrderByWithRelationInput[]
    cursor?: QuestionTemplateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionTemplateScalarFieldEnum | QuestionTemplateScalarFieldEnum[]
  }

  /**
   * SectionTemplate without action
   */
  export type SectionTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionTemplate
     */
    select?: SectionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionTemplate
     */
    omit?: SectionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionTemplateInclude<ExtArgs> | null
  }


  /**
   * Model QuestionTemplate
   */

  export type AggregateQuestionTemplate = {
    _count: QuestionTemplateCountAggregateOutputType | null
    _avg: QuestionTemplateAvgAggregateOutputType | null
    _sum: QuestionTemplateSumAggregateOutputType | null
    _min: QuestionTemplateMinAggregateOutputType | null
    _max: QuestionTemplateMaxAggregateOutputType | null
  }

  export type QuestionTemplateAvgAggregateOutputType = {
    ID: number | null
    sectionID: number | null
  }

  export type QuestionTemplateSumAggregateOutputType = {
    ID: number | null
    sectionID: number | null
  }

  export type QuestionTemplateMinAggregateOutputType = {
    ID: number | null
    text: string | null
    sectionID: number | null
  }

  export type QuestionTemplateMaxAggregateOutputType = {
    ID: number | null
    text: string | null
    sectionID: number | null
  }

  export type QuestionTemplateCountAggregateOutputType = {
    ID: number
    text: number
    sectionID: number
    _all: number
  }


  export type QuestionTemplateAvgAggregateInputType = {
    ID?: true
    sectionID?: true
  }

  export type QuestionTemplateSumAggregateInputType = {
    ID?: true
    sectionID?: true
  }

  export type QuestionTemplateMinAggregateInputType = {
    ID?: true
    text?: true
    sectionID?: true
  }

  export type QuestionTemplateMaxAggregateInputType = {
    ID?: true
    text?: true
    sectionID?: true
  }

  export type QuestionTemplateCountAggregateInputType = {
    ID?: true
    text?: true
    sectionID?: true
    _all?: true
  }

  export type QuestionTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionTemplate to aggregate.
     */
    where?: QuestionTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionTemplates to fetch.
     */
    orderBy?: QuestionTemplateOrderByWithRelationInput | QuestionTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionTemplates
    **/
    _count?: true | QuestionTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionTemplateMaxAggregateInputType
  }

  export type GetQuestionTemplateAggregateType<T extends QuestionTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionTemplate[P]>
      : GetScalarType<T[P], AggregateQuestionTemplate[P]>
  }




  export type QuestionTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionTemplateWhereInput
    orderBy?: QuestionTemplateOrderByWithAggregationInput | QuestionTemplateOrderByWithAggregationInput[]
    by: QuestionTemplateScalarFieldEnum[] | QuestionTemplateScalarFieldEnum
    having?: QuestionTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionTemplateCountAggregateInputType | true
    _avg?: QuestionTemplateAvgAggregateInputType
    _sum?: QuestionTemplateSumAggregateInputType
    _min?: QuestionTemplateMinAggregateInputType
    _max?: QuestionTemplateMaxAggregateInputType
  }

  export type QuestionTemplateGroupByOutputType = {
    ID: number
    text: string
    sectionID: number
    _count: QuestionTemplateCountAggregateOutputType | null
    _avg: QuestionTemplateAvgAggregateOutputType | null
    _sum: QuestionTemplateSumAggregateOutputType | null
    _min: QuestionTemplateMinAggregateOutputType | null
    _max: QuestionTemplateMaxAggregateOutputType | null
  }

  type GetQuestionTemplateGroupByPayload<T extends QuestionTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionTemplateGroupByOutputType[P]>
        }
      >
    >


  export type QuestionTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    text?: boolean
    sectionID?: boolean
    section?: boolean | SectionTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionTemplate"]>

  export type QuestionTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    text?: boolean
    sectionID?: boolean
    section?: boolean | SectionTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionTemplate"]>

  export type QuestionTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    text?: boolean
    sectionID?: boolean
    section?: boolean | SectionTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionTemplate"]>

  export type QuestionTemplateSelectScalar = {
    ID?: boolean
    text?: boolean
    sectionID?: boolean
  }

  export type QuestionTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "text" | "sectionID", ExtArgs["result"]["questionTemplate"]>
  export type QuestionTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionTemplateDefaultArgs<ExtArgs>
  }
  export type QuestionTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionTemplateDefaultArgs<ExtArgs>
  }
  export type QuestionTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    section?: boolean | SectionTemplateDefaultArgs<ExtArgs>
  }

  export type $QuestionTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestionTemplate"
    objects: {
      section: Prisma.$SectionTemplatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      text: string
      sectionID: number
    }, ExtArgs["result"]["questionTemplate"]>
    composites: {}
  }

  type QuestionTemplateGetPayload<S extends boolean | null | undefined | QuestionTemplateDefaultArgs> = $Result.GetResult<Prisma.$QuestionTemplatePayload, S>

  type QuestionTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionTemplateCountAggregateInputType | true
    }

  export interface QuestionTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestionTemplate'], meta: { name: 'QuestionTemplate' } }
    /**
     * Find zero or one QuestionTemplate that matches the filter.
     * @param {QuestionTemplateFindUniqueArgs} args - Arguments to find a QuestionTemplate
     * @example
     * // Get one QuestionTemplate
     * const questionTemplate = await prisma.questionTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionTemplateFindUniqueArgs>(args: SelectSubset<T, QuestionTemplateFindUniqueArgs<ExtArgs>>): Prisma__QuestionTemplateClient<$Result.GetResult<Prisma.$QuestionTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuestionTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionTemplateFindUniqueOrThrowArgs} args - Arguments to find a QuestionTemplate
     * @example
     * // Get one QuestionTemplate
     * const questionTemplate = await prisma.questionTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionTemplateClient<$Result.GetResult<Prisma.$QuestionTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTemplateFindFirstArgs} args - Arguments to find a QuestionTemplate
     * @example
     * // Get one QuestionTemplate
     * const questionTemplate = await prisma.questionTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionTemplateFindFirstArgs>(args?: SelectSubset<T, QuestionTemplateFindFirstArgs<ExtArgs>>): Prisma__QuestionTemplateClient<$Result.GetResult<Prisma.$QuestionTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTemplateFindFirstOrThrowArgs} args - Arguments to find a QuestionTemplate
     * @example
     * // Get one QuestionTemplate
     * const questionTemplate = await prisma.questionTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionTemplateClient<$Result.GetResult<Prisma.$QuestionTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuestionTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionTemplates
     * const questionTemplates = await prisma.questionTemplate.findMany()
     * 
     * // Get first 10 QuestionTemplates
     * const questionTemplates = await prisma.questionTemplate.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const questionTemplateWithIDOnly = await prisma.questionTemplate.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends QuestionTemplateFindManyArgs>(args?: SelectSubset<T, QuestionTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuestionTemplate.
     * @param {QuestionTemplateCreateArgs} args - Arguments to create a QuestionTemplate.
     * @example
     * // Create one QuestionTemplate
     * const QuestionTemplate = await prisma.questionTemplate.create({
     *   data: {
     *     // ... data to create a QuestionTemplate
     *   }
     * })
     * 
     */
    create<T extends QuestionTemplateCreateArgs>(args: SelectSubset<T, QuestionTemplateCreateArgs<ExtArgs>>): Prisma__QuestionTemplateClient<$Result.GetResult<Prisma.$QuestionTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuestionTemplates.
     * @param {QuestionTemplateCreateManyArgs} args - Arguments to create many QuestionTemplates.
     * @example
     * // Create many QuestionTemplates
     * const questionTemplate = await prisma.questionTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionTemplateCreateManyArgs>(args?: SelectSubset<T, QuestionTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuestionTemplates and returns the data saved in the database.
     * @param {QuestionTemplateCreateManyAndReturnArgs} args - Arguments to create many QuestionTemplates.
     * @example
     * // Create many QuestionTemplates
     * const questionTemplate = await prisma.questionTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuestionTemplates and only return the `ID`
     * const questionTemplateWithIDOnly = await prisma.questionTemplate.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuestionTemplate.
     * @param {QuestionTemplateDeleteArgs} args - Arguments to delete one QuestionTemplate.
     * @example
     * // Delete one QuestionTemplate
     * const QuestionTemplate = await prisma.questionTemplate.delete({
     *   where: {
     *     // ... filter to delete one QuestionTemplate
     *   }
     * })
     * 
     */
    delete<T extends QuestionTemplateDeleteArgs>(args: SelectSubset<T, QuestionTemplateDeleteArgs<ExtArgs>>): Prisma__QuestionTemplateClient<$Result.GetResult<Prisma.$QuestionTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuestionTemplate.
     * @param {QuestionTemplateUpdateArgs} args - Arguments to update one QuestionTemplate.
     * @example
     * // Update one QuestionTemplate
     * const questionTemplate = await prisma.questionTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionTemplateUpdateArgs>(args: SelectSubset<T, QuestionTemplateUpdateArgs<ExtArgs>>): Prisma__QuestionTemplateClient<$Result.GetResult<Prisma.$QuestionTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuestionTemplates.
     * @param {QuestionTemplateDeleteManyArgs} args - Arguments to filter QuestionTemplates to delete.
     * @example
     * // Delete a few QuestionTemplates
     * const { count } = await prisma.questionTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionTemplateDeleteManyArgs>(args?: SelectSubset<T, QuestionTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionTemplates
     * const questionTemplate = await prisma.questionTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionTemplateUpdateManyArgs>(args: SelectSubset<T, QuestionTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionTemplates and returns the data updated in the database.
     * @param {QuestionTemplateUpdateManyAndReturnArgs} args - Arguments to update many QuestionTemplates.
     * @example
     * // Update many QuestionTemplates
     * const questionTemplate = await prisma.questionTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuestionTemplates and only return the `ID`
     * const questionTemplateWithIDOnly = await prisma.questionTemplate.updateManyAndReturn({
     *   select: { ID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuestionTemplate.
     * @param {QuestionTemplateUpsertArgs} args - Arguments to update or create a QuestionTemplate.
     * @example
     * // Update or create a QuestionTemplate
     * const questionTemplate = await prisma.questionTemplate.upsert({
     *   create: {
     *     // ... data to create a QuestionTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionTemplate we want to update
     *   }
     * })
     */
    upsert<T extends QuestionTemplateUpsertArgs>(args: SelectSubset<T, QuestionTemplateUpsertArgs<ExtArgs>>): Prisma__QuestionTemplateClient<$Result.GetResult<Prisma.$QuestionTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuestionTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTemplateCountArgs} args - Arguments to filter QuestionTemplates to count.
     * @example
     * // Count the number of QuestionTemplates
     * const count = await prisma.questionTemplate.count({
     *   where: {
     *     // ... the filter for the QuestionTemplates we want to count
     *   }
     * })
    **/
    count<T extends QuestionTemplateCountArgs>(
      args?: Subset<T, QuestionTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionTemplateAggregateArgs>(args: Subset<T, QuestionTemplateAggregateArgs>): Prisma.PrismaPromise<GetQuestionTemplateAggregateType<T>>

    /**
     * Group by QuestionTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionTemplateGroupByArgs['orderBy'] }
        : { orderBy?: QuestionTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestionTemplate model
   */
  readonly fields: QuestionTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    section<T extends SectionTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionTemplateDefaultArgs<ExtArgs>>): Prisma__SectionTemplateClient<$Result.GetResult<Prisma.$SectionTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuestionTemplate model
   */
  interface QuestionTemplateFieldRefs {
    readonly ID: FieldRef<"QuestionTemplate", 'Int'>
    readonly text: FieldRef<"QuestionTemplate", 'String'>
    readonly sectionID: FieldRef<"QuestionTemplate", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * QuestionTemplate findUnique
   */
  export type QuestionTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTemplate
     */
    select?: QuestionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTemplate
     */
    omit?: QuestionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTemplateInclude<ExtArgs> | null
    /**
     * Filter, which QuestionTemplate to fetch.
     */
    where: QuestionTemplateWhereUniqueInput
  }

  /**
   * QuestionTemplate findUniqueOrThrow
   */
  export type QuestionTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTemplate
     */
    select?: QuestionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTemplate
     */
    omit?: QuestionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTemplateInclude<ExtArgs> | null
    /**
     * Filter, which QuestionTemplate to fetch.
     */
    where: QuestionTemplateWhereUniqueInput
  }

  /**
   * QuestionTemplate findFirst
   */
  export type QuestionTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTemplate
     */
    select?: QuestionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTemplate
     */
    omit?: QuestionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTemplateInclude<ExtArgs> | null
    /**
     * Filter, which QuestionTemplate to fetch.
     */
    where?: QuestionTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionTemplates to fetch.
     */
    orderBy?: QuestionTemplateOrderByWithRelationInput | QuestionTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionTemplates.
     */
    cursor?: QuestionTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionTemplates.
     */
    distinct?: QuestionTemplateScalarFieldEnum | QuestionTemplateScalarFieldEnum[]
  }

  /**
   * QuestionTemplate findFirstOrThrow
   */
  export type QuestionTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTemplate
     */
    select?: QuestionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTemplate
     */
    omit?: QuestionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTemplateInclude<ExtArgs> | null
    /**
     * Filter, which QuestionTemplate to fetch.
     */
    where?: QuestionTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionTemplates to fetch.
     */
    orderBy?: QuestionTemplateOrderByWithRelationInput | QuestionTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionTemplates.
     */
    cursor?: QuestionTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionTemplates.
     */
    distinct?: QuestionTemplateScalarFieldEnum | QuestionTemplateScalarFieldEnum[]
  }

  /**
   * QuestionTemplate findMany
   */
  export type QuestionTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTemplate
     */
    select?: QuestionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTemplate
     */
    omit?: QuestionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTemplateInclude<ExtArgs> | null
    /**
     * Filter, which QuestionTemplates to fetch.
     */
    where?: QuestionTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionTemplates to fetch.
     */
    orderBy?: QuestionTemplateOrderByWithRelationInput | QuestionTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionTemplates.
     */
    cursor?: QuestionTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionTemplates.
     */
    skip?: number
    distinct?: QuestionTemplateScalarFieldEnum | QuestionTemplateScalarFieldEnum[]
  }

  /**
   * QuestionTemplate create
   */
  export type QuestionTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTemplate
     */
    select?: QuestionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTemplate
     */
    omit?: QuestionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestionTemplate.
     */
    data: XOR<QuestionTemplateCreateInput, QuestionTemplateUncheckedCreateInput>
  }

  /**
   * QuestionTemplate createMany
   */
  export type QuestionTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestionTemplates.
     */
    data: QuestionTemplateCreateManyInput | QuestionTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestionTemplate createManyAndReturn
   */
  export type QuestionTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTemplate
     */
    select?: QuestionTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTemplate
     */
    omit?: QuestionTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many QuestionTemplates.
     */
    data: QuestionTemplateCreateManyInput | QuestionTemplateCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTemplateIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionTemplate update
   */
  export type QuestionTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTemplate
     */
    select?: QuestionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTemplate
     */
    omit?: QuestionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestionTemplate.
     */
    data: XOR<QuestionTemplateUpdateInput, QuestionTemplateUncheckedUpdateInput>
    /**
     * Choose, which QuestionTemplate to update.
     */
    where: QuestionTemplateWhereUniqueInput
  }

  /**
   * QuestionTemplate updateMany
   */
  export type QuestionTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestionTemplates.
     */
    data: XOR<QuestionTemplateUpdateManyMutationInput, QuestionTemplateUncheckedUpdateManyInput>
    /**
     * Filter which QuestionTemplates to update
     */
    where?: QuestionTemplateWhereInput
    /**
     * Limit how many QuestionTemplates to update.
     */
    limit?: number
  }

  /**
   * QuestionTemplate updateManyAndReturn
   */
  export type QuestionTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTemplate
     */
    select?: QuestionTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTemplate
     */
    omit?: QuestionTemplateOmit<ExtArgs> | null
    /**
     * The data used to update QuestionTemplates.
     */
    data: XOR<QuestionTemplateUpdateManyMutationInput, QuestionTemplateUncheckedUpdateManyInput>
    /**
     * Filter which QuestionTemplates to update
     */
    where?: QuestionTemplateWhereInput
    /**
     * Limit how many QuestionTemplates to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTemplateIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionTemplate upsert
   */
  export type QuestionTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTemplate
     */
    select?: QuestionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTemplate
     */
    omit?: QuestionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestionTemplate to update in case it exists.
     */
    where: QuestionTemplateWhereUniqueInput
    /**
     * In case the QuestionTemplate found by the `where` argument doesn't exist, create a new QuestionTemplate with this data.
     */
    create: XOR<QuestionTemplateCreateInput, QuestionTemplateUncheckedCreateInput>
    /**
     * In case the QuestionTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionTemplateUpdateInput, QuestionTemplateUncheckedUpdateInput>
  }

  /**
   * QuestionTemplate delete
   */
  export type QuestionTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTemplate
     */
    select?: QuestionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTemplate
     */
    omit?: QuestionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTemplateInclude<ExtArgs> | null
    /**
     * Filter which QuestionTemplate to delete.
     */
    where: QuestionTemplateWhereUniqueInput
  }

  /**
   * QuestionTemplate deleteMany
   */
  export type QuestionTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionTemplates to delete
     */
    where?: QuestionTemplateWhereInput
    /**
     * Limit how many QuestionTemplates to delete.
     */
    limit?: number
  }

  /**
   * QuestionTemplate without action
   */
  export type QuestionTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTemplate
     */
    select?: QuestionTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionTemplate
     */
    omit?: QuestionTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTemplateInclude<ExtArgs> | null
  }


  /**
   * Model FormResponse
   */

  export type AggregateFormResponse = {
    _count: FormResponseCountAggregateOutputType | null
    _avg: FormResponseAvgAggregateOutputType | null
    _sum: FormResponseSumAggregateOutputType | null
    _min: FormResponseMinAggregateOutputType | null
    _max: FormResponseMaxAggregateOutputType | null
  }

  export type FormResponseAvgAggregateOutputType = {
    ID: number | null
    engineerID: number | null
    customerServiceID: number | null
    formTemplateID: number | null
  }

  export type FormResponseSumAggregateOutputType = {
    ID: number | null
    engineerID: number | null
    customerServiceID: number | null
    formTemplateID: number | null
  }

  export type FormResponseMinAggregateOutputType = {
    ID: number | null
    filledAt: Date | null
    updatedAt: Date | null
    engineerID: number | null
    customerServiceID: number | null
    formTemplateID: number | null
  }

  export type FormResponseMaxAggregateOutputType = {
    ID: number | null
    filledAt: Date | null
    updatedAt: Date | null
    engineerID: number | null
    customerServiceID: number | null
    formTemplateID: number | null
  }

  export type FormResponseCountAggregateOutputType = {
    ID: number
    filledAt: number
    updatedAt: number
    engineerID: number
    customerServiceID: number
    formTemplateID: number
    _all: number
  }


  export type FormResponseAvgAggregateInputType = {
    ID?: true
    engineerID?: true
    customerServiceID?: true
    formTemplateID?: true
  }

  export type FormResponseSumAggregateInputType = {
    ID?: true
    engineerID?: true
    customerServiceID?: true
    formTemplateID?: true
  }

  export type FormResponseMinAggregateInputType = {
    ID?: true
    filledAt?: true
    updatedAt?: true
    engineerID?: true
    customerServiceID?: true
    formTemplateID?: true
  }

  export type FormResponseMaxAggregateInputType = {
    ID?: true
    filledAt?: true
    updatedAt?: true
    engineerID?: true
    customerServiceID?: true
    formTemplateID?: true
  }

  export type FormResponseCountAggregateInputType = {
    ID?: true
    filledAt?: true
    updatedAt?: true
    engineerID?: true
    customerServiceID?: true
    formTemplateID?: true
    _all?: true
  }

  export type FormResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormResponse to aggregate.
     */
    where?: FormResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormResponses to fetch.
     */
    orderBy?: FormResponseOrderByWithRelationInput | FormResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormResponses
    **/
    _count?: true | FormResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormResponseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormResponseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormResponseMaxAggregateInputType
  }

  export type GetFormResponseAggregateType<T extends FormResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateFormResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormResponse[P]>
      : GetScalarType<T[P], AggregateFormResponse[P]>
  }




  export type FormResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormResponseWhereInput
    orderBy?: FormResponseOrderByWithAggregationInput | FormResponseOrderByWithAggregationInput[]
    by: FormResponseScalarFieldEnum[] | FormResponseScalarFieldEnum
    having?: FormResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormResponseCountAggregateInputType | true
    _avg?: FormResponseAvgAggregateInputType
    _sum?: FormResponseSumAggregateInputType
    _min?: FormResponseMinAggregateInputType
    _max?: FormResponseMaxAggregateInputType
  }

  export type FormResponseGroupByOutputType = {
    ID: number
    filledAt: Date
    updatedAt: Date
    engineerID: number
    customerServiceID: number
    formTemplateID: number
    _count: FormResponseCountAggregateOutputType | null
    _avg: FormResponseAvgAggregateOutputType | null
    _sum: FormResponseSumAggregateOutputType | null
    _min: FormResponseMinAggregateOutputType | null
    _max: FormResponseMaxAggregateOutputType | null
  }

  type GetFormResponseGroupByPayload<T extends FormResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormResponseGroupByOutputType[P]>
            : GetScalarType<T[P], FormResponseGroupByOutputType[P]>
        }
      >
    >


  export type FormResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    filledAt?: boolean
    updatedAt?: boolean
    engineerID?: boolean
    customerServiceID?: boolean
    formTemplateID?: boolean
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
    customerService?: boolean | CustomerServiceDefaultArgs<ExtArgs>
    formTemplate?: boolean | FormTemplateDefaultArgs<ExtArgs>
    sectionResponses?: boolean | FormResponse$sectionResponsesArgs<ExtArgs>
    _count?: boolean | FormResponseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formResponse"]>

  export type FormResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    filledAt?: boolean
    updatedAt?: boolean
    engineerID?: boolean
    customerServiceID?: boolean
    formTemplateID?: boolean
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
    customerService?: boolean | CustomerServiceDefaultArgs<ExtArgs>
    formTemplate?: boolean | FormTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formResponse"]>

  export type FormResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    filledAt?: boolean
    updatedAt?: boolean
    engineerID?: boolean
    customerServiceID?: boolean
    formTemplateID?: boolean
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
    customerService?: boolean | CustomerServiceDefaultArgs<ExtArgs>
    formTemplate?: boolean | FormTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formResponse"]>

  export type FormResponseSelectScalar = {
    ID?: boolean
    filledAt?: boolean
    updatedAt?: boolean
    engineerID?: boolean
    customerServiceID?: boolean
    formTemplateID?: boolean
  }

  export type FormResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "filledAt" | "updatedAt" | "engineerID" | "customerServiceID" | "formTemplateID", ExtArgs["result"]["formResponse"]>
  export type FormResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
    customerService?: boolean | CustomerServiceDefaultArgs<ExtArgs>
    formTemplate?: boolean | FormTemplateDefaultArgs<ExtArgs>
    sectionResponses?: boolean | FormResponse$sectionResponsesArgs<ExtArgs>
    _count?: boolean | FormResponseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
    customerService?: boolean | CustomerServiceDefaultArgs<ExtArgs>
    formTemplate?: boolean | FormTemplateDefaultArgs<ExtArgs>
  }
  export type FormResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    engineer?: boolean | EngineerDefaultArgs<ExtArgs>
    customerService?: boolean | CustomerServiceDefaultArgs<ExtArgs>
    formTemplate?: boolean | FormTemplateDefaultArgs<ExtArgs>
  }

  export type $FormResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormResponse"
    objects: {
      engineer: Prisma.$EngineerPayload<ExtArgs>
      customerService: Prisma.$CustomerServicePayload<ExtArgs>
      formTemplate: Prisma.$FormTemplatePayload<ExtArgs>
      sectionResponses: Prisma.$SectionResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      filledAt: Date
      updatedAt: Date
      engineerID: number
      customerServiceID: number
      formTemplateID: number
    }, ExtArgs["result"]["formResponse"]>
    composites: {}
  }

  type FormResponseGetPayload<S extends boolean | null | undefined | FormResponseDefaultArgs> = $Result.GetResult<Prisma.$FormResponsePayload, S>

  type FormResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormResponseCountAggregateInputType | true
    }

  export interface FormResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormResponse'], meta: { name: 'FormResponse' } }
    /**
     * Find zero or one FormResponse that matches the filter.
     * @param {FormResponseFindUniqueArgs} args - Arguments to find a FormResponse
     * @example
     * // Get one FormResponse
     * const formResponse = await prisma.formResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormResponseFindUniqueArgs>(args: SelectSubset<T, FormResponseFindUniqueArgs<ExtArgs>>): Prisma__FormResponseClient<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FormResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormResponseFindUniqueOrThrowArgs} args - Arguments to find a FormResponse
     * @example
     * // Get one FormResponse
     * const formResponse = await prisma.formResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, FormResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormResponseClient<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormResponseFindFirstArgs} args - Arguments to find a FormResponse
     * @example
     * // Get one FormResponse
     * const formResponse = await prisma.formResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormResponseFindFirstArgs>(args?: SelectSubset<T, FormResponseFindFirstArgs<ExtArgs>>): Prisma__FormResponseClient<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormResponseFindFirstOrThrowArgs} args - Arguments to find a FormResponse
     * @example
     * // Get one FormResponse
     * const formResponse = await prisma.formResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, FormResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormResponseClient<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormResponses
     * const formResponses = await prisma.formResponse.findMany()
     * 
     * // Get first 10 FormResponses
     * const formResponses = await prisma.formResponse.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const formResponseWithIDOnly = await prisma.formResponse.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends FormResponseFindManyArgs>(args?: SelectSubset<T, FormResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FormResponse.
     * @param {FormResponseCreateArgs} args - Arguments to create a FormResponse.
     * @example
     * // Create one FormResponse
     * const FormResponse = await prisma.formResponse.create({
     *   data: {
     *     // ... data to create a FormResponse
     *   }
     * })
     * 
     */
    create<T extends FormResponseCreateArgs>(args: SelectSubset<T, FormResponseCreateArgs<ExtArgs>>): Prisma__FormResponseClient<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FormResponses.
     * @param {FormResponseCreateManyArgs} args - Arguments to create many FormResponses.
     * @example
     * // Create many FormResponses
     * const formResponse = await prisma.formResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormResponseCreateManyArgs>(args?: SelectSubset<T, FormResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormResponses and returns the data saved in the database.
     * @param {FormResponseCreateManyAndReturnArgs} args - Arguments to create many FormResponses.
     * @example
     * // Create many FormResponses
     * const formResponse = await prisma.formResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormResponses and only return the `ID`
     * const formResponseWithIDOnly = await prisma.formResponse.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, FormResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FormResponse.
     * @param {FormResponseDeleteArgs} args - Arguments to delete one FormResponse.
     * @example
     * // Delete one FormResponse
     * const FormResponse = await prisma.formResponse.delete({
     *   where: {
     *     // ... filter to delete one FormResponse
     *   }
     * })
     * 
     */
    delete<T extends FormResponseDeleteArgs>(args: SelectSubset<T, FormResponseDeleteArgs<ExtArgs>>): Prisma__FormResponseClient<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FormResponse.
     * @param {FormResponseUpdateArgs} args - Arguments to update one FormResponse.
     * @example
     * // Update one FormResponse
     * const formResponse = await prisma.formResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormResponseUpdateArgs>(args: SelectSubset<T, FormResponseUpdateArgs<ExtArgs>>): Prisma__FormResponseClient<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FormResponses.
     * @param {FormResponseDeleteManyArgs} args - Arguments to filter FormResponses to delete.
     * @example
     * // Delete a few FormResponses
     * const { count } = await prisma.formResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormResponseDeleteManyArgs>(args?: SelectSubset<T, FormResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormResponses
     * const formResponse = await prisma.formResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormResponseUpdateManyArgs>(args: SelectSubset<T, FormResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormResponses and returns the data updated in the database.
     * @param {FormResponseUpdateManyAndReturnArgs} args - Arguments to update many FormResponses.
     * @example
     * // Update many FormResponses
     * const formResponse = await prisma.formResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FormResponses and only return the `ID`
     * const formResponseWithIDOnly = await prisma.formResponse.updateManyAndReturn({
     *   select: { ID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FormResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, FormResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FormResponse.
     * @param {FormResponseUpsertArgs} args - Arguments to update or create a FormResponse.
     * @example
     * // Update or create a FormResponse
     * const formResponse = await prisma.formResponse.upsert({
     *   create: {
     *     // ... data to create a FormResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormResponse we want to update
     *   }
     * })
     */
    upsert<T extends FormResponseUpsertArgs>(args: SelectSubset<T, FormResponseUpsertArgs<ExtArgs>>): Prisma__FormResponseClient<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FormResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormResponseCountArgs} args - Arguments to filter FormResponses to count.
     * @example
     * // Count the number of FormResponses
     * const count = await prisma.formResponse.count({
     *   where: {
     *     // ... the filter for the FormResponses we want to count
     *   }
     * })
    **/
    count<T extends FormResponseCountArgs>(
      args?: Subset<T, FormResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormResponseAggregateArgs>(args: Subset<T, FormResponseAggregateArgs>): Prisma.PrismaPromise<GetFormResponseAggregateType<T>>

    /**
     * Group by FormResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormResponseGroupByArgs['orderBy'] }
        : { orderBy?: FormResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormResponse model
   */
  readonly fields: FormResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    engineer<T extends EngineerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EngineerDefaultArgs<ExtArgs>>): Prisma__EngineerClient<$Result.GetResult<Prisma.$EngineerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    customerService<T extends CustomerServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerServiceDefaultArgs<ExtArgs>>): Prisma__CustomerServiceClient<$Result.GetResult<Prisma.$CustomerServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    formTemplate<T extends FormTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormTemplateDefaultArgs<ExtArgs>>): Prisma__FormTemplateClient<$Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sectionResponses<T extends FormResponse$sectionResponsesArgs<ExtArgs> = {}>(args?: Subset<T, FormResponse$sectionResponsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FormResponse model
   */
  interface FormResponseFieldRefs {
    readonly ID: FieldRef<"FormResponse", 'Int'>
    readonly filledAt: FieldRef<"FormResponse", 'DateTime'>
    readonly updatedAt: FieldRef<"FormResponse", 'DateTime'>
    readonly engineerID: FieldRef<"FormResponse", 'Int'>
    readonly customerServiceID: FieldRef<"FormResponse", 'Int'>
    readonly formTemplateID: FieldRef<"FormResponse", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FormResponse findUnique
   */
  export type FormResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormResponse
     */
    omit?: FormResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    /**
     * Filter, which FormResponse to fetch.
     */
    where: FormResponseWhereUniqueInput
  }

  /**
   * FormResponse findUniqueOrThrow
   */
  export type FormResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormResponse
     */
    omit?: FormResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    /**
     * Filter, which FormResponse to fetch.
     */
    where: FormResponseWhereUniqueInput
  }

  /**
   * FormResponse findFirst
   */
  export type FormResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormResponse
     */
    omit?: FormResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    /**
     * Filter, which FormResponse to fetch.
     */
    where?: FormResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormResponses to fetch.
     */
    orderBy?: FormResponseOrderByWithRelationInput | FormResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormResponses.
     */
    cursor?: FormResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormResponses.
     */
    distinct?: FormResponseScalarFieldEnum | FormResponseScalarFieldEnum[]
  }

  /**
   * FormResponse findFirstOrThrow
   */
  export type FormResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormResponse
     */
    omit?: FormResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    /**
     * Filter, which FormResponse to fetch.
     */
    where?: FormResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormResponses to fetch.
     */
    orderBy?: FormResponseOrderByWithRelationInput | FormResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormResponses.
     */
    cursor?: FormResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormResponses.
     */
    distinct?: FormResponseScalarFieldEnum | FormResponseScalarFieldEnum[]
  }

  /**
   * FormResponse findMany
   */
  export type FormResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormResponse
     */
    omit?: FormResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    /**
     * Filter, which FormResponses to fetch.
     */
    where?: FormResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormResponses to fetch.
     */
    orderBy?: FormResponseOrderByWithRelationInput | FormResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormResponses.
     */
    cursor?: FormResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormResponses.
     */
    skip?: number
    distinct?: FormResponseScalarFieldEnum | FormResponseScalarFieldEnum[]
  }

  /**
   * FormResponse create
   */
  export type FormResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormResponse
     */
    omit?: FormResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a FormResponse.
     */
    data: XOR<FormResponseCreateInput, FormResponseUncheckedCreateInput>
  }

  /**
   * FormResponse createMany
   */
  export type FormResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormResponses.
     */
    data: FormResponseCreateManyInput | FormResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormResponse createManyAndReturn
   */
  export type FormResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormResponse
     */
    omit?: FormResponseOmit<ExtArgs> | null
    /**
     * The data used to create many FormResponses.
     */
    data: FormResponseCreateManyInput | FormResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormResponse update
   */
  export type FormResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormResponse
     */
    omit?: FormResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a FormResponse.
     */
    data: XOR<FormResponseUpdateInput, FormResponseUncheckedUpdateInput>
    /**
     * Choose, which FormResponse to update.
     */
    where: FormResponseWhereUniqueInput
  }

  /**
   * FormResponse updateMany
   */
  export type FormResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormResponses.
     */
    data: XOR<FormResponseUpdateManyMutationInput, FormResponseUncheckedUpdateManyInput>
    /**
     * Filter which FormResponses to update
     */
    where?: FormResponseWhereInput
    /**
     * Limit how many FormResponses to update.
     */
    limit?: number
  }

  /**
   * FormResponse updateManyAndReturn
   */
  export type FormResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormResponse
     */
    omit?: FormResponseOmit<ExtArgs> | null
    /**
     * The data used to update FormResponses.
     */
    data: XOR<FormResponseUpdateManyMutationInput, FormResponseUncheckedUpdateManyInput>
    /**
     * Filter which FormResponses to update
     */
    where?: FormResponseWhereInput
    /**
     * Limit how many FormResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormResponse upsert
   */
  export type FormResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormResponse
     */
    omit?: FormResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the FormResponse to update in case it exists.
     */
    where: FormResponseWhereUniqueInput
    /**
     * In case the FormResponse found by the `where` argument doesn't exist, create a new FormResponse with this data.
     */
    create: XOR<FormResponseCreateInput, FormResponseUncheckedCreateInput>
    /**
     * In case the FormResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormResponseUpdateInput, FormResponseUncheckedUpdateInput>
  }

  /**
   * FormResponse delete
   */
  export type FormResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormResponse
     */
    omit?: FormResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
    /**
     * Filter which FormResponse to delete.
     */
    where: FormResponseWhereUniqueInput
  }

  /**
   * FormResponse deleteMany
   */
  export type FormResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormResponses to delete
     */
    where?: FormResponseWhereInput
    /**
     * Limit how many FormResponses to delete.
     */
    limit?: number
  }

  /**
   * FormResponse.sectionResponses
   */
  export type FormResponse$sectionResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionResponse
     */
    select?: SectionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionResponse
     */
    omit?: SectionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionResponseInclude<ExtArgs> | null
    where?: SectionResponseWhereInput
    orderBy?: SectionResponseOrderByWithRelationInput | SectionResponseOrderByWithRelationInput[]
    cursor?: SectionResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionResponseScalarFieldEnum | SectionResponseScalarFieldEnum[]
  }

  /**
   * FormResponse without action
   */
  export type FormResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormResponse
     */
    select?: FormResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormResponse
     */
    omit?: FormResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormResponseInclude<ExtArgs> | null
  }


  /**
   * Model SectionResponse
   */

  export type AggregateSectionResponse = {
    _count: SectionResponseCountAggregateOutputType | null
    _avg: SectionResponseAvgAggregateOutputType | null
    _sum: SectionResponseSumAggregateOutputType | null
    _min: SectionResponseMinAggregateOutputType | null
    _max: SectionResponseMaxAggregateOutputType | null
  }

  export type SectionResponseAvgAggregateOutputType = {
    ID: number | null
    formResponseID: number | null
  }

  export type SectionResponseSumAggregateOutputType = {
    ID: number | null
    formResponseID: number | null
  }

  export type SectionResponseMinAggregateOutputType = {
    ID: number | null
    sectionName: string | null
    formResponseID: number | null
  }

  export type SectionResponseMaxAggregateOutputType = {
    ID: number | null
    sectionName: string | null
    formResponseID: number | null
  }

  export type SectionResponseCountAggregateOutputType = {
    ID: number
    sectionName: number
    formResponseID: number
    _all: number
  }


  export type SectionResponseAvgAggregateInputType = {
    ID?: true
    formResponseID?: true
  }

  export type SectionResponseSumAggregateInputType = {
    ID?: true
    formResponseID?: true
  }

  export type SectionResponseMinAggregateInputType = {
    ID?: true
    sectionName?: true
    formResponseID?: true
  }

  export type SectionResponseMaxAggregateInputType = {
    ID?: true
    sectionName?: true
    formResponseID?: true
  }

  export type SectionResponseCountAggregateInputType = {
    ID?: true
    sectionName?: true
    formResponseID?: true
    _all?: true
  }

  export type SectionResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SectionResponse to aggregate.
     */
    where?: SectionResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionResponses to fetch.
     */
    orderBy?: SectionResponseOrderByWithRelationInput | SectionResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SectionResponses
    **/
    _count?: true | SectionResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectionResponseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectionResponseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionResponseMaxAggregateInputType
  }

  export type GetSectionResponseAggregateType<T extends SectionResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateSectionResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSectionResponse[P]>
      : GetScalarType<T[P], AggregateSectionResponse[P]>
  }




  export type SectionResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionResponseWhereInput
    orderBy?: SectionResponseOrderByWithAggregationInput | SectionResponseOrderByWithAggregationInput[]
    by: SectionResponseScalarFieldEnum[] | SectionResponseScalarFieldEnum
    having?: SectionResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionResponseCountAggregateInputType | true
    _avg?: SectionResponseAvgAggregateInputType
    _sum?: SectionResponseSumAggregateInputType
    _min?: SectionResponseMinAggregateInputType
    _max?: SectionResponseMaxAggregateInputType
  }

  export type SectionResponseGroupByOutputType = {
    ID: number
    sectionName: string
    formResponseID: number
    _count: SectionResponseCountAggregateOutputType | null
    _avg: SectionResponseAvgAggregateOutputType | null
    _sum: SectionResponseSumAggregateOutputType | null
    _min: SectionResponseMinAggregateOutputType | null
    _max: SectionResponseMaxAggregateOutputType | null
  }

  type GetSectionResponseGroupByPayload<T extends SectionResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionResponseGroupByOutputType[P]>
            : GetScalarType<T[P], SectionResponseGroupByOutputType[P]>
        }
      >
    >


  export type SectionResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    sectionName?: boolean
    formResponseID?: boolean
    formResponses?: boolean | FormResponseDefaultArgs<ExtArgs>
    questionResponses?: boolean | SectionResponse$questionResponsesArgs<ExtArgs>
    _count?: boolean | SectionResponseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectionResponse"]>

  export type SectionResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    sectionName?: boolean
    formResponseID?: boolean
    formResponses?: boolean | FormResponseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectionResponse"]>

  export type SectionResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    sectionName?: boolean
    formResponseID?: boolean
    formResponses?: boolean | FormResponseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sectionResponse"]>

  export type SectionResponseSelectScalar = {
    ID?: boolean
    sectionName?: boolean
    formResponseID?: boolean
  }

  export type SectionResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "sectionName" | "formResponseID", ExtArgs["result"]["sectionResponse"]>
  export type SectionResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formResponses?: boolean | FormResponseDefaultArgs<ExtArgs>
    questionResponses?: boolean | SectionResponse$questionResponsesArgs<ExtArgs>
    _count?: boolean | SectionResponseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SectionResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formResponses?: boolean | FormResponseDefaultArgs<ExtArgs>
  }
  export type SectionResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    formResponses?: boolean | FormResponseDefaultArgs<ExtArgs>
  }

  export type $SectionResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SectionResponse"
    objects: {
      formResponses: Prisma.$FormResponsePayload<ExtArgs>
      questionResponses: Prisma.$QuestionResponsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      sectionName: string
      formResponseID: number
    }, ExtArgs["result"]["sectionResponse"]>
    composites: {}
  }

  type SectionResponseGetPayload<S extends boolean | null | undefined | SectionResponseDefaultArgs> = $Result.GetResult<Prisma.$SectionResponsePayload, S>

  type SectionResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectionResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionResponseCountAggregateInputType | true
    }

  export interface SectionResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SectionResponse'], meta: { name: 'SectionResponse' } }
    /**
     * Find zero or one SectionResponse that matches the filter.
     * @param {SectionResponseFindUniqueArgs} args - Arguments to find a SectionResponse
     * @example
     * // Get one SectionResponse
     * const sectionResponse = await prisma.sectionResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionResponseFindUniqueArgs>(args: SelectSubset<T, SectionResponseFindUniqueArgs<ExtArgs>>): Prisma__SectionResponseClient<$Result.GetResult<Prisma.$SectionResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SectionResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectionResponseFindUniqueOrThrowArgs} args - Arguments to find a SectionResponse
     * @example
     * // Get one SectionResponse
     * const sectionResponse = await prisma.sectionResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionResponseClient<$Result.GetResult<Prisma.$SectionResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SectionResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionResponseFindFirstArgs} args - Arguments to find a SectionResponse
     * @example
     * // Get one SectionResponse
     * const sectionResponse = await prisma.sectionResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionResponseFindFirstArgs>(args?: SelectSubset<T, SectionResponseFindFirstArgs<ExtArgs>>): Prisma__SectionResponseClient<$Result.GetResult<Prisma.$SectionResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SectionResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionResponseFindFirstOrThrowArgs} args - Arguments to find a SectionResponse
     * @example
     * // Get one SectionResponse
     * const sectionResponse = await prisma.sectionResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionResponseClient<$Result.GetResult<Prisma.$SectionResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SectionResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SectionResponses
     * const sectionResponses = await prisma.sectionResponse.findMany()
     * 
     * // Get first 10 SectionResponses
     * const sectionResponses = await prisma.sectionResponse.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const sectionResponseWithIDOnly = await prisma.sectionResponse.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends SectionResponseFindManyArgs>(args?: SelectSubset<T, SectionResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SectionResponse.
     * @param {SectionResponseCreateArgs} args - Arguments to create a SectionResponse.
     * @example
     * // Create one SectionResponse
     * const SectionResponse = await prisma.sectionResponse.create({
     *   data: {
     *     // ... data to create a SectionResponse
     *   }
     * })
     * 
     */
    create<T extends SectionResponseCreateArgs>(args: SelectSubset<T, SectionResponseCreateArgs<ExtArgs>>): Prisma__SectionResponseClient<$Result.GetResult<Prisma.$SectionResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SectionResponses.
     * @param {SectionResponseCreateManyArgs} args - Arguments to create many SectionResponses.
     * @example
     * // Create many SectionResponses
     * const sectionResponse = await prisma.sectionResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionResponseCreateManyArgs>(args?: SelectSubset<T, SectionResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SectionResponses and returns the data saved in the database.
     * @param {SectionResponseCreateManyAndReturnArgs} args - Arguments to create many SectionResponses.
     * @example
     * // Create many SectionResponses
     * const sectionResponse = await prisma.sectionResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SectionResponses and only return the `ID`
     * const sectionResponseWithIDOnly = await prisma.sectionResponse.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectionResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, SectionResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SectionResponse.
     * @param {SectionResponseDeleteArgs} args - Arguments to delete one SectionResponse.
     * @example
     * // Delete one SectionResponse
     * const SectionResponse = await prisma.sectionResponse.delete({
     *   where: {
     *     // ... filter to delete one SectionResponse
     *   }
     * })
     * 
     */
    delete<T extends SectionResponseDeleteArgs>(args: SelectSubset<T, SectionResponseDeleteArgs<ExtArgs>>): Prisma__SectionResponseClient<$Result.GetResult<Prisma.$SectionResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SectionResponse.
     * @param {SectionResponseUpdateArgs} args - Arguments to update one SectionResponse.
     * @example
     * // Update one SectionResponse
     * const sectionResponse = await prisma.sectionResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionResponseUpdateArgs>(args: SelectSubset<T, SectionResponseUpdateArgs<ExtArgs>>): Prisma__SectionResponseClient<$Result.GetResult<Prisma.$SectionResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SectionResponses.
     * @param {SectionResponseDeleteManyArgs} args - Arguments to filter SectionResponses to delete.
     * @example
     * // Delete a few SectionResponses
     * const { count } = await prisma.sectionResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionResponseDeleteManyArgs>(args?: SelectSubset<T, SectionResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SectionResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SectionResponses
     * const sectionResponse = await prisma.sectionResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionResponseUpdateManyArgs>(args: SelectSubset<T, SectionResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SectionResponses and returns the data updated in the database.
     * @param {SectionResponseUpdateManyAndReturnArgs} args - Arguments to update many SectionResponses.
     * @example
     * // Update many SectionResponses
     * const sectionResponse = await prisma.sectionResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SectionResponses and only return the `ID`
     * const sectionResponseWithIDOnly = await prisma.sectionResponse.updateManyAndReturn({
     *   select: { ID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SectionResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, SectionResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SectionResponse.
     * @param {SectionResponseUpsertArgs} args - Arguments to update or create a SectionResponse.
     * @example
     * // Update or create a SectionResponse
     * const sectionResponse = await prisma.sectionResponse.upsert({
     *   create: {
     *     // ... data to create a SectionResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SectionResponse we want to update
     *   }
     * })
     */
    upsert<T extends SectionResponseUpsertArgs>(args: SelectSubset<T, SectionResponseUpsertArgs<ExtArgs>>): Prisma__SectionResponseClient<$Result.GetResult<Prisma.$SectionResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SectionResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionResponseCountArgs} args - Arguments to filter SectionResponses to count.
     * @example
     * // Count the number of SectionResponses
     * const count = await prisma.sectionResponse.count({
     *   where: {
     *     // ... the filter for the SectionResponses we want to count
     *   }
     * })
    **/
    count<T extends SectionResponseCountArgs>(
      args?: Subset<T, SectionResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SectionResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SectionResponseAggregateArgs>(args: Subset<T, SectionResponseAggregateArgs>): Prisma.PrismaPromise<GetSectionResponseAggregateType<T>>

    /**
     * Group by SectionResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SectionResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionResponseGroupByArgs['orderBy'] }
        : { orderBy?: SectionResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SectionResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SectionResponse model
   */
  readonly fields: SectionResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SectionResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    formResponses<T extends FormResponseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormResponseDefaultArgs<ExtArgs>>): Prisma__FormResponseClient<$Result.GetResult<Prisma.$FormResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    questionResponses<T extends SectionResponse$questionResponsesArgs<ExtArgs> = {}>(args?: Subset<T, SectionResponse$questionResponsesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SectionResponse model
   */
  interface SectionResponseFieldRefs {
    readonly ID: FieldRef<"SectionResponse", 'Int'>
    readonly sectionName: FieldRef<"SectionResponse", 'String'>
    readonly formResponseID: FieldRef<"SectionResponse", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SectionResponse findUnique
   */
  export type SectionResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionResponse
     */
    select?: SectionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionResponse
     */
    omit?: SectionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionResponseInclude<ExtArgs> | null
    /**
     * Filter, which SectionResponse to fetch.
     */
    where: SectionResponseWhereUniqueInput
  }

  /**
   * SectionResponse findUniqueOrThrow
   */
  export type SectionResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionResponse
     */
    select?: SectionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionResponse
     */
    omit?: SectionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionResponseInclude<ExtArgs> | null
    /**
     * Filter, which SectionResponse to fetch.
     */
    where: SectionResponseWhereUniqueInput
  }

  /**
   * SectionResponse findFirst
   */
  export type SectionResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionResponse
     */
    select?: SectionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionResponse
     */
    omit?: SectionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionResponseInclude<ExtArgs> | null
    /**
     * Filter, which SectionResponse to fetch.
     */
    where?: SectionResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionResponses to fetch.
     */
    orderBy?: SectionResponseOrderByWithRelationInput | SectionResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SectionResponses.
     */
    cursor?: SectionResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SectionResponses.
     */
    distinct?: SectionResponseScalarFieldEnum | SectionResponseScalarFieldEnum[]
  }

  /**
   * SectionResponse findFirstOrThrow
   */
  export type SectionResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionResponse
     */
    select?: SectionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionResponse
     */
    omit?: SectionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionResponseInclude<ExtArgs> | null
    /**
     * Filter, which SectionResponse to fetch.
     */
    where?: SectionResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionResponses to fetch.
     */
    orderBy?: SectionResponseOrderByWithRelationInput | SectionResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SectionResponses.
     */
    cursor?: SectionResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SectionResponses.
     */
    distinct?: SectionResponseScalarFieldEnum | SectionResponseScalarFieldEnum[]
  }

  /**
   * SectionResponse findMany
   */
  export type SectionResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionResponse
     */
    select?: SectionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionResponse
     */
    omit?: SectionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionResponseInclude<ExtArgs> | null
    /**
     * Filter, which SectionResponses to fetch.
     */
    where?: SectionResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SectionResponses to fetch.
     */
    orderBy?: SectionResponseOrderByWithRelationInput | SectionResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SectionResponses.
     */
    cursor?: SectionResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SectionResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SectionResponses.
     */
    skip?: number
    distinct?: SectionResponseScalarFieldEnum | SectionResponseScalarFieldEnum[]
  }

  /**
   * SectionResponse create
   */
  export type SectionResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionResponse
     */
    select?: SectionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionResponse
     */
    omit?: SectionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a SectionResponse.
     */
    data: XOR<SectionResponseCreateInput, SectionResponseUncheckedCreateInput>
  }

  /**
   * SectionResponse createMany
   */
  export type SectionResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SectionResponses.
     */
    data: SectionResponseCreateManyInput | SectionResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SectionResponse createManyAndReturn
   */
  export type SectionResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionResponse
     */
    select?: SectionResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SectionResponse
     */
    omit?: SectionResponseOmit<ExtArgs> | null
    /**
     * The data used to create many SectionResponses.
     */
    data: SectionResponseCreateManyInput | SectionResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SectionResponse update
   */
  export type SectionResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionResponse
     */
    select?: SectionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionResponse
     */
    omit?: SectionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a SectionResponse.
     */
    data: XOR<SectionResponseUpdateInput, SectionResponseUncheckedUpdateInput>
    /**
     * Choose, which SectionResponse to update.
     */
    where: SectionResponseWhereUniqueInput
  }

  /**
   * SectionResponse updateMany
   */
  export type SectionResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SectionResponses.
     */
    data: XOR<SectionResponseUpdateManyMutationInput, SectionResponseUncheckedUpdateManyInput>
    /**
     * Filter which SectionResponses to update
     */
    where?: SectionResponseWhereInput
    /**
     * Limit how many SectionResponses to update.
     */
    limit?: number
  }

  /**
   * SectionResponse updateManyAndReturn
   */
  export type SectionResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionResponse
     */
    select?: SectionResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SectionResponse
     */
    omit?: SectionResponseOmit<ExtArgs> | null
    /**
     * The data used to update SectionResponses.
     */
    data: XOR<SectionResponseUpdateManyMutationInput, SectionResponseUncheckedUpdateManyInput>
    /**
     * Filter which SectionResponses to update
     */
    where?: SectionResponseWhereInput
    /**
     * Limit how many SectionResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SectionResponse upsert
   */
  export type SectionResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionResponse
     */
    select?: SectionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionResponse
     */
    omit?: SectionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the SectionResponse to update in case it exists.
     */
    where: SectionResponseWhereUniqueInput
    /**
     * In case the SectionResponse found by the `where` argument doesn't exist, create a new SectionResponse with this data.
     */
    create: XOR<SectionResponseCreateInput, SectionResponseUncheckedCreateInput>
    /**
     * In case the SectionResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionResponseUpdateInput, SectionResponseUncheckedUpdateInput>
  }

  /**
   * SectionResponse delete
   */
  export type SectionResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionResponse
     */
    select?: SectionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionResponse
     */
    omit?: SectionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionResponseInclude<ExtArgs> | null
    /**
     * Filter which SectionResponse to delete.
     */
    where: SectionResponseWhereUniqueInput
  }

  /**
   * SectionResponse deleteMany
   */
  export type SectionResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SectionResponses to delete
     */
    where?: SectionResponseWhereInput
    /**
     * Limit how many SectionResponses to delete.
     */
    limit?: number
  }

  /**
   * SectionResponse.questionResponses
   */
  export type SectionResponse$questionResponsesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    where?: QuestionResponseWhereInput
    orderBy?: QuestionResponseOrderByWithRelationInput | QuestionResponseOrderByWithRelationInput[]
    cursor?: QuestionResponseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionResponseScalarFieldEnum | QuestionResponseScalarFieldEnum[]
  }

  /**
   * SectionResponse without action
   */
  export type SectionResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SectionResponse
     */
    select?: SectionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SectionResponse
     */
    omit?: SectionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionResponseInclude<ExtArgs> | null
  }


  /**
   * Model QuestionResponse
   */

  export type AggregateQuestionResponse = {
    _count: QuestionResponseCountAggregateOutputType | null
    _avg: QuestionResponseAvgAggregateOutputType | null
    _sum: QuestionResponseSumAggregateOutputType | null
    _min: QuestionResponseMinAggregateOutputType | null
    _max: QuestionResponseMaxAggregateOutputType | null
  }

  export type QuestionResponseAvgAggregateOutputType = {
    ID: number | null
    sectionResponseID: number | null
  }

  export type QuestionResponseSumAggregateOutputType = {
    ID: number | null
    sectionResponseID: number | null
  }

  export type QuestionResponseMinAggregateOutputType = {
    ID: number | null
    questionText: string | null
    answer: string | null
    sectionResponseID: number | null
  }

  export type QuestionResponseMaxAggregateOutputType = {
    ID: number | null
    questionText: string | null
    answer: string | null
    sectionResponseID: number | null
  }

  export type QuestionResponseCountAggregateOutputType = {
    ID: number
    questionText: number
    answer: number
    sectionResponseID: number
    _all: number
  }


  export type QuestionResponseAvgAggregateInputType = {
    ID?: true
    sectionResponseID?: true
  }

  export type QuestionResponseSumAggregateInputType = {
    ID?: true
    sectionResponseID?: true
  }

  export type QuestionResponseMinAggregateInputType = {
    ID?: true
    questionText?: true
    answer?: true
    sectionResponseID?: true
  }

  export type QuestionResponseMaxAggregateInputType = {
    ID?: true
    questionText?: true
    answer?: true
    sectionResponseID?: true
  }

  export type QuestionResponseCountAggregateInputType = {
    ID?: true
    questionText?: true
    answer?: true
    sectionResponseID?: true
    _all?: true
  }

  export type QuestionResponseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionResponse to aggregate.
     */
    where?: QuestionResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionResponses to fetch.
     */
    orderBy?: QuestionResponseOrderByWithRelationInput | QuestionResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionResponses
    **/
    _count?: true | QuestionResponseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionResponseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionResponseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionResponseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionResponseMaxAggregateInputType
  }

  export type GetQuestionResponseAggregateType<T extends QuestionResponseAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionResponse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionResponse[P]>
      : GetScalarType<T[P], AggregateQuestionResponse[P]>
  }




  export type QuestionResponseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionResponseWhereInput
    orderBy?: QuestionResponseOrderByWithAggregationInput | QuestionResponseOrderByWithAggregationInput[]
    by: QuestionResponseScalarFieldEnum[] | QuestionResponseScalarFieldEnum
    having?: QuestionResponseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionResponseCountAggregateInputType | true
    _avg?: QuestionResponseAvgAggregateInputType
    _sum?: QuestionResponseSumAggregateInputType
    _min?: QuestionResponseMinAggregateInputType
    _max?: QuestionResponseMaxAggregateInputType
  }

  export type QuestionResponseGroupByOutputType = {
    ID: number
    questionText: string
    answer: string
    sectionResponseID: number
    _count: QuestionResponseCountAggregateOutputType | null
    _avg: QuestionResponseAvgAggregateOutputType | null
    _sum: QuestionResponseSumAggregateOutputType | null
    _min: QuestionResponseMinAggregateOutputType | null
    _max: QuestionResponseMaxAggregateOutputType | null
  }

  type GetQuestionResponseGroupByPayload<T extends QuestionResponseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionResponseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionResponseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionResponseGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionResponseGroupByOutputType[P]>
        }
      >
    >


  export type QuestionResponseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    questionText?: boolean
    answer?: boolean
    sectionResponseID?: boolean
    sectionResponse?: boolean | SectionResponseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionResponse"]>

  export type QuestionResponseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    questionText?: boolean
    answer?: boolean
    sectionResponseID?: boolean
    sectionResponse?: boolean | SectionResponseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionResponse"]>

  export type QuestionResponseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ID?: boolean
    questionText?: boolean
    answer?: boolean
    sectionResponseID?: boolean
    sectionResponse?: boolean | SectionResponseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionResponse"]>

  export type QuestionResponseSelectScalar = {
    ID?: boolean
    questionText?: boolean
    answer?: boolean
    sectionResponseID?: boolean
  }

  export type QuestionResponseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ID" | "questionText" | "answer" | "sectionResponseID", ExtArgs["result"]["questionResponse"]>
  export type QuestionResponseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sectionResponse?: boolean | SectionResponseDefaultArgs<ExtArgs>
  }
  export type QuestionResponseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sectionResponse?: boolean | SectionResponseDefaultArgs<ExtArgs>
  }
  export type QuestionResponseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sectionResponse?: boolean | SectionResponseDefaultArgs<ExtArgs>
  }

  export type $QuestionResponsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestionResponse"
    objects: {
      sectionResponse: Prisma.$SectionResponsePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      ID: number
      questionText: string
      answer: string
      sectionResponseID: number
    }, ExtArgs["result"]["questionResponse"]>
    composites: {}
  }

  type QuestionResponseGetPayload<S extends boolean | null | undefined | QuestionResponseDefaultArgs> = $Result.GetResult<Prisma.$QuestionResponsePayload, S>

  type QuestionResponseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionResponseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionResponseCountAggregateInputType | true
    }

  export interface QuestionResponseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestionResponse'], meta: { name: 'QuestionResponse' } }
    /**
     * Find zero or one QuestionResponse that matches the filter.
     * @param {QuestionResponseFindUniqueArgs} args - Arguments to find a QuestionResponse
     * @example
     * // Get one QuestionResponse
     * const questionResponse = await prisma.questionResponse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionResponseFindUniqueArgs>(args: SelectSubset<T, QuestionResponseFindUniqueArgs<ExtArgs>>): Prisma__QuestionResponseClient<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one QuestionResponse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionResponseFindUniqueOrThrowArgs} args - Arguments to find a QuestionResponse
     * @example
     * // Get one QuestionResponse
     * const questionResponse = await prisma.questionResponse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionResponseFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionResponseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionResponseClient<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionResponse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionResponseFindFirstArgs} args - Arguments to find a QuestionResponse
     * @example
     * // Get one QuestionResponse
     * const questionResponse = await prisma.questionResponse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionResponseFindFirstArgs>(args?: SelectSubset<T, QuestionResponseFindFirstArgs<ExtArgs>>): Prisma__QuestionResponseClient<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first QuestionResponse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionResponseFindFirstOrThrowArgs} args - Arguments to find a QuestionResponse
     * @example
     * // Get one QuestionResponse
     * const questionResponse = await prisma.questionResponse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionResponseFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionResponseFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionResponseClient<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more QuestionResponses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionResponseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionResponses
     * const questionResponses = await prisma.questionResponse.findMany()
     * 
     * // Get first 10 QuestionResponses
     * const questionResponses = await prisma.questionResponse.findMany({ take: 10 })
     * 
     * // Only select the `ID`
     * const questionResponseWithIDOnly = await prisma.questionResponse.findMany({ select: { ID: true } })
     * 
     */
    findMany<T extends QuestionResponseFindManyArgs>(args?: SelectSubset<T, QuestionResponseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a QuestionResponse.
     * @param {QuestionResponseCreateArgs} args - Arguments to create a QuestionResponse.
     * @example
     * // Create one QuestionResponse
     * const QuestionResponse = await prisma.questionResponse.create({
     *   data: {
     *     // ... data to create a QuestionResponse
     *   }
     * })
     * 
     */
    create<T extends QuestionResponseCreateArgs>(args: SelectSubset<T, QuestionResponseCreateArgs<ExtArgs>>): Prisma__QuestionResponseClient<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many QuestionResponses.
     * @param {QuestionResponseCreateManyArgs} args - Arguments to create many QuestionResponses.
     * @example
     * // Create many QuestionResponses
     * const questionResponse = await prisma.questionResponse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionResponseCreateManyArgs>(args?: SelectSubset<T, QuestionResponseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuestionResponses and returns the data saved in the database.
     * @param {QuestionResponseCreateManyAndReturnArgs} args - Arguments to create many QuestionResponses.
     * @example
     * // Create many QuestionResponses
     * const questionResponse = await prisma.questionResponse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuestionResponses and only return the `ID`
     * const questionResponseWithIDOnly = await prisma.questionResponse.createManyAndReturn({
     *   select: { ID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionResponseCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionResponseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a QuestionResponse.
     * @param {QuestionResponseDeleteArgs} args - Arguments to delete one QuestionResponse.
     * @example
     * // Delete one QuestionResponse
     * const QuestionResponse = await prisma.questionResponse.delete({
     *   where: {
     *     // ... filter to delete one QuestionResponse
     *   }
     * })
     * 
     */
    delete<T extends QuestionResponseDeleteArgs>(args: SelectSubset<T, QuestionResponseDeleteArgs<ExtArgs>>): Prisma__QuestionResponseClient<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one QuestionResponse.
     * @param {QuestionResponseUpdateArgs} args - Arguments to update one QuestionResponse.
     * @example
     * // Update one QuestionResponse
     * const questionResponse = await prisma.questionResponse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionResponseUpdateArgs>(args: SelectSubset<T, QuestionResponseUpdateArgs<ExtArgs>>): Prisma__QuestionResponseClient<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more QuestionResponses.
     * @param {QuestionResponseDeleteManyArgs} args - Arguments to filter QuestionResponses to delete.
     * @example
     * // Delete a few QuestionResponses
     * const { count } = await prisma.questionResponse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionResponseDeleteManyArgs>(args?: SelectSubset<T, QuestionResponseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionResponseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionResponses
     * const questionResponse = await prisma.questionResponse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionResponseUpdateManyArgs>(args: SelectSubset<T, QuestionResponseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionResponses and returns the data updated in the database.
     * @param {QuestionResponseUpdateManyAndReturnArgs} args - Arguments to update many QuestionResponses.
     * @example
     * // Update many QuestionResponses
     * const questionResponse = await prisma.questionResponse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more QuestionResponses and only return the `ID`
     * const questionResponseWithIDOnly = await prisma.questionResponse.updateManyAndReturn({
     *   select: { ID: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionResponseUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionResponseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one QuestionResponse.
     * @param {QuestionResponseUpsertArgs} args - Arguments to update or create a QuestionResponse.
     * @example
     * // Update or create a QuestionResponse
     * const questionResponse = await prisma.questionResponse.upsert({
     *   create: {
     *     // ... data to create a QuestionResponse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionResponse we want to update
     *   }
     * })
     */
    upsert<T extends QuestionResponseUpsertArgs>(args: SelectSubset<T, QuestionResponseUpsertArgs<ExtArgs>>): Prisma__QuestionResponseClient<$Result.GetResult<Prisma.$QuestionResponsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of QuestionResponses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionResponseCountArgs} args - Arguments to filter QuestionResponses to count.
     * @example
     * // Count the number of QuestionResponses
     * const count = await prisma.questionResponse.count({
     *   where: {
     *     // ... the filter for the QuestionResponses we want to count
     *   }
     * })
    **/
    count<T extends QuestionResponseCountArgs>(
      args?: Subset<T, QuestionResponseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionResponseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionResponseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionResponseAggregateArgs>(args: Subset<T, QuestionResponseAggregateArgs>): Prisma.PrismaPromise<GetQuestionResponseAggregateType<T>>

    /**
     * Group by QuestionResponse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionResponseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionResponseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionResponseGroupByArgs['orderBy'] }
        : { orderBy?: QuestionResponseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionResponseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionResponseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestionResponse model
   */
  readonly fields: QuestionResponseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionResponse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionResponseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sectionResponse<T extends SectionResponseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SectionResponseDefaultArgs<ExtArgs>>): Prisma__SectionResponseClient<$Result.GetResult<Prisma.$SectionResponsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the QuestionResponse model
   */
  interface QuestionResponseFieldRefs {
    readonly ID: FieldRef<"QuestionResponse", 'Int'>
    readonly questionText: FieldRef<"QuestionResponse", 'String'>
    readonly answer: FieldRef<"QuestionResponse", 'String'>
    readonly sectionResponseID: FieldRef<"QuestionResponse", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * QuestionResponse findUnique
   */
  export type QuestionResponseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuestionResponse to fetch.
     */
    where: QuestionResponseWhereUniqueInput
  }

  /**
   * QuestionResponse findUniqueOrThrow
   */
  export type QuestionResponseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuestionResponse to fetch.
     */
    where: QuestionResponseWhereUniqueInput
  }

  /**
   * QuestionResponse findFirst
   */
  export type QuestionResponseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuestionResponse to fetch.
     */
    where?: QuestionResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionResponses to fetch.
     */
    orderBy?: QuestionResponseOrderByWithRelationInput | QuestionResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionResponses.
     */
    cursor?: QuestionResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionResponses.
     */
    distinct?: QuestionResponseScalarFieldEnum | QuestionResponseScalarFieldEnum[]
  }

  /**
   * QuestionResponse findFirstOrThrow
   */
  export type QuestionResponseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuestionResponse to fetch.
     */
    where?: QuestionResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionResponses to fetch.
     */
    orderBy?: QuestionResponseOrderByWithRelationInput | QuestionResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionResponses.
     */
    cursor?: QuestionResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionResponses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionResponses.
     */
    distinct?: QuestionResponseScalarFieldEnum | QuestionResponseScalarFieldEnum[]
  }

  /**
   * QuestionResponse findMany
   */
  export type QuestionResponseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    /**
     * Filter, which QuestionResponses to fetch.
     */
    where?: QuestionResponseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionResponses to fetch.
     */
    orderBy?: QuestionResponseOrderByWithRelationInput | QuestionResponseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionResponses.
     */
    cursor?: QuestionResponseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionResponses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionResponses.
     */
    skip?: number
    distinct?: QuestionResponseScalarFieldEnum | QuestionResponseScalarFieldEnum[]
  }

  /**
   * QuestionResponse create
   */
  export type QuestionResponseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestionResponse.
     */
    data: XOR<QuestionResponseCreateInput, QuestionResponseUncheckedCreateInput>
  }

  /**
   * QuestionResponse createMany
   */
  export type QuestionResponseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestionResponses.
     */
    data: QuestionResponseCreateManyInput | QuestionResponseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestionResponse createManyAndReturn
   */
  export type QuestionResponseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * The data used to create many QuestionResponses.
     */
    data: QuestionResponseCreateManyInput | QuestionResponseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionResponse update
   */
  export type QuestionResponseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestionResponse.
     */
    data: XOR<QuestionResponseUpdateInput, QuestionResponseUncheckedUpdateInput>
    /**
     * Choose, which QuestionResponse to update.
     */
    where: QuestionResponseWhereUniqueInput
  }

  /**
   * QuestionResponse updateMany
   */
  export type QuestionResponseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestionResponses.
     */
    data: XOR<QuestionResponseUpdateManyMutationInput, QuestionResponseUncheckedUpdateManyInput>
    /**
     * Filter which QuestionResponses to update
     */
    where?: QuestionResponseWhereInput
    /**
     * Limit how many QuestionResponses to update.
     */
    limit?: number
  }

  /**
   * QuestionResponse updateManyAndReturn
   */
  export type QuestionResponseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * The data used to update QuestionResponses.
     */
    data: XOR<QuestionResponseUpdateManyMutationInput, QuestionResponseUncheckedUpdateManyInput>
    /**
     * Filter which QuestionResponses to update
     */
    where?: QuestionResponseWhereInput
    /**
     * Limit how many QuestionResponses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionResponse upsert
   */
  export type QuestionResponseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestionResponse to update in case it exists.
     */
    where: QuestionResponseWhereUniqueInput
    /**
     * In case the QuestionResponse found by the `where` argument doesn't exist, create a new QuestionResponse with this data.
     */
    create: XOR<QuestionResponseCreateInput, QuestionResponseUncheckedCreateInput>
    /**
     * In case the QuestionResponse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionResponseUpdateInput, QuestionResponseUncheckedUpdateInput>
  }

  /**
   * QuestionResponse delete
   */
  export type QuestionResponseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
    /**
     * Filter which QuestionResponse to delete.
     */
    where: QuestionResponseWhereUniqueInput
  }

  /**
   * QuestionResponse deleteMany
   */
  export type QuestionResponseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionResponses to delete
     */
    where?: QuestionResponseWhereInput
    /**
     * Limit how many QuestionResponses to delete.
     */
    limit?: number
  }

  /**
   * QuestionResponse without action
   */
  export type QuestionResponseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionResponse
     */
    select?: QuestionResponseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the QuestionResponse
     */
    omit?: QuestionResponseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionResponseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CustomerScalarFieldEnum: {
    ID: 'ID',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    ID: 'ID',
    role: 'role',
    firstName: 'firstName',
    lastName: 'lastName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    password: 'password'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const EngineerScalarFieldEnum: {
    ID: 'ID',
    role: 'role',
    firstName: 'firstName',
    lastName: 'lastName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    password: 'password'
  };

  export type EngineerScalarFieldEnum = (typeof EngineerScalarFieldEnum)[keyof typeof EngineerScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    ID: 'ID',
    name: 'name',
    adminID: 'adminID',
    formTemplateID: 'formTemplateID',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const CustomerServiceScalarFieldEnum: {
    ID: 'ID',
    customerID: 'customerID',
    serviceID: 'serviceID',
    assignedAt: 'assignedAt'
  };

  export type CustomerServiceScalarFieldEnum = (typeof CustomerServiceScalarFieldEnum)[keyof typeof CustomerServiceScalarFieldEnum]


  export const VPNScalarFieldEnum: {
    ID: 'ID',
    name: 'name',
    peerIP: 'peerIP',
    status: 'status',
    adminID: 'adminID',
    engineerID: 'engineerID',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VPNScalarFieldEnum = (typeof VPNScalarFieldEnum)[keyof typeof VPNScalarFieldEnum]


  export const FormTemplateScalarFieldEnum: {
    ID: 'ID',
    name: 'name',
    createdByID: 'createdByID',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FormTemplateScalarFieldEnum = (typeof FormTemplateScalarFieldEnum)[keyof typeof FormTemplateScalarFieldEnum]


  export const SectionTemplateScalarFieldEnum: {
    ID: 'ID',
    name: 'name',
    formID: 'formID'
  };

  export type SectionTemplateScalarFieldEnum = (typeof SectionTemplateScalarFieldEnum)[keyof typeof SectionTemplateScalarFieldEnum]


  export const QuestionTemplateScalarFieldEnum: {
    ID: 'ID',
    text: 'text',
    sectionID: 'sectionID'
  };

  export type QuestionTemplateScalarFieldEnum = (typeof QuestionTemplateScalarFieldEnum)[keyof typeof QuestionTemplateScalarFieldEnum]


  export const FormResponseScalarFieldEnum: {
    ID: 'ID',
    filledAt: 'filledAt',
    updatedAt: 'updatedAt',
    engineerID: 'engineerID',
    customerServiceID: 'customerServiceID',
    formTemplateID: 'formTemplateID'
  };

  export type FormResponseScalarFieldEnum = (typeof FormResponseScalarFieldEnum)[keyof typeof FormResponseScalarFieldEnum]


  export const SectionResponseScalarFieldEnum: {
    ID: 'ID',
    sectionName: 'sectionName',
    formResponseID: 'formResponseID'
  };

  export type SectionResponseScalarFieldEnum = (typeof SectionResponseScalarFieldEnum)[keyof typeof SectionResponseScalarFieldEnum]


  export const QuestionResponseScalarFieldEnum: {
    ID: 'ID',
    questionText: 'questionText',
    answer: 'answer',
    sectionResponseID: 'sectionResponseID'
  };

  export type QuestionResponseScalarFieldEnum = (typeof QuestionResponseScalarFieldEnum)[keyof typeof QuestionResponseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    ID?: IntFilter<"Customer"> | number
    name?: StringFilter<"Customer"> | string
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    customerServices?: CustomerServiceListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    ID?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    customerServices?: CustomerServiceOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    name?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    customerServices?: CustomerServiceListRelationFilter
  }, "ID" | "name">

  export type CustomerOrderByWithAggregationInput = {
    ID?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _avg?: CustomerAvgOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
    _sum?: CustomerSumOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"Customer"> | number
    name?: StringWithAggregatesFilter<"Customer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    ID?: IntFilter<"Admin"> | number
    role?: EnumRoleFilter<"Admin"> | $Enums.Role
    firstName?: StringFilter<"Admin"> | string
    lastName?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    services?: ServiceListRelationFilter
    vpns?: VPNListRelationFilter
    formTemplates?: FormTemplateListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    ID?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    services?: ServiceOrderByRelationAggregateInput
    vpns?: VPNOrderByRelationAggregateInput
    formTemplates?: FormTemplateOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    role?: EnumRoleFilter<"Admin"> | $Enums.Role
    firstName?: StringFilter<"Admin"> | string
    lastName?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    password?: StringFilter<"Admin"> | string
    services?: ServiceListRelationFilter
    vpns?: VPNListRelationFilter
    formTemplates?: FormTemplateListRelationFilter
  }, "ID" | "email">

  export type AdminOrderByWithAggregationInput = {
    ID?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"Admin"> | number
    role?: EnumRoleWithAggregatesFilter<"Admin"> | $Enums.Role
    firstName?: StringWithAggregatesFilter<"Admin"> | string
    lastName?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
  }

  export type EngineerWhereInput = {
    AND?: EngineerWhereInput | EngineerWhereInput[]
    OR?: EngineerWhereInput[]
    NOT?: EngineerWhereInput | EngineerWhereInput[]
    ID?: IntFilter<"Engineer"> | number
    role?: EnumRoleFilter<"Engineer"> | $Enums.Role
    firstName?: StringFilter<"Engineer"> | string
    lastName?: StringFilter<"Engineer"> | string
    createdAt?: DateTimeFilter<"Engineer"> | Date | string
    updatedAt?: DateTimeFilter<"Engineer"> | Date | string
    email?: StringFilter<"Engineer"> | string
    password?: StringFilter<"Engineer"> | string
    formResponses?: FormResponseListRelationFilter
    vpns?: VPNListRelationFilter
  }

  export type EngineerOrderByWithRelationInput = {
    ID?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    formResponses?: FormResponseOrderByRelationAggregateInput
    vpns?: VPNOrderByRelationAggregateInput
  }

  export type EngineerWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    email?: string
    AND?: EngineerWhereInput | EngineerWhereInput[]
    OR?: EngineerWhereInput[]
    NOT?: EngineerWhereInput | EngineerWhereInput[]
    role?: EnumRoleFilter<"Engineer"> | $Enums.Role
    firstName?: StringFilter<"Engineer"> | string
    lastName?: StringFilter<"Engineer"> | string
    createdAt?: DateTimeFilter<"Engineer"> | Date | string
    updatedAt?: DateTimeFilter<"Engineer"> | Date | string
    password?: StringFilter<"Engineer"> | string
    formResponses?: FormResponseListRelationFilter
    vpns?: VPNListRelationFilter
  }, "ID" | "email">

  export type EngineerOrderByWithAggregationInput = {
    ID?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: EngineerCountOrderByAggregateInput
    _avg?: EngineerAvgOrderByAggregateInput
    _max?: EngineerMaxOrderByAggregateInput
    _min?: EngineerMinOrderByAggregateInput
    _sum?: EngineerSumOrderByAggregateInput
  }

  export type EngineerScalarWhereWithAggregatesInput = {
    AND?: EngineerScalarWhereWithAggregatesInput | EngineerScalarWhereWithAggregatesInput[]
    OR?: EngineerScalarWhereWithAggregatesInput[]
    NOT?: EngineerScalarWhereWithAggregatesInput | EngineerScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"Engineer"> | number
    role?: EnumRoleWithAggregatesFilter<"Engineer"> | $Enums.Role
    firstName?: StringWithAggregatesFilter<"Engineer"> | string
    lastName?: StringWithAggregatesFilter<"Engineer"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Engineer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Engineer"> | Date | string
    email?: StringWithAggregatesFilter<"Engineer"> | string
    password?: StringWithAggregatesFilter<"Engineer"> | string
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    ID?: IntFilter<"Service"> | number
    name?: StringFilter<"Service"> | string
    adminID?: IntFilter<"Service"> | number
    formTemplateID?: IntFilter<"Service"> | number
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    formTemplate?: XOR<FormTemplateScalarRelationFilter, FormTemplateWhereInput>
    customerServices?: CustomerServiceListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    ID?: SortOrder
    name?: SortOrder
    adminID?: SortOrder
    formTemplateID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admin?: AdminOrderByWithRelationInput
    formTemplate?: FormTemplateOrderByWithRelationInput
    customerServices?: CustomerServiceOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    name?: StringFilter<"Service"> | string
    adminID?: IntFilter<"Service"> | number
    formTemplateID?: IntFilter<"Service"> | number
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    formTemplate?: XOR<FormTemplateScalarRelationFilter, FormTemplateWhereInput>
    customerServices?: CustomerServiceListRelationFilter
  }, "ID">

  export type ServiceOrderByWithAggregationInput = {
    ID?: SortOrder
    name?: SortOrder
    adminID?: SortOrder
    formTemplateID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"Service"> | number
    name?: StringWithAggregatesFilter<"Service"> | string
    adminID?: IntWithAggregatesFilter<"Service"> | number
    formTemplateID?: IntWithAggregatesFilter<"Service"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type CustomerServiceWhereInput = {
    AND?: CustomerServiceWhereInput | CustomerServiceWhereInput[]
    OR?: CustomerServiceWhereInput[]
    NOT?: CustomerServiceWhereInput | CustomerServiceWhereInput[]
    ID?: IntFilter<"CustomerService"> | number
    customerID?: IntFilter<"CustomerService"> | number
    serviceID?: IntFilter<"CustomerService"> | number
    assignedAt?: DateTimeFilter<"CustomerService"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    formResponses?: FormResponseListRelationFilter
  }

  export type CustomerServiceOrderByWithRelationInput = {
    ID?: SortOrder
    customerID?: SortOrder
    serviceID?: SortOrder
    assignedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    service?: ServiceOrderByWithRelationInput
    formResponses?: FormResponseOrderByRelationAggregateInput
  }

  export type CustomerServiceWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    customerID_serviceID?: CustomerServiceCustomerIDServiceIDCompoundUniqueInput
    AND?: CustomerServiceWhereInput | CustomerServiceWhereInput[]
    OR?: CustomerServiceWhereInput[]
    NOT?: CustomerServiceWhereInput | CustomerServiceWhereInput[]
    customerID?: IntFilter<"CustomerService"> | number
    serviceID?: IntFilter<"CustomerService"> | number
    assignedAt?: DateTimeFilter<"CustomerService"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    formResponses?: FormResponseListRelationFilter
  }, "ID" | "customerID_serviceID">

  export type CustomerServiceOrderByWithAggregationInput = {
    ID?: SortOrder
    customerID?: SortOrder
    serviceID?: SortOrder
    assignedAt?: SortOrder
    _count?: CustomerServiceCountOrderByAggregateInput
    _avg?: CustomerServiceAvgOrderByAggregateInput
    _max?: CustomerServiceMaxOrderByAggregateInput
    _min?: CustomerServiceMinOrderByAggregateInput
    _sum?: CustomerServiceSumOrderByAggregateInput
  }

  export type CustomerServiceScalarWhereWithAggregatesInput = {
    AND?: CustomerServiceScalarWhereWithAggregatesInput | CustomerServiceScalarWhereWithAggregatesInput[]
    OR?: CustomerServiceScalarWhereWithAggregatesInput[]
    NOT?: CustomerServiceScalarWhereWithAggregatesInput | CustomerServiceScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"CustomerService"> | number
    customerID?: IntWithAggregatesFilter<"CustomerService"> | number
    serviceID?: IntWithAggregatesFilter<"CustomerService"> | number
    assignedAt?: DateTimeWithAggregatesFilter<"CustomerService"> | Date | string
  }

  export type VPNWhereInput = {
    AND?: VPNWhereInput | VPNWhereInput[]
    OR?: VPNWhereInput[]
    NOT?: VPNWhereInput | VPNWhereInput[]
    ID?: IntFilter<"VPN"> | number
    name?: StringFilter<"VPN"> | string
    peerIP?: StringFilter<"VPN"> | string
    status?: StringFilter<"VPN"> | string
    adminID?: IntFilter<"VPN"> | number
    engineerID?: IntFilter<"VPN"> | number
    createdAt?: DateTimeFilter<"VPN"> | Date | string
    updatedAt?: DateTimeFilter<"VPN"> | Date | string
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    engineer?: XOR<EngineerScalarRelationFilter, EngineerWhereInput>
  }

  export type VPNOrderByWithRelationInput = {
    ID?: SortOrder
    name?: SortOrder
    peerIP?: SortOrder
    status?: SortOrder
    adminID?: SortOrder
    engineerID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    admin?: AdminOrderByWithRelationInput
    engineer?: EngineerOrderByWithRelationInput
  }

  export type VPNWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: VPNWhereInput | VPNWhereInput[]
    OR?: VPNWhereInput[]
    NOT?: VPNWhereInput | VPNWhereInput[]
    name?: StringFilter<"VPN"> | string
    peerIP?: StringFilter<"VPN"> | string
    status?: StringFilter<"VPN"> | string
    adminID?: IntFilter<"VPN"> | number
    engineerID?: IntFilter<"VPN"> | number
    createdAt?: DateTimeFilter<"VPN"> | Date | string
    updatedAt?: DateTimeFilter<"VPN"> | Date | string
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    engineer?: XOR<EngineerScalarRelationFilter, EngineerWhereInput>
  }, "ID">

  export type VPNOrderByWithAggregationInput = {
    ID?: SortOrder
    name?: SortOrder
    peerIP?: SortOrder
    status?: SortOrder
    adminID?: SortOrder
    engineerID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VPNCountOrderByAggregateInput
    _avg?: VPNAvgOrderByAggregateInput
    _max?: VPNMaxOrderByAggregateInput
    _min?: VPNMinOrderByAggregateInput
    _sum?: VPNSumOrderByAggregateInput
  }

  export type VPNScalarWhereWithAggregatesInput = {
    AND?: VPNScalarWhereWithAggregatesInput | VPNScalarWhereWithAggregatesInput[]
    OR?: VPNScalarWhereWithAggregatesInput[]
    NOT?: VPNScalarWhereWithAggregatesInput | VPNScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"VPN"> | number
    name?: StringWithAggregatesFilter<"VPN"> | string
    peerIP?: StringWithAggregatesFilter<"VPN"> | string
    status?: StringWithAggregatesFilter<"VPN"> | string
    adminID?: IntWithAggregatesFilter<"VPN"> | number
    engineerID?: IntWithAggregatesFilter<"VPN"> | number
    createdAt?: DateTimeWithAggregatesFilter<"VPN"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"VPN"> | Date | string
  }

  export type FormTemplateWhereInput = {
    AND?: FormTemplateWhereInput | FormTemplateWhereInput[]
    OR?: FormTemplateWhereInput[]
    NOT?: FormTemplateWhereInput | FormTemplateWhereInput[]
    ID?: IntFilter<"FormTemplate"> | number
    name?: StringFilter<"FormTemplate"> | string
    createdByID?: IntFilter<"FormTemplate"> | number
    createdAt?: DateTimeFilter<"FormTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"FormTemplate"> | Date | string
    createdBy?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    sections?: SectionTemplateListRelationFilter
    services?: ServiceListRelationFilter
    formResponse?: FormResponseListRelationFilter
  }

  export type FormTemplateOrderByWithRelationInput = {
    ID?: SortOrder
    name?: SortOrder
    createdByID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdBy?: AdminOrderByWithRelationInput
    sections?: SectionTemplateOrderByRelationAggregateInput
    services?: ServiceOrderByRelationAggregateInput
    formResponse?: FormResponseOrderByRelationAggregateInput
  }

  export type FormTemplateWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: FormTemplateWhereInput | FormTemplateWhereInput[]
    OR?: FormTemplateWhereInput[]
    NOT?: FormTemplateWhereInput | FormTemplateWhereInput[]
    name?: StringFilter<"FormTemplate"> | string
    createdByID?: IntFilter<"FormTemplate"> | number
    createdAt?: DateTimeFilter<"FormTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"FormTemplate"> | Date | string
    createdBy?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    sections?: SectionTemplateListRelationFilter
    services?: ServiceListRelationFilter
    formResponse?: FormResponseListRelationFilter
  }, "ID">

  export type FormTemplateOrderByWithAggregationInput = {
    ID?: SortOrder
    name?: SortOrder
    createdByID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FormTemplateCountOrderByAggregateInput
    _avg?: FormTemplateAvgOrderByAggregateInput
    _max?: FormTemplateMaxOrderByAggregateInput
    _min?: FormTemplateMinOrderByAggregateInput
    _sum?: FormTemplateSumOrderByAggregateInput
  }

  export type FormTemplateScalarWhereWithAggregatesInput = {
    AND?: FormTemplateScalarWhereWithAggregatesInput | FormTemplateScalarWhereWithAggregatesInput[]
    OR?: FormTemplateScalarWhereWithAggregatesInput[]
    NOT?: FormTemplateScalarWhereWithAggregatesInput | FormTemplateScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"FormTemplate"> | number
    name?: StringWithAggregatesFilter<"FormTemplate"> | string
    createdByID?: IntWithAggregatesFilter<"FormTemplate"> | number
    createdAt?: DateTimeWithAggregatesFilter<"FormTemplate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FormTemplate"> | Date | string
  }

  export type SectionTemplateWhereInput = {
    AND?: SectionTemplateWhereInput | SectionTemplateWhereInput[]
    OR?: SectionTemplateWhereInput[]
    NOT?: SectionTemplateWhereInput | SectionTemplateWhereInput[]
    ID?: IntFilter<"SectionTemplate"> | number
    name?: StringFilter<"SectionTemplate"> | string
    formID?: IntFilter<"SectionTemplate"> | number
    form?: XOR<FormTemplateScalarRelationFilter, FormTemplateWhereInput>
    questions?: QuestionTemplateListRelationFilter
  }

  export type SectionTemplateOrderByWithRelationInput = {
    ID?: SortOrder
    name?: SortOrder
    formID?: SortOrder
    form?: FormTemplateOrderByWithRelationInput
    questions?: QuestionTemplateOrderByRelationAggregateInput
  }

  export type SectionTemplateWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: SectionTemplateWhereInput | SectionTemplateWhereInput[]
    OR?: SectionTemplateWhereInput[]
    NOT?: SectionTemplateWhereInput | SectionTemplateWhereInput[]
    name?: StringFilter<"SectionTemplate"> | string
    formID?: IntFilter<"SectionTemplate"> | number
    form?: XOR<FormTemplateScalarRelationFilter, FormTemplateWhereInput>
    questions?: QuestionTemplateListRelationFilter
  }, "ID">

  export type SectionTemplateOrderByWithAggregationInput = {
    ID?: SortOrder
    name?: SortOrder
    formID?: SortOrder
    _count?: SectionTemplateCountOrderByAggregateInput
    _avg?: SectionTemplateAvgOrderByAggregateInput
    _max?: SectionTemplateMaxOrderByAggregateInput
    _min?: SectionTemplateMinOrderByAggregateInput
    _sum?: SectionTemplateSumOrderByAggregateInput
  }

  export type SectionTemplateScalarWhereWithAggregatesInput = {
    AND?: SectionTemplateScalarWhereWithAggregatesInput | SectionTemplateScalarWhereWithAggregatesInput[]
    OR?: SectionTemplateScalarWhereWithAggregatesInput[]
    NOT?: SectionTemplateScalarWhereWithAggregatesInput | SectionTemplateScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"SectionTemplate"> | number
    name?: StringWithAggregatesFilter<"SectionTemplate"> | string
    formID?: IntWithAggregatesFilter<"SectionTemplate"> | number
  }

  export type QuestionTemplateWhereInput = {
    AND?: QuestionTemplateWhereInput | QuestionTemplateWhereInput[]
    OR?: QuestionTemplateWhereInput[]
    NOT?: QuestionTemplateWhereInput | QuestionTemplateWhereInput[]
    ID?: IntFilter<"QuestionTemplate"> | number
    text?: StringFilter<"QuestionTemplate"> | string
    sectionID?: IntFilter<"QuestionTemplate"> | number
    section?: XOR<SectionTemplateScalarRelationFilter, SectionTemplateWhereInput>
  }

  export type QuestionTemplateOrderByWithRelationInput = {
    ID?: SortOrder
    text?: SortOrder
    sectionID?: SortOrder
    section?: SectionTemplateOrderByWithRelationInput
  }

  export type QuestionTemplateWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: QuestionTemplateWhereInput | QuestionTemplateWhereInput[]
    OR?: QuestionTemplateWhereInput[]
    NOT?: QuestionTemplateWhereInput | QuestionTemplateWhereInput[]
    text?: StringFilter<"QuestionTemplate"> | string
    sectionID?: IntFilter<"QuestionTemplate"> | number
    section?: XOR<SectionTemplateScalarRelationFilter, SectionTemplateWhereInput>
  }, "ID">

  export type QuestionTemplateOrderByWithAggregationInput = {
    ID?: SortOrder
    text?: SortOrder
    sectionID?: SortOrder
    _count?: QuestionTemplateCountOrderByAggregateInput
    _avg?: QuestionTemplateAvgOrderByAggregateInput
    _max?: QuestionTemplateMaxOrderByAggregateInput
    _min?: QuestionTemplateMinOrderByAggregateInput
    _sum?: QuestionTemplateSumOrderByAggregateInput
  }

  export type QuestionTemplateScalarWhereWithAggregatesInput = {
    AND?: QuestionTemplateScalarWhereWithAggregatesInput | QuestionTemplateScalarWhereWithAggregatesInput[]
    OR?: QuestionTemplateScalarWhereWithAggregatesInput[]
    NOT?: QuestionTemplateScalarWhereWithAggregatesInput | QuestionTemplateScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"QuestionTemplate"> | number
    text?: StringWithAggregatesFilter<"QuestionTemplate"> | string
    sectionID?: IntWithAggregatesFilter<"QuestionTemplate"> | number
  }

  export type FormResponseWhereInput = {
    AND?: FormResponseWhereInput | FormResponseWhereInput[]
    OR?: FormResponseWhereInput[]
    NOT?: FormResponseWhereInput | FormResponseWhereInput[]
    ID?: IntFilter<"FormResponse"> | number
    filledAt?: DateTimeFilter<"FormResponse"> | Date | string
    updatedAt?: DateTimeFilter<"FormResponse"> | Date | string
    engineerID?: IntFilter<"FormResponse"> | number
    customerServiceID?: IntFilter<"FormResponse"> | number
    formTemplateID?: IntFilter<"FormResponse"> | number
    engineer?: XOR<EngineerScalarRelationFilter, EngineerWhereInput>
    customerService?: XOR<CustomerServiceScalarRelationFilter, CustomerServiceWhereInput>
    formTemplate?: XOR<FormTemplateScalarRelationFilter, FormTemplateWhereInput>
    sectionResponses?: SectionResponseListRelationFilter
  }

  export type FormResponseOrderByWithRelationInput = {
    ID?: SortOrder
    filledAt?: SortOrder
    updatedAt?: SortOrder
    engineerID?: SortOrder
    customerServiceID?: SortOrder
    formTemplateID?: SortOrder
    engineer?: EngineerOrderByWithRelationInput
    customerService?: CustomerServiceOrderByWithRelationInput
    formTemplate?: FormTemplateOrderByWithRelationInput
    sectionResponses?: SectionResponseOrderByRelationAggregateInput
  }

  export type FormResponseWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: FormResponseWhereInput | FormResponseWhereInput[]
    OR?: FormResponseWhereInput[]
    NOT?: FormResponseWhereInput | FormResponseWhereInput[]
    filledAt?: DateTimeFilter<"FormResponse"> | Date | string
    updatedAt?: DateTimeFilter<"FormResponse"> | Date | string
    engineerID?: IntFilter<"FormResponse"> | number
    customerServiceID?: IntFilter<"FormResponse"> | number
    formTemplateID?: IntFilter<"FormResponse"> | number
    engineer?: XOR<EngineerScalarRelationFilter, EngineerWhereInput>
    customerService?: XOR<CustomerServiceScalarRelationFilter, CustomerServiceWhereInput>
    formTemplate?: XOR<FormTemplateScalarRelationFilter, FormTemplateWhereInput>
    sectionResponses?: SectionResponseListRelationFilter
  }, "ID">

  export type FormResponseOrderByWithAggregationInput = {
    ID?: SortOrder
    filledAt?: SortOrder
    updatedAt?: SortOrder
    engineerID?: SortOrder
    customerServiceID?: SortOrder
    formTemplateID?: SortOrder
    _count?: FormResponseCountOrderByAggregateInput
    _avg?: FormResponseAvgOrderByAggregateInput
    _max?: FormResponseMaxOrderByAggregateInput
    _min?: FormResponseMinOrderByAggregateInput
    _sum?: FormResponseSumOrderByAggregateInput
  }

  export type FormResponseScalarWhereWithAggregatesInput = {
    AND?: FormResponseScalarWhereWithAggregatesInput | FormResponseScalarWhereWithAggregatesInput[]
    OR?: FormResponseScalarWhereWithAggregatesInput[]
    NOT?: FormResponseScalarWhereWithAggregatesInput | FormResponseScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"FormResponse"> | number
    filledAt?: DateTimeWithAggregatesFilter<"FormResponse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FormResponse"> | Date | string
    engineerID?: IntWithAggregatesFilter<"FormResponse"> | number
    customerServiceID?: IntWithAggregatesFilter<"FormResponse"> | number
    formTemplateID?: IntWithAggregatesFilter<"FormResponse"> | number
  }

  export type SectionResponseWhereInput = {
    AND?: SectionResponseWhereInput | SectionResponseWhereInput[]
    OR?: SectionResponseWhereInput[]
    NOT?: SectionResponseWhereInput | SectionResponseWhereInput[]
    ID?: IntFilter<"SectionResponse"> | number
    sectionName?: StringFilter<"SectionResponse"> | string
    formResponseID?: IntFilter<"SectionResponse"> | number
    formResponses?: XOR<FormResponseScalarRelationFilter, FormResponseWhereInput>
    questionResponses?: QuestionResponseListRelationFilter
  }

  export type SectionResponseOrderByWithRelationInput = {
    ID?: SortOrder
    sectionName?: SortOrder
    formResponseID?: SortOrder
    formResponses?: FormResponseOrderByWithRelationInput
    questionResponses?: QuestionResponseOrderByRelationAggregateInput
  }

  export type SectionResponseWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: SectionResponseWhereInput | SectionResponseWhereInput[]
    OR?: SectionResponseWhereInput[]
    NOT?: SectionResponseWhereInput | SectionResponseWhereInput[]
    sectionName?: StringFilter<"SectionResponse"> | string
    formResponseID?: IntFilter<"SectionResponse"> | number
    formResponses?: XOR<FormResponseScalarRelationFilter, FormResponseWhereInput>
    questionResponses?: QuestionResponseListRelationFilter
  }, "ID">

  export type SectionResponseOrderByWithAggregationInput = {
    ID?: SortOrder
    sectionName?: SortOrder
    formResponseID?: SortOrder
    _count?: SectionResponseCountOrderByAggregateInput
    _avg?: SectionResponseAvgOrderByAggregateInput
    _max?: SectionResponseMaxOrderByAggregateInput
    _min?: SectionResponseMinOrderByAggregateInput
    _sum?: SectionResponseSumOrderByAggregateInput
  }

  export type SectionResponseScalarWhereWithAggregatesInput = {
    AND?: SectionResponseScalarWhereWithAggregatesInput | SectionResponseScalarWhereWithAggregatesInput[]
    OR?: SectionResponseScalarWhereWithAggregatesInput[]
    NOT?: SectionResponseScalarWhereWithAggregatesInput | SectionResponseScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"SectionResponse"> | number
    sectionName?: StringWithAggregatesFilter<"SectionResponse"> | string
    formResponseID?: IntWithAggregatesFilter<"SectionResponse"> | number
  }

  export type QuestionResponseWhereInput = {
    AND?: QuestionResponseWhereInput | QuestionResponseWhereInput[]
    OR?: QuestionResponseWhereInput[]
    NOT?: QuestionResponseWhereInput | QuestionResponseWhereInput[]
    ID?: IntFilter<"QuestionResponse"> | number
    questionText?: StringFilter<"QuestionResponse"> | string
    answer?: StringFilter<"QuestionResponse"> | string
    sectionResponseID?: IntFilter<"QuestionResponse"> | number
    sectionResponse?: XOR<SectionResponseScalarRelationFilter, SectionResponseWhereInput>
  }

  export type QuestionResponseOrderByWithRelationInput = {
    ID?: SortOrder
    questionText?: SortOrder
    answer?: SortOrder
    sectionResponseID?: SortOrder
    sectionResponse?: SectionResponseOrderByWithRelationInput
  }

  export type QuestionResponseWhereUniqueInput = Prisma.AtLeast<{
    ID?: number
    AND?: QuestionResponseWhereInput | QuestionResponseWhereInput[]
    OR?: QuestionResponseWhereInput[]
    NOT?: QuestionResponseWhereInput | QuestionResponseWhereInput[]
    questionText?: StringFilter<"QuestionResponse"> | string
    answer?: StringFilter<"QuestionResponse"> | string
    sectionResponseID?: IntFilter<"QuestionResponse"> | number
    sectionResponse?: XOR<SectionResponseScalarRelationFilter, SectionResponseWhereInput>
  }, "ID">

  export type QuestionResponseOrderByWithAggregationInput = {
    ID?: SortOrder
    questionText?: SortOrder
    answer?: SortOrder
    sectionResponseID?: SortOrder
    _count?: QuestionResponseCountOrderByAggregateInput
    _avg?: QuestionResponseAvgOrderByAggregateInput
    _max?: QuestionResponseMaxOrderByAggregateInput
    _min?: QuestionResponseMinOrderByAggregateInput
    _sum?: QuestionResponseSumOrderByAggregateInput
  }

  export type QuestionResponseScalarWhereWithAggregatesInput = {
    AND?: QuestionResponseScalarWhereWithAggregatesInput | QuestionResponseScalarWhereWithAggregatesInput[]
    OR?: QuestionResponseScalarWhereWithAggregatesInput[]
    NOT?: QuestionResponseScalarWhereWithAggregatesInput | QuestionResponseScalarWhereWithAggregatesInput[]
    ID?: IntWithAggregatesFilter<"QuestionResponse"> | number
    questionText?: StringWithAggregatesFilter<"QuestionResponse"> | string
    answer?: StringWithAggregatesFilter<"QuestionResponse"> | string
    sectionResponseID?: IntWithAggregatesFilter<"QuestionResponse"> | number
  }

  export type CustomerCreateInput = {
    name: string
    createdAt?: Date | string
    customerServices?: CustomerServiceCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    ID?: number
    name: string
    createdAt?: Date | string
    customerServices?: CustomerServiceUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerServices?: CustomerServiceUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerServices?: CustomerServiceUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    ID?: number
    name: string
    createdAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    role: $Enums.Role
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    services?: ServiceCreateNestedManyWithoutAdminInput
    vpns?: VPNCreateNestedManyWithoutAdminInput
    formTemplates?: FormTemplateCreateNestedManyWithoutCreatedByInput
  }

  export type AdminUncheckedCreateInput = {
    ID?: number
    role: $Enums.Role
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    services?: ServiceUncheckedCreateNestedManyWithoutAdminInput
    vpns?: VPNUncheckedCreateNestedManyWithoutAdminInput
    formTemplates?: FormTemplateUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type AdminUpdateInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    services?: ServiceUpdateManyWithoutAdminNestedInput
    vpns?: VPNUpdateManyWithoutAdminNestedInput
    formTemplates?: FormTemplateUpdateManyWithoutCreatedByNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    services?: ServiceUncheckedUpdateManyWithoutAdminNestedInput
    vpns?: VPNUncheckedUpdateManyWithoutAdminNestedInput
    formTemplates?: FormTemplateUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type AdminCreateManyInput = {
    ID?: number
    role: $Enums.Role
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
  }

  export type AdminUpdateManyMutationInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type AdminUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type EngineerCreateInput = {
    role: $Enums.Role
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    formResponses?: FormResponseCreateNestedManyWithoutEngineerInput
    vpns?: VPNCreateNestedManyWithoutEngineerInput
  }

  export type EngineerUncheckedCreateInput = {
    ID?: number
    role: $Enums.Role
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    formResponses?: FormResponseUncheckedCreateNestedManyWithoutEngineerInput
    vpns?: VPNUncheckedCreateNestedManyWithoutEngineerInput
  }

  export type EngineerUpdateInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    formResponses?: FormResponseUpdateManyWithoutEngineerNestedInput
    vpns?: VPNUpdateManyWithoutEngineerNestedInput
  }

  export type EngineerUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    formResponses?: FormResponseUncheckedUpdateManyWithoutEngineerNestedInput
    vpns?: VPNUncheckedUpdateManyWithoutEngineerNestedInput
  }

  export type EngineerCreateManyInput = {
    ID?: number
    role: $Enums.Role
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
  }

  export type EngineerUpdateManyMutationInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type EngineerUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: AdminCreateNestedOneWithoutServicesInput
    formTemplate: FormTemplateCreateNestedOneWithoutServicesInput
    customerServices?: CustomerServiceCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    ID?: number
    name: string
    adminID: number
    formTemplateID: number
    createdAt?: Date | string
    updatedAt?: Date | string
    customerServices?: CustomerServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneRequiredWithoutServicesNestedInput
    formTemplate?: FormTemplateUpdateOneRequiredWithoutServicesNestedInput
    customerServices?: CustomerServiceUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    adminID?: IntFieldUpdateOperationsInput | number
    formTemplateID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerServices?: CustomerServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    ID?: number
    name: string
    adminID: number
    formTemplateID: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    adminID?: IntFieldUpdateOperationsInput | number
    formTemplateID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerServiceCreateInput = {
    assignedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutCustomerServicesInput
    service: ServiceCreateNestedOneWithoutCustomerServicesInput
    formResponses?: FormResponseCreateNestedManyWithoutCustomerServiceInput
  }

  export type CustomerServiceUncheckedCreateInput = {
    ID?: number
    customerID: number
    serviceID: number
    assignedAt?: Date | string
    formResponses?: FormResponseUncheckedCreateNestedManyWithoutCustomerServiceInput
  }

  export type CustomerServiceUpdateInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutCustomerServicesNestedInput
    service?: ServiceUpdateOneRequiredWithoutCustomerServicesNestedInput
    formResponses?: FormResponseUpdateManyWithoutCustomerServiceNestedInput
  }

  export type CustomerServiceUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    customerID?: IntFieldUpdateOperationsInput | number
    serviceID?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formResponses?: FormResponseUncheckedUpdateManyWithoutCustomerServiceNestedInput
  }

  export type CustomerServiceCreateManyInput = {
    ID?: number
    customerID: number
    serviceID: number
    assignedAt?: Date | string
  }

  export type CustomerServiceUpdateManyMutationInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerServiceUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    customerID?: IntFieldUpdateOperationsInput | number
    serviceID?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VPNCreateInput = {
    name: string
    peerIP: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: AdminCreateNestedOneWithoutVpnsInput
    engineer: EngineerCreateNestedOneWithoutVpnsInput
  }

  export type VPNUncheckedCreateInput = {
    ID?: number
    name: string
    peerIP: string
    status: string
    adminID: number
    engineerID: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VPNUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    peerIP?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneRequiredWithoutVpnsNestedInput
    engineer?: EngineerUpdateOneRequiredWithoutVpnsNestedInput
  }

  export type VPNUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    peerIP?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    adminID?: IntFieldUpdateOperationsInput | number
    engineerID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VPNCreateManyInput = {
    ID?: number
    name: string
    peerIP: string
    status: string
    adminID: number
    engineerID: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VPNUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    peerIP?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VPNUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    peerIP?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    adminID?: IntFieldUpdateOperationsInput | number
    engineerID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormTemplateCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: AdminCreateNestedOneWithoutFormTemplatesInput
    sections?: SectionTemplateCreateNestedManyWithoutFormInput
    services?: ServiceCreateNestedManyWithoutFormTemplateInput
    formResponse?: FormResponseCreateNestedManyWithoutFormTemplateInput
  }

  export type FormTemplateUncheckedCreateInput = {
    ID?: number
    name: string
    createdByID: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: SectionTemplateUncheckedCreateNestedManyWithoutFormInput
    services?: ServiceUncheckedCreateNestedManyWithoutFormTemplateInput
    formResponse?: FormResponseUncheckedCreateNestedManyWithoutFormTemplateInput
  }

  export type FormTemplateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: AdminUpdateOneRequiredWithoutFormTemplatesNestedInput
    sections?: SectionTemplateUpdateManyWithoutFormNestedInput
    services?: ServiceUpdateManyWithoutFormTemplateNestedInput
    formResponse?: FormResponseUpdateManyWithoutFormTemplateNestedInput
  }

  export type FormTemplateUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdByID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: SectionTemplateUncheckedUpdateManyWithoutFormNestedInput
    services?: ServiceUncheckedUpdateManyWithoutFormTemplateNestedInput
    formResponse?: FormResponseUncheckedUpdateManyWithoutFormTemplateNestedInput
  }

  export type FormTemplateCreateManyInput = {
    ID?: number
    name: string
    createdByID: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormTemplateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormTemplateUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdByID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectionTemplateCreateInput = {
    name: string
    form: FormTemplateCreateNestedOneWithoutSectionsInput
    questions?: QuestionTemplateCreateNestedManyWithoutSectionInput
  }

  export type SectionTemplateUncheckedCreateInput = {
    ID?: number
    name: string
    formID: number
    questions?: QuestionTemplateUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionTemplateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    form?: FormTemplateUpdateOneRequiredWithoutSectionsNestedInput
    questions?: QuestionTemplateUpdateManyWithoutSectionNestedInput
  }

  export type SectionTemplateUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    formID?: IntFieldUpdateOperationsInput | number
    questions?: QuestionTemplateUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionTemplateCreateManyInput = {
    ID?: number
    name: string
    formID: number
  }

  export type SectionTemplateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SectionTemplateUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    formID?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionTemplateCreateInput = {
    text: string
    section: SectionTemplateCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionTemplateUncheckedCreateInput = {
    ID?: number
    text: string
    sectionID: number
  }

  export type QuestionTemplateUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    section?: SectionTemplateUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionTemplateUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    sectionID?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionTemplateCreateManyInput = {
    ID?: number
    text: string
    sectionID: number
  }

  export type QuestionTemplateUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionTemplateUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    sectionID?: IntFieldUpdateOperationsInput | number
  }

  export type FormResponseCreateInput = {
    filledAt?: Date | string
    updatedAt?: Date | string
    engineer: EngineerCreateNestedOneWithoutFormResponsesInput
    customerService: CustomerServiceCreateNestedOneWithoutFormResponsesInput
    formTemplate: FormTemplateCreateNestedOneWithoutFormResponseInput
    sectionResponses?: SectionResponseCreateNestedManyWithoutFormResponsesInput
  }

  export type FormResponseUncheckedCreateInput = {
    ID?: number
    filledAt?: Date | string
    updatedAt?: Date | string
    engineerID: number
    customerServiceID: number
    formTemplateID: number
    sectionResponses?: SectionResponseUncheckedCreateNestedManyWithoutFormResponsesInput
  }

  export type FormResponseUpdateInput = {
    filledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engineer?: EngineerUpdateOneRequiredWithoutFormResponsesNestedInput
    customerService?: CustomerServiceUpdateOneRequiredWithoutFormResponsesNestedInput
    formTemplate?: FormTemplateUpdateOneRequiredWithoutFormResponseNestedInput
    sectionResponses?: SectionResponseUpdateManyWithoutFormResponsesNestedInput
  }

  export type FormResponseUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    filledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engineerID?: IntFieldUpdateOperationsInput | number
    customerServiceID?: IntFieldUpdateOperationsInput | number
    formTemplateID?: IntFieldUpdateOperationsInput | number
    sectionResponses?: SectionResponseUncheckedUpdateManyWithoutFormResponsesNestedInput
  }

  export type FormResponseCreateManyInput = {
    ID?: number
    filledAt?: Date | string
    updatedAt?: Date | string
    engineerID: number
    customerServiceID: number
    formTemplateID: number
  }

  export type FormResponseUpdateManyMutationInput = {
    filledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormResponseUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    filledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engineerID?: IntFieldUpdateOperationsInput | number
    customerServiceID?: IntFieldUpdateOperationsInput | number
    formTemplateID?: IntFieldUpdateOperationsInput | number
  }

  export type SectionResponseCreateInput = {
    sectionName: string
    formResponses: FormResponseCreateNestedOneWithoutSectionResponsesInput
    questionResponses?: QuestionResponseCreateNestedManyWithoutSectionResponseInput
  }

  export type SectionResponseUncheckedCreateInput = {
    ID?: number
    sectionName: string
    formResponseID: number
    questionResponses?: QuestionResponseUncheckedCreateNestedManyWithoutSectionResponseInput
  }

  export type SectionResponseUpdateInput = {
    sectionName?: StringFieldUpdateOperationsInput | string
    formResponses?: FormResponseUpdateOneRequiredWithoutSectionResponsesNestedInput
    questionResponses?: QuestionResponseUpdateManyWithoutSectionResponseNestedInput
  }

  export type SectionResponseUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    sectionName?: StringFieldUpdateOperationsInput | string
    formResponseID?: IntFieldUpdateOperationsInput | number
    questionResponses?: QuestionResponseUncheckedUpdateManyWithoutSectionResponseNestedInput
  }

  export type SectionResponseCreateManyInput = {
    ID?: number
    sectionName: string
    formResponseID: number
  }

  export type SectionResponseUpdateManyMutationInput = {
    sectionName?: StringFieldUpdateOperationsInput | string
  }

  export type SectionResponseUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    sectionName?: StringFieldUpdateOperationsInput | string
    formResponseID?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionResponseCreateInput = {
    questionText: string
    answer: string
    sectionResponse: SectionResponseCreateNestedOneWithoutQuestionResponsesInput
  }

  export type QuestionResponseUncheckedCreateInput = {
    ID?: number
    questionText: string
    answer: string
    sectionResponseID: number
  }

  export type QuestionResponseUpdateInput = {
    questionText?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    sectionResponse?: SectionResponseUpdateOneRequiredWithoutQuestionResponsesNestedInput
  }

  export type QuestionResponseUncheckedUpdateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    questionText?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    sectionResponseID?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionResponseCreateManyInput = {
    ID?: number
    questionText: string
    answer: string
    sectionResponseID: number
  }

  export type QuestionResponseUpdateManyMutationInput = {
    questionText?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionResponseUncheckedUpdateManyInput = {
    ID?: IntFieldUpdateOperationsInput | number
    questionText?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    sectionResponseID?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CustomerServiceListRelationFilter = {
    every?: CustomerServiceWhereInput
    some?: CustomerServiceWhereInput
    none?: CustomerServiceWhereInput
  }

  export type CustomerServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    ID?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    ID?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    ID?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type VPNListRelationFilter = {
    every?: VPNWhereInput
    some?: VPNWhereInput
    none?: VPNWhereInput
  }

  export type FormTemplateListRelationFilter = {
    every?: FormTemplateWhereInput
    some?: FormTemplateWhereInput
    none?: FormTemplateWhereInput
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VPNOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    ID?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    ID?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    ID?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type FormResponseListRelationFilter = {
    every?: FormResponseWhereInput
    some?: FormResponseWhereInput
    none?: FormResponseWhereInput
  }

  export type FormResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EngineerCountOrderByAggregateInput = {
    ID?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type EngineerAvgOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type EngineerMaxOrderByAggregateInput = {
    ID?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type EngineerMinOrderByAggregateInput = {
    ID?: SortOrder
    role?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type EngineerSumOrderByAggregateInput = {
    ID?: SortOrder
  }

  export type AdminScalarRelationFilter = {
    is?: AdminWhereInput
    isNot?: AdminWhereInput
  }

  export type FormTemplateScalarRelationFilter = {
    is?: FormTemplateWhereInput
    isNot?: FormTemplateWhereInput
  }

  export type ServiceCountOrderByAggregateInput = {
    ID?: SortOrder
    name?: SortOrder
    adminID?: SortOrder
    formTemplateID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    ID?: SortOrder
    adminID?: SortOrder
    formTemplateID?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    ID?: SortOrder
    name?: SortOrder
    adminID?: SortOrder
    formTemplateID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    ID?: SortOrder
    name?: SortOrder
    adminID?: SortOrder
    formTemplateID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    ID?: SortOrder
    adminID?: SortOrder
    formTemplateID?: SortOrder
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type CustomerServiceCustomerIDServiceIDCompoundUniqueInput = {
    customerID: number
    serviceID: number
  }

  export type CustomerServiceCountOrderByAggregateInput = {
    ID?: SortOrder
    customerID?: SortOrder
    serviceID?: SortOrder
    assignedAt?: SortOrder
  }

  export type CustomerServiceAvgOrderByAggregateInput = {
    ID?: SortOrder
    customerID?: SortOrder
    serviceID?: SortOrder
  }

  export type CustomerServiceMaxOrderByAggregateInput = {
    ID?: SortOrder
    customerID?: SortOrder
    serviceID?: SortOrder
    assignedAt?: SortOrder
  }

  export type CustomerServiceMinOrderByAggregateInput = {
    ID?: SortOrder
    customerID?: SortOrder
    serviceID?: SortOrder
    assignedAt?: SortOrder
  }

  export type CustomerServiceSumOrderByAggregateInput = {
    ID?: SortOrder
    customerID?: SortOrder
    serviceID?: SortOrder
  }

  export type EngineerScalarRelationFilter = {
    is?: EngineerWhereInput
    isNot?: EngineerWhereInput
  }

  export type VPNCountOrderByAggregateInput = {
    ID?: SortOrder
    name?: SortOrder
    peerIP?: SortOrder
    status?: SortOrder
    adminID?: SortOrder
    engineerID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VPNAvgOrderByAggregateInput = {
    ID?: SortOrder
    adminID?: SortOrder
    engineerID?: SortOrder
  }

  export type VPNMaxOrderByAggregateInput = {
    ID?: SortOrder
    name?: SortOrder
    peerIP?: SortOrder
    status?: SortOrder
    adminID?: SortOrder
    engineerID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VPNMinOrderByAggregateInput = {
    ID?: SortOrder
    name?: SortOrder
    peerIP?: SortOrder
    status?: SortOrder
    adminID?: SortOrder
    engineerID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VPNSumOrderByAggregateInput = {
    ID?: SortOrder
    adminID?: SortOrder
    engineerID?: SortOrder
  }

  export type SectionTemplateListRelationFilter = {
    every?: SectionTemplateWhereInput
    some?: SectionTemplateWhereInput
    none?: SectionTemplateWhereInput
  }

  export type SectionTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormTemplateCountOrderByAggregateInput = {
    ID?: SortOrder
    name?: SortOrder
    createdByID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormTemplateAvgOrderByAggregateInput = {
    ID?: SortOrder
    createdByID?: SortOrder
  }

  export type FormTemplateMaxOrderByAggregateInput = {
    ID?: SortOrder
    name?: SortOrder
    createdByID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormTemplateMinOrderByAggregateInput = {
    ID?: SortOrder
    name?: SortOrder
    createdByID?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormTemplateSumOrderByAggregateInput = {
    ID?: SortOrder
    createdByID?: SortOrder
  }

  export type QuestionTemplateListRelationFilter = {
    every?: QuestionTemplateWhereInput
    some?: QuestionTemplateWhereInput
    none?: QuestionTemplateWhereInput
  }

  export type QuestionTemplateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectionTemplateCountOrderByAggregateInput = {
    ID?: SortOrder
    name?: SortOrder
    formID?: SortOrder
  }

  export type SectionTemplateAvgOrderByAggregateInput = {
    ID?: SortOrder
    formID?: SortOrder
  }

  export type SectionTemplateMaxOrderByAggregateInput = {
    ID?: SortOrder
    name?: SortOrder
    formID?: SortOrder
  }

  export type SectionTemplateMinOrderByAggregateInput = {
    ID?: SortOrder
    name?: SortOrder
    formID?: SortOrder
  }

  export type SectionTemplateSumOrderByAggregateInput = {
    ID?: SortOrder
    formID?: SortOrder
  }

  export type SectionTemplateScalarRelationFilter = {
    is?: SectionTemplateWhereInput
    isNot?: SectionTemplateWhereInput
  }

  export type QuestionTemplateCountOrderByAggregateInput = {
    ID?: SortOrder
    text?: SortOrder
    sectionID?: SortOrder
  }

  export type QuestionTemplateAvgOrderByAggregateInput = {
    ID?: SortOrder
    sectionID?: SortOrder
  }

  export type QuestionTemplateMaxOrderByAggregateInput = {
    ID?: SortOrder
    text?: SortOrder
    sectionID?: SortOrder
  }

  export type QuestionTemplateMinOrderByAggregateInput = {
    ID?: SortOrder
    text?: SortOrder
    sectionID?: SortOrder
  }

  export type QuestionTemplateSumOrderByAggregateInput = {
    ID?: SortOrder
    sectionID?: SortOrder
  }

  export type CustomerServiceScalarRelationFilter = {
    is?: CustomerServiceWhereInput
    isNot?: CustomerServiceWhereInput
  }

  export type SectionResponseListRelationFilter = {
    every?: SectionResponseWhereInput
    some?: SectionResponseWhereInput
    none?: SectionResponseWhereInput
  }

  export type SectionResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormResponseCountOrderByAggregateInput = {
    ID?: SortOrder
    filledAt?: SortOrder
    updatedAt?: SortOrder
    engineerID?: SortOrder
    customerServiceID?: SortOrder
    formTemplateID?: SortOrder
  }

  export type FormResponseAvgOrderByAggregateInput = {
    ID?: SortOrder
    engineerID?: SortOrder
    customerServiceID?: SortOrder
    formTemplateID?: SortOrder
  }

  export type FormResponseMaxOrderByAggregateInput = {
    ID?: SortOrder
    filledAt?: SortOrder
    updatedAt?: SortOrder
    engineerID?: SortOrder
    customerServiceID?: SortOrder
    formTemplateID?: SortOrder
  }

  export type FormResponseMinOrderByAggregateInput = {
    ID?: SortOrder
    filledAt?: SortOrder
    updatedAt?: SortOrder
    engineerID?: SortOrder
    customerServiceID?: SortOrder
    formTemplateID?: SortOrder
  }

  export type FormResponseSumOrderByAggregateInput = {
    ID?: SortOrder
    engineerID?: SortOrder
    customerServiceID?: SortOrder
    formTemplateID?: SortOrder
  }

  export type FormResponseScalarRelationFilter = {
    is?: FormResponseWhereInput
    isNot?: FormResponseWhereInput
  }

  export type QuestionResponseListRelationFilter = {
    every?: QuestionResponseWhereInput
    some?: QuestionResponseWhereInput
    none?: QuestionResponseWhereInput
  }

  export type QuestionResponseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectionResponseCountOrderByAggregateInput = {
    ID?: SortOrder
    sectionName?: SortOrder
    formResponseID?: SortOrder
  }

  export type SectionResponseAvgOrderByAggregateInput = {
    ID?: SortOrder
    formResponseID?: SortOrder
  }

  export type SectionResponseMaxOrderByAggregateInput = {
    ID?: SortOrder
    sectionName?: SortOrder
    formResponseID?: SortOrder
  }

  export type SectionResponseMinOrderByAggregateInput = {
    ID?: SortOrder
    sectionName?: SortOrder
    formResponseID?: SortOrder
  }

  export type SectionResponseSumOrderByAggregateInput = {
    ID?: SortOrder
    formResponseID?: SortOrder
  }

  export type SectionResponseScalarRelationFilter = {
    is?: SectionResponseWhereInput
    isNot?: SectionResponseWhereInput
  }

  export type QuestionResponseCountOrderByAggregateInput = {
    ID?: SortOrder
    questionText?: SortOrder
    answer?: SortOrder
    sectionResponseID?: SortOrder
  }

  export type QuestionResponseAvgOrderByAggregateInput = {
    ID?: SortOrder
    sectionResponseID?: SortOrder
  }

  export type QuestionResponseMaxOrderByAggregateInput = {
    ID?: SortOrder
    questionText?: SortOrder
    answer?: SortOrder
    sectionResponseID?: SortOrder
  }

  export type QuestionResponseMinOrderByAggregateInput = {
    ID?: SortOrder
    questionText?: SortOrder
    answer?: SortOrder
    sectionResponseID?: SortOrder
  }

  export type QuestionResponseSumOrderByAggregateInput = {
    ID?: SortOrder
    sectionResponseID?: SortOrder
  }

  export type CustomerServiceCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerServiceCreateWithoutCustomerInput, CustomerServiceUncheckedCreateWithoutCustomerInput> | CustomerServiceCreateWithoutCustomerInput[] | CustomerServiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerServiceCreateOrConnectWithoutCustomerInput | CustomerServiceCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerServiceCreateManyCustomerInputEnvelope
    connect?: CustomerServiceWhereUniqueInput | CustomerServiceWhereUniqueInput[]
  }

  export type CustomerServiceUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerServiceCreateWithoutCustomerInput, CustomerServiceUncheckedCreateWithoutCustomerInput> | CustomerServiceCreateWithoutCustomerInput[] | CustomerServiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerServiceCreateOrConnectWithoutCustomerInput | CustomerServiceCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerServiceCreateManyCustomerInputEnvelope
    connect?: CustomerServiceWhereUniqueInput | CustomerServiceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CustomerServiceUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerServiceCreateWithoutCustomerInput, CustomerServiceUncheckedCreateWithoutCustomerInput> | CustomerServiceCreateWithoutCustomerInput[] | CustomerServiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerServiceCreateOrConnectWithoutCustomerInput | CustomerServiceCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerServiceUpsertWithWhereUniqueWithoutCustomerInput | CustomerServiceUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerServiceCreateManyCustomerInputEnvelope
    set?: CustomerServiceWhereUniqueInput | CustomerServiceWhereUniqueInput[]
    disconnect?: CustomerServiceWhereUniqueInput | CustomerServiceWhereUniqueInput[]
    delete?: CustomerServiceWhereUniqueInput | CustomerServiceWhereUniqueInput[]
    connect?: CustomerServiceWhereUniqueInput | CustomerServiceWhereUniqueInput[]
    update?: CustomerServiceUpdateWithWhereUniqueWithoutCustomerInput | CustomerServiceUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerServiceUpdateManyWithWhereWithoutCustomerInput | CustomerServiceUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerServiceScalarWhereInput | CustomerServiceScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CustomerServiceUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerServiceCreateWithoutCustomerInput, CustomerServiceUncheckedCreateWithoutCustomerInput> | CustomerServiceCreateWithoutCustomerInput[] | CustomerServiceUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerServiceCreateOrConnectWithoutCustomerInput | CustomerServiceCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerServiceUpsertWithWhereUniqueWithoutCustomerInput | CustomerServiceUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerServiceCreateManyCustomerInputEnvelope
    set?: CustomerServiceWhereUniqueInput | CustomerServiceWhereUniqueInput[]
    disconnect?: CustomerServiceWhereUniqueInput | CustomerServiceWhereUniqueInput[]
    delete?: CustomerServiceWhereUniqueInput | CustomerServiceWhereUniqueInput[]
    connect?: CustomerServiceWhereUniqueInput | CustomerServiceWhereUniqueInput[]
    update?: CustomerServiceUpdateWithWhereUniqueWithoutCustomerInput | CustomerServiceUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerServiceUpdateManyWithWhereWithoutCustomerInput | CustomerServiceUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerServiceScalarWhereInput | CustomerServiceScalarWhereInput[]
  }

  export type ServiceCreateNestedManyWithoutAdminInput = {
    create?: XOR<ServiceCreateWithoutAdminInput, ServiceUncheckedCreateWithoutAdminInput> | ServiceCreateWithoutAdminInput[] | ServiceUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutAdminInput | ServiceCreateOrConnectWithoutAdminInput[]
    createMany?: ServiceCreateManyAdminInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type VPNCreateNestedManyWithoutAdminInput = {
    create?: XOR<VPNCreateWithoutAdminInput, VPNUncheckedCreateWithoutAdminInput> | VPNCreateWithoutAdminInput[] | VPNUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: VPNCreateOrConnectWithoutAdminInput | VPNCreateOrConnectWithoutAdminInput[]
    createMany?: VPNCreateManyAdminInputEnvelope
    connect?: VPNWhereUniqueInput | VPNWhereUniqueInput[]
  }

  export type FormTemplateCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<FormTemplateCreateWithoutCreatedByInput, FormTemplateUncheckedCreateWithoutCreatedByInput> | FormTemplateCreateWithoutCreatedByInput[] | FormTemplateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FormTemplateCreateOrConnectWithoutCreatedByInput | FormTemplateCreateOrConnectWithoutCreatedByInput[]
    createMany?: FormTemplateCreateManyCreatedByInputEnvelope
    connect?: FormTemplateWhereUniqueInput | FormTemplateWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<ServiceCreateWithoutAdminInput, ServiceUncheckedCreateWithoutAdminInput> | ServiceCreateWithoutAdminInput[] | ServiceUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutAdminInput | ServiceCreateOrConnectWithoutAdminInput[]
    createMany?: ServiceCreateManyAdminInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type VPNUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<VPNCreateWithoutAdminInput, VPNUncheckedCreateWithoutAdminInput> | VPNCreateWithoutAdminInput[] | VPNUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: VPNCreateOrConnectWithoutAdminInput | VPNCreateOrConnectWithoutAdminInput[]
    createMany?: VPNCreateManyAdminInputEnvelope
    connect?: VPNWhereUniqueInput | VPNWhereUniqueInput[]
  }

  export type FormTemplateUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<FormTemplateCreateWithoutCreatedByInput, FormTemplateUncheckedCreateWithoutCreatedByInput> | FormTemplateCreateWithoutCreatedByInput[] | FormTemplateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FormTemplateCreateOrConnectWithoutCreatedByInput | FormTemplateCreateOrConnectWithoutCreatedByInput[]
    createMany?: FormTemplateCreateManyCreatedByInputEnvelope
    connect?: FormTemplateWhereUniqueInput | FormTemplateWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type ServiceUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ServiceCreateWithoutAdminInput, ServiceUncheckedCreateWithoutAdminInput> | ServiceCreateWithoutAdminInput[] | ServiceUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutAdminInput | ServiceCreateOrConnectWithoutAdminInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutAdminInput | ServiceUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ServiceCreateManyAdminInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutAdminInput | ServiceUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutAdminInput | ServiceUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type VPNUpdateManyWithoutAdminNestedInput = {
    create?: XOR<VPNCreateWithoutAdminInput, VPNUncheckedCreateWithoutAdminInput> | VPNCreateWithoutAdminInput[] | VPNUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: VPNCreateOrConnectWithoutAdminInput | VPNCreateOrConnectWithoutAdminInput[]
    upsert?: VPNUpsertWithWhereUniqueWithoutAdminInput | VPNUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: VPNCreateManyAdminInputEnvelope
    set?: VPNWhereUniqueInput | VPNWhereUniqueInput[]
    disconnect?: VPNWhereUniqueInput | VPNWhereUniqueInput[]
    delete?: VPNWhereUniqueInput | VPNWhereUniqueInput[]
    connect?: VPNWhereUniqueInput | VPNWhereUniqueInput[]
    update?: VPNUpdateWithWhereUniqueWithoutAdminInput | VPNUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: VPNUpdateManyWithWhereWithoutAdminInput | VPNUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: VPNScalarWhereInput | VPNScalarWhereInput[]
  }

  export type FormTemplateUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<FormTemplateCreateWithoutCreatedByInput, FormTemplateUncheckedCreateWithoutCreatedByInput> | FormTemplateCreateWithoutCreatedByInput[] | FormTemplateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FormTemplateCreateOrConnectWithoutCreatedByInput | FormTemplateCreateOrConnectWithoutCreatedByInput[]
    upsert?: FormTemplateUpsertWithWhereUniqueWithoutCreatedByInput | FormTemplateUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: FormTemplateCreateManyCreatedByInputEnvelope
    set?: FormTemplateWhereUniqueInput | FormTemplateWhereUniqueInput[]
    disconnect?: FormTemplateWhereUniqueInput | FormTemplateWhereUniqueInput[]
    delete?: FormTemplateWhereUniqueInput | FormTemplateWhereUniqueInput[]
    connect?: FormTemplateWhereUniqueInput | FormTemplateWhereUniqueInput[]
    update?: FormTemplateUpdateWithWhereUniqueWithoutCreatedByInput | FormTemplateUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: FormTemplateUpdateManyWithWhereWithoutCreatedByInput | FormTemplateUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: FormTemplateScalarWhereInput | FormTemplateScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ServiceCreateWithoutAdminInput, ServiceUncheckedCreateWithoutAdminInput> | ServiceCreateWithoutAdminInput[] | ServiceUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutAdminInput | ServiceCreateOrConnectWithoutAdminInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutAdminInput | ServiceUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ServiceCreateManyAdminInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutAdminInput | ServiceUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutAdminInput | ServiceUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type VPNUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<VPNCreateWithoutAdminInput, VPNUncheckedCreateWithoutAdminInput> | VPNCreateWithoutAdminInput[] | VPNUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: VPNCreateOrConnectWithoutAdminInput | VPNCreateOrConnectWithoutAdminInput[]
    upsert?: VPNUpsertWithWhereUniqueWithoutAdminInput | VPNUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: VPNCreateManyAdminInputEnvelope
    set?: VPNWhereUniqueInput | VPNWhereUniqueInput[]
    disconnect?: VPNWhereUniqueInput | VPNWhereUniqueInput[]
    delete?: VPNWhereUniqueInput | VPNWhereUniqueInput[]
    connect?: VPNWhereUniqueInput | VPNWhereUniqueInput[]
    update?: VPNUpdateWithWhereUniqueWithoutAdminInput | VPNUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: VPNUpdateManyWithWhereWithoutAdminInput | VPNUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: VPNScalarWhereInput | VPNScalarWhereInput[]
  }

  export type FormTemplateUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<FormTemplateCreateWithoutCreatedByInput, FormTemplateUncheckedCreateWithoutCreatedByInput> | FormTemplateCreateWithoutCreatedByInput[] | FormTemplateUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: FormTemplateCreateOrConnectWithoutCreatedByInput | FormTemplateCreateOrConnectWithoutCreatedByInput[]
    upsert?: FormTemplateUpsertWithWhereUniqueWithoutCreatedByInput | FormTemplateUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: FormTemplateCreateManyCreatedByInputEnvelope
    set?: FormTemplateWhereUniqueInput | FormTemplateWhereUniqueInput[]
    disconnect?: FormTemplateWhereUniqueInput | FormTemplateWhereUniqueInput[]
    delete?: FormTemplateWhereUniqueInput | FormTemplateWhereUniqueInput[]
    connect?: FormTemplateWhereUniqueInput | FormTemplateWhereUniqueInput[]
    update?: FormTemplateUpdateWithWhereUniqueWithoutCreatedByInput | FormTemplateUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: FormTemplateUpdateManyWithWhereWithoutCreatedByInput | FormTemplateUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: FormTemplateScalarWhereInput | FormTemplateScalarWhereInput[]
  }

  export type FormResponseCreateNestedManyWithoutEngineerInput = {
    create?: XOR<FormResponseCreateWithoutEngineerInput, FormResponseUncheckedCreateWithoutEngineerInput> | FormResponseCreateWithoutEngineerInput[] | FormResponseUncheckedCreateWithoutEngineerInput[]
    connectOrCreate?: FormResponseCreateOrConnectWithoutEngineerInput | FormResponseCreateOrConnectWithoutEngineerInput[]
    createMany?: FormResponseCreateManyEngineerInputEnvelope
    connect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
  }

  export type VPNCreateNestedManyWithoutEngineerInput = {
    create?: XOR<VPNCreateWithoutEngineerInput, VPNUncheckedCreateWithoutEngineerInput> | VPNCreateWithoutEngineerInput[] | VPNUncheckedCreateWithoutEngineerInput[]
    connectOrCreate?: VPNCreateOrConnectWithoutEngineerInput | VPNCreateOrConnectWithoutEngineerInput[]
    createMany?: VPNCreateManyEngineerInputEnvelope
    connect?: VPNWhereUniqueInput | VPNWhereUniqueInput[]
  }

  export type FormResponseUncheckedCreateNestedManyWithoutEngineerInput = {
    create?: XOR<FormResponseCreateWithoutEngineerInput, FormResponseUncheckedCreateWithoutEngineerInput> | FormResponseCreateWithoutEngineerInput[] | FormResponseUncheckedCreateWithoutEngineerInput[]
    connectOrCreate?: FormResponseCreateOrConnectWithoutEngineerInput | FormResponseCreateOrConnectWithoutEngineerInput[]
    createMany?: FormResponseCreateManyEngineerInputEnvelope
    connect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
  }

  export type VPNUncheckedCreateNestedManyWithoutEngineerInput = {
    create?: XOR<VPNCreateWithoutEngineerInput, VPNUncheckedCreateWithoutEngineerInput> | VPNCreateWithoutEngineerInput[] | VPNUncheckedCreateWithoutEngineerInput[]
    connectOrCreate?: VPNCreateOrConnectWithoutEngineerInput | VPNCreateOrConnectWithoutEngineerInput[]
    createMany?: VPNCreateManyEngineerInputEnvelope
    connect?: VPNWhereUniqueInput | VPNWhereUniqueInput[]
  }

  export type FormResponseUpdateManyWithoutEngineerNestedInput = {
    create?: XOR<FormResponseCreateWithoutEngineerInput, FormResponseUncheckedCreateWithoutEngineerInput> | FormResponseCreateWithoutEngineerInput[] | FormResponseUncheckedCreateWithoutEngineerInput[]
    connectOrCreate?: FormResponseCreateOrConnectWithoutEngineerInput | FormResponseCreateOrConnectWithoutEngineerInput[]
    upsert?: FormResponseUpsertWithWhereUniqueWithoutEngineerInput | FormResponseUpsertWithWhereUniqueWithoutEngineerInput[]
    createMany?: FormResponseCreateManyEngineerInputEnvelope
    set?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    disconnect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    delete?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    connect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    update?: FormResponseUpdateWithWhereUniqueWithoutEngineerInput | FormResponseUpdateWithWhereUniqueWithoutEngineerInput[]
    updateMany?: FormResponseUpdateManyWithWhereWithoutEngineerInput | FormResponseUpdateManyWithWhereWithoutEngineerInput[]
    deleteMany?: FormResponseScalarWhereInput | FormResponseScalarWhereInput[]
  }

  export type VPNUpdateManyWithoutEngineerNestedInput = {
    create?: XOR<VPNCreateWithoutEngineerInput, VPNUncheckedCreateWithoutEngineerInput> | VPNCreateWithoutEngineerInput[] | VPNUncheckedCreateWithoutEngineerInput[]
    connectOrCreate?: VPNCreateOrConnectWithoutEngineerInput | VPNCreateOrConnectWithoutEngineerInput[]
    upsert?: VPNUpsertWithWhereUniqueWithoutEngineerInput | VPNUpsertWithWhereUniqueWithoutEngineerInput[]
    createMany?: VPNCreateManyEngineerInputEnvelope
    set?: VPNWhereUniqueInput | VPNWhereUniqueInput[]
    disconnect?: VPNWhereUniqueInput | VPNWhereUniqueInput[]
    delete?: VPNWhereUniqueInput | VPNWhereUniqueInput[]
    connect?: VPNWhereUniqueInput | VPNWhereUniqueInput[]
    update?: VPNUpdateWithWhereUniqueWithoutEngineerInput | VPNUpdateWithWhereUniqueWithoutEngineerInput[]
    updateMany?: VPNUpdateManyWithWhereWithoutEngineerInput | VPNUpdateManyWithWhereWithoutEngineerInput[]
    deleteMany?: VPNScalarWhereInput | VPNScalarWhereInput[]
  }

  export type FormResponseUncheckedUpdateManyWithoutEngineerNestedInput = {
    create?: XOR<FormResponseCreateWithoutEngineerInput, FormResponseUncheckedCreateWithoutEngineerInput> | FormResponseCreateWithoutEngineerInput[] | FormResponseUncheckedCreateWithoutEngineerInput[]
    connectOrCreate?: FormResponseCreateOrConnectWithoutEngineerInput | FormResponseCreateOrConnectWithoutEngineerInput[]
    upsert?: FormResponseUpsertWithWhereUniqueWithoutEngineerInput | FormResponseUpsertWithWhereUniqueWithoutEngineerInput[]
    createMany?: FormResponseCreateManyEngineerInputEnvelope
    set?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    disconnect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    delete?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    connect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    update?: FormResponseUpdateWithWhereUniqueWithoutEngineerInput | FormResponseUpdateWithWhereUniqueWithoutEngineerInput[]
    updateMany?: FormResponseUpdateManyWithWhereWithoutEngineerInput | FormResponseUpdateManyWithWhereWithoutEngineerInput[]
    deleteMany?: FormResponseScalarWhereInput | FormResponseScalarWhereInput[]
  }

  export type VPNUncheckedUpdateManyWithoutEngineerNestedInput = {
    create?: XOR<VPNCreateWithoutEngineerInput, VPNUncheckedCreateWithoutEngineerInput> | VPNCreateWithoutEngineerInput[] | VPNUncheckedCreateWithoutEngineerInput[]
    connectOrCreate?: VPNCreateOrConnectWithoutEngineerInput | VPNCreateOrConnectWithoutEngineerInput[]
    upsert?: VPNUpsertWithWhereUniqueWithoutEngineerInput | VPNUpsertWithWhereUniqueWithoutEngineerInput[]
    createMany?: VPNCreateManyEngineerInputEnvelope
    set?: VPNWhereUniqueInput | VPNWhereUniqueInput[]
    disconnect?: VPNWhereUniqueInput | VPNWhereUniqueInput[]
    delete?: VPNWhereUniqueInput | VPNWhereUniqueInput[]
    connect?: VPNWhereUniqueInput | VPNWhereUniqueInput[]
    update?: VPNUpdateWithWhereUniqueWithoutEngineerInput | VPNUpdateWithWhereUniqueWithoutEngineerInput[]
    updateMany?: VPNUpdateManyWithWhereWithoutEngineerInput | VPNUpdateManyWithWhereWithoutEngineerInput[]
    deleteMany?: VPNScalarWhereInput | VPNScalarWhereInput[]
  }

  export type AdminCreateNestedOneWithoutServicesInput = {
    create?: XOR<AdminCreateWithoutServicesInput, AdminUncheckedCreateWithoutServicesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutServicesInput
    connect?: AdminWhereUniqueInput
  }

  export type FormTemplateCreateNestedOneWithoutServicesInput = {
    create?: XOR<FormTemplateCreateWithoutServicesInput, FormTemplateUncheckedCreateWithoutServicesInput>
    connectOrCreate?: FormTemplateCreateOrConnectWithoutServicesInput
    connect?: FormTemplateWhereUniqueInput
  }

  export type CustomerServiceCreateNestedManyWithoutServiceInput = {
    create?: XOR<CustomerServiceCreateWithoutServiceInput, CustomerServiceUncheckedCreateWithoutServiceInput> | CustomerServiceCreateWithoutServiceInput[] | CustomerServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: CustomerServiceCreateOrConnectWithoutServiceInput | CustomerServiceCreateOrConnectWithoutServiceInput[]
    createMany?: CustomerServiceCreateManyServiceInputEnvelope
    connect?: CustomerServiceWhereUniqueInput | CustomerServiceWhereUniqueInput[]
  }

  export type CustomerServiceUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<CustomerServiceCreateWithoutServiceInput, CustomerServiceUncheckedCreateWithoutServiceInput> | CustomerServiceCreateWithoutServiceInput[] | CustomerServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: CustomerServiceCreateOrConnectWithoutServiceInput | CustomerServiceCreateOrConnectWithoutServiceInput[]
    createMany?: CustomerServiceCreateManyServiceInputEnvelope
    connect?: CustomerServiceWhereUniqueInput | CustomerServiceWhereUniqueInput[]
  }

  export type AdminUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<AdminCreateWithoutServicesInput, AdminUncheckedCreateWithoutServicesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutServicesInput
    upsert?: AdminUpsertWithoutServicesInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutServicesInput, AdminUpdateWithoutServicesInput>, AdminUncheckedUpdateWithoutServicesInput>
  }

  export type FormTemplateUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<FormTemplateCreateWithoutServicesInput, FormTemplateUncheckedCreateWithoutServicesInput>
    connectOrCreate?: FormTemplateCreateOrConnectWithoutServicesInput
    upsert?: FormTemplateUpsertWithoutServicesInput
    connect?: FormTemplateWhereUniqueInput
    update?: XOR<XOR<FormTemplateUpdateToOneWithWhereWithoutServicesInput, FormTemplateUpdateWithoutServicesInput>, FormTemplateUncheckedUpdateWithoutServicesInput>
  }

  export type CustomerServiceUpdateManyWithoutServiceNestedInput = {
    create?: XOR<CustomerServiceCreateWithoutServiceInput, CustomerServiceUncheckedCreateWithoutServiceInput> | CustomerServiceCreateWithoutServiceInput[] | CustomerServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: CustomerServiceCreateOrConnectWithoutServiceInput | CustomerServiceCreateOrConnectWithoutServiceInput[]
    upsert?: CustomerServiceUpsertWithWhereUniqueWithoutServiceInput | CustomerServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: CustomerServiceCreateManyServiceInputEnvelope
    set?: CustomerServiceWhereUniqueInput | CustomerServiceWhereUniqueInput[]
    disconnect?: CustomerServiceWhereUniqueInput | CustomerServiceWhereUniqueInput[]
    delete?: CustomerServiceWhereUniqueInput | CustomerServiceWhereUniqueInput[]
    connect?: CustomerServiceWhereUniqueInput | CustomerServiceWhereUniqueInput[]
    update?: CustomerServiceUpdateWithWhereUniqueWithoutServiceInput | CustomerServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: CustomerServiceUpdateManyWithWhereWithoutServiceInput | CustomerServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: CustomerServiceScalarWhereInput | CustomerServiceScalarWhereInput[]
  }

  export type CustomerServiceUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<CustomerServiceCreateWithoutServiceInput, CustomerServiceUncheckedCreateWithoutServiceInput> | CustomerServiceCreateWithoutServiceInput[] | CustomerServiceUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: CustomerServiceCreateOrConnectWithoutServiceInput | CustomerServiceCreateOrConnectWithoutServiceInput[]
    upsert?: CustomerServiceUpsertWithWhereUniqueWithoutServiceInput | CustomerServiceUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: CustomerServiceCreateManyServiceInputEnvelope
    set?: CustomerServiceWhereUniqueInput | CustomerServiceWhereUniqueInput[]
    disconnect?: CustomerServiceWhereUniqueInput | CustomerServiceWhereUniqueInput[]
    delete?: CustomerServiceWhereUniqueInput | CustomerServiceWhereUniqueInput[]
    connect?: CustomerServiceWhereUniqueInput | CustomerServiceWhereUniqueInput[]
    update?: CustomerServiceUpdateWithWhereUniqueWithoutServiceInput | CustomerServiceUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: CustomerServiceUpdateManyWithWhereWithoutServiceInput | CustomerServiceUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: CustomerServiceScalarWhereInput | CustomerServiceScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutCustomerServicesInput = {
    create?: XOR<CustomerCreateWithoutCustomerServicesInput, CustomerUncheckedCreateWithoutCustomerServicesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutCustomerServicesInput
    connect?: CustomerWhereUniqueInput
  }

  export type ServiceCreateNestedOneWithoutCustomerServicesInput = {
    create?: XOR<ServiceCreateWithoutCustomerServicesInput, ServiceUncheckedCreateWithoutCustomerServicesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutCustomerServicesInput
    connect?: ServiceWhereUniqueInput
  }

  export type FormResponseCreateNestedManyWithoutCustomerServiceInput = {
    create?: XOR<FormResponseCreateWithoutCustomerServiceInput, FormResponseUncheckedCreateWithoutCustomerServiceInput> | FormResponseCreateWithoutCustomerServiceInput[] | FormResponseUncheckedCreateWithoutCustomerServiceInput[]
    connectOrCreate?: FormResponseCreateOrConnectWithoutCustomerServiceInput | FormResponseCreateOrConnectWithoutCustomerServiceInput[]
    createMany?: FormResponseCreateManyCustomerServiceInputEnvelope
    connect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
  }

  export type FormResponseUncheckedCreateNestedManyWithoutCustomerServiceInput = {
    create?: XOR<FormResponseCreateWithoutCustomerServiceInput, FormResponseUncheckedCreateWithoutCustomerServiceInput> | FormResponseCreateWithoutCustomerServiceInput[] | FormResponseUncheckedCreateWithoutCustomerServiceInput[]
    connectOrCreate?: FormResponseCreateOrConnectWithoutCustomerServiceInput | FormResponseCreateOrConnectWithoutCustomerServiceInput[]
    createMany?: FormResponseCreateManyCustomerServiceInputEnvelope
    connect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
  }

  export type CustomerUpdateOneRequiredWithoutCustomerServicesNestedInput = {
    create?: XOR<CustomerCreateWithoutCustomerServicesInput, CustomerUncheckedCreateWithoutCustomerServicesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutCustomerServicesInput
    upsert?: CustomerUpsertWithoutCustomerServicesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutCustomerServicesInput, CustomerUpdateWithoutCustomerServicesInput>, CustomerUncheckedUpdateWithoutCustomerServicesInput>
  }

  export type ServiceUpdateOneRequiredWithoutCustomerServicesNestedInput = {
    create?: XOR<ServiceCreateWithoutCustomerServicesInput, ServiceUncheckedCreateWithoutCustomerServicesInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutCustomerServicesInput
    upsert?: ServiceUpsertWithoutCustomerServicesInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutCustomerServicesInput, ServiceUpdateWithoutCustomerServicesInput>, ServiceUncheckedUpdateWithoutCustomerServicesInput>
  }

  export type FormResponseUpdateManyWithoutCustomerServiceNestedInput = {
    create?: XOR<FormResponseCreateWithoutCustomerServiceInput, FormResponseUncheckedCreateWithoutCustomerServiceInput> | FormResponseCreateWithoutCustomerServiceInput[] | FormResponseUncheckedCreateWithoutCustomerServiceInput[]
    connectOrCreate?: FormResponseCreateOrConnectWithoutCustomerServiceInput | FormResponseCreateOrConnectWithoutCustomerServiceInput[]
    upsert?: FormResponseUpsertWithWhereUniqueWithoutCustomerServiceInput | FormResponseUpsertWithWhereUniqueWithoutCustomerServiceInput[]
    createMany?: FormResponseCreateManyCustomerServiceInputEnvelope
    set?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    disconnect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    delete?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    connect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    update?: FormResponseUpdateWithWhereUniqueWithoutCustomerServiceInput | FormResponseUpdateWithWhereUniqueWithoutCustomerServiceInput[]
    updateMany?: FormResponseUpdateManyWithWhereWithoutCustomerServiceInput | FormResponseUpdateManyWithWhereWithoutCustomerServiceInput[]
    deleteMany?: FormResponseScalarWhereInput | FormResponseScalarWhereInput[]
  }

  export type FormResponseUncheckedUpdateManyWithoutCustomerServiceNestedInput = {
    create?: XOR<FormResponseCreateWithoutCustomerServiceInput, FormResponseUncheckedCreateWithoutCustomerServiceInput> | FormResponseCreateWithoutCustomerServiceInput[] | FormResponseUncheckedCreateWithoutCustomerServiceInput[]
    connectOrCreate?: FormResponseCreateOrConnectWithoutCustomerServiceInput | FormResponseCreateOrConnectWithoutCustomerServiceInput[]
    upsert?: FormResponseUpsertWithWhereUniqueWithoutCustomerServiceInput | FormResponseUpsertWithWhereUniqueWithoutCustomerServiceInput[]
    createMany?: FormResponseCreateManyCustomerServiceInputEnvelope
    set?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    disconnect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    delete?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    connect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    update?: FormResponseUpdateWithWhereUniqueWithoutCustomerServiceInput | FormResponseUpdateWithWhereUniqueWithoutCustomerServiceInput[]
    updateMany?: FormResponseUpdateManyWithWhereWithoutCustomerServiceInput | FormResponseUpdateManyWithWhereWithoutCustomerServiceInput[]
    deleteMany?: FormResponseScalarWhereInput | FormResponseScalarWhereInput[]
  }

  export type AdminCreateNestedOneWithoutVpnsInput = {
    create?: XOR<AdminCreateWithoutVpnsInput, AdminUncheckedCreateWithoutVpnsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutVpnsInput
    connect?: AdminWhereUniqueInput
  }

  export type EngineerCreateNestedOneWithoutVpnsInput = {
    create?: XOR<EngineerCreateWithoutVpnsInput, EngineerUncheckedCreateWithoutVpnsInput>
    connectOrCreate?: EngineerCreateOrConnectWithoutVpnsInput
    connect?: EngineerWhereUniqueInput
  }

  export type AdminUpdateOneRequiredWithoutVpnsNestedInput = {
    create?: XOR<AdminCreateWithoutVpnsInput, AdminUncheckedCreateWithoutVpnsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutVpnsInput
    upsert?: AdminUpsertWithoutVpnsInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutVpnsInput, AdminUpdateWithoutVpnsInput>, AdminUncheckedUpdateWithoutVpnsInput>
  }

  export type EngineerUpdateOneRequiredWithoutVpnsNestedInput = {
    create?: XOR<EngineerCreateWithoutVpnsInput, EngineerUncheckedCreateWithoutVpnsInput>
    connectOrCreate?: EngineerCreateOrConnectWithoutVpnsInput
    upsert?: EngineerUpsertWithoutVpnsInput
    connect?: EngineerWhereUniqueInput
    update?: XOR<XOR<EngineerUpdateToOneWithWhereWithoutVpnsInput, EngineerUpdateWithoutVpnsInput>, EngineerUncheckedUpdateWithoutVpnsInput>
  }

  export type AdminCreateNestedOneWithoutFormTemplatesInput = {
    create?: XOR<AdminCreateWithoutFormTemplatesInput, AdminUncheckedCreateWithoutFormTemplatesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutFormTemplatesInput
    connect?: AdminWhereUniqueInput
  }

  export type SectionTemplateCreateNestedManyWithoutFormInput = {
    create?: XOR<SectionTemplateCreateWithoutFormInput, SectionTemplateUncheckedCreateWithoutFormInput> | SectionTemplateCreateWithoutFormInput[] | SectionTemplateUncheckedCreateWithoutFormInput[]
    connectOrCreate?: SectionTemplateCreateOrConnectWithoutFormInput | SectionTemplateCreateOrConnectWithoutFormInput[]
    createMany?: SectionTemplateCreateManyFormInputEnvelope
    connect?: SectionTemplateWhereUniqueInput | SectionTemplateWhereUniqueInput[]
  }

  export type ServiceCreateNestedManyWithoutFormTemplateInput = {
    create?: XOR<ServiceCreateWithoutFormTemplateInput, ServiceUncheckedCreateWithoutFormTemplateInput> | ServiceCreateWithoutFormTemplateInput[] | ServiceUncheckedCreateWithoutFormTemplateInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutFormTemplateInput | ServiceCreateOrConnectWithoutFormTemplateInput[]
    createMany?: ServiceCreateManyFormTemplateInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type FormResponseCreateNestedManyWithoutFormTemplateInput = {
    create?: XOR<FormResponseCreateWithoutFormTemplateInput, FormResponseUncheckedCreateWithoutFormTemplateInput> | FormResponseCreateWithoutFormTemplateInput[] | FormResponseUncheckedCreateWithoutFormTemplateInput[]
    connectOrCreate?: FormResponseCreateOrConnectWithoutFormTemplateInput | FormResponseCreateOrConnectWithoutFormTemplateInput[]
    createMany?: FormResponseCreateManyFormTemplateInputEnvelope
    connect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
  }

  export type SectionTemplateUncheckedCreateNestedManyWithoutFormInput = {
    create?: XOR<SectionTemplateCreateWithoutFormInput, SectionTemplateUncheckedCreateWithoutFormInput> | SectionTemplateCreateWithoutFormInput[] | SectionTemplateUncheckedCreateWithoutFormInput[]
    connectOrCreate?: SectionTemplateCreateOrConnectWithoutFormInput | SectionTemplateCreateOrConnectWithoutFormInput[]
    createMany?: SectionTemplateCreateManyFormInputEnvelope
    connect?: SectionTemplateWhereUniqueInput | SectionTemplateWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutFormTemplateInput = {
    create?: XOR<ServiceCreateWithoutFormTemplateInput, ServiceUncheckedCreateWithoutFormTemplateInput> | ServiceCreateWithoutFormTemplateInput[] | ServiceUncheckedCreateWithoutFormTemplateInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutFormTemplateInput | ServiceCreateOrConnectWithoutFormTemplateInput[]
    createMany?: ServiceCreateManyFormTemplateInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type FormResponseUncheckedCreateNestedManyWithoutFormTemplateInput = {
    create?: XOR<FormResponseCreateWithoutFormTemplateInput, FormResponseUncheckedCreateWithoutFormTemplateInput> | FormResponseCreateWithoutFormTemplateInput[] | FormResponseUncheckedCreateWithoutFormTemplateInput[]
    connectOrCreate?: FormResponseCreateOrConnectWithoutFormTemplateInput | FormResponseCreateOrConnectWithoutFormTemplateInput[]
    createMany?: FormResponseCreateManyFormTemplateInputEnvelope
    connect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
  }

  export type AdminUpdateOneRequiredWithoutFormTemplatesNestedInput = {
    create?: XOR<AdminCreateWithoutFormTemplatesInput, AdminUncheckedCreateWithoutFormTemplatesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutFormTemplatesInput
    upsert?: AdminUpsertWithoutFormTemplatesInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutFormTemplatesInput, AdminUpdateWithoutFormTemplatesInput>, AdminUncheckedUpdateWithoutFormTemplatesInput>
  }

  export type SectionTemplateUpdateManyWithoutFormNestedInput = {
    create?: XOR<SectionTemplateCreateWithoutFormInput, SectionTemplateUncheckedCreateWithoutFormInput> | SectionTemplateCreateWithoutFormInput[] | SectionTemplateUncheckedCreateWithoutFormInput[]
    connectOrCreate?: SectionTemplateCreateOrConnectWithoutFormInput | SectionTemplateCreateOrConnectWithoutFormInput[]
    upsert?: SectionTemplateUpsertWithWhereUniqueWithoutFormInput | SectionTemplateUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: SectionTemplateCreateManyFormInputEnvelope
    set?: SectionTemplateWhereUniqueInput | SectionTemplateWhereUniqueInput[]
    disconnect?: SectionTemplateWhereUniqueInput | SectionTemplateWhereUniqueInput[]
    delete?: SectionTemplateWhereUniqueInput | SectionTemplateWhereUniqueInput[]
    connect?: SectionTemplateWhereUniqueInput | SectionTemplateWhereUniqueInput[]
    update?: SectionTemplateUpdateWithWhereUniqueWithoutFormInput | SectionTemplateUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: SectionTemplateUpdateManyWithWhereWithoutFormInput | SectionTemplateUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: SectionTemplateScalarWhereInput | SectionTemplateScalarWhereInput[]
  }

  export type ServiceUpdateManyWithoutFormTemplateNestedInput = {
    create?: XOR<ServiceCreateWithoutFormTemplateInput, ServiceUncheckedCreateWithoutFormTemplateInput> | ServiceCreateWithoutFormTemplateInput[] | ServiceUncheckedCreateWithoutFormTemplateInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutFormTemplateInput | ServiceCreateOrConnectWithoutFormTemplateInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutFormTemplateInput | ServiceUpsertWithWhereUniqueWithoutFormTemplateInput[]
    createMany?: ServiceCreateManyFormTemplateInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutFormTemplateInput | ServiceUpdateWithWhereUniqueWithoutFormTemplateInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutFormTemplateInput | ServiceUpdateManyWithWhereWithoutFormTemplateInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type FormResponseUpdateManyWithoutFormTemplateNestedInput = {
    create?: XOR<FormResponseCreateWithoutFormTemplateInput, FormResponseUncheckedCreateWithoutFormTemplateInput> | FormResponseCreateWithoutFormTemplateInput[] | FormResponseUncheckedCreateWithoutFormTemplateInput[]
    connectOrCreate?: FormResponseCreateOrConnectWithoutFormTemplateInput | FormResponseCreateOrConnectWithoutFormTemplateInput[]
    upsert?: FormResponseUpsertWithWhereUniqueWithoutFormTemplateInput | FormResponseUpsertWithWhereUniqueWithoutFormTemplateInput[]
    createMany?: FormResponseCreateManyFormTemplateInputEnvelope
    set?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    disconnect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    delete?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    connect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    update?: FormResponseUpdateWithWhereUniqueWithoutFormTemplateInput | FormResponseUpdateWithWhereUniqueWithoutFormTemplateInput[]
    updateMany?: FormResponseUpdateManyWithWhereWithoutFormTemplateInput | FormResponseUpdateManyWithWhereWithoutFormTemplateInput[]
    deleteMany?: FormResponseScalarWhereInput | FormResponseScalarWhereInput[]
  }

  export type SectionTemplateUncheckedUpdateManyWithoutFormNestedInput = {
    create?: XOR<SectionTemplateCreateWithoutFormInput, SectionTemplateUncheckedCreateWithoutFormInput> | SectionTemplateCreateWithoutFormInput[] | SectionTemplateUncheckedCreateWithoutFormInput[]
    connectOrCreate?: SectionTemplateCreateOrConnectWithoutFormInput | SectionTemplateCreateOrConnectWithoutFormInput[]
    upsert?: SectionTemplateUpsertWithWhereUniqueWithoutFormInput | SectionTemplateUpsertWithWhereUniqueWithoutFormInput[]
    createMany?: SectionTemplateCreateManyFormInputEnvelope
    set?: SectionTemplateWhereUniqueInput | SectionTemplateWhereUniqueInput[]
    disconnect?: SectionTemplateWhereUniqueInput | SectionTemplateWhereUniqueInput[]
    delete?: SectionTemplateWhereUniqueInput | SectionTemplateWhereUniqueInput[]
    connect?: SectionTemplateWhereUniqueInput | SectionTemplateWhereUniqueInput[]
    update?: SectionTemplateUpdateWithWhereUniqueWithoutFormInput | SectionTemplateUpdateWithWhereUniqueWithoutFormInput[]
    updateMany?: SectionTemplateUpdateManyWithWhereWithoutFormInput | SectionTemplateUpdateManyWithWhereWithoutFormInput[]
    deleteMany?: SectionTemplateScalarWhereInput | SectionTemplateScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutFormTemplateNestedInput = {
    create?: XOR<ServiceCreateWithoutFormTemplateInput, ServiceUncheckedCreateWithoutFormTemplateInput> | ServiceCreateWithoutFormTemplateInput[] | ServiceUncheckedCreateWithoutFormTemplateInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutFormTemplateInput | ServiceCreateOrConnectWithoutFormTemplateInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutFormTemplateInput | ServiceUpsertWithWhereUniqueWithoutFormTemplateInput[]
    createMany?: ServiceCreateManyFormTemplateInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutFormTemplateInput | ServiceUpdateWithWhereUniqueWithoutFormTemplateInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutFormTemplateInput | ServiceUpdateManyWithWhereWithoutFormTemplateInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type FormResponseUncheckedUpdateManyWithoutFormTemplateNestedInput = {
    create?: XOR<FormResponseCreateWithoutFormTemplateInput, FormResponseUncheckedCreateWithoutFormTemplateInput> | FormResponseCreateWithoutFormTemplateInput[] | FormResponseUncheckedCreateWithoutFormTemplateInput[]
    connectOrCreate?: FormResponseCreateOrConnectWithoutFormTemplateInput | FormResponseCreateOrConnectWithoutFormTemplateInput[]
    upsert?: FormResponseUpsertWithWhereUniqueWithoutFormTemplateInput | FormResponseUpsertWithWhereUniqueWithoutFormTemplateInput[]
    createMany?: FormResponseCreateManyFormTemplateInputEnvelope
    set?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    disconnect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    delete?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    connect?: FormResponseWhereUniqueInput | FormResponseWhereUniqueInput[]
    update?: FormResponseUpdateWithWhereUniqueWithoutFormTemplateInput | FormResponseUpdateWithWhereUniqueWithoutFormTemplateInput[]
    updateMany?: FormResponseUpdateManyWithWhereWithoutFormTemplateInput | FormResponseUpdateManyWithWhereWithoutFormTemplateInput[]
    deleteMany?: FormResponseScalarWhereInput | FormResponseScalarWhereInput[]
  }

  export type FormTemplateCreateNestedOneWithoutSectionsInput = {
    create?: XOR<FormTemplateCreateWithoutSectionsInput, FormTemplateUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: FormTemplateCreateOrConnectWithoutSectionsInput
    connect?: FormTemplateWhereUniqueInput
  }

  export type QuestionTemplateCreateNestedManyWithoutSectionInput = {
    create?: XOR<QuestionTemplateCreateWithoutSectionInput, QuestionTemplateUncheckedCreateWithoutSectionInput> | QuestionTemplateCreateWithoutSectionInput[] | QuestionTemplateUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: QuestionTemplateCreateOrConnectWithoutSectionInput | QuestionTemplateCreateOrConnectWithoutSectionInput[]
    createMany?: QuestionTemplateCreateManySectionInputEnvelope
    connect?: QuestionTemplateWhereUniqueInput | QuestionTemplateWhereUniqueInput[]
  }

  export type QuestionTemplateUncheckedCreateNestedManyWithoutSectionInput = {
    create?: XOR<QuestionTemplateCreateWithoutSectionInput, QuestionTemplateUncheckedCreateWithoutSectionInput> | QuestionTemplateCreateWithoutSectionInput[] | QuestionTemplateUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: QuestionTemplateCreateOrConnectWithoutSectionInput | QuestionTemplateCreateOrConnectWithoutSectionInput[]
    createMany?: QuestionTemplateCreateManySectionInputEnvelope
    connect?: QuestionTemplateWhereUniqueInput | QuestionTemplateWhereUniqueInput[]
  }

  export type FormTemplateUpdateOneRequiredWithoutSectionsNestedInput = {
    create?: XOR<FormTemplateCreateWithoutSectionsInput, FormTemplateUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: FormTemplateCreateOrConnectWithoutSectionsInput
    upsert?: FormTemplateUpsertWithoutSectionsInput
    connect?: FormTemplateWhereUniqueInput
    update?: XOR<XOR<FormTemplateUpdateToOneWithWhereWithoutSectionsInput, FormTemplateUpdateWithoutSectionsInput>, FormTemplateUncheckedUpdateWithoutSectionsInput>
  }

  export type QuestionTemplateUpdateManyWithoutSectionNestedInput = {
    create?: XOR<QuestionTemplateCreateWithoutSectionInput, QuestionTemplateUncheckedCreateWithoutSectionInput> | QuestionTemplateCreateWithoutSectionInput[] | QuestionTemplateUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: QuestionTemplateCreateOrConnectWithoutSectionInput | QuestionTemplateCreateOrConnectWithoutSectionInput[]
    upsert?: QuestionTemplateUpsertWithWhereUniqueWithoutSectionInput | QuestionTemplateUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: QuestionTemplateCreateManySectionInputEnvelope
    set?: QuestionTemplateWhereUniqueInput | QuestionTemplateWhereUniqueInput[]
    disconnect?: QuestionTemplateWhereUniqueInput | QuestionTemplateWhereUniqueInput[]
    delete?: QuestionTemplateWhereUniqueInput | QuestionTemplateWhereUniqueInput[]
    connect?: QuestionTemplateWhereUniqueInput | QuestionTemplateWhereUniqueInput[]
    update?: QuestionTemplateUpdateWithWhereUniqueWithoutSectionInput | QuestionTemplateUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: QuestionTemplateUpdateManyWithWhereWithoutSectionInput | QuestionTemplateUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: QuestionTemplateScalarWhereInput | QuestionTemplateScalarWhereInput[]
  }

  export type QuestionTemplateUncheckedUpdateManyWithoutSectionNestedInput = {
    create?: XOR<QuestionTemplateCreateWithoutSectionInput, QuestionTemplateUncheckedCreateWithoutSectionInput> | QuestionTemplateCreateWithoutSectionInput[] | QuestionTemplateUncheckedCreateWithoutSectionInput[]
    connectOrCreate?: QuestionTemplateCreateOrConnectWithoutSectionInput | QuestionTemplateCreateOrConnectWithoutSectionInput[]
    upsert?: QuestionTemplateUpsertWithWhereUniqueWithoutSectionInput | QuestionTemplateUpsertWithWhereUniqueWithoutSectionInput[]
    createMany?: QuestionTemplateCreateManySectionInputEnvelope
    set?: QuestionTemplateWhereUniqueInput | QuestionTemplateWhereUniqueInput[]
    disconnect?: QuestionTemplateWhereUniqueInput | QuestionTemplateWhereUniqueInput[]
    delete?: QuestionTemplateWhereUniqueInput | QuestionTemplateWhereUniqueInput[]
    connect?: QuestionTemplateWhereUniqueInput | QuestionTemplateWhereUniqueInput[]
    update?: QuestionTemplateUpdateWithWhereUniqueWithoutSectionInput | QuestionTemplateUpdateWithWhereUniqueWithoutSectionInput[]
    updateMany?: QuestionTemplateUpdateManyWithWhereWithoutSectionInput | QuestionTemplateUpdateManyWithWhereWithoutSectionInput[]
    deleteMany?: QuestionTemplateScalarWhereInput | QuestionTemplateScalarWhereInput[]
  }

  export type SectionTemplateCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<SectionTemplateCreateWithoutQuestionsInput, SectionTemplateUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: SectionTemplateCreateOrConnectWithoutQuestionsInput
    connect?: SectionTemplateWhereUniqueInput
  }

  export type SectionTemplateUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<SectionTemplateCreateWithoutQuestionsInput, SectionTemplateUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: SectionTemplateCreateOrConnectWithoutQuestionsInput
    upsert?: SectionTemplateUpsertWithoutQuestionsInput
    connect?: SectionTemplateWhereUniqueInput
    update?: XOR<XOR<SectionTemplateUpdateToOneWithWhereWithoutQuestionsInput, SectionTemplateUpdateWithoutQuestionsInput>, SectionTemplateUncheckedUpdateWithoutQuestionsInput>
  }

  export type EngineerCreateNestedOneWithoutFormResponsesInput = {
    create?: XOR<EngineerCreateWithoutFormResponsesInput, EngineerUncheckedCreateWithoutFormResponsesInput>
    connectOrCreate?: EngineerCreateOrConnectWithoutFormResponsesInput
    connect?: EngineerWhereUniqueInput
  }

  export type CustomerServiceCreateNestedOneWithoutFormResponsesInput = {
    create?: XOR<CustomerServiceCreateWithoutFormResponsesInput, CustomerServiceUncheckedCreateWithoutFormResponsesInput>
    connectOrCreate?: CustomerServiceCreateOrConnectWithoutFormResponsesInput
    connect?: CustomerServiceWhereUniqueInput
  }

  export type FormTemplateCreateNestedOneWithoutFormResponseInput = {
    create?: XOR<FormTemplateCreateWithoutFormResponseInput, FormTemplateUncheckedCreateWithoutFormResponseInput>
    connectOrCreate?: FormTemplateCreateOrConnectWithoutFormResponseInput
    connect?: FormTemplateWhereUniqueInput
  }

  export type SectionResponseCreateNestedManyWithoutFormResponsesInput = {
    create?: XOR<SectionResponseCreateWithoutFormResponsesInput, SectionResponseUncheckedCreateWithoutFormResponsesInput> | SectionResponseCreateWithoutFormResponsesInput[] | SectionResponseUncheckedCreateWithoutFormResponsesInput[]
    connectOrCreate?: SectionResponseCreateOrConnectWithoutFormResponsesInput | SectionResponseCreateOrConnectWithoutFormResponsesInput[]
    createMany?: SectionResponseCreateManyFormResponsesInputEnvelope
    connect?: SectionResponseWhereUniqueInput | SectionResponseWhereUniqueInput[]
  }

  export type SectionResponseUncheckedCreateNestedManyWithoutFormResponsesInput = {
    create?: XOR<SectionResponseCreateWithoutFormResponsesInput, SectionResponseUncheckedCreateWithoutFormResponsesInput> | SectionResponseCreateWithoutFormResponsesInput[] | SectionResponseUncheckedCreateWithoutFormResponsesInput[]
    connectOrCreate?: SectionResponseCreateOrConnectWithoutFormResponsesInput | SectionResponseCreateOrConnectWithoutFormResponsesInput[]
    createMany?: SectionResponseCreateManyFormResponsesInputEnvelope
    connect?: SectionResponseWhereUniqueInput | SectionResponseWhereUniqueInput[]
  }

  export type EngineerUpdateOneRequiredWithoutFormResponsesNestedInput = {
    create?: XOR<EngineerCreateWithoutFormResponsesInput, EngineerUncheckedCreateWithoutFormResponsesInput>
    connectOrCreate?: EngineerCreateOrConnectWithoutFormResponsesInput
    upsert?: EngineerUpsertWithoutFormResponsesInput
    connect?: EngineerWhereUniqueInput
    update?: XOR<XOR<EngineerUpdateToOneWithWhereWithoutFormResponsesInput, EngineerUpdateWithoutFormResponsesInput>, EngineerUncheckedUpdateWithoutFormResponsesInput>
  }

  export type CustomerServiceUpdateOneRequiredWithoutFormResponsesNestedInput = {
    create?: XOR<CustomerServiceCreateWithoutFormResponsesInput, CustomerServiceUncheckedCreateWithoutFormResponsesInput>
    connectOrCreate?: CustomerServiceCreateOrConnectWithoutFormResponsesInput
    upsert?: CustomerServiceUpsertWithoutFormResponsesInput
    connect?: CustomerServiceWhereUniqueInput
    update?: XOR<XOR<CustomerServiceUpdateToOneWithWhereWithoutFormResponsesInput, CustomerServiceUpdateWithoutFormResponsesInput>, CustomerServiceUncheckedUpdateWithoutFormResponsesInput>
  }

  export type FormTemplateUpdateOneRequiredWithoutFormResponseNestedInput = {
    create?: XOR<FormTemplateCreateWithoutFormResponseInput, FormTemplateUncheckedCreateWithoutFormResponseInput>
    connectOrCreate?: FormTemplateCreateOrConnectWithoutFormResponseInput
    upsert?: FormTemplateUpsertWithoutFormResponseInput
    connect?: FormTemplateWhereUniqueInput
    update?: XOR<XOR<FormTemplateUpdateToOneWithWhereWithoutFormResponseInput, FormTemplateUpdateWithoutFormResponseInput>, FormTemplateUncheckedUpdateWithoutFormResponseInput>
  }

  export type SectionResponseUpdateManyWithoutFormResponsesNestedInput = {
    create?: XOR<SectionResponseCreateWithoutFormResponsesInput, SectionResponseUncheckedCreateWithoutFormResponsesInput> | SectionResponseCreateWithoutFormResponsesInput[] | SectionResponseUncheckedCreateWithoutFormResponsesInput[]
    connectOrCreate?: SectionResponseCreateOrConnectWithoutFormResponsesInput | SectionResponseCreateOrConnectWithoutFormResponsesInput[]
    upsert?: SectionResponseUpsertWithWhereUniqueWithoutFormResponsesInput | SectionResponseUpsertWithWhereUniqueWithoutFormResponsesInput[]
    createMany?: SectionResponseCreateManyFormResponsesInputEnvelope
    set?: SectionResponseWhereUniqueInput | SectionResponseWhereUniqueInput[]
    disconnect?: SectionResponseWhereUniqueInput | SectionResponseWhereUniqueInput[]
    delete?: SectionResponseWhereUniqueInput | SectionResponseWhereUniqueInput[]
    connect?: SectionResponseWhereUniqueInput | SectionResponseWhereUniqueInput[]
    update?: SectionResponseUpdateWithWhereUniqueWithoutFormResponsesInput | SectionResponseUpdateWithWhereUniqueWithoutFormResponsesInput[]
    updateMany?: SectionResponseUpdateManyWithWhereWithoutFormResponsesInput | SectionResponseUpdateManyWithWhereWithoutFormResponsesInput[]
    deleteMany?: SectionResponseScalarWhereInput | SectionResponseScalarWhereInput[]
  }

  export type SectionResponseUncheckedUpdateManyWithoutFormResponsesNestedInput = {
    create?: XOR<SectionResponseCreateWithoutFormResponsesInput, SectionResponseUncheckedCreateWithoutFormResponsesInput> | SectionResponseCreateWithoutFormResponsesInput[] | SectionResponseUncheckedCreateWithoutFormResponsesInput[]
    connectOrCreate?: SectionResponseCreateOrConnectWithoutFormResponsesInput | SectionResponseCreateOrConnectWithoutFormResponsesInput[]
    upsert?: SectionResponseUpsertWithWhereUniqueWithoutFormResponsesInput | SectionResponseUpsertWithWhereUniqueWithoutFormResponsesInput[]
    createMany?: SectionResponseCreateManyFormResponsesInputEnvelope
    set?: SectionResponseWhereUniqueInput | SectionResponseWhereUniqueInput[]
    disconnect?: SectionResponseWhereUniqueInput | SectionResponseWhereUniqueInput[]
    delete?: SectionResponseWhereUniqueInput | SectionResponseWhereUniqueInput[]
    connect?: SectionResponseWhereUniqueInput | SectionResponseWhereUniqueInput[]
    update?: SectionResponseUpdateWithWhereUniqueWithoutFormResponsesInput | SectionResponseUpdateWithWhereUniqueWithoutFormResponsesInput[]
    updateMany?: SectionResponseUpdateManyWithWhereWithoutFormResponsesInput | SectionResponseUpdateManyWithWhereWithoutFormResponsesInput[]
    deleteMany?: SectionResponseScalarWhereInput | SectionResponseScalarWhereInput[]
  }

  export type FormResponseCreateNestedOneWithoutSectionResponsesInput = {
    create?: XOR<FormResponseCreateWithoutSectionResponsesInput, FormResponseUncheckedCreateWithoutSectionResponsesInput>
    connectOrCreate?: FormResponseCreateOrConnectWithoutSectionResponsesInput
    connect?: FormResponseWhereUniqueInput
  }

  export type QuestionResponseCreateNestedManyWithoutSectionResponseInput = {
    create?: XOR<QuestionResponseCreateWithoutSectionResponseInput, QuestionResponseUncheckedCreateWithoutSectionResponseInput> | QuestionResponseCreateWithoutSectionResponseInput[] | QuestionResponseUncheckedCreateWithoutSectionResponseInput[]
    connectOrCreate?: QuestionResponseCreateOrConnectWithoutSectionResponseInput | QuestionResponseCreateOrConnectWithoutSectionResponseInput[]
    createMany?: QuestionResponseCreateManySectionResponseInputEnvelope
    connect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
  }

  export type QuestionResponseUncheckedCreateNestedManyWithoutSectionResponseInput = {
    create?: XOR<QuestionResponseCreateWithoutSectionResponseInput, QuestionResponseUncheckedCreateWithoutSectionResponseInput> | QuestionResponseCreateWithoutSectionResponseInput[] | QuestionResponseUncheckedCreateWithoutSectionResponseInput[]
    connectOrCreate?: QuestionResponseCreateOrConnectWithoutSectionResponseInput | QuestionResponseCreateOrConnectWithoutSectionResponseInput[]
    createMany?: QuestionResponseCreateManySectionResponseInputEnvelope
    connect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
  }

  export type FormResponseUpdateOneRequiredWithoutSectionResponsesNestedInput = {
    create?: XOR<FormResponseCreateWithoutSectionResponsesInput, FormResponseUncheckedCreateWithoutSectionResponsesInput>
    connectOrCreate?: FormResponseCreateOrConnectWithoutSectionResponsesInput
    upsert?: FormResponseUpsertWithoutSectionResponsesInput
    connect?: FormResponseWhereUniqueInput
    update?: XOR<XOR<FormResponseUpdateToOneWithWhereWithoutSectionResponsesInput, FormResponseUpdateWithoutSectionResponsesInput>, FormResponseUncheckedUpdateWithoutSectionResponsesInput>
  }

  export type QuestionResponseUpdateManyWithoutSectionResponseNestedInput = {
    create?: XOR<QuestionResponseCreateWithoutSectionResponseInput, QuestionResponseUncheckedCreateWithoutSectionResponseInput> | QuestionResponseCreateWithoutSectionResponseInput[] | QuestionResponseUncheckedCreateWithoutSectionResponseInput[]
    connectOrCreate?: QuestionResponseCreateOrConnectWithoutSectionResponseInput | QuestionResponseCreateOrConnectWithoutSectionResponseInput[]
    upsert?: QuestionResponseUpsertWithWhereUniqueWithoutSectionResponseInput | QuestionResponseUpsertWithWhereUniqueWithoutSectionResponseInput[]
    createMany?: QuestionResponseCreateManySectionResponseInputEnvelope
    set?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    disconnect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    delete?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    connect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    update?: QuestionResponseUpdateWithWhereUniqueWithoutSectionResponseInput | QuestionResponseUpdateWithWhereUniqueWithoutSectionResponseInput[]
    updateMany?: QuestionResponseUpdateManyWithWhereWithoutSectionResponseInput | QuestionResponseUpdateManyWithWhereWithoutSectionResponseInput[]
    deleteMany?: QuestionResponseScalarWhereInput | QuestionResponseScalarWhereInput[]
  }

  export type QuestionResponseUncheckedUpdateManyWithoutSectionResponseNestedInput = {
    create?: XOR<QuestionResponseCreateWithoutSectionResponseInput, QuestionResponseUncheckedCreateWithoutSectionResponseInput> | QuestionResponseCreateWithoutSectionResponseInput[] | QuestionResponseUncheckedCreateWithoutSectionResponseInput[]
    connectOrCreate?: QuestionResponseCreateOrConnectWithoutSectionResponseInput | QuestionResponseCreateOrConnectWithoutSectionResponseInput[]
    upsert?: QuestionResponseUpsertWithWhereUniqueWithoutSectionResponseInput | QuestionResponseUpsertWithWhereUniqueWithoutSectionResponseInput[]
    createMany?: QuestionResponseCreateManySectionResponseInputEnvelope
    set?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    disconnect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    delete?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    connect?: QuestionResponseWhereUniqueInput | QuestionResponseWhereUniqueInput[]
    update?: QuestionResponseUpdateWithWhereUniqueWithoutSectionResponseInput | QuestionResponseUpdateWithWhereUniqueWithoutSectionResponseInput[]
    updateMany?: QuestionResponseUpdateManyWithWhereWithoutSectionResponseInput | QuestionResponseUpdateManyWithWhereWithoutSectionResponseInput[]
    deleteMany?: QuestionResponseScalarWhereInput | QuestionResponseScalarWhereInput[]
  }

  export type SectionResponseCreateNestedOneWithoutQuestionResponsesInput = {
    create?: XOR<SectionResponseCreateWithoutQuestionResponsesInput, SectionResponseUncheckedCreateWithoutQuestionResponsesInput>
    connectOrCreate?: SectionResponseCreateOrConnectWithoutQuestionResponsesInput
    connect?: SectionResponseWhereUniqueInput
  }

  export type SectionResponseUpdateOneRequiredWithoutQuestionResponsesNestedInput = {
    create?: XOR<SectionResponseCreateWithoutQuestionResponsesInput, SectionResponseUncheckedCreateWithoutQuestionResponsesInput>
    connectOrCreate?: SectionResponseCreateOrConnectWithoutQuestionResponsesInput
    upsert?: SectionResponseUpsertWithoutQuestionResponsesInput
    connect?: SectionResponseWhereUniqueInput
    update?: XOR<XOR<SectionResponseUpdateToOneWithWhereWithoutQuestionResponsesInput, SectionResponseUpdateWithoutQuestionResponsesInput>, SectionResponseUncheckedUpdateWithoutQuestionResponsesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type CustomerServiceCreateWithoutCustomerInput = {
    assignedAt?: Date | string
    service: ServiceCreateNestedOneWithoutCustomerServicesInput
    formResponses?: FormResponseCreateNestedManyWithoutCustomerServiceInput
  }

  export type CustomerServiceUncheckedCreateWithoutCustomerInput = {
    ID?: number
    serviceID: number
    assignedAt?: Date | string
    formResponses?: FormResponseUncheckedCreateNestedManyWithoutCustomerServiceInput
  }

  export type CustomerServiceCreateOrConnectWithoutCustomerInput = {
    where: CustomerServiceWhereUniqueInput
    create: XOR<CustomerServiceCreateWithoutCustomerInput, CustomerServiceUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerServiceCreateManyCustomerInputEnvelope = {
    data: CustomerServiceCreateManyCustomerInput | CustomerServiceCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type CustomerServiceUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CustomerServiceWhereUniqueInput
    update: XOR<CustomerServiceUpdateWithoutCustomerInput, CustomerServiceUncheckedUpdateWithoutCustomerInput>
    create: XOR<CustomerServiceCreateWithoutCustomerInput, CustomerServiceUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerServiceUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CustomerServiceWhereUniqueInput
    data: XOR<CustomerServiceUpdateWithoutCustomerInput, CustomerServiceUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerServiceUpdateManyWithWhereWithoutCustomerInput = {
    where: CustomerServiceScalarWhereInput
    data: XOR<CustomerServiceUpdateManyMutationInput, CustomerServiceUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerServiceScalarWhereInput = {
    AND?: CustomerServiceScalarWhereInput | CustomerServiceScalarWhereInput[]
    OR?: CustomerServiceScalarWhereInput[]
    NOT?: CustomerServiceScalarWhereInput | CustomerServiceScalarWhereInput[]
    ID?: IntFilter<"CustomerService"> | number
    customerID?: IntFilter<"CustomerService"> | number
    serviceID?: IntFilter<"CustomerService"> | number
    assignedAt?: DateTimeFilter<"CustomerService"> | Date | string
  }

  export type ServiceCreateWithoutAdminInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    formTemplate: FormTemplateCreateNestedOneWithoutServicesInput
    customerServices?: CustomerServiceCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutAdminInput = {
    ID?: number
    name: string
    formTemplateID: number
    createdAt?: Date | string
    updatedAt?: Date | string
    customerServices?: CustomerServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutAdminInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutAdminInput, ServiceUncheckedCreateWithoutAdminInput>
  }

  export type ServiceCreateManyAdminInputEnvelope = {
    data: ServiceCreateManyAdminInput | ServiceCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type VPNCreateWithoutAdminInput = {
    name: string
    peerIP: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    engineer: EngineerCreateNestedOneWithoutVpnsInput
  }

  export type VPNUncheckedCreateWithoutAdminInput = {
    ID?: number
    name: string
    peerIP: string
    status: string
    engineerID: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VPNCreateOrConnectWithoutAdminInput = {
    where: VPNWhereUniqueInput
    create: XOR<VPNCreateWithoutAdminInput, VPNUncheckedCreateWithoutAdminInput>
  }

  export type VPNCreateManyAdminInputEnvelope = {
    data: VPNCreateManyAdminInput | VPNCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type FormTemplateCreateWithoutCreatedByInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: SectionTemplateCreateNestedManyWithoutFormInput
    services?: ServiceCreateNestedManyWithoutFormTemplateInput
    formResponse?: FormResponseCreateNestedManyWithoutFormTemplateInput
  }

  export type FormTemplateUncheckedCreateWithoutCreatedByInput = {
    ID?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: SectionTemplateUncheckedCreateNestedManyWithoutFormInput
    services?: ServiceUncheckedCreateNestedManyWithoutFormTemplateInput
    formResponse?: FormResponseUncheckedCreateNestedManyWithoutFormTemplateInput
  }

  export type FormTemplateCreateOrConnectWithoutCreatedByInput = {
    where: FormTemplateWhereUniqueInput
    create: XOR<FormTemplateCreateWithoutCreatedByInput, FormTemplateUncheckedCreateWithoutCreatedByInput>
  }

  export type FormTemplateCreateManyCreatedByInputEnvelope = {
    data: FormTemplateCreateManyCreatedByInput | FormTemplateCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ServiceUpsertWithWhereUniqueWithoutAdminInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutAdminInput, ServiceUncheckedUpdateWithoutAdminInput>
    create: XOR<ServiceCreateWithoutAdminInput, ServiceUncheckedCreateWithoutAdminInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutAdminInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutAdminInput, ServiceUncheckedUpdateWithoutAdminInput>
  }

  export type ServiceUpdateManyWithWhereWithoutAdminInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutAdminInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    ID?: IntFilter<"Service"> | number
    name?: StringFilter<"Service"> | string
    adminID?: IntFilter<"Service"> | number
    formTemplateID?: IntFilter<"Service"> | number
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
  }

  export type VPNUpsertWithWhereUniqueWithoutAdminInput = {
    where: VPNWhereUniqueInput
    update: XOR<VPNUpdateWithoutAdminInput, VPNUncheckedUpdateWithoutAdminInput>
    create: XOR<VPNCreateWithoutAdminInput, VPNUncheckedCreateWithoutAdminInput>
  }

  export type VPNUpdateWithWhereUniqueWithoutAdminInput = {
    where: VPNWhereUniqueInput
    data: XOR<VPNUpdateWithoutAdminInput, VPNUncheckedUpdateWithoutAdminInput>
  }

  export type VPNUpdateManyWithWhereWithoutAdminInput = {
    where: VPNScalarWhereInput
    data: XOR<VPNUpdateManyMutationInput, VPNUncheckedUpdateManyWithoutAdminInput>
  }

  export type VPNScalarWhereInput = {
    AND?: VPNScalarWhereInput | VPNScalarWhereInput[]
    OR?: VPNScalarWhereInput[]
    NOT?: VPNScalarWhereInput | VPNScalarWhereInput[]
    ID?: IntFilter<"VPN"> | number
    name?: StringFilter<"VPN"> | string
    peerIP?: StringFilter<"VPN"> | string
    status?: StringFilter<"VPN"> | string
    adminID?: IntFilter<"VPN"> | number
    engineerID?: IntFilter<"VPN"> | number
    createdAt?: DateTimeFilter<"VPN"> | Date | string
    updatedAt?: DateTimeFilter<"VPN"> | Date | string
  }

  export type FormTemplateUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: FormTemplateWhereUniqueInput
    update: XOR<FormTemplateUpdateWithoutCreatedByInput, FormTemplateUncheckedUpdateWithoutCreatedByInput>
    create: XOR<FormTemplateCreateWithoutCreatedByInput, FormTemplateUncheckedCreateWithoutCreatedByInput>
  }

  export type FormTemplateUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: FormTemplateWhereUniqueInput
    data: XOR<FormTemplateUpdateWithoutCreatedByInput, FormTemplateUncheckedUpdateWithoutCreatedByInput>
  }

  export type FormTemplateUpdateManyWithWhereWithoutCreatedByInput = {
    where: FormTemplateScalarWhereInput
    data: XOR<FormTemplateUpdateManyMutationInput, FormTemplateUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type FormTemplateScalarWhereInput = {
    AND?: FormTemplateScalarWhereInput | FormTemplateScalarWhereInput[]
    OR?: FormTemplateScalarWhereInput[]
    NOT?: FormTemplateScalarWhereInput | FormTemplateScalarWhereInput[]
    ID?: IntFilter<"FormTemplate"> | number
    name?: StringFilter<"FormTemplate"> | string
    createdByID?: IntFilter<"FormTemplate"> | number
    createdAt?: DateTimeFilter<"FormTemplate"> | Date | string
    updatedAt?: DateTimeFilter<"FormTemplate"> | Date | string
  }

  export type FormResponseCreateWithoutEngineerInput = {
    filledAt?: Date | string
    updatedAt?: Date | string
    customerService: CustomerServiceCreateNestedOneWithoutFormResponsesInput
    formTemplate: FormTemplateCreateNestedOneWithoutFormResponseInput
    sectionResponses?: SectionResponseCreateNestedManyWithoutFormResponsesInput
  }

  export type FormResponseUncheckedCreateWithoutEngineerInput = {
    ID?: number
    filledAt?: Date | string
    updatedAt?: Date | string
    customerServiceID: number
    formTemplateID: number
    sectionResponses?: SectionResponseUncheckedCreateNestedManyWithoutFormResponsesInput
  }

  export type FormResponseCreateOrConnectWithoutEngineerInput = {
    where: FormResponseWhereUniqueInput
    create: XOR<FormResponseCreateWithoutEngineerInput, FormResponseUncheckedCreateWithoutEngineerInput>
  }

  export type FormResponseCreateManyEngineerInputEnvelope = {
    data: FormResponseCreateManyEngineerInput | FormResponseCreateManyEngineerInput[]
    skipDuplicates?: boolean
  }

  export type VPNCreateWithoutEngineerInput = {
    name: string
    peerIP: string
    status: string
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: AdminCreateNestedOneWithoutVpnsInput
  }

  export type VPNUncheckedCreateWithoutEngineerInput = {
    ID?: number
    name: string
    peerIP: string
    status: string
    adminID: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VPNCreateOrConnectWithoutEngineerInput = {
    where: VPNWhereUniqueInput
    create: XOR<VPNCreateWithoutEngineerInput, VPNUncheckedCreateWithoutEngineerInput>
  }

  export type VPNCreateManyEngineerInputEnvelope = {
    data: VPNCreateManyEngineerInput | VPNCreateManyEngineerInput[]
    skipDuplicates?: boolean
  }

  export type FormResponseUpsertWithWhereUniqueWithoutEngineerInput = {
    where: FormResponseWhereUniqueInput
    update: XOR<FormResponseUpdateWithoutEngineerInput, FormResponseUncheckedUpdateWithoutEngineerInput>
    create: XOR<FormResponseCreateWithoutEngineerInput, FormResponseUncheckedCreateWithoutEngineerInput>
  }

  export type FormResponseUpdateWithWhereUniqueWithoutEngineerInput = {
    where: FormResponseWhereUniqueInput
    data: XOR<FormResponseUpdateWithoutEngineerInput, FormResponseUncheckedUpdateWithoutEngineerInput>
  }

  export type FormResponseUpdateManyWithWhereWithoutEngineerInput = {
    where: FormResponseScalarWhereInput
    data: XOR<FormResponseUpdateManyMutationInput, FormResponseUncheckedUpdateManyWithoutEngineerInput>
  }

  export type FormResponseScalarWhereInput = {
    AND?: FormResponseScalarWhereInput | FormResponseScalarWhereInput[]
    OR?: FormResponseScalarWhereInput[]
    NOT?: FormResponseScalarWhereInput | FormResponseScalarWhereInput[]
    ID?: IntFilter<"FormResponse"> | number
    filledAt?: DateTimeFilter<"FormResponse"> | Date | string
    updatedAt?: DateTimeFilter<"FormResponse"> | Date | string
    engineerID?: IntFilter<"FormResponse"> | number
    customerServiceID?: IntFilter<"FormResponse"> | number
    formTemplateID?: IntFilter<"FormResponse"> | number
  }

  export type VPNUpsertWithWhereUniqueWithoutEngineerInput = {
    where: VPNWhereUniqueInput
    update: XOR<VPNUpdateWithoutEngineerInput, VPNUncheckedUpdateWithoutEngineerInput>
    create: XOR<VPNCreateWithoutEngineerInput, VPNUncheckedCreateWithoutEngineerInput>
  }

  export type VPNUpdateWithWhereUniqueWithoutEngineerInput = {
    where: VPNWhereUniqueInput
    data: XOR<VPNUpdateWithoutEngineerInput, VPNUncheckedUpdateWithoutEngineerInput>
  }

  export type VPNUpdateManyWithWhereWithoutEngineerInput = {
    where: VPNScalarWhereInput
    data: XOR<VPNUpdateManyMutationInput, VPNUncheckedUpdateManyWithoutEngineerInput>
  }

  export type AdminCreateWithoutServicesInput = {
    role: $Enums.Role
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    vpns?: VPNCreateNestedManyWithoutAdminInput
    formTemplates?: FormTemplateCreateNestedManyWithoutCreatedByInput
  }

  export type AdminUncheckedCreateWithoutServicesInput = {
    ID?: number
    role: $Enums.Role
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    vpns?: VPNUncheckedCreateNestedManyWithoutAdminInput
    formTemplates?: FormTemplateUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type AdminCreateOrConnectWithoutServicesInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutServicesInput, AdminUncheckedCreateWithoutServicesInput>
  }

  export type FormTemplateCreateWithoutServicesInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: AdminCreateNestedOneWithoutFormTemplatesInput
    sections?: SectionTemplateCreateNestedManyWithoutFormInput
    formResponse?: FormResponseCreateNestedManyWithoutFormTemplateInput
  }

  export type FormTemplateUncheckedCreateWithoutServicesInput = {
    ID?: number
    name: string
    createdByID: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: SectionTemplateUncheckedCreateNestedManyWithoutFormInput
    formResponse?: FormResponseUncheckedCreateNestedManyWithoutFormTemplateInput
  }

  export type FormTemplateCreateOrConnectWithoutServicesInput = {
    where: FormTemplateWhereUniqueInput
    create: XOR<FormTemplateCreateWithoutServicesInput, FormTemplateUncheckedCreateWithoutServicesInput>
  }

  export type CustomerServiceCreateWithoutServiceInput = {
    assignedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutCustomerServicesInput
    formResponses?: FormResponseCreateNestedManyWithoutCustomerServiceInput
  }

  export type CustomerServiceUncheckedCreateWithoutServiceInput = {
    ID?: number
    customerID: number
    assignedAt?: Date | string
    formResponses?: FormResponseUncheckedCreateNestedManyWithoutCustomerServiceInput
  }

  export type CustomerServiceCreateOrConnectWithoutServiceInput = {
    where: CustomerServiceWhereUniqueInput
    create: XOR<CustomerServiceCreateWithoutServiceInput, CustomerServiceUncheckedCreateWithoutServiceInput>
  }

  export type CustomerServiceCreateManyServiceInputEnvelope = {
    data: CustomerServiceCreateManyServiceInput | CustomerServiceCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type AdminUpsertWithoutServicesInput = {
    update: XOR<AdminUpdateWithoutServicesInput, AdminUncheckedUpdateWithoutServicesInput>
    create: XOR<AdminCreateWithoutServicesInput, AdminUncheckedCreateWithoutServicesInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutServicesInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutServicesInput, AdminUncheckedUpdateWithoutServicesInput>
  }

  export type AdminUpdateWithoutServicesInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    vpns?: VPNUpdateManyWithoutAdminNestedInput
    formTemplates?: FormTemplateUpdateManyWithoutCreatedByNestedInput
  }

  export type AdminUncheckedUpdateWithoutServicesInput = {
    ID?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    vpns?: VPNUncheckedUpdateManyWithoutAdminNestedInput
    formTemplates?: FormTemplateUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type FormTemplateUpsertWithoutServicesInput = {
    update: XOR<FormTemplateUpdateWithoutServicesInput, FormTemplateUncheckedUpdateWithoutServicesInput>
    create: XOR<FormTemplateCreateWithoutServicesInput, FormTemplateUncheckedCreateWithoutServicesInput>
    where?: FormTemplateWhereInput
  }

  export type FormTemplateUpdateToOneWithWhereWithoutServicesInput = {
    where?: FormTemplateWhereInput
    data: XOR<FormTemplateUpdateWithoutServicesInput, FormTemplateUncheckedUpdateWithoutServicesInput>
  }

  export type FormTemplateUpdateWithoutServicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: AdminUpdateOneRequiredWithoutFormTemplatesNestedInput
    sections?: SectionTemplateUpdateManyWithoutFormNestedInput
    formResponse?: FormResponseUpdateManyWithoutFormTemplateNestedInput
  }

  export type FormTemplateUncheckedUpdateWithoutServicesInput = {
    ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdByID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: SectionTemplateUncheckedUpdateManyWithoutFormNestedInput
    formResponse?: FormResponseUncheckedUpdateManyWithoutFormTemplateNestedInput
  }

  export type CustomerServiceUpsertWithWhereUniqueWithoutServiceInput = {
    where: CustomerServiceWhereUniqueInput
    update: XOR<CustomerServiceUpdateWithoutServiceInput, CustomerServiceUncheckedUpdateWithoutServiceInput>
    create: XOR<CustomerServiceCreateWithoutServiceInput, CustomerServiceUncheckedCreateWithoutServiceInput>
  }

  export type CustomerServiceUpdateWithWhereUniqueWithoutServiceInput = {
    where: CustomerServiceWhereUniqueInput
    data: XOR<CustomerServiceUpdateWithoutServiceInput, CustomerServiceUncheckedUpdateWithoutServiceInput>
  }

  export type CustomerServiceUpdateManyWithWhereWithoutServiceInput = {
    where: CustomerServiceScalarWhereInput
    data: XOR<CustomerServiceUpdateManyMutationInput, CustomerServiceUncheckedUpdateManyWithoutServiceInput>
  }

  export type CustomerCreateWithoutCustomerServicesInput = {
    name: string
    createdAt?: Date | string
  }

  export type CustomerUncheckedCreateWithoutCustomerServicesInput = {
    ID?: number
    name: string
    createdAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutCustomerServicesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutCustomerServicesInput, CustomerUncheckedCreateWithoutCustomerServicesInput>
  }

  export type ServiceCreateWithoutCustomerServicesInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: AdminCreateNestedOneWithoutServicesInput
    formTemplate: FormTemplateCreateNestedOneWithoutServicesInput
  }

  export type ServiceUncheckedCreateWithoutCustomerServicesInput = {
    ID?: number
    name: string
    adminID: number
    formTemplateID: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceCreateOrConnectWithoutCustomerServicesInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutCustomerServicesInput, ServiceUncheckedCreateWithoutCustomerServicesInput>
  }

  export type FormResponseCreateWithoutCustomerServiceInput = {
    filledAt?: Date | string
    updatedAt?: Date | string
    engineer: EngineerCreateNestedOneWithoutFormResponsesInput
    formTemplate: FormTemplateCreateNestedOneWithoutFormResponseInput
    sectionResponses?: SectionResponseCreateNestedManyWithoutFormResponsesInput
  }

  export type FormResponseUncheckedCreateWithoutCustomerServiceInput = {
    ID?: number
    filledAt?: Date | string
    updatedAt?: Date | string
    engineerID: number
    formTemplateID: number
    sectionResponses?: SectionResponseUncheckedCreateNestedManyWithoutFormResponsesInput
  }

  export type FormResponseCreateOrConnectWithoutCustomerServiceInput = {
    where: FormResponseWhereUniqueInput
    create: XOR<FormResponseCreateWithoutCustomerServiceInput, FormResponseUncheckedCreateWithoutCustomerServiceInput>
  }

  export type FormResponseCreateManyCustomerServiceInputEnvelope = {
    data: FormResponseCreateManyCustomerServiceInput | FormResponseCreateManyCustomerServiceInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutCustomerServicesInput = {
    update: XOR<CustomerUpdateWithoutCustomerServicesInput, CustomerUncheckedUpdateWithoutCustomerServicesInput>
    create: XOR<CustomerCreateWithoutCustomerServicesInput, CustomerUncheckedCreateWithoutCustomerServicesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutCustomerServicesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutCustomerServicesInput, CustomerUncheckedUpdateWithoutCustomerServicesInput>
  }

  export type CustomerUpdateWithoutCustomerServicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateWithoutCustomerServicesInput = {
    ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUpsertWithoutCustomerServicesInput = {
    update: XOR<ServiceUpdateWithoutCustomerServicesInput, ServiceUncheckedUpdateWithoutCustomerServicesInput>
    create: XOR<ServiceCreateWithoutCustomerServicesInput, ServiceUncheckedCreateWithoutCustomerServicesInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutCustomerServicesInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutCustomerServicesInput, ServiceUncheckedUpdateWithoutCustomerServicesInput>
  }

  export type ServiceUpdateWithoutCustomerServicesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneRequiredWithoutServicesNestedInput
    formTemplate?: FormTemplateUpdateOneRequiredWithoutServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutCustomerServicesInput = {
    ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    adminID?: IntFieldUpdateOperationsInput | number
    formTemplateID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormResponseUpsertWithWhereUniqueWithoutCustomerServiceInput = {
    where: FormResponseWhereUniqueInput
    update: XOR<FormResponseUpdateWithoutCustomerServiceInput, FormResponseUncheckedUpdateWithoutCustomerServiceInput>
    create: XOR<FormResponseCreateWithoutCustomerServiceInput, FormResponseUncheckedCreateWithoutCustomerServiceInput>
  }

  export type FormResponseUpdateWithWhereUniqueWithoutCustomerServiceInput = {
    where: FormResponseWhereUniqueInput
    data: XOR<FormResponseUpdateWithoutCustomerServiceInput, FormResponseUncheckedUpdateWithoutCustomerServiceInput>
  }

  export type FormResponseUpdateManyWithWhereWithoutCustomerServiceInput = {
    where: FormResponseScalarWhereInput
    data: XOR<FormResponseUpdateManyMutationInput, FormResponseUncheckedUpdateManyWithoutCustomerServiceInput>
  }

  export type AdminCreateWithoutVpnsInput = {
    role: $Enums.Role
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    services?: ServiceCreateNestedManyWithoutAdminInput
    formTemplates?: FormTemplateCreateNestedManyWithoutCreatedByInput
  }

  export type AdminUncheckedCreateWithoutVpnsInput = {
    ID?: number
    role: $Enums.Role
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    services?: ServiceUncheckedCreateNestedManyWithoutAdminInput
    formTemplates?: FormTemplateUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type AdminCreateOrConnectWithoutVpnsInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutVpnsInput, AdminUncheckedCreateWithoutVpnsInput>
  }

  export type EngineerCreateWithoutVpnsInput = {
    role: $Enums.Role
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    formResponses?: FormResponseCreateNestedManyWithoutEngineerInput
  }

  export type EngineerUncheckedCreateWithoutVpnsInput = {
    ID?: number
    role: $Enums.Role
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    formResponses?: FormResponseUncheckedCreateNestedManyWithoutEngineerInput
  }

  export type EngineerCreateOrConnectWithoutVpnsInput = {
    where: EngineerWhereUniqueInput
    create: XOR<EngineerCreateWithoutVpnsInput, EngineerUncheckedCreateWithoutVpnsInput>
  }

  export type AdminUpsertWithoutVpnsInput = {
    update: XOR<AdminUpdateWithoutVpnsInput, AdminUncheckedUpdateWithoutVpnsInput>
    create: XOR<AdminCreateWithoutVpnsInput, AdminUncheckedCreateWithoutVpnsInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutVpnsInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutVpnsInput, AdminUncheckedUpdateWithoutVpnsInput>
  }

  export type AdminUpdateWithoutVpnsInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    services?: ServiceUpdateManyWithoutAdminNestedInput
    formTemplates?: FormTemplateUpdateManyWithoutCreatedByNestedInput
  }

  export type AdminUncheckedUpdateWithoutVpnsInput = {
    ID?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    services?: ServiceUncheckedUpdateManyWithoutAdminNestedInput
    formTemplates?: FormTemplateUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type EngineerUpsertWithoutVpnsInput = {
    update: XOR<EngineerUpdateWithoutVpnsInput, EngineerUncheckedUpdateWithoutVpnsInput>
    create: XOR<EngineerCreateWithoutVpnsInput, EngineerUncheckedCreateWithoutVpnsInput>
    where?: EngineerWhereInput
  }

  export type EngineerUpdateToOneWithWhereWithoutVpnsInput = {
    where?: EngineerWhereInput
    data: XOR<EngineerUpdateWithoutVpnsInput, EngineerUncheckedUpdateWithoutVpnsInput>
  }

  export type EngineerUpdateWithoutVpnsInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    formResponses?: FormResponseUpdateManyWithoutEngineerNestedInput
  }

  export type EngineerUncheckedUpdateWithoutVpnsInput = {
    ID?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    formResponses?: FormResponseUncheckedUpdateManyWithoutEngineerNestedInput
  }

  export type AdminCreateWithoutFormTemplatesInput = {
    role: $Enums.Role
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    services?: ServiceCreateNestedManyWithoutAdminInput
    vpns?: VPNCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutFormTemplatesInput = {
    ID?: number
    role: $Enums.Role
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    services?: ServiceUncheckedCreateNestedManyWithoutAdminInput
    vpns?: VPNUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutFormTemplatesInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutFormTemplatesInput, AdminUncheckedCreateWithoutFormTemplatesInput>
  }

  export type SectionTemplateCreateWithoutFormInput = {
    name: string
    questions?: QuestionTemplateCreateNestedManyWithoutSectionInput
  }

  export type SectionTemplateUncheckedCreateWithoutFormInput = {
    ID?: number
    name: string
    questions?: QuestionTemplateUncheckedCreateNestedManyWithoutSectionInput
  }

  export type SectionTemplateCreateOrConnectWithoutFormInput = {
    where: SectionTemplateWhereUniqueInput
    create: XOR<SectionTemplateCreateWithoutFormInput, SectionTemplateUncheckedCreateWithoutFormInput>
  }

  export type SectionTemplateCreateManyFormInputEnvelope = {
    data: SectionTemplateCreateManyFormInput | SectionTemplateCreateManyFormInput[]
    skipDuplicates?: boolean
  }

  export type ServiceCreateWithoutFormTemplateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    admin: AdminCreateNestedOneWithoutServicesInput
    customerServices?: CustomerServiceCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutFormTemplateInput = {
    ID?: number
    name: string
    adminID: number
    createdAt?: Date | string
    updatedAt?: Date | string
    customerServices?: CustomerServiceUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutFormTemplateInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutFormTemplateInput, ServiceUncheckedCreateWithoutFormTemplateInput>
  }

  export type ServiceCreateManyFormTemplateInputEnvelope = {
    data: ServiceCreateManyFormTemplateInput | ServiceCreateManyFormTemplateInput[]
    skipDuplicates?: boolean
  }

  export type FormResponseCreateWithoutFormTemplateInput = {
    filledAt?: Date | string
    updatedAt?: Date | string
    engineer: EngineerCreateNestedOneWithoutFormResponsesInput
    customerService: CustomerServiceCreateNestedOneWithoutFormResponsesInput
    sectionResponses?: SectionResponseCreateNestedManyWithoutFormResponsesInput
  }

  export type FormResponseUncheckedCreateWithoutFormTemplateInput = {
    ID?: number
    filledAt?: Date | string
    updatedAt?: Date | string
    engineerID: number
    customerServiceID: number
    sectionResponses?: SectionResponseUncheckedCreateNestedManyWithoutFormResponsesInput
  }

  export type FormResponseCreateOrConnectWithoutFormTemplateInput = {
    where: FormResponseWhereUniqueInput
    create: XOR<FormResponseCreateWithoutFormTemplateInput, FormResponseUncheckedCreateWithoutFormTemplateInput>
  }

  export type FormResponseCreateManyFormTemplateInputEnvelope = {
    data: FormResponseCreateManyFormTemplateInput | FormResponseCreateManyFormTemplateInput[]
    skipDuplicates?: boolean
  }

  export type AdminUpsertWithoutFormTemplatesInput = {
    update: XOR<AdminUpdateWithoutFormTemplatesInput, AdminUncheckedUpdateWithoutFormTemplatesInput>
    create: XOR<AdminCreateWithoutFormTemplatesInput, AdminUncheckedCreateWithoutFormTemplatesInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutFormTemplatesInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutFormTemplatesInput, AdminUncheckedUpdateWithoutFormTemplatesInput>
  }

  export type AdminUpdateWithoutFormTemplatesInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    services?: ServiceUpdateManyWithoutAdminNestedInput
    vpns?: VPNUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutFormTemplatesInput = {
    ID?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    services?: ServiceUncheckedUpdateManyWithoutAdminNestedInput
    vpns?: VPNUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type SectionTemplateUpsertWithWhereUniqueWithoutFormInput = {
    where: SectionTemplateWhereUniqueInput
    update: XOR<SectionTemplateUpdateWithoutFormInput, SectionTemplateUncheckedUpdateWithoutFormInput>
    create: XOR<SectionTemplateCreateWithoutFormInput, SectionTemplateUncheckedCreateWithoutFormInput>
  }

  export type SectionTemplateUpdateWithWhereUniqueWithoutFormInput = {
    where: SectionTemplateWhereUniqueInput
    data: XOR<SectionTemplateUpdateWithoutFormInput, SectionTemplateUncheckedUpdateWithoutFormInput>
  }

  export type SectionTemplateUpdateManyWithWhereWithoutFormInput = {
    where: SectionTemplateScalarWhereInput
    data: XOR<SectionTemplateUpdateManyMutationInput, SectionTemplateUncheckedUpdateManyWithoutFormInput>
  }

  export type SectionTemplateScalarWhereInput = {
    AND?: SectionTemplateScalarWhereInput | SectionTemplateScalarWhereInput[]
    OR?: SectionTemplateScalarWhereInput[]
    NOT?: SectionTemplateScalarWhereInput | SectionTemplateScalarWhereInput[]
    ID?: IntFilter<"SectionTemplate"> | number
    name?: StringFilter<"SectionTemplate"> | string
    formID?: IntFilter<"SectionTemplate"> | number
  }

  export type ServiceUpsertWithWhereUniqueWithoutFormTemplateInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutFormTemplateInput, ServiceUncheckedUpdateWithoutFormTemplateInput>
    create: XOR<ServiceCreateWithoutFormTemplateInput, ServiceUncheckedCreateWithoutFormTemplateInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutFormTemplateInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutFormTemplateInput, ServiceUncheckedUpdateWithoutFormTemplateInput>
  }

  export type ServiceUpdateManyWithWhereWithoutFormTemplateInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutFormTemplateInput>
  }

  export type FormResponseUpsertWithWhereUniqueWithoutFormTemplateInput = {
    where: FormResponseWhereUniqueInput
    update: XOR<FormResponseUpdateWithoutFormTemplateInput, FormResponseUncheckedUpdateWithoutFormTemplateInput>
    create: XOR<FormResponseCreateWithoutFormTemplateInput, FormResponseUncheckedCreateWithoutFormTemplateInput>
  }

  export type FormResponseUpdateWithWhereUniqueWithoutFormTemplateInput = {
    where: FormResponseWhereUniqueInput
    data: XOR<FormResponseUpdateWithoutFormTemplateInput, FormResponseUncheckedUpdateWithoutFormTemplateInput>
  }

  export type FormResponseUpdateManyWithWhereWithoutFormTemplateInput = {
    where: FormResponseScalarWhereInput
    data: XOR<FormResponseUpdateManyMutationInput, FormResponseUncheckedUpdateManyWithoutFormTemplateInput>
  }

  export type FormTemplateCreateWithoutSectionsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: AdminCreateNestedOneWithoutFormTemplatesInput
    services?: ServiceCreateNestedManyWithoutFormTemplateInput
    formResponse?: FormResponseCreateNestedManyWithoutFormTemplateInput
  }

  export type FormTemplateUncheckedCreateWithoutSectionsInput = {
    ID?: number
    name: string
    createdByID: number
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutFormTemplateInput
    formResponse?: FormResponseUncheckedCreateNestedManyWithoutFormTemplateInput
  }

  export type FormTemplateCreateOrConnectWithoutSectionsInput = {
    where: FormTemplateWhereUniqueInput
    create: XOR<FormTemplateCreateWithoutSectionsInput, FormTemplateUncheckedCreateWithoutSectionsInput>
  }

  export type QuestionTemplateCreateWithoutSectionInput = {
    text: string
  }

  export type QuestionTemplateUncheckedCreateWithoutSectionInput = {
    ID?: number
    text: string
  }

  export type QuestionTemplateCreateOrConnectWithoutSectionInput = {
    where: QuestionTemplateWhereUniqueInput
    create: XOR<QuestionTemplateCreateWithoutSectionInput, QuestionTemplateUncheckedCreateWithoutSectionInput>
  }

  export type QuestionTemplateCreateManySectionInputEnvelope = {
    data: QuestionTemplateCreateManySectionInput | QuestionTemplateCreateManySectionInput[]
    skipDuplicates?: boolean
  }

  export type FormTemplateUpsertWithoutSectionsInput = {
    update: XOR<FormTemplateUpdateWithoutSectionsInput, FormTemplateUncheckedUpdateWithoutSectionsInput>
    create: XOR<FormTemplateCreateWithoutSectionsInput, FormTemplateUncheckedCreateWithoutSectionsInput>
    where?: FormTemplateWhereInput
  }

  export type FormTemplateUpdateToOneWithWhereWithoutSectionsInput = {
    where?: FormTemplateWhereInput
    data: XOR<FormTemplateUpdateWithoutSectionsInput, FormTemplateUncheckedUpdateWithoutSectionsInput>
  }

  export type FormTemplateUpdateWithoutSectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: AdminUpdateOneRequiredWithoutFormTemplatesNestedInput
    services?: ServiceUpdateManyWithoutFormTemplateNestedInput
    formResponse?: FormResponseUpdateManyWithoutFormTemplateNestedInput
  }

  export type FormTemplateUncheckedUpdateWithoutSectionsInput = {
    ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdByID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutFormTemplateNestedInput
    formResponse?: FormResponseUncheckedUpdateManyWithoutFormTemplateNestedInput
  }

  export type QuestionTemplateUpsertWithWhereUniqueWithoutSectionInput = {
    where: QuestionTemplateWhereUniqueInput
    update: XOR<QuestionTemplateUpdateWithoutSectionInput, QuestionTemplateUncheckedUpdateWithoutSectionInput>
    create: XOR<QuestionTemplateCreateWithoutSectionInput, QuestionTemplateUncheckedCreateWithoutSectionInput>
  }

  export type QuestionTemplateUpdateWithWhereUniqueWithoutSectionInput = {
    where: QuestionTemplateWhereUniqueInput
    data: XOR<QuestionTemplateUpdateWithoutSectionInput, QuestionTemplateUncheckedUpdateWithoutSectionInput>
  }

  export type QuestionTemplateUpdateManyWithWhereWithoutSectionInput = {
    where: QuestionTemplateScalarWhereInput
    data: XOR<QuestionTemplateUpdateManyMutationInput, QuestionTemplateUncheckedUpdateManyWithoutSectionInput>
  }

  export type QuestionTemplateScalarWhereInput = {
    AND?: QuestionTemplateScalarWhereInput | QuestionTemplateScalarWhereInput[]
    OR?: QuestionTemplateScalarWhereInput[]
    NOT?: QuestionTemplateScalarWhereInput | QuestionTemplateScalarWhereInput[]
    ID?: IntFilter<"QuestionTemplate"> | number
    text?: StringFilter<"QuestionTemplate"> | string
    sectionID?: IntFilter<"QuestionTemplate"> | number
  }

  export type SectionTemplateCreateWithoutQuestionsInput = {
    name: string
    form: FormTemplateCreateNestedOneWithoutSectionsInput
  }

  export type SectionTemplateUncheckedCreateWithoutQuestionsInput = {
    ID?: number
    name: string
    formID: number
  }

  export type SectionTemplateCreateOrConnectWithoutQuestionsInput = {
    where: SectionTemplateWhereUniqueInput
    create: XOR<SectionTemplateCreateWithoutQuestionsInput, SectionTemplateUncheckedCreateWithoutQuestionsInput>
  }

  export type SectionTemplateUpsertWithoutQuestionsInput = {
    update: XOR<SectionTemplateUpdateWithoutQuestionsInput, SectionTemplateUncheckedUpdateWithoutQuestionsInput>
    create: XOR<SectionTemplateCreateWithoutQuestionsInput, SectionTemplateUncheckedCreateWithoutQuestionsInput>
    where?: SectionTemplateWhereInput
  }

  export type SectionTemplateUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: SectionTemplateWhereInput
    data: XOR<SectionTemplateUpdateWithoutQuestionsInput, SectionTemplateUncheckedUpdateWithoutQuestionsInput>
  }

  export type SectionTemplateUpdateWithoutQuestionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    form?: FormTemplateUpdateOneRequiredWithoutSectionsNestedInput
  }

  export type SectionTemplateUncheckedUpdateWithoutQuestionsInput = {
    ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    formID?: IntFieldUpdateOperationsInput | number
  }

  export type EngineerCreateWithoutFormResponsesInput = {
    role: $Enums.Role
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    vpns?: VPNCreateNestedManyWithoutEngineerInput
  }

  export type EngineerUncheckedCreateWithoutFormResponsesInput = {
    ID?: number
    role: $Enums.Role
    firstName: string
    lastName: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    password: string
    vpns?: VPNUncheckedCreateNestedManyWithoutEngineerInput
  }

  export type EngineerCreateOrConnectWithoutFormResponsesInput = {
    where: EngineerWhereUniqueInput
    create: XOR<EngineerCreateWithoutFormResponsesInput, EngineerUncheckedCreateWithoutFormResponsesInput>
  }

  export type CustomerServiceCreateWithoutFormResponsesInput = {
    assignedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutCustomerServicesInput
    service: ServiceCreateNestedOneWithoutCustomerServicesInput
  }

  export type CustomerServiceUncheckedCreateWithoutFormResponsesInput = {
    ID?: number
    customerID: number
    serviceID: number
    assignedAt?: Date | string
  }

  export type CustomerServiceCreateOrConnectWithoutFormResponsesInput = {
    where: CustomerServiceWhereUniqueInput
    create: XOR<CustomerServiceCreateWithoutFormResponsesInput, CustomerServiceUncheckedCreateWithoutFormResponsesInput>
  }

  export type FormTemplateCreateWithoutFormResponseInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: AdminCreateNestedOneWithoutFormTemplatesInput
    sections?: SectionTemplateCreateNestedManyWithoutFormInput
    services?: ServiceCreateNestedManyWithoutFormTemplateInput
  }

  export type FormTemplateUncheckedCreateWithoutFormResponseInput = {
    ID?: number
    name: string
    createdByID: number
    createdAt?: Date | string
    updatedAt?: Date | string
    sections?: SectionTemplateUncheckedCreateNestedManyWithoutFormInput
    services?: ServiceUncheckedCreateNestedManyWithoutFormTemplateInput
  }

  export type FormTemplateCreateOrConnectWithoutFormResponseInput = {
    where: FormTemplateWhereUniqueInput
    create: XOR<FormTemplateCreateWithoutFormResponseInput, FormTemplateUncheckedCreateWithoutFormResponseInput>
  }

  export type SectionResponseCreateWithoutFormResponsesInput = {
    sectionName: string
    questionResponses?: QuestionResponseCreateNestedManyWithoutSectionResponseInput
  }

  export type SectionResponseUncheckedCreateWithoutFormResponsesInput = {
    ID?: number
    sectionName: string
    questionResponses?: QuestionResponseUncheckedCreateNestedManyWithoutSectionResponseInput
  }

  export type SectionResponseCreateOrConnectWithoutFormResponsesInput = {
    where: SectionResponseWhereUniqueInput
    create: XOR<SectionResponseCreateWithoutFormResponsesInput, SectionResponseUncheckedCreateWithoutFormResponsesInput>
  }

  export type SectionResponseCreateManyFormResponsesInputEnvelope = {
    data: SectionResponseCreateManyFormResponsesInput | SectionResponseCreateManyFormResponsesInput[]
    skipDuplicates?: boolean
  }

  export type EngineerUpsertWithoutFormResponsesInput = {
    update: XOR<EngineerUpdateWithoutFormResponsesInput, EngineerUncheckedUpdateWithoutFormResponsesInput>
    create: XOR<EngineerCreateWithoutFormResponsesInput, EngineerUncheckedCreateWithoutFormResponsesInput>
    where?: EngineerWhereInput
  }

  export type EngineerUpdateToOneWithWhereWithoutFormResponsesInput = {
    where?: EngineerWhereInput
    data: XOR<EngineerUpdateWithoutFormResponsesInput, EngineerUncheckedUpdateWithoutFormResponsesInput>
  }

  export type EngineerUpdateWithoutFormResponsesInput = {
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    vpns?: VPNUpdateManyWithoutEngineerNestedInput
  }

  export type EngineerUncheckedUpdateWithoutFormResponsesInput = {
    ID?: IntFieldUpdateOperationsInput | number
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    vpns?: VPNUncheckedUpdateManyWithoutEngineerNestedInput
  }

  export type CustomerServiceUpsertWithoutFormResponsesInput = {
    update: XOR<CustomerServiceUpdateWithoutFormResponsesInput, CustomerServiceUncheckedUpdateWithoutFormResponsesInput>
    create: XOR<CustomerServiceCreateWithoutFormResponsesInput, CustomerServiceUncheckedCreateWithoutFormResponsesInput>
    where?: CustomerServiceWhereInput
  }

  export type CustomerServiceUpdateToOneWithWhereWithoutFormResponsesInput = {
    where?: CustomerServiceWhereInput
    data: XOR<CustomerServiceUpdateWithoutFormResponsesInput, CustomerServiceUncheckedUpdateWithoutFormResponsesInput>
  }

  export type CustomerServiceUpdateWithoutFormResponsesInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutCustomerServicesNestedInput
    service?: ServiceUpdateOneRequiredWithoutCustomerServicesNestedInput
  }

  export type CustomerServiceUncheckedUpdateWithoutFormResponsesInput = {
    ID?: IntFieldUpdateOperationsInput | number
    customerID?: IntFieldUpdateOperationsInput | number
    serviceID?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormTemplateUpsertWithoutFormResponseInput = {
    update: XOR<FormTemplateUpdateWithoutFormResponseInput, FormTemplateUncheckedUpdateWithoutFormResponseInput>
    create: XOR<FormTemplateCreateWithoutFormResponseInput, FormTemplateUncheckedCreateWithoutFormResponseInput>
    where?: FormTemplateWhereInput
  }

  export type FormTemplateUpdateToOneWithWhereWithoutFormResponseInput = {
    where?: FormTemplateWhereInput
    data: XOR<FormTemplateUpdateWithoutFormResponseInput, FormTemplateUncheckedUpdateWithoutFormResponseInput>
  }

  export type FormTemplateUpdateWithoutFormResponseInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: AdminUpdateOneRequiredWithoutFormTemplatesNestedInput
    sections?: SectionTemplateUpdateManyWithoutFormNestedInput
    services?: ServiceUpdateManyWithoutFormTemplateNestedInput
  }

  export type FormTemplateUncheckedUpdateWithoutFormResponseInput = {
    ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdByID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: SectionTemplateUncheckedUpdateManyWithoutFormNestedInput
    services?: ServiceUncheckedUpdateManyWithoutFormTemplateNestedInput
  }

  export type SectionResponseUpsertWithWhereUniqueWithoutFormResponsesInput = {
    where: SectionResponseWhereUniqueInput
    update: XOR<SectionResponseUpdateWithoutFormResponsesInput, SectionResponseUncheckedUpdateWithoutFormResponsesInput>
    create: XOR<SectionResponseCreateWithoutFormResponsesInput, SectionResponseUncheckedCreateWithoutFormResponsesInput>
  }

  export type SectionResponseUpdateWithWhereUniqueWithoutFormResponsesInput = {
    where: SectionResponseWhereUniqueInput
    data: XOR<SectionResponseUpdateWithoutFormResponsesInput, SectionResponseUncheckedUpdateWithoutFormResponsesInput>
  }

  export type SectionResponseUpdateManyWithWhereWithoutFormResponsesInput = {
    where: SectionResponseScalarWhereInput
    data: XOR<SectionResponseUpdateManyMutationInput, SectionResponseUncheckedUpdateManyWithoutFormResponsesInput>
  }

  export type SectionResponseScalarWhereInput = {
    AND?: SectionResponseScalarWhereInput | SectionResponseScalarWhereInput[]
    OR?: SectionResponseScalarWhereInput[]
    NOT?: SectionResponseScalarWhereInput | SectionResponseScalarWhereInput[]
    ID?: IntFilter<"SectionResponse"> | number
    sectionName?: StringFilter<"SectionResponse"> | string
    formResponseID?: IntFilter<"SectionResponse"> | number
  }

  export type FormResponseCreateWithoutSectionResponsesInput = {
    filledAt?: Date | string
    updatedAt?: Date | string
    engineer: EngineerCreateNestedOneWithoutFormResponsesInput
    customerService: CustomerServiceCreateNestedOneWithoutFormResponsesInput
    formTemplate: FormTemplateCreateNestedOneWithoutFormResponseInput
  }

  export type FormResponseUncheckedCreateWithoutSectionResponsesInput = {
    ID?: number
    filledAt?: Date | string
    updatedAt?: Date | string
    engineerID: number
    customerServiceID: number
    formTemplateID: number
  }

  export type FormResponseCreateOrConnectWithoutSectionResponsesInput = {
    where: FormResponseWhereUniqueInput
    create: XOR<FormResponseCreateWithoutSectionResponsesInput, FormResponseUncheckedCreateWithoutSectionResponsesInput>
  }

  export type QuestionResponseCreateWithoutSectionResponseInput = {
    questionText: string
    answer: string
  }

  export type QuestionResponseUncheckedCreateWithoutSectionResponseInput = {
    ID?: number
    questionText: string
    answer: string
  }

  export type QuestionResponseCreateOrConnectWithoutSectionResponseInput = {
    where: QuestionResponseWhereUniqueInput
    create: XOR<QuestionResponseCreateWithoutSectionResponseInput, QuestionResponseUncheckedCreateWithoutSectionResponseInput>
  }

  export type QuestionResponseCreateManySectionResponseInputEnvelope = {
    data: QuestionResponseCreateManySectionResponseInput | QuestionResponseCreateManySectionResponseInput[]
    skipDuplicates?: boolean
  }

  export type FormResponseUpsertWithoutSectionResponsesInput = {
    update: XOR<FormResponseUpdateWithoutSectionResponsesInput, FormResponseUncheckedUpdateWithoutSectionResponsesInput>
    create: XOR<FormResponseCreateWithoutSectionResponsesInput, FormResponseUncheckedCreateWithoutSectionResponsesInput>
    where?: FormResponseWhereInput
  }

  export type FormResponseUpdateToOneWithWhereWithoutSectionResponsesInput = {
    where?: FormResponseWhereInput
    data: XOR<FormResponseUpdateWithoutSectionResponsesInput, FormResponseUncheckedUpdateWithoutSectionResponsesInput>
  }

  export type FormResponseUpdateWithoutSectionResponsesInput = {
    filledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engineer?: EngineerUpdateOneRequiredWithoutFormResponsesNestedInput
    customerService?: CustomerServiceUpdateOneRequiredWithoutFormResponsesNestedInput
    formTemplate?: FormTemplateUpdateOneRequiredWithoutFormResponseNestedInput
  }

  export type FormResponseUncheckedUpdateWithoutSectionResponsesInput = {
    ID?: IntFieldUpdateOperationsInput | number
    filledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engineerID?: IntFieldUpdateOperationsInput | number
    customerServiceID?: IntFieldUpdateOperationsInput | number
    formTemplateID?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionResponseUpsertWithWhereUniqueWithoutSectionResponseInput = {
    where: QuestionResponseWhereUniqueInput
    update: XOR<QuestionResponseUpdateWithoutSectionResponseInput, QuestionResponseUncheckedUpdateWithoutSectionResponseInput>
    create: XOR<QuestionResponseCreateWithoutSectionResponseInput, QuestionResponseUncheckedCreateWithoutSectionResponseInput>
  }

  export type QuestionResponseUpdateWithWhereUniqueWithoutSectionResponseInput = {
    where: QuestionResponseWhereUniqueInput
    data: XOR<QuestionResponseUpdateWithoutSectionResponseInput, QuestionResponseUncheckedUpdateWithoutSectionResponseInput>
  }

  export type QuestionResponseUpdateManyWithWhereWithoutSectionResponseInput = {
    where: QuestionResponseScalarWhereInput
    data: XOR<QuestionResponseUpdateManyMutationInput, QuestionResponseUncheckedUpdateManyWithoutSectionResponseInput>
  }

  export type QuestionResponseScalarWhereInput = {
    AND?: QuestionResponseScalarWhereInput | QuestionResponseScalarWhereInput[]
    OR?: QuestionResponseScalarWhereInput[]
    NOT?: QuestionResponseScalarWhereInput | QuestionResponseScalarWhereInput[]
    ID?: IntFilter<"QuestionResponse"> | number
    questionText?: StringFilter<"QuestionResponse"> | string
    answer?: StringFilter<"QuestionResponse"> | string
    sectionResponseID?: IntFilter<"QuestionResponse"> | number
  }

  export type SectionResponseCreateWithoutQuestionResponsesInput = {
    sectionName: string
    formResponses: FormResponseCreateNestedOneWithoutSectionResponsesInput
  }

  export type SectionResponseUncheckedCreateWithoutQuestionResponsesInput = {
    ID?: number
    sectionName: string
    formResponseID: number
  }

  export type SectionResponseCreateOrConnectWithoutQuestionResponsesInput = {
    where: SectionResponseWhereUniqueInput
    create: XOR<SectionResponseCreateWithoutQuestionResponsesInput, SectionResponseUncheckedCreateWithoutQuestionResponsesInput>
  }

  export type SectionResponseUpsertWithoutQuestionResponsesInput = {
    update: XOR<SectionResponseUpdateWithoutQuestionResponsesInput, SectionResponseUncheckedUpdateWithoutQuestionResponsesInput>
    create: XOR<SectionResponseCreateWithoutQuestionResponsesInput, SectionResponseUncheckedCreateWithoutQuestionResponsesInput>
    where?: SectionResponseWhereInput
  }

  export type SectionResponseUpdateToOneWithWhereWithoutQuestionResponsesInput = {
    where?: SectionResponseWhereInput
    data: XOR<SectionResponseUpdateWithoutQuestionResponsesInput, SectionResponseUncheckedUpdateWithoutQuestionResponsesInput>
  }

  export type SectionResponseUpdateWithoutQuestionResponsesInput = {
    sectionName?: StringFieldUpdateOperationsInput | string
    formResponses?: FormResponseUpdateOneRequiredWithoutSectionResponsesNestedInput
  }

  export type SectionResponseUncheckedUpdateWithoutQuestionResponsesInput = {
    ID?: IntFieldUpdateOperationsInput | number
    sectionName?: StringFieldUpdateOperationsInput | string
    formResponseID?: IntFieldUpdateOperationsInput | number
  }

  export type CustomerServiceCreateManyCustomerInput = {
    ID?: number
    serviceID: number
    assignedAt?: Date | string
  }

  export type CustomerServiceUpdateWithoutCustomerInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: ServiceUpdateOneRequiredWithoutCustomerServicesNestedInput
    formResponses?: FormResponseUpdateManyWithoutCustomerServiceNestedInput
  }

  export type CustomerServiceUncheckedUpdateWithoutCustomerInput = {
    ID?: IntFieldUpdateOperationsInput | number
    serviceID?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formResponses?: FormResponseUncheckedUpdateManyWithoutCustomerServiceNestedInput
  }

  export type CustomerServiceUncheckedUpdateManyWithoutCustomerInput = {
    ID?: IntFieldUpdateOperationsInput | number
    serviceID?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateManyAdminInput = {
    ID?: number
    name: string
    formTemplateID: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VPNCreateManyAdminInput = {
    ID?: number
    name: string
    peerIP: string
    status: string
    engineerID: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormTemplateCreateManyCreatedByInput = {
    ID?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateWithoutAdminInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formTemplate?: FormTemplateUpdateOneRequiredWithoutServicesNestedInput
    customerServices?: CustomerServiceUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutAdminInput = {
    ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    formTemplateID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerServices?: CustomerServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutAdminInput = {
    ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    formTemplateID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VPNUpdateWithoutAdminInput = {
    name?: StringFieldUpdateOperationsInput | string
    peerIP?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engineer?: EngineerUpdateOneRequiredWithoutVpnsNestedInput
  }

  export type VPNUncheckedUpdateWithoutAdminInput = {
    ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    peerIP?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    engineerID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VPNUncheckedUpdateManyWithoutAdminInput = {
    ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    peerIP?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    engineerID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormTemplateUpdateWithoutCreatedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: SectionTemplateUpdateManyWithoutFormNestedInput
    services?: ServiceUpdateManyWithoutFormTemplateNestedInput
    formResponse?: FormResponseUpdateManyWithoutFormTemplateNestedInput
  }

  export type FormTemplateUncheckedUpdateWithoutCreatedByInput = {
    ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sections?: SectionTemplateUncheckedUpdateManyWithoutFormNestedInput
    services?: ServiceUncheckedUpdateManyWithoutFormTemplateNestedInput
    formResponse?: FormResponseUncheckedUpdateManyWithoutFormTemplateNestedInput
  }

  export type FormTemplateUncheckedUpdateManyWithoutCreatedByInput = {
    ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormResponseCreateManyEngineerInput = {
    ID?: number
    filledAt?: Date | string
    updatedAt?: Date | string
    customerServiceID: number
    formTemplateID: number
  }

  export type VPNCreateManyEngineerInput = {
    ID?: number
    name: string
    peerIP: string
    status: string
    adminID: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormResponseUpdateWithoutEngineerInput = {
    filledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerService?: CustomerServiceUpdateOneRequiredWithoutFormResponsesNestedInput
    formTemplate?: FormTemplateUpdateOneRequiredWithoutFormResponseNestedInput
    sectionResponses?: SectionResponseUpdateManyWithoutFormResponsesNestedInput
  }

  export type FormResponseUncheckedUpdateWithoutEngineerInput = {
    ID?: IntFieldUpdateOperationsInput | number
    filledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerServiceID?: IntFieldUpdateOperationsInput | number
    formTemplateID?: IntFieldUpdateOperationsInput | number
    sectionResponses?: SectionResponseUncheckedUpdateManyWithoutFormResponsesNestedInput
  }

  export type FormResponseUncheckedUpdateManyWithoutEngineerInput = {
    ID?: IntFieldUpdateOperationsInput | number
    filledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerServiceID?: IntFieldUpdateOperationsInput | number
    formTemplateID?: IntFieldUpdateOperationsInput | number
  }

  export type VPNUpdateWithoutEngineerInput = {
    name?: StringFieldUpdateOperationsInput | string
    peerIP?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneRequiredWithoutVpnsNestedInput
  }

  export type VPNUncheckedUpdateWithoutEngineerInput = {
    ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    peerIP?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    adminID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VPNUncheckedUpdateManyWithoutEngineerInput = {
    ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    peerIP?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    adminID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerServiceCreateManyServiceInput = {
    ID?: number
    customerID: number
    assignedAt?: Date | string
  }

  export type CustomerServiceUpdateWithoutServiceInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutCustomerServicesNestedInput
    formResponses?: FormResponseUpdateManyWithoutCustomerServiceNestedInput
  }

  export type CustomerServiceUncheckedUpdateWithoutServiceInput = {
    ID?: IntFieldUpdateOperationsInput | number
    customerID?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    formResponses?: FormResponseUncheckedUpdateManyWithoutCustomerServiceNestedInput
  }

  export type CustomerServiceUncheckedUpdateManyWithoutServiceInput = {
    ID?: IntFieldUpdateOperationsInput | number
    customerID?: IntFieldUpdateOperationsInput | number
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormResponseCreateManyCustomerServiceInput = {
    ID?: number
    filledAt?: Date | string
    updatedAt?: Date | string
    engineerID: number
    formTemplateID: number
  }

  export type FormResponseUpdateWithoutCustomerServiceInput = {
    filledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engineer?: EngineerUpdateOneRequiredWithoutFormResponsesNestedInput
    formTemplate?: FormTemplateUpdateOneRequiredWithoutFormResponseNestedInput
    sectionResponses?: SectionResponseUpdateManyWithoutFormResponsesNestedInput
  }

  export type FormResponseUncheckedUpdateWithoutCustomerServiceInput = {
    ID?: IntFieldUpdateOperationsInput | number
    filledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engineerID?: IntFieldUpdateOperationsInput | number
    formTemplateID?: IntFieldUpdateOperationsInput | number
    sectionResponses?: SectionResponseUncheckedUpdateManyWithoutFormResponsesNestedInput
  }

  export type FormResponseUncheckedUpdateManyWithoutCustomerServiceInput = {
    ID?: IntFieldUpdateOperationsInput | number
    filledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engineerID?: IntFieldUpdateOperationsInput | number
    formTemplateID?: IntFieldUpdateOperationsInput | number
  }

  export type SectionTemplateCreateManyFormInput = {
    ID?: number
    name: string
  }

  export type ServiceCreateManyFormTemplateInput = {
    ID?: number
    name: string
    adminID: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormResponseCreateManyFormTemplateInput = {
    ID?: number
    filledAt?: Date | string
    updatedAt?: Date | string
    engineerID: number
    customerServiceID: number
  }

  export type SectionTemplateUpdateWithoutFormInput = {
    name?: StringFieldUpdateOperationsInput | string
    questions?: QuestionTemplateUpdateManyWithoutSectionNestedInput
  }

  export type SectionTemplateUncheckedUpdateWithoutFormInput = {
    ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    questions?: QuestionTemplateUncheckedUpdateManyWithoutSectionNestedInput
  }

  export type SectionTemplateUncheckedUpdateManyWithoutFormInput = {
    ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceUpdateWithoutFormTemplateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneRequiredWithoutServicesNestedInput
    customerServices?: CustomerServiceUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutFormTemplateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    adminID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerServices?: CustomerServiceUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutFormTemplateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    adminID?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormResponseUpdateWithoutFormTemplateInput = {
    filledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engineer?: EngineerUpdateOneRequiredWithoutFormResponsesNestedInput
    customerService?: CustomerServiceUpdateOneRequiredWithoutFormResponsesNestedInput
    sectionResponses?: SectionResponseUpdateManyWithoutFormResponsesNestedInput
  }

  export type FormResponseUncheckedUpdateWithoutFormTemplateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    filledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engineerID?: IntFieldUpdateOperationsInput | number
    customerServiceID?: IntFieldUpdateOperationsInput | number
    sectionResponses?: SectionResponseUncheckedUpdateManyWithoutFormResponsesNestedInput
  }

  export type FormResponseUncheckedUpdateManyWithoutFormTemplateInput = {
    ID?: IntFieldUpdateOperationsInput | number
    filledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    engineerID?: IntFieldUpdateOperationsInput | number
    customerServiceID?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionTemplateCreateManySectionInput = {
    ID?: number
    text: string
  }

  export type QuestionTemplateUpdateWithoutSectionInput = {
    text?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionTemplateUncheckedUpdateWithoutSectionInput = {
    ID?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionTemplateUncheckedUpdateManyWithoutSectionInput = {
    ID?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
  }

  export type SectionResponseCreateManyFormResponsesInput = {
    ID?: number
    sectionName: string
  }

  export type SectionResponseUpdateWithoutFormResponsesInput = {
    sectionName?: StringFieldUpdateOperationsInput | string
    questionResponses?: QuestionResponseUpdateManyWithoutSectionResponseNestedInput
  }

  export type SectionResponseUncheckedUpdateWithoutFormResponsesInput = {
    ID?: IntFieldUpdateOperationsInput | number
    sectionName?: StringFieldUpdateOperationsInput | string
    questionResponses?: QuestionResponseUncheckedUpdateManyWithoutSectionResponseNestedInput
  }

  export type SectionResponseUncheckedUpdateManyWithoutFormResponsesInput = {
    ID?: IntFieldUpdateOperationsInput | number
    sectionName?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionResponseCreateManySectionResponseInput = {
    ID?: number
    questionText: string
    answer: string
  }

  export type QuestionResponseUpdateWithoutSectionResponseInput = {
    questionText?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionResponseUncheckedUpdateWithoutSectionResponseInput = {
    ID?: IntFieldUpdateOperationsInput | number
    questionText?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionResponseUncheckedUpdateManyWithoutSectionResponseInput = {
    ID?: IntFieldUpdateOperationsInput | number
    questionText?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}