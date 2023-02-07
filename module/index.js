import { CZT } from "./config.js";
import { initializeHandlebars } from "./handlebars/init.js";
import { registerSettings } from "./settings.js";

/* multicontrollers */
/*
import { CztItemSheet } from "./items/ProxyItemSheet.js";
import { CztItem } from "./items/ProxyItem.js";
import { CztActorSheet } from "./actors/ProxyActorSheet.js";
import { CztActor } from "./actors/ProxyActor.js";
*/
/* single controller */
import { CztItemSheet } from "./items/SimpleItemSheet.js";
import { CztItem } from "./items/SimpleItem.js";
import { CztActorSheet } from "./actors/SimpleActorSheet.js";
import { CztActor } from "./actors/SimpleActor.js";

Hooks.once("init", function () {
  console.log(game.system.id + " | init system");

  CONFIG.CZT = CZT;
  // Необходимо для вызова шаблонов из кода
  // чтобы не прописывать полные пути, 
  // а потом их вечно менять, менять, менять
  game.system_path = `systems/${game.system.id}`;

  CONFIG.Item.documentClass = CztItem;
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet(game.system.id, CztItemSheet, {
    label: "CZT.Sheet.Item",
    makeDefault: true
  });

  CONFIG.Actor.documentClass = CztActor;
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet(game.system.id, CztActorSheet, {
    label: "CZT.Sheet.Actor",
    makeDefault: true 
  });
  
  // Pre-load HTML templates
  initializeHandlebars();
  registerSettings();
});

// Activate chat listeners
// eslint-disable-next-line no-unused-vars
Hooks.on("renderChatLog", (log, html, data) => {
  
});