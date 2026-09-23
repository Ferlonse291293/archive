export const ICON_FILE_MAP: Record<string, string> = {
  'pdf': 'assets/icons/file-icons/pdf.svg',
  'doc': 'assets/icons/file-icons/doc.svg',
  'docx': 'assets/icons/file-icons/docx.svg',
  'xls': 'assets/icons/file-icons/xls.svg',
  'xlsx': 'assets/icons/file-icons/xlsx.svg',
  'ppt': 'assets/icons/file-icons/ppt.svg',
  'pptx': 'assets/icons/file-icons/pptx.svg',
  'png': 'assets/icons/file-icons/png.svg',
  'jpg': 'assets/icons/file-icons/jpg.svg',
  'jpeg': 'assets/icons/file-icons/jpg.svg',
  'gif': 'assets/icons/file-icons/gif.svg',
  'svg': 'assets/icons/file-icons/svg.svg',
  'zip': 'assets/icons/file-icons/zip.svg',
  'rar': 'assets/icons/file-icons/rar.svg',
  'txt': 'assets/icons/file-icons/txt.svg',
  'csv': 'assets/icons/file-icons/csv.svg',
  'mp3': 'assets/icons/file-icons/mp3.svg',
  'mp4': 'assets/icons/file-icons/mp4.svg',
  'html': 'assets/icons/file-icons/html.svg',
  'xml': 'assets/icons/file-icons/xml.svg',
  'psd': 'assets/icons/file-icons/psd.svg',
};
  const EXTENSION_ICON_MAP: Record<string, { icon: string; mimeTypes: string[] }> = {
    pdf: {
      icon: 'pdf',
      mimeTypes: ['application/pdf'],
    },
    doc: {
      icon: 'doc',
      mimeTypes: ['application/msword'],
    },
    docx: {
      icon: 'docx',
      mimeTypes: [
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/zip',
      ],
    },
    xls: {
      icon: 'xls',
      mimeTypes: ['application/vnd.ms-excel'],
    },
    xlsx: {
      icon: 'xlsx',
      mimeTypes: [
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      ],
    },
    ppt: {
      icon: 'ppt',
      mimeTypes: ['application/vnd.ms-powerpoint'],
    },
    pptx: {
      icon: 'pptx',
      mimeTypes: [
        'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      ],
    },
    png: { icon: 'png', mimeTypes: ['image/png'] },
    jpg: { icon: 'jpg', mimeTypes: ['image/jpeg'] },
    gif: { icon: 'gif', mimeTypes: ['image/gif'] },
    svg: { icon: 'svg', mimeTypes: ['image/svg+xml'] },
    zip: { icon: 'zip', mimeTypes: ['application/zip', 'application/x-zip-compressed'] },
    rar: { icon: 'rar', mimeTypes: ['application/x-rar-compressed', 'application/vnd.rar'] },
    txt: { icon: 'txt', mimeTypes: ['text/plain'] },
    csv: {
      icon: 'csv',
      mimeTypes: ['text/csv', 'application/vnd.ms-excel'], // старый Excel экспортирует CSV с этим MIME
    },
    mp3: { icon: 'mp3', mimeTypes: ['audio/mpeg'] },
    mp4: { icon: 'mp4', mimeTypes: ['video/mp4'] },
    html: { icon: 'html', mimeTypes: ['text/html'] },
    xml: { icon: 'xml', mimeTypes: ['application/xml', 'text/xml'] },
    psd: { icon: 'psd', mimeTypes: ['image/vnd.adobe.photoshop'] },
  };

// Построение обратного индекса mimeType -> icon один раз при старте
const MIME_TO_ICON: Record<string, string> = {};
for (const { icon, mimeTypes } of Object.values(EXTENSION_ICON_MAP)) {
  for (const mime of mimeTypes) {
    if (!(mime in MIME_TO_ICON)) {
      MIME_TO_ICON[mime] = icon;
    }
  }
}

const EXTENSION_TO_ICON: Record<string, string> = Object.fromEntries(
  Object.entries(EXTENSION_ICON_MAP).map(([ext, { icon }]) => [ext, icon])
);

export function getFileIconName(fileName: string, mimeType: string): string {
  const ext = fileName.split('.').pop()?.toLowerCase();
  if (ext && EXTENSION_TO_ICON[ext]) {
    return EXTENSION_TO_ICON[ext];
  }
  if (MIME_TO_ICON[mimeType]) {
    return MIME_TO_ICON[mimeType];
  }
  return 'blank';
}

export function getIconPath(fileName: string, mimeType: string): string {
    return  ICON_FILE_MAP[getFileIconName(fileName, mimeType)]
}

export function isFilePDF(mimeType: string): boolean{
  return mimeType.includes('application/pdf');
}
export function isFileImage(mimeType: string): boolean{
  return mimeType.includes('image/');
}

