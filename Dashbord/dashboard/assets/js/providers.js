//     async function fetchData() {
//         try {
//             // function setColSpan(a,b) {
//             //     let ser=' ';
//             //     const apiUrl = b; // Replace with your API URL
//             //     fetch(apiUrl)
//             //         .then(response => {
//             //             if (!response.ok) {
//             //                  throw new Error('Network response was not ok');
//             //             }
//             //          return response.json();
//             //         })
//             //         .then(data => {
//             //             console.log('Retrieved object:', data);
//             //             data.forEach(item => {
//             //             ser=item.ServiceName;
//             //             });
//             //             var table = document.getElementById('myTable');
//             //             var row = table.insertRow();
//             //             var cell = row.insertCell(); 
//             //             cell.innerHTML = `Num of Providers in the ${ser} job = ${a}`;
//             //             cell.colSpan = 6; 
//             //             cell.classList.add("merged-cell");
//             //          })
//             //         .catch(error => {
//             //             console.error('Error:', error);
//             //         });
//             // }

//             let sum1=0;
//             const response = await fetch('http://ashello-001-site1.ktempurl.com/api/Provider'); 
//             const data = await response.json();
//             const response22 = await fetch('http://ashello-001-site1.ktempurl.com/api/services'); 
//             const data22 =await response22.json();
//             data.forEach(item => {
//                 sum1+=1;
//                 const mark=1;
//                 const table = document.getElementById('myTable');
//                 const newRow = table.insertRow();
//                 const cell1 = newRow.insertCell(0);
//                 const cell2 = newRow.insertCell(1);
//                 const cell3 = newRow.insertCell(2);
//                 const cell4 = newRow.insertCell(3);
// 				const cell5 = newRow.insertCell(4);
// 				const cell6 = newRow.insertCell(5);
//                 cell1.innerHTML = item.ProvicderId;
//                 cell2.innerHTML = item.ProviderName;
//                 data22.forEach(item22 =>{
//                     if(item22.ServiceId==item.ServiceId){
//                         cell4.innerHTML = item22.ServiceNameAr;
//                         cell3.innerHTML = item22.ServiceName;
//                     }
//                 })
//                 cell5.innerHTML = item.Area;
//                 // const id=item.ProviderName;
//                 cell6.innerHTML = `<button class='removeprovider ${mark}' data-providerid="${item.ProviderId}">Remove</button>`;
//                 // const btn=document.querySelector(".removeprovider");
//                 // btn.classList.add(item.ProvicderId)
//                 // console.log(btn.classList.item(1))

//                 // sum1+=1;

//             });
//             // const btn=document.querySelector(".removeprovider");
//                 // console.log(btn.classList)
//             // console.log(sum1);
//             // setColSpan(sum1,'http://ashello-001-site1.ktempurl.com/api/ServiceProviders/1');

//             // let sum2=0;
//             // const response2 = await fetch('http://ashello-001-site1.ktempurl.com/api/ServiceProviders/2'); 
//             // const data2 = await response2.json();
//             // data2.forEach(item => {
//             //     const table = document.getElementById('myTable');
//             //     const newRow = table.insertRow();
//             //     const cell1 = newRow.insertCell(0);
//             //     const cell2 = newRow.insertCell(1);
//             //     const cell3 = newRow.insertCell(2);
//             //     const cell4 = newRow.insertCell(3);
// 			// 	const cell5 = newRow.insertCell(4);
// 			// 	const cell6 = newRow.insertCell(5);
//             //     cell1.innerHTML = item.ProvicderId;
//             //     cell2.innerHTML = item.ProviderName;
//             //     cell3.innerHTML = item.ServiceName;
// 			// 	cell4.innerHTML = item.ServiceNameAr;
//             //     cell5.innerHTML = item.Area;
//             //     cell6.innerHTML = "<button class='removeprovider'>Remove</button>";
//             //     sum2+=1;
//             // });
//             // console.log(sum2);
//             // setColSpan(sum2,'http://ashello-001-site1.ktempurl.com/api/ServiceProviders/2');

