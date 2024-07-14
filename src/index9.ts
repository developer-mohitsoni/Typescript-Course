//! Type Utility

//* Partial<Type>
// Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.

//* Required<Type>
// Constructs a type consisting of all properties of Type set to required. The opposite of Partial.

//* Readonly<Type>
// Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.

//* Record<Keys, Type>
// Constructs a type with a set of properties Keys of type Type. This utility can be used to map the properties of a type to another type.

//* Pick<Type, Keys>
 // Constructs a type consisting of properties Keys from Type. This utility can be used to select a subset of properties from a type.

//* Omit<Type, Keys>
 // Constructs a type excluding properties Keys from Type. This utility can be used to exclude specific properties from a type.

//* Exclude<Type, ExcludedUnion>
 // Constructs a type excluding properties that are members of ExcludedUnion from Type. This utility can be used to exclude specific properties from a type.

//* Extract<Type, Union>
 // Constructs a type consisting of properties that are members of Union from Type. This utility can be used to select specific properties from a type.

//* NonNullable<Type>
 // Constructs a type with all properties of Type set to non-nullable, meaning the properties of the constructed type cannot be assigned a value of null or undefined.

//* Parameters<Type>
 // Constructs a tuple type containing the properties of Type. This utility can be used to extract the properties of a type as an array of strings.

//* ConstructorParameters<Type>
 // Constructs a tuple type containing the constructor parameters of Type. This utility can be used to extract the constructor parameters of a function type as an array of strings.

//* ReturnType<Type>
 // Constructs the return type of Type. This utility can be used to extract the return type of a function type.

//* InstanceType<Type>
 // Constructs the type of the instance created by Type. This utility can be used to extract the type of the instance created by a constructor function type.