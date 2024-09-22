import { z } from 'zod';

export enum ClientBSLTypeEnum {
  'core' = 'core',
  'mining' = 'mining',
  'netyo' = 'netyo',
  'cleaning' = 'cleaning',
}

export type ClientLicInfoType = {
  vendor: string;
  client: string;
  location: string;
  expire_day: Date;
  left_days: number;
  isValid: boolean;
  licinfo: string;
  message: string;
};

export type ClientType = {
  total: number;
  client: ClientSchemaType[];
};

export const clientSchema = z.object({
  id: z.string(),
  display_name: z.string().min(1, {
    message: 'validation.required',
  }),
  active: z.boolean().optional().default(false),
  name: z.string().optional().nullable(),
  asset_version: z.string().optional().nullable(),
  country_iso: z.string().optional().nullable(),
  logo: z.string().optional().nullable(),
  page_refresh_time: z.string().min(1, {
    message: 'validation.required',
  }),
  login_timeout: z.string().min(1, {
    message: 'validation.required',
  }),
  api_expires_in_hours: z
    .string()
    .min(1, {
      message: 'validation.required',
    })
    .transform((val) => Number(val)),
  languages: z.array(z.string()).transform((val) => val.join(',')),
  time_format: z.string(),
  lic_key: z.string().optional(),
  checksum: z.string().optional(),
  lastchange: z.string().optional(),
  lastchange_by: z.string().optional(),
  created: z.string().optional(),
  created_by: z.string().optional(),
  config_change: z.string().optional(),
  bsl_type: z.nativeEnum(ClientBSLTypeEnum).default(ClientBSLTypeEnum.core),
  banner: z
    .object({
      title: z.string(),
      start_time: z.string(),
      end_time: z.string(),
      active: z.boolean().default(false).optional(),
      content: z.any().optional(),
    })
    .optional(),
  footer: z.any().optional(),
});

// export const clientCreateSchema = clientSchema.pick({
//   display_name: true,
//   name: true,
//   logo: true,
//   page_refresh_time: true,
//   login_timeout: true,
//   time_format: true,
//   last_name: true,
//   active: true,
//   languages: true,
// });

// export type ClientCreateType = z.infer<typeof clientCreateSchema>;

export type ClientSchemaType = z.infer<typeof clientSchema>;

export const clientUpdateSchema = clientSchema.partial();

export type ClientUpdateSchemaType = z.infer<typeof clientUpdateSchema>;
