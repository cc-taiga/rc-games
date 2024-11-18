/// <reference types="webpack-env" />

export const getAllAssets = (folderPath: string) => {
  try {
    if (!folderPath) {
      throw new Error("Folder path must be provided");
    }

    const assets = require.context(`../assets`, true, /\.(png|svg|webp)$/);

    const assetKeys = assets.keys().filter((key) => key.startsWith(`./${folderPath}/`));

    const assetUrls = assetKeys.reduce((acc, key) => {
      const name = key.replace(`./${folderPath}/`, '').split('.')[0];
      acc[name] = assets(key);
      return acc;
    }, {} as any);

    return assetUrls;
  } catch (error) {
    console.error('Error in getAllAssets:', error);
    return [];
  }
};