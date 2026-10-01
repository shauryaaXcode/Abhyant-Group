// Currency, Contact & Dynamic Link Formatters (JavaScript)
import { COMPANY_INFO } from '../data/companyData';

/**
 * Format a number into standard Indian Currency Lakhs/Crores/Rupees format
 * Example: 899000 -> ₹8.99 Lakhs, 12500000 -> ₹1.25 Cr
 */
export const formatIndianCurrency = (amount) => {
  if (amount == null || isNaN(amount)) return '₹0';
  
  if (amount >= 10000000) {
    const cr = (amount / 10000000).toFixed(2);
    return `₹${cr.replace(/\.00$/, '')} Cr`;
  }
  if (amount >= 100000) {
    const lakhs = (amount / 100000).toFixed(2);
    return `₹${lakhs.replace(/\.00$/, '')} Lakhs`;
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Clean phone number for tel: links
 */
export const getDirectCallUrl = (phone) => {
  const sanitized = (phone || COMPANY_INFO.phone).replace(/[^\d+]/g, '');
  return `tel:${sanitized}`;
};

/**
 * Generate official WhatsApp direct link with pre-filled message
 */
export const getWhatsAppUrl = (customMessage) => {
  const defaultMsg = `Hello Abhyant Group team, I am interested in your residential plotting projects in Lucknow. Please share master layout map and price matrix.`;
  const text = encodeURIComponent(customMessage || defaultMsg);
  const number = COMPANY_INFO.whatsappNumber.replace(/[^\d]/g, '');
  return `https://wa.me/${number}?text=${text}`;
};
