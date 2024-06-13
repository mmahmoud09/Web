// document.querySelector('#myForm').addEventListener('submit', async (event) => {
//   event.preventDefault();
//   const fileInput = document.getElementById('imageInput');
//   const file = fileInput.files[0];

//   if (file) {
//       const reader = new FileReader();
//       reader.onload = async function (e) {
//           // const base64Image = e.target.result;
//           const imageUrl = await uploadImage(e.target.result);

//           // Combine data and image into a single object
//           const combinedObject = {
//               "ServiceName": document.getElementById('mr2').value,
//               // "ServiceIcon": base64Image,
//               "ServiceIcon": imageUrl,

//               "ServiceNameAr": document.getElementById('mr1').value,
//           };
//           let headers = new Headers();
//           headers.append('Content-Type', 'application/json');
//           headers.append('Accept', 'application/json');
//           // headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));
//           headers.append('Origin', 'http://localhost:3000');
//           try {
//               // Send combinedObject to your API (using fetch or other methods)
//               const response = await fetch('http://ashello-001-site1.ktempurl.com/api/Services', {
//                   method: 'POST',
//                   headers: headers,
//                   body: JSON.stringify(combinedObject)
//               });

//               if (response.ok) {
//                   const responseData = await response.json();
//                   console.log('Data and image inserted successfully:', responseData);
//                   // Handle success (e.g., show a success message to the user)
//               } else {
//                   console.error('Error inserting data and image:', response.status);
//                   // Handle error (e.g., show an error message to the user)
//               }
//           } catch (error) {
//               console.error('Error inserting data and image:', error);
//               // Handle network errors or other exceptions
//           }
//       };
//       reader.readAsDataURL(file);
//   }
// })

// // Function to upload the image and return its URL
// async function uploadImage(base64Image) {
//   try {
//       // Simulate image upload (replace with your actual logic)
//       // For example, you might use a cloud storage service or your server
//       const uploadedImageUrl = await simulateImageUpload(base64Image);

//       // Return the image URL
//       return uploadedImageUrl;
//   } catch (error) {
//       console.error('Error uploading image:', error);
//       // Handle any errors (e.g., show an error message to the user)
//       throw error; // Propagate the error
//   }
// }

// // Simulate image upload (replace with your actual logic)
// async function simulateImageUpload(base64Image) {
//   // In a real-world scenario, you'd upload the image to your server or cloud storage
//   // Here, we'll just simulate a delay and return a placeholder URL
//   await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay

//   // Replace this with your actual image upload logic
//   // Example: Upload to Amazon S3, Google Cloud Storage, etc.
//   const placeholderImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSqGrUAJ2b2d1rtxG13YPwK65rWVgtxORPyg&s';

//   return placeholderImageUrl;
// }


// // const form = document.getElementById('myForm');
// // form.addEventListener('submit', async (event) => {
// //     event.preventDefault(); // Prevent page refresh

// //     const name = document.getElementById('mr2').value;
// //     const email = document.getElementById('mr1').value;
// //     const imageInput = document.getElementById('imageInput');
// //     const imageFile = imageInput.files[0];

// //     const formData = new FormData(form);
// //     formData.append('name', name);
// //     formData.append('image', imageFile);
// //     formData.append('email', email);
// //     data=Object.fromEntries(formData);

// //     try {
// //         const response = await fetch('http://ashello-001-site1.ktempurl.com/api/services', {
// //             method: 'POST',
// //             body: formData,
// //             headers: {
// //                 'Content-Type': 'application/json', // Set the correct content type
// //             },
// //             mode: 'no-cors', // Use no-cors mode

// //         });

// //         if (response.ok) {
// //             const responseData = await response.json();
// //             console.log('Data and image inserted successfully:', responseData);
// //             // Handle success (e.g., show a success message to the user)
// //         } else {
// //             console.error('Error inserting data and image:', response.status);
// //             // Handle error (e.g., show an error message to the user)
// //         }
// //     } catch (error) {
// //         console.error('Error inserting data and image:', error);
// //         // Handle network errors or other exceptions
// //     }
// // });

// // const form = document.getElementById('myForm');
// // form.addEventListener('submit', handlesubmit);
// // function handlesubmit(event){
// //     event.preventDefault();
// //     const formData = new FormData(form);
    
// //     let data=Object.fromEntries(formData);
// //     let jsondata=JSON.stringify(data);
// //     fetch('http://ashello-001-site1.ktempurl.com/api/services',{
// //         method:'POST',
// //         headers: {
// //             'Content-Type':'application/json'
// //         },
// //         body:jsondata
// //     }).then(res => res.json())
// //     .then(result => console.log(result))
// //     .catch(err => console.log(err))
// // }

// // const form = document.getElementById('myForm');
// // form.addEventListener('submit', async (event) => {
// //     event.preventDefault(); // Prevent page refresh

// //     const name = document.getElementById('mr2').value;
// //     const email = document.getElementById('mr1').value;

// //     const data = {
// //        "ServiceName" :name,
// //         "ServiceNameAr":email,
// //         // Add other properties if needed
// //     };
// //     let headers = new Headers();
// //     headers.append('Content-Type', 'application/json');
// //     headers.append('Accept', 'application/json');
// //     // headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));
// //     headers.append('Origin', 'http://localhost:3000');
// //     try {
// //         const response = await fetch('http://ashello-001-site1.ktempurl.com/api/services', {
// //             mode: 'cors', // This ensures CORS is used
// //             // credentials: 'include', // This includes cookies with the request
// //             headers: headers,
// //             method: 'POST',
            
// //             body: JSON.stringify(data),
// //         });

// //         if (response.ok) {
// //             const responseData = await response.json();
// //             console.log('Data inserted successfully:', responseData);
// //             // Handle success (e.g., show a success message to the user)
// //         } else {
// //             console.error('Error inserting data:', response.status);
// //             // Handle error (e.g., show an error message to the user)
// //         }
// //     } catch (error) {
// //         console.error('Error inserting data:', error);
// //         // Handle network errors or other exceptions
// //     }
// // });


// // function performSignIn(username, password, sign_in) {
// //     // Ensure sign_in, username, and password are provided
// //     if (!sign_in || !username || !password) {
// //         console.log('Sign-in URL, username, or password is missing');
// //         return;
// //     }

// //     // Create a new Headers object
// //     let headers = new Headers();

// //     // Append necessary headers
// //     headers.append('Content-Type', 'application/json');
// //     headers.append('Accept', 'application/json');
// //     headers.append('Origin', 'http://localhost:3000');

// //     // Make the fetch call
// //     fetch(sign_in, {
// //         mode: 'cors', // This ensures CORS is used
// //         credentials: 'include', // This includes cookies with the request
// //         method: 'POST',
// //         headers: headers,
// //         body: JSON.stringify({ username, password })
// //     })
// //     .then(response => {
// //         if (!response.ok) {
// //             throw new Error('Network response was not ok ' + response.statusText);
// //         }
// //         return response.json();
// //     })
// //     .then(json => console.log(json))
// //     .catch(error => console.log('Authorization failed: ' + error.message));
// // }


// // magdy
// // document.querySelector('#myForm').addEventListener('submit', async (event) => {
// //     event.preventDefault(); // Prevent form submission
// //     // const formData = new FormData(event.target);
// //     const combinedObject = {
// //                         "ServiceName": document.getElementById('mr2').value,
// //                         // "ServiceIcon": base64Image,
// //                         "ServiceNameAr": document.getElementById('mr1').value,
// //                     };
//     // const jsonObject = {};
//     // formData.forEach((value, key) => {
//     //   jsonObject[key] = value;
//     // });
//   //   const url = 'https://ashello-001-site1.ktempurl.com/api/Services';
//   //   try {
//   //     const response = await fetch(url, {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //           // 'Content-Type': 'application/x-www-form-urlencoded'
//   //       },
//   //       body: combinedObject,
//   //     });
//   //     if (response.ok) {
//   //       // Handle success
//   //       console.log('Data sent successfully!');
//   //     } else {
//   //       // Handle error
//   //       console.error('Error sending data.');
//   //     }
//   //   } catch (error) {
//   //     console.error('Network error:', error);
//   //   }
//   // });

//   console.log('ziad');


  
// //   const btn=document.querySelector(".addservice");
// //   btn.addEventListener('click',submitForm());
  

// // nada
// // const form = document.getElementById('myForm');
// // form.addEventListener('submit', async (event) => {
// //     event.preventDefault(); // Prevent page refresh

// //     const name = document.getElementById('mr2').value;
// //     const email = document.getElementById('mr1').value;

// //     // const data = {
// //     //    "ServiceName" :name,
// //     //     "ServiceNameAr":email,
// //     //     // Add other properties if needed
// //     // };
// //     const fileInput = document.getElementById('imageInput');
// //     const file = fileInput.files[0];

// //     if (file) {
// //         const reader = new FileReader();
// //         reader.onload = async function (e) {
// //             const base64Image = e.target.result;

