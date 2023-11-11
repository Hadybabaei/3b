import Joi from "joi";

const createParent = Joi.object({
    fullname:Joi.string().required(),
    type_of_relationship:Joi.string().required(),
})
const editParent = Joi.object({
    fullname:Joi.string(),
    type_of_relationship:Joi.string(),
    gender:Joi.string(),
    weight:Joi.string(),
    birth_date:Joi.string(),
    birth_country:Joi.string(),
    birth_city:Joi.string(),
    height:Joi.string(),
    education:Joi.string(),
    work_or_not:Joi.boolean(),
    planing_on_working:Joi.boolean(),
    occupation:Joi.string(),
    number_of_pregnancy:Joi.number(),
    number_of_miscarriage:Joi.number(),
    first_miscarriage_date:Joi.string(),
    second_miscarriage_date:Joi.string(),
    ever_smoked:Joi.boolean(),
    is_smooking:Joi.boolean(),
    smoking_quite:Joi.string(),
    smoking_quite_date:Joi.string(),
    ever_drunk:Joi.boolean(),
    is_drinking:Joi.boolean(),
    drinking_quite:Joi.string(),
    drinking_quite_date:Joi.string(),
})
export default { createParent,editParent}; 