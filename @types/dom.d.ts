interface Window {
  webkitURL: {
    createObjectURL(File): string;
    revokeObjectURL(objectURL: string): void;
  };
  encodeURIComponent(str: string): string;
  decodeURIComponent(encodedURI: string): string;
}