// //             // Combine data and image into a single object
// //             const combinedObject = {
// //                 "ServiceName": name,
// //                 "ServiceIcon": base64Image,
// //                 "ServiceNameAr": email,
// //             };
// //             let headers = new Headers();
// //             headers.append('Content-Type', 'application/json');
// //             headers.append('Accept', 'application/json');
// //             // headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));
// //             headers.append('Origin', 'http://localhost:3000');
// //             try {
// //                 const response = await fetch('http://ashello-001-site1.ktempurl.com/api/Services', {
// //                   //  mode: 'cors', // This ensures CORS is used
// //                     // credentials: 'include', // This includes cookies with the request
// //                     headers: headers,
// //                     method: 'POST',
                    
// //                     body: JSON.stringify(combinedObject),
// //                 });

// //                 if (response.ok) {
// //                     const responseData = await response.json();
// //                     console.log('Data inserted successfully:', responseData);
// //                     // Handle success (e.g., show a success message to the user)
// //                 } else {
// //                     console.error('Error inserting data:', response.status);
// //                     // Handle error (e.g., show an error message to the user)
// //                 }
// //             } catch (error) {
// //                 console.error('Error inserting data:', error);
// //                 // Handle network errors or other exceptions
// //             }
// //         };  
// //          reader.readAsDataURL(file);

// //     }
// // });

// console.log('ziadsz');
// const serviceNameArabic = document.getElementById('mr1').value;
// const serviceNameEnglish = document.getElementById('mr2').value;
// const imageInput = document.getElementById('imageInput');
// const selectedImage = imageInput.files[0]; // Get the selected image file
// const formData = new FormData();
// formData.append('ServiceName', serviceNameEnglish);
// formData.append('ServiceNameAr', serviceNameArabic);
// formData.append('ServiceIcon', selectedImage);
// const apiUrl = 'http://ashello-001-site1.ktempurl.com/api/services';

// fetch(apiUrl, {
//   method: 'POST',
//   body: formData,
// })
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('Data sent successfully:', data);
//     // Handle any further actions (e.g., display success message)
//   })
//   .catch(error => {
//     console.error('Error:', error);
//     // Handle error (e.g., display error message)
//   });

// Assuming you have already retrieved the input elements
const serviceNameArabicInput = document.getElementById('mr1');
const serviceNameEnglishInput = document.getElementById('mr2');
const imageInput = document.getElementById('imageInput');

// Listen for input changes
// serviceNameArabicInput.addEventListener('input', sendData);
// serviceNameEnglishInput.addEventListener('input', sendData);
// imageInput.addEventListener('change', sendData);
const btn=document.querySelector("#submitButton");
btn.addEventListener("click",sendData);
function sendData(event) {
  event.preventDefault(); 
  const serviceNameArabic = serviceNameArabicInput.value;
  const serviceNameEnglish = serviceNameEnglishInput.value;
  const selectedImage = imageInput.files[0];

  const formData = new FormData();
  formData.append('ServiceName', serviceNameEnglish);
  formData.append('ServiceNameAr', serviceNameArabic);
  formData.append('ServiceIcon', selectedImage);

  const apiUrl = 'http://ashello-001-site1.ktempurl.com/api/services';

  fetch(apiUrl, {
    method: 'POST',
    body: formData,
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Data sent successfully:', data);
      // Handle any further actions (e.g., display success message)
    })
    .catch(error => {
      console.error('Error:', error);
      // Handle error (e.g., display error message)
    });
}

// const serviceNameArabicInput = document.getElementById('mr1');
// const serviceNameEnglishInput = document.getElementById('mr2');
// const imageInput = document.getElementById('imageInput');
// const submitButton = document.getElementById('submitButton');

// // Listen for the submit button click
// submitButton.addEventListener('click', sendData);

// function sendData() {
//   const serviceNameArabic = serviceNameArabicInput.value;
//   const serviceNameEnglish = serviceNameEnglishInput.value;
//   const selectedImage = imageInput.files[0];

//   const formData = new FormData();
//   formData.append('ServiceName', serviceNameEnglish);
//   formData.append('ServiceNameAr', serviceNameArabic);
//   formData.append('ServiceIcon', selectedImage);

//   const apiUrl = 'http://ashello-001-site1.ktempurl.com/api/services';

//   fetch(apiUrl, {
//     method: 'POST',
//     body: formData,
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log('Data sent successfully:', data);
//       // Handle any further actions (e.g., display success message)
//     })
//     .catch(error => {
//       console.error('Error:', error);
//       // Handle error (e.g., display error message)
//     });
// }
