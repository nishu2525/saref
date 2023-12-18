import React from 'react';
import './RefundPg.css';

const RefundPg = () => {
    return (
        <div >
            <div className='refund_heading'>
                <h1> Donation Refund Policy</h1>
            </div>
            <div className='refund_para'>
                <p>
                    <div >
                        <h3>Sare Foundation is committed to transparency and fairness in handling donation refunds.</h3>
                        We understand that circumstances may arise where a donor may need to request a refund
                        of their donation. This policy outlines the process for requesting and processing donation
                        refunds.
                    </div>

                    <div>
                        <h2 className='no_1'>1. Eligibility:</h2>
                        <div className='sub_headings'>
                            <span className='sub_h'>• Erroneous Donations:</span>
                            <span> Refunds will be granted for donations made in error (e.g., wrong amount, duplicate donation).</span>
                            <p>
                                <span className='sub_h'>• Change of Mind:</span>
                                <span> Refunds will be considered for donations made within 7 days of the donation date, provided the funds have not yet been allocated to a specific project.
                                </span>
                            </p>
                            <p>
                                <span className='sub_h'>• Cancellation of Project:</span>
                                <span> If a project for which a donation was made is cancelled, Sare Foundation will notify donors and issue full refunds.</span>
                            </p>
                        </div>
                        <div >
                            <h2 className='no_1'>2. Ineligible Donations:</h2>
                            <div className='sub_headings2'>
                                <span className='sub_h2'>• Donations made more than 7 days before the request.</span>
                                <p>
                                    <span className='sub_h2'>• Donations are used to generate tax exemption certificates.</span>
                                </p>
                                <p>
                                    <span className='sub_h2'>• Donations made in support of emergency response efforts.</span>
                                </p>
                                <p>
                                    <span className='sub_h2'>• Donations are made through third-party fundraising platforms.</span>
                                </p>
                                </div>
                        </div>
                        <div>
                            <h2 className='no_1'>3. Refund Request Process:</h2>
                            <p>To request a refund, please submit a written request to Sare Foundation that includes the following information:</p>
                            <div className='sub_headings2'>
                                <span className='sub_h2'>• Full name of the donor</span>
                                <p>
                                    <span className='sub_h2'>• Contact information (email address and phone number).</span>
                                </p>
                                <p>
                                    <span className='sub_h2'>• Date of the donation</span>
                                </p>
                                <p>
                                    <span className='sub_h2'>• Reason for requesting a refund</span>
                                </p>
                                <p>
                                    <span className='sub_h2'>• Donation receipt or transaction ID (if available)</span>
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className='no_1'>4. Refund Processing Time:</h2>
                            <p>Sare Foundation will review all refund requests within 10 business days of receipt.
                                You will be notified of the decision by email. Once approved, refunds will be processed
                                within 5 business days.</p>
                        </div>
                        <div>
                            <h2 className='no_1'>5. Refund Method:</h2>
                            <p>
                                Refunds will be issued to the original payment method used for the donation.
                            </p>
                        </div>
                            <div>
                                <h2 className='no_1'>6. Additional Information:</h2>
                                <span className='sub_headings2'>• Sare Foundation reserves the right to deny any refund request at its sole discretion.</span>
                                <p>
                                    <span className='sub_headings2'>• This policy may be amended at any time without prior notice.</span>
                                </p>
                                
                            </div>
                    </div>

                </p>


            </div>
        </div>
    )
}

export default RefundPg;