import baseServicesFactory from "#@/modules/_shared/base_services.js";
import model from "#@/modules/sales/model/index.js";


export default {
    ...baseServicesFactory(model)
};
    
