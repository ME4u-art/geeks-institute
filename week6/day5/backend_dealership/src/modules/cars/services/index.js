import model from "#@/modules/cars/model/index.js";
import baseServicesFactory from "#@/modules/_shared/base_services.js";

export default {
  ...baseServicesFactory(model),
};