//             // let sum3=0;
//             // const response3 = await fetch('http://ashello-001-site1.ktempurl.com/api/ServiceProviders/3'); 
//             // const data3 = await response3.json();
//             // data3.forEach(item => {
//             //     const table = document.getElementById('myTable');
//             //     const newRow = table.insertRow();
//             //     const cell1 = newRow.insertCell(0);
//             //     const cell2 = newRow.insertCell(1);
//             //     const cell3 = newRow.insertCell(2);
//             //     const cell4 = newRow.insertCell(3);
// 			// 	const cell5 = newRow.insertCell(4);
// 			// 	const cell6 = newRow.insertCell(5);
//             //     cell1.innerHTML = item.ProvicderId;
//             //     cell2.innerHTML = item.ProviderName;
//             //     cell3.innerHTML = item.ServiceName;
// 			// 	cell4.innerHTML = item.ServiceNameAr;
//             //     cell5.innerHTML = item.Area;
//             //     cell6.innerHTML = "<button class='removeprovider'>Remove</button>";
//             //     sum3+=1;
//             // });
//             // console.log(sum3);
//             // setColSpan(sum3,'http://ashello-001-site1.ktempurl.com/api/ServiceProviders/3');

//             // let sum4=0;
//             // const response4 = await fetch('http://ashello-001-site1.ktempurl.com/api/ServiceProviders/4'); 
//             // const data4 = await response4.json();
//             // data4.forEach(item => {
//             //     const table = document.getElementById('myTable');
//             //     const newRow = table.insertRow();
//             //     const cell1 = newRow.insertCell(0);
//             //     const cell2 = newRow.insertCell(1);
//             //     const cell3 = newRow.insertCell(2);
//             //     const cell4 = newRow.insertCell(3);
// 			// 	const cell5 = newRow.insertCell(4);
// 			// 	const cell6 = newRow.insertCell(5);
//             //     cell1.innerHTML = item.ProvicderId;
//             //     cell2.innerHTML = item.ProviderName;
//             //     cell3.innerHTML = item.ServiceName;
// 			// 	cell4.innerHTML = item.ServiceNameAr;
//             //     cell5.innerHTML = item.Area;
//             //     cell6.innerHTML = "<button class='removeprovider'>Remove</button>";
//             //     sum4+=1;
//             // });
//             // console.log(sum4);
//             // setColSpan(sum4,'http://ashello-001-site1.ktempurl.com/api/ServiceProviders/4');

//             // let sum5=0;
//             // const response5 = await fetch('http://ashello-001-site1.ktempurl.com/api/ServiceProviders/5'); 
//             // const data5 = await response5.json();
//             // data5.forEach(item => {
//             //     const table = document.getElementById('myTable');
//             //     const newRow = table.insertRow();
//             //     const cell1 = newRow.insertCell(0);
//             //     const cell2 = newRow.insertCell(1);
//             //     const cell3 = newRow.insertCell(2);
//             //     const cell4 = newRow.insertCell(3);
// 			// 	const cell5 = newRow.insertCell(4);
// 			// 	const cell6 = newRow.insertCell(5);
//             //     cell1.innerHTML = item.ProvicderId;
//             //     cell2.innerHTML = item.ProviderName;
//             //     cell3.innerHTML = item.ServiceName;
// 			// 	cell4.innerHTML = item.ServiceNameAr;
//             //     cell5.innerHTML = item.Area;
//             //     cell6.innerHTML = "<button class='removeprovider'>Remove</button>";
//             //     sum5+=1;
//             // });
//             // console.log(sum5);
//             // setColSpan(sum5,'http://ashello-001-site1.ktempurl.com/api/ServiceProviders/5');
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     }
	

//     fetchData();


// // const btn=document.querySelector(".removeprovider");
// // function remove(){
// //     let row_Id=btn.classList;
// // }
// // btn.addEventListener('click',remove());

// // Attach event listeners to Remove buttons
// document.querySelectorAll('.removeprovider').forEach(button => {
//     button.addEventListener('click', async () => {
//         const rowToRemove = button.closest('tr');
//         if (rowToRemove) {
//             // Remove from table
//             rowToRemove.remove();
//             // Make an API call to delete the item from the server
//             try {
//                 // const response = await fetch(`http://ashello-001-site1.ktempurl.com/api/ServiceProviders/${button.dataset.providerid}`, {
//                 const response = await fetch(`http://ashello-001-site1.ktempurl.com/api/Provider`, {    
//                     method: 'DELETE',
//                 });
//                 if (!response.ok) {
//                     throw new Error('Network response was not ok');
//                 }
//                 console.log(`Provider ${button.dataset.providerid} deleted successfully.`);
//             } catch (error) {
//                 console.error('Error deleting provider:', error);
//             }
//         }
//     });
// });

