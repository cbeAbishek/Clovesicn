import RequestQuotePage from "@/components/requestform/Quote";
import ProductsPage from "@/components//requestform/rq";

export const metadata = {
  title: 'Request a Quote | Cloves Inc.',
  description: 'Get a personalized quote from Cloves Inc. for autoclave liners, industrial packaging, or commercial textiles. Fill out our form or contact us directly for fast assistance.',
};

export default function Request() {
  return (
    <>
        <ProductsPage />
        {/* <RequestQuotePage /> */}
       
    </>
  );
}