import { Plugin, PluginID } from '@/types/plugin';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const getEndpoint = (plugin: Plugin | null) => {
  if (!plugin) {
    return `${basePath}/api/chat`;
  }

  if (plugin.id === PluginID.GOOGLE_SEARCH) {
    return `${basePath}/api/google`;
  }

  return `${basePath}/api/chat`;
};
