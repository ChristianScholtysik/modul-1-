// export const waitForTwoSeconds = (): Promise<void> => {
//   return new Promise<void>((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Thank you for your patience");
//     }, 2000);
//   });
// };

// src/patient-waiter.ts

export async function waitForTwoSeconds(): Promise<void> {
  console.log("Starting the waiting...");
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Thank you for your patience");
}
