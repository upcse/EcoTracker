import QRCode from 'qrcode';

export const generateQRCode = async (productId: string): Promise<string> => {
  try {
    const url = `https://ecotracker.app/product/${productId}`;
    const qrCodeDataUrl = await QRCode.toDataURL(url, {
      width: 200,
      margin: 2,
      color: {
        dark: '#16a34a', // Green color
        light: '#ffffff'
      }
    });
    return qrCodeDataUrl;
  } catch (error) {
    console.error('Error generating QR code:', error);
    return '';
  }
};

export const generateProductId = (): string => {
  const timestamp = Date.now().toString(36);
  const randomStr = Math.random().toString(36).substring(2, 8);
  return `prod-${timestamp}-${randomStr}`;
};