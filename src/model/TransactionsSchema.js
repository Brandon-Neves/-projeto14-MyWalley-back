import joi from 'joi'

export const cashInflow = joi.object({
  valueTransaction: joi.number().required(),
  description: joi.string().required().min(3),
  type: joi.string().required.valid('entrada', 'saida'),
  user: joi.object().required()
})
