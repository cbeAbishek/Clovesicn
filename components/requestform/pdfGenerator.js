import jsPDF from 'jspdf';

// Company logo as base64 (replace with actual logo)
const COMPANY_LOGO_BASE64 = '/cicon.png';

// Product categories mapping for PDF
const PRODUCT_CATEGORIES = {
    'Autoclave Liners': {
        icon: '🛡️',
        items: {
            'al-1': { name: 'Standard Autoclave Liners', price: '$25/pack' },
            'al-2': { name: 'Heavy-Duty Sterilization Bags', price: '$35/pack' },
            'al-3': { name: 'Biodegradable Autoclave Liners', price: '$40/pack' }
        }
    },
    'Packaging Solutions': {
        icon: '📦',
        items: {
            'ps-1': { name: 'Medical Waste Containers', price: '$15/unit' },
            'ps-2': { name: 'Sustainable Packaging', price: '$20/unit' },
            'ps-3': { name: 'Industrial Storage Solutions', price: '$30/unit' }
        }
    },
    'Specialized Equipment': {
        icon: '⚙️',
        items: {
            'se-1': { name: 'Custom Sterilization Systems', price: 'Quote on request' },
            'se-2': { name: 'Eco-Friendly Disposal Units', price: 'Quote on request' }
        }
    }
};

class PDFGenerator {
    constructor() {
        this.pdf = null;
        this.currentY = 20;
        this.pageHeight = 297; // A4 height in mm
        this.pageWidth = 210; // A4 width in mm
        this.margin = 20;
        this.brandColor = [57, 181, 75]; // #39b54b in RGB
    }

    // Initialize PDF document
    initPDF() {
        this.pdf = new jsPDF('p', 'mm', 'a4');
        this.currentY = 20;

        // Set default font
        this.pdf.setFont('helvetica');

        return this.pdf;
    }

    // Add company header
    addHeader() {
        // Company logo (placeholder - replace with actual logo)
        try {
            this.pdf.addImage(COMPANY_LOGO_BASE64, 'PNG', this.margin, 10, 30, 30);
        } catch (error) {
            console.warn('Logo not loaded, skipping...');
        }

        // Company name and tagline
        this.pdf.setFontSize(20);
        this.pdf.setTextColor(...this.brandColor);
        this.pdf.setFont('helvetica', 'bold');
        this.pdf.text('CLOVES INC.', this.pageWidth - this.margin, 25, { align: 'right' });

        this.pdf.setFontSize(10);
        this.pdf.setTextColor(100, 100, 100);
        this.pdf.setFont('helvetica', 'normal');
        this.pdf.text('Healthcare • Industrial • Commercial Solutions', this.pageWidth - this.margin, 32, { align: 'right' });

        // Title
        this.pdf.setFontSize(20);
        this.pdf.setTextColor(0, 0, 0);
        this.pdf.setFont('helvetica', 'bold');
        this.pdf.text('QUOTE REQUEST', this.margin, 50);

        // Horizontal line
        this.pdf.setLineWidth(0.5);
        this.pdf.setDrawColor(...this.brandColor);
        this.pdf.line(this.margin, 55, this.pageWidth - this.margin, 55);

        this.currentY = 65;
    }

    // Add customer information section
    addCustomerInfo(contactData, customizationData) {
        this.pdf.setFontSize(14);
        this.pdf.setTextColor(...this.brandColor);
        this.pdf.setFont('helvetica', 'bold');
        this.pdf.text('CUSTOMER INFORMATION', this.margin, this.currentY);

        this.currentY += 10;

        // Customer details in two columns
        this.pdf.setFontSize(10);
        this.pdf.setTextColor(0, 0, 0);
        this.pdf.setFont('helvetica', 'normal');

        const leftColumn = this.margin;
        const rightColumn = this.pageWidth / 2 + 10;

        // Left column
        this.pdf.setFont('helvetica', 'bold');
        this.pdf.text('Company:', leftColumn, this.currentY);
        this.pdf.setFont('helvetica', 'normal');
        this.pdf.text(contactData.company || 'N/A', leftColumn + 20, this.currentY);

        this.pdf.setFont('helvetica', 'bold');
        this.pdf.text('Contact Person:', leftColumn, this.currentY + 6);
        this.pdf.setFont('helvetica', 'normal');
        this.pdf.text(contactData.name || 'N/A', leftColumn + 30, this.currentY + 6);

        this.pdf.setFont('helvetica', 'bold');
        this.pdf.text('Email:', leftColumn, this.currentY + 12);
        this.pdf.setFont('helvetica', 'normal');
        this.pdf.text(contactData.email || 'N/A', leftColumn + 15, this.currentY + 12);

        // Right column
        this.pdf.setFont('helvetica', 'bold');
        this.pdf.text('Phone:', rightColumn, this.currentY);
        this.pdf.setFont('helvetica', 'normal');
        this.pdf.text(contactData.phone || 'N/A', rightColumn + 15, this.currentY);

        this.pdf.setFont('helvetica', 'bold');
        this.pdf.text('Region:', rightColumn, this.currentY + 6);
        this.pdf.setFont('helvetica', 'normal');
        this.pdf.text(contactData.region || 'N/A', rightColumn + 15, this.currentY + 6);

        this.pdf.setFont('helvetica', 'bold');
        this.pdf.text('Industry:', rightColumn, this.currentY + 12);
        this.pdf.setFont('helvetica', 'normal');
        this.pdf.text(customizationData.industry || 'N/A', rightColumn + 18, this.currentY + 12);

        // Timeline and special requirements
        this.currentY += 24;

        this.pdf.setFont('helvetica', 'bold');
        this.pdf.text('Delivery Timeline:', leftColumn, this.currentY);
        this.pdf.setFont('helvetica', 'normal');
        const timeline = contactData.timeline === 'Custom date'
            ? `Custom (${contactData.customDate})`
            : contactData.timeline || 'N/A';
        this.pdf.text(timeline, leftColumn + 35, this.currentY);

        // Sustainability preference
        if (customizationData.sustainability) {
            this.pdf.setFont('helvetica', 'bold');
            this.pdf.setTextColor(...this.brandColor);
            this.pdf.text('ECO-FRIENDLY MATERIALS PRIORITIZED', rightColumn, this.currentY);
        }

        this.currentY += 15;
    }

