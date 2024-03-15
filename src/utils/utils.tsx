const baseUrl = 'https://i.imgur.com';

export function getImageUrl(imageId: string): string {
  return `${baseUrl}/${imageId}.jpg`;
}