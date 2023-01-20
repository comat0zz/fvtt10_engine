import { registerHandlebarsHelpers } from "./handlebars/helpers.js";
import { preloadHandlebarsTemplates } from "./handlebars/templates.js";

export const initializeHandlebars = () => {
  registerHandlebarsHelpers();
  preloadHandlebarsTemplates();
};