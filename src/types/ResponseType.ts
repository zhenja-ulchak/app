export type ResponseType<TData> = {
    status: number;
    asset_version: null;
    "gui-message": string;
    message: Message;
    data: TData;
  };
  
  export type Message = {
    message: string;
    guiMessage: string;
  };