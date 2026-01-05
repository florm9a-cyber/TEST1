import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, CreditCard, CheckCircle, ShieldCheck, ArrowLeft, Loader2, Wallet, AlertCircle, XCircle, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { processPayment } from '../services/mockApi';

const Checkout: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [transactionId, setTransactionId] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal'>('card');
  
  const [formData, setFormData] = useState({
    email: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });

  const [fieldErrors, setFieldErrors] = useState({
    email: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', cardName: '', cardNumber: '', expiry: '', cvc: '' };

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (paymentMethod === 'card') {
      // Card Name
      if (!formData.cardName.trim()) {
        newErrors.cardName = 'Cardholder name is required';
        isValid = false;
      }

      // Card Number
      const cleanCardNum = formData.cardNumber.replace(/\s/g, '');
      if (!cleanCardNum) {
        newErrors.cardNumber = 'Card number is required';
        isValid = false;
      } else if (!/^\d{13,19}$/.test(cleanCardNum)) {
        newErrors.cardNumber = 'Invalid card number';
        isValid = false;
      }

      // Expiry Date
      if (!formData.expiry) {
        newErrors.expiry = 'Required';
        isValid = false;
      } else if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(formData.expiry)) {
        newErrors.expiry = 'Invalid (MM/YY)';
        isValid = false;
      } else {
        const [month, year] = formData.expiry.split('/');
        const currentYear = parseInt(String(new Date().getFullYear()).slice(-2));
        const currentMonth = new Date().getMonth() + 1;
        const expYear = parseInt(year);
        const expMonth = parseInt(month);

        if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
          newErrors.expiry = 'Expired';
          isValid = false;
        }
      }

      // CVC
      if (!formData.cvc) {
        newErrors.cvc = 'Required';
        isValid = false;
      } else if (!/^\d{3,4}$/.test(formData.cvc)) {
        newErrors.cvc = 'Invalid CVC';
        isValid = false;
      }
    }

    setFieldErrors(newErrors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'cardNumber') {
      // Allow only numbers and spaces
      const numbers = value.replace(/\D/g, '');
      // Group by 4
      formattedValue = numbers.replace(/(\d{4})(?=\d)/g, '$1 ').trim();
    } else if (name === 'expiry') {
      // Format as MM/YY
      const numbers = value.replace(/\D/g, '');
      if (numbers.length >= 3) {
        formattedValue = `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}`;
      } else {
        formattedValue = numbers;
      }
    } else if (name === 'cvc') {
      formattedValue = value.replace(/\D/g, '').slice(0, 4);
    }

    setFormData(prev => ({ ...prev, [name]: formattedValue }));
    
    // Clear error for this field as user types
    if (fieldErrors[name as keyof typeof fieldErrors]) {
      setFieldErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Call mock backend API
      const result = await processPayment(150.00, paymentMethod, formData);
      if (result.success) {
        setSuccess(true);
        if (result.transactionId) {
          setTransactionId(result.transactionId);
        }
      }
    } catch (err: any) {
      setError(err.message || 'Payment processing failed. Please try again.');
      // Shake effect or visual feedback could be added here
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-slate-900 border border-slate-800 rounded-3xl p-8 max-w-md w-full text-center shadow-2xl shadow-emerald-900/20"
        >
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-emerald-500" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Payment Successful!</h2>
          <p className="text-slate-400 mb-6">
            Thank you for subscribing to StreamPulse. A confirmation email has been sent to <strong className="text-white">{formData.email}</strong>.
          </p>
          
          <div className="bg-slate-950 rounded-xl p-4 mb-8 border border-slate-800 flex flex-col items-center">
            <span className="text-xs text-slate-500 uppercase tracking-wider mb-1">Transaction ID</span>
            <span className="font-mono text-brand-400 font-bold">{transactionId || 'TXN-PENDING'}</span>
          </div>

          <div className="space-y-3">
            <Link 
              to="/" 
              className="block w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 rounded-xl transition-colors"
            >
              Start Watching Now
            </Link>
            <button className="flex items-center justify-center w-full text-slate-400 hover:text-white text-sm font-medium py-2 transition-colors">
              <FileText className="w-4 h-4 mr-2" /> Download Receipt
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          
          <Link to="/pricing" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Pricing
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-white">Secure Checkout</h2>
                  <div className="flex items-center gap-1 text-emerald-500 bg-emerald-500/10 px-3 py-1 rounded-full text-xs font-medium">
                    <Lock className="w-3 h-3" /> SSL Encrypted
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Customer Info */}
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Account Details</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-white text-sm font-medium mb-2">Email Address</label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          placeholder="you@example.com"
                          className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600 ${fieldErrors.email ? 'border-red-500 focus:ring-red-500' : 'border-slate-700'}`}
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                        {fieldErrors.email && (
                          <p className="text-red-500 text-xs mt-1 ml-1">{fieldErrors.email}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-slate-800 my-6"></div>

                  {/* Payment Method Selector */}
                  <div>
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Payment Method</h3>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('card')}
                        className={`relative rounded-xl p-4 flex flex-col items-center justify-center border-2 transition-all ${
                          paymentMethod === 'card' 
                            ? 'bg-brand-600/10 border-brand-600 text-white' 
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <CreditCard className={`w-6 h-6 mb-2 ${paymentMethod === 'card' ? 'text-brand-500' : 'text-slate-500'}`} />
                        <span className="font-medium text-sm">Credit Card</span>
                        {paymentMethod === 'card' && (
                          <div className="absolute top-2 right-2 w-2 h-2 bg-brand-500 rounded-full"></div>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('paypal')}
                        className={`relative rounded-xl p-4 flex flex-col items-center justify-center border-2 transition-all ${
                          paymentMethod === 'paypal' 
                            ? 'bg-blue-600/10 border-blue-500 text-white' 
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                        }`}
                      >
                        <Wallet className={`w-6 h-6 mb-2 ${paymentMethod === 'paypal' ? 'text-blue-500' : 'text-slate-500'}`} />
                        <span className="font-medium text-sm">PayPal</span>
                        {paymentMethod === 'paypal' && (
                          <div className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                      </button>
                    </div>

                    {/* Card Form */}
                    <AnimatePresence mode="wait">
                      {paymentMethod === 'card' ? (
                        <motion.div
                          key="card"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-4"
                        >
                          <div>
                            <label className="block text-white text-sm font-medium mb-2">Cardholder Name</label>
                            <input 
                              type="text" 
                              name="cardName"
                              required
                              placeholder="John Doe"
                              className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600 ${fieldErrors.cardName ? 'border-red-500 focus:ring-red-500' : 'border-slate-700'}`}
                              value={formData.cardName}
                              onChange={handleInputChange}
                            />
                            {fieldErrors.cardName && (
                              <p className="text-red-500 text-xs mt-1 ml-1">{fieldErrors.cardName}</p>
                            )}
                          </div>

                          <div>
                            <label className="block text-white text-sm font-medium mb-2">Card Number</label>
                            <div className="relative">
                              <input 
                                type="text" 
                                name="cardNumber"
                                required
                                maxLength={19}
                                placeholder="0000 0000 0000 0000"
                                className={`w-full bg-slate-950 border rounded-xl px-4 py-3 pl-12 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600 font-mono ${fieldErrors.cardNumber ? 'border-red-500 focus:ring-red-500' : 'border-slate-700'}`}
                                value={formData.cardNumber}
                               onChange={handleInputChange}
                              />
                              <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                            </div>
                            {fieldErrors.cardNumber && (
                              <p className="text-red-500 text-xs mt-1 ml-1">{fieldErrors.cardNumber}</p>
                            )}
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-white text-sm font-medium mb-2">Expiry Date</label>
                              <input 
                                type="text" 
                                name="expiry"
                                required
                                placeholder="MM/YY"
                                maxLength={5}
                                className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600 text-center font-mono ${fieldErrors.expiry ? 'border-red-500 focus:ring-red-500' : 'border-slate-700'}`}
                                value={formData.expiry}
                                onChange={handleInputChange}
                              />
                              {fieldErrors.expiry && (
                                <p className="text-red-500 text-xs mt-1 ml-1">{fieldErrors.expiry}</p>
                              )}
                            </div>
                            <div>
                              <label className="block text-white text-sm font-medium mb-2">CVC</label>
                              <div className="relative">
                                <input 
                                  type="text" 
                                  name="cvc"
                                  required
                                  placeholder="123"
                                  maxLength={4}
                                  className={`w-full bg-slate-950 border rounded-xl px-4 py-3 pl-10 text-white focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600 font-mono ${fieldErrors.cvc ? 'border-red-500 focus:ring-red-500' : 'border-slate-700'}`}
                                  value={formData.cvc}
                                  onChange={handleInputChange}
                                />
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
                              </div>
                              {fieldErrors.cvc && (
                                <p className="text-red-500 text-xs mt-1 ml-1">{fieldErrors.cvc}</p>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="paypal"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="bg-blue-900/10 border border-blue-900/30 rounded-xl p-6 text-center"
                        >
                          <p className="text-blue-100 text-sm mb-4">
                            You will be redirected to PayPal to complete your purchase securely.
                          </p>
                          <div className="h-10 w-32 bg-slate-800 rounded mx-auto flex items-center justify-center text-slate-500 text-xs italic">
                             <span className="font-bold text-lg text-white"><span className="text-[#003087]">Pay</span><span className="text-[#009cde]">Pal</span></span>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {error && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-900/20 border border-red-500/50 rounded-xl p-4 flex items-start gap-3"
                    >
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div>
                         <h4 className="text-red-500 font-bold text-sm mb-1">Transaction Failed</h4>
                         <p className="text-red-400/90 text-sm">{error}</p>
                      </div>
                    </motion.div>
                  )}

                  <button 
                    type="submit" 
                    disabled={loading}
                    className={`w-full font-bold py-4 rounded-xl shadow-lg transition-all transform active:scale-[0.98] flex items-center justify-center mt-8 ${
                      paymentMethod === 'paypal' 
                      ? 'bg-[#0070BA] hover:bg-[#005ea6] text-white shadow-blue-900/20' 
                      : 'bg-brand-600 hover:bg-brand-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white shadow-brand-600/20'
                    }`}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" /> Processing...
                      </>
                    ) : (
                      <>
                        {paymentMethod === 'paypal' ? 'Proceed with PayPal' : 'Pay $150.00 Securely'}
                      </>
                    )}
                  </button>

                  <div className="flex flex-col items-center justify-center mt-6 gap-3 pt-6 border-t border-slate-800/50">
                     <p className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Accepted Securely</p>
                     <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-all duration-300">
                        {/* Visa */}
                        <div className="bg-white h-8 w-12 rounded flex items-center justify-center shadow-sm">
                           <svg className="w-full h-full p-1.5" viewBox="0 0 50 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M19.7 0.600006H13.6L9.60004 9.80001L5.90004 1.30001C5.20004 -0.899994 2.10004 0.600006 1.10004 0.900006L0.200043 2.80001C3.80004 3.90001 7.20004 8.20001 8.80004 11.9L4.90004 29.5L11.2 29.5L19.7 0.600006Z" fill="#1434CB"/>
                              <path d="M28.3 0.600006H22.1L17.2 29.5H23.4L28.3 0.600006Z" fill="#1434CB"/>
                              <path d="M30.6 12.3C31.5 8.10001 37.5 7.80001 37.7 5.90001C37.8 5.00001 36.9 4.30001 34.6 4.50001C32.4 4.70001 31.7 5.30001 30.9 5.80001L29.6 1.80001C31.2 1.00001 33.7 0.300006 36.4 0.300006C42.8 0.300006 47 3.50001 46.9 8.20001C46.8 14.9 39.5 15.1 39.3 17.6C39.2 18.3 39.9 19 41.6 19.1C42.8 19.2 44.9 18.9 46.4 18.1L47.5 22.3C45.8 23 42.7 23.4 40.2 23.4C33.4 23.4 28.7 19.9 28.9 14.8C29 13.5 29.7 12.5 30.6 12.3Z" fill="#1434CB"/>
                              <path d="M53.1 0.600006H48.2L44.8 16.9L47.3 22.5L53.1 0.600006Z" fill="#F59D00"/>
                           </svg>
                        </div>
                        {/* Mastercard */}
                        <div className="bg-white h-8 w-12 rounded flex items-center justify-center shadow-sm">
                           <svg className="w-full h-full p-1" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="7" cy="8" r="7" fill="#EB001B"/>
                              <circle cx="17" cy="8" r="7" fill="#F79E1B"/>
                              <path d="M12 12.8995C13.433 11.7548 14.3333 9.99978 14.3333 7.99978C14.3333 5.99978 13.433 4.24478 12 3.09998C10.567 4.24478 9.66666 5.99978 9.66666 7.99978C9.66666 9.99978 10.567 11.7548 12 12.8995Z" fill="#FF5F00"/>
                           </svg>
                        </div>
                        {/* Amex */}
                        <div className="bg-[#006fcf] h-8 w-12 rounded flex items-center justify-center overflow-hidden shadow-sm">
                           <svg className="w-full h-full p-1" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                             <path d="M2.5 7.5L7.5 7.5L9.5 12.5L11.5 7.5L16.5 7.5L12.5 17.5L16.5 22.5L11.5 22.5L10.5 20L8.5 20L7.5 22.5L2.5 22.5L6.5 12.5L2.5 7.5Z" fill="white" />
                             <path d="M18.5 7.5H23.5L25.5 12.5L27.5 7.5H32.5V22.5H28.5V12.5L26.5 17.5H24.5L22.5 12.5V22.5H18.5V7.5Z" fill="white"/>
                             <path d="M34.5 7.5H44.5V11.5H38.5V13.5H43.5V16.5H38.5V18.5H44.5V22.5H34.5V7.5Z" fill="white"/>
                           </svg>
                        </div>
                     </div>
                  </div>

                </form>
              </motion.div>
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:col-span-1">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sticky top-28"
              >
                <h3 className="text-white font-bold mb-6">Order Summary</h3>
                
                <div className="flex gap-4 mb-6">
                   <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700">
                      <ShieldCheck className="w-8 h-8 text-brand-500" />
                   </div>
                   <div>
                      <h4 className="text-white font-medium">Annual Elite Pass</h4>
                      <p className="text-slate-400 text-sm">12 Months Subscription</p>
                   </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-slate-400 text-sm">
                    <span>Subtotal</span>
                    <span>$150.00</span>
                  </div>
                  <div className="flex justify-between text-slate-400 text-sm">
                    <span>Setup Fee</span>
                    <span className="text-emerald-500">Free</span>
                  </div>
                  <div className="flex justify-between text-slate-400 text-sm">
                    <span>Tax</span>
                    <span>$0.00</span>
                  </div>
                  <div className="h-px bg-slate-800 my-2"></div>
                  <div className="flex justify-between text-white font-bold text-lg">
                    <span>Total</span>
                    <span>$150.00</span>
                  </div>
                </div>

                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800">
                  <h4 className="text-white text-xs font-bold uppercase mb-2">Guarantee</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    If you are not satisfied within the first 30 days, we will refund your payment in full. No questions asked.
                  </p>
                </div>

              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;