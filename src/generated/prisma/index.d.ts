
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model WasteType
 * 
 */
export type WasteType = $Result.DefaultSelection<Prisma.$WasteTypePayload>
/**
 * Model ServiceRequest
 * 
 */
export type ServiceRequest = $Result.DefaultSelection<Prisma.$ServiceRequestPayload>
/**
 * Model Pickup
 * 
 */
export type Pickup = $Result.DefaultSelection<Prisma.$PickupPayload>
/**
 * Model Route
 * 
 */
export type Route = $Result.DefaultSelection<Prisma.$RoutePayload>
/**
 * Model RouteAssignment
 * 
 */
export type RouteAssignment = $Result.DefaultSelection<Prisma.$RouteAssignmentPayload>
/**
 * Model Complaint
 * 
 */
export type Complaint = $Result.DefaultSelection<Prisma.$ComplaintPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model WasteLog
 * 
 */
export type WasteLog = $Result.DefaultSelection<Prisma.$WasteLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RequestStatus: {
  pending: 'pending',
  scheduled: 'scheduled',
  completed: 'completed',
  cancelled: 'cancelled'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


export const PickupStatus: {
  scheduled: 'scheduled',
  in_progress: 'in_progress',
  done: 'done',
  missed: 'missed'
};

export type PickupStatus = (typeof PickupStatus)[keyof typeof PickupStatus]


export const ComplaintStatus: {
  open: 'open',
  in_review: 'in_review',
  resolved: 'resolved'
};

export type ComplaintStatus = (typeof ComplaintStatus)[keyof typeof ComplaintStatus]


export const RoleType: {
  admin: 'admin',
  resident: 'resident'
};

export type RoleType = (typeof RoleType)[keyof typeof RoleType]

}

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

export type PickupStatus = $Enums.PickupStatus

export const PickupStatus: typeof $Enums.PickupStatus

export type ComplaintStatus = $Enums.ComplaintStatus

export const ComplaintStatus: typeof $Enums.ComplaintStatus

export type RoleType = $Enums.RoleType

