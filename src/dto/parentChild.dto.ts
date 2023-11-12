import Joi from "joi";

const createParentChild = Joi.object({
    childId:Joi.string().required(),
    parentId:Joi.string().required(),
})

export default { createParentChild}; 