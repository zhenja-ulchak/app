import { z } from 'zod';
import { ResponseType } from './ResponseType';

export enum CustomersTodoStatusTypeEnum {
  Pending = 'Pending',
  Completed = 'Completed'
}



export const customerTodoSchema = z.object({
  id: z.string(),
  customer_id: z.string(),
  number: z.string(),
  task: z.string(),
  solution: z.string().min(1),
  message_history: z.string().nullable().optional(),
  status: z
  .nativeEnum(CustomersTodoStatusTypeEnum)
  .default(CustomersTodoStatusTypeEnum.Pending),
  start_date: z.string().transform((v) => Number(v) ).nullable().optional(),
  end_date: z.string().nullable().optional(), // Додати end_date сюди
  diff_time: z.string().nullable().optional(),
  lastchange: z.string().nullable().optional(),
  lastchange_by: z.string().nullable().optional(),
  created: z.string().nullable().optional(),
  created_by: z.string().nullable().optional(),
 
});

export const createCustomerTodoSchema = customerTodoSchema.omit({
  id: true,
  customer_id: true,
  number: true,
  lastchange: true,
  lastchange_by: true,
  created: true,
  created_by: true,
});

export type CreateCustomerTodoType = z.infer<
  typeof createCustomerTodoSchema
>;

export type CustomerTodoType = z.infer<typeof customerTodoSchema>;

export const updateCustomerTodoSchema = customerTodoSchema.partial().omit({

  customer_id: true,

});

export type UpdateCustomerTodoType = z.infer<
  typeof updateCustomerTodoSchema
>;

export type CustomerTodoResponseType = ResponseType<{
  total: number;
  page_total: number;
  customer_todo: CustomerTodoType[];
}>;