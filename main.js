// function getSelectValue(){
//     let selectedValue = document.querySelector('facultyName').value;
//     console.log(selectedValue);
//   }

//show / hide button
const toggleBtn = document.querySelector('#toggleBtn');
const divList = document.querySelector('.formAddStudent');

toggleBtn.addEventListener('click', () => {
    if(divList.style.display === 'none'){
        divList.style.display = 'block';
        toggleBtn.innerHTML = 'Hide Form Add New Student';
    } else {
        divList.style.display = 'none';
        toggleBtn.innerHTML = 'Show Form Add New Student';
    }
}
)

// faculty - prodi drop down dependent select box
function random_function()
        {
            var a=document.getElementById("facultyInput").value;
            if(a==="Pascasarjana")
            {
                var arr=["Magister Manajemen","Magister Teologi"];
            }
            else if(a==="Fakultas Filsafat")
            {
                var arr=["Ilmu Filsafat"];
            }
            else if(a==="Fakultas Keguruan dan Ilmu Pendidikan")
            {
                var arr=["Pendidikan Agama", "Pendidikan Bahasa Inggris", "Pendidikan Ekonomi", "Pendidikan Luar Sekolah"];
            }
            else if(a==="Fakultas Ekonomi dan Bisnis")
            {
                var arr=["Akuntansi", "Manajemen"];
            }
            else if(a==="Fakultas Pertanian")
            {
                var arr=["Agroteknologi"];
            }
            else if(a==="Fakultas Ilmu Komputer")
            {
                var arr=["Informatika", "Sistem Informasi"];
            }
            else if(a==="Fakultas Keperawatan")
            {
                var arr=["Profesi Ners", "Keperawatan"];
            }
            else if(a==="Akademi Sekretari Manajemen Indonesia Klabat")
            {
                var arr=["Sekretari (D3)"];
            }
            
         
            var string="";
         
            for(i=0;i<arr.length;i++)
            {
                string=string+"<option value="+arr[i]+">"+arr[i]+"</option>";
            }
            document.getElementById("prodiChoices").innerHTML=string;
        }


// button add student
let entry = document.getElementById('addStudentBtn');
entry.addEventListener("click", displayDetails);

let row = 4;

function displayDetails() {
    let NIM = document.getElementById('inputStudentIDNIM').value;
    let name = document.getElementById('inputFullName').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;

    let selectedFaculty = document.getElementById('facultyInput').selectedIndex;
    let faculty = document.getElementById('facultyInput').options;

    let selectedProdi = document.getElementById('prodiChoices').selectedIndex;
    let prodi = document.getElementById('prodiChoices').options;



    //alert if there is an empty input
    if(!NIM || !name || !gender || faculty[selectedFaculty].index=="0" || !prodi) {
        alert("Please fill all the boxes");
        return;
    }

    let display = document.getElementById("display");

    let newRow = display.insertRow(row);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);

    cell1.innerHTML = NIM;
    cell2.innerHTML = name;
    cell3.innerHTML = gender;
    cell4.innerHTML = faculty[selectedFaculty].text;
    cell5.innerHTML = prodi[selectedProdi].text;

    // cell6.innerHTML = "X";
    cell6.innerHTML += `
        <div class="action_container" style="background-color: orangered; color: white;">
            <button class="danger" onclick="remove_tr(this)">
                <i class="bi bi-person-dash-fill"></i>
            </button>
        </div>
        `;

    row++;
}


// add button delete
function create_tr(table_id) {
    let table_body = document.getElementById(table_id),
        first_tr   = table_body.firstElementChild
        tr_clone   = first_tr.cloneNode(true);

    table_body.append(tr_clone);

    clean_first_tr(table_body.firstElementChild);
}

function clean_first_tr(firstTr) {
    let children = firstTr.children;
    
    children = Array.isArray(children) ? children : Object.values(children);
    children.forEach(x=>{
        if(x !== firstTr.lastElementChild)
        {
            x.firstElementChild.value = '';
        }
    });
}

// Delete row in table
function remove_tr(This) {
    This.closest('tr').remove();
}

// Button show students by faculty
let showStudentsByFaculty = document.getElementById('showByFaculty');
showStudentsByFaculty.addEventListener("click", searchFaculty);

function searchFaculty() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("faculty").selectedIndex;
    // filter = input.value.toUpperCase();
    table = document.getElementById("display");
    tr = table.getElementsByTagName("tr");

    // let selectedFaculty = document.getElementById('facultyInput').selectedIndex;
    // let faculty = document.getElementById('facultyInput').options;
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

// Button show students by program study


//Search students by name
function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchStudentByName");
    filter = input.value.toUpperCase();
    table = document.getElementById("display");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }





