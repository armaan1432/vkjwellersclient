import React from 'react';
import Title from '../component/Title';
import Footer from '../component/Footer';

function Policy() {
  return (
    <div className="flex flex-col min-h-screen bg-[#fff8d7] text-[#910046]">

      {/* Main content */}
      <div className="flex-1 w-full flex flex-col items-center justify-start pt-[100px] px-[10px] md:px-[50px] overflow-x-hidden">

        {/* Page Title */}
        <Title text1={"WHOLESALE"} text2={"POLICY"} color="#910046" />

        {/* Intro */}
        <div className="w-[85%] lg:w-[70%] mt-[30px] flex flex-col items-start justify-center gap-[20px]">
          <p className="text-[15px] md:text-[18px] leading-relaxed text-justify">
            Welcome to <b>V.K Jewellers</b>. These Wholesale Terms and Conditions outline the agreement between 
            <b> V.K Jewellers ("VK")</b> and the Buyer for the supply of wholesale silver jewellery and related items. 
            By engaging in business with VK, you agree to the following terms:
          </p>
        </div>

        {/* Policy Sections */}
        <div className="w-[85%] lg:w-[70%] mt-[40px] flex flex-col gap-[30px]">

          {/* Section 1 */}
          <div className='bg-[#fff8d7]/90 p-[25px] md:p-[35px] rounded-2xl shadow-md border-l-[6px] border-[#910046]'>
            <h2 className='text-[20px] md:text-[24px] font-bold mb-[10px] text-[#910046]'>
              Scope & Acceptance
            </h2>
            <p className='text-[15px] md:text-[17px] leading-relaxed'>
              1.1 By placing an order or creating a wholesale account, the Buyer agrees to and accepts these Terms and Conditions in full.
            </p>
          </div>

          {/* Section 2 */}
          <div className='bg-[#fff8d7]/90 p-[25px] md:p-[35px] rounded-2xl shadow-md border-l-[6px] border-[#910046]'>
            <h2 className='text-[20px] md:text-[24px] font-bold mb-[10px] text-[#910046]'>
              Orders, Quotations & Availability
            </h2>
            <p className='text-[15px] md:text-[17px] leading-relaxed'>
              2.1 All product descriptions, catalogues, samples, and price lists are for reference only. 
              Acceptance of an order is subject to stock availability and written order confirmation by VK.
            </p>
            <p className='text-[15px] md:text-[17px] leading-relaxed mt-[10px]'>
              2.2 VK reserves the right to refuse or cancel any order if product information or pricing is incorrect, or if stock is unavailable.
            </p>
          </div>

          {/* Section 3 */}
          <div className='bg-[#fff8d7]/90 p-[25px] md:p-[35px] rounded-2xl shadow-md border-l-[6px] border-[#910046]'>
            <h2 className='text-[20px] md:text-[24px] font-bold mb-[10px] text-[#910046]'>
              Wholesale Account, Minimum Order & Pricing
            </h2>
            <p className='text-[15px] md:text-[17px] leading-relaxed'>
              3.1 Wholesale supply is available only to registered businesses. VK may request business verification documents 
              (such as GST registration, shop license, etc.) for account approval.
            </p>
            <p className='text-[15px] md:text-[17px] leading-relaxed mt-[10px]'>
              3.2 Minimum opening order: ₹[specify amount / number of pieces] (or as mutually agreed). Minimum reorder quantities may also apply.
            </p>
            <p className='text-[15px] md:text-[17px] leading-relaxed mt-[10px]'>
              3.3 All prices are exclusive of applicable taxes (GST), unless stated otherwise.
            </p>
          </div>

          {/* Section 4 */}
          <div className='bg-[#fff8d7]/90 p-[25px] md:p-[35px] rounded-2xl shadow-md border-l-[6px] border-[#910046]'>
            <h2 className='text-[20px] md:text-[24px] font-bold mb-[10px] text-[#910046]'>
              Payment Terms
            </h2>
            <p className='text-[15px] md:text-[17px] leading-relaxed'>
              4.1 Accepted payment methods include Bank Transfer (NEFT/RTGS), UPI, Cheque (subject to clearance), 
              or any other method agreed upon in writing.
            </p>
            <p className='text-[15px] md:text-[17px] leading-relaxed mt-[10px]'>
              4.2 In case of late payment, VK reserves the right to withhold delivery, charge interest on overdue amounts, or cancel pending orders.
            </p>
          </div>

          {/* Section 5 */}
          <div className='bg-[#fff8d7]/90 p-[25px] md:p-[35px] rounded-2xl shadow-md border-l-[6px] border-[#910046]'>
            <h2 className='text-[20px] md:text-[24px] font-bold mb-[10px] text-[#910046]'>
              Dispatch, Shipping & Risk
            </h2>
            <p className='text-[15px] md:text-[17px] leading-relaxed'>
              5.1 VK will arrange dispatch from its warehouse. Unless otherwise agreed, shipping charges, customs duties, and insurance costs 
              (if applicable) are payable by the Buyer.
            </p>
            <p className='text-[15px] md:text-[17px] leading-relaxed mt-[10px]'>
              5.2 The risk of loss or damage passes to the Buyer once goods are handed over to the carrier or at the time of dispatch. 
              VK is not responsible for courier delays.
            </p>
            <p className='text-[15px] md:text-[17px] leading-relaxed mt-[10px]'>
              5.3 Delivery timelines are indicative only. VK will not be liable for delays caused by force majeure events or third-party carriers.
            </p>
          </div>

          {/* Section 6 */}
          <div className='bg-[#fff8d7]/90 p-[25px] md:p-[35px] rounded-2xl shadow-md border-l-[6px] border-[#910046]'>
            <h2 className='text-[20px] md:text-[24px] font-bold mb-[10px] text-[#910046]'>
              Inspection, Returns & Defects
            </h2>
            <p className='text-[15px] md:text-[17px] leading-relaxed'>
              6.1 The Buyer must inspect the goods upon receipt. Any visible damage or short shipment must be reported to VK within 48 hours, 
              along with photographic evidence.
            </p>
            <p className='text-[15px] md:text-[17px] leading-relaxed mt-[10px]'>
              6.2 Claims for manufacturing defects must be reported within 3 days of receipt, supported by relevant proof. 
              VK will inspect the claim and may, at its discretion, replace or refund the defective items.
            </p>
            <p className='text-[15px] md:text-[17px] leading-relaxed mt-[10px]'>
              6.3 Non-returnable items include:
              <ul className='list-disc ml-[20px] mt-[10px]'>
                <li>Orders made to the Buyer’s specifications</li>
                <li>Natural variations in silver finish or craftsmanship</li>
                <li>Change of mind</li>
                <li>Minor colour or finish differences</li>
              </ul>
            </p>
          </div>

          {/* Section 9 */}
          <div className='bg-[#fff8d7]/90 p-[25px] md:p-[35px] rounded-2xl shadow-md border-l-[6px] border-[#910046]'>
            <h2 className='text-[20px] md:text-[24px] font-bold mb-[10px] text-[#910046]'>
              Cancellation Policy
            </h2>
            <p className='text-[15px] md:text-[17px] leading-relaxed'>
              9.1 Orders may be cancelled by the Buyer only prior to dispatch. VK reserves the right to levy a cancellation fee to cover handling or manufacturing costs.
            </p>
            <p className='text-[15px] md:text-[17px] leading-relaxed mt-[10px]'>
              9.2 Once an order has been dispatched, it cannot be cancelled.
            </p>
          </div>

          {/* Section 10 */}
          <div className='bg-[#fff8d7]/90 p-[25px] md:p-[35px] rounded-2xl shadow-md border-l-[6px] border-[#910046]'>
            <h2 className='text-[20px] md:text-[24px] font-bold mb-[10px] text-[#910046]'>
              Force Majeure
            </h2>
            <p className='text-[15px] md:text-[17px] leading-relaxed'>
              10.1 VK shall not be liable for any delay or failure to perform obligations under these Terms due to causes beyond its reasonable control, 
              including but not limited to natural disasters, strikes, pandemics, courier failures, or government actions.
            </p>
          </div>

          {/* Section 13 */}
          <div className='bg-[#fff8d7]/90 p-[25px] md:p-[35px] rounded-2xl shadow-md border-l-[6px] border-[#910046]'>
            <h2 className='text-[20px] md:text-[24px] font-bold mb-[10px] text-[#910046]'>
              Variation of Terms
            </h2>
            <p className='text-[15px] md:text-[17px] leading-relaxed'>
              13.1 VK may revise or modify these Terms at any time. Updated Terms will be posted on the official website 
              and shall take effect from the date of publication. Continued business dealings with VK after such updates 
              will constitute acceptance of the revised Terms.
            </p>
          </div>

          {/* Section 14 */}
          <div className='bg-[#fff8d7]/90 p-[25px] md:p-[35px] rounded-2xl shadow-md border-l-[6px] border-[#910046]'>
            <h2 className='text-[20px] md:text-[24px] font-bold mb-[10px] text-[#910046]'>
              Governing Law & Dispute Resolution
            </h2>
            <p className='text-[15px] md:text-[17px] leading-relaxed'>
              14.1 These Terms are governed by the laws of India. Any disputes arising under or in connection with these Terms 
              shall be subject to the exclusive jurisdiction of the courts in Kanpur, Uttar Pradesh.
            </p>
          </div>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Policy;
