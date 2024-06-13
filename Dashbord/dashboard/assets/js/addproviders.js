// async function fetchData() {
//     try {
//         const response = await fetch('http://ashello-001-site1.ktempurl.com/api/Provider'); 
//         const data = await response.json();
//         data.forEach(item => {
//             const table = document.getElementById('myTable');
//             const newRow = table.insertRow();
//             const cell1 = newRow.insertCell(0);
//             const cell2 = newRow.insertCell(1);
//             const cell3 = newRow.insertCell(2);
//             const cell4 = newRow.insertCell(3);
//             const cell5 = newRow.insertCell(4);
//             const cell6 = newRow.insertCell(5);
//             const cell7 = newRow.insertCell(6);
//             const cell8 = newRow.insertCell(7);
//             cell1.innerHTML = item.ProvicderId;
//             cell2.innerHTML = item.ProviderName;
//             cell3.innerHTML = item.ServiceName;
//             cell4.innerHTML = item.ServiceNameAr;
//             cell5.innerHTML = item.Area;
//             cell6.innerHTML = item.Area
//             cell7.innerHTML = item.Area;
//             cell8.innerHTML = "<a href='removeprovider' class='removeprovider'>confirm</a> <a href='removeprovider' class='removeprovider'>cancel</a>"

//         });
//         // 
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }


// fetchData();


// const btn=document.querySelector("#btnz");
// const imageElement = document.getElementById("targ") // Select the image element
// const imageUrl = imageElement.src;
// console.log("Image URL:", imageUrl);
// function add(){
//     const id=document.querySelector("#a");
//         const name=document.querySelector("#b");
//         const city=document.querySelector("#c");
//         // const email=document.querySelector("#d");
//         // const ph=document.querySelector("#f");
//         // const job=document.querySelector("#g");
//         // const img=document.querySelector("#h");
    
    
//         const postData = {
//             "ProvicderId": id,
//             "ProviderName": name,
//             "Description": "مهارات فنية متقدمة في تركيب وصيانة الأنظمة الكهربائية",
//             "Lat": 26.5609,
//             "Long": 31.7441,
//             "ImageName": "https://images.pexels.com/photos/3687977/pexels-photo-3687977.jpeg",
//             "Rating": 2,
//             "Area": city,
//             "ratting": 2.75
//           };
          
//           fetch('http://ashello-001-site1.ktempurl.com/api/Provider', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(postData),
//           })
//             .then(response => response.json())
//             .then(result => console.log('Data added successfully:', result))
//             .catch(error => console.error('Error adding data:', error));
          

// }
        
// const btn = document.getElementById('btnz');
// btn.onclick
// btn.addEventListener('click', async (event) => {
//     event.preventDefault(); // Prevent page refresh

//     const id=document.querySelector("#a");
//         const name=document.querySelector("#b");
//         const city=document.querySelector("#c");

//         const postData = {
//             "ProvicderId": id,
//             "ProviderName": name,
//             "Description": "مهارات فنية متقدمة في تركيب وصيانة الأنظمة الكهربائية",
//             "Lat": 26.5609,
//             "Long": 31.7441,
//             "ImageName": "https://images.pexels.com/photos/3687977/pexels-photo-3687977.jpeg",
//             "Rating": 2,
//             "Area": city,
//             "ratting": 2.75
//           };
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//     headers.append('Accept', 'application/json');
//     // headers.append('Authorization', 'Basic ' + btoa(username + ":" + password));
//     headers.append('Origin', 'http://localhost:3000');
//     try {
//         const response = await fetch('http://ashello-001-site1.ktempurl.com/api/Services', {
//           //  mode: 'cors', // This ensures CORS is used
//             // credentials: 'include', // This includes cookies with the request
//             headers: headers,
//             method: 'POST',
            
//             body: JSON.stringify(postData),
//         });

//         if (response.ok) {
//             const responseData = await response.json();
//             console.log('Data inserted successfully:', responseData);
//             // Handle success (e.g., show a success message to the user)
//         } else {
//             console.error('Error inserting data:', response.status);
//             // Handle error (e.g., show an error message to the user)
//         }
//     } catch (error) {
//         console.error('Error inserting data:', error);
//         // Handle network errors or other exceptions
//     }
// });

