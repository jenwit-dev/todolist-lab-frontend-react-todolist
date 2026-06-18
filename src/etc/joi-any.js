const Joi = require("joi");

// Define the schema using Joi.any()
const exampleSchema = Joi.object({
  // 1. Enforcing presence (required) but allowing any type (any())
  user_id: Joi.any()
    .required()
    .description("Must be present, can be any type like string or number."),

  // 2. Allowing anything, completely optional (default behavior of Joi.any())
  notes: Joi.any()
    .optional()
    .description("Can be any value, including undefined."),

  // 3. Example of a field that MUST be one of a few allowed values
  status_flag: Joi.any()
    .valid("PENDING", "APPROVED", 404)
    .description("Must be one of the allowed strings or the number 404."),

  // 4. A field that must NOT exist
  deprecated_field: Joi.any()
    .forbidden()
    .description("This field must not be included in the object."),
});

// --- Test Cases ---

const data1 = {
  user_id: 12345, // Valid: present
  notes: ["some", "random", "info"], // Valid: any array is allowed
  status_flag: "APPROVED", // Valid: is in the valid list
};

const data2 = {
  user_id: "abc-789", // Valid: present, type doesn't matter
  status_flag: 404, // Valid: number is allowed
  deprecated_field: "oops", // Invalid: forbidden
};

const data3 = {
  // user_id missing // Invalid: required
  status_flag: "NEW_STATUS", // Invalid: not in the valid list
};

// Validation
const validationResult1 = exampleSchema.validate(data1);
console.log("Result 1 Valid:", !validationResult1.error);
// Output: Result 1 Valid: true

const validationResult2 = exampleSchema.validate(data2);
console.log("Result 2 Valid:", !validationResult2.error);
console.log("Error 2:", validationResult2.error?.details[0].message);
// Output: Result 2 Valid: false
// Output: Error 2: "deprecated_field" is forbidden

const validationResult3 = exampleSchema.validate(data3);
console.log("Result 3 Valid:", !validationResult3.error);
console.log(
  "Error 3:",
  validationResult3.error?.details.map((d) => d.message)
);
// Output: Result 3 Valid: false
// Output: Error 3: [ '"user_id" is required', '"status_flag" must be one of [PENDING, APPROVED, 404]' ]

// Without Optional Chaining (more verbose)
let message;
if (
  validationResult2.error &&
  validationResult2.error.details &&
  validationResult2.error.details[0]
) {
  message = validationResult2.error.details[0].message;
} else {
  message = undefined; // or some default value
}