// // async function fetchData() {
// //     try {
// //         function setColSpan(a, b) {
// //             let ser = ' ';
// //             const apiUrl = b; // Replace with your API URL
// //             fetch(apiUrl)
// //                 .then(response => {
// //                     if (!response.ok) {
// //                         throw new Error('Network response was not ok');
// //                     }
// //                     return response.json();
// //                 })
// //                 .then(data => {
// //                     console.log('Retrieved object:', data);
// //                     data.forEach(item => {
// //                         ser = item.ServiceName;
// //                     });
// //                     var table = document.getElementById('myTable');
// //                     var row = table.insertRow();
// //                     var cell = row.insertCell();
// //                     cell.innerHTML = `Number of Providers in the ${ser} job = ${a}`;
// //                     cell.colSpan = 6;
// //                     cell.classList.add("merged-cell");
// //                 })
// //                 .catch(error => {
// //                     console.error('Error:', error);
// //                 });
// //         }

// //         let sum1 = 0;
// //         const response = await fetch('http://ashello-001-site1.ktempurl.com/api/ServiceProviders/1');
// //         const data = await response.json();
// //         data.forEach(item => {
// //             const table = document.getElementById('myTable');
// //             const newRow = table.insertRow();
// //             const cell1 = newRow.insertCell(0);
// //             const cell2 = newRow.insertCell(1);
// //             const cell3 = newRow.insertCell(2);
// //             const cell4 = newRow.insertCell(3);
// //             const cell5 = newRow.insertCell(4);
// //             const cell6 = newRow.insertCell(5);
// //             cell1.innerHTML = item.ProvicderId;
// //             cell2.innerHTML = item.ProviderName;
// //             cell3.innerHTML = item.ServiceName;
// //             cell4.innerHTML = item.ServiceNameAr;
// //             cell5.innerHTML = item.Area;
// //             cell6.innerHTML = `<button class='removeprovider' data-providerid="${item.ProviderId}">Remove</button>`;
// //             sum1 += 1;
// //         });

// //         console.log(sum1);
// //         setColSpan(sum1, 'http://ashello-001-site1.ktempurl.com/api/ServiceProviders/1');

// //         let sum2 = 0;
// //         const response2 = await fetch('http://ashello-001-site1.ktempurl.com/api/ServiceProviders/2');
// //         const data2 = await response2.json();
// //         data2.forEach(item => {
// //             const table = document.getElementById('myTable');
// //             const newRow = table.insertRow();
// //             const cell1 = newRow.insertCell(0);
// //             const cell2 = newRow.insertCell(1);
// //             const cell3 = newRow.insertCell(2);
// //             const cell4 = newRow.insertCell(3);
// //             const cell5 = newRow.insertCell(4);
// //             const cell6 = newRow.insertCell(5);
// //             cell1.innerHTML = item.ProvicderId;
// //             cell2.innerHTML = item.ProviderName;
// //             cell3.innerHTML = item.ServiceName;
// //             cell4.innerHTML = item.ServiceNameAr;
// //             cell5.innerHTML = item.Area;
// //             cell6.innerHTML = `<button class='removeprovider' data-providerid="${item.ProviderId}">Remove</button>`;
// //             sum2 += 1;
// //         });

// //         console.log(sum2);
// //         setColSpan(sum2, 'http://ashello-001-site1.ktempurl.com/api/ServiceProviders/2');

// //         let sum3 = 0;
// //         const response3 = await fetch('http://ashello-001-site1.ktempurl.com/api/ServiceProviders/3');
// //         const data3 = await response3.json();
// //         data3.forEach(item => {
// //             const table = document.getElementById('myTable');
// //             const newRow = table.insertRow();
// //             const cell1 = newRow.insertCell(0);
// //             const cell2 = newRow.insertCell(1);
// //             const cell3 = newRow.insertCell(2);
// //             const cell4 = newRow.insertCell(3);
// //             const cell5 = newRow.insertCell(4);
// //             const cell6 = newRow.insertCell(5);
// //             cell1.innerHTML = item.ProvicderId;
// //             cell2.innerHTML = item.ProviderName;
// //             cell3.innerHTML = item.ServiceName;
// //             cell4.innerHTML = item.ServiceNameAr;
// //             cell5.innerHTML = item.Area;
// //             cell6.innerHTML = `<button class='removeprovider' data-providerid="${item.ProviderId}">Remove</button>`;
// //             sum3 += 1;
// //         });

