//   const Appoinment = () => {
//     const body = `
//             <!DOCTYPE html>
//             <html>
//               <head>
//                 <title>Hny Studios</title>
//                 <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
//                 <meta name="viewport" content="width=device-width,initial-scale=1">
//                 <meta http-equiv="X-UA-Compatible" content="IE=edge">
//               </head>
//               <body style="margin:0!important;padding:0!important;background-color:#eee" bgcolor="#eeeeee">
//                 <div style="display:none;font-size:1px;color:#fefefe;line-height:1px;font-family:Open Sans,Helvetica,Arial,sans-serif;max-height:0;max-width:0;opacity:0;overflow:hidden"></div>
//                 <table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#fff">
//                   <tr>
//                     <td align="center" style="background-color:#eee" bgcolor="#eeeeee">
//                       <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px">
//                         <tr>
//                           <td align="center" valign="top" style="font-size:0;padding:10px" bgcolor="#FFD44C">
//                             <div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;width:100%">
//                               <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%">
//                                 <tr>
//                                   <td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:6px;font-weight:800;line-height:10px" class="mobile-center">
//                                     <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px">
//                                       <tr>
//                                         <td width="100%" align="center" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:800;line-height:24px;padding:10px">
//                                           <a href="tel:+91 986745454" style="text-decoration:none;color:#000;font-family:serif;font-size:16px">HNY Studios</a>
//                                         </td>
//                                       </tr>
//                                     </table>
//                                   </td>
//                                 </tr>
//                               </table>
//                             </div>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td align="center" valign="top" style="font-size:0;padding:15px" bgcolor="#fff">
//                             <div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;display:fle;justify-content:center;align-items:center;width:100%">
//                               <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%">
//                                 <tr>
//                                   <td align="center" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:36px;font-weight:800;line-height:48px" class="mobile-center">
//                                     <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px">
//                                       <tr>
//                                         <td width="100%" align="center" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-weight:800">
//                                           <img style="width:100%;height:120px" src="https://hny-steel.vercel.app/static/media/logo.cde712f83f26c82fe284.png" alt="">
//                                         </td>
//                                       </tr>
//                                     </table>
//                                   </td>
//                                 </tr>
//                               </table>
//                             </div>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td align="center" valign="top" style="font-size:0;padding:0" bgcolor="#FFD44C">
//                             <div style="display:inline-block;max-width:100%;min-width:100px;vertical-align:top;display:fle;justify-content:center;align-items:center;width:100%">
//                               <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:100%">
//                                 <tr>
//                                   <td width="100%" align="center" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:800;padding:10px 0" class="mobile-center">
//                                     <h1 style="text-transform:capitalize;font-size:14px;font-weight:500;margin:0;text-align:center;color:#000">Client Enquiry Details</h1>
//                                   </td>
//                                 </tr>
//                               </table>
//                             </div>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td align="center" height="100%" valign="top" width="100%" style="padding:0 35px 35px 35px;background-color:#fff" bgcolor="#eee">
//                             <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px">
//                               <tr>
//                                 <td width="100%" align="center" valign="top" style="font-size:0">
//                                   <div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;text-align:center;width:100%">
//                                     <table width="100%" align="center" border="0" cellpadding="0" cellspacing="0" style="max-width:300px">
//                                       <tr>
//                                         <td width="100%" align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px">
//                                           <p style="font-size:16px;font-weight:600;color:#0074be">Customer Name:</p>
//                                           <p style="font-size:14px;font-weight:500;color:#111">${custName}</p>
//                                         </td>
//                                       </tr>
//                                     </table>
//                                   </div>
//                                   <div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%">
//                                     <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px">
//                                       <tr>
//                                         <td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px">
//                                           <p style="font-size:16px;font-weight:600;color:#0074be">Customer Email:</p>
//                                           <p style="font-size:14px;font-weight:500;color:#111">${custEmail}</p>
//                                         </td>
//                                       </tr>
//                                     </table>
//                                   </div>
//                                   <div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%">
//                                     <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px">
//                                       <tr>
//                                         <td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px">
//                                           <p style="font-size:16px;font-weight:600;color:#0074be">Customer contact:</p>
//                                           <p style="font-size:14px;font-weight:500;color:#111">${custContact}</p>
//                                         </td>
//                                       </tr>
//                                     </table>
//                                   </div>
//                                   <div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%">
//                                     <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px">
//                                       <tr>
//                                         <td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px">
//                                           <p style="font-size:16px;font-weight:600;color:#0074be">Customer Message:</p>
//                                           <p style="font-size:14px;font-weight:500;color:#111">${custMessage}</p>
//                                         </td>
//                                       </tr>
//                                     </table>
//                                   </div>
//                                   <div style="display:inline-block;max-width:50%;min-width:240px;vertical-align:top;width:100%">
//                                     <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:300px">
//                                       <tr>
//                                         <td align="left" valign="top" style="font-family:Open Sans,Helvetica,Arial,sans-serif;font-size:16px;font-weight:400;line-height:24px">
//                                           <p style="font-size:16px;font-weight:600;color:#0074be">Customer Subject:</p>
//                                           <p style="font-size:14px;font-weight:500;color:#111">${custSubject}</p>
//                                         </td>
//                                       </tr>
//                                     </table>
//                                   </div>
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                         </tr>
//                         <tr>
//                           <td width="100%" align="center" bgcolor="#FFD44C" style="padding:10px 0">
//                             <p style="color:#000;font-weight:500;font-size:1rem;padding:0;margin:0">Hny Studio</p>
//                           </td>
//                         </tr>
//                       </table>
//                     </td>
//                   </tr>
//                 </table>
//               </body>
//             </html> 
//     `;

//     fetch("https://skdm.in/server/v1/send_lead_mail.php", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body: new URLSearchParams({
//         toEmail: "hnymumbai@gmail.com",
//         fromEmail: "skdmlead@gmail.com",
//         bccMail: "skdmlead@gmail.com",
//         mailSubject: "New Customer Lead",
//         mailBody: body,
//         accountName: "hny",
//         accountLeadSource: "https://hnyspaces.com/",
//         accountLeadName: custName,
//       }),
//     })
//       .then(response => response.text())
//       .then(data => console.log(data))
//       .catch(error => console.error('Error:', error));

//     alert("Your Form has Submitted. Our team will contact you soon.");
//   };