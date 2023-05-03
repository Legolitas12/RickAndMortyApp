const validation = (data) => {
  let errors = {};

  // EMAIL VALIDATION
  if (!data.email.includes("@")) {
    errors.e1 = "Ingresa un Email valido";
  }

  if (!data.email) {
    errors.e2 = "Ingresa un Email";
  }

  if (data.email.length > 35) {
    errors.e3 = "No debe ser mayor a 35 caracteres";
  }

  // PASSWORD VALIDATION

  if (!/\d+/.test(data.password)) {
    errors.p1 = "Al menos un numero";
  }

  if (data.password.length < 6 || data.password.length > 10) {
    errors.p2 = "Debe tener entre 6 y 10 caracteres";
  }

  return errors;
};

export default validation;
