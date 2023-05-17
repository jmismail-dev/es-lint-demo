// interface Promotion {
//     createPromotion(): void;
//   }
  
//   class MmsPromotion implements Promotion {
//     createPromotion() {
//       console.log("Create MMS promotion");
//     }
//   }
  
//   class SmsPromotion implements Promotion {
//     createPromotion() {
//       console.log("Create SMS promotion");
//     }
//   }
  
//   class EmailPromotion implements Promotion {
//     createPromotion() {
//       console.log("Create Email promotion");
//     }
//   }
  
//   class PromotionFactory {
//     static createPromotion(promotionName: string): Promotion | null {
//       switch (promotionName.toUpperCase()) {
//         case "MMS":
//           return new MmsPromotion();
//         case "SMS":
//           return new SmsPromotion();
//         case "EMAIL":
//           return new EmailPromotion();
//         default:
//           return null;
//       }
//     }
//   }
  
//   const promotionName = "SMS";
//   const promotion = PromotionFactory.createPromotion(promotionName);
  
//   if (promotion) {
//     promotion.createPromotion();
//   } else {
//     console.log(`Unsupported promotion type: ${promotionName}`);
//   }
  