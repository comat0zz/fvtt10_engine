export class CztActor extends Actor {
  /** @override */
  prepareBaseData() {
    // Data modifications in this step occur before processing embedded
    // documents or derived data.
    console.log("prepareBaseData CztActor")
  }

  /** @override */
  prepareData() {
    // Prepare data for the actor. Calling the super version of this executes
    // the following, in order: data reset (to clear active effects),
    // prepareBaseData(), prepareEmbeddedDocuments() (including active effects),
    // prepareDerivedData().
    super.prepareData();

    console.log("prepareData CztActor")
  }

  prepareDerivedData() {
    console.log("prepareDerivedData CztActor")
  }
};