export const RoleType: typeof $Enums.RoleType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wasteType`: Exposes CRUD operations for the **WasteType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WasteTypes
    * const wasteTypes = await prisma.wasteType.findMany()
    * ```
    */
  get wasteType(): Prisma.WasteTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.serviceRequest`: Exposes CRUD operations for the **ServiceRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceRequests
    * const serviceRequests = await prisma.serviceRequest.findMany()
    * ```
    */
  get serviceRequest(): Prisma.ServiceRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pickup`: Exposes CRUD operations for the **Pickup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pickups
    * const pickups = await prisma.pickup.findMany()
    * ```
    */
  get pickup(): Prisma.PickupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.route`: Exposes CRUD operations for the **Route** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routes
    * const routes = await prisma.route.findMany()
    * ```
    */
  get route(): Prisma.RouteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.routeAssignment`: Exposes CRUD operations for the **RouteAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RouteAssignments
    * const routeAssignments = await prisma.routeAssignment.findMany()
    * ```
    */
  get routeAssignment(): Prisma.RouteAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.complaint`: Exposes CRUD operations for the **Complaint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Complaints
    * const complaints = await prisma.complaint.findMany()
    * ```
    */
  get complaint(): Prisma.ComplaintDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wasteLog`: Exposes CRUD operations for the **WasteLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WasteLogs
    * const wasteLogs = await prisma.wasteLog.findMany()
    * ```
    */
  get wasteLog(): Prisma.WasteLogDelegate<ExtArgs, ClientOptions>;
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
    User: 'User',
    WasteType: 'WasteType',
    ServiceRequest: 'ServiceRequest',
    Pickup: 'Pickup',
    Route: 'Route',
    RouteAssignment: 'RouteAssignment',
    Complaint: 'Complaint',
    Notification: 'Notification',
    WasteLog: 'WasteLog'
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
      modelProps: "user" | "wasteType" | "serviceRequest" | "pickup" | "route" | "routeAssignment" | "complaint" | "notification" | "wasteLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      WasteType: {
        payload: Prisma.$WasteTypePayload<ExtArgs>
        fields: Prisma.WasteTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WasteTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WasteTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteTypePayload>
          }
          findFirst: {
            args: Prisma.WasteTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WasteTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteTypePayload>
          }
          findMany: {
            args: Prisma.WasteTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteTypePayload>[]
          }
          create: {
            args: Prisma.WasteTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteTypePayload>
          }
          createMany: {
            args: Prisma.WasteTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WasteTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteTypePayload>[]
          }
          delete: {
            args: Prisma.WasteTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteTypePayload>
          }
          update: {
            args: Prisma.WasteTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteTypePayload>
          }
          deleteMany: {
            args: Prisma.WasteTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WasteTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WasteTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteTypePayload>[]
          }
          upsert: {
            args: Prisma.WasteTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteTypePayload>
          }
          aggregate: {
            args: Prisma.WasteTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWasteType>
          }
          groupBy: {
            args: Prisma.WasteTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<WasteTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.WasteTypeCountArgs<ExtArgs>
            result: $Utils.Optional<WasteTypeCountAggregateOutputType> | number
          }
        }
      }
      ServiceRequest: {
        payload: Prisma.$ServiceRequestPayload<ExtArgs>
        fields: Prisma.ServiceRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>
          }
          findFirst: {
            args: Prisma.ServiceRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>
          }
          findMany: {
            args: Prisma.ServiceRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>[]
          }
          create: {
            args: Prisma.ServiceRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>
          }
          createMany: {
            args: Prisma.ServiceRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>[]
          }
          delete: {
            args: Prisma.ServiceRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>
          }
          update: {
            args: Prisma.ServiceRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>
          }
          deleteMany: {
            args: Prisma.ServiceRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>[]
          }
          upsert: {
            args: Prisma.ServiceRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceRequestPayload>
          }
          aggregate: {
            args: Prisma.ServiceRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceRequest>
          }
          groupBy: {
            args: Prisma.ServiceRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceRequestCountAggregateOutputType> | number
          }
        }
      }
      Pickup: {
        payload: Prisma.$PickupPayload<ExtArgs>
        fields: Prisma.PickupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PickupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PickupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupPayload>
          }
          findFirst: {
            args: Prisma.PickupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PickupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupPayload>
          }
          findMany: {
            args: Prisma.PickupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupPayload>[]
          }
          create: {
            args: Prisma.PickupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupPayload>
          }
          createMany: {
            args: Prisma.PickupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PickupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupPayload>[]
          }
          delete: {
            args: Prisma.PickupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupPayload>
          }
          update: {
            args: Prisma.PickupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupPayload>
          }
          deleteMany: {
            args: Prisma.PickupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PickupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PickupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupPayload>[]
          }
          upsert: {
            args: Prisma.PickupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PickupPayload>
          }
          aggregate: {
            args: Prisma.PickupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePickup>
          }
          groupBy: {
            args: Prisma.PickupGroupByArgs<ExtArgs>
            result: $Utils.Optional<PickupGroupByOutputType>[]
          }
          count: {
            args: Prisma.PickupCountArgs<ExtArgs>
            result: $Utils.Optional<PickupCountAggregateOutputType> | number
          }
        }
      }
      Route: {
        payload: Prisma.$RoutePayload<ExtArgs>
        fields: Prisma.RouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findFirst: {
            args: Prisma.RouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findMany: {
            args: Prisma.RouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          create: {
            args: Prisma.RouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          createMany: {
            args: Prisma.RouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RouteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          delete: {
            args: Prisma.RouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          update: {
            args: Prisma.RouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          deleteMany: {
            args: Prisma.RouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RouteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          upsert: {
            args: Prisma.RouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          aggregate: {
            args: Prisma.RouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoute>
          }
          groupBy: {
            args: Prisma.RouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteCountArgs<ExtArgs>
            result: $Utils.Optional<RouteCountAggregateOutputType> | number
          }
        }
      }
      RouteAssignment: {
        payload: Prisma.$RouteAssignmentPayload<ExtArgs>
        fields: Prisma.RouteAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteAssignmentPayload>
          }
          findFirst: {
            args: Prisma.RouteAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteAssignmentPayload>
          }
          findMany: {
            args: Prisma.RouteAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteAssignmentPayload>[]
          }
          create: {
            args: Prisma.RouteAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteAssignmentPayload>
          }
          createMany: {
            args: Prisma.RouteAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RouteAssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteAssignmentPayload>[]
          }
          delete: {
            args: Prisma.RouteAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteAssignmentPayload>
          }
          update: {
            args: Prisma.RouteAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.RouteAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RouteAssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteAssignmentPayload>[]
          }
          upsert: {
            args: Prisma.RouteAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteAssignmentPayload>
          }
          aggregate: {
            args: Prisma.RouteAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRouteAssignment>
          }
          groupBy: {
            args: Prisma.RouteAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<RouteAssignmentCountAggregateOutputType> | number
          }
        }
      }
      Complaint: {
        payload: Prisma.$ComplaintPayload<ExtArgs>
        fields: Prisma.ComplaintFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ComplaintFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ComplaintFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintPayload>
          }
          findFirst: {
            args: Prisma.ComplaintFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ComplaintFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintPayload>
          }
          findMany: {
            args: Prisma.ComplaintFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintPayload>[]
          }
          create: {
            args: Prisma.ComplaintCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintPayload>
          }
          createMany: {
            args: Prisma.ComplaintCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ComplaintCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintPayload>[]
          }
          delete: {
            args: Prisma.ComplaintDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintPayload>
          }
          update: {
            args: Prisma.ComplaintUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintPayload>
          }
          deleteMany: {
            args: Prisma.ComplaintDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ComplaintUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ComplaintUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintPayload>[]
          }
          upsert: {
            args: Prisma.ComplaintUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ComplaintPayload>
          }
          aggregate: {
            args: Prisma.ComplaintAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComplaint>
          }
          groupBy: {
            args: Prisma.ComplaintGroupByArgs<ExtArgs>
            result: $Utils.Optional<ComplaintGroupByOutputType>[]
          }
          count: {
            args: Prisma.ComplaintCountArgs<ExtArgs>
            result: $Utils.Optional<ComplaintCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      WasteLog: {
        payload: Prisma.$WasteLogPayload<ExtArgs>
        fields: Prisma.WasteLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WasteLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WasteLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteLogPayload>
          }
          findFirst: {
            args: Prisma.WasteLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WasteLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteLogPayload>
          }
          findMany: {
            args: Prisma.WasteLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteLogPayload>[]
          }
          create: {
            args: Prisma.WasteLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteLogPayload>
          }
          createMany: {
            args: Prisma.WasteLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WasteLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteLogPayload>[]
          }
          delete: {
            args: Prisma.WasteLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteLogPayload>
          }
          update: {
            args: Prisma.WasteLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteLogPayload>
          }
          deleteMany: {
            args: Prisma.WasteLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WasteLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WasteLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteLogPayload>[]
          }
          upsert: {
            args: Prisma.WasteLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WasteLogPayload>
          }
          aggregate: {
            args: Prisma.WasteLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWasteLog>
          }
          groupBy: {
            args: Prisma.WasteLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<WasteLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.WasteLogCountArgs<ExtArgs>
            result: $Utils.Optional<WasteLogCountAggregateOutputType> | number
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
    user?: UserOmit
    wasteType?: WasteTypeOmit
    serviceRequest?: ServiceRequestOmit
    pickup?: PickupOmit
    route?: RouteOmit
    routeAssignment?: RouteAssignmentOmit
    complaint?: ComplaintOmit
    notification?: NotificationOmit
    wasteLog?: WasteLogOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    requests: number
    complaints: number
    notifications: number
    waste_logs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | UserCountOutputTypeCountRequestsArgs
    complaints?: boolean | UserCountOutputTypeCountComplaintsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    waste_logs?: boolean | UserCountOutputTypeCountWaste_logsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountComplaintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplaintWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWaste_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WasteLogWhereInput
  }


  /**
   * Count Type WasteTypeCountOutputType
   */

  export type WasteTypeCountOutputType = {
    requests: number
    waste_logs: number
  }

  export type WasteTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | WasteTypeCountOutputTypeCountRequestsArgs
    waste_logs?: boolean | WasteTypeCountOutputTypeCountWaste_logsArgs
  }

  // Custom InputTypes
  /**
   * WasteTypeCountOutputType without action
   */
  export type WasteTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteTypeCountOutputType
     */
    select?: WasteTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WasteTypeCountOutputType without action
   */
  export type WasteTypeCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceRequestWhereInput
  }

  /**
   * WasteTypeCountOutputType without action
   */
  export type WasteTypeCountOutputTypeCountWaste_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WasteLogWhereInput
  }


  /**
   * Count Type ServiceRequestCountOutputType
   */

  export type ServiceRequestCountOutputType = {
    pickups: number
  }

  export type ServiceRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pickups?: boolean | ServiceRequestCountOutputTypeCountPickupsArgs
  }

  // Custom InputTypes
  /**
   * ServiceRequestCountOutputType without action
   */
  export type ServiceRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequestCountOutputType
     */
    select?: ServiceRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceRequestCountOutputType without action
   */
  export type ServiceRequestCountOutputTypeCountPickupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PickupWhereInput
  }


  /**
   * Count Type PickupCountOutputType
   */

  export type PickupCountOutputType = {
    complaints: number
  }

  export type PickupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    complaints?: boolean | PickupCountOutputTypeCountComplaintsArgs
  }

  // Custom InputTypes
  /**
   * PickupCountOutputType without action
   */
  export type PickupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PickupCountOutputType
     */
    select?: PickupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PickupCountOutputType without action
   */
  export type PickupCountOutputTypeCountComplaintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplaintWhereInput
  }


  /**
   * Count Type RouteCountOutputType
   */

  export type RouteCountOutputType = {
    pickups: number
  }

  export type RouteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pickups?: boolean | RouteCountOutputTypeCountPickupsArgs
  }

  // Custom InputTypes
  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteCountOutputType
     */
    select?: RouteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountPickupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PickupWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    user_id: number | null
    role_id: number | null
    barangay_id: number | null
  }

  export type UserSumAggregateOutputType = {
    user_id: number | null
    role_id: number | null
    barangay_id: number | null
  }

  export type UserMinAggregateOutputType = {
    user_id: number | null
    role_id: number | null
    barangay_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    phone_number: string | null
    address: string | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: number | null
    role_id: number | null
    barangay_id: number | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    phone_number: string | null
    address: string | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    role_id: number
    barangay_id: number
    first_name: number
    last_name: number
    email: number
    password: number
    phone_number: number
    address: number
    created_at: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    user_id?: true
    role_id?: true
    barangay_id?: true
  }

  export type UserSumAggregateInputType = {
    user_id?: true
    role_id?: true
    barangay_id?: true
  }

  export type UserMinAggregateInputType = {
    user_id?: true
    role_id?: true
    barangay_id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone_number?: true
    address?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    role_id?: true
    barangay_id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone_number?: true
    address?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    role_id?: true
    barangay_id?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    phone_number?: true
    address?: true
    created_at?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: number
    role_id: number
    barangay_id: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number: string
    address: string
    created_at: Date
    role: string[]
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    role_id?: boolean
    barangay_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    address?: boolean
    created_at?: boolean
    role?: boolean
    requests?: boolean | User$requestsArgs<ExtArgs>
    complaints?: boolean | User$complaintsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    waste_logs?: boolean | User$waste_logsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    role_id?: boolean
    barangay_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    address?: boolean
    created_at?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    role_id?: boolean
    barangay_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    address?: boolean
    created_at?: boolean
    role?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    user_id?: boolean
    role_id?: boolean
    barangay_id?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    phone_number?: boolean
    address?: boolean
    created_at?: boolean
    role?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "role_id" | "barangay_id" | "first_name" | "last_name" | "email" | "password" | "phone_number" | "address" | "created_at" | "role", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | User$requestsArgs<ExtArgs>
    complaints?: boolean | User$complaintsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    waste_logs?: boolean | User$waste_logsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      requests: Prisma.$ServiceRequestPayload<ExtArgs>[]
      complaints: Prisma.$ComplaintPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      waste_logs: Prisma.$WasteLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      role_id: number
      barangay_id: number
      first_name: string
      last_name: string
      email: string
      password: string
      phone_number: string
      address: string
      created_at: Date
      role: string[]
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.updateManyAndReturn({
     *   select: { user_id: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requests<T extends User$requestsArgs<ExtArgs> = {}>(args?: Subset<T, User$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    complaints<T extends User$complaintsArgs<ExtArgs> = {}>(args?: Subset<T, User$complaintsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplaintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    waste_logs<T extends User$waste_logsArgs<ExtArgs> = {}>(args?: Subset<T, User$waste_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WasteLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly user_id: FieldRef<"User", 'Int'>
    readonly role_id: FieldRef<"User", 'Int'>
    readonly barangay_id: FieldRef<"User", 'Int'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone_number: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'String[]'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.requests
   */
  export type User$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    where?: ServiceRequestWhereInput
    orderBy?: ServiceRequestOrderByWithRelationInput | ServiceRequestOrderByWithRelationInput[]
    cursor?: ServiceRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceRequestScalarFieldEnum | ServiceRequestScalarFieldEnum[]
  }

  /**
   * User.complaints
   */
  export type User$complaintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaint
     */
    select?: ComplaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaint
     */
    omit?: ComplaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintInclude<ExtArgs> | null
    where?: ComplaintWhereInput
    orderBy?: ComplaintOrderByWithRelationInput | ComplaintOrderByWithRelationInput[]
    cursor?: ComplaintWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComplaintScalarFieldEnum | ComplaintScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.waste_logs
   */
  export type User$waste_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteLog
     */
    select?: WasteLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WasteLog
     */
    omit?: WasteLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteLogInclude<ExtArgs> | null
    where?: WasteLogWhereInput
    orderBy?: WasteLogOrderByWithRelationInput | WasteLogOrderByWithRelationInput[]
    cursor?: WasteLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WasteLogScalarFieldEnum | WasteLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model WasteType
   */

  export type AggregateWasteType = {
    _count: WasteTypeCountAggregateOutputType | null
    _avg: WasteTypeAvgAggregateOutputType | null
    _sum: WasteTypeSumAggregateOutputType | null
    _min: WasteTypeMinAggregateOutputType | null
    _max: WasteTypeMaxAggregateOutputType | null
  }

  export type WasteTypeAvgAggregateOutputType = {
    waste_type_id: number | null
  }

  export type WasteTypeSumAggregateOutputType = {
    waste_type_id: number | null
  }

  export type WasteTypeMinAggregateOutputType = {
    waste_type_id: number | null
    name: string | null
    description: string | null
  }

  export type WasteTypeMaxAggregateOutputType = {
    waste_type_id: number | null
    name: string | null
    description: string | null
  }

  export type WasteTypeCountAggregateOutputType = {
    waste_type_id: number
    name: number
    description: number
    _all: number
  }


  export type WasteTypeAvgAggregateInputType = {
    waste_type_id?: true
  }

  export type WasteTypeSumAggregateInputType = {
    waste_type_id?: true
  }

  export type WasteTypeMinAggregateInputType = {
    waste_type_id?: true
    name?: true
    description?: true
  }

  export type WasteTypeMaxAggregateInputType = {
    waste_type_id?: true
    name?: true
    description?: true
  }

  export type WasteTypeCountAggregateInputType = {
    waste_type_id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type WasteTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WasteType to aggregate.
     */
    where?: WasteTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WasteTypes to fetch.
     */
    orderBy?: WasteTypeOrderByWithRelationInput | WasteTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WasteTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WasteTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WasteTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WasteTypes
    **/
    _count?: true | WasteTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WasteTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WasteTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WasteTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WasteTypeMaxAggregateInputType
  }

  export type GetWasteTypeAggregateType<T extends WasteTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateWasteType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWasteType[P]>
      : GetScalarType<T[P], AggregateWasteType[P]>
  }




  export type WasteTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WasteTypeWhereInput
    orderBy?: WasteTypeOrderByWithAggregationInput | WasteTypeOrderByWithAggregationInput[]
    by: WasteTypeScalarFieldEnum[] | WasteTypeScalarFieldEnum
    having?: WasteTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WasteTypeCountAggregateInputType | true
    _avg?: WasteTypeAvgAggregateInputType
    _sum?: WasteTypeSumAggregateInputType
    _min?: WasteTypeMinAggregateInputType
    _max?: WasteTypeMaxAggregateInputType
  }

  export type WasteTypeGroupByOutputType = {
    waste_type_id: number
    name: string
    description: string | null
    _count: WasteTypeCountAggregateOutputType | null
    _avg: WasteTypeAvgAggregateOutputType | null
    _sum: WasteTypeSumAggregateOutputType | null
    _min: WasteTypeMinAggregateOutputType | null
    _max: WasteTypeMaxAggregateOutputType | null
  }

  type GetWasteTypeGroupByPayload<T extends WasteTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WasteTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WasteTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WasteTypeGroupByOutputType[P]>
            : GetScalarType<T[P], WasteTypeGroupByOutputType[P]>
        }
      >
    >


  export type WasteTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    waste_type_id?: boolean
    name?: boolean
    description?: boolean
    requests?: boolean | WasteType$requestsArgs<ExtArgs>
    waste_logs?: boolean | WasteType$waste_logsArgs<ExtArgs>
    _count?: boolean | WasteTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wasteType"]>

  export type WasteTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    waste_type_id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["wasteType"]>

  export type WasteTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    waste_type_id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["wasteType"]>

  export type WasteTypeSelectScalar = {
    waste_type_id?: boolean
    name?: boolean
    description?: boolean
  }

  export type WasteTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"waste_type_id" | "name" | "description", ExtArgs["result"]["wasteType"]>
  export type WasteTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | WasteType$requestsArgs<ExtArgs>
    waste_logs?: boolean | WasteType$waste_logsArgs<ExtArgs>
    _count?: boolean | WasteTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WasteTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WasteTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WasteTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WasteType"
    objects: {
      requests: Prisma.$ServiceRequestPayload<ExtArgs>[]
      waste_logs: Prisma.$WasteLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      waste_type_id: number
      name: string
      description: string | null
    }, ExtArgs["result"]["wasteType"]>
    composites: {}
  }

  type WasteTypeGetPayload<S extends boolean | null | undefined | WasteTypeDefaultArgs> = $Result.GetResult<Prisma.$WasteTypePayload, S>

  type WasteTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WasteTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WasteTypeCountAggregateInputType | true
    }

  export interface WasteTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WasteType'], meta: { name: 'WasteType' } }
    /**
     * Find zero or one WasteType that matches the filter.
     * @param {WasteTypeFindUniqueArgs} args - Arguments to find a WasteType
     * @example
     * // Get one WasteType
     * const wasteType = await prisma.wasteType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WasteTypeFindUniqueArgs>(args: SelectSubset<T, WasteTypeFindUniqueArgs<ExtArgs>>): Prisma__WasteTypeClient<$Result.GetResult<Prisma.$WasteTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WasteType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WasteTypeFindUniqueOrThrowArgs} args - Arguments to find a WasteType
     * @example
     * // Get one WasteType
     * const wasteType = await prisma.wasteType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WasteTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, WasteTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WasteTypeClient<$Result.GetResult<Prisma.$WasteTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WasteType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WasteTypeFindFirstArgs} args - Arguments to find a WasteType
     * @example
     * // Get one WasteType
     * const wasteType = await prisma.wasteType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WasteTypeFindFirstArgs>(args?: SelectSubset<T, WasteTypeFindFirstArgs<ExtArgs>>): Prisma__WasteTypeClient<$Result.GetResult<Prisma.$WasteTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WasteType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WasteTypeFindFirstOrThrowArgs} args - Arguments to find a WasteType
     * @example
     * // Get one WasteType
     * const wasteType = await prisma.wasteType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WasteTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, WasteTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__WasteTypeClient<$Result.GetResult<Prisma.$WasteTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WasteTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WasteTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WasteTypes
     * const wasteTypes = await prisma.wasteType.findMany()
     * 
     * // Get first 10 WasteTypes
     * const wasteTypes = await prisma.wasteType.findMany({ take: 10 })
     * 
     * // Only select the `waste_type_id`
     * const wasteTypeWithWaste_type_idOnly = await prisma.wasteType.findMany({ select: { waste_type_id: true } })
     * 
     */
    findMany<T extends WasteTypeFindManyArgs>(args?: SelectSubset<T, WasteTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WasteTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WasteType.
     * @param {WasteTypeCreateArgs} args - Arguments to create a WasteType.
     * @example
     * // Create one WasteType
     * const WasteType = await prisma.wasteType.create({
     *   data: {
     *     // ... data to create a WasteType
     *   }
     * })
     * 
     */
    create<T extends WasteTypeCreateArgs>(args: SelectSubset<T, WasteTypeCreateArgs<ExtArgs>>): Prisma__WasteTypeClient<$Result.GetResult<Prisma.$WasteTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WasteTypes.
     * @param {WasteTypeCreateManyArgs} args - Arguments to create many WasteTypes.
     * @example
     * // Create many WasteTypes
     * const wasteType = await prisma.wasteType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WasteTypeCreateManyArgs>(args?: SelectSubset<T, WasteTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WasteTypes and returns the data saved in the database.
     * @param {WasteTypeCreateManyAndReturnArgs} args - Arguments to create many WasteTypes.
     * @example
     * // Create many WasteTypes
     * const wasteType = await prisma.wasteType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WasteTypes and only return the `waste_type_id`
     * const wasteTypeWithWaste_type_idOnly = await prisma.wasteType.createManyAndReturn({
     *   select: { waste_type_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WasteTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, WasteTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WasteTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WasteType.
     * @param {WasteTypeDeleteArgs} args - Arguments to delete one WasteType.
     * @example
     * // Delete one WasteType
     * const WasteType = await prisma.wasteType.delete({
     *   where: {
     *     // ... filter to delete one WasteType
     *   }
     * })
     * 
     */
    delete<T extends WasteTypeDeleteArgs>(args: SelectSubset<T, WasteTypeDeleteArgs<ExtArgs>>): Prisma__WasteTypeClient<$Result.GetResult<Prisma.$WasteTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WasteType.
     * @param {WasteTypeUpdateArgs} args - Arguments to update one WasteType.
     * @example
     * // Update one WasteType
     * const wasteType = await prisma.wasteType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WasteTypeUpdateArgs>(args: SelectSubset<T, WasteTypeUpdateArgs<ExtArgs>>): Prisma__WasteTypeClient<$Result.GetResult<Prisma.$WasteTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WasteTypes.
     * @param {WasteTypeDeleteManyArgs} args - Arguments to filter WasteTypes to delete.
     * @example
     * // Delete a few WasteTypes
     * const { count } = await prisma.wasteType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WasteTypeDeleteManyArgs>(args?: SelectSubset<T, WasteTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WasteTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WasteTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WasteTypes
     * const wasteType = await prisma.wasteType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WasteTypeUpdateManyArgs>(args: SelectSubset<T, WasteTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WasteTypes and returns the data updated in the database.
     * @param {WasteTypeUpdateManyAndReturnArgs} args - Arguments to update many WasteTypes.
     * @example
     * // Update many WasteTypes
     * const wasteType = await prisma.wasteType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WasteTypes and only return the `waste_type_id`
     * const wasteTypeWithWaste_type_idOnly = await prisma.wasteType.updateManyAndReturn({
     *   select: { waste_type_id: true },
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
    updateManyAndReturn<T extends WasteTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, WasteTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WasteTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WasteType.
     * @param {WasteTypeUpsertArgs} args - Arguments to update or create a WasteType.
     * @example
     * // Update or create a WasteType
     * const wasteType = await prisma.wasteType.upsert({
     *   create: {
     *     // ... data to create a WasteType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WasteType we want to update
     *   }
     * })
     */
    upsert<T extends WasteTypeUpsertArgs>(args: SelectSubset<T, WasteTypeUpsertArgs<ExtArgs>>): Prisma__WasteTypeClient<$Result.GetResult<Prisma.$WasteTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WasteTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WasteTypeCountArgs} args - Arguments to filter WasteTypes to count.
     * @example
     * // Count the number of WasteTypes
     * const count = await prisma.wasteType.count({
     *   where: {
     *     // ... the filter for the WasteTypes we want to count
     *   }
     * })
    **/
    count<T extends WasteTypeCountArgs>(
      args?: Subset<T, WasteTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WasteTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WasteType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WasteTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WasteTypeAggregateArgs>(args: Subset<T, WasteTypeAggregateArgs>): Prisma.PrismaPromise<GetWasteTypeAggregateType<T>>

    /**
     * Group by WasteType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WasteTypeGroupByArgs} args - Group by arguments.
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
      T extends WasteTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WasteTypeGroupByArgs['orderBy'] }
        : { orderBy?: WasteTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WasteTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWasteTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WasteType model
   */
  readonly fields: WasteTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WasteType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WasteTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    requests<T extends WasteType$requestsArgs<ExtArgs> = {}>(args?: Subset<T, WasteType$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    waste_logs<T extends WasteType$waste_logsArgs<ExtArgs> = {}>(args?: Subset<T, WasteType$waste_logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WasteLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the WasteType model
   */
  interface WasteTypeFieldRefs {
    readonly waste_type_id: FieldRef<"WasteType", 'Int'>
    readonly name: FieldRef<"WasteType", 'String'>
    readonly description: FieldRef<"WasteType", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WasteType findUnique
   */
  export type WasteTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteType
     */
    select?: WasteTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WasteType
     */
    omit?: WasteTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteTypeInclude<ExtArgs> | null
    /**
     * Filter, which WasteType to fetch.
     */
    where: WasteTypeWhereUniqueInput
  }

  /**
   * WasteType findUniqueOrThrow
   */
  export type WasteTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteType
     */
    select?: WasteTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WasteType
     */
    omit?: WasteTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteTypeInclude<ExtArgs> | null
    /**
     * Filter, which WasteType to fetch.
     */
    where: WasteTypeWhereUniqueInput
  }

  /**
   * WasteType findFirst
   */
  export type WasteTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteType
     */
    select?: WasteTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WasteType
     */
    omit?: WasteTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteTypeInclude<ExtArgs> | null
    /**
     * Filter, which WasteType to fetch.
     */
    where?: WasteTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WasteTypes to fetch.
     */
    orderBy?: WasteTypeOrderByWithRelationInput | WasteTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WasteTypes.
     */
    cursor?: WasteTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WasteTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WasteTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WasteTypes.
     */
    distinct?: WasteTypeScalarFieldEnum | WasteTypeScalarFieldEnum[]
  }

  /**
   * WasteType findFirstOrThrow
   */
  export type WasteTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteType
     */
    select?: WasteTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WasteType
     */
    omit?: WasteTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteTypeInclude<ExtArgs> | null
    /**
     * Filter, which WasteType to fetch.
     */
    where?: WasteTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WasteTypes to fetch.
     */
    orderBy?: WasteTypeOrderByWithRelationInput | WasteTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WasteTypes.
     */
    cursor?: WasteTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WasteTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WasteTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WasteTypes.
     */
    distinct?: WasteTypeScalarFieldEnum | WasteTypeScalarFieldEnum[]
  }

  /**
   * WasteType findMany
   */
  export type WasteTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteType
     */
    select?: WasteTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WasteType
     */
    omit?: WasteTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteTypeInclude<ExtArgs> | null
    /**
     * Filter, which WasteTypes to fetch.
     */
    where?: WasteTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WasteTypes to fetch.
     */
    orderBy?: WasteTypeOrderByWithRelationInput | WasteTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WasteTypes.
     */
    cursor?: WasteTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WasteTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WasteTypes.
     */
    skip?: number
    distinct?: WasteTypeScalarFieldEnum | WasteTypeScalarFieldEnum[]
  }

  /**
   * WasteType create
   */
  export type WasteTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteType
     */
    select?: WasteTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WasteType
     */
    omit?: WasteTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a WasteType.
     */
    data: XOR<WasteTypeCreateInput, WasteTypeUncheckedCreateInput>
  }

  /**
   * WasteType createMany
   */
  export type WasteTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WasteTypes.
     */
    data: WasteTypeCreateManyInput | WasteTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WasteType createManyAndReturn
   */
  export type WasteTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteType
     */
    select?: WasteTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WasteType
     */
    omit?: WasteTypeOmit<ExtArgs> | null
    /**
     * The data used to create many WasteTypes.
     */
    data: WasteTypeCreateManyInput | WasteTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WasteType update
   */
  export type WasteTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteType
     */
    select?: WasteTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WasteType
     */
    omit?: WasteTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a WasteType.
     */
    data: XOR<WasteTypeUpdateInput, WasteTypeUncheckedUpdateInput>
    /**
     * Choose, which WasteType to update.
     */
    where: WasteTypeWhereUniqueInput
  }

  /**
   * WasteType updateMany
   */
  export type WasteTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WasteTypes.
     */
    data: XOR<WasteTypeUpdateManyMutationInput, WasteTypeUncheckedUpdateManyInput>
    /**
     * Filter which WasteTypes to update
     */
    where?: WasteTypeWhereInput
    /**
     * Limit how many WasteTypes to update.
     */
    limit?: number
  }

  /**
   * WasteType updateManyAndReturn
   */
  export type WasteTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteType
     */
    select?: WasteTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WasteType
     */
    omit?: WasteTypeOmit<ExtArgs> | null
    /**
     * The data used to update WasteTypes.
     */
    data: XOR<WasteTypeUpdateManyMutationInput, WasteTypeUncheckedUpdateManyInput>
    /**
     * Filter which WasteTypes to update
     */
    where?: WasteTypeWhereInput
    /**
     * Limit how many WasteTypes to update.
     */
    limit?: number
  }

  /**
   * WasteType upsert
   */
  export type WasteTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteType
     */
    select?: WasteTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WasteType
     */
    omit?: WasteTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the WasteType to update in case it exists.
     */
    where: WasteTypeWhereUniqueInput
    /**
     * In case the WasteType found by the `where` argument doesn't exist, create a new WasteType with this data.
     */
    create: XOR<WasteTypeCreateInput, WasteTypeUncheckedCreateInput>
    /**
     * In case the WasteType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WasteTypeUpdateInput, WasteTypeUncheckedUpdateInput>
  }

  /**
   * WasteType delete
   */
  export type WasteTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteType
     */
    select?: WasteTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WasteType
     */
    omit?: WasteTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteTypeInclude<ExtArgs> | null
    /**
     * Filter which WasteType to delete.
     */
    where: WasteTypeWhereUniqueInput
  }

  /**
   * WasteType deleteMany
   */
  export type WasteTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WasteTypes to delete
     */
    where?: WasteTypeWhereInput
    /**
     * Limit how many WasteTypes to delete.
     */
    limit?: number
  }

  /**
   * WasteType.requests
   */
  export type WasteType$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    where?: ServiceRequestWhereInput
    orderBy?: ServiceRequestOrderByWithRelationInput | ServiceRequestOrderByWithRelationInput[]
    cursor?: ServiceRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceRequestScalarFieldEnum | ServiceRequestScalarFieldEnum[]
  }

  /**
   * WasteType.waste_logs
   */
  export type WasteType$waste_logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteLog
     */
    select?: WasteLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WasteLog
     */
    omit?: WasteLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteLogInclude<ExtArgs> | null
    where?: WasteLogWhereInput
    orderBy?: WasteLogOrderByWithRelationInput | WasteLogOrderByWithRelationInput[]
    cursor?: WasteLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WasteLogScalarFieldEnum | WasteLogScalarFieldEnum[]
  }

  /**
   * WasteType without action
   */
  export type WasteTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteType
     */
    select?: WasteTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WasteType
     */
    omit?: WasteTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteTypeInclude<ExtArgs> | null
  }


  /**
   * Model ServiceRequest
   */

  export type AggregateServiceRequest = {
    _count: ServiceRequestCountAggregateOutputType | null
    _avg: ServiceRequestAvgAggregateOutputType | null
    _sum: ServiceRequestSumAggregateOutputType | null
    _min: ServiceRequestMinAggregateOutputType | null
    _max: ServiceRequestMaxAggregateOutputType | null
  }

  export type ServiceRequestAvgAggregateOutputType = {
    request_id: number | null
    user_id: number | null
    waste_type_id: number | null
  }

  export type ServiceRequestSumAggregateOutputType = {
    request_id: number | null
    user_id: number | null
    waste_type_id: number | null
  }

  export type ServiceRequestMinAggregateOutputType = {
    request_id: number | null
    user_id: number | null
    waste_type_id: number | null
    requested_date: Date | null
    status: $Enums.RequestStatus | null
  }

  export type ServiceRequestMaxAggregateOutputType = {
    request_id: number | null
    user_id: number | null
    waste_type_id: number | null
    requested_date: Date | null
    status: $Enums.RequestStatus | null
  }

  export type ServiceRequestCountAggregateOutputType = {
    request_id: number
    user_id: number
    waste_type_id: number
    requested_date: number
    status: number
    _all: number
  }


  export type ServiceRequestAvgAggregateInputType = {
    request_id?: true
    user_id?: true
    waste_type_id?: true
  }

  export type ServiceRequestSumAggregateInputType = {
    request_id?: true
    user_id?: true
    waste_type_id?: true
  }

  export type ServiceRequestMinAggregateInputType = {
    request_id?: true
    user_id?: true
    waste_type_id?: true
    requested_date?: true
    status?: true
  }

  export type ServiceRequestMaxAggregateInputType = {
    request_id?: true
    user_id?: true
    waste_type_id?: true
    requested_date?: true
    status?: true
  }

  export type ServiceRequestCountAggregateInputType = {
    request_id?: true
    user_id?: true
    waste_type_id?: true
    requested_date?: true
    status?: true
    _all?: true
  }

  export type ServiceRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceRequest to aggregate.
     */
    where?: ServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequests to fetch.
     */
    orderBy?: ServiceRequestOrderByWithRelationInput | ServiceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceRequests
    **/
    _count?: true | ServiceRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceRequestMaxAggregateInputType
  }

  export type GetServiceRequestAggregateType<T extends ServiceRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceRequest[P]>
      : GetScalarType<T[P], AggregateServiceRequest[P]>
  }




  export type ServiceRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceRequestWhereInput
    orderBy?: ServiceRequestOrderByWithAggregationInput | ServiceRequestOrderByWithAggregationInput[]
    by: ServiceRequestScalarFieldEnum[] | ServiceRequestScalarFieldEnum
    having?: ServiceRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceRequestCountAggregateInputType | true
    _avg?: ServiceRequestAvgAggregateInputType
    _sum?: ServiceRequestSumAggregateInputType
    _min?: ServiceRequestMinAggregateInputType
    _max?: ServiceRequestMaxAggregateInputType
  }

  export type ServiceRequestGroupByOutputType = {
    request_id: number
    user_id: number
    waste_type_id: number
    requested_date: Date
    status: $Enums.RequestStatus
    _count: ServiceRequestCountAggregateOutputType | null
    _avg: ServiceRequestAvgAggregateOutputType | null
    _sum: ServiceRequestSumAggregateOutputType | null
    _min: ServiceRequestMinAggregateOutputType | null
    _max: ServiceRequestMaxAggregateOutputType | null
  }

  type GetServiceRequestGroupByPayload<T extends ServiceRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceRequestGroupByOutputType[P]>
        }
      >
    >


  export type ServiceRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    request_id?: boolean
    user_id?: boolean
    waste_type_id?: boolean
    requested_date?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    waste_type?: boolean | WasteTypeDefaultArgs<ExtArgs>
    pickups?: boolean | ServiceRequest$pickupsArgs<ExtArgs>
    _count?: boolean | ServiceRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceRequest"]>

  export type ServiceRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    request_id?: boolean
    user_id?: boolean
    waste_type_id?: boolean
    requested_date?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    waste_type?: boolean | WasteTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceRequest"]>

  export type ServiceRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    request_id?: boolean
    user_id?: boolean
    waste_type_id?: boolean
    requested_date?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    waste_type?: boolean | WasteTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceRequest"]>

  export type ServiceRequestSelectScalar = {
    request_id?: boolean
    user_id?: boolean
    waste_type_id?: boolean
    requested_date?: boolean
    status?: boolean
  }

  export type ServiceRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"request_id" | "user_id" | "waste_type_id" | "requested_date" | "status", ExtArgs["result"]["serviceRequest"]>
  export type ServiceRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    waste_type?: boolean | WasteTypeDefaultArgs<ExtArgs>
    pickups?: boolean | ServiceRequest$pickupsArgs<ExtArgs>
    _count?: boolean | ServiceRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    waste_type?: boolean | WasteTypeDefaultArgs<ExtArgs>
  }
  export type ServiceRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    waste_type?: boolean | WasteTypeDefaultArgs<ExtArgs>
  }

  export type $ServiceRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      waste_type: Prisma.$WasteTypePayload<ExtArgs>
      pickups: Prisma.$PickupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      request_id: number
      user_id: number
      waste_type_id: number
      requested_date: Date
      status: $Enums.RequestStatus
    }, ExtArgs["result"]["serviceRequest"]>
    composites: {}
  }

  type ServiceRequestGetPayload<S extends boolean | null | undefined | ServiceRequestDefaultArgs> = $Result.GetResult<Prisma.$ServiceRequestPayload, S>

  type ServiceRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceRequestCountAggregateInputType | true
    }

  export interface ServiceRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceRequest'], meta: { name: 'ServiceRequest' } }
    /**
     * Find zero or one ServiceRequest that matches the filter.
     * @param {ServiceRequestFindUniqueArgs} args - Arguments to find a ServiceRequest
     * @example
     * // Get one ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceRequestFindUniqueArgs>(args: SelectSubset<T, ServiceRequestFindUniqueArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServiceRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceRequestFindUniqueOrThrowArgs} args - Arguments to find a ServiceRequest
     * @example
     * // Get one ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestFindFirstArgs} args - Arguments to find a ServiceRequest
     * @example
     * // Get one ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceRequestFindFirstArgs>(args?: SelectSubset<T, ServiceRequestFindFirstArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServiceRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestFindFirstOrThrowArgs} args - Arguments to find a ServiceRequest
     * @example
     * // Get one ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServiceRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceRequests
     * const serviceRequests = await prisma.serviceRequest.findMany()
     * 
     * // Get first 10 ServiceRequests
     * const serviceRequests = await prisma.serviceRequest.findMany({ take: 10 })
     * 
     * // Only select the `request_id`
     * const serviceRequestWithRequest_idOnly = await prisma.serviceRequest.findMany({ select: { request_id: true } })
     * 
     */
    findMany<T extends ServiceRequestFindManyArgs>(args?: SelectSubset<T, ServiceRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServiceRequest.
     * @param {ServiceRequestCreateArgs} args - Arguments to create a ServiceRequest.
     * @example
     * // Create one ServiceRequest
     * const ServiceRequest = await prisma.serviceRequest.create({
     *   data: {
     *     // ... data to create a ServiceRequest
     *   }
     * })
     * 
     */
    create<T extends ServiceRequestCreateArgs>(args: SelectSubset<T, ServiceRequestCreateArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServiceRequests.
     * @param {ServiceRequestCreateManyArgs} args - Arguments to create many ServiceRequests.
     * @example
     * // Create many ServiceRequests
     * const serviceRequest = await prisma.serviceRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceRequestCreateManyArgs>(args?: SelectSubset<T, ServiceRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceRequests and returns the data saved in the database.
     * @param {ServiceRequestCreateManyAndReturnArgs} args - Arguments to create many ServiceRequests.
     * @example
     * // Create many ServiceRequests
     * const serviceRequest = await prisma.serviceRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceRequests and only return the `request_id`
     * const serviceRequestWithRequest_idOnly = await prisma.serviceRequest.createManyAndReturn({
     *   select: { request_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServiceRequest.
     * @param {ServiceRequestDeleteArgs} args - Arguments to delete one ServiceRequest.
     * @example
     * // Delete one ServiceRequest
     * const ServiceRequest = await prisma.serviceRequest.delete({
     *   where: {
     *     // ... filter to delete one ServiceRequest
     *   }
     * })
     * 
     */
    delete<T extends ServiceRequestDeleteArgs>(args: SelectSubset<T, ServiceRequestDeleteArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServiceRequest.
     * @param {ServiceRequestUpdateArgs} args - Arguments to update one ServiceRequest.
     * @example
     * // Update one ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceRequestUpdateArgs>(args: SelectSubset<T, ServiceRequestUpdateArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServiceRequests.
     * @param {ServiceRequestDeleteManyArgs} args - Arguments to filter ServiceRequests to delete.
     * @example
     * // Delete a few ServiceRequests
     * const { count } = await prisma.serviceRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceRequestDeleteManyArgs>(args?: SelectSubset<T, ServiceRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceRequests
     * const serviceRequest = await prisma.serviceRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceRequestUpdateManyArgs>(args: SelectSubset<T, ServiceRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceRequests and returns the data updated in the database.
     * @param {ServiceRequestUpdateManyAndReturnArgs} args - Arguments to update many ServiceRequests.
     * @example
     * // Update many ServiceRequests
     * const serviceRequest = await prisma.serviceRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServiceRequests and only return the `request_id`
     * const serviceRequestWithRequest_idOnly = await prisma.serviceRequest.updateManyAndReturn({
     *   select: { request_id: true },
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
    updateManyAndReturn<T extends ServiceRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServiceRequest.
     * @param {ServiceRequestUpsertArgs} args - Arguments to update or create a ServiceRequest.
     * @example
     * // Update or create a ServiceRequest
     * const serviceRequest = await prisma.serviceRequest.upsert({
     *   create: {
     *     // ... data to create a ServiceRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceRequest we want to update
     *   }
     * })
     */
    upsert<T extends ServiceRequestUpsertArgs>(args: SelectSubset<T, ServiceRequestUpsertArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServiceRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestCountArgs} args - Arguments to filter ServiceRequests to count.
     * @example
     * // Count the number of ServiceRequests
     * const count = await prisma.serviceRequest.count({
     *   where: {
     *     // ... the filter for the ServiceRequests we want to count
     *   }
     * })
    **/
    count<T extends ServiceRequestCountArgs>(
      args?: Subset<T, ServiceRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceRequestAggregateArgs>(args: Subset<T, ServiceRequestAggregateArgs>): Prisma.PrismaPromise<GetServiceRequestAggregateType<T>>

    /**
     * Group by ServiceRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceRequestGroupByArgs} args - Group by arguments.
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
      T extends ServiceRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceRequestGroupByArgs['orderBy'] }
        : { orderBy?: ServiceRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceRequest model
   */
  readonly fields: ServiceRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    waste_type<T extends WasteTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WasteTypeDefaultArgs<ExtArgs>>): Prisma__WasteTypeClient<$Result.GetResult<Prisma.$WasteTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pickups<T extends ServiceRequest$pickupsArgs<ExtArgs> = {}>(args?: Subset<T, ServiceRequest$pickupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PickupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ServiceRequest model
   */
  interface ServiceRequestFieldRefs {
    readonly request_id: FieldRef<"ServiceRequest", 'Int'>
    readonly user_id: FieldRef<"ServiceRequest", 'Int'>
    readonly waste_type_id: FieldRef<"ServiceRequest", 'Int'>
    readonly requested_date: FieldRef<"ServiceRequest", 'DateTime'>
    readonly status: FieldRef<"ServiceRequest", 'RequestStatus'>
  }
    

  // Custom InputTypes
  /**
   * ServiceRequest findUnique
   */
  export type ServiceRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequest to fetch.
     */
    where: ServiceRequestWhereUniqueInput
  }

  /**
   * ServiceRequest findUniqueOrThrow
   */
  export type ServiceRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequest to fetch.
     */
    where: ServiceRequestWhereUniqueInput
  }

  /**
   * ServiceRequest findFirst
   */
  export type ServiceRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequest to fetch.
     */
    where?: ServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequests to fetch.
     */
    orderBy?: ServiceRequestOrderByWithRelationInput | ServiceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceRequests.
     */
    cursor?: ServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceRequests.
     */
    distinct?: ServiceRequestScalarFieldEnum | ServiceRequestScalarFieldEnum[]
  }

  /**
   * ServiceRequest findFirstOrThrow
   */
  export type ServiceRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequest to fetch.
     */
    where?: ServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequests to fetch.
     */
    orderBy?: ServiceRequestOrderByWithRelationInput | ServiceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceRequests.
     */
    cursor?: ServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceRequests.
     */
    distinct?: ServiceRequestScalarFieldEnum | ServiceRequestScalarFieldEnum[]
  }

  /**
   * ServiceRequest findMany
   */
  export type ServiceRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * Filter, which ServiceRequests to fetch.
     */
    where?: ServiceRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceRequests to fetch.
     */
    orderBy?: ServiceRequestOrderByWithRelationInput | ServiceRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceRequests.
     */
    cursor?: ServiceRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceRequests.
     */
    skip?: number
    distinct?: ServiceRequestScalarFieldEnum | ServiceRequestScalarFieldEnum[]
  }

  /**
   * ServiceRequest create
   */
  export type ServiceRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceRequest.
     */
    data: XOR<ServiceRequestCreateInput, ServiceRequestUncheckedCreateInput>
  }

  /**
   * ServiceRequest createMany
   */
  export type ServiceRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceRequests.
     */
    data: ServiceRequestCreateManyInput | ServiceRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServiceRequest createManyAndReturn
   */
  export type ServiceRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * The data used to create many ServiceRequests.
     */
    data: ServiceRequestCreateManyInput | ServiceRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceRequest update
   */
  export type ServiceRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceRequest.
     */
    data: XOR<ServiceRequestUpdateInput, ServiceRequestUncheckedUpdateInput>
    /**
     * Choose, which ServiceRequest to update.
     */
    where: ServiceRequestWhereUniqueInput
  }

  /**
   * ServiceRequest updateMany
   */
  export type ServiceRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceRequests.
     */
    data: XOR<ServiceRequestUpdateManyMutationInput, ServiceRequestUncheckedUpdateManyInput>
    /**
     * Filter which ServiceRequests to update
     */
    where?: ServiceRequestWhereInput
    /**
     * Limit how many ServiceRequests to update.
     */
    limit?: number
  }

  /**
   * ServiceRequest updateManyAndReturn
   */
  export type ServiceRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * The data used to update ServiceRequests.
     */
    data: XOR<ServiceRequestUpdateManyMutationInput, ServiceRequestUncheckedUpdateManyInput>
    /**
     * Filter which ServiceRequests to update
     */
    where?: ServiceRequestWhereInput
    /**
     * Limit how many ServiceRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceRequest upsert
   */
  export type ServiceRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceRequest to update in case it exists.
     */
    where: ServiceRequestWhereUniqueInput
    /**
     * In case the ServiceRequest found by the `where` argument doesn't exist, create a new ServiceRequest with this data.
     */
    create: XOR<ServiceRequestCreateInput, ServiceRequestUncheckedCreateInput>
    /**
     * In case the ServiceRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceRequestUpdateInput, ServiceRequestUncheckedUpdateInput>
  }

  /**
   * ServiceRequest delete
   */
  export type ServiceRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
    /**
     * Filter which ServiceRequest to delete.
     */
    where: ServiceRequestWhereUniqueInput
  }

  /**
   * ServiceRequest deleteMany
   */
  export type ServiceRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceRequests to delete
     */
    where?: ServiceRequestWhereInput
    /**
     * Limit how many ServiceRequests to delete.
     */
    limit?: number
  }

  /**
   * ServiceRequest.pickups
   */
  export type ServiceRequest$pickupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pickup
     */
    select?: PickupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pickup
     */
    omit?: PickupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupInclude<ExtArgs> | null
    where?: PickupWhereInput
    orderBy?: PickupOrderByWithRelationInput | PickupOrderByWithRelationInput[]
    cursor?: PickupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PickupScalarFieldEnum | PickupScalarFieldEnum[]
  }

  /**
   * ServiceRequest without action
   */
  export type ServiceRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceRequest
     */
    select?: ServiceRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServiceRequest
     */
    omit?: ServiceRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceRequestInclude<ExtArgs> | null
  }


  /**
   * Model Pickup
   */

  export type AggregatePickup = {
    _count: PickupCountAggregateOutputType | null
    _avg: PickupAvgAggregateOutputType | null
    _sum: PickupSumAggregateOutputType | null
    _min: PickupMinAggregateOutputType | null
    _max: PickupMaxAggregateOutputType | null
  }

  export type PickupAvgAggregateOutputType = {
    pickup_id: number | null
    request_id: number | null
    route_id: number | null
  }

  export type PickupSumAggregateOutputType = {
    pickup_id: number | null
    request_id: number | null
    route_id: number | null
  }

  export type PickupMinAggregateOutputType = {
    pickup_id: number | null
    request_id: number | null
    scheduled_date: Date | null
    route_id: number | null
    status: $Enums.PickupStatus | null
    updated_at: Date | null
  }

  export type PickupMaxAggregateOutputType = {
    pickup_id: number | null
    request_id: number | null
    scheduled_date: Date | null
    route_id: number | null
    status: $Enums.PickupStatus | null
    updated_at: Date | null
  }

  export type PickupCountAggregateOutputType = {
    pickup_id: number
    request_id: number
    scheduled_date: number
    route_id: number
    status: number
    updated_at: number
    _all: number
  }


  export type PickupAvgAggregateInputType = {
    pickup_id?: true
    request_id?: true
    route_id?: true
  }

  export type PickupSumAggregateInputType = {
    pickup_id?: true
    request_id?: true
    route_id?: true
  }

  export type PickupMinAggregateInputType = {
    pickup_id?: true
    request_id?: true
    scheduled_date?: true
    route_id?: true
    status?: true
    updated_at?: true
  }

  export type PickupMaxAggregateInputType = {
    pickup_id?: true
    request_id?: true
    scheduled_date?: true
    route_id?: true
    status?: true
    updated_at?: true
  }

  export type PickupCountAggregateInputType = {
    pickup_id?: true
    request_id?: true
    scheduled_date?: true
    route_id?: true
    status?: true
    updated_at?: true
    _all?: true
  }

  export type PickupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pickup to aggregate.
     */
    where?: PickupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pickups to fetch.
     */
    orderBy?: PickupOrderByWithRelationInput | PickupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PickupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pickups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pickups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pickups
    **/
    _count?: true | PickupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PickupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PickupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PickupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PickupMaxAggregateInputType
  }

  export type GetPickupAggregateType<T extends PickupAggregateArgs> = {
        [P in keyof T & keyof AggregatePickup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePickup[P]>
      : GetScalarType<T[P], AggregatePickup[P]>
  }




  export type PickupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PickupWhereInput
    orderBy?: PickupOrderByWithAggregationInput | PickupOrderByWithAggregationInput[]
    by: PickupScalarFieldEnum[] | PickupScalarFieldEnum
    having?: PickupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PickupCountAggregateInputType | true
    _avg?: PickupAvgAggregateInputType
    _sum?: PickupSumAggregateInputType
    _min?: PickupMinAggregateInputType
    _max?: PickupMaxAggregateInputType
  }

  export type PickupGroupByOutputType = {
    pickup_id: number
    request_id: number
    scheduled_date: Date
    route_id: number | null
    status: $Enums.PickupStatus
    updated_at: Date
    _count: PickupCountAggregateOutputType | null
    _avg: PickupAvgAggregateOutputType | null
    _sum: PickupSumAggregateOutputType | null
    _min: PickupMinAggregateOutputType | null
    _max: PickupMaxAggregateOutputType | null
  }

  type GetPickupGroupByPayload<T extends PickupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PickupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PickupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PickupGroupByOutputType[P]>
            : GetScalarType<T[P], PickupGroupByOutputType[P]>
        }
      >
    >


  export type PickupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pickup_id?: boolean
    request_id?: boolean
    scheduled_date?: boolean
    route_id?: boolean
    status?: boolean
    updated_at?: boolean
    service_request?: boolean | ServiceRequestDefaultArgs<ExtArgs>
    route?: boolean | Pickup$routeArgs<ExtArgs>
    complaints?: boolean | Pickup$complaintsArgs<ExtArgs>
    routeAssignment?: boolean | Pickup$routeAssignmentArgs<ExtArgs>
    _count?: boolean | PickupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pickup"]>

  export type PickupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pickup_id?: boolean
    request_id?: boolean
    scheduled_date?: boolean
    route_id?: boolean
    status?: boolean
    updated_at?: boolean
    service_request?: boolean | ServiceRequestDefaultArgs<ExtArgs>
    route?: boolean | Pickup$routeArgs<ExtArgs>
  }, ExtArgs["result"]["pickup"]>

  export type PickupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pickup_id?: boolean
    request_id?: boolean
    scheduled_date?: boolean
    route_id?: boolean
    status?: boolean
    updated_at?: boolean
    service_request?: boolean | ServiceRequestDefaultArgs<ExtArgs>
    route?: boolean | Pickup$routeArgs<ExtArgs>
  }, ExtArgs["result"]["pickup"]>

  export type PickupSelectScalar = {
    pickup_id?: boolean
    request_id?: boolean
    scheduled_date?: boolean
    route_id?: boolean
    status?: boolean
    updated_at?: boolean
  }

  export type PickupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pickup_id" | "request_id" | "scheduled_date" | "route_id" | "status" | "updated_at", ExtArgs["result"]["pickup"]>
  export type PickupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service_request?: boolean | ServiceRequestDefaultArgs<ExtArgs>
    route?: boolean | Pickup$routeArgs<ExtArgs>
    complaints?: boolean | Pickup$complaintsArgs<ExtArgs>
    routeAssignment?: boolean | Pickup$routeAssignmentArgs<ExtArgs>
    _count?: boolean | PickupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PickupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service_request?: boolean | ServiceRequestDefaultArgs<ExtArgs>
    route?: boolean | Pickup$routeArgs<ExtArgs>
  }
  export type PickupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service_request?: boolean | ServiceRequestDefaultArgs<ExtArgs>
    route?: boolean | Pickup$routeArgs<ExtArgs>
  }

  export type $PickupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pickup"
    objects: {
      service_request: Prisma.$ServiceRequestPayload<ExtArgs>
      route: Prisma.$RoutePayload<ExtArgs> | null
      complaints: Prisma.$ComplaintPayload<ExtArgs>[]
      routeAssignment: Prisma.$RouteAssignmentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      pickup_id: number
      request_id: number
      scheduled_date: Date
      route_id: number | null
      status: $Enums.PickupStatus
      updated_at: Date
    }, ExtArgs["result"]["pickup"]>
    composites: {}
  }

  type PickupGetPayload<S extends boolean | null | undefined | PickupDefaultArgs> = $Result.GetResult<Prisma.$PickupPayload, S>

  type PickupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PickupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PickupCountAggregateInputType | true
    }

  export interface PickupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pickup'], meta: { name: 'Pickup' } }
    /**
     * Find zero or one Pickup that matches the filter.
     * @param {PickupFindUniqueArgs} args - Arguments to find a Pickup
     * @example
     * // Get one Pickup
     * const pickup = await prisma.pickup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PickupFindUniqueArgs>(args: SelectSubset<T, PickupFindUniqueArgs<ExtArgs>>): Prisma__PickupClient<$Result.GetResult<Prisma.$PickupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pickup that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PickupFindUniqueOrThrowArgs} args - Arguments to find a Pickup
     * @example
     * // Get one Pickup
     * const pickup = await prisma.pickup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PickupFindUniqueOrThrowArgs>(args: SelectSubset<T, PickupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PickupClient<$Result.GetResult<Prisma.$PickupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pickup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickupFindFirstArgs} args - Arguments to find a Pickup
     * @example
     * // Get one Pickup
     * const pickup = await prisma.pickup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PickupFindFirstArgs>(args?: SelectSubset<T, PickupFindFirstArgs<ExtArgs>>): Prisma__PickupClient<$Result.GetResult<Prisma.$PickupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pickup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickupFindFirstOrThrowArgs} args - Arguments to find a Pickup
     * @example
     * // Get one Pickup
     * const pickup = await prisma.pickup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PickupFindFirstOrThrowArgs>(args?: SelectSubset<T, PickupFindFirstOrThrowArgs<ExtArgs>>): Prisma__PickupClient<$Result.GetResult<Prisma.$PickupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pickups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pickups
     * const pickups = await prisma.pickup.findMany()
     * 
     * // Get first 10 Pickups
     * const pickups = await prisma.pickup.findMany({ take: 10 })
     * 
     * // Only select the `pickup_id`
     * const pickupWithPickup_idOnly = await prisma.pickup.findMany({ select: { pickup_id: true } })
     * 
     */
    findMany<T extends PickupFindManyArgs>(args?: SelectSubset<T, PickupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PickupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pickup.
     * @param {PickupCreateArgs} args - Arguments to create a Pickup.
     * @example
     * // Create one Pickup
     * const Pickup = await prisma.pickup.create({
     *   data: {
     *     // ... data to create a Pickup
     *   }
     * })
     * 
     */
    create<T extends PickupCreateArgs>(args: SelectSubset<T, PickupCreateArgs<ExtArgs>>): Prisma__PickupClient<$Result.GetResult<Prisma.$PickupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pickups.
     * @param {PickupCreateManyArgs} args - Arguments to create many Pickups.
     * @example
     * // Create many Pickups
     * const pickup = await prisma.pickup.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PickupCreateManyArgs>(args?: SelectSubset<T, PickupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pickups and returns the data saved in the database.
     * @param {PickupCreateManyAndReturnArgs} args - Arguments to create many Pickups.
     * @example
     * // Create many Pickups
     * const pickup = await prisma.pickup.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pickups and only return the `pickup_id`
     * const pickupWithPickup_idOnly = await prisma.pickup.createManyAndReturn({
     *   select: { pickup_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PickupCreateManyAndReturnArgs>(args?: SelectSubset<T, PickupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PickupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pickup.
     * @param {PickupDeleteArgs} args - Arguments to delete one Pickup.
     * @example
     * // Delete one Pickup
     * const Pickup = await prisma.pickup.delete({
     *   where: {
     *     // ... filter to delete one Pickup
     *   }
     * })
     * 
     */
    delete<T extends PickupDeleteArgs>(args: SelectSubset<T, PickupDeleteArgs<ExtArgs>>): Prisma__PickupClient<$Result.GetResult<Prisma.$PickupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pickup.
     * @param {PickupUpdateArgs} args - Arguments to update one Pickup.
     * @example
     * // Update one Pickup
     * const pickup = await prisma.pickup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PickupUpdateArgs>(args: SelectSubset<T, PickupUpdateArgs<ExtArgs>>): Prisma__PickupClient<$Result.GetResult<Prisma.$PickupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pickups.
     * @param {PickupDeleteManyArgs} args - Arguments to filter Pickups to delete.
     * @example
     * // Delete a few Pickups
     * const { count } = await prisma.pickup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PickupDeleteManyArgs>(args?: SelectSubset<T, PickupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pickups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pickups
     * const pickup = await prisma.pickup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PickupUpdateManyArgs>(args: SelectSubset<T, PickupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pickups and returns the data updated in the database.
     * @param {PickupUpdateManyAndReturnArgs} args - Arguments to update many Pickups.
     * @example
     * // Update many Pickups
     * const pickup = await prisma.pickup.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pickups and only return the `pickup_id`
     * const pickupWithPickup_idOnly = await prisma.pickup.updateManyAndReturn({
     *   select: { pickup_id: true },
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
    updateManyAndReturn<T extends PickupUpdateManyAndReturnArgs>(args: SelectSubset<T, PickupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PickupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pickup.
     * @param {PickupUpsertArgs} args - Arguments to update or create a Pickup.
     * @example
     * // Update or create a Pickup
     * const pickup = await prisma.pickup.upsert({
     *   create: {
     *     // ... data to create a Pickup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pickup we want to update
     *   }
     * })
     */
    upsert<T extends PickupUpsertArgs>(args: SelectSubset<T, PickupUpsertArgs<ExtArgs>>): Prisma__PickupClient<$Result.GetResult<Prisma.$PickupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pickups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickupCountArgs} args - Arguments to filter Pickups to count.
     * @example
     * // Count the number of Pickups
     * const count = await prisma.pickup.count({
     *   where: {
     *     // ... the filter for the Pickups we want to count
     *   }
     * })
    **/
    count<T extends PickupCountArgs>(
      args?: Subset<T, PickupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PickupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pickup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PickupAggregateArgs>(args: Subset<T, PickupAggregateArgs>): Prisma.PrismaPromise<GetPickupAggregateType<T>>

    /**
     * Group by Pickup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PickupGroupByArgs} args - Group by arguments.
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
      T extends PickupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PickupGroupByArgs['orderBy'] }
        : { orderBy?: PickupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PickupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPickupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pickup model
   */
  readonly fields: PickupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pickup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PickupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service_request<T extends ServiceRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceRequestDefaultArgs<ExtArgs>>): Prisma__ServiceRequestClient<$Result.GetResult<Prisma.$ServiceRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    route<T extends Pickup$routeArgs<ExtArgs> = {}>(args?: Subset<T, Pickup$routeArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    complaints<T extends Pickup$complaintsArgs<ExtArgs> = {}>(args?: Subset<T, Pickup$complaintsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplaintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    routeAssignment<T extends Pickup$routeAssignmentArgs<ExtArgs> = {}>(args?: Subset<T, Pickup$routeAssignmentArgs<ExtArgs>>): Prisma__RouteAssignmentClient<$Result.GetResult<Prisma.$RouteAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Pickup model
   */
  interface PickupFieldRefs {
    readonly pickup_id: FieldRef<"Pickup", 'Int'>
    readonly request_id: FieldRef<"Pickup", 'Int'>
    readonly scheduled_date: FieldRef<"Pickup", 'DateTime'>
    readonly route_id: FieldRef<"Pickup", 'Int'>
    readonly status: FieldRef<"Pickup", 'PickupStatus'>
    readonly updated_at: FieldRef<"Pickup", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Pickup findUnique
   */
  export type PickupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pickup
     */
    select?: PickupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pickup
     */
    omit?: PickupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupInclude<ExtArgs> | null
    /**
     * Filter, which Pickup to fetch.
     */
    where: PickupWhereUniqueInput
  }

  /**
   * Pickup findUniqueOrThrow
   */
  export type PickupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pickup
     */
    select?: PickupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pickup
     */
    omit?: PickupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupInclude<ExtArgs> | null
    /**
     * Filter, which Pickup to fetch.
     */
    where: PickupWhereUniqueInput
  }

  /**
   * Pickup findFirst
   */
  export type PickupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pickup
     */
    select?: PickupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pickup
     */
    omit?: PickupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupInclude<ExtArgs> | null
    /**
     * Filter, which Pickup to fetch.
     */
    where?: PickupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pickups to fetch.
     */
    orderBy?: PickupOrderByWithRelationInput | PickupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pickups.
     */
    cursor?: PickupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pickups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pickups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pickups.
     */
    distinct?: PickupScalarFieldEnum | PickupScalarFieldEnum[]
  }

  /**
   * Pickup findFirstOrThrow
   */
  export type PickupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pickup
     */
    select?: PickupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pickup
     */
    omit?: PickupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupInclude<ExtArgs> | null
    /**
     * Filter, which Pickup to fetch.
     */
    where?: PickupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pickups to fetch.
     */
    orderBy?: PickupOrderByWithRelationInput | PickupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pickups.
     */
    cursor?: PickupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pickups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pickups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pickups.
     */
    distinct?: PickupScalarFieldEnum | PickupScalarFieldEnum[]
  }

  /**
   * Pickup findMany
   */
  export type PickupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pickup
     */
    select?: PickupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pickup
     */
    omit?: PickupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupInclude<ExtArgs> | null
    /**
     * Filter, which Pickups to fetch.
     */
    where?: PickupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pickups to fetch.
     */
    orderBy?: PickupOrderByWithRelationInput | PickupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pickups.
     */
    cursor?: PickupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pickups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pickups.
     */
    skip?: number
    distinct?: PickupScalarFieldEnum | PickupScalarFieldEnum[]
  }

  /**
   * Pickup create
   */
  export type PickupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pickup
     */
    select?: PickupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pickup
     */
    omit?: PickupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupInclude<ExtArgs> | null
    /**
     * The data needed to create a Pickup.
     */
    data: XOR<PickupCreateInput, PickupUncheckedCreateInput>
  }

  /**
   * Pickup createMany
   */
  export type PickupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pickups.
     */
    data: PickupCreateManyInput | PickupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pickup createManyAndReturn
   */
  export type PickupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pickup
     */
    select?: PickupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pickup
     */
    omit?: PickupOmit<ExtArgs> | null
    /**
     * The data used to create many Pickups.
     */
    data: PickupCreateManyInput | PickupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pickup update
   */
  export type PickupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pickup
     */
    select?: PickupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pickup
     */
    omit?: PickupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupInclude<ExtArgs> | null
    /**
     * The data needed to update a Pickup.
     */
    data: XOR<PickupUpdateInput, PickupUncheckedUpdateInput>
    /**
     * Choose, which Pickup to update.
     */
    where: PickupWhereUniqueInput
  }

  /**
   * Pickup updateMany
   */
  export type PickupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pickups.
     */
    data: XOR<PickupUpdateManyMutationInput, PickupUncheckedUpdateManyInput>
    /**
     * Filter which Pickups to update
     */
    where?: PickupWhereInput
    /**
     * Limit how many Pickups to update.
     */
    limit?: number
  }

  /**
   * Pickup updateManyAndReturn
   */
  export type PickupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pickup
     */
    select?: PickupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pickup
     */
    omit?: PickupOmit<ExtArgs> | null
    /**
     * The data used to update Pickups.
     */
    data: XOR<PickupUpdateManyMutationInput, PickupUncheckedUpdateManyInput>
    /**
     * Filter which Pickups to update
     */
    where?: PickupWhereInput
    /**
     * Limit how many Pickups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pickup upsert
   */
  export type PickupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pickup
     */
    select?: PickupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pickup
     */
    omit?: PickupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupInclude<ExtArgs> | null
    /**
     * The filter to search for the Pickup to update in case it exists.
     */
    where: PickupWhereUniqueInput
    /**
     * In case the Pickup found by the `where` argument doesn't exist, create a new Pickup with this data.
     */
    create: XOR<PickupCreateInput, PickupUncheckedCreateInput>
    /**
     * In case the Pickup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PickupUpdateInput, PickupUncheckedUpdateInput>
  }

  /**
   * Pickup delete
   */
  export type PickupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pickup
     */
    select?: PickupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pickup
     */
    omit?: PickupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupInclude<ExtArgs> | null
    /**
     * Filter which Pickup to delete.
     */
    where: PickupWhereUniqueInput
  }

  /**
   * Pickup deleteMany
   */
  export type PickupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pickups to delete
     */
    where?: PickupWhereInput
    /**
     * Limit how many Pickups to delete.
     */
    limit?: number
  }

  /**
   * Pickup.route
   */
  export type Pickup$routeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    where?: RouteWhereInput
  }

  /**
   * Pickup.complaints
   */
  export type Pickup$complaintsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaint
     */
    select?: ComplaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaint
     */
    omit?: ComplaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintInclude<ExtArgs> | null
    where?: ComplaintWhereInput
    orderBy?: ComplaintOrderByWithRelationInput | ComplaintOrderByWithRelationInput[]
    cursor?: ComplaintWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ComplaintScalarFieldEnum | ComplaintScalarFieldEnum[]
  }

  /**
   * Pickup.routeAssignment
   */
  export type Pickup$routeAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteAssignment
     */
    select?: RouteAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteAssignment
     */
    omit?: RouteAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteAssignmentInclude<ExtArgs> | null
    where?: RouteAssignmentWhereInput
  }

  /**
   * Pickup without action
   */
  export type PickupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pickup
     */
    select?: PickupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pickup
     */
    omit?: PickupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupInclude<ExtArgs> | null
  }


  /**
   * Model Route
   */

  export type AggregateRoute = {
    _count: RouteCountAggregateOutputType | null
    _avg: RouteAvgAggregateOutputType | null
    _sum: RouteSumAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  export type RouteAvgAggregateOutputType = {
    route_id: number | null
  }

  export type RouteSumAggregateOutputType = {
    route_id: number | null
  }

  export type RouteMinAggregateOutputType = {
    route_id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
  }

  export type RouteMaxAggregateOutputType = {
    route_id: number | null
    name: string | null
    description: string | null
    created_at: Date | null
  }

  export type RouteCountAggregateOutputType = {
    route_id: number
    name: number
    description: number
    created_at: number
    _all: number
  }


  export type RouteAvgAggregateInputType = {
    route_id?: true
  }

  export type RouteSumAggregateInputType = {
    route_id?: true
  }

  export type RouteMinAggregateInputType = {
    route_id?: true
    name?: true
    description?: true
    created_at?: true
  }

  export type RouteMaxAggregateInputType = {
    route_id?: true
    name?: true
    description?: true
    created_at?: true
  }

  export type RouteCountAggregateInputType = {
    route_id?: true
    name?: true
    description?: true
    created_at?: true
    _all?: true
  }

  export type RouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Route to aggregate.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routes
    **/
    _count?: true | RouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RouteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RouteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteMaxAggregateInputType
  }

  export type GetRouteAggregateType<T extends RouteAggregateArgs> = {
        [P in keyof T & keyof AggregateRoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoute[P]>
      : GetScalarType<T[P], AggregateRoute[P]>
  }




  export type RouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithAggregationInput | RouteOrderByWithAggregationInput[]
    by: RouteScalarFieldEnum[] | RouteScalarFieldEnum
    having?: RouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteCountAggregateInputType | true
    _avg?: RouteAvgAggregateInputType
    _sum?: RouteSumAggregateInputType
    _min?: RouteMinAggregateInputType
    _max?: RouteMaxAggregateInputType
  }

  export type RouteGroupByOutputType = {
    route_id: number
    name: string
    description: string | null
    created_at: Date
    _count: RouteCountAggregateOutputType | null
    _avg: RouteAvgAggregateOutputType | null
    _sum: RouteSumAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  type GetRouteGroupByPayload<T extends RouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteGroupByOutputType[P]>
            : GetScalarType<T[P], RouteGroupByOutputType[P]>
        }
      >
    >


  export type RouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    route_id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
    pickups?: boolean | Route$pickupsArgs<ExtArgs>
    routeAssignment?: boolean | Route$routeAssignmentArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>

  export type RouteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    route_id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["route"]>

  export type RouteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    route_id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["route"]>

  export type RouteSelectScalar = {
    route_id?: boolean
    name?: boolean
    description?: boolean
    created_at?: boolean
  }

  export type RouteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"route_id" | "name" | "description" | "created_at", ExtArgs["result"]["route"]>
  export type RouteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pickups?: boolean | Route$pickupsArgs<ExtArgs>
    routeAssignment?: boolean | Route$routeAssignmentArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RouteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RouteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Route"
    objects: {
      pickups: Prisma.$PickupPayload<ExtArgs>[]
      routeAssignment: Prisma.$RouteAssignmentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      route_id: number
      name: string
      description: string | null
      created_at: Date
    }, ExtArgs["result"]["route"]>
    composites: {}
  }

  type RouteGetPayload<S extends boolean | null | undefined | RouteDefaultArgs> = $Result.GetResult<Prisma.$RoutePayload, S>

  type RouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteCountAggregateInputType | true
    }

  export interface RouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Route'], meta: { name: 'Route' } }
    /**
     * Find zero or one Route that matches the filter.
     * @param {RouteFindUniqueArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteFindUniqueArgs>(args: SelectSubset<T, RouteFindUniqueArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Route that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteFindUniqueOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteFindFirstArgs>(args?: SelectSubset<T, RouteFindFirstArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Routes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routes
     * const routes = await prisma.route.findMany()
     * 
     * // Get first 10 Routes
     * const routes = await prisma.route.findMany({ take: 10 })
     * 
     * // Only select the `route_id`
     * const routeWithRoute_idOnly = await prisma.route.findMany({ select: { route_id: true } })
     * 
     */
    findMany<T extends RouteFindManyArgs>(args?: SelectSubset<T, RouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Route.
     * @param {RouteCreateArgs} args - Arguments to create a Route.
     * @example
     * // Create one Route
     * const Route = await prisma.route.create({
     *   data: {
     *     // ... data to create a Route
     *   }
     * })
     * 
     */
    create<T extends RouteCreateArgs>(args: SelectSubset<T, RouteCreateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Routes.
     * @param {RouteCreateManyArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteCreateManyArgs>(args?: SelectSubset<T, RouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Routes and returns the data saved in the database.
     * @param {RouteCreateManyAndReturnArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Routes and only return the `route_id`
     * const routeWithRoute_idOnly = await prisma.route.createManyAndReturn({
     *   select: { route_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RouteCreateManyAndReturnArgs>(args?: SelectSubset<T, RouteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Route.
     * @param {RouteDeleteArgs} args - Arguments to delete one Route.
     * @example
     * // Delete one Route
     * const Route = await prisma.route.delete({
     *   where: {
     *     // ... filter to delete one Route
     *   }
     * })
     * 
     */
    delete<T extends RouteDeleteArgs>(args: SelectSubset<T, RouteDeleteArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Route.
     * @param {RouteUpdateArgs} args - Arguments to update one Route.
     * @example
     * // Update one Route
     * const route = await prisma.route.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteUpdateArgs>(args: SelectSubset<T, RouteUpdateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Routes.
     * @param {RouteDeleteManyArgs} args - Arguments to filter Routes to delete.
     * @example
     * // Delete a few Routes
     * const { count } = await prisma.route.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteDeleteManyArgs>(args?: SelectSubset<T, RouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteUpdateManyArgs>(args: SelectSubset<T, RouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes and returns the data updated in the database.
     * @param {RouteUpdateManyAndReturnArgs} args - Arguments to update many Routes.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Routes and only return the `route_id`
     * const routeWithRoute_idOnly = await prisma.route.updateManyAndReturn({
     *   select: { route_id: true },
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
    updateManyAndReturn<T extends RouteUpdateManyAndReturnArgs>(args: SelectSubset<T, RouteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Route.
     * @param {RouteUpsertArgs} args - Arguments to update or create a Route.
     * @example
     * // Update or create a Route
     * const route = await prisma.route.upsert({
     *   create: {
     *     // ... data to create a Route
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Route we want to update
     *   }
     * })
     */
    upsert<T extends RouteUpsertArgs>(args: SelectSubset<T, RouteUpsertArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteCountArgs} args - Arguments to filter Routes to count.
     * @example
     * // Count the number of Routes
     * const count = await prisma.route.count({
     *   where: {
     *     // ... the filter for the Routes we want to count
     *   }
     * })
    **/
    count<T extends RouteCountArgs>(
      args?: Subset<T, RouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RouteAggregateArgs>(args: Subset<T, RouteAggregateArgs>): Prisma.PrismaPromise<GetRouteAggregateType<T>>

    /**
     * Group by Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteGroupByArgs} args - Group by arguments.
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
      T extends RouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteGroupByArgs['orderBy'] }
        : { orderBy?: RouteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Route model
   */
  readonly fields: RouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Route.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pickups<T extends Route$pickupsArgs<ExtArgs> = {}>(args?: Subset<T, Route$pickupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PickupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    routeAssignment<T extends Route$routeAssignmentArgs<ExtArgs> = {}>(args?: Subset<T, Route$routeAssignmentArgs<ExtArgs>>): Prisma__RouteAssignmentClient<$Result.GetResult<Prisma.$RouteAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Route model
   */
  interface RouteFieldRefs {
    readonly route_id: FieldRef<"Route", 'Int'>
    readonly name: FieldRef<"Route", 'String'>
    readonly description: FieldRef<"Route", 'String'>
    readonly created_at: FieldRef<"Route", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Route findUnique
   */
  export type RouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findUniqueOrThrow
   */
  export type RouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findFirst
   */
  export type RouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findFirstOrThrow
   */
  export type RouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findMany
   */
  export type RouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route create
   */
  export type RouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to create a Route.
     */
    data: XOR<RouteCreateInput, RouteUncheckedCreateInput>
  }

  /**
   * Route createMany
   */
  export type RouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Route createManyAndReturn
   */
  export type RouteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Route update
   */
  export type RouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to update a Route.
     */
    data: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
    /**
     * Choose, which Route to update.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route updateMany
   */
  export type RouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Route updateManyAndReturn
   */
  export type RouteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Route upsert
   */
  export type RouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The filter to search for the Route to update in case it exists.
     */
    where: RouteWhereUniqueInput
    /**
     * In case the Route found by the `where` argument doesn't exist, create a new Route with this data.
     */
    create: XOR<RouteCreateInput, RouteUncheckedCreateInput>
    /**
     * In case the Route was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
  }

  /**
   * Route delete
   */
  export type RouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter which Route to delete.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route deleteMany
   */
  export type RouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routes to delete
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to delete.
     */
    limit?: number
  }

  /**
   * Route.pickups
   */
  export type Route$pickupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pickup
     */
    select?: PickupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pickup
     */
    omit?: PickupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupInclude<ExtArgs> | null
    where?: PickupWhereInput
    orderBy?: PickupOrderByWithRelationInput | PickupOrderByWithRelationInput[]
    cursor?: PickupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PickupScalarFieldEnum | PickupScalarFieldEnum[]
  }

  /**
   * Route.routeAssignment
   */
  export type Route$routeAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteAssignment
     */
    select?: RouteAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteAssignment
     */
    omit?: RouteAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteAssignmentInclude<ExtArgs> | null
    where?: RouteAssignmentWhereInput
  }

  /**
   * Route without action
   */
  export type RouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
  }


  /**
   * Model RouteAssignment
   */

  export type AggregateRouteAssignment = {
    _count: RouteAssignmentCountAggregateOutputType | null
    _avg: RouteAssignmentAvgAggregateOutputType | null
    _sum: RouteAssignmentSumAggregateOutputType | null
    _min: RouteAssignmentMinAggregateOutputType | null
    _max: RouteAssignmentMaxAggregateOutputType | null
  }

  export type RouteAssignmentAvgAggregateOutputType = {
    assignment_id: number | null
    route_id: number | null
    pickup_id: number | null
    sequence_no: number | null
  }

  export type RouteAssignmentSumAggregateOutputType = {
    assignment_id: number | null
    route_id: number | null
    pickup_id: number | null
    sequence_no: number | null
  }

  export type RouteAssignmentMinAggregateOutputType = {
    assignment_id: number | null
    route_id: number | null
    pickup_id: number | null
    sequence_no: number | null
  }

  export type RouteAssignmentMaxAggregateOutputType = {
    assignment_id: number | null
    route_id: number | null
    pickup_id: number | null
    sequence_no: number | null
  }

  export type RouteAssignmentCountAggregateOutputType = {
    assignment_id: number
    route_id: number
    pickup_id: number
    sequence_no: number
    _all: number
  }


  export type RouteAssignmentAvgAggregateInputType = {
    assignment_id?: true
    route_id?: true
    pickup_id?: true
    sequence_no?: true
  }

  export type RouteAssignmentSumAggregateInputType = {
    assignment_id?: true
    route_id?: true
    pickup_id?: true
    sequence_no?: true
  }

  export type RouteAssignmentMinAggregateInputType = {
    assignment_id?: true
    route_id?: true
    pickup_id?: true
    sequence_no?: true
  }

  export type RouteAssignmentMaxAggregateInputType = {
    assignment_id?: true
    route_id?: true
    pickup_id?: true
    sequence_no?: true
  }

  export type RouteAssignmentCountAggregateInputType = {
    assignment_id?: true
    route_id?: true
    pickup_id?: true
    sequence_no?: true
    _all?: true
  }

  export type RouteAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RouteAssignment to aggregate.
     */
    where?: RouteAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteAssignments to fetch.
     */
    orderBy?: RouteAssignmentOrderByWithRelationInput | RouteAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RouteAssignments
    **/
    _count?: true | RouteAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RouteAssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RouteAssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteAssignmentMaxAggregateInputType
  }

  export type GetRouteAssignmentAggregateType<T extends RouteAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateRouteAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRouteAssignment[P]>
      : GetScalarType<T[P], AggregateRouteAssignment[P]>
  }




  export type RouteAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteAssignmentWhereInput
    orderBy?: RouteAssignmentOrderByWithAggregationInput | RouteAssignmentOrderByWithAggregationInput[]
    by: RouteAssignmentScalarFieldEnum[] | RouteAssignmentScalarFieldEnum
    having?: RouteAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteAssignmentCountAggregateInputType | true
    _avg?: RouteAssignmentAvgAggregateInputType
    _sum?: RouteAssignmentSumAggregateInputType
    _min?: RouteAssignmentMinAggregateInputType
    _max?: RouteAssignmentMaxAggregateInputType
  }

  export type RouteAssignmentGroupByOutputType = {
    assignment_id: number
    route_id: number
    pickup_id: number
    sequence_no: number
    _count: RouteAssignmentCountAggregateOutputType | null
    _avg: RouteAssignmentAvgAggregateOutputType | null
    _sum: RouteAssignmentSumAggregateOutputType | null
    _min: RouteAssignmentMinAggregateOutputType | null
    _max: RouteAssignmentMaxAggregateOutputType | null
  }

  type GetRouteAssignmentGroupByPayload<T extends RouteAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], RouteAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type RouteAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    assignment_id?: boolean
    route_id?: boolean
    pickup_id?: boolean
    sequence_no?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    pickup?: boolean | PickupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeAssignment"]>

  export type RouteAssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    assignment_id?: boolean
    route_id?: boolean
    pickup_id?: boolean
    sequence_no?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    pickup?: boolean | PickupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeAssignment"]>

  export type RouteAssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    assignment_id?: boolean
    route_id?: boolean
    pickup_id?: boolean
    sequence_no?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    pickup?: boolean | PickupDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeAssignment"]>

  export type RouteAssignmentSelectScalar = {
    assignment_id?: boolean
    route_id?: boolean
    pickup_id?: boolean
    sequence_no?: boolean
  }

  export type RouteAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"assignment_id" | "route_id" | "pickup_id" | "sequence_no", ExtArgs["result"]["routeAssignment"]>
  export type RouteAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    pickup?: boolean | PickupDefaultArgs<ExtArgs>
  }
  export type RouteAssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    pickup?: boolean | PickupDefaultArgs<ExtArgs>
  }
  export type RouteAssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    pickup?: boolean | PickupDefaultArgs<ExtArgs>
  }

  export type $RouteAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RouteAssignment"
    objects: {
      route: Prisma.$RoutePayload<ExtArgs>
      pickup: Prisma.$PickupPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      assignment_id: number
      route_id: number
      pickup_id: number
      sequence_no: number
    }, ExtArgs["result"]["routeAssignment"]>
    composites: {}
  }

  type RouteAssignmentGetPayload<S extends boolean | null | undefined | RouteAssignmentDefaultArgs> = $Result.GetResult<Prisma.$RouteAssignmentPayload, S>

  type RouteAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteAssignmentCountAggregateInputType | true
    }

  export interface RouteAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RouteAssignment'], meta: { name: 'RouteAssignment' } }
    /**
     * Find zero or one RouteAssignment that matches the filter.
     * @param {RouteAssignmentFindUniqueArgs} args - Arguments to find a RouteAssignment
     * @example
     * // Get one RouteAssignment
     * const routeAssignment = await prisma.routeAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteAssignmentFindUniqueArgs>(args: SelectSubset<T, RouteAssignmentFindUniqueArgs<ExtArgs>>): Prisma__RouteAssignmentClient<$Result.GetResult<Prisma.$RouteAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RouteAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteAssignmentFindUniqueOrThrowArgs} args - Arguments to find a RouteAssignment
     * @example
     * // Get one RouteAssignment
     * const routeAssignment = await prisma.routeAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteAssignmentClient<$Result.GetResult<Prisma.$RouteAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RouteAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteAssignmentFindFirstArgs} args - Arguments to find a RouteAssignment
     * @example
     * // Get one RouteAssignment
     * const routeAssignment = await prisma.routeAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteAssignmentFindFirstArgs>(args?: SelectSubset<T, RouteAssignmentFindFirstArgs<ExtArgs>>): Prisma__RouteAssignmentClient<$Result.GetResult<Prisma.$RouteAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RouteAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteAssignmentFindFirstOrThrowArgs} args - Arguments to find a RouteAssignment
     * @example
     * // Get one RouteAssignment
     * const routeAssignment = await prisma.routeAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteAssignmentClient<$Result.GetResult<Prisma.$RouteAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RouteAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RouteAssignments
     * const routeAssignments = await prisma.routeAssignment.findMany()
     * 
     * // Get first 10 RouteAssignments
     * const routeAssignments = await prisma.routeAssignment.findMany({ take: 10 })
     * 
     * // Only select the `assignment_id`
     * const routeAssignmentWithAssignment_idOnly = await prisma.routeAssignment.findMany({ select: { assignment_id: true } })
     * 
     */
    findMany<T extends RouteAssignmentFindManyArgs>(args?: SelectSubset<T, RouteAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RouteAssignment.
     * @param {RouteAssignmentCreateArgs} args - Arguments to create a RouteAssignment.
     * @example
     * // Create one RouteAssignment
     * const RouteAssignment = await prisma.routeAssignment.create({
     *   data: {
     *     // ... data to create a RouteAssignment
     *   }
     * })
     * 
     */
    create<T extends RouteAssignmentCreateArgs>(args: SelectSubset<T, RouteAssignmentCreateArgs<ExtArgs>>): Prisma__RouteAssignmentClient<$Result.GetResult<Prisma.$RouteAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RouteAssignments.
     * @param {RouteAssignmentCreateManyArgs} args - Arguments to create many RouteAssignments.
     * @example
     * // Create many RouteAssignments
     * const routeAssignment = await prisma.routeAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteAssignmentCreateManyArgs>(args?: SelectSubset<T, RouteAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RouteAssignments and returns the data saved in the database.
     * @param {RouteAssignmentCreateManyAndReturnArgs} args - Arguments to create many RouteAssignments.
     * @example
     * // Create many RouteAssignments
     * const routeAssignment = await prisma.routeAssignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RouteAssignments and only return the `assignment_id`
     * const routeAssignmentWithAssignment_idOnly = await prisma.routeAssignment.createManyAndReturn({
     *   select: { assignment_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RouteAssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, RouteAssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteAssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RouteAssignment.
     * @param {RouteAssignmentDeleteArgs} args - Arguments to delete one RouteAssignment.
     * @example
     * // Delete one RouteAssignment
     * const RouteAssignment = await prisma.routeAssignment.delete({
     *   where: {
     *     // ... filter to delete one RouteAssignment
     *   }
     * })
     * 
     */
    delete<T extends RouteAssignmentDeleteArgs>(args: SelectSubset<T, RouteAssignmentDeleteArgs<ExtArgs>>): Prisma__RouteAssignmentClient<$Result.GetResult<Prisma.$RouteAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RouteAssignment.
     * @param {RouteAssignmentUpdateArgs} args - Arguments to update one RouteAssignment.
     * @example
     * // Update one RouteAssignment
     * const routeAssignment = await prisma.routeAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteAssignmentUpdateArgs>(args: SelectSubset<T, RouteAssignmentUpdateArgs<ExtArgs>>): Prisma__RouteAssignmentClient<$Result.GetResult<Prisma.$RouteAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RouteAssignments.
     * @param {RouteAssignmentDeleteManyArgs} args - Arguments to filter RouteAssignments to delete.
     * @example
     * // Delete a few RouteAssignments
     * const { count } = await prisma.routeAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteAssignmentDeleteManyArgs>(args?: SelectSubset<T, RouteAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RouteAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RouteAssignments
     * const routeAssignment = await prisma.routeAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteAssignmentUpdateManyArgs>(args: SelectSubset<T, RouteAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RouteAssignments and returns the data updated in the database.
     * @param {RouteAssignmentUpdateManyAndReturnArgs} args - Arguments to update many RouteAssignments.
     * @example
     * // Update many RouteAssignments
     * const routeAssignment = await prisma.routeAssignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RouteAssignments and only return the `assignment_id`
     * const routeAssignmentWithAssignment_idOnly = await prisma.routeAssignment.updateManyAndReturn({
     *   select: { assignment_id: true },
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
    updateManyAndReturn<T extends RouteAssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, RouteAssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteAssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RouteAssignment.
     * @param {RouteAssignmentUpsertArgs} args - Arguments to update or create a RouteAssignment.
     * @example
     * // Update or create a RouteAssignment
     * const routeAssignment = await prisma.routeAssignment.upsert({
     *   create: {
     *     // ... data to create a RouteAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RouteAssignment we want to update
     *   }
     * })
     */
    upsert<T extends RouteAssignmentUpsertArgs>(args: SelectSubset<T, RouteAssignmentUpsertArgs<ExtArgs>>): Prisma__RouteAssignmentClient<$Result.GetResult<Prisma.$RouteAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RouteAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteAssignmentCountArgs} args - Arguments to filter RouteAssignments to count.
     * @example
     * // Count the number of RouteAssignments
     * const count = await prisma.routeAssignment.count({
     *   where: {
     *     // ... the filter for the RouteAssignments we want to count
     *   }
     * })
    **/
    count<T extends RouteAssignmentCountArgs>(
      args?: Subset<T, RouteAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RouteAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RouteAssignmentAggregateArgs>(args: Subset<T, RouteAssignmentAggregateArgs>): Prisma.PrismaPromise<GetRouteAssignmentAggregateType<T>>

    /**
     * Group by RouteAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteAssignmentGroupByArgs} args - Group by arguments.
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
      T extends RouteAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: RouteAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RouteAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RouteAssignment model
   */
  readonly fields: RouteAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RouteAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    route<T extends RouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteDefaultArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pickup<T extends PickupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PickupDefaultArgs<ExtArgs>>): Prisma__PickupClient<$Result.GetResult<Prisma.$PickupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RouteAssignment model
   */
  interface RouteAssignmentFieldRefs {
    readonly assignment_id: FieldRef<"RouteAssignment", 'Int'>
    readonly route_id: FieldRef<"RouteAssignment", 'Int'>
    readonly pickup_id: FieldRef<"RouteAssignment", 'Int'>
    readonly sequence_no: FieldRef<"RouteAssignment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RouteAssignment findUnique
   */
  export type RouteAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteAssignment
     */
    select?: RouteAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteAssignment
     */
    omit?: RouteAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which RouteAssignment to fetch.
     */
    where: RouteAssignmentWhereUniqueInput
  }

  /**
   * RouteAssignment findUniqueOrThrow
   */
  export type RouteAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteAssignment
     */
    select?: RouteAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteAssignment
     */
    omit?: RouteAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which RouteAssignment to fetch.
     */
    where: RouteAssignmentWhereUniqueInput
  }

  /**
   * RouteAssignment findFirst
   */
  export type RouteAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteAssignment
     */
    select?: RouteAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteAssignment
     */
    omit?: RouteAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which RouteAssignment to fetch.
     */
    where?: RouteAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteAssignments to fetch.
     */
    orderBy?: RouteAssignmentOrderByWithRelationInput | RouteAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RouteAssignments.
     */
    cursor?: RouteAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RouteAssignments.
     */
    distinct?: RouteAssignmentScalarFieldEnum | RouteAssignmentScalarFieldEnum[]
  }

  /**
   * RouteAssignment findFirstOrThrow
   */
  export type RouteAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteAssignment
     */
    select?: RouteAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteAssignment
     */
    omit?: RouteAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which RouteAssignment to fetch.
     */
    where?: RouteAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteAssignments to fetch.
     */
    orderBy?: RouteAssignmentOrderByWithRelationInput | RouteAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RouteAssignments.
     */
    cursor?: RouteAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RouteAssignments.
     */
    distinct?: RouteAssignmentScalarFieldEnum | RouteAssignmentScalarFieldEnum[]
  }

  /**
   * RouteAssignment findMany
   */
  export type RouteAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteAssignment
     */
    select?: RouteAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteAssignment
     */
    omit?: RouteAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which RouteAssignments to fetch.
     */
    where?: RouteAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteAssignments to fetch.
     */
    orderBy?: RouteAssignmentOrderByWithRelationInput | RouteAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RouteAssignments.
     */
    cursor?: RouteAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteAssignments.
     */
    skip?: number
    distinct?: RouteAssignmentScalarFieldEnum | RouteAssignmentScalarFieldEnum[]
  }

  /**
   * RouteAssignment create
   */
  export type RouteAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteAssignment
     */
    select?: RouteAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteAssignment
     */
    omit?: RouteAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a RouteAssignment.
     */
    data: XOR<RouteAssignmentCreateInput, RouteAssignmentUncheckedCreateInput>
  }

  /**
   * RouteAssignment createMany
   */
  export type RouteAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RouteAssignments.
     */
    data: RouteAssignmentCreateManyInput | RouteAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RouteAssignment createManyAndReturn
   */
  export type RouteAssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteAssignment
     */
    select?: RouteAssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RouteAssignment
     */
    omit?: RouteAssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many RouteAssignments.
     */
    data: RouteAssignmentCreateManyInput | RouteAssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteAssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RouteAssignment update
   */
  export type RouteAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteAssignment
     */
    select?: RouteAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteAssignment
     */
    omit?: RouteAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a RouteAssignment.
     */
    data: XOR<RouteAssignmentUpdateInput, RouteAssignmentUncheckedUpdateInput>
    /**
     * Choose, which RouteAssignment to update.
     */
    where: RouteAssignmentWhereUniqueInput
  }

  /**
   * RouteAssignment updateMany
   */
  export type RouteAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RouteAssignments.
     */
    data: XOR<RouteAssignmentUpdateManyMutationInput, RouteAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which RouteAssignments to update
     */
    where?: RouteAssignmentWhereInput
    /**
     * Limit how many RouteAssignments to update.
     */
    limit?: number
  }

  /**
   * RouteAssignment updateManyAndReturn
   */
  export type RouteAssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteAssignment
     */
    select?: RouteAssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RouteAssignment
     */
    omit?: RouteAssignmentOmit<ExtArgs> | null
    /**
     * The data used to update RouteAssignments.
     */
    data: XOR<RouteAssignmentUpdateManyMutationInput, RouteAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which RouteAssignments to update
     */
    where?: RouteAssignmentWhereInput
    /**
     * Limit how many RouteAssignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteAssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RouteAssignment upsert
   */
  export type RouteAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteAssignment
     */
    select?: RouteAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteAssignment
     */
    omit?: RouteAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the RouteAssignment to update in case it exists.
     */
    where: RouteAssignmentWhereUniqueInput
    /**
     * In case the RouteAssignment found by the `where` argument doesn't exist, create a new RouteAssignment with this data.
     */
    create: XOR<RouteAssignmentCreateInput, RouteAssignmentUncheckedCreateInput>
    /**
     * In case the RouteAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteAssignmentUpdateInput, RouteAssignmentUncheckedUpdateInput>
  }

  /**
   * RouteAssignment delete
   */
  export type RouteAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteAssignment
     */
    select?: RouteAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteAssignment
     */
    omit?: RouteAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteAssignmentInclude<ExtArgs> | null
    /**
     * Filter which RouteAssignment to delete.
     */
    where: RouteAssignmentWhereUniqueInput
  }

  /**
   * RouteAssignment deleteMany
   */
  export type RouteAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RouteAssignments to delete
     */
    where?: RouteAssignmentWhereInput
    /**
     * Limit how many RouteAssignments to delete.
     */
    limit?: number
  }

  /**
   * RouteAssignment without action
   */
  export type RouteAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteAssignment
     */
    select?: RouteAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteAssignment
     */
    omit?: RouteAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model Complaint
   */

  export type AggregateComplaint = {
    _count: ComplaintCountAggregateOutputType | null
    _avg: ComplaintAvgAggregateOutputType | null
    _sum: ComplaintSumAggregateOutputType | null
    _min: ComplaintMinAggregateOutputType | null
    _max: ComplaintMaxAggregateOutputType | null
  }

  export type ComplaintAvgAggregateOutputType = {
    complaint_id: number | null
    user_id: number | null
    pickup_id: number | null
  }

  export type ComplaintSumAggregateOutputType = {
    complaint_id: number | null
    user_id: number | null
    pickup_id: number | null
  }

  export type ComplaintMinAggregateOutputType = {
    complaint_id: number | null
    user_id: number | null
    pickup_id: number | null
    description: string | null
    status: $Enums.ComplaintStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ComplaintMaxAggregateOutputType = {
    complaint_id: number | null
    user_id: number | null
    pickup_id: number | null
    description: string | null
    status: $Enums.ComplaintStatus | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ComplaintCountAggregateOutputType = {
    complaint_id: number
    user_id: number
    pickup_id: number
    description: number
    status: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ComplaintAvgAggregateInputType = {
    complaint_id?: true
    user_id?: true
    pickup_id?: true
  }

  export type ComplaintSumAggregateInputType = {
    complaint_id?: true
    user_id?: true
    pickup_id?: true
  }

  export type ComplaintMinAggregateInputType = {
    complaint_id?: true
    user_id?: true
    pickup_id?: true
    description?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type ComplaintMaxAggregateInputType = {
    complaint_id?: true
    user_id?: true
    pickup_id?: true
    description?: true
    status?: true
    created_at?: true
    updated_at?: true
  }

  export type ComplaintCountAggregateInputType = {
    complaint_id?: true
    user_id?: true
    pickup_id?: true
    description?: true
    status?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ComplaintAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Complaint to aggregate.
     */
    where?: ComplaintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Complaints to fetch.
     */
    orderBy?: ComplaintOrderByWithRelationInput | ComplaintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ComplaintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Complaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Complaints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Complaints
    **/
    _count?: true | ComplaintCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ComplaintAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ComplaintSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ComplaintMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ComplaintMaxAggregateInputType
  }

  export type GetComplaintAggregateType<T extends ComplaintAggregateArgs> = {
        [P in keyof T & keyof AggregateComplaint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComplaint[P]>
      : GetScalarType<T[P], AggregateComplaint[P]>
  }




  export type ComplaintGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ComplaintWhereInput
    orderBy?: ComplaintOrderByWithAggregationInput | ComplaintOrderByWithAggregationInput[]
    by: ComplaintScalarFieldEnum[] | ComplaintScalarFieldEnum
    having?: ComplaintScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ComplaintCountAggregateInputType | true
    _avg?: ComplaintAvgAggregateInputType
    _sum?: ComplaintSumAggregateInputType
    _min?: ComplaintMinAggregateInputType
    _max?: ComplaintMaxAggregateInputType
  }

  export type ComplaintGroupByOutputType = {
    complaint_id: number
    user_id: number
    pickup_id: number | null
    description: string
    status: $Enums.ComplaintStatus
    created_at: Date
    updated_at: Date
    _count: ComplaintCountAggregateOutputType | null
    _avg: ComplaintAvgAggregateOutputType | null
    _sum: ComplaintSumAggregateOutputType | null
    _min: ComplaintMinAggregateOutputType | null
    _max: ComplaintMaxAggregateOutputType | null
  }

  type GetComplaintGroupByPayload<T extends ComplaintGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ComplaintGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ComplaintGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ComplaintGroupByOutputType[P]>
            : GetScalarType<T[P], ComplaintGroupByOutputType[P]>
        }
      >
    >


  export type ComplaintSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    complaint_id?: boolean
    user_id?: boolean
    pickup_id?: boolean
    description?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    pickup?: boolean | Complaint$pickupArgs<ExtArgs>
  }, ExtArgs["result"]["complaint"]>

  export type ComplaintSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    complaint_id?: boolean
    user_id?: boolean
    pickup_id?: boolean
    description?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    pickup?: boolean | Complaint$pickupArgs<ExtArgs>
  }, ExtArgs["result"]["complaint"]>

  export type ComplaintSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    complaint_id?: boolean
    user_id?: boolean
    pickup_id?: boolean
    description?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    pickup?: boolean | Complaint$pickupArgs<ExtArgs>
  }, ExtArgs["result"]["complaint"]>

  export type ComplaintSelectScalar = {
    complaint_id?: boolean
    user_id?: boolean
    pickup_id?: boolean
    description?: boolean
    status?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ComplaintOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"complaint_id" | "user_id" | "pickup_id" | "description" | "status" | "created_at" | "updated_at", ExtArgs["result"]["complaint"]>
  export type ComplaintInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    pickup?: boolean | Complaint$pickupArgs<ExtArgs>
  }
  export type ComplaintIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    pickup?: boolean | Complaint$pickupArgs<ExtArgs>
  }
  export type ComplaintIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    pickup?: boolean | Complaint$pickupArgs<ExtArgs>
  }

  export type $ComplaintPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Complaint"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      pickup: Prisma.$PickupPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      complaint_id: number
      user_id: number
      pickup_id: number | null
      description: string
      status: $Enums.ComplaintStatus
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["complaint"]>
    composites: {}
  }

  type ComplaintGetPayload<S extends boolean | null | undefined | ComplaintDefaultArgs> = $Result.GetResult<Prisma.$ComplaintPayload, S>

  type ComplaintCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ComplaintFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ComplaintCountAggregateInputType | true
    }

  export interface ComplaintDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Complaint'], meta: { name: 'Complaint' } }
    /**
     * Find zero or one Complaint that matches the filter.
     * @param {ComplaintFindUniqueArgs} args - Arguments to find a Complaint
     * @example
     * // Get one Complaint
     * const complaint = await prisma.complaint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ComplaintFindUniqueArgs>(args: SelectSubset<T, ComplaintFindUniqueArgs<ExtArgs>>): Prisma__ComplaintClient<$Result.GetResult<Prisma.$ComplaintPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Complaint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ComplaintFindUniqueOrThrowArgs} args - Arguments to find a Complaint
     * @example
     * // Get one Complaint
     * const complaint = await prisma.complaint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ComplaintFindUniqueOrThrowArgs>(args: SelectSubset<T, ComplaintFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ComplaintClient<$Result.GetResult<Prisma.$ComplaintPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Complaint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintFindFirstArgs} args - Arguments to find a Complaint
     * @example
     * // Get one Complaint
     * const complaint = await prisma.complaint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ComplaintFindFirstArgs>(args?: SelectSubset<T, ComplaintFindFirstArgs<ExtArgs>>): Prisma__ComplaintClient<$Result.GetResult<Prisma.$ComplaintPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Complaint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintFindFirstOrThrowArgs} args - Arguments to find a Complaint
     * @example
     * // Get one Complaint
     * const complaint = await prisma.complaint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ComplaintFindFirstOrThrowArgs>(args?: SelectSubset<T, ComplaintFindFirstOrThrowArgs<ExtArgs>>): Prisma__ComplaintClient<$Result.GetResult<Prisma.$ComplaintPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Complaints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Complaints
     * const complaints = await prisma.complaint.findMany()
     * 
     * // Get first 10 Complaints
     * const complaints = await prisma.complaint.findMany({ take: 10 })
     * 
     * // Only select the `complaint_id`
     * const complaintWithComplaint_idOnly = await prisma.complaint.findMany({ select: { complaint_id: true } })
     * 
     */
    findMany<T extends ComplaintFindManyArgs>(args?: SelectSubset<T, ComplaintFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplaintPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Complaint.
     * @param {ComplaintCreateArgs} args - Arguments to create a Complaint.
     * @example
     * // Create one Complaint
     * const Complaint = await prisma.complaint.create({
     *   data: {
     *     // ... data to create a Complaint
     *   }
     * })
     * 
     */
    create<T extends ComplaintCreateArgs>(args: SelectSubset<T, ComplaintCreateArgs<ExtArgs>>): Prisma__ComplaintClient<$Result.GetResult<Prisma.$ComplaintPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Complaints.
     * @param {ComplaintCreateManyArgs} args - Arguments to create many Complaints.
     * @example
     * // Create many Complaints
     * const complaint = await prisma.complaint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ComplaintCreateManyArgs>(args?: SelectSubset<T, ComplaintCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Complaints and returns the data saved in the database.
     * @param {ComplaintCreateManyAndReturnArgs} args - Arguments to create many Complaints.
     * @example
     * // Create many Complaints
     * const complaint = await prisma.complaint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Complaints and only return the `complaint_id`
     * const complaintWithComplaint_idOnly = await prisma.complaint.createManyAndReturn({
     *   select: { complaint_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ComplaintCreateManyAndReturnArgs>(args?: SelectSubset<T, ComplaintCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplaintPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Complaint.
     * @param {ComplaintDeleteArgs} args - Arguments to delete one Complaint.
     * @example
     * // Delete one Complaint
     * const Complaint = await prisma.complaint.delete({
     *   where: {
     *     // ... filter to delete one Complaint
     *   }
     * })
     * 
     */
    delete<T extends ComplaintDeleteArgs>(args: SelectSubset<T, ComplaintDeleteArgs<ExtArgs>>): Prisma__ComplaintClient<$Result.GetResult<Prisma.$ComplaintPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Complaint.
     * @param {ComplaintUpdateArgs} args - Arguments to update one Complaint.
     * @example
     * // Update one Complaint
     * const complaint = await prisma.complaint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ComplaintUpdateArgs>(args: SelectSubset<T, ComplaintUpdateArgs<ExtArgs>>): Prisma__ComplaintClient<$Result.GetResult<Prisma.$ComplaintPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Complaints.
     * @param {ComplaintDeleteManyArgs} args - Arguments to filter Complaints to delete.
     * @example
     * // Delete a few Complaints
     * const { count } = await prisma.complaint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ComplaintDeleteManyArgs>(args?: SelectSubset<T, ComplaintDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Complaints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Complaints
     * const complaint = await prisma.complaint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ComplaintUpdateManyArgs>(args: SelectSubset<T, ComplaintUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Complaints and returns the data updated in the database.
     * @param {ComplaintUpdateManyAndReturnArgs} args - Arguments to update many Complaints.
     * @example
     * // Update many Complaints
     * const complaint = await prisma.complaint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Complaints and only return the `complaint_id`
     * const complaintWithComplaint_idOnly = await prisma.complaint.updateManyAndReturn({
     *   select: { complaint_id: true },
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
    updateManyAndReturn<T extends ComplaintUpdateManyAndReturnArgs>(args: SelectSubset<T, ComplaintUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ComplaintPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Complaint.
     * @param {ComplaintUpsertArgs} args - Arguments to update or create a Complaint.
     * @example
     * // Update or create a Complaint
     * const complaint = await prisma.complaint.upsert({
     *   create: {
     *     // ... data to create a Complaint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Complaint we want to update
     *   }
     * })
     */
    upsert<T extends ComplaintUpsertArgs>(args: SelectSubset<T, ComplaintUpsertArgs<ExtArgs>>): Prisma__ComplaintClient<$Result.GetResult<Prisma.$ComplaintPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Complaints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintCountArgs} args - Arguments to filter Complaints to count.
     * @example
     * // Count the number of Complaints
     * const count = await prisma.complaint.count({
     *   where: {
     *     // ... the filter for the Complaints we want to count
     *   }
     * })
    **/
    count<T extends ComplaintCountArgs>(
      args?: Subset<T, ComplaintCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ComplaintCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Complaint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ComplaintAggregateArgs>(args: Subset<T, ComplaintAggregateArgs>): Prisma.PrismaPromise<GetComplaintAggregateType<T>>

    /**
     * Group by Complaint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ComplaintGroupByArgs} args - Group by arguments.
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
      T extends ComplaintGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ComplaintGroupByArgs['orderBy'] }
        : { orderBy?: ComplaintGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ComplaintGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetComplaintGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Complaint model
   */
  readonly fields: ComplaintFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Complaint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ComplaintClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pickup<T extends Complaint$pickupArgs<ExtArgs> = {}>(args?: Subset<T, Complaint$pickupArgs<ExtArgs>>): Prisma__PickupClient<$Result.GetResult<Prisma.$PickupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Complaint model
   */
  interface ComplaintFieldRefs {
    readonly complaint_id: FieldRef<"Complaint", 'Int'>
    readonly user_id: FieldRef<"Complaint", 'Int'>
    readonly pickup_id: FieldRef<"Complaint", 'Int'>
    readonly description: FieldRef<"Complaint", 'String'>
    readonly status: FieldRef<"Complaint", 'ComplaintStatus'>
    readonly created_at: FieldRef<"Complaint", 'DateTime'>
    readonly updated_at: FieldRef<"Complaint", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Complaint findUnique
   */
  export type ComplaintFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaint
     */
    select?: ComplaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaint
     */
    omit?: ComplaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintInclude<ExtArgs> | null
    /**
     * Filter, which Complaint to fetch.
     */
    where: ComplaintWhereUniqueInput
  }

  /**
   * Complaint findUniqueOrThrow
   */
  export type ComplaintFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaint
     */
    select?: ComplaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaint
     */
    omit?: ComplaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintInclude<ExtArgs> | null
    /**
     * Filter, which Complaint to fetch.
     */
    where: ComplaintWhereUniqueInput
  }

  /**
   * Complaint findFirst
   */
  export type ComplaintFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaint
     */
    select?: ComplaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaint
     */
    omit?: ComplaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintInclude<ExtArgs> | null
    /**
     * Filter, which Complaint to fetch.
     */
    where?: ComplaintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Complaints to fetch.
     */
    orderBy?: ComplaintOrderByWithRelationInput | ComplaintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Complaints.
     */
    cursor?: ComplaintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Complaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Complaints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Complaints.
     */
    distinct?: ComplaintScalarFieldEnum | ComplaintScalarFieldEnum[]
  }

  /**
   * Complaint findFirstOrThrow
   */
  export type ComplaintFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaint
     */
    select?: ComplaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaint
     */
    omit?: ComplaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintInclude<ExtArgs> | null
    /**
     * Filter, which Complaint to fetch.
     */
    where?: ComplaintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Complaints to fetch.
     */
    orderBy?: ComplaintOrderByWithRelationInput | ComplaintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Complaints.
     */
    cursor?: ComplaintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Complaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Complaints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Complaints.
     */
    distinct?: ComplaintScalarFieldEnum | ComplaintScalarFieldEnum[]
  }

  /**
   * Complaint findMany
   */
  export type ComplaintFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaint
     */
    select?: ComplaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaint
     */
    omit?: ComplaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintInclude<ExtArgs> | null
    /**
     * Filter, which Complaints to fetch.
     */
    where?: ComplaintWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Complaints to fetch.
     */
    orderBy?: ComplaintOrderByWithRelationInput | ComplaintOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Complaints.
     */
    cursor?: ComplaintWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Complaints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Complaints.
     */
    skip?: number
    distinct?: ComplaintScalarFieldEnum | ComplaintScalarFieldEnum[]
  }

  /**
   * Complaint create
   */
  export type ComplaintCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaint
     */
    select?: ComplaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaint
     */
    omit?: ComplaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintInclude<ExtArgs> | null
    /**
     * The data needed to create a Complaint.
     */
    data: XOR<ComplaintCreateInput, ComplaintUncheckedCreateInput>
  }

  /**
   * Complaint createMany
   */
  export type ComplaintCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Complaints.
     */
    data: ComplaintCreateManyInput | ComplaintCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Complaint createManyAndReturn
   */
  export type ComplaintCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaint
     */
    select?: ComplaintSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Complaint
     */
    omit?: ComplaintOmit<ExtArgs> | null
    /**
     * The data used to create many Complaints.
     */
    data: ComplaintCreateManyInput | ComplaintCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Complaint update
   */
  export type ComplaintUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaint
     */
    select?: ComplaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaint
     */
    omit?: ComplaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintInclude<ExtArgs> | null
    /**
     * The data needed to update a Complaint.
     */
    data: XOR<ComplaintUpdateInput, ComplaintUncheckedUpdateInput>
    /**
     * Choose, which Complaint to update.
     */
    where: ComplaintWhereUniqueInput
  }

  /**
   * Complaint updateMany
   */
  export type ComplaintUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Complaints.
     */
    data: XOR<ComplaintUpdateManyMutationInput, ComplaintUncheckedUpdateManyInput>
    /**
     * Filter which Complaints to update
     */
    where?: ComplaintWhereInput
    /**
     * Limit how many Complaints to update.
     */
    limit?: number
  }

  /**
   * Complaint updateManyAndReturn
   */
  export type ComplaintUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaint
     */
    select?: ComplaintSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Complaint
     */
    omit?: ComplaintOmit<ExtArgs> | null
    /**
     * The data used to update Complaints.
     */
    data: XOR<ComplaintUpdateManyMutationInput, ComplaintUncheckedUpdateManyInput>
    /**
     * Filter which Complaints to update
     */
    where?: ComplaintWhereInput
    /**
     * Limit how many Complaints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Complaint upsert
   */
  export type ComplaintUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaint
     */
    select?: ComplaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaint
     */
    omit?: ComplaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintInclude<ExtArgs> | null
    /**
     * The filter to search for the Complaint to update in case it exists.
     */
    where: ComplaintWhereUniqueInput
    /**
     * In case the Complaint found by the `where` argument doesn't exist, create a new Complaint with this data.
     */
    create: XOR<ComplaintCreateInput, ComplaintUncheckedCreateInput>
    /**
     * In case the Complaint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ComplaintUpdateInput, ComplaintUncheckedUpdateInput>
  }

  /**
   * Complaint delete
   */
  export type ComplaintDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaint
     */
    select?: ComplaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaint
     */
    omit?: ComplaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintInclude<ExtArgs> | null
    /**
     * Filter which Complaint to delete.
     */
    where: ComplaintWhereUniqueInput
  }

  /**
   * Complaint deleteMany
   */
  export type ComplaintDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Complaints to delete
     */
    where?: ComplaintWhereInput
    /**
     * Limit how many Complaints to delete.
     */
    limit?: number
  }

  /**
   * Complaint.pickup
   */
  export type Complaint$pickupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pickup
     */
    select?: PickupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pickup
     */
    omit?: PickupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PickupInclude<ExtArgs> | null
    where?: PickupWhereInput
  }

  /**
   * Complaint without action
   */
  export type ComplaintDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Complaint
     */
    select?: ComplaintSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Complaint
     */
    omit?: ComplaintOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ComplaintInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    notification_id: number | null
    user_id: number | null
  }

  export type NotificationSumAggregateOutputType = {
    notification_id: number | null
    user_id: number | null
  }

  export type NotificationMinAggregateOutputType = {
    notification_id: number | null
    user_id: number | null
    title: string | null
    message: string | null
    sent_at: Date | null
    is_read: boolean | null
  }

  export type NotificationMaxAggregateOutputType = {
    notification_id: number | null
    user_id: number | null
    title: string | null
    message: string | null
    sent_at: Date | null
    is_read: boolean | null
  }

  export type NotificationCountAggregateOutputType = {
    notification_id: number
    user_id: number
    title: number
    message: number
    sent_at: number
    is_read: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    notification_id?: true
    user_id?: true
  }

  export type NotificationSumAggregateInputType = {
    notification_id?: true
    user_id?: true
  }

  export type NotificationMinAggregateInputType = {
    notification_id?: true
    user_id?: true
    title?: true
    message?: true
    sent_at?: true
    is_read?: true
  }

  export type NotificationMaxAggregateInputType = {
    notification_id?: true
    user_id?: true
    title?: true
    message?: true
    sent_at?: true
    is_read?: true
  }

  export type NotificationCountAggregateInputType = {
    notification_id?: true
    user_id?: true
    title?: true
    message?: true
    sent_at?: true
    is_read?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    notification_id: number
    user_id: number
    title: string
    message: string
    sent_at: Date
    is_read: boolean
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notification_id?: boolean
    user_id?: boolean
    title?: boolean
    message?: boolean
    sent_at?: boolean
    is_read?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notification_id?: boolean
    user_id?: boolean
    title?: boolean
    message?: boolean
    sent_at?: boolean
    is_read?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    notification_id?: boolean
    user_id?: boolean
    title?: boolean
    message?: boolean
    sent_at?: boolean
    is_read?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    notification_id?: boolean
    user_id?: boolean
    title?: boolean
    message?: boolean
    sent_at?: boolean
    is_read?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"notification_id" | "user_id" | "title" | "message" | "sent_at" | "is_read", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      notification_id: number
      user_id: number
      title: string
      message: string
      sent_at: Date
      is_read: boolean
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `notification_id`
     * const notificationWithNotification_idOnly = await prisma.notification.findMany({ select: { notification_id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `notification_id`
     * const notificationWithNotification_idOnly = await prisma.notification.createManyAndReturn({
     *   select: { notification_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `notification_id`
     * const notificationWithNotification_idOnly = await prisma.notification.updateManyAndReturn({
     *   select: { notification_id: true },
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly notification_id: FieldRef<"Notification", 'Int'>
    readonly user_id: FieldRef<"Notification", 'Int'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly sent_at: FieldRef<"Notification", 'DateTime'>
    readonly is_read: FieldRef<"Notification", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model WasteLog
   */

  export type AggregateWasteLog = {
    _count: WasteLogCountAggregateOutputType | null
    _avg: WasteLogAvgAggregateOutputType | null
    _sum: WasteLogSumAggregateOutputType | null
    _min: WasteLogMinAggregateOutputType | null
    _max: WasteLogMaxAggregateOutputType | null
  }

  export type WasteLogAvgAggregateOutputType = {
    log_id: number | null
    user_id: number | null
    waste_type_id: number | null
    quantity_kg: Decimal | null
  }

  export type WasteLogSumAggregateOutputType = {
    log_id: number | null
    user_id: number | null
    waste_type_id: number | null
    quantity_kg: Decimal | null
  }

  export type WasteLogMinAggregateOutputType = {
    log_id: number | null
    user_id: number | null
    waste_type_id: number | null
    quantity_kg: Decimal | null
    log_date: Date | null
    created_at: Date | null
  }

  export type WasteLogMaxAggregateOutputType = {
    log_id: number | null
    user_id: number | null
    waste_type_id: number | null
    quantity_kg: Decimal | null
    log_date: Date | null
    created_at: Date | null
  }

  export type WasteLogCountAggregateOutputType = {
    log_id: number
    user_id: number
    waste_type_id: number
    quantity_kg: number
    log_date: number
    created_at: number
    _all: number
  }


  export type WasteLogAvgAggregateInputType = {
    log_id?: true
    user_id?: true
    waste_type_id?: true
    quantity_kg?: true
  }

  export type WasteLogSumAggregateInputType = {
    log_id?: true
    user_id?: true
    waste_type_id?: true
    quantity_kg?: true
  }

  export type WasteLogMinAggregateInputType = {
    log_id?: true
    user_id?: true
    waste_type_id?: true
    quantity_kg?: true
    log_date?: true
    created_at?: true
  }

  export type WasteLogMaxAggregateInputType = {
    log_id?: true
    user_id?: true
    waste_type_id?: true
    quantity_kg?: true
    log_date?: true
    created_at?: true
  }

  export type WasteLogCountAggregateInputType = {
    log_id?: true
    user_id?: true
    waste_type_id?: true
    quantity_kg?: true
    log_date?: true
    created_at?: true
    _all?: true
  }

  export type WasteLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WasteLog to aggregate.
     */
    where?: WasteLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WasteLogs to fetch.
     */
    orderBy?: WasteLogOrderByWithRelationInput | WasteLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WasteLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WasteLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WasteLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WasteLogs
    **/
    _count?: true | WasteLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WasteLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WasteLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WasteLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WasteLogMaxAggregateInputType
  }

  export type GetWasteLogAggregateType<T extends WasteLogAggregateArgs> = {
        [P in keyof T & keyof AggregateWasteLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWasteLog[P]>
      : GetScalarType<T[P], AggregateWasteLog[P]>
  }




  export type WasteLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WasteLogWhereInput
    orderBy?: WasteLogOrderByWithAggregationInput | WasteLogOrderByWithAggregationInput[]
    by: WasteLogScalarFieldEnum[] | WasteLogScalarFieldEnum
    having?: WasteLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WasteLogCountAggregateInputType | true
    _avg?: WasteLogAvgAggregateInputType
    _sum?: WasteLogSumAggregateInputType
    _min?: WasteLogMinAggregateInputType
    _max?: WasteLogMaxAggregateInputType
  }

  export type WasteLogGroupByOutputType = {
    log_id: number
    user_id: number
    waste_type_id: number
    quantity_kg: Decimal
    log_date: Date
    created_at: Date
    _count: WasteLogCountAggregateOutputType | null
    _avg: WasteLogAvgAggregateOutputType | null
    _sum: WasteLogSumAggregateOutputType | null
    _min: WasteLogMinAggregateOutputType | null
    _max: WasteLogMaxAggregateOutputType | null
  }

  type GetWasteLogGroupByPayload<T extends WasteLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WasteLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WasteLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WasteLogGroupByOutputType[P]>
            : GetScalarType<T[P], WasteLogGroupByOutputType[P]>
        }
      >
    >


  export type WasteLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    log_id?: boolean
    user_id?: boolean
    waste_type_id?: boolean
    quantity_kg?: boolean
    log_date?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    waste_type?: boolean | WasteTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wasteLog"]>

  export type WasteLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    log_id?: boolean
    user_id?: boolean
    waste_type_id?: boolean
    quantity_kg?: boolean
    log_date?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    waste_type?: boolean | WasteTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wasteLog"]>

  export type WasteLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    log_id?: boolean
    user_id?: boolean
    waste_type_id?: boolean
    quantity_kg?: boolean
    log_date?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    waste_type?: boolean | WasteTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wasteLog"]>

  export type WasteLogSelectScalar = {
    log_id?: boolean
    user_id?: boolean
    waste_type_id?: boolean
    quantity_kg?: boolean
    log_date?: boolean
    created_at?: boolean
  }

  export type WasteLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"log_id" | "user_id" | "waste_type_id" | "quantity_kg" | "log_date" | "created_at", ExtArgs["result"]["wasteLog"]>
  export type WasteLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    waste_type?: boolean | WasteTypeDefaultArgs<ExtArgs>
  }
  export type WasteLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    waste_type?: boolean | WasteTypeDefaultArgs<ExtArgs>
  }
  export type WasteLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    waste_type?: boolean | WasteTypeDefaultArgs<ExtArgs>
  }

  export type $WasteLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WasteLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      waste_type: Prisma.$WasteTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      log_id: number
      user_id: number
      waste_type_id: number
      quantity_kg: Prisma.Decimal
      log_date: Date
      created_at: Date
    }, ExtArgs["result"]["wasteLog"]>
    composites: {}
  }

  type WasteLogGetPayload<S extends boolean | null | undefined | WasteLogDefaultArgs> = $Result.GetResult<Prisma.$WasteLogPayload, S>

  type WasteLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WasteLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WasteLogCountAggregateInputType | true
    }

  export interface WasteLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WasteLog'], meta: { name: 'WasteLog' } }
    /**
     * Find zero or one WasteLog that matches the filter.
     * @param {WasteLogFindUniqueArgs} args - Arguments to find a WasteLog
     * @example
     * // Get one WasteLog
     * const wasteLog = await prisma.wasteLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WasteLogFindUniqueArgs>(args: SelectSubset<T, WasteLogFindUniqueArgs<ExtArgs>>): Prisma__WasteLogClient<$Result.GetResult<Prisma.$WasteLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WasteLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WasteLogFindUniqueOrThrowArgs} args - Arguments to find a WasteLog
     * @example
     * // Get one WasteLog
     * const wasteLog = await prisma.wasteLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WasteLogFindUniqueOrThrowArgs>(args: SelectSubset<T, WasteLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WasteLogClient<$Result.GetResult<Prisma.$WasteLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WasteLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WasteLogFindFirstArgs} args - Arguments to find a WasteLog
     * @example
     * // Get one WasteLog
     * const wasteLog = await prisma.wasteLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WasteLogFindFirstArgs>(args?: SelectSubset<T, WasteLogFindFirstArgs<ExtArgs>>): Prisma__WasteLogClient<$Result.GetResult<Prisma.$WasteLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WasteLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WasteLogFindFirstOrThrowArgs} args - Arguments to find a WasteLog
     * @example
     * // Get one WasteLog
     * const wasteLog = await prisma.wasteLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WasteLogFindFirstOrThrowArgs>(args?: SelectSubset<T, WasteLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__WasteLogClient<$Result.GetResult<Prisma.$WasteLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WasteLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WasteLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WasteLogs
     * const wasteLogs = await prisma.wasteLog.findMany()
     * 
     * // Get first 10 WasteLogs
     * const wasteLogs = await prisma.wasteLog.findMany({ take: 10 })
     * 
     * // Only select the `log_id`
     * const wasteLogWithLog_idOnly = await prisma.wasteLog.findMany({ select: { log_id: true } })
     * 
     */
    findMany<T extends WasteLogFindManyArgs>(args?: SelectSubset<T, WasteLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WasteLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WasteLog.
     * @param {WasteLogCreateArgs} args - Arguments to create a WasteLog.
     * @example
     * // Create one WasteLog
     * const WasteLog = await prisma.wasteLog.create({
     *   data: {
     *     // ... data to create a WasteLog
     *   }
     * })
     * 
     */
    create<T extends WasteLogCreateArgs>(args: SelectSubset<T, WasteLogCreateArgs<ExtArgs>>): Prisma__WasteLogClient<$Result.GetResult<Prisma.$WasteLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WasteLogs.
     * @param {WasteLogCreateManyArgs} args - Arguments to create many WasteLogs.
     * @example
     * // Create many WasteLogs
     * const wasteLog = await prisma.wasteLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WasteLogCreateManyArgs>(args?: SelectSubset<T, WasteLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WasteLogs and returns the data saved in the database.
     * @param {WasteLogCreateManyAndReturnArgs} args - Arguments to create many WasteLogs.
     * @example
     * // Create many WasteLogs
     * const wasteLog = await prisma.wasteLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WasteLogs and only return the `log_id`
     * const wasteLogWithLog_idOnly = await prisma.wasteLog.createManyAndReturn({
     *   select: { log_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WasteLogCreateManyAndReturnArgs>(args?: SelectSubset<T, WasteLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WasteLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WasteLog.
     * @param {WasteLogDeleteArgs} args - Arguments to delete one WasteLog.
     * @example
     * // Delete one WasteLog
     * const WasteLog = await prisma.wasteLog.delete({
     *   where: {
     *     // ... filter to delete one WasteLog
     *   }
     * })
     * 
     */
    delete<T extends WasteLogDeleteArgs>(args: SelectSubset<T, WasteLogDeleteArgs<ExtArgs>>): Prisma__WasteLogClient<$Result.GetResult<Prisma.$WasteLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WasteLog.
     * @param {WasteLogUpdateArgs} args - Arguments to update one WasteLog.
     * @example
     * // Update one WasteLog
     * const wasteLog = await prisma.wasteLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WasteLogUpdateArgs>(args: SelectSubset<T, WasteLogUpdateArgs<ExtArgs>>): Prisma__WasteLogClient<$Result.GetResult<Prisma.$WasteLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WasteLogs.
     * @param {WasteLogDeleteManyArgs} args - Arguments to filter WasteLogs to delete.
     * @example
     * // Delete a few WasteLogs
     * const { count } = await prisma.wasteLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WasteLogDeleteManyArgs>(args?: SelectSubset<T, WasteLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WasteLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WasteLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WasteLogs
     * const wasteLog = await prisma.wasteLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WasteLogUpdateManyArgs>(args: SelectSubset<T, WasteLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WasteLogs and returns the data updated in the database.
     * @param {WasteLogUpdateManyAndReturnArgs} args - Arguments to update many WasteLogs.
     * @example
     * // Update many WasteLogs
     * const wasteLog = await prisma.wasteLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WasteLogs and only return the `log_id`
     * const wasteLogWithLog_idOnly = await prisma.wasteLog.updateManyAndReturn({
     *   select: { log_id: true },
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
    updateManyAndReturn<T extends WasteLogUpdateManyAndReturnArgs>(args: SelectSubset<T, WasteLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WasteLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WasteLog.
     * @param {WasteLogUpsertArgs} args - Arguments to update or create a WasteLog.
     * @example
     * // Update or create a WasteLog
     * const wasteLog = await prisma.wasteLog.upsert({
     *   create: {
     *     // ... data to create a WasteLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WasteLog we want to update
     *   }
     * })
     */
    upsert<T extends WasteLogUpsertArgs>(args: SelectSubset<T, WasteLogUpsertArgs<ExtArgs>>): Prisma__WasteLogClient<$Result.GetResult<Prisma.$WasteLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WasteLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WasteLogCountArgs} args - Arguments to filter WasteLogs to count.
     * @example
     * // Count the number of WasteLogs
     * const count = await prisma.wasteLog.count({
     *   where: {
     *     // ... the filter for the WasteLogs we want to count
     *   }
     * })
    **/
    count<T extends WasteLogCountArgs>(
      args?: Subset<T, WasteLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WasteLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WasteLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WasteLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WasteLogAggregateArgs>(args: Subset<T, WasteLogAggregateArgs>): Prisma.PrismaPromise<GetWasteLogAggregateType<T>>

    /**
     * Group by WasteLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WasteLogGroupByArgs} args - Group by arguments.
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
      T extends WasteLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WasteLogGroupByArgs['orderBy'] }
        : { orderBy?: WasteLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WasteLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWasteLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WasteLog model
   */
  readonly fields: WasteLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WasteLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WasteLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    waste_type<T extends WasteTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WasteTypeDefaultArgs<ExtArgs>>): Prisma__WasteTypeClient<$Result.GetResult<Prisma.$WasteTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WasteLog model
   */
  interface WasteLogFieldRefs {
    readonly log_id: FieldRef<"WasteLog", 'Int'>
    readonly user_id: FieldRef<"WasteLog", 'Int'>
    readonly waste_type_id: FieldRef<"WasteLog", 'Int'>
    readonly quantity_kg: FieldRef<"WasteLog", 'Decimal'>
    readonly log_date: FieldRef<"WasteLog", 'DateTime'>
    readonly created_at: FieldRef<"WasteLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WasteLog findUnique
   */
  export type WasteLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteLog
     */
    select?: WasteLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WasteLog
     */
    omit?: WasteLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteLogInclude<ExtArgs> | null
    /**
     * Filter, which WasteLog to fetch.
     */
    where: WasteLogWhereUniqueInput
  }

  /**
   * WasteLog findUniqueOrThrow
   */
  export type WasteLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteLog
     */
    select?: WasteLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WasteLog
     */
    omit?: WasteLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteLogInclude<ExtArgs> | null
    /**
     * Filter, which WasteLog to fetch.
     */
    where: WasteLogWhereUniqueInput
  }

  /**
   * WasteLog findFirst
   */
  export type WasteLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteLog
     */
    select?: WasteLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WasteLog
     */
    omit?: WasteLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteLogInclude<ExtArgs> | null
    /**
     * Filter, which WasteLog to fetch.
     */
    where?: WasteLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WasteLogs to fetch.
     */
    orderBy?: WasteLogOrderByWithRelationInput | WasteLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WasteLogs.
     */
    cursor?: WasteLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WasteLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WasteLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WasteLogs.
     */
    distinct?: WasteLogScalarFieldEnum | WasteLogScalarFieldEnum[]
  }

  /**
   * WasteLog findFirstOrThrow
   */
  export type WasteLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteLog
     */
    select?: WasteLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WasteLog
     */
    omit?: WasteLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteLogInclude<ExtArgs> | null
    /**
     * Filter, which WasteLog to fetch.
     */
    where?: WasteLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WasteLogs to fetch.
     */
    orderBy?: WasteLogOrderByWithRelationInput | WasteLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WasteLogs.
     */
    cursor?: WasteLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WasteLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WasteLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WasteLogs.
     */
    distinct?: WasteLogScalarFieldEnum | WasteLogScalarFieldEnum[]
  }

  /**
   * WasteLog findMany
   */
  export type WasteLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteLog
     */
    select?: WasteLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WasteLog
     */
    omit?: WasteLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteLogInclude<ExtArgs> | null
    /**
     * Filter, which WasteLogs to fetch.
     */
    where?: WasteLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WasteLogs to fetch.
     */
    orderBy?: WasteLogOrderByWithRelationInput | WasteLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WasteLogs.
     */
    cursor?: WasteLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WasteLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WasteLogs.
     */
    skip?: number
    distinct?: WasteLogScalarFieldEnum | WasteLogScalarFieldEnum[]
  }

  /**
   * WasteLog create
   */
  export type WasteLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteLog
     */
    select?: WasteLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WasteLog
     */
    omit?: WasteLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteLogInclude<ExtArgs> | null
    /**
     * The data needed to create a WasteLog.
     */
    data: XOR<WasteLogCreateInput, WasteLogUncheckedCreateInput>
  }

  /**
   * WasteLog createMany
   */
  export type WasteLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WasteLogs.
     */
    data: WasteLogCreateManyInput | WasteLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WasteLog createManyAndReturn
   */
  export type WasteLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteLog
     */
    select?: WasteLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WasteLog
     */
    omit?: WasteLogOmit<ExtArgs> | null
    /**
     * The data used to create many WasteLogs.
     */
    data: WasteLogCreateManyInput | WasteLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WasteLog update
   */
  export type WasteLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteLog
     */
    select?: WasteLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WasteLog
     */
    omit?: WasteLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteLogInclude<ExtArgs> | null
    /**
     * The data needed to update a WasteLog.
     */
    data: XOR<WasteLogUpdateInput, WasteLogUncheckedUpdateInput>
    /**
     * Choose, which WasteLog to update.
     */
    where: WasteLogWhereUniqueInput
  }

  /**
   * WasteLog updateMany
   */
  export type WasteLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WasteLogs.
     */
    data: XOR<WasteLogUpdateManyMutationInput, WasteLogUncheckedUpdateManyInput>
    /**
     * Filter which WasteLogs to update
     */
    where?: WasteLogWhereInput
    /**
     * Limit how many WasteLogs to update.
     */
    limit?: number
  }

  /**
   * WasteLog updateManyAndReturn
   */
  export type WasteLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteLog
     */
    select?: WasteLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WasteLog
     */
    omit?: WasteLogOmit<ExtArgs> | null
    /**
     * The data used to update WasteLogs.
     */
    data: XOR<WasteLogUpdateManyMutationInput, WasteLogUncheckedUpdateManyInput>
    /**
     * Filter which WasteLogs to update
     */
    where?: WasteLogWhereInput
    /**
     * Limit how many WasteLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WasteLog upsert
   */
  export type WasteLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteLog
     */
    select?: WasteLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WasteLog
     */
    omit?: WasteLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteLogInclude<ExtArgs> | null
    /**
     * The filter to search for the WasteLog to update in case it exists.
     */
    where: WasteLogWhereUniqueInput
    /**
     * In case the WasteLog found by the `where` argument doesn't exist, create a new WasteLog with this data.
     */
    create: XOR<WasteLogCreateInput, WasteLogUncheckedCreateInput>
    /**
     * In case the WasteLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WasteLogUpdateInput, WasteLogUncheckedUpdateInput>
  }

  /**
   * WasteLog delete
   */
  export type WasteLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteLog
     */
    select?: WasteLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WasteLog
     */
    omit?: WasteLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteLogInclude<ExtArgs> | null
    /**
     * Filter which WasteLog to delete.
     */
    where: WasteLogWhereUniqueInput
  }

  /**
   * WasteLog deleteMany
   */
  export type WasteLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WasteLogs to delete
     */
    where?: WasteLogWhereInput
    /**
     * Limit how many WasteLogs to delete.
     */
    limit?: number
  }

  /**
   * WasteLog without action
   */
  export type WasteLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WasteLog
     */
    select?: WasteLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WasteLog
     */
    omit?: WasteLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WasteLogInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    role_id: 'role_id',
    barangay_id: 'barangay_id',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password: 'password',
    phone_number: 'phone_number',
    address: 'address',
    created_at: 'created_at',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WasteTypeScalarFieldEnum: {
    waste_type_id: 'waste_type_id',
    name: 'name',
    description: 'description'
  };

  export type WasteTypeScalarFieldEnum = (typeof WasteTypeScalarFieldEnum)[keyof typeof WasteTypeScalarFieldEnum]


  export const ServiceRequestScalarFieldEnum: {
    request_id: 'request_id',
    user_id: 'user_id',
    waste_type_id: 'waste_type_id',
    requested_date: 'requested_date',
    status: 'status'
  };

  export type ServiceRequestScalarFieldEnum = (typeof ServiceRequestScalarFieldEnum)[keyof typeof ServiceRequestScalarFieldEnum]


  export const PickupScalarFieldEnum: {
    pickup_id: 'pickup_id',
    request_id: 'request_id',
    scheduled_date: 'scheduled_date',
    route_id: 'route_id',
    status: 'status',
    updated_at: 'updated_at'
  };

  export type PickupScalarFieldEnum = (typeof PickupScalarFieldEnum)[keyof typeof PickupScalarFieldEnum]


  export const RouteScalarFieldEnum: {
    route_id: 'route_id',
    name: 'name',
    description: 'description',
    created_at: 'created_at'
  };

  export type RouteScalarFieldEnum = (typeof RouteScalarFieldEnum)[keyof typeof RouteScalarFieldEnum]


  export const RouteAssignmentScalarFieldEnum: {
    assignment_id: 'assignment_id',
    route_id: 'route_id',
    pickup_id: 'pickup_id',
    sequence_no: 'sequence_no'
  };

  export type RouteAssignmentScalarFieldEnum = (typeof RouteAssignmentScalarFieldEnum)[keyof typeof RouteAssignmentScalarFieldEnum]


  export const ComplaintScalarFieldEnum: {
    complaint_id: 'complaint_id',
    user_id: 'user_id',
    pickup_id: 'pickup_id',
    description: 'description',
    status: 'status',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ComplaintScalarFieldEnum = (typeof ComplaintScalarFieldEnum)[keyof typeof ComplaintScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    notification_id: 'notification_id',
    user_id: 'user_id',
    title: 'title',
    message: 'message',
    sent_at: 'sent_at',
    is_read: 'is_read'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const WasteLogScalarFieldEnum: {
    log_id: 'log_id',
    user_id: 'user_id',
    waste_type_id: 'waste_type_id',
    quantity_kg: 'quantity_kg',
    log_date: 'log_date',
    created_at: 'created_at'
  };

  export type WasteLogScalarFieldEnum = (typeof WasteLogScalarFieldEnum)[keyof typeof WasteLogScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'PickupStatus'
   */
  export type EnumPickupStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PickupStatus'>
    


  /**
   * Reference to a field of type 'PickupStatus[]'
   */
  export type ListEnumPickupStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PickupStatus[]'>
    


  /**
   * Reference to a field of type 'ComplaintStatus'
   */
  export type EnumComplaintStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ComplaintStatus'>
    


  /**
   * Reference to a field of type 'ComplaintStatus[]'
   */
  export type ListEnumComplaintStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ComplaintStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: IntFilter<"User"> | number
    role_id?: IntFilter<"User"> | number
    barangay_id?: IntFilter<"User"> | number
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone_number?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    role?: StringNullableListFilter<"User">
    requests?: ServiceRequestListRelationFilter
    complaints?: ComplaintListRelationFilter
    notifications?: NotificationListRelationFilter
    waste_logs?: WasteLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    barangay_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    role?: SortOrder
    requests?: ServiceRequestOrderByRelationAggregateInput
    complaints?: ComplaintOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    waste_logs?: WasteLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: number
    email?: string
    phone_number?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role_id?: IntFilter<"User"> | number
    barangay_id?: IntFilter<"User"> | number
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    role?: StringNullableListFilter<"User">
    requests?: ServiceRequestListRelationFilter
    complaints?: ComplaintListRelationFilter
    notifications?: NotificationListRelationFilter
    waste_logs?: WasteLogListRelationFilter
  }, "user_id" | "email" | "phone_number">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    barangay_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"User"> | number
    role_id?: IntWithAggregatesFilter<"User"> | number
    barangay_id?: IntWithAggregatesFilter<"User"> | number
    first_name?: StringWithAggregatesFilter<"User"> | string
    last_name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone_number?: StringWithAggregatesFilter<"User"> | string
    address?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    role?: StringNullableListFilter<"User">
  }

  export type WasteTypeWhereInput = {
    AND?: WasteTypeWhereInput | WasteTypeWhereInput[]
    OR?: WasteTypeWhereInput[]
    NOT?: WasteTypeWhereInput | WasteTypeWhereInput[]
    waste_type_id?: IntFilter<"WasteType"> | number
    name?: StringFilter<"WasteType"> | string
    description?: StringNullableFilter<"WasteType"> | string | null
    requests?: ServiceRequestListRelationFilter
    waste_logs?: WasteLogListRelationFilter
  }

  export type WasteTypeOrderByWithRelationInput = {
    waste_type_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    requests?: ServiceRequestOrderByRelationAggregateInput
    waste_logs?: WasteLogOrderByRelationAggregateInput
  }

  export type WasteTypeWhereUniqueInput = Prisma.AtLeast<{
    waste_type_id?: number
    AND?: WasteTypeWhereInput | WasteTypeWhereInput[]
    OR?: WasteTypeWhereInput[]
    NOT?: WasteTypeWhereInput | WasteTypeWhereInput[]
    name?: StringFilter<"WasteType"> | string
    description?: StringNullableFilter<"WasteType"> | string | null
    requests?: ServiceRequestListRelationFilter
    waste_logs?: WasteLogListRelationFilter
  }, "waste_type_id">

  export type WasteTypeOrderByWithAggregationInput = {
    waste_type_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: WasteTypeCountOrderByAggregateInput
    _avg?: WasteTypeAvgOrderByAggregateInput
    _max?: WasteTypeMaxOrderByAggregateInput
    _min?: WasteTypeMinOrderByAggregateInput
    _sum?: WasteTypeSumOrderByAggregateInput
  }

  export type WasteTypeScalarWhereWithAggregatesInput = {
    AND?: WasteTypeScalarWhereWithAggregatesInput | WasteTypeScalarWhereWithAggregatesInput[]
    OR?: WasteTypeScalarWhereWithAggregatesInput[]
    NOT?: WasteTypeScalarWhereWithAggregatesInput | WasteTypeScalarWhereWithAggregatesInput[]
    waste_type_id?: IntWithAggregatesFilter<"WasteType"> | number
    name?: StringWithAggregatesFilter<"WasteType"> | string
    description?: StringNullableWithAggregatesFilter<"WasteType"> | string | null
  }

  export type ServiceRequestWhereInput = {
    AND?: ServiceRequestWhereInput | ServiceRequestWhereInput[]
    OR?: ServiceRequestWhereInput[]
    NOT?: ServiceRequestWhereInput | ServiceRequestWhereInput[]
    request_id?: IntFilter<"ServiceRequest"> | number
    user_id?: IntFilter<"ServiceRequest"> | number
    waste_type_id?: IntFilter<"ServiceRequest"> | number
    requested_date?: DateTimeFilter<"ServiceRequest"> | Date | string
    status?: EnumRequestStatusFilter<"ServiceRequest"> | $Enums.RequestStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    waste_type?: XOR<WasteTypeScalarRelationFilter, WasteTypeWhereInput>
    pickups?: PickupListRelationFilter
  }

  export type ServiceRequestOrderByWithRelationInput = {
    request_id?: SortOrder
    user_id?: SortOrder
    waste_type_id?: SortOrder
    requested_date?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    waste_type?: WasteTypeOrderByWithRelationInput
    pickups?: PickupOrderByRelationAggregateInput
  }

  export type ServiceRequestWhereUniqueInput = Prisma.AtLeast<{
    request_id?: number
    AND?: ServiceRequestWhereInput | ServiceRequestWhereInput[]
    OR?: ServiceRequestWhereInput[]
    NOT?: ServiceRequestWhereInput | ServiceRequestWhereInput[]
    user_id?: IntFilter<"ServiceRequest"> | number
    waste_type_id?: IntFilter<"ServiceRequest"> | number
    requested_date?: DateTimeFilter<"ServiceRequest"> | Date | string
    status?: EnumRequestStatusFilter<"ServiceRequest"> | $Enums.RequestStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    waste_type?: XOR<WasteTypeScalarRelationFilter, WasteTypeWhereInput>
    pickups?: PickupListRelationFilter
  }, "request_id">

  export type ServiceRequestOrderByWithAggregationInput = {
    request_id?: SortOrder
    user_id?: SortOrder
    waste_type_id?: SortOrder
    requested_date?: SortOrder
    status?: SortOrder
    _count?: ServiceRequestCountOrderByAggregateInput
    _avg?: ServiceRequestAvgOrderByAggregateInput
    _max?: ServiceRequestMaxOrderByAggregateInput
    _min?: ServiceRequestMinOrderByAggregateInput
    _sum?: ServiceRequestSumOrderByAggregateInput
  }

  export type ServiceRequestScalarWhereWithAggregatesInput = {
    AND?: ServiceRequestScalarWhereWithAggregatesInput | ServiceRequestScalarWhereWithAggregatesInput[]
    OR?: ServiceRequestScalarWhereWithAggregatesInput[]
    NOT?: ServiceRequestScalarWhereWithAggregatesInput | ServiceRequestScalarWhereWithAggregatesInput[]
    request_id?: IntWithAggregatesFilter<"ServiceRequest"> | number
    user_id?: IntWithAggregatesFilter<"ServiceRequest"> | number
    waste_type_id?: IntWithAggregatesFilter<"ServiceRequest"> | number
    requested_date?: DateTimeWithAggregatesFilter<"ServiceRequest"> | Date | string
    status?: EnumRequestStatusWithAggregatesFilter<"ServiceRequest"> | $Enums.RequestStatus
  }

  export type PickupWhereInput = {
    AND?: PickupWhereInput | PickupWhereInput[]
    OR?: PickupWhereInput[]
    NOT?: PickupWhereInput | PickupWhereInput[]
    pickup_id?: IntFilter<"Pickup"> | number
    request_id?: IntFilter<"Pickup"> | number
    scheduled_date?: DateTimeFilter<"Pickup"> | Date | string
    route_id?: IntNullableFilter<"Pickup"> | number | null
    status?: EnumPickupStatusFilter<"Pickup"> | $Enums.PickupStatus
    updated_at?: DateTimeFilter<"Pickup"> | Date | string
    service_request?: XOR<ServiceRequestScalarRelationFilter, ServiceRequestWhereInput>
    route?: XOR<RouteNullableScalarRelationFilter, RouteWhereInput> | null
    complaints?: ComplaintListRelationFilter
    routeAssignment?: XOR<RouteAssignmentNullableScalarRelationFilter, RouteAssignmentWhereInput> | null
  }

  export type PickupOrderByWithRelationInput = {
    pickup_id?: SortOrder
    request_id?: SortOrder
    scheduled_date?: SortOrder
    route_id?: SortOrderInput | SortOrder
    status?: SortOrder
    updated_at?: SortOrder
    service_request?: ServiceRequestOrderByWithRelationInput
    route?: RouteOrderByWithRelationInput
    complaints?: ComplaintOrderByRelationAggregateInput
    routeAssignment?: RouteAssignmentOrderByWithRelationInput
  }

  export type PickupWhereUniqueInput = Prisma.AtLeast<{
    pickup_id?: number
    AND?: PickupWhereInput | PickupWhereInput[]
    OR?: PickupWhereInput[]
    NOT?: PickupWhereInput | PickupWhereInput[]
    request_id?: IntFilter<"Pickup"> | number
    scheduled_date?: DateTimeFilter<"Pickup"> | Date | string
    route_id?: IntNullableFilter<"Pickup"> | number | null
    status?: EnumPickupStatusFilter<"Pickup"> | $Enums.PickupStatus
    updated_at?: DateTimeFilter<"Pickup"> | Date | string
    service_request?: XOR<ServiceRequestScalarRelationFilter, ServiceRequestWhereInput>
    route?: XOR<RouteNullableScalarRelationFilter, RouteWhereInput> | null
    complaints?: ComplaintListRelationFilter
    routeAssignment?: XOR<RouteAssignmentNullableScalarRelationFilter, RouteAssignmentWhereInput> | null
  }, "pickup_id">

  export type PickupOrderByWithAggregationInput = {
    pickup_id?: SortOrder
    request_id?: SortOrder
    scheduled_date?: SortOrder
    route_id?: SortOrderInput | SortOrder
    status?: SortOrder
    updated_at?: SortOrder
    _count?: PickupCountOrderByAggregateInput
    _avg?: PickupAvgOrderByAggregateInput
    _max?: PickupMaxOrderByAggregateInput
    _min?: PickupMinOrderByAggregateInput
    _sum?: PickupSumOrderByAggregateInput
  }

  export type PickupScalarWhereWithAggregatesInput = {
    AND?: PickupScalarWhereWithAggregatesInput | PickupScalarWhereWithAggregatesInput[]
    OR?: PickupScalarWhereWithAggregatesInput[]
    NOT?: PickupScalarWhereWithAggregatesInput | PickupScalarWhereWithAggregatesInput[]
    pickup_id?: IntWithAggregatesFilter<"Pickup"> | number
    request_id?: IntWithAggregatesFilter<"Pickup"> | number
    scheduled_date?: DateTimeWithAggregatesFilter<"Pickup"> | Date | string
    route_id?: IntNullableWithAggregatesFilter<"Pickup"> | number | null
    status?: EnumPickupStatusWithAggregatesFilter<"Pickup"> | $Enums.PickupStatus
    updated_at?: DateTimeWithAggregatesFilter<"Pickup"> | Date | string
  }

  export type RouteWhereInput = {
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    route_id?: IntFilter<"Route"> | number
    name?: StringFilter<"Route"> | string
    description?: StringNullableFilter<"Route"> | string | null
    created_at?: DateTimeFilter<"Route"> | Date | string
    pickups?: PickupListRelationFilter
    routeAssignment?: XOR<RouteAssignmentNullableScalarRelationFilter, RouteAssignmentWhereInput> | null
  }

  export type RouteOrderByWithRelationInput = {
    route_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    pickups?: PickupOrderByRelationAggregateInput
    routeAssignment?: RouteAssignmentOrderByWithRelationInput
  }

  export type RouteWhereUniqueInput = Prisma.AtLeast<{
    route_id?: number
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    name?: StringFilter<"Route"> | string
    description?: StringNullableFilter<"Route"> | string | null
    created_at?: DateTimeFilter<"Route"> | Date | string
    pickups?: PickupListRelationFilter
    routeAssignment?: XOR<RouteAssignmentNullableScalarRelationFilter, RouteAssignmentWhereInput> | null
  }, "route_id">

  export type RouteOrderByWithAggregationInput = {
    route_id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: RouteCountOrderByAggregateInput
    _avg?: RouteAvgOrderByAggregateInput
    _max?: RouteMaxOrderByAggregateInput
    _min?: RouteMinOrderByAggregateInput
    _sum?: RouteSumOrderByAggregateInput
  }

  export type RouteScalarWhereWithAggregatesInput = {
    AND?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    OR?: RouteScalarWhereWithAggregatesInput[]
    NOT?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    route_id?: IntWithAggregatesFilter<"Route"> | number
    name?: StringWithAggregatesFilter<"Route"> | string
    description?: StringNullableWithAggregatesFilter<"Route"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Route"> | Date | string
  }

  export type RouteAssignmentWhereInput = {
    AND?: RouteAssignmentWhereInput | RouteAssignmentWhereInput[]
    OR?: RouteAssignmentWhereInput[]
    NOT?: RouteAssignmentWhereInput | RouteAssignmentWhereInput[]
    assignment_id?: IntFilter<"RouteAssignment"> | number
    route_id?: IntFilter<"RouteAssignment"> | number
    pickup_id?: IntFilter<"RouteAssignment"> | number
    sequence_no?: IntFilter<"RouteAssignment"> | number
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    pickup?: XOR<PickupScalarRelationFilter, PickupWhereInput>
  }

  export type RouteAssignmentOrderByWithRelationInput = {
    assignment_id?: SortOrder
    route_id?: SortOrder
    pickup_id?: SortOrder
    sequence_no?: SortOrder
    route?: RouteOrderByWithRelationInput
    pickup?: PickupOrderByWithRelationInput
  }

  export type RouteAssignmentWhereUniqueInput = Prisma.AtLeast<{
    assignment_id?: number
    route_id?: number
    pickup_id?: number
    AND?: RouteAssignmentWhereInput | RouteAssignmentWhereInput[]
    OR?: RouteAssignmentWhereInput[]
    NOT?: RouteAssignmentWhereInput | RouteAssignmentWhereInput[]
    sequence_no?: IntFilter<"RouteAssignment"> | number
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    pickup?: XOR<PickupScalarRelationFilter, PickupWhereInput>
  }, "assignment_id" | "route_id" | "pickup_id">

  export type RouteAssignmentOrderByWithAggregationInput = {
    assignment_id?: SortOrder
    route_id?: SortOrder
    pickup_id?: SortOrder
    sequence_no?: SortOrder
    _count?: RouteAssignmentCountOrderByAggregateInput
    _avg?: RouteAssignmentAvgOrderByAggregateInput
    _max?: RouteAssignmentMaxOrderByAggregateInput
    _min?: RouteAssignmentMinOrderByAggregateInput
    _sum?: RouteAssignmentSumOrderByAggregateInput
  }

  export type RouteAssignmentScalarWhereWithAggregatesInput = {
    AND?: RouteAssignmentScalarWhereWithAggregatesInput | RouteAssignmentScalarWhereWithAggregatesInput[]
    OR?: RouteAssignmentScalarWhereWithAggregatesInput[]
    NOT?: RouteAssignmentScalarWhereWithAggregatesInput | RouteAssignmentScalarWhereWithAggregatesInput[]
    assignment_id?: IntWithAggregatesFilter<"RouteAssignment"> | number
    route_id?: IntWithAggregatesFilter<"RouteAssignment"> | number
    pickup_id?: IntWithAggregatesFilter<"RouteAssignment"> | number
    sequence_no?: IntWithAggregatesFilter<"RouteAssignment"> | number
  }

  export type ComplaintWhereInput = {
    AND?: ComplaintWhereInput | ComplaintWhereInput[]
    OR?: ComplaintWhereInput[]
    NOT?: ComplaintWhereInput | ComplaintWhereInput[]
    complaint_id?: IntFilter<"Complaint"> | number
    user_id?: IntFilter<"Complaint"> | number
    pickup_id?: IntNullableFilter<"Complaint"> | number | null
    description?: StringFilter<"Complaint"> | string
    status?: EnumComplaintStatusFilter<"Complaint"> | $Enums.ComplaintStatus
    created_at?: DateTimeFilter<"Complaint"> | Date | string
    updated_at?: DateTimeFilter<"Complaint"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    pickup?: XOR<PickupNullableScalarRelationFilter, PickupWhereInput> | null
  }

  export type ComplaintOrderByWithRelationInput = {
    complaint_id?: SortOrder
    user_id?: SortOrder
    pickup_id?: SortOrderInput | SortOrder
    description?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    pickup?: PickupOrderByWithRelationInput
  }

  export type ComplaintWhereUniqueInput = Prisma.AtLeast<{
    complaint_id?: number
    AND?: ComplaintWhereInput | ComplaintWhereInput[]
    OR?: ComplaintWhereInput[]
    NOT?: ComplaintWhereInput | ComplaintWhereInput[]
    user_id?: IntFilter<"Complaint"> | number
    pickup_id?: IntNullableFilter<"Complaint"> | number | null
    description?: StringFilter<"Complaint"> | string
    status?: EnumComplaintStatusFilter<"Complaint"> | $Enums.ComplaintStatus
    created_at?: DateTimeFilter<"Complaint"> | Date | string
    updated_at?: DateTimeFilter<"Complaint"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    pickup?: XOR<PickupNullableScalarRelationFilter, PickupWhereInput> | null
  }, "complaint_id">

  export type ComplaintOrderByWithAggregationInput = {
    complaint_id?: SortOrder
    user_id?: SortOrder
    pickup_id?: SortOrderInput | SortOrder
    description?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ComplaintCountOrderByAggregateInput
    _avg?: ComplaintAvgOrderByAggregateInput
    _max?: ComplaintMaxOrderByAggregateInput
    _min?: ComplaintMinOrderByAggregateInput
    _sum?: ComplaintSumOrderByAggregateInput
  }

  export type ComplaintScalarWhereWithAggregatesInput = {
    AND?: ComplaintScalarWhereWithAggregatesInput | ComplaintScalarWhereWithAggregatesInput[]
    OR?: ComplaintScalarWhereWithAggregatesInput[]
    NOT?: ComplaintScalarWhereWithAggregatesInput | ComplaintScalarWhereWithAggregatesInput[]
    complaint_id?: IntWithAggregatesFilter<"Complaint"> | number
    user_id?: IntWithAggregatesFilter<"Complaint"> | number
    pickup_id?: IntNullableWithAggregatesFilter<"Complaint"> | number | null
    description?: StringWithAggregatesFilter<"Complaint"> | string
    status?: EnumComplaintStatusWithAggregatesFilter<"Complaint"> | $Enums.ComplaintStatus
    created_at?: DateTimeWithAggregatesFilter<"Complaint"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Complaint"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    notification_id?: IntFilter<"Notification"> | number
    user_id?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    sent_at?: DateTimeFilter<"Notification"> | Date | string
    is_read?: BoolFilter<"Notification"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    sent_at?: SortOrder
    is_read?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    notification_id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    user_id?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    sent_at?: DateTimeFilter<"Notification"> | Date | string
    is_read?: BoolFilter<"Notification"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "notification_id">

  export type NotificationOrderByWithAggregationInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    sent_at?: SortOrder
    is_read?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    notification_id?: IntWithAggregatesFilter<"Notification"> | number
    user_id?: IntWithAggregatesFilter<"Notification"> | number
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    sent_at?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    is_read?: BoolWithAggregatesFilter<"Notification"> | boolean
  }

  export type WasteLogWhereInput = {
    AND?: WasteLogWhereInput | WasteLogWhereInput[]
    OR?: WasteLogWhereInput[]
    NOT?: WasteLogWhereInput | WasteLogWhereInput[]
    log_id?: IntFilter<"WasteLog"> | number
    user_id?: IntFilter<"WasteLog"> | number
    waste_type_id?: IntFilter<"WasteLog"> | number
    quantity_kg?: DecimalFilter<"WasteLog"> | Decimal | DecimalJsLike | number | string
    log_date?: DateTimeFilter<"WasteLog"> | Date | string
    created_at?: DateTimeFilter<"WasteLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    waste_type?: XOR<WasteTypeScalarRelationFilter, WasteTypeWhereInput>
  }

  export type WasteLogOrderByWithRelationInput = {
    log_id?: SortOrder
    user_id?: SortOrder
    waste_type_id?: SortOrder
    quantity_kg?: SortOrder
    log_date?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
    waste_type?: WasteTypeOrderByWithRelationInput
  }

  export type WasteLogWhereUniqueInput = Prisma.AtLeast<{
    log_id?: number
    AND?: WasteLogWhereInput | WasteLogWhereInput[]
    OR?: WasteLogWhereInput[]
    NOT?: WasteLogWhereInput | WasteLogWhereInput[]
    user_id?: IntFilter<"WasteLog"> | number
    waste_type_id?: IntFilter<"WasteLog"> | number
    quantity_kg?: DecimalFilter<"WasteLog"> | Decimal | DecimalJsLike | number | string
    log_date?: DateTimeFilter<"WasteLog"> | Date | string
    created_at?: DateTimeFilter<"WasteLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    waste_type?: XOR<WasteTypeScalarRelationFilter, WasteTypeWhereInput>
  }, "log_id">

  export type WasteLogOrderByWithAggregationInput = {
    log_id?: SortOrder
    user_id?: SortOrder
    waste_type_id?: SortOrder
    quantity_kg?: SortOrder
    log_date?: SortOrder
    created_at?: SortOrder
    _count?: WasteLogCountOrderByAggregateInput
    _avg?: WasteLogAvgOrderByAggregateInput
    _max?: WasteLogMaxOrderByAggregateInput
    _min?: WasteLogMinOrderByAggregateInput
    _sum?: WasteLogSumOrderByAggregateInput
  }

  export type WasteLogScalarWhereWithAggregatesInput = {
    AND?: WasteLogScalarWhereWithAggregatesInput | WasteLogScalarWhereWithAggregatesInput[]
    OR?: WasteLogScalarWhereWithAggregatesInput[]
    NOT?: WasteLogScalarWhereWithAggregatesInput | WasteLogScalarWhereWithAggregatesInput[]
    log_id?: IntWithAggregatesFilter<"WasteLog"> | number
    user_id?: IntWithAggregatesFilter<"WasteLog"> | number
    waste_type_id?: IntWithAggregatesFilter<"WasteLog"> | number
    quantity_kg?: DecimalWithAggregatesFilter<"WasteLog"> | Decimal | DecimalJsLike | number | string
    log_date?: DateTimeWithAggregatesFilter<"WasteLog"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"WasteLog"> | Date | string
  }

  export type UserCreateInput = {
    role_id: number
    barangay_id: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number: string
    address: string
    created_at?: Date | string
    role?: UserCreateroleInput | string[]
    requests?: ServiceRequestCreateNestedManyWithoutUserInput
    complaints?: ComplaintCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    waste_logs?: WasteLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: number
    role_id: number
    barangay_id: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number: string
    address: string
    created_at?: Date | string
    role?: UserCreateroleInput | string[]
    requests?: ServiceRequestUncheckedCreateNestedManyWithoutUserInput
    complaints?: ComplaintUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    waste_logs?: WasteLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    barangay_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UserUpdateroleInput | string[]
    requests?: ServiceRequestUpdateManyWithoutUserNestedInput
    complaints?: ComplaintUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    waste_logs?: WasteLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    barangay_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UserUpdateroleInput | string[]
    requests?: ServiceRequestUncheckedUpdateManyWithoutUserNestedInput
    complaints?: ComplaintUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    waste_logs?: WasteLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: number
    role_id: number
    barangay_id: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number: string
    address: string
    created_at?: Date | string
    role?: UserCreateroleInput | string[]
  }

  export type UserUpdateManyMutationInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    barangay_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UserUpdateroleInput | string[]
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    barangay_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UserUpdateroleInput | string[]
  }

  export type WasteTypeCreateInput = {
    name: string
    description?: string | null
    requests?: ServiceRequestCreateNestedManyWithoutWaste_typeInput
    waste_logs?: WasteLogCreateNestedManyWithoutWaste_typeInput
  }

  export type WasteTypeUncheckedCreateInput = {
    waste_type_id?: number
    name: string
    description?: string | null
    requests?: ServiceRequestUncheckedCreateNestedManyWithoutWaste_typeInput
    waste_logs?: WasteLogUncheckedCreateNestedManyWithoutWaste_typeInput
  }

  export type WasteTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requests?: ServiceRequestUpdateManyWithoutWaste_typeNestedInput
    waste_logs?: WasteLogUpdateManyWithoutWaste_typeNestedInput
  }

  export type WasteTypeUncheckedUpdateInput = {
    waste_type_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requests?: ServiceRequestUncheckedUpdateManyWithoutWaste_typeNestedInput
    waste_logs?: WasteLogUncheckedUpdateManyWithoutWaste_typeNestedInput
  }

  export type WasteTypeCreateManyInput = {
    waste_type_id?: number
    name: string
    description?: string | null
  }

  export type WasteTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WasteTypeUncheckedUpdateManyInput = {
    waste_type_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceRequestCreateInput = {
    requested_date: Date | string
    status?: $Enums.RequestStatus
    user: UserCreateNestedOneWithoutRequestsInput
    waste_type: WasteTypeCreateNestedOneWithoutRequestsInput
    pickups?: PickupCreateNestedManyWithoutService_requestInput
  }

  export type ServiceRequestUncheckedCreateInput = {
    request_id?: number
    user_id: number
    waste_type_id: number
    requested_date: Date | string
    status?: $Enums.RequestStatus
    pickups?: PickupUncheckedCreateNestedManyWithoutService_requestInput
  }

  export type ServiceRequestUpdateInput = {
    requested_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
    waste_type?: WasteTypeUpdateOneRequiredWithoutRequestsNestedInput
    pickups?: PickupUpdateManyWithoutService_requestNestedInput
  }

  export type ServiceRequestUncheckedUpdateInput = {
    request_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    waste_type_id?: IntFieldUpdateOperationsInput | number
    requested_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    pickups?: PickupUncheckedUpdateManyWithoutService_requestNestedInput
  }

  export type ServiceRequestCreateManyInput = {
    request_id?: number
    user_id: number
    waste_type_id: number
    requested_date: Date | string
    status?: $Enums.RequestStatus
  }

  export type ServiceRequestUpdateManyMutationInput = {
    requested_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
  }

  export type ServiceRequestUncheckedUpdateManyInput = {
    request_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    waste_type_id?: IntFieldUpdateOperationsInput | number
    requested_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
  }

  export type PickupCreateInput = {
    scheduled_date: Date | string
    status?: $Enums.PickupStatus
    updated_at?: Date | string
    service_request: ServiceRequestCreateNestedOneWithoutPickupsInput
    route?: RouteCreateNestedOneWithoutPickupsInput
    complaints?: ComplaintCreateNestedManyWithoutPickupInput
    routeAssignment?: RouteAssignmentCreateNestedOneWithoutPickupInput
  }

  export type PickupUncheckedCreateInput = {
    pickup_id?: number
    request_id: number
    scheduled_date: Date | string
    route_id?: number | null
    status?: $Enums.PickupStatus
    updated_at?: Date | string
    complaints?: ComplaintUncheckedCreateNestedManyWithoutPickupInput
    routeAssignment?: RouteAssignmentUncheckedCreateNestedOneWithoutPickupInput
  }

  export type PickupUpdateInput = {
    scheduled_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPickupStatusFieldUpdateOperationsInput | $Enums.PickupStatus
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    service_request?: ServiceRequestUpdateOneRequiredWithoutPickupsNestedInput
    route?: RouteUpdateOneWithoutPickupsNestedInput
    complaints?: ComplaintUpdateManyWithoutPickupNestedInput
    routeAssignment?: RouteAssignmentUpdateOneWithoutPickupNestedInput
  }

  export type PickupUncheckedUpdateInput = {
    pickup_id?: IntFieldUpdateOperationsInput | number
    request_id?: IntFieldUpdateOperationsInput | number
    scheduled_date?: DateTimeFieldUpdateOperationsInput | Date | string
    route_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPickupStatusFieldUpdateOperationsInput | $Enums.PickupStatus
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    complaints?: ComplaintUncheckedUpdateManyWithoutPickupNestedInput
    routeAssignment?: RouteAssignmentUncheckedUpdateOneWithoutPickupNestedInput
  }

  export type PickupCreateManyInput = {
    pickup_id?: number
    request_id: number
    scheduled_date: Date | string
    route_id?: number | null
    status?: $Enums.PickupStatus
    updated_at?: Date | string
  }

  export type PickupUpdateManyMutationInput = {
    scheduled_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPickupStatusFieldUpdateOperationsInput | $Enums.PickupStatus
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PickupUncheckedUpdateManyInput = {
    pickup_id?: IntFieldUpdateOperationsInput | number
    request_id?: IntFieldUpdateOperationsInput | number
    scheduled_date?: DateTimeFieldUpdateOperationsInput | Date | string
    route_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPickupStatusFieldUpdateOperationsInput | $Enums.PickupStatus
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteCreateInput = {
    name: string
    description?: string | null
    created_at?: Date | string
    pickups?: PickupCreateNestedManyWithoutRouteInput
    routeAssignment?: RouteAssignmentCreateNestedOneWithoutRouteInput
  }

  export type RouteUncheckedCreateInput = {
    route_id?: number
    name: string
    description?: string | null
    created_at?: Date | string
    pickups?: PickupUncheckedCreateNestedManyWithoutRouteInput
    routeAssignment?: RouteAssignmentUncheckedCreateNestedOneWithoutRouteInput
  }

  export type RouteUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pickups?: PickupUpdateManyWithoutRouteNestedInput
    routeAssignment?: RouteAssignmentUpdateOneWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateInput = {
    route_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pickups?: PickupUncheckedUpdateManyWithoutRouteNestedInput
    routeAssignment?: RouteAssignmentUncheckedUpdateOneWithoutRouteNestedInput
  }

  export type RouteCreateManyInput = {
    route_id?: number
    name: string
    description?: string | null
    created_at?: Date | string
  }

  export type RouteUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteUncheckedUpdateManyInput = {
    route_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteAssignmentCreateInput = {
    sequence_no: number
    route: RouteCreateNestedOneWithoutRouteAssignmentInput
    pickup: PickupCreateNestedOneWithoutRouteAssignmentInput
  }

  export type RouteAssignmentUncheckedCreateInput = {
    assignment_id?: number
    route_id: number
    pickup_id: number
    sequence_no: number
  }

  export type RouteAssignmentUpdateInput = {
    sequence_no?: IntFieldUpdateOperationsInput | number
    route?: RouteUpdateOneRequiredWithoutRouteAssignmentNestedInput
    pickup?: PickupUpdateOneRequiredWithoutRouteAssignmentNestedInput
  }

  export type RouteAssignmentUncheckedUpdateInput = {
    assignment_id?: IntFieldUpdateOperationsInput | number
    route_id?: IntFieldUpdateOperationsInput | number
    pickup_id?: IntFieldUpdateOperationsInput | number
    sequence_no?: IntFieldUpdateOperationsInput | number
  }

  export type RouteAssignmentCreateManyInput = {
    assignment_id?: number
    route_id: number
    pickup_id: number
    sequence_no: number
  }

  export type RouteAssignmentUpdateManyMutationInput = {
    sequence_no?: IntFieldUpdateOperationsInput | number
  }

  export type RouteAssignmentUncheckedUpdateManyInput = {
    assignment_id?: IntFieldUpdateOperationsInput | number
    route_id?: IntFieldUpdateOperationsInput | number
    pickup_id?: IntFieldUpdateOperationsInput | number
    sequence_no?: IntFieldUpdateOperationsInput | number
  }

  export type ComplaintCreateInput = {
    description: string
    status?: $Enums.ComplaintStatus
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutComplaintsInput
    pickup?: PickupCreateNestedOneWithoutComplaintsInput
  }

  export type ComplaintUncheckedCreateInput = {
    complaint_id?: number
    user_id: number
    pickup_id?: number | null
    description: string
    status?: $Enums.ComplaintStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ComplaintUpdateInput = {
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumComplaintStatusFieldUpdateOperationsInput | $Enums.ComplaintStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutComplaintsNestedInput
    pickup?: PickupUpdateOneWithoutComplaintsNestedInput
  }

  export type ComplaintUncheckedUpdateInput = {
    complaint_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    pickup_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumComplaintStatusFieldUpdateOperationsInput | $Enums.ComplaintStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComplaintCreateManyInput = {
    complaint_id?: number
    user_id: number
    pickup_id?: number | null
    description: string
    status?: $Enums.ComplaintStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ComplaintUpdateManyMutationInput = {
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumComplaintStatusFieldUpdateOperationsInput | $Enums.ComplaintStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComplaintUncheckedUpdateManyInput = {
    complaint_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    pickup_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumComplaintStatusFieldUpdateOperationsInput | $Enums.ComplaintStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    title: string
    message: string
    sent_at?: Date | string
    is_read?: boolean
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    notification_id?: number
    user_id: number
    title: string
    message: string
    sent_at?: Date | string
    is_read?: boolean
  }

  export type NotificationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationCreateManyInput = {
    notification_id?: number
    user_id: number
    title: string
    message: string
    sent_at?: Date | string
    is_read?: boolean
  }

  export type NotificationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WasteLogCreateInput = {
    quantity_kg: Decimal | DecimalJsLike | number | string
    log_date: Date | string
    created_at?: Date | string
    user: UserCreateNestedOneWithoutWaste_logsInput
    waste_type: WasteTypeCreateNestedOneWithoutWaste_logsInput
  }

  export type WasteLogUncheckedCreateInput = {
    log_id?: number
    user_id: number
    waste_type_id: number
    quantity_kg: Decimal | DecimalJsLike | number | string
    log_date: Date | string
    created_at?: Date | string
  }

  export type WasteLogUpdateInput = {
    quantity_kg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWaste_logsNestedInput
    waste_type?: WasteTypeUpdateOneRequiredWithoutWaste_logsNestedInput
  }

  export type WasteLogUncheckedUpdateInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    waste_type_id?: IntFieldUpdateOperationsInput | number
    quantity_kg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WasteLogCreateManyInput = {
    log_id?: number
    user_id: number
    waste_type_id: number
    quantity_kg: Decimal | DecimalJsLike | number | string
    log_date: Date | string
    created_at?: Date | string
  }

  export type WasteLogUpdateManyMutationInput = {
    quantity_kg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WasteLogUncheckedUpdateManyInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    waste_type_id?: IntFieldUpdateOperationsInput | number
    quantity_kg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ServiceRequestListRelationFilter = {
    every?: ServiceRequestWhereInput
    some?: ServiceRequestWhereInput
    none?: ServiceRequestWhereInput
  }

  export type ComplaintListRelationFilter = {
    every?: ComplaintWhereInput
    some?: ComplaintWhereInput
    none?: ComplaintWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type WasteLogListRelationFilter = {
    every?: WasteLogWhereInput
    some?: WasteLogWhereInput
    none?: WasteLogWhereInput
  }

  export type ServiceRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ComplaintOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WasteLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    barangay_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    barangay_id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    barangay_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    barangay_id?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone_number?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    barangay_id?: SortOrder
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WasteTypeCountOrderByAggregateInput = {
    waste_type_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type WasteTypeAvgOrderByAggregateInput = {
    waste_type_id?: SortOrder
  }

  export type WasteTypeMaxOrderByAggregateInput = {
    waste_type_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type WasteTypeMinOrderByAggregateInput = {
    waste_type_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type WasteTypeSumOrderByAggregateInput = {
    waste_type_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WasteTypeScalarRelationFilter = {
    is?: WasteTypeWhereInput
    isNot?: WasteTypeWhereInput
  }

  export type PickupListRelationFilter = {
    every?: PickupWhereInput
    some?: PickupWhereInput
    none?: PickupWhereInput
  }

  export type PickupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceRequestCountOrderByAggregateInput = {
    request_id?: SortOrder
    user_id?: SortOrder
    waste_type_id?: SortOrder
    requested_date?: SortOrder
    status?: SortOrder
  }

  export type ServiceRequestAvgOrderByAggregateInput = {
    request_id?: SortOrder
    user_id?: SortOrder
    waste_type_id?: SortOrder
  }

  export type ServiceRequestMaxOrderByAggregateInput = {
    request_id?: SortOrder
    user_id?: SortOrder
    waste_type_id?: SortOrder
    requested_date?: SortOrder
    status?: SortOrder
  }

  export type ServiceRequestMinOrderByAggregateInput = {
    request_id?: SortOrder
    user_id?: SortOrder
    waste_type_id?: SortOrder
    requested_date?: SortOrder
    status?: SortOrder
  }

  export type ServiceRequestSumOrderByAggregateInput = {
    request_id?: SortOrder
    user_id?: SortOrder
    waste_type_id?: SortOrder
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumPickupStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PickupStatus | EnumPickupStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PickupStatus[] | ListEnumPickupStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PickupStatus[] | ListEnumPickupStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPickupStatusFilter<$PrismaModel> | $Enums.PickupStatus
  }

  export type ServiceRequestScalarRelationFilter = {
    is?: ServiceRequestWhereInput
    isNot?: ServiceRequestWhereInput
  }

  export type RouteNullableScalarRelationFilter = {
    is?: RouteWhereInput | null
    isNot?: RouteWhereInput | null
  }

  export type RouteAssignmentNullableScalarRelationFilter = {
    is?: RouteAssignmentWhereInput | null
    isNot?: RouteAssignmentWhereInput | null
  }

  export type PickupCountOrderByAggregateInput = {
    pickup_id?: SortOrder
    request_id?: SortOrder
    scheduled_date?: SortOrder
    route_id?: SortOrder
    status?: SortOrder
    updated_at?: SortOrder
  }

  export type PickupAvgOrderByAggregateInput = {
    pickup_id?: SortOrder
    request_id?: SortOrder
    route_id?: SortOrder
  }

  export type PickupMaxOrderByAggregateInput = {
    pickup_id?: SortOrder
    request_id?: SortOrder
    scheduled_date?: SortOrder
    route_id?: SortOrder
    status?: SortOrder
    updated_at?: SortOrder
  }

  export type PickupMinOrderByAggregateInput = {
    pickup_id?: SortOrder
    request_id?: SortOrder
    scheduled_date?: SortOrder
    route_id?: SortOrder
    status?: SortOrder
    updated_at?: SortOrder
  }

  export type PickupSumOrderByAggregateInput = {
    pickup_id?: SortOrder
    request_id?: SortOrder
    route_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumPickupStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PickupStatus | EnumPickupStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PickupStatus[] | ListEnumPickupStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PickupStatus[] | ListEnumPickupStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPickupStatusWithAggregatesFilter<$PrismaModel> | $Enums.PickupStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPickupStatusFilter<$PrismaModel>
    _max?: NestedEnumPickupStatusFilter<$PrismaModel>
  }

  export type RouteCountOrderByAggregateInput = {
    route_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type RouteAvgOrderByAggregateInput = {
    route_id?: SortOrder
  }

  export type RouteMaxOrderByAggregateInput = {
    route_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type RouteMinOrderByAggregateInput = {
    route_id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
  }

  export type RouteSumOrderByAggregateInput = {
    route_id?: SortOrder
  }

  export type RouteScalarRelationFilter = {
    is?: RouteWhereInput
    isNot?: RouteWhereInput
  }

  export type PickupScalarRelationFilter = {
    is?: PickupWhereInput
    isNot?: PickupWhereInput
  }

  export type RouteAssignmentCountOrderByAggregateInput = {
    assignment_id?: SortOrder
    route_id?: SortOrder
    pickup_id?: SortOrder
    sequence_no?: SortOrder
  }

  export type RouteAssignmentAvgOrderByAggregateInput = {
    assignment_id?: SortOrder
    route_id?: SortOrder
    pickup_id?: SortOrder
    sequence_no?: SortOrder
  }

  export type RouteAssignmentMaxOrderByAggregateInput = {
    assignment_id?: SortOrder
    route_id?: SortOrder
    pickup_id?: SortOrder
    sequence_no?: SortOrder
  }

  export type RouteAssignmentMinOrderByAggregateInput = {
    assignment_id?: SortOrder
    route_id?: SortOrder
    pickup_id?: SortOrder
    sequence_no?: SortOrder
  }

  export type RouteAssignmentSumOrderByAggregateInput = {
    assignment_id?: SortOrder
    route_id?: SortOrder
    pickup_id?: SortOrder
    sequence_no?: SortOrder
  }

  export type EnumComplaintStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ComplaintStatus | EnumComplaintStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ComplaintStatus[] | ListEnumComplaintStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ComplaintStatus[] | ListEnumComplaintStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumComplaintStatusFilter<$PrismaModel> | $Enums.ComplaintStatus
  }

  export type PickupNullableScalarRelationFilter = {
    is?: PickupWhereInput | null
    isNot?: PickupWhereInput | null
  }

  export type ComplaintCountOrderByAggregateInput = {
    complaint_id?: SortOrder
    user_id?: SortOrder
    pickup_id?: SortOrder
    description?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ComplaintAvgOrderByAggregateInput = {
    complaint_id?: SortOrder
    user_id?: SortOrder
    pickup_id?: SortOrder
  }

  export type ComplaintMaxOrderByAggregateInput = {
    complaint_id?: SortOrder
    user_id?: SortOrder
    pickup_id?: SortOrder
    description?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ComplaintMinOrderByAggregateInput = {
    complaint_id?: SortOrder
    user_id?: SortOrder
    pickup_id?: SortOrder
    description?: SortOrder
    status?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ComplaintSumOrderByAggregateInput = {
    complaint_id?: SortOrder
    user_id?: SortOrder
    pickup_id?: SortOrder
  }

  export type EnumComplaintStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ComplaintStatus | EnumComplaintStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ComplaintStatus[] | ListEnumComplaintStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ComplaintStatus[] | ListEnumComplaintStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumComplaintStatusWithAggregatesFilter<$PrismaModel> | $Enums.ComplaintStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumComplaintStatusFilter<$PrismaModel>
    _max?: NestedEnumComplaintStatusFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NotificationCountOrderByAggregateInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    sent_at?: SortOrder
    is_read?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    sent_at?: SortOrder
    is_read?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    message?: SortOrder
    sent_at?: SortOrder
    is_read?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    notification_id?: SortOrder
    user_id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type WasteLogCountOrderByAggregateInput = {
    log_id?: SortOrder
    user_id?: SortOrder
    waste_type_id?: SortOrder
    quantity_kg?: SortOrder
    log_date?: SortOrder
    created_at?: SortOrder
  }

  export type WasteLogAvgOrderByAggregateInput = {
    log_id?: SortOrder
    user_id?: SortOrder
    waste_type_id?: SortOrder
    quantity_kg?: SortOrder
  }

  export type WasteLogMaxOrderByAggregateInput = {
    log_id?: SortOrder
    user_id?: SortOrder
    waste_type_id?: SortOrder
    quantity_kg?: SortOrder
    log_date?: SortOrder
    created_at?: SortOrder
  }

  export type WasteLogMinOrderByAggregateInput = {
    log_id?: SortOrder
    user_id?: SortOrder
    waste_type_id?: SortOrder
    quantity_kg?: SortOrder
    log_date?: SortOrder
    created_at?: SortOrder
  }

  export type WasteLogSumOrderByAggregateInput = {
    log_id?: SortOrder
    user_id?: SortOrder
    waste_type_id?: SortOrder
    quantity_kg?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type UserCreateroleInput = {
    set: string[]
  }

  export type ServiceRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<ServiceRequestCreateWithoutUserInput, ServiceRequestUncheckedCreateWithoutUserInput> | ServiceRequestCreateWithoutUserInput[] | ServiceRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutUserInput | ServiceRequestCreateOrConnectWithoutUserInput[]
    createMany?: ServiceRequestCreateManyUserInputEnvelope
    connect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
  }

  export type ComplaintCreateNestedManyWithoutUserInput = {
    create?: XOR<ComplaintCreateWithoutUserInput, ComplaintUncheckedCreateWithoutUserInput> | ComplaintCreateWithoutUserInput[] | ComplaintUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComplaintCreateOrConnectWithoutUserInput | ComplaintCreateOrConnectWithoutUserInput[]
    createMany?: ComplaintCreateManyUserInputEnvelope
    connect?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type WasteLogCreateNestedManyWithoutUserInput = {
    create?: XOR<WasteLogCreateWithoutUserInput, WasteLogUncheckedCreateWithoutUserInput> | WasteLogCreateWithoutUserInput[] | WasteLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WasteLogCreateOrConnectWithoutUserInput | WasteLogCreateOrConnectWithoutUserInput[]
    createMany?: WasteLogCreateManyUserInputEnvelope
    connect?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
  }

  export type ServiceRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ServiceRequestCreateWithoutUserInput, ServiceRequestUncheckedCreateWithoutUserInput> | ServiceRequestCreateWithoutUserInput[] | ServiceRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutUserInput | ServiceRequestCreateOrConnectWithoutUserInput[]
    createMany?: ServiceRequestCreateManyUserInputEnvelope
    connect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
  }

  export type ComplaintUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ComplaintCreateWithoutUserInput, ComplaintUncheckedCreateWithoutUserInput> | ComplaintCreateWithoutUserInput[] | ComplaintUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComplaintCreateOrConnectWithoutUserInput | ComplaintCreateOrConnectWithoutUserInput[]
    createMany?: ComplaintCreateManyUserInputEnvelope
    connect?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type WasteLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WasteLogCreateWithoutUserInput, WasteLogUncheckedCreateWithoutUserInput> | WasteLogCreateWithoutUserInput[] | WasteLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WasteLogCreateOrConnectWithoutUserInput | WasteLogCreateOrConnectWithoutUserInput[]
    createMany?: WasteLogCreateManyUserInputEnvelope
    connect?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateroleInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ServiceRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<ServiceRequestCreateWithoutUserInput, ServiceRequestUncheckedCreateWithoutUserInput> | ServiceRequestCreateWithoutUserInput[] | ServiceRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutUserInput | ServiceRequestCreateOrConnectWithoutUserInput[]
    upsert?: ServiceRequestUpsertWithWhereUniqueWithoutUserInput | ServiceRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ServiceRequestCreateManyUserInputEnvelope
    set?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    disconnect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    delete?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    connect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    update?: ServiceRequestUpdateWithWhereUniqueWithoutUserInput | ServiceRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ServiceRequestUpdateManyWithWhereWithoutUserInput | ServiceRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ServiceRequestScalarWhereInput | ServiceRequestScalarWhereInput[]
  }

  export type ComplaintUpdateManyWithoutUserNestedInput = {
    create?: XOR<ComplaintCreateWithoutUserInput, ComplaintUncheckedCreateWithoutUserInput> | ComplaintCreateWithoutUserInput[] | ComplaintUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComplaintCreateOrConnectWithoutUserInput | ComplaintCreateOrConnectWithoutUserInput[]
    upsert?: ComplaintUpsertWithWhereUniqueWithoutUserInput | ComplaintUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ComplaintCreateManyUserInputEnvelope
    set?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    disconnect?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    delete?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    connect?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    update?: ComplaintUpdateWithWhereUniqueWithoutUserInput | ComplaintUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ComplaintUpdateManyWithWhereWithoutUserInput | ComplaintUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ComplaintScalarWhereInput | ComplaintScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type WasteLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<WasteLogCreateWithoutUserInput, WasteLogUncheckedCreateWithoutUserInput> | WasteLogCreateWithoutUserInput[] | WasteLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WasteLogCreateOrConnectWithoutUserInput | WasteLogCreateOrConnectWithoutUserInput[]
    upsert?: WasteLogUpsertWithWhereUniqueWithoutUserInput | WasteLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WasteLogCreateManyUserInputEnvelope
    set?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
    disconnect?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
    delete?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
    connect?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
    update?: WasteLogUpdateWithWhereUniqueWithoutUserInput | WasteLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WasteLogUpdateManyWithWhereWithoutUserInput | WasteLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WasteLogScalarWhereInput | WasteLogScalarWhereInput[]
  }

  export type ServiceRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ServiceRequestCreateWithoutUserInput, ServiceRequestUncheckedCreateWithoutUserInput> | ServiceRequestCreateWithoutUserInput[] | ServiceRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutUserInput | ServiceRequestCreateOrConnectWithoutUserInput[]
    upsert?: ServiceRequestUpsertWithWhereUniqueWithoutUserInput | ServiceRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ServiceRequestCreateManyUserInputEnvelope
    set?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    disconnect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    delete?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    connect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    update?: ServiceRequestUpdateWithWhereUniqueWithoutUserInput | ServiceRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ServiceRequestUpdateManyWithWhereWithoutUserInput | ServiceRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ServiceRequestScalarWhereInput | ServiceRequestScalarWhereInput[]
  }

  export type ComplaintUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ComplaintCreateWithoutUserInput, ComplaintUncheckedCreateWithoutUserInput> | ComplaintCreateWithoutUserInput[] | ComplaintUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ComplaintCreateOrConnectWithoutUserInput | ComplaintCreateOrConnectWithoutUserInput[]
    upsert?: ComplaintUpsertWithWhereUniqueWithoutUserInput | ComplaintUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ComplaintCreateManyUserInputEnvelope
    set?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    disconnect?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    delete?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    connect?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    update?: ComplaintUpdateWithWhereUniqueWithoutUserInput | ComplaintUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ComplaintUpdateManyWithWhereWithoutUserInput | ComplaintUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ComplaintScalarWhereInput | ComplaintScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type WasteLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WasteLogCreateWithoutUserInput, WasteLogUncheckedCreateWithoutUserInput> | WasteLogCreateWithoutUserInput[] | WasteLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WasteLogCreateOrConnectWithoutUserInput | WasteLogCreateOrConnectWithoutUserInput[]
    upsert?: WasteLogUpsertWithWhereUniqueWithoutUserInput | WasteLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WasteLogCreateManyUserInputEnvelope
    set?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
    disconnect?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
    delete?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
    connect?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
    update?: WasteLogUpdateWithWhereUniqueWithoutUserInput | WasteLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WasteLogUpdateManyWithWhereWithoutUserInput | WasteLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WasteLogScalarWhereInput | WasteLogScalarWhereInput[]
  }

  export type ServiceRequestCreateNestedManyWithoutWaste_typeInput = {
    create?: XOR<ServiceRequestCreateWithoutWaste_typeInput, ServiceRequestUncheckedCreateWithoutWaste_typeInput> | ServiceRequestCreateWithoutWaste_typeInput[] | ServiceRequestUncheckedCreateWithoutWaste_typeInput[]
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutWaste_typeInput | ServiceRequestCreateOrConnectWithoutWaste_typeInput[]
    createMany?: ServiceRequestCreateManyWaste_typeInputEnvelope
    connect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
  }

  export type WasteLogCreateNestedManyWithoutWaste_typeInput = {
    create?: XOR<WasteLogCreateWithoutWaste_typeInput, WasteLogUncheckedCreateWithoutWaste_typeInput> | WasteLogCreateWithoutWaste_typeInput[] | WasteLogUncheckedCreateWithoutWaste_typeInput[]
    connectOrCreate?: WasteLogCreateOrConnectWithoutWaste_typeInput | WasteLogCreateOrConnectWithoutWaste_typeInput[]
    createMany?: WasteLogCreateManyWaste_typeInputEnvelope
    connect?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
  }

  export type ServiceRequestUncheckedCreateNestedManyWithoutWaste_typeInput = {
    create?: XOR<ServiceRequestCreateWithoutWaste_typeInput, ServiceRequestUncheckedCreateWithoutWaste_typeInput> | ServiceRequestCreateWithoutWaste_typeInput[] | ServiceRequestUncheckedCreateWithoutWaste_typeInput[]
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutWaste_typeInput | ServiceRequestCreateOrConnectWithoutWaste_typeInput[]
    createMany?: ServiceRequestCreateManyWaste_typeInputEnvelope
    connect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
  }

  export type WasteLogUncheckedCreateNestedManyWithoutWaste_typeInput = {
    create?: XOR<WasteLogCreateWithoutWaste_typeInput, WasteLogUncheckedCreateWithoutWaste_typeInput> | WasteLogCreateWithoutWaste_typeInput[] | WasteLogUncheckedCreateWithoutWaste_typeInput[]
    connectOrCreate?: WasteLogCreateOrConnectWithoutWaste_typeInput | WasteLogCreateOrConnectWithoutWaste_typeInput[]
    createMany?: WasteLogCreateManyWaste_typeInputEnvelope
    connect?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ServiceRequestUpdateManyWithoutWaste_typeNestedInput = {
    create?: XOR<ServiceRequestCreateWithoutWaste_typeInput, ServiceRequestUncheckedCreateWithoutWaste_typeInput> | ServiceRequestCreateWithoutWaste_typeInput[] | ServiceRequestUncheckedCreateWithoutWaste_typeInput[]
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutWaste_typeInput | ServiceRequestCreateOrConnectWithoutWaste_typeInput[]
    upsert?: ServiceRequestUpsertWithWhereUniqueWithoutWaste_typeInput | ServiceRequestUpsertWithWhereUniqueWithoutWaste_typeInput[]
    createMany?: ServiceRequestCreateManyWaste_typeInputEnvelope
    set?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    disconnect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    delete?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    connect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    update?: ServiceRequestUpdateWithWhereUniqueWithoutWaste_typeInput | ServiceRequestUpdateWithWhereUniqueWithoutWaste_typeInput[]
    updateMany?: ServiceRequestUpdateManyWithWhereWithoutWaste_typeInput | ServiceRequestUpdateManyWithWhereWithoutWaste_typeInput[]
    deleteMany?: ServiceRequestScalarWhereInput | ServiceRequestScalarWhereInput[]
  }

  export type WasteLogUpdateManyWithoutWaste_typeNestedInput = {
    create?: XOR<WasteLogCreateWithoutWaste_typeInput, WasteLogUncheckedCreateWithoutWaste_typeInput> | WasteLogCreateWithoutWaste_typeInput[] | WasteLogUncheckedCreateWithoutWaste_typeInput[]
    connectOrCreate?: WasteLogCreateOrConnectWithoutWaste_typeInput | WasteLogCreateOrConnectWithoutWaste_typeInput[]
    upsert?: WasteLogUpsertWithWhereUniqueWithoutWaste_typeInput | WasteLogUpsertWithWhereUniqueWithoutWaste_typeInput[]
    createMany?: WasteLogCreateManyWaste_typeInputEnvelope
    set?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
    disconnect?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
    delete?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
    connect?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
    update?: WasteLogUpdateWithWhereUniqueWithoutWaste_typeInput | WasteLogUpdateWithWhereUniqueWithoutWaste_typeInput[]
    updateMany?: WasteLogUpdateManyWithWhereWithoutWaste_typeInput | WasteLogUpdateManyWithWhereWithoutWaste_typeInput[]
    deleteMany?: WasteLogScalarWhereInput | WasteLogScalarWhereInput[]
  }

  export type ServiceRequestUncheckedUpdateManyWithoutWaste_typeNestedInput = {
    create?: XOR<ServiceRequestCreateWithoutWaste_typeInput, ServiceRequestUncheckedCreateWithoutWaste_typeInput> | ServiceRequestCreateWithoutWaste_typeInput[] | ServiceRequestUncheckedCreateWithoutWaste_typeInput[]
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutWaste_typeInput | ServiceRequestCreateOrConnectWithoutWaste_typeInput[]
    upsert?: ServiceRequestUpsertWithWhereUniqueWithoutWaste_typeInput | ServiceRequestUpsertWithWhereUniqueWithoutWaste_typeInput[]
    createMany?: ServiceRequestCreateManyWaste_typeInputEnvelope
    set?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    disconnect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    delete?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    connect?: ServiceRequestWhereUniqueInput | ServiceRequestWhereUniqueInput[]
    update?: ServiceRequestUpdateWithWhereUniqueWithoutWaste_typeInput | ServiceRequestUpdateWithWhereUniqueWithoutWaste_typeInput[]
    updateMany?: ServiceRequestUpdateManyWithWhereWithoutWaste_typeInput | ServiceRequestUpdateManyWithWhereWithoutWaste_typeInput[]
    deleteMany?: ServiceRequestScalarWhereInput | ServiceRequestScalarWhereInput[]
  }

  export type WasteLogUncheckedUpdateManyWithoutWaste_typeNestedInput = {
    create?: XOR<WasteLogCreateWithoutWaste_typeInput, WasteLogUncheckedCreateWithoutWaste_typeInput> | WasteLogCreateWithoutWaste_typeInput[] | WasteLogUncheckedCreateWithoutWaste_typeInput[]
    connectOrCreate?: WasteLogCreateOrConnectWithoutWaste_typeInput | WasteLogCreateOrConnectWithoutWaste_typeInput[]
    upsert?: WasteLogUpsertWithWhereUniqueWithoutWaste_typeInput | WasteLogUpsertWithWhereUniqueWithoutWaste_typeInput[]
    createMany?: WasteLogCreateManyWaste_typeInputEnvelope
    set?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
    disconnect?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
    delete?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
    connect?: WasteLogWhereUniqueInput | WasteLogWhereUniqueInput[]
    update?: WasteLogUpdateWithWhereUniqueWithoutWaste_typeInput | WasteLogUpdateWithWhereUniqueWithoutWaste_typeInput[]
    updateMany?: WasteLogUpdateManyWithWhereWithoutWaste_typeInput | WasteLogUpdateManyWithWhereWithoutWaste_typeInput[]
    deleteMany?: WasteLogScalarWhereInput | WasteLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRequestsInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type WasteTypeCreateNestedOneWithoutRequestsInput = {
    create?: XOR<WasteTypeCreateWithoutRequestsInput, WasteTypeUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: WasteTypeCreateOrConnectWithoutRequestsInput
    connect?: WasteTypeWhereUniqueInput
  }

  export type PickupCreateNestedManyWithoutService_requestInput = {
    create?: XOR<PickupCreateWithoutService_requestInput, PickupUncheckedCreateWithoutService_requestInput> | PickupCreateWithoutService_requestInput[] | PickupUncheckedCreateWithoutService_requestInput[]
    connectOrCreate?: PickupCreateOrConnectWithoutService_requestInput | PickupCreateOrConnectWithoutService_requestInput[]
    createMany?: PickupCreateManyService_requestInputEnvelope
    connect?: PickupWhereUniqueInput | PickupWhereUniqueInput[]
  }

  export type PickupUncheckedCreateNestedManyWithoutService_requestInput = {
    create?: XOR<PickupCreateWithoutService_requestInput, PickupUncheckedCreateWithoutService_requestInput> | PickupCreateWithoutService_requestInput[] | PickupUncheckedCreateWithoutService_requestInput[]
    connectOrCreate?: PickupCreateOrConnectWithoutService_requestInput | PickupCreateOrConnectWithoutService_requestInput[]
    createMany?: PickupCreateManyService_requestInputEnvelope
    connect?: PickupWhereUniqueInput | PickupWhereUniqueInput[]
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type UserUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRequestsInput
    upsert?: UserUpsertWithoutRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRequestsInput, UserUpdateWithoutRequestsInput>, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type WasteTypeUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<WasteTypeCreateWithoutRequestsInput, WasteTypeUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: WasteTypeCreateOrConnectWithoutRequestsInput
    upsert?: WasteTypeUpsertWithoutRequestsInput
    connect?: WasteTypeWhereUniqueInput
    update?: XOR<XOR<WasteTypeUpdateToOneWithWhereWithoutRequestsInput, WasteTypeUpdateWithoutRequestsInput>, WasteTypeUncheckedUpdateWithoutRequestsInput>
  }

  export type PickupUpdateManyWithoutService_requestNestedInput = {
    create?: XOR<PickupCreateWithoutService_requestInput, PickupUncheckedCreateWithoutService_requestInput> | PickupCreateWithoutService_requestInput[] | PickupUncheckedCreateWithoutService_requestInput[]
    connectOrCreate?: PickupCreateOrConnectWithoutService_requestInput | PickupCreateOrConnectWithoutService_requestInput[]
    upsert?: PickupUpsertWithWhereUniqueWithoutService_requestInput | PickupUpsertWithWhereUniqueWithoutService_requestInput[]
    createMany?: PickupCreateManyService_requestInputEnvelope
    set?: PickupWhereUniqueInput | PickupWhereUniqueInput[]
    disconnect?: PickupWhereUniqueInput | PickupWhereUniqueInput[]
    delete?: PickupWhereUniqueInput | PickupWhereUniqueInput[]
    connect?: PickupWhereUniqueInput | PickupWhereUniqueInput[]
    update?: PickupUpdateWithWhereUniqueWithoutService_requestInput | PickupUpdateWithWhereUniqueWithoutService_requestInput[]
    updateMany?: PickupUpdateManyWithWhereWithoutService_requestInput | PickupUpdateManyWithWhereWithoutService_requestInput[]
    deleteMany?: PickupScalarWhereInput | PickupScalarWhereInput[]
  }

  export type PickupUncheckedUpdateManyWithoutService_requestNestedInput = {
    create?: XOR<PickupCreateWithoutService_requestInput, PickupUncheckedCreateWithoutService_requestInput> | PickupCreateWithoutService_requestInput[] | PickupUncheckedCreateWithoutService_requestInput[]
    connectOrCreate?: PickupCreateOrConnectWithoutService_requestInput | PickupCreateOrConnectWithoutService_requestInput[]
    upsert?: PickupUpsertWithWhereUniqueWithoutService_requestInput | PickupUpsertWithWhereUniqueWithoutService_requestInput[]
    createMany?: PickupCreateManyService_requestInputEnvelope
    set?: PickupWhereUniqueInput | PickupWhereUniqueInput[]
    disconnect?: PickupWhereUniqueInput | PickupWhereUniqueInput[]
    delete?: PickupWhereUniqueInput | PickupWhereUniqueInput[]
    connect?: PickupWhereUniqueInput | PickupWhereUniqueInput[]
    update?: PickupUpdateWithWhereUniqueWithoutService_requestInput | PickupUpdateWithWhereUniqueWithoutService_requestInput[]
    updateMany?: PickupUpdateManyWithWhereWithoutService_requestInput | PickupUpdateManyWithWhereWithoutService_requestInput[]
    deleteMany?: PickupScalarWhereInput | PickupScalarWhereInput[]
  }

  export type ServiceRequestCreateNestedOneWithoutPickupsInput = {
    create?: XOR<ServiceRequestCreateWithoutPickupsInput, ServiceRequestUncheckedCreateWithoutPickupsInput>
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutPickupsInput
    connect?: ServiceRequestWhereUniqueInput
  }

  export type RouteCreateNestedOneWithoutPickupsInput = {
    create?: XOR<RouteCreateWithoutPickupsInput, RouteUncheckedCreateWithoutPickupsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutPickupsInput
    connect?: RouteWhereUniqueInput
  }

  export type ComplaintCreateNestedManyWithoutPickupInput = {
    create?: XOR<ComplaintCreateWithoutPickupInput, ComplaintUncheckedCreateWithoutPickupInput> | ComplaintCreateWithoutPickupInput[] | ComplaintUncheckedCreateWithoutPickupInput[]
    connectOrCreate?: ComplaintCreateOrConnectWithoutPickupInput | ComplaintCreateOrConnectWithoutPickupInput[]
    createMany?: ComplaintCreateManyPickupInputEnvelope
    connect?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
  }

  export type RouteAssignmentCreateNestedOneWithoutPickupInput = {
    create?: XOR<RouteAssignmentCreateWithoutPickupInput, RouteAssignmentUncheckedCreateWithoutPickupInput>
    connectOrCreate?: RouteAssignmentCreateOrConnectWithoutPickupInput
    connect?: RouteAssignmentWhereUniqueInput
  }

  export type ComplaintUncheckedCreateNestedManyWithoutPickupInput = {
    create?: XOR<ComplaintCreateWithoutPickupInput, ComplaintUncheckedCreateWithoutPickupInput> | ComplaintCreateWithoutPickupInput[] | ComplaintUncheckedCreateWithoutPickupInput[]
    connectOrCreate?: ComplaintCreateOrConnectWithoutPickupInput | ComplaintCreateOrConnectWithoutPickupInput[]
    createMany?: ComplaintCreateManyPickupInputEnvelope
    connect?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
  }

  export type RouteAssignmentUncheckedCreateNestedOneWithoutPickupInput = {
    create?: XOR<RouteAssignmentCreateWithoutPickupInput, RouteAssignmentUncheckedCreateWithoutPickupInput>
    connectOrCreate?: RouteAssignmentCreateOrConnectWithoutPickupInput
    connect?: RouteAssignmentWhereUniqueInput
  }

  export type EnumPickupStatusFieldUpdateOperationsInput = {
    set?: $Enums.PickupStatus
  }

  export type ServiceRequestUpdateOneRequiredWithoutPickupsNestedInput = {
    create?: XOR<ServiceRequestCreateWithoutPickupsInput, ServiceRequestUncheckedCreateWithoutPickupsInput>
    connectOrCreate?: ServiceRequestCreateOrConnectWithoutPickupsInput
    upsert?: ServiceRequestUpsertWithoutPickupsInput
    connect?: ServiceRequestWhereUniqueInput
    update?: XOR<XOR<ServiceRequestUpdateToOneWithWhereWithoutPickupsInput, ServiceRequestUpdateWithoutPickupsInput>, ServiceRequestUncheckedUpdateWithoutPickupsInput>
  }

  export type RouteUpdateOneWithoutPickupsNestedInput = {
    create?: XOR<RouteCreateWithoutPickupsInput, RouteUncheckedCreateWithoutPickupsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutPickupsInput
    upsert?: RouteUpsertWithoutPickupsInput
    disconnect?: RouteWhereInput | boolean
    delete?: RouteWhereInput | boolean
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutPickupsInput, RouteUpdateWithoutPickupsInput>, RouteUncheckedUpdateWithoutPickupsInput>
  }

  export type ComplaintUpdateManyWithoutPickupNestedInput = {
    create?: XOR<ComplaintCreateWithoutPickupInput, ComplaintUncheckedCreateWithoutPickupInput> | ComplaintCreateWithoutPickupInput[] | ComplaintUncheckedCreateWithoutPickupInput[]
    connectOrCreate?: ComplaintCreateOrConnectWithoutPickupInput | ComplaintCreateOrConnectWithoutPickupInput[]
    upsert?: ComplaintUpsertWithWhereUniqueWithoutPickupInput | ComplaintUpsertWithWhereUniqueWithoutPickupInput[]
    createMany?: ComplaintCreateManyPickupInputEnvelope
    set?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    disconnect?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    delete?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    connect?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    update?: ComplaintUpdateWithWhereUniqueWithoutPickupInput | ComplaintUpdateWithWhereUniqueWithoutPickupInput[]
    updateMany?: ComplaintUpdateManyWithWhereWithoutPickupInput | ComplaintUpdateManyWithWhereWithoutPickupInput[]
    deleteMany?: ComplaintScalarWhereInput | ComplaintScalarWhereInput[]
  }

  export type RouteAssignmentUpdateOneWithoutPickupNestedInput = {
    create?: XOR<RouteAssignmentCreateWithoutPickupInput, RouteAssignmentUncheckedCreateWithoutPickupInput>
    connectOrCreate?: RouteAssignmentCreateOrConnectWithoutPickupInput
    upsert?: RouteAssignmentUpsertWithoutPickupInput
    disconnect?: RouteAssignmentWhereInput | boolean
    delete?: RouteAssignmentWhereInput | boolean
    connect?: RouteAssignmentWhereUniqueInput
    update?: XOR<XOR<RouteAssignmentUpdateToOneWithWhereWithoutPickupInput, RouteAssignmentUpdateWithoutPickupInput>, RouteAssignmentUncheckedUpdateWithoutPickupInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ComplaintUncheckedUpdateManyWithoutPickupNestedInput = {
    create?: XOR<ComplaintCreateWithoutPickupInput, ComplaintUncheckedCreateWithoutPickupInput> | ComplaintCreateWithoutPickupInput[] | ComplaintUncheckedCreateWithoutPickupInput[]
    connectOrCreate?: ComplaintCreateOrConnectWithoutPickupInput | ComplaintCreateOrConnectWithoutPickupInput[]
    upsert?: ComplaintUpsertWithWhereUniqueWithoutPickupInput | ComplaintUpsertWithWhereUniqueWithoutPickupInput[]
    createMany?: ComplaintCreateManyPickupInputEnvelope
    set?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    disconnect?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    delete?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    connect?: ComplaintWhereUniqueInput | ComplaintWhereUniqueInput[]
    update?: ComplaintUpdateWithWhereUniqueWithoutPickupInput | ComplaintUpdateWithWhereUniqueWithoutPickupInput[]
    updateMany?: ComplaintUpdateManyWithWhereWithoutPickupInput | ComplaintUpdateManyWithWhereWithoutPickupInput[]
    deleteMany?: ComplaintScalarWhereInput | ComplaintScalarWhereInput[]
  }

  export type RouteAssignmentUncheckedUpdateOneWithoutPickupNestedInput = {
    create?: XOR<RouteAssignmentCreateWithoutPickupInput, RouteAssignmentUncheckedCreateWithoutPickupInput>
    connectOrCreate?: RouteAssignmentCreateOrConnectWithoutPickupInput
    upsert?: RouteAssignmentUpsertWithoutPickupInput
    disconnect?: RouteAssignmentWhereInput | boolean
    delete?: RouteAssignmentWhereInput | boolean
    connect?: RouteAssignmentWhereUniqueInput
    update?: XOR<XOR<RouteAssignmentUpdateToOneWithWhereWithoutPickupInput, RouteAssignmentUpdateWithoutPickupInput>, RouteAssignmentUncheckedUpdateWithoutPickupInput>
  }

  export type PickupCreateNestedManyWithoutRouteInput = {
    create?: XOR<PickupCreateWithoutRouteInput, PickupUncheckedCreateWithoutRouteInput> | PickupCreateWithoutRouteInput[] | PickupUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: PickupCreateOrConnectWithoutRouteInput | PickupCreateOrConnectWithoutRouteInput[]
    createMany?: PickupCreateManyRouteInputEnvelope
    connect?: PickupWhereUniqueInput | PickupWhereUniqueInput[]
  }

  export type RouteAssignmentCreateNestedOneWithoutRouteInput = {
    create?: XOR<RouteAssignmentCreateWithoutRouteInput, RouteAssignmentUncheckedCreateWithoutRouteInput>
    connectOrCreate?: RouteAssignmentCreateOrConnectWithoutRouteInput
    connect?: RouteAssignmentWhereUniqueInput
  }

  export type PickupUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<PickupCreateWithoutRouteInput, PickupUncheckedCreateWithoutRouteInput> | PickupCreateWithoutRouteInput[] | PickupUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: PickupCreateOrConnectWithoutRouteInput | PickupCreateOrConnectWithoutRouteInput[]
    createMany?: PickupCreateManyRouteInputEnvelope
    connect?: PickupWhereUniqueInput | PickupWhereUniqueInput[]
  }

  export type RouteAssignmentUncheckedCreateNestedOneWithoutRouteInput = {
    create?: XOR<RouteAssignmentCreateWithoutRouteInput, RouteAssignmentUncheckedCreateWithoutRouteInput>
    connectOrCreate?: RouteAssignmentCreateOrConnectWithoutRouteInput
    connect?: RouteAssignmentWhereUniqueInput
  }

  export type PickupUpdateManyWithoutRouteNestedInput = {
    create?: XOR<PickupCreateWithoutRouteInput, PickupUncheckedCreateWithoutRouteInput> | PickupCreateWithoutRouteInput[] | PickupUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: PickupCreateOrConnectWithoutRouteInput | PickupCreateOrConnectWithoutRouteInput[]
    upsert?: PickupUpsertWithWhereUniqueWithoutRouteInput | PickupUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: PickupCreateManyRouteInputEnvelope
    set?: PickupWhereUniqueInput | PickupWhereUniqueInput[]
    disconnect?: PickupWhereUniqueInput | PickupWhereUniqueInput[]
    delete?: PickupWhereUniqueInput | PickupWhereUniqueInput[]
    connect?: PickupWhereUniqueInput | PickupWhereUniqueInput[]
    update?: PickupUpdateWithWhereUniqueWithoutRouteInput | PickupUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: PickupUpdateManyWithWhereWithoutRouteInput | PickupUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: PickupScalarWhereInput | PickupScalarWhereInput[]
  }

  export type RouteAssignmentUpdateOneWithoutRouteNestedInput = {
    create?: XOR<RouteAssignmentCreateWithoutRouteInput, RouteAssignmentUncheckedCreateWithoutRouteInput>
    connectOrCreate?: RouteAssignmentCreateOrConnectWithoutRouteInput
    upsert?: RouteAssignmentUpsertWithoutRouteInput
    disconnect?: RouteAssignmentWhereInput | boolean
    delete?: RouteAssignmentWhereInput | boolean
    connect?: RouteAssignmentWhereUniqueInput
    update?: XOR<XOR<RouteAssignmentUpdateToOneWithWhereWithoutRouteInput, RouteAssignmentUpdateWithoutRouteInput>, RouteAssignmentUncheckedUpdateWithoutRouteInput>
  }

  export type PickupUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<PickupCreateWithoutRouteInput, PickupUncheckedCreateWithoutRouteInput> | PickupCreateWithoutRouteInput[] | PickupUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: PickupCreateOrConnectWithoutRouteInput | PickupCreateOrConnectWithoutRouteInput[]
    upsert?: PickupUpsertWithWhereUniqueWithoutRouteInput | PickupUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: PickupCreateManyRouteInputEnvelope
    set?: PickupWhereUniqueInput | PickupWhereUniqueInput[]
    disconnect?: PickupWhereUniqueInput | PickupWhereUniqueInput[]
    delete?: PickupWhereUniqueInput | PickupWhereUniqueInput[]
    connect?: PickupWhereUniqueInput | PickupWhereUniqueInput[]
    update?: PickupUpdateWithWhereUniqueWithoutRouteInput | PickupUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: PickupUpdateManyWithWhereWithoutRouteInput | PickupUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: PickupScalarWhereInput | PickupScalarWhereInput[]
  }

  export type RouteAssignmentUncheckedUpdateOneWithoutRouteNestedInput = {
    create?: XOR<RouteAssignmentCreateWithoutRouteInput, RouteAssignmentUncheckedCreateWithoutRouteInput>
    connectOrCreate?: RouteAssignmentCreateOrConnectWithoutRouteInput
    upsert?: RouteAssignmentUpsertWithoutRouteInput
    disconnect?: RouteAssignmentWhereInput | boolean
    delete?: RouteAssignmentWhereInput | boolean
    connect?: RouteAssignmentWhereUniqueInput
    update?: XOR<XOR<RouteAssignmentUpdateToOneWithWhereWithoutRouteInput, RouteAssignmentUpdateWithoutRouteInput>, RouteAssignmentUncheckedUpdateWithoutRouteInput>
  }

  export type RouteCreateNestedOneWithoutRouteAssignmentInput = {
    create?: XOR<RouteCreateWithoutRouteAssignmentInput, RouteUncheckedCreateWithoutRouteAssignmentInput>
    connectOrCreate?: RouteCreateOrConnectWithoutRouteAssignmentInput
    connect?: RouteWhereUniqueInput
  }

  export type PickupCreateNestedOneWithoutRouteAssignmentInput = {
    create?: XOR<PickupCreateWithoutRouteAssignmentInput, PickupUncheckedCreateWithoutRouteAssignmentInput>
    connectOrCreate?: PickupCreateOrConnectWithoutRouteAssignmentInput
    connect?: PickupWhereUniqueInput
  }

  export type RouteUpdateOneRequiredWithoutRouteAssignmentNestedInput = {
    create?: XOR<RouteCreateWithoutRouteAssignmentInput, RouteUncheckedCreateWithoutRouteAssignmentInput>
    connectOrCreate?: RouteCreateOrConnectWithoutRouteAssignmentInput
    upsert?: RouteUpsertWithoutRouteAssignmentInput
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutRouteAssignmentInput, RouteUpdateWithoutRouteAssignmentInput>, RouteUncheckedUpdateWithoutRouteAssignmentInput>
  }

  export type PickupUpdateOneRequiredWithoutRouteAssignmentNestedInput = {
    create?: XOR<PickupCreateWithoutRouteAssignmentInput, PickupUncheckedCreateWithoutRouteAssignmentInput>
    connectOrCreate?: PickupCreateOrConnectWithoutRouteAssignmentInput
    upsert?: PickupUpsertWithoutRouteAssignmentInput
    connect?: PickupWhereUniqueInput
    update?: XOR<XOR<PickupUpdateToOneWithWhereWithoutRouteAssignmentInput, PickupUpdateWithoutRouteAssignmentInput>, PickupUncheckedUpdateWithoutRouteAssignmentInput>
  }

  export type UserCreateNestedOneWithoutComplaintsInput = {
    create?: XOR<UserCreateWithoutComplaintsInput, UserUncheckedCreateWithoutComplaintsInput>
    connectOrCreate?: UserCreateOrConnectWithoutComplaintsInput
    connect?: UserWhereUniqueInput
  }

  export type PickupCreateNestedOneWithoutComplaintsInput = {
    create?: XOR<PickupCreateWithoutComplaintsInput, PickupUncheckedCreateWithoutComplaintsInput>
    connectOrCreate?: PickupCreateOrConnectWithoutComplaintsInput
    connect?: PickupWhereUniqueInput
  }

  export type EnumComplaintStatusFieldUpdateOperationsInput = {
    set?: $Enums.ComplaintStatus
  }

  export type UserUpdateOneRequiredWithoutComplaintsNestedInput = {
    create?: XOR<UserCreateWithoutComplaintsInput, UserUncheckedCreateWithoutComplaintsInput>
    connectOrCreate?: UserCreateOrConnectWithoutComplaintsInput
    upsert?: UserUpsertWithoutComplaintsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutComplaintsInput, UserUpdateWithoutComplaintsInput>, UserUncheckedUpdateWithoutComplaintsInput>
  }

  export type PickupUpdateOneWithoutComplaintsNestedInput = {
    create?: XOR<PickupCreateWithoutComplaintsInput, PickupUncheckedCreateWithoutComplaintsInput>
    connectOrCreate?: PickupCreateOrConnectWithoutComplaintsInput
    upsert?: PickupUpsertWithoutComplaintsInput
    disconnect?: PickupWhereInput | boolean
    delete?: PickupWhereInput | boolean
    connect?: PickupWhereUniqueInput
    update?: XOR<XOR<PickupUpdateToOneWithWhereWithoutComplaintsInput, PickupUpdateWithoutComplaintsInput>, PickupUncheckedUpdateWithoutComplaintsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserCreateNestedOneWithoutWaste_logsInput = {
    create?: XOR<UserCreateWithoutWaste_logsInput, UserUncheckedCreateWithoutWaste_logsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWaste_logsInput
    connect?: UserWhereUniqueInput
  }

  export type WasteTypeCreateNestedOneWithoutWaste_logsInput = {
    create?: XOR<WasteTypeCreateWithoutWaste_logsInput, WasteTypeUncheckedCreateWithoutWaste_logsInput>
    connectOrCreate?: WasteTypeCreateOrConnectWithoutWaste_logsInput
    connect?: WasteTypeWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutWaste_logsNestedInput = {
    create?: XOR<UserCreateWithoutWaste_logsInput, UserUncheckedCreateWithoutWaste_logsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWaste_logsInput
    upsert?: UserUpsertWithoutWaste_logsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWaste_logsInput, UserUpdateWithoutWaste_logsInput>, UserUncheckedUpdateWithoutWaste_logsInput>
  }

  export type WasteTypeUpdateOneRequiredWithoutWaste_logsNestedInput = {
    create?: XOR<WasteTypeCreateWithoutWaste_logsInput, WasteTypeUncheckedCreateWithoutWaste_logsInput>
    connectOrCreate?: WasteTypeCreateOrConnectWithoutWaste_logsInput
    upsert?: WasteTypeUpsertWithoutWaste_logsInput
    connect?: WasteTypeWhereUniqueInput
    update?: XOR<XOR<WasteTypeUpdateToOneWithWhereWithoutWaste_logsInput, WasteTypeUpdateWithoutWaste_logsInput>, WasteTypeUncheckedUpdateWithoutWaste_logsInput>
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type NestedEnumPickupStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PickupStatus | EnumPickupStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PickupStatus[] | ListEnumPickupStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PickupStatus[] | ListEnumPickupStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPickupStatusFilter<$PrismaModel> | $Enums.PickupStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPickupStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PickupStatus | EnumPickupStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PickupStatus[] | ListEnumPickupStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PickupStatus[] | ListEnumPickupStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPickupStatusWithAggregatesFilter<$PrismaModel> | $Enums.PickupStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPickupStatusFilter<$PrismaModel>
    _max?: NestedEnumPickupStatusFilter<$PrismaModel>
  }

  export type NestedEnumComplaintStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ComplaintStatus | EnumComplaintStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ComplaintStatus[] | ListEnumComplaintStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ComplaintStatus[] | ListEnumComplaintStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumComplaintStatusFilter<$PrismaModel> | $Enums.ComplaintStatus
  }

  export type NestedEnumComplaintStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ComplaintStatus | EnumComplaintStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ComplaintStatus[] | ListEnumComplaintStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ComplaintStatus[] | ListEnumComplaintStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumComplaintStatusWithAggregatesFilter<$PrismaModel> | $Enums.ComplaintStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumComplaintStatusFilter<$PrismaModel>
    _max?: NestedEnumComplaintStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type ServiceRequestCreateWithoutUserInput = {
    requested_date: Date | string
    status?: $Enums.RequestStatus
    waste_type: WasteTypeCreateNestedOneWithoutRequestsInput
    pickups?: PickupCreateNestedManyWithoutService_requestInput
  }

  export type ServiceRequestUncheckedCreateWithoutUserInput = {
    request_id?: number
    waste_type_id: number
    requested_date: Date | string
    status?: $Enums.RequestStatus
    pickups?: PickupUncheckedCreateNestedManyWithoutService_requestInput
  }

  export type ServiceRequestCreateOrConnectWithoutUserInput = {
    where: ServiceRequestWhereUniqueInput
    create: XOR<ServiceRequestCreateWithoutUserInput, ServiceRequestUncheckedCreateWithoutUserInput>
  }

  export type ServiceRequestCreateManyUserInputEnvelope = {
    data: ServiceRequestCreateManyUserInput | ServiceRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ComplaintCreateWithoutUserInput = {
    description: string
    status?: $Enums.ComplaintStatus
    created_at?: Date | string
    updated_at?: Date | string
    pickup?: PickupCreateNestedOneWithoutComplaintsInput
  }

  export type ComplaintUncheckedCreateWithoutUserInput = {
    complaint_id?: number
    pickup_id?: number | null
    description: string
    status?: $Enums.ComplaintStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ComplaintCreateOrConnectWithoutUserInput = {
    where: ComplaintWhereUniqueInput
    create: XOR<ComplaintCreateWithoutUserInput, ComplaintUncheckedCreateWithoutUserInput>
  }

  export type ComplaintCreateManyUserInputEnvelope = {
    data: ComplaintCreateManyUserInput | ComplaintCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    title: string
    message: string
    sent_at?: Date | string
    is_read?: boolean
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    notification_id?: number
    title: string
    message: string
    sent_at?: Date | string
    is_read?: boolean
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WasteLogCreateWithoutUserInput = {
    quantity_kg: Decimal | DecimalJsLike | number | string
    log_date: Date | string
    created_at?: Date | string
    waste_type: WasteTypeCreateNestedOneWithoutWaste_logsInput
  }

  export type WasteLogUncheckedCreateWithoutUserInput = {
    log_id?: number
    waste_type_id: number
    quantity_kg: Decimal | DecimalJsLike | number | string
    log_date: Date | string
    created_at?: Date | string
  }

  export type WasteLogCreateOrConnectWithoutUserInput = {
    where: WasteLogWhereUniqueInput
    create: XOR<WasteLogCreateWithoutUserInput, WasteLogUncheckedCreateWithoutUserInput>
  }

  export type WasteLogCreateManyUserInputEnvelope = {
    data: WasteLogCreateManyUserInput | WasteLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ServiceRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: ServiceRequestWhereUniqueInput
    update: XOR<ServiceRequestUpdateWithoutUserInput, ServiceRequestUncheckedUpdateWithoutUserInput>
    create: XOR<ServiceRequestCreateWithoutUserInput, ServiceRequestUncheckedCreateWithoutUserInput>
  }

  export type ServiceRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: ServiceRequestWhereUniqueInput
    data: XOR<ServiceRequestUpdateWithoutUserInput, ServiceRequestUncheckedUpdateWithoutUserInput>
  }

  export type ServiceRequestUpdateManyWithWhereWithoutUserInput = {
    where: ServiceRequestScalarWhereInput
    data: XOR<ServiceRequestUpdateManyMutationInput, ServiceRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type ServiceRequestScalarWhereInput = {
    AND?: ServiceRequestScalarWhereInput | ServiceRequestScalarWhereInput[]
    OR?: ServiceRequestScalarWhereInput[]
    NOT?: ServiceRequestScalarWhereInput | ServiceRequestScalarWhereInput[]
    request_id?: IntFilter<"ServiceRequest"> | number
    user_id?: IntFilter<"ServiceRequest"> | number
    waste_type_id?: IntFilter<"ServiceRequest"> | number
    requested_date?: DateTimeFilter<"ServiceRequest"> | Date | string
    status?: EnumRequestStatusFilter<"ServiceRequest"> | $Enums.RequestStatus
  }

  export type ComplaintUpsertWithWhereUniqueWithoutUserInput = {
    where: ComplaintWhereUniqueInput
    update: XOR<ComplaintUpdateWithoutUserInput, ComplaintUncheckedUpdateWithoutUserInput>
    create: XOR<ComplaintCreateWithoutUserInput, ComplaintUncheckedCreateWithoutUserInput>
  }

  export type ComplaintUpdateWithWhereUniqueWithoutUserInput = {
    where: ComplaintWhereUniqueInput
    data: XOR<ComplaintUpdateWithoutUserInput, ComplaintUncheckedUpdateWithoutUserInput>
  }

  export type ComplaintUpdateManyWithWhereWithoutUserInput = {
    where: ComplaintScalarWhereInput
    data: XOR<ComplaintUpdateManyMutationInput, ComplaintUncheckedUpdateManyWithoutUserInput>
  }

  export type ComplaintScalarWhereInput = {
    AND?: ComplaintScalarWhereInput | ComplaintScalarWhereInput[]
    OR?: ComplaintScalarWhereInput[]
    NOT?: ComplaintScalarWhereInput | ComplaintScalarWhereInput[]
    complaint_id?: IntFilter<"Complaint"> | number
    user_id?: IntFilter<"Complaint"> | number
    pickup_id?: IntNullableFilter<"Complaint"> | number | null
    description?: StringFilter<"Complaint"> | string
    status?: EnumComplaintStatusFilter<"Complaint"> | $Enums.ComplaintStatus
    created_at?: DateTimeFilter<"Complaint"> | Date | string
    updated_at?: DateTimeFilter<"Complaint"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    notification_id?: IntFilter<"Notification"> | number
    user_id?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    sent_at?: DateTimeFilter<"Notification"> | Date | string
    is_read?: BoolFilter<"Notification"> | boolean
  }

  export type WasteLogUpsertWithWhereUniqueWithoutUserInput = {
    where: WasteLogWhereUniqueInput
    update: XOR<WasteLogUpdateWithoutUserInput, WasteLogUncheckedUpdateWithoutUserInput>
    create: XOR<WasteLogCreateWithoutUserInput, WasteLogUncheckedCreateWithoutUserInput>
  }

  export type WasteLogUpdateWithWhereUniqueWithoutUserInput = {
    where: WasteLogWhereUniqueInput
    data: XOR<WasteLogUpdateWithoutUserInput, WasteLogUncheckedUpdateWithoutUserInput>
  }

  export type WasteLogUpdateManyWithWhereWithoutUserInput = {
    where: WasteLogScalarWhereInput
    data: XOR<WasteLogUpdateManyMutationInput, WasteLogUncheckedUpdateManyWithoutUserInput>
  }

  export type WasteLogScalarWhereInput = {
    AND?: WasteLogScalarWhereInput | WasteLogScalarWhereInput[]
    OR?: WasteLogScalarWhereInput[]
    NOT?: WasteLogScalarWhereInput | WasteLogScalarWhereInput[]
    log_id?: IntFilter<"WasteLog"> | number
    user_id?: IntFilter<"WasteLog"> | number
    waste_type_id?: IntFilter<"WasteLog"> | number
    quantity_kg?: DecimalFilter<"WasteLog"> | Decimal | DecimalJsLike | number | string
    log_date?: DateTimeFilter<"WasteLog"> | Date | string
    created_at?: DateTimeFilter<"WasteLog"> | Date | string
  }

  export type ServiceRequestCreateWithoutWaste_typeInput = {
    requested_date: Date | string
    status?: $Enums.RequestStatus
    user: UserCreateNestedOneWithoutRequestsInput
    pickups?: PickupCreateNestedManyWithoutService_requestInput
  }

  export type ServiceRequestUncheckedCreateWithoutWaste_typeInput = {
    request_id?: number
    user_id: number
    requested_date: Date | string
    status?: $Enums.RequestStatus
    pickups?: PickupUncheckedCreateNestedManyWithoutService_requestInput
  }

  export type ServiceRequestCreateOrConnectWithoutWaste_typeInput = {
    where: ServiceRequestWhereUniqueInput
    create: XOR<ServiceRequestCreateWithoutWaste_typeInput, ServiceRequestUncheckedCreateWithoutWaste_typeInput>
  }

  export type ServiceRequestCreateManyWaste_typeInputEnvelope = {
    data: ServiceRequestCreateManyWaste_typeInput | ServiceRequestCreateManyWaste_typeInput[]
    skipDuplicates?: boolean
  }

  export type WasteLogCreateWithoutWaste_typeInput = {
    quantity_kg: Decimal | DecimalJsLike | number | string
    log_date: Date | string
    created_at?: Date | string
    user: UserCreateNestedOneWithoutWaste_logsInput
  }

  export type WasteLogUncheckedCreateWithoutWaste_typeInput = {
    log_id?: number
    user_id: number
    quantity_kg: Decimal | DecimalJsLike | number | string
    log_date: Date | string
    created_at?: Date | string
  }

  export type WasteLogCreateOrConnectWithoutWaste_typeInput = {
    where: WasteLogWhereUniqueInput
    create: XOR<WasteLogCreateWithoutWaste_typeInput, WasteLogUncheckedCreateWithoutWaste_typeInput>
  }

  export type WasteLogCreateManyWaste_typeInputEnvelope = {
    data: WasteLogCreateManyWaste_typeInput | WasteLogCreateManyWaste_typeInput[]
    skipDuplicates?: boolean
  }

  export type ServiceRequestUpsertWithWhereUniqueWithoutWaste_typeInput = {
    where: ServiceRequestWhereUniqueInput
    update: XOR<ServiceRequestUpdateWithoutWaste_typeInput, ServiceRequestUncheckedUpdateWithoutWaste_typeInput>
    create: XOR<ServiceRequestCreateWithoutWaste_typeInput, ServiceRequestUncheckedCreateWithoutWaste_typeInput>
  }

  export type ServiceRequestUpdateWithWhereUniqueWithoutWaste_typeInput = {
    where: ServiceRequestWhereUniqueInput
    data: XOR<ServiceRequestUpdateWithoutWaste_typeInput, ServiceRequestUncheckedUpdateWithoutWaste_typeInput>
  }

  export type ServiceRequestUpdateManyWithWhereWithoutWaste_typeInput = {
    where: ServiceRequestScalarWhereInput
    data: XOR<ServiceRequestUpdateManyMutationInput, ServiceRequestUncheckedUpdateManyWithoutWaste_typeInput>
  }

  export type WasteLogUpsertWithWhereUniqueWithoutWaste_typeInput = {
    where: WasteLogWhereUniqueInput
    update: XOR<WasteLogUpdateWithoutWaste_typeInput, WasteLogUncheckedUpdateWithoutWaste_typeInput>
    create: XOR<WasteLogCreateWithoutWaste_typeInput, WasteLogUncheckedCreateWithoutWaste_typeInput>
  }

  export type WasteLogUpdateWithWhereUniqueWithoutWaste_typeInput = {
    where: WasteLogWhereUniqueInput
    data: XOR<WasteLogUpdateWithoutWaste_typeInput, WasteLogUncheckedUpdateWithoutWaste_typeInput>
  }

  export type WasteLogUpdateManyWithWhereWithoutWaste_typeInput = {
    where: WasteLogScalarWhereInput
    data: XOR<WasteLogUpdateManyMutationInput, WasteLogUncheckedUpdateManyWithoutWaste_typeInput>
  }

  export type UserCreateWithoutRequestsInput = {
    role_id: number
    barangay_id: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number: string
    address: string
    created_at?: Date | string
    role?: UserCreateroleInput | string[]
    complaints?: ComplaintCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    waste_logs?: WasteLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRequestsInput = {
    user_id?: number
    role_id: number
    barangay_id: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number: string
    address: string
    created_at?: Date | string
    role?: UserCreateroleInput | string[]
    complaints?: ComplaintUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    waste_logs?: WasteLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
  }

  export type WasteTypeCreateWithoutRequestsInput = {
    name: string
    description?: string | null
    waste_logs?: WasteLogCreateNestedManyWithoutWaste_typeInput
  }

  export type WasteTypeUncheckedCreateWithoutRequestsInput = {
    waste_type_id?: number
    name: string
    description?: string | null
    waste_logs?: WasteLogUncheckedCreateNestedManyWithoutWaste_typeInput
  }

  export type WasteTypeCreateOrConnectWithoutRequestsInput = {
    where: WasteTypeWhereUniqueInput
    create: XOR<WasteTypeCreateWithoutRequestsInput, WasteTypeUncheckedCreateWithoutRequestsInput>
  }

  export type PickupCreateWithoutService_requestInput = {
    scheduled_date: Date | string
    status?: $Enums.PickupStatus
    updated_at?: Date | string
    route?: RouteCreateNestedOneWithoutPickupsInput
    complaints?: ComplaintCreateNestedManyWithoutPickupInput
    routeAssignment?: RouteAssignmentCreateNestedOneWithoutPickupInput
  }

  export type PickupUncheckedCreateWithoutService_requestInput = {
    pickup_id?: number
    scheduled_date: Date | string
    route_id?: number | null
    status?: $Enums.PickupStatus
    updated_at?: Date | string
    complaints?: ComplaintUncheckedCreateNestedManyWithoutPickupInput
    routeAssignment?: RouteAssignmentUncheckedCreateNestedOneWithoutPickupInput
  }

  export type PickupCreateOrConnectWithoutService_requestInput = {
    where: PickupWhereUniqueInput
    create: XOR<PickupCreateWithoutService_requestInput, PickupUncheckedCreateWithoutService_requestInput>
  }

  export type PickupCreateManyService_requestInputEnvelope = {
    data: PickupCreateManyService_requestInput | PickupCreateManyService_requestInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRequestsInput = {
    update: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
    create: XOR<UserCreateWithoutRequestsInput, UserUncheckedCreateWithoutRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRequestsInput, UserUncheckedUpdateWithoutRequestsInput>
  }

  export type UserUpdateWithoutRequestsInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    barangay_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UserUpdateroleInput | string[]
    complaints?: ComplaintUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    waste_logs?: WasteLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRequestsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    barangay_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UserUpdateroleInput | string[]
    complaints?: ComplaintUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    waste_logs?: WasteLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WasteTypeUpsertWithoutRequestsInput = {
    update: XOR<WasteTypeUpdateWithoutRequestsInput, WasteTypeUncheckedUpdateWithoutRequestsInput>
    create: XOR<WasteTypeCreateWithoutRequestsInput, WasteTypeUncheckedCreateWithoutRequestsInput>
    where?: WasteTypeWhereInput
  }

  export type WasteTypeUpdateToOneWithWhereWithoutRequestsInput = {
    where?: WasteTypeWhereInput
    data: XOR<WasteTypeUpdateWithoutRequestsInput, WasteTypeUncheckedUpdateWithoutRequestsInput>
  }

  export type WasteTypeUpdateWithoutRequestsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    waste_logs?: WasteLogUpdateManyWithoutWaste_typeNestedInput
  }

  export type WasteTypeUncheckedUpdateWithoutRequestsInput = {
    waste_type_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    waste_logs?: WasteLogUncheckedUpdateManyWithoutWaste_typeNestedInput
  }

  export type PickupUpsertWithWhereUniqueWithoutService_requestInput = {
    where: PickupWhereUniqueInput
    update: XOR<PickupUpdateWithoutService_requestInput, PickupUncheckedUpdateWithoutService_requestInput>
    create: XOR<PickupCreateWithoutService_requestInput, PickupUncheckedCreateWithoutService_requestInput>
  }

  export type PickupUpdateWithWhereUniqueWithoutService_requestInput = {
    where: PickupWhereUniqueInput
    data: XOR<PickupUpdateWithoutService_requestInput, PickupUncheckedUpdateWithoutService_requestInput>
  }

  export type PickupUpdateManyWithWhereWithoutService_requestInput = {
    where: PickupScalarWhereInput
    data: XOR<PickupUpdateManyMutationInput, PickupUncheckedUpdateManyWithoutService_requestInput>
  }

  export type PickupScalarWhereInput = {
    AND?: PickupScalarWhereInput | PickupScalarWhereInput[]
    OR?: PickupScalarWhereInput[]
    NOT?: PickupScalarWhereInput | PickupScalarWhereInput[]
    pickup_id?: IntFilter<"Pickup"> | number
    request_id?: IntFilter<"Pickup"> | number
    scheduled_date?: DateTimeFilter<"Pickup"> | Date | string
    route_id?: IntNullableFilter<"Pickup"> | number | null
    status?: EnumPickupStatusFilter<"Pickup"> | $Enums.PickupStatus
    updated_at?: DateTimeFilter<"Pickup"> | Date | string
  }

  export type ServiceRequestCreateWithoutPickupsInput = {
    requested_date: Date | string
    status?: $Enums.RequestStatus
    user: UserCreateNestedOneWithoutRequestsInput
    waste_type: WasteTypeCreateNestedOneWithoutRequestsInput
  }

  export type ServiceRequestUncheckedCreateWithoutPickupsInput = {
    request_id?: number
    user_id: number
    waste_type_id: number
    requested_date: Date | string
    status?: $Enums.RequestStatus
  }

  export type ServiceRequestCreateOrConnectWithoutPickupsInput = {
    where: ServiceRequestWhereUniqueInput
    create: XOR<ServiceRequestCreateWithoutPickupsInput, ServiceRequestUncheckedCreateWithoutPickupsInput>
  }

  export type RouteCreateWithoutPickupsInput = {
    name: string
    description?: string | null
    created_at?: Date | string
    routeAssignment?: RouteAssignmentCreateNestedOneWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutPickupsInput = {
    route_id?: number
    name: string
    description?: string | null
    created_at?: Date | string
    routeAssignment?: RouteAssignmentUncheckedCreateNestedOneWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutPickupsInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutPickupsInput, RouteUncheckedCreateWithoutPickupsInput>
  }

  export type ComplaintCreateWithoutPickupInput = {
    description: string
    status?: $Enums.ComplaintStatus
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutComplaintsInput
  }

  export type ComplaintUncheckedCreateWithoutPickupInput = {
    complaint_id?: number
    user_id: number
    description: string
    status?: $Enums.ComplaintStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ComplaintCreateOrConnectWithoutPickupInput = {
    where: ComplaintWhereUniqueInput
    create: XOR<ComplaintCreateWithoutPickupInput, ComplaintUncheckedCreateWithoutPickupInput>
  }

  export type ComplaintCreateManyPickupInputEnvelope = {
    data: ComplaintCreateManyPickupInput | ComplaintCreateManyPickupInput[]
    skipDuplicates?: boolean
  }

  export type RouteAssignmentCreateWithoutPickupInput = {
    sequence_no: number
    route: RouteCreateNestedOneWithoutRouteAssignmentInput
  }

  export type RouteAssignmentUncheckedCreateWithoutPickupInput = {
    assignment_id?: number
    route_id: number
    sequence_no: number
  }

  export type RouteAssignmentCreateOrConnectWithoutPickupInput = {
    where: RouteAssignmentWhereUniqueInput
    create: XOR<RouteAssignmentCreateWithoutPickupInput, RouteAssignmentUncheckedCreateWithoutPickupInput>
  }

  export type ServiceRequestUpsertWithoutPickupsInput = {
    update: XOR<ServiceRequestUpdateWithoutPickupsInput, ServiceRequestUncheckedUpdateWithoutPickupsInput>
    create: XOR<ServiceRequestCreateWithoutPickupsInput, ServiceRequestUncheckedCreateWithoutPickupsInput>
    where?: ServiceRequestWhereInput
  }

  export type ServiceRequestUpdateToOneWithWhereWithoutPickupsInput = {
    where?: ServiceRequestWhereInput
    data: XOR<ServiceRequestUpdateWithoutPickupsInput, ServiceRequestUncheckedUpdateWithoutPickupsInput>
  }

  export type ServiceRequestUpdateWithoutPickupsInput = {
    requested_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
    waste_type?: WasteTypeUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type ServiceRequestUncheckedUpdateWithoutPickupsInput = {
    request_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    waste_type_id?: IntFieldUpdateOperationsInput | number
    requested_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
  }

  export type RouteUpsertWithoutPickupsInput = {
    update: XOR<RouteUpdateWithoutPickupsInput, RouteUncheckedUpdateWithoutPickupsInput>
    create: XOR<RouteCreateWithoutPickupsInput, RouteUncheckedCreateWithoutPickupsInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutPickupsInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutPickupsInput, RouteUncheckedUpdateWithoutPickupsInput>
  }

  export type RouteUpdateWithoutPickupsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    routeAssignment?: RouteAssignmentUpdateOneWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutPickupsInput = {
    route_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    routeAssignment?: RouteAssignmentUncheckedUpdateOneWithoutRouteNestedInput
  }

  export type ComplaintUpsertWithWhereUniqueWithoutPickupInput = {
    where: ComplaintWhereUniqueInput
    update: XOR<ComplaintUpdateWithoutPickupInput, ComplaintUncheckedUpdateWithoutPickupInput>
    create: XOR<ComplaintCreateWithoutPickupInput, ComplaintUncheckedCreateWithoutPickupInput>
  }

  export type ComplaintUpdateWithWhereUniqueWithoutPickupInput = {
    where: ComplaintWhereUniqueInput
    data: XOR<ComplaintUpdateWithoutPickupInput, ComplaintUncheckedUpdateWithoutPickupInput>
  }

  export type ComplaintUpdateManyWithWhereWithoutPickupInput = {
    where: ComplaintScalarWhereInput
    data: XOR<ComplaintUpdateManyMutationInput, ComplaintUncheckedUpdateManyWithoutPickupInput>
  }

  export type RouteAssignmentUpsertWithoutPickupInput = {
    update: XOR<RouteAssignmentUpdateWithoutPickupInput, RouteAssignmentUncheckedUpdateWithoutPickupInput>
    create: XOR<RouteAssignmentCreateWithoutPickupInput, RouteAssignmentUncheckedCreateWithoutPickupInput>
    where?: RouteAssignmentWhereInput
  }

  export type RouteAssignmentUpdateToOneWithWhereWithoutPickupInput = {
    where?: RouteAssignmentWhereInput
    data: XOR<RouteAssignmentUpdateWithoutPickupInput, RouteAssignmentUncheckedUpdateWithoutPickupInput>
  }

  export type RouteAssignmentUpdateWithoutPickupInput = {
    sequence_no?: IntFieldUpdateOperationsInput | number
    route?: RouteUpdateOneRequiredWithoutRouteAssignmentNestedInput
  }

  export type RouteAssignmentUncheckedUpdateWithoutPickupInput = {
    assignment_id?: IntFieldUpdateOperationsInput | number
    route_id?: IntFieldUpdateOperationsInput | number
    sequence_no?: IntFieldUpdateOperationsInput | number
  }

  export type PickupCreateWithoutRouteInput = {
    scheduled_date: Date | string
    status?: $Enums.PickupStatus
    updated_at?: Date | string
    service_request: ServiceRequestCreateNestedOneWithoutPickupsInput
    complaints?: ComplaintCreateNestedManyWithoutPickupInput
    routeAssignment?: RouteAssignmentCreateNestedOneWithoutPickupInput
  }

  export type PickupUncheckedCreateWithoutRouteInput = {
    pickup_id?: number
    request_id: number
    scheduled_date: Date | string
    status?: $Enums.PickupStatus
    updated_at?: Date | string
    complaints?: ComplaintUncheckedCreateNestedManyWithoutPickupInput
    routeAssignment?: RouteAssignmentUncheckedCreateNestedOneWithoutPickupInput
  }

  export type PickupCreateOrConnectWithoutRouteInput = {
    where: PickupWhereUniqueInput
    create: XOR<PickupCreateWithoutRouteInput, PickupUncheckedCreateWithoutRouteInput>
  }

  export type PickupCreateManyRouteInputEnvelope = {
    data: PickupCreateManyRouteInput | PickupCreateManyRouteInput[]
    skipDuplicates?: boolean
  }

  export type RouteAssignmentCreateWithoutRouteInput = {
    sequence_no: number
    pickup: PickupCreateNestedOneWithoutRouteAssignmentInput
  }

  export type RouteAssignmentUncheckedCreateWithoutRouteInput = {
    assignment_id?: number
    pickup_id: number
    sequence_no: number
  }

  export type RouteAssignmentCreateOrConnectWithoutRouteInput = {
    where: RouteAssignmentWhereUniqueInput
    create: XOR<RouteAssignmentCreateWithoutRouteInput, RouteAssignmentUncheckedCreateWithoutRouteInput>
  }

  export type PickupUpsertWithWhereUniqueWithoutRouteInput = {
    where: PickupWhereUniqueInput
    update: XOR<PickupUpdateWithoutRouteInput, PickupUncheckedUpdateWithoutRouteInput>
    create: XOR<PickupCreateWithoutRouteInput, PickupUncheckedCreateWithoutRouteInput>
  }

  export type PickupUpdateWithWhereUniqueWithoutRouteInput = {
    where: PickupWhereUniqueInput
    data: XOR<PickupUpdateWithoutRouteInput, PickupUncheckedUpdateWithoutRouteInput>
  }

  export type PickupUpdateManyWithWhereWithoutRouteInput = {
    where: PickupScalarWhereInput
    data: XOR<PickupUpdateManyMutationInput, PickupUncheckedUpdateManyWithoutRouteInput>
  }

  export type RouteAssignmentUpsertWithoutRouteInput = {
    update: XOR<RouteAssignmentUpdateWithoutRouteInput, RouteAssignmentUncheckedUpdateWithoutRouteInput>
    create: XOR<RouteAssignmentCreateWithoutRouteInput, RouteAssignmentUncheckedCreateWithoutRouteInput>
    where?: RouteAssignmentWhereInput
  }

  export type RouteAssignmentUpdateToOneWithWhereWithoutRouteInput = {
    where?: RouteAssignmentWhereInput
    data: XOR<RouteAssignmentUpdateWithoutRouteInput, RouteAssignmentUncheckedUpdateWithoutRouteInput>
  }

  export type RouteAssignmentUpdateWithoutRouteInput = {
    sequence_no?: IntFieldUpdateOperationsInput | number
    pickup?: PickupUpdateOneRequiredWithoutRouteAssignmentNestedInput
  }

  export type RouteAssignmentUncheckedUpdateWithoutRouteInput = {
    assignment_id?: IntFieldUpdateOperationsInput | number
    pickup_id?: IntFieldUpdateOperationsInput | number
    sequence_no?: IntFieldUpdateOperationsInput | number
  }

  export type RouteCreateWithoutRouteAssignmentInput = {
    name: string
    description?: string | null
    created_at?: Date | string
    pickups?: PickupCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutRouteAssignmentInput = {
    route_id?: number
    name: string
    description?: string | null
    created_at?: Date | string
    pickups?: PickupUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutRouteAssignmentInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutRouteAssignmentInput, RouteUncheckedCreateWithoutRouteAssignmentInput>
  }

  export type PickupCreateWithoutRouteAssignmentInput = {
    scheduled_date: Date | string
    status?: $Enums.PickupStatus
    updated_at?: Date | string
    service_request: ServiceRequestCreateNestedOneWithoutPickupsInput
    route?: RouteCreateNestedOneWithoutPickupsInput
    complaints?: ComplaintCreateNestedManyWithoutPickupInput
  }

  export type PickupUncheckedCreateWithoutRouteAssignmentInput = {
    pickup_id?: number
    request_id: number
    scheduled_date: Date | string
    route_id?: number | null
    status?: $Enums.PickupStatus
    updated_at?: Date | string
    complaints?: ComplaintUncheckedCreateNestedManyWithoutPickupInput
  }

  export type PickupCreateOrConnectWithoutRouteAssignmentInput = {
    where: PickupWhereUniqueInput
    create: XOR<PickupCreateWithoutRouteAssignmentInput, PickupUncheckedCreateWithoutRouteAssignmentInput>
  }

  export type RouteUpsertWithoutRouteAssignmentInput = {
    update: XOR<RouteUpdateWithoutRouteAssignmentInput, RouteUncheckedUpdateWithoutRouteAssignmentInput>
    create: XOR<RouteCreateWithoutRouteAssignmentInput, RouteUncheckedCreateWithoutRouteAssignmentInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutRouteAssignmentInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutRouteAssignmentInput, RouteUncheckedUpdateWithoutRouteAssignmentInput>
  }

  export type RouteUpdateWithoutRouteAssignmentInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pickups?: PickupUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutRouteAssignmentInput = {
    route_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pickups?: PickupUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type PickupUpsertWithoutRouteAssignmentInput = {
    update: XOR<PickupUpdateWithoutRouteAssignmentInput, PickupUncheckedUpdateWithoutRouteAssignmentInput>
    create: XOR<PickupCreateWithoutRouteAssignmentInput, PickupUncheckedCreateWithoutRouteAssignmentInput>
    where?: PickupWhereInput
  }

  export type PickupUpdateToOneWithWhereWithoutRouteAssignmentInput = {
    where?: PickupWhereInput
    data: XOR<PickupUpdateWithoutRouteAssignmentInput, PickupUncheckedUpdateWithoutRouteAssignmentInput>
  }

  export type PickupUpdateWithoutRouteAssignmentInput = {
    scheduled_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPickupStatusFieldUpdateOperationsInput | $Enums.PickupStatus
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    service_request?: ServiceRequestUpdateOneRequiredWithoutPickupsNestedInput
    route?: RouteUpdateOneWithoutPickupsNestedInput
    complaints?: ComplaintUpdateManyWithoutPickupNestedInput
  }

  export type PickupUncheckedUpdateWithoutRouteAssignmentInput = {
    pickup_id?: IntFieldUpdateOperationsInput | number
    request_id?: IntFieldUpdateOperationsInput | number
    scheduled_date?: DateTimeFieldUpdateOperationsInput | Date | string
    route_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPickupStatusFieldUpdateOperationsInput | $Enums.PickupStatus
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    complaints?: ComplaintUncheckedUpdateManyWithoutPickupNestedInput
  }

  export type UserCreateWithoutComplaintsInput = {
    role_id: number
    barangay_id: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number: string
    address: string
    created_at?: Date | string
    role?: UserCreateroleInput | string[]
    requests?: ServiceRequestCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    waste_logs?: WasteLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutComplaintsInput = {
    user_id?: number
    role_id: number
    barangay_id: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number: string
    address: string
    created_at?: Date | string
    role?: UserCreateroleInput | string[]
    requests?: ServiceRequestUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    waste_logs?: WasteLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutComplaintsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutComplaintsInput, UserUncheckedCreateWithoutComplaintsInput>
  }

  export type PickupCreateWithoutComplaintsInput = {
    scheduled_date: Date | string
    status?: $Enums.PickupStatus
    updated_at?: Date | string
    service_request: ServiceRequestCreateNestedOneWithoutPickupsInput
    route?: RouteCreateNestedOneWithoutPickupsInput
    routeAssignment?: RouteAssignmentCreateNestedOneWithoutPickupInput
  }

  export type PickupUncheckedCreateWithoutComplaintsInput = {
    pickup_id?: number
    request_id: number
    scheduled_date: Date | string
    route_id?: number | null
    status?: $Enums.PickupStatus
    updated_at?: Date | string
    routeAssignment?: RouteAssignmentUncheckedCreateNestedOneWithoutPickupInput
  }

  export type PickupCreateOrConnectWithoutComplaintsInput = {
    where: PickupWhereUniqueInput
    create: XOR<PickupCreateWithoutComplaintsInput, PickupUncheckedCreateWithoutComplaintsInput>
  }

  export type UserUpsertWithoutComplaintsInput = {
    update: XOR<UserUpdateWithoutComplaintsInput, UserUncheckedUpdateWithoutComplaintsInput>
    create: XOR<UserCreateWithoutComplaintsInput, UserUncheckedCreateWithoutComplaintsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutComplaintsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutComplaintsInput, UserUncheckedUpdateWithoutComplaintsInput>
  }

  export type UserUpdateWithoutComplaintsInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    barangay_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UserUpdateroleInput | string[]
    requests?: ServiceRequestUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    waste_logs?: WasteLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutComplaintsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    barangay_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UserUpdateroleInput | string[]
    requests?: ServiceRequestUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    waste_logs?: WasteLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PickupUpsertWithoutComplaintsInput = {
    update: XOR<PickupUpdateWithoutComplaintsInput, PickupUncheckedUpdateWithoutComplaintsInput>
    create: XOR<PickupCreateWithoutComplaintsInput, PickupUncheckedCreateWithoutComplaintsInput>
    where?: PickupWhereInput
  }

  export type PickupUpdateToOneWithWhereWithoutComplaintsInput = {
    where?: PickupWhereInput
    data: XOR<PickupUpdateWithoutComplaintsInput, PickupUncheckedUpdateWithoutComplaintsInput>
  }

  export type PickupUpdateWithoutComplaintsInput = {
    scheduled_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPickupStatusFieldUpdateOperationsInput | $Enums.PickupStatus
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    service_request?: ServiceRequestUpdateOneRequiredWithoutPickupsNestedInput
    route?: RouteUpdateOneWithoutPickupsNestedInput
    routeAssignment?: RouteAssignmentUpdateOneWithoutPickupNestedInput
  }

  export type PickupUncheckedUpdateWithoutComplaintsInput = {
    pickup_id?: IntFieldUpdateOperationsInput | number
    request_id?: IntFieldUpdateOperationsInput | number
    scheduled_date?: DateTimeFieldUpdateOperationsInput | Date | string
    route_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPickupStatusFieldUpdateOperationsInput | $Enums.PickupStatus
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    routeAssignment?: RouteAssignmentUncheckedUpdateOneWithoutPickupNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    role_id: number
    barangay_id: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number: string
    address: string
    created_at?: Date | string
    role?: UserCreateroleInput | string[]
    requests?: ServiceRequestCreateNestedManyWithoutUserInput
    complaints?: ComplaintCreateNestedManyWithoutUserInput
    waste_logs?: WasteLogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    user_id?: number
    role_id: number
    barangay_id: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number: string
    address: string
    created_at?: Date | string
    role?: UserCreateroleInput | string[]
    requests?: ServiceRequestUncheckedCreateNestedManyWithoutUserInput
    complaints?: ComplaintUncheckedCreateNestedManyWithoutUserInput
    waste_logs?: WasteLogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    barangay_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UserUpdateroleInput | string[]
    requests?: ServiceRequestUpdateManyWithoutUserNestedInput
    complaints?: ComplaintUpdateManyWithoutUserNestedInput
    waste_logs?: WasteLogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    barangay_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UserUpdateroleInput | string[]
    requests?: ServiceRequestUncheckedUpdateManyWithoutUserNestedInput
    complaints?: ComplaintUncheckedUpdateManyWithoutUserNestedInput
    waste_logs?: WasteLogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWaste_logsInput = {
    role_id: number
    barangay_id: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number: string
    address: string
    created_at?: Date | string
    role?: UserCreateroleInput | string[]
    requests?: ServiceRequestCreateNestedManyWithoutUserInput
    complaints?: ComplaintCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWaste_logsInput = {
    user_id?: number
    role_id: number
    barangay_id: number
    first_name: string
    last_name: string
    email: string
    password: string
    phone_number: string
    address: string
    created_at?: Date | string
    role?: UserCreateroleInput | string[]
    requests?: ServiceRequestUncheckedCreateNestedManyWithoutUserInput
    complaints?: ComplaintUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWaste_logsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWaste_logsInput, UserUncheckedCreateWithoutWaste_logsInput>
  }

  export type WasteTypeCreateWithoutWaste_logsInput = {
    name: string
    description?: string | null
    requests?: ServiceRequestCreateNestedManyWithoutWaste_typeInput
  }

  export type WasteTypeUncheckedCreateWithoutWaste_logsInput = {
    waste_type_id?: number
    name: string
    description?: string | null
    requests?: ServiceRequestUncheckedCreateNestedManyWithoutWaste_typeInput
  }

  export type WasteTypeCreateOrConnectWithoutWaste_logsInput = {
    where: WasteTypeWhereUniqueInput
    create: XOR<WasteTypeCreateWithoutWaste_logsInput, WasteTypeUncheckedCreateWithoutWaste_logsInput>
  }

  export type UserUpsertWithoutWaste_logsInput = {
    update: XOR<UserUpdateWithoutWaste_logsInput, UserUncheckedUpdateWithoutWaste_logsInput>
    create: XOR<UserCreateWithoutWaste_logsInput, UserUncheckedCreateWithoutWaste_logsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWaste_logsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWaste_logsInput, UserUncheckedUpdateWithoutWaste_logsInput>
  }

  export type UserUpdateWithoutWaste_logsInput = {
    role_id?: IntFieldUpdateOperationsInput | number
    barangay_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UserUpdateroleInput | string[]
    requests?: ServiceRequestUpdateManyWithoutUserNestedInput
    complaints?: ComplaintUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWaste_logsInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
    barangay_id?: IntFieldUpdateOperationsInput | number
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: UserUpdateroleInput | string[]
    requests?: ServiceRequestUncheckedUpdateManyWithoutUserNestedInput
    complaints?: ComplaintUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WasteTypeUpsertWithoutWaste_logsInput = {
    update: XOR<WasteTypeUpdateWithoutWaste_logsInput, WasteTypeUncheckedUpdateWithoutWaste_logsInput>
    create: XOR<WasteTypeCreateWithoutWaste_logsInput, WasteTypeUncheckedCreateWithoutWaste_logsInput>
    where?: WasteTypeWhereInput
  }

  export type WasteTypeUpdateToOneWithWhereWithoutWaste_logsInput = {
    where?: WasteTypeWhereInput
    data: XOR<WasteTypeUpdateWithoutWaste_logsInput, WasteTypeUncheckedUpdateWithoutWaste_logsInput>
  }

  export type WasteTypeUpdateWithoutWaste_logsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requests?: ServiceRequestUpdateManyWithoutWaste_typeNestedInput
  }

  export type WasteTypeUncheckedUpdateWithoutWaste_logsInput = {
    waste_type_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    requests?: ServiceRequestUncheckedUpdateManyWithoutWaste_typeNestedInput
  }

  export type ServiceRequestCreateManyUserInput = {
    request_id?: number
    waste_type_id: number
    requested_date: Date | string
    status?: $Enums.RequestStatus
  }

  export type ComplaintCreateManyUserInput = {
    complaint_id?: number
    pickup_id?: number | null
    description: string
    status?: $Enums.ComplaintStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    notification_id?: number
    title: string
    message: string
    sent_at?: Date | string
    is_read?: boolean
  }

  export type WasteLogCreateManyUserInput = {
    log_id?: number
    waste_type_id: number
    quantity_kg: Decimal | DecimalJsLike | number | string
    log_date: Date | string
    created_at?: Date | string
  }

  export type ServiceRequestUpdateWithoutUserInput = {
    requested_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    waste_type?: WasteTypeUpdateOneRequiredWithoutRequestsNestedInput
    pickups?: PickupUpdateManyWithoutService_requestNestedInput
  }

  export type ServiceRequestUncheckedUpdateWithoutUserInput = {
    request_id?: IntFieldUpdateOperationsInput | number
    waste_type_id?: IntFieldUpdateOperationsInput | number
    requested_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    pickups?: PickupUncheckedUpdateManyWithoutService_requestNestedInput
  }

  export type ServiceRequestUncheckedUpdateManyWithoutUserInput = {
    request_id?: IntFieldUpdateOperationsInput | number
    waste_type_id?: IntFieldUpdateOperationsInput | number
    requested_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
  }

  export type ComplaintUpdateWithoutUserInput = {
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumComplaintStatusFieldUpdateOperationsInput | $Enums.ComplaintStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pickup?: PickupUpdateOneWithoutComplaintsNestedInput
  }

  export type ComplaintUncheckedUpdateWithoutUserInput = {
    complaint_id?: IntFieldUpdateOperationsInput | number
    pickup_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumComplaintStatusFieldUpdateOperationsInput | $Enums.ComplaintStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComplaintUncheckedUpdateManyWithoutUserInput = {
    complaint_id?: IntFieldUpdateOperationsInput | number
    pickup_id?: NullableIntFieldUpdateOperationsInput | number | null
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumComplaintStatusFieldUpdateOperationsInput | $Enums.ComplaintStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    notification_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    sent_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_read?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WasteLogUpdateWithoutUserInput = {
    quantity_kg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    waste_type?: WasteTypeUpdateOneRequiredWithoutWaste_logsNestedInput
  }

  export type WasteLogUncheckedUpdateWithoutUserInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    waste_type_id?: IntFieldUpdateOperationsInput | number
    quantity_kg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WasteLogUncheckedUpdateManyWithoutUserInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    waste_type_id?: IntFieldUpdateOperationsInput | number
    quantity_kg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceRequestCreateManyWaste_typeInput = {
    request_id?: number
    user_id: number
    requested_date: Date | string
    status?: $Enums.RequestStatus
  }

  export type WasteLogCreateManyWaste_typeInput = {
    log_id?: number
    user_id: number
    quantity_kg: Decimal | DecimalJsLike | number | string
    log_date: Date | string
    created_at?: Date | string
  }

  export type ServiceRequestUpdateWithoutWaste_typeInput = {
    requested_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    user?: UserUpdateOneRequiredWithoutRequestsNestedInput
    pickups?: PickupUpdateManyWithoutService_requestNestedInput
  }

  export type ServiceRequestUncheckedUpdateWithoutWaste_typeInput = {
    request_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    requested_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    pickups?: PickupUncheckedUpdateManyWithoutService_requestNestedInput
  }

  export type ServiceRequestUncheckedUpdateManyWithoutWaste_typeInput = {
    request_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    requested_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
  }

  export type WasteLogUpdateWithoutWaste_typeInput = {
    quantity_kg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWaste_logsNestedInput
  }

  export type WasteLogUncheckedUpdateWithoutWaste_typeInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    quantity_kg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WasteLogUncheckedUpdateManyWithoutWaste_typeInput = {
    log_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    quantity_kg?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PickupCreateManyService_requestInput = {
    pickup_id?: number
    scheduled_date: Date | string
    route_id?: number | null
    status?: $Enums.PickupStatus
    updated_at?: Date | string
  }

  export type PickupUpdateWithoutService_requestInput = {
    scheduled_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPickupStatusFieldUpdateOperationsInput | $Enums.PickupStatus
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneWithoutPickupsNestedInput
    complaints?: ComplaintUpdateManyWithoutPickupNestedInput
    routeAssignment?: RouteAssignmentUpdateOneWithoutPickupNestedInput
  }

  export type PickupUncheckedUpdateWithoutService_requestInput = {
    pickup_id?: IntFieldUpdateOperationsInput | number
    scheduled_date?: DateTimeFieldUpdateOperationsInput | Date | string
    route_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPickupStatusFieldUpdateOperationsInput | $Enums.PickupStatus
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    complaints?: ComplaintUncheckedUpdateManyWithoutPickupNestedInput
    routeAssignment?: RouteAssignmentUncheckedUpdateOneWithoutPickupNestedInput
  }

  export type PickupUncheckedUpdateManyWithoutService_requestInput = {
    pickup_id?: IntFieldUpdateOperationsInput | number
    scheduled_date?: DateTimeFieldUpdateOperationsInput | Date | string
    route_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumPickupStatusFieldUpdateOperationsInput | $Enums.PickupStatus
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComplaintCreateManyPickupInput = {
    complaint_id?: number
    user_id: number
    description: string
    status?: $Enums.ComplaintStatus
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ComplaintUpdateWithoutPickupInput = {
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumComplaintStatusFieldUpdateOperationsInput | $Enums.ComplaintStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutComplaintsNestedInput
  }

  export type ComplaintUncheckedUpdateWithoutPickupInput = {
    complaint_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumComplaintStatusFieldUpdateOperationsInput | $Enums.ComplaintStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ComplaintUncheckedUpdateManyWithoutPickupInput = {
    complaint_id?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    status?: EnumComplaintStatusFieldUpdateOperationsInput | $Enums.ComplaintStatus
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PickupCreateManyRouteInput = {
    pickup_id?: number
    request_id: number
    scheduled_date: Date | string
    status?: $Enums.PickupStatus
    updated_at?: Date | string
  }

  export type PickupUpdateWithoutRouteInput = {
    scheduled_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPickupStatusFieldUpdateOperationsInput | $Enums.PickupStatus
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    service_request?: ServiceRequestUpdateOneRequiredWithoutPickupsNestedInput
    complaints?: ComplaintUpdateManyWithoutPickupNestedInput
    routeAssignment?: RouteAssignmentUpdateOneWithoutPickupNestedInput
  }

  export type PickupUncheckedUpdateWithoutRouteInput = {
    pickup_id?: IntFieldUpdateOperationsInput | number
    request_id?: IntFieldUpdateOperationsInput | number
    scheduled_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPickupStatusFieldUpdateOperationsInput | $Enums.PickupStatus
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    complaints?: ComplaintUncheckedUpdateManyWithoutPickupNestedInput
    routeAssignment?: RouteAssignmentUncheckedUpdateOneWithoutPickupNestedInput
  }

  export type PickupUncheckedUpdateManyWithoutRouteInput = {
    pickup_id?: IntFieldUpdateOperationsInput | number
    request_id?: IntFieldUpdateOperationsInput | number
    scheduled_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumPickupStatusFieldUpdateOperationsInput | $Enums.PickupStatus
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
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