// //         console.log(sum3);
// //         setColSpan(sum3, 'http://ashello-001-site1.ktempurl.com/api/ServiceProviders/3');
// //     } catch (error) {
// //         console.error('Error:', error);
// //     }
// // }

// // fetchData();


// // async function fetchData() {
// //     try {
// //         // Fetch data from the first API
// //         const response = await fetch('http://ashello-001-site1.ktempurl.com/api/Provider'); 
// //         const providers = await response.json();

// //         // Fetch data from the second API
// //         const response22 = await fetch('http://ashello-001-site1.ktempurl.com/api/services'); 
// //         const services = await response22.json();

// //         // Create a mapping from ServiceId to Service details
// //         const serviceMap = {};
// //         services.forEach(service => {
// //             serviceMap[service.ServiceId] = service;
// //         });

// //         // Insert provider rows into the table
// //         const table = document.getElementById('myTable');
// //         providers.forEach(provider => {
// //             const newRow = table.insertRow();
// //             const cell1 = newRow.insertCell(0);
// //             const cell2 = newRow.insertCell(1);
// //             const cell3 = newRow.insertCell(2);
// //             const cell4 = newRow.insertCell(3);
// //             const cell5 = newRow.insertCell(4);
// //             const cell6 = newRow.insertCell(5);

// //             cell1.innerHTML = provider.ProviderId;
// //             cell2.innerHTML = provider.ProviderName;
// //             const service = serviceMap[provider.ServiceId];
// //             if (service) {
// //                 cell3.innerHTML = service.ServiceName;
// //                 cell4.innerHTML = service.ServiceNameAr;
// //             } else {
// //                 cell3.innerHTML = 'Unknown';
// //                 cell4.innerHTML = 'Unknown';
// //             }
// //             cell5.innerHTML = provider.Area;
// //             cell6.innerHTML = `<button class='removeprovider' data-providerid="${provider.ProviderId}">Remove</button>`;
// //         });

// //         // Add event listeners to the remove buttons after they are created
// //         document.querySelectorAll('.removeprovider').forEach(button => {
// //             button.addEventListener('click', async () => {
// //                 const rowToRemove = button.closest('tr');
// //                 if (rowToRemove) {
// //                     // Remove from table
// //                     rowToRemove.remove();
// //                     // Make an API call to delete the item from the server
// //                     try {
// //                         const response = await fetch(`http://ashello-001-site1.ktempurl.com/api/Provider`, {    
// //                             method: 'DELETE',
// //                         });
// //                         if (!response.ok) {
// //                             throw new Error('Network response was not ok');
// //                         }
// //                         console.log(`Provider ${button.dataset.providerid} deleted successfully.`);
// //                     } catch (error) {
// //                         console.error('Error deleting provider:', error);
// //                     }
// //                 }
// //             });
// //         });
// //     } catch (error) {
// //         console.error('Error fetching data:', error);
// //     }
// // }

// // // Call the fetchData function to load the data and set up the event listeners
// // fetchData();

// async function fetchData() {
//     try {
//         // Fetch data from the first API
//         const response = await fetch('http://ashello-001-site1.ktempurl.com/api/Provider'); 
//         const providers = await response.json();

//         console.log(providers); // Log providers to check the data

//         // Fetch data from the second API
//         const response22 = await fetch('http://ashello-001-site1.ktempurl.com/api/services'); 
//         const services = await response22.json();

//         // Create a mapping from ServiceId to Service details
//         const serviceMap = {};
//         services.forEach(service => {
//             serviceMap[service.ServiceId] = service;
//         });

//         // Insert provider rows into the table
//         const table = document.getElementById('myTable');
//         providers.forEach(provider => {
//             const newRow = table.insertRow();
//             const cell1 = newRow.insertCell(0);
//             const cell2 = newRow.insertCell(1);
//             const cell3 = newRow.insertCell(2);
//             const cell4 = newRow.insertCell(3);
//             const cell5 = newRow.insertCell(4);
//             const cell6 = newRow.insertCell(5);

