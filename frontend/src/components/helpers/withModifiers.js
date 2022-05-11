export const withModifiers = (base, modifiers, styles) => {
  // Get the main class.
  let classNames = styles[base]; // Check if we have modifiers.

  if (!modifiers || !Array.isArray(modifiers) || 0 === modifiers.length) {
    return classNames;
  } // Optionally extend with modifiers.

  modifiers.forEach(modifier => {
    if (styles[base + "--" + modifier]) {
      classNames += " " + styles[base + "--" + modifier];
    }
  }); // Return the list of classes.

  return classNames;
};
