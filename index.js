function createLoginTracker(user) {
  let attempts = 0;
  const maxAttempts = 3;

  return (password) => {
    // If already exceeded attempts
    if (attempts > maxAttempts) {
      return "Account locked due to too many failed login attempts";
    }

    // Correct password
    if (password === user.password) {
      return "Login successful";
    }

    // Wrong password
    attempts++;

    // Return attempt messages for 1–3
    if (attempts <= maxAttempts) {
      return `Attempt ${attempts}: Login failed`;
    }

    // Only AFTER 3 attempts
    return "Account locked due to too many failed login attempts";
  };
}

module.exports = createLoginTracker;

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};