//             cell1.innerHTML = provider.ProvicderId;
//             cell2.innerHTML = provider.ProviderName;
//             const service = serviceMap[provider.ServiceId];
//             if (service) {
//                 cell3.innerHTML = service.ServiceName;
//                 cell4.innerHTML = service.ServiceNameAr;
//             } else {
//                 cell3.innerHTML = 'Unknown';
//                 cell4.innerHTML = 'Unknown';
//             }
//             cell5.innerHTML = provider.Area;
//             cell6.innerHTML = `<button class='removeprovider' data-providerid="${provider.ProvicderId}">Remove</button>`;
//         });

//         // Add event listeners to the remove buttons after they are created
//         document.querySelectorAll('.removeprovider').forEach(button => {
//             button.addEventListener('click', async () => {
//                 const providerId = button.dataset.providerid;
//                 console.log(providerId); // Log providerId to check its value
//                 const rowToRemove = button.closest('tr');
//                 if (rowToRemove) {
//                     // Make an API call to delete the item from the server
//                     try {
//                         const response = await fetch(`http://ashello-001-site1.ktempurl.com/api/Provider/${providerId}`, {    
//                             method: 'DELETE',
//                         });
//                         if (!response.ok) {
//                             throw new Error('Network response was not ok');
//                         }
//                         console.log(`Provider ${providerId} deleted successfully.`);
//                         // Remove from table
//                         rowToRemove.remove();
//                     } catch (error) {
//                         console.error('Error deleting provider:', error);
//                     }
//                 }
//             });
//         });
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// // Call the fetchData function to load the data and set up the event listeners
// fetchData();

async function fetchData() {
    try {
        // Fetch data from the first API
        const response = await fetch('http://ashello-001-site1.ktempurl.com/api/Provider'); 
        const providers = await response.json();

        console.log(providers); // Log providers to check the data

        // Fetch data from the second API
        const response22 = await fetch('http://ashello-001-site1.ktempurl.com/api/services'); 
        const services = await response22.json();

        // Create a mapping from ServiceId to Service details
        const serviceMap = {};
        services.forEach(service => {
            serviceMap[service.ServiceId] = service;
        });

        // Create a mapping from ServiceId to the number of providers
        const providerCount = {};
        providers.forEach(provider => {
            if (!providerCount[provider.ServiceId]) {
                providerCount[provider.ServiceId] = 0;
            }
            providerCount[provider.ServiceId]++;
        });

        // Insert provider rows into the table
        const table = document.getElementById('myTable');
        providers.forEach(provider => {
            const newRow = table.insertRow();
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            const cell4 = newRow.insertCell(3);
            const cell5 = newRow.insertCell(4);
            const cell6 = newRow.insertCell(5);

            cell1.innerHTML = provider.ProvicderId;
            cell2.innerHTML = provider.ProviderName;
            const service = serviceMap[provider.ServiceId];
            if (service) {
                cell3.innerHTML = service.ServiceName;
                cell4.innerHTML = service.ServiceNameAr;
            } else {
                cell3.innerHTML = 'Unknown';
                cell4.innerHTML = 'Unknown';
            }
            cell5.innerHTML = provider.Area;
            cell6.innerHTML = `<button class='removeprovider' data-providerid="${provider.ProvicderId}">Remove</button>`;
        });

        // Add event listeners to the remove buttons after they are created
        document.querySelectorAll('.removeprovider').forEach(button => {
            button.addEventListener('click', async () => {
                const providerId = button.dataset.providerid;
                console.log(providerId); // Log providerId to check its value
                const rowToRemove = button.closest('tr');
                if (rowToRemove) {
                    // Make an API call to delete the item from the server
                    try {
                        const response = await fetch(`http://ashello-001-site1.ktempurl.com/api/Provider/${providerId}`, {    
                            method: 'DELETE',
                        });
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        console.log(`Provider ${providerId} deleted successfully.`);
                        // Remove from table
                        rowToRemove.remove();
                    } catch (error) {
                        console.error('Error deleting provider:', error);
                    }
                }
            });
        });

        // Display the count of providers for each service
        const countTable = document.getElementById('countTable');
        Object.keys(providerCount).forEach(serviceId => {
            const service = serviceMap[serviceId];
            const newRow = countTable.insertRow();
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);

            cell1.innerHTML = serviceId;
            cell2.innerHTML = service ? service.ServiceName : 'Unknown';
            cell3.innerHTML = providerCount[serviceId];
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the fetchData function to load the data and set up the event listeners
fetchData();



