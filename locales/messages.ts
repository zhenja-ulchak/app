interface Messages {
  [key: string]: {
    TASK: string;
    SETTING: string;
  };
}

export const messages: Messages = {
  en: { TASK: 'Task', SETTING: 'Settings' },
  ua: { TASK: 'Завдання', SETTING: 'Налаштування' },
};