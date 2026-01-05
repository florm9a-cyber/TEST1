// Simulating a backend API for payment processing
export interface PaymentResponse {
  success: boolean;
  transactionId?: string;
  message?: string;
}

export const processPayment = async (
  amount: number, 
  method: 'card' | 'paypal', 
  details: any
): Promise<PaymentResponse> => {
  console.log(`Processing ${method} payment for $${amount}`, details);
  
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate API network delay
      
      // Simulate occasional failure (e.g. 5% chance)
      const isSuccess = Math.random() > 0.05;

      if (isSuccess) {
        resolve({
          success: true,
          transactionId: 'tx_' + Math.random().toString(36).substr(2, 9).toUpperCase()
        });
      } else {
        reject(new Error('Transaction declined: Insufficient funds or bank rejection.'));
      }
    }, 2500);
  });
};