    // Add selected products section
    addProductsSection(productsData) {
        // Add new page if too low
        if (this.currentY > this.pageHeight - 80) {
            this.pdf.addPage();
            this.currentY = 20;
        }

        // Section Title
        this.pdf.setFontSize(14);
        this.pdf.setTextColor(...this.brandColor);
        this.pdf.setFont('helvetica', 'bold');
        this.pdf.text('SELECTED PRODUCTS', this.margin, this.currentY);
        this.currentY += 10;

        // Table Header Background
        const headerHeight = 10;
        this.pdf.setFillColor(...this.brandColor);
        this.pdf.rect(this.margin, this.currentY, this.pageWidth - 2 * this.margin, headerHeight, 'F');

        // Table Header Text
        this.pdf.setTextColor(255, 255, 255);
        this.pdf.setFontSize(10);
        this.pdf.setFont('helvetica', 'bold');
        const textY = this.currentY + 7;

        // Calculate column positions for center alignment
        const tableWidth = this.pageWidth - 2 * this.margin;
        const col1Width = tableWidth * 0.5; // PRODUCT
        const col2Width = tableWidth * 0.25; // QUANTITY
        const col3Width = tableWidth * 0.25; // PRICE

        const col1X = this.margin + col1Width / 2;
        const col2X = this.margin + col1Width + col2Width / 2;
        const col3X = this.margin + col1Width + col2Width + col3Width / 2;

        this.pdf.text('PRODUCT', col1X, textY, { align: 'center' });
        this.pdf.text('QUANTITY', col2X, textY, { align: 'center' });
        this.pdf.text('PRICE', col3X, textY, { align: 'center' });

        this.currentY += headerHeight + 2;

        // Table Body
        this.pdf.setFont('helvetica', 'normal');
        this.pdf.setFontSize(10);
        this.pdf.setTextColor(0, 0, 0);

        let totalItems = 0;

        Object.entries(productsData).forEach(([productId, quantity]) => {
            if (quantity && quantity > 0) {
                // Get product details
                let productDetails = null;
                let categoryName = '';

                Object.entries(PRODUCT_CATEGORIES).forEach(([category, data]) => {
                    if (data.items[productId]) {
                        productDetails = data.items[productId];
                        categoryName = category;
                    }
                });

                if (productDetails) {
                    // Check for page overflow
                    if (this.currentY > this.pageHeight - 30) {
                        this.pdf.addPage();
                        this.currentY = 20;
                    }

                    // Alternate row background
                    if (totalItems % 2 === 0) {
                        this.pdf.setFillColor(248, 248, 248);
                        this.pdf.rect(this.margin, this.currentY - 1, this.pageWidth - 2 * this.margin, headerHeight, 'F');
                    }

                    const rowTextY = this.currentY + 7;

                    // Product Name
                    this.pdf.setFont('helvetica', 'normal');
                    this.pdf.text(productDetails.name, this.margin + 3, rowTextY);

                    // Quantity (right-aligned)
                    // Quantity (center-aligned)
                    this.pdf.text(quantity.toString(), col2X, rowTextY, { align: 'center' });

                    // Price (center-aligned)
                    this.pdf.text(productDetails.price, col3X, rowTextY, { align: 'center' });

                    this.currentY += headerHeight;
                    totalItems++;
                }
            }
        });

        // Summary Section
        this.currentY += 5;
        this.pdf.setFont('helvetica', 'bold');
        this.pdf.setTextColor(0, 0, 0);
        this.pdf.text(`Total Items: ${totalItems}`, this.margin, this.currentY);

        this.currentY += 15;
    }


    // Add special notes section
    addSpecialNotes(customizationData) {
        if (this.currentY > this.pageHeight - 50) {
            this.pdf.addPage();
            this.currentY = 20;
        }

        this.pdf.setFontSize(14);
        this.pdf.setTextColor(...this.brandColor);
        this.pdf.setFont('helvetica', 'bold');
        this.pdf.text('SPECIAL REQUIREMENTS', this.margin, this.currentY);

        this.currentY += 10;

        this.pdf.setFontSize(10);
        this.pdf.setTextColor(0, 0, 0);
        this.pdf.setFont('helvetica', 'normal');

        let hasNotes = false;

        if (customizationData.industry === 'Healthcare' && customizationData.hospitalName) {
            this.pdf.text(`• Hospital/Facility: ${customizationData.hospitalName}`, this.margin, this.currentY);
            this.currentY += 6;
            hasNotes = true;
        }

        if (customizationData.sustainability) {
            this.pdf.text('• Eco-friendly materials preferred where available', this.margin, this.currentY);
            this.currentY += 6;
            hasNotes = true;
        }

        if (customizationData.specifications) {
            this.pdf.text('• Custom specifications uploaded (see attached files)', this.margin, this.currentY);
            this.currentY += 6;
            hasNotes = true;
        }

        if (!hasNotes) {
            this.pdf.text('No special requirements specified.', this.margin, this.currentY);
            this.currentY += 6;
        }

        this.currentY += 10;
    }

    // Add footer
    addFooter() {
        const footerY = this.pageHeight - 30;

        // Horizontal line
        this.pdf.setLineWidth(0.3);
        this.pdf.setDrawColor(...this.brandColor);
        this.pdf.line(this.margin, footerY, this.pageWidth - this.margin, footerY);

        // Footer text
        this.pdf.setFontSize(8);
        this.pdf.setTextColor(100, 100, 100);
        this.pdf.setFont('helvetica', 'normal');

        const dateStr = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        this.pdf.text(`Generated on ${dateStr}`, this.margin, footerY + 8);
        this.pdf.text('Cloves Inc. - Healthcare, Industrial & Commercial Solutions', this.margin, footerY + 14);
        this.pdf.text('Contact: info@clovesinc.com | www.clovesinc.org', this.margin, footerY + 20);

        // Page number
        const pageCount = this.pdf.internal.getNumberOfPages();
        this.pdf.text(`Page 1 of ${pageCount}`, this.pageWidth - this.margin, footerY + 8, { align: 'right' });

        // Certification badge
        this.pdf.setFontSize(7);
        this.pdf.setTextColor(...this.brandColor);
        this.pdf.text('ISO 9001 Certified | Eco-Friendly Materials', this.pageWidth - this.margin, footerY + 14, { align: 'right' });
    }

    // Main generation function
    generateQuotePDF(formData) {
        try {
            this.initPDF();

            // Add all sections
            this.addHeader();
            this.addCustomerInfo(formData.contact, formData.customization);
            this.addProductsSection(formData.products);
            this.addSpecialNotes(formData.customization);
            this.addFooter();

            return this.pdf;
        } catch (error) {
            console.error('Error generating PDF:', error);
            throw new Error('Failed to generate PDF quote');
        }
    }

    // Download PDF
    downloadPDF(formData, filename = null) {
        try {
            const pdf = this.generateQuotePDF(formData);
            const defaultFilename = `Cloves_Quote_${formData.contact.company || 'Request'}_${new Date().toISOString().split('T')[0]}.pdf`;

            pdf.save(filename || defaultFilename);
            return true;
        } catch (error) {
            console.error('Error downloading PDF:', error);
            return false;
        }
    }

    // Get PDF as blob for further processing
    getPDFBlob(formData) {
        try {
            const pdf = this.generateQuotePDF(formData);
            return pdf.output('blob');
        } catch (error) {
            console.error('Error creating PDF blob:', error);
            return null;
        }
    }

    // Get PDF as base64 string
    getPDFBase64(formData) {
        try {
            const pdf = this.generateQuotePDF(formData);
            return pdf.output('datauristring');
        } catch (error) {
            console.error('Error creating PDF base64:', error);
            return null;
        }
    }
}

// Export singleton instance
const pdfGenerator = new PDFGenerator();

export default pdfGenerator;

// Export individual functions for convenience
export const generateQuotePDF = (formData) => pdfGenerator.generateQuotePDF(formData);
export const downloadQuotePDF = (formData, filename) => pdfGenerator.downloadPDF(formData, filename);
export const getQuotePDFBlob = (formData) => pdfGenerator.getPDFBlob(formData);
export const getQuotePDFBase64 = (formData) => pdfGenerator.getPDFBase64(formData);