import Joi from "joi";

const createChild = Joi.object({
    fullname:Joi.string().required(),
})
const editChild = Joi.object({
    fullname:Joi.string(),
    birth_date:Joi.string(),
    gender:Joi.string(),
    birth_weight:Joi.string(),
    birth_country:Joi.string(),
    birth_city:Joi.string(),
    birth_place:Joi.string(),
    hospital_name:Joi.string(),
    type_of_delivery:Joi.string(),
    multiple_birth:Joi.string(),
})
export default { createChild,editChild}; 