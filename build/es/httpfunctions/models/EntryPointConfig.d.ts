import type { CommandConfig } from './CommandConfig';
export type EntryPointConfig = {
    train: CommandConfig;
    predict: CommandConfig;